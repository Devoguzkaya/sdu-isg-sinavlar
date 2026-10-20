// Vercel Serverless Function — Secure Questions & Grading API (Hides answers from F12 / Client Bundle)
import { COURSES } from './_data/courses.js';

function normalizeTR(str) {
  if (!str) return '';
  return str
    .toString()
    .trim()
    .toLowerCase()
    .replace(/ı/g, 'i')
    .replace(/ğ/g, 'g')
    .replace(/ü/g, 'u')
    .replace(/ş/g, 's')
    .replace(/ö/g, 'o')
    .replace(/ç/g, 'c')
    .replace(/â/g, 'a')
    .replace(/[.,;:\-_/]/g, '')
    .replace(/\s+/g, ' ');
}

function isFillCorrect(userVal, validAnswers) {
  const normUser = normalizeTR(userVal);
  if (!normUser) return false;
  return validAnswers.some((ans) => normalizeTR(ans) === normUser);
}

// Strip all answers and explanations before sending questions to client
function getSanitizedCourses() {
  return COURSES.map((c) => ({
    id: c.id,
    code: c.code,
    title: c.title,
    instructor: c.instructor,
    examInfo: c.examInfo,
    color: c.color,
    hex: c.hex,
    badge: c.badge,
    tips: c.tips,
    tests: (c.tests || []).map((t) => ({
      testId: t.testId,
      title: t.title,
      shortTitle: t.shortTitle,
      theme: t.theme,
      mcStart: t.mcStart,
      fillStart: t.fillStart,
      wordBank: t.wordBank
    })),
    wordBank: c.fillQuestions
      .map((f) => f.answers[0])
      .sort((a, b) => a.localeCompare(b, 'tr')),
    mcQuestions: c.mcQuestions.map((q) => ({
      q: q.q,
      options: q.options
      // answer, explanation, optionExplanations ARE HIDDEN ON BACKEND
    })),
    fillQuestions: c.fillQuestions.map((q) => ({
      q: q.q,
      hint: q.hint
      // answers, explanation ARE HIDDEN ON BACKEND
    }))
  }));
}

export default async function handler(req, res) {
  try {
    if (req.method === 'GET') {
      return res.status(200).json({ courses: getSanitizedCourses() });
    }

    if (req.method === 'POST') {
      const body = typeof req.body === 'string' ? JSON.parse(req.body) : req.body;
      const { action } = body || {};

      // 1. Check a single MC question
      if (action === 'check_mc') {
        const { courseId, qIdx, userChoice } = body;
        const course = COURSES.find((c) => c.id === courseId);
        const q = course?.mcQuestions?.[qIdx];
        if (!q) return res.status(404).json({ error: 'Soru bulunamadı' });

        return res.status(200).json({
          correct: userChoice === q.answer,
          answer: q.answer,
          explanation: q.explanation,
          optionExplanations: q.optionExplanations || []
        });
      }

      // 2. Check or reveal a single Fill-in-the-blank question
      if (action === 'check_fill') {
        const { courseId, qIdx, val, reveal } = body;
        const course = COURSES.find((c) => c.id === courseId);
        const q = course?.fillQuestions?.[qIdx];
        if (!q) return res.status(404).json({ error: 'Soru bulunamadı' });

        const ok = reveal ? true : isFillCorrect(val, q.answers);
        return res.status(200).json({
          ok,
          correctAnswer: q.answers[0],
          explanation: q.explanation || ''
        });
      }

      // 3. Batch evaluate user's saved answers (or reveal a specific test / all tests for a course)
      if (action === 'evaluate_all') {
        const { userAnswers, revealCourseId, revealTestIdx } = body;
        const feedback = {};
        const updatedUserAnswers = userAnswers ? JSON.parse(JSON.stringify(userAnswers)) : {};

        COURSES.forEach((c) => {
          feedback[c.id] = { mc: {}, fill: {} };
          if (!updatedUserAnswers[c.id]) {
            updatedUserAnswers[c.id] = { mc: {}, fill: {} };
          }
          const st = updatedUserAnswers[c.id];
          const isRevealCourse = revealCourseId === c.id;

          c.mcQuestions.forEach((q, idx) => {
            const inTargetTest =
              revealTestIdx === undefined ||
              revealTestIdx === 'all' ||
              (idx >= revealTestIdx * 10 && idx < (revealTestIdx + 1) * 10);

            if (isRevealCourse && inTargetTest && st.mc[idx] === undefined) {
              st.mc[idx] = q.answer;
            }
            if (st.mc[idx] !== undefined) {
              feedback[c.id].mc[idx] = {
                correct: st.mc[idx] === q.answer,
                answer: q.answer,
                explanation: q.explanation,
                optionExplanations: q.optionExplanations || []
              };
            }
          });

          c.fillQuestions.forEach((q, idx) => {
            const inTargetTest =
              revealTestIdx === undefined ||
              revealTestIdx === 'all' ||
              (idx >= revealTestIdx * 5 && idx < (revealTestIdx + 1) * 5);

            if (isRevealCourse && inTargetTest && (!st.fill[idx] || !st.fill[idx].checked)) {
              st.fill[idx] = { val: q.answers[0], checked: true };
            }
            const f = st.fill[idx];
            if (f && (f.checked || (f.val && f.val.trim().length > 0))) {
              const ok = isFillCorrect(f.val, q.answers);
              st.fill[idx].ok = ok;
              feedback[c.id].fill[idx] = {
                ok,
                correctAnswer: q.answers[0],
                explanation: q.explanation || ''
              };
            }
          });
        });

        return res.status(200).json({ feedback, updatedUserAnswers });
      }

      return res.status(400).json({ error: 'Geçersiz işlem' });
    }

    return res.status(405).json({ error: 'Method Not Allowed' });
  } catch (err) {
    return res.status(500).json({ error: err.message });
  }
}
