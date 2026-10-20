import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import { pathToFileURL } from 'url';

// Local Vite dev middleware to execute Vercel /api/*.js Serverless Functions locally
function vercelApiPlugin() {
  return {
    name: 'vercel-api-dev-middleware',
    configureServer(server) {
      server.middlewares.use(async (req, res, next) => {
        if (!req.url || !req.url.startsWith('/api/')) return next();

        try {
          const urlObj = new URL(req.url, 'http://localhost');
          const routeName = urlObj.pathname.replace(/^\/api\//, '').replace(/\.js$/, '');
          const filePath = path.resolve(process.cwd(), 'api', `${routeName}.js`);

          // Parse query params
          req.query = Object.fromEntries(urlObj.searchParams.entries());

          // Parse POST body if present
          if (req.method === 'POST') {
            const chunks = [];
            for await (const chunk of req) chunks.push(chunk);
            const rawBody = Buffer.concat(chunks).toString('utf8');
            try {
              req.body = rawBody ? JSON.parse(rawBody) : {};
            } catch {
              req.body = rawBody;
            }
          }

          // Express/Vercel compatible res.status().json() helper
          res.status = (code) => {
            res.statusCode = code;
            return res;
          };
          res.json = (data) => {
            res.setHeader('Content-Type', 'application/json; charset=utf-8');
            res.end(JSON.stringify(data));
          };

          const modUrl = `${pathToFileURL(filePath).href}?t=${Date.now()}`;
          const mod = await import(modUrl);
          await mod.default(req, res);
        } catch (err) {
          res.statusCode = 500;
          res.setHeader('Content-Type', 'application/json');
          res.end(JSON.stringify({ error: err.message }));
        }
      });
    }
  };
}

export default defineConfig({
  plugins: [react(), vercelApiPlugin()]
});
