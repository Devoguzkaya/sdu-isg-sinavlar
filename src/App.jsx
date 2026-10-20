import React, { useState, useEffect, useMemo } from 'react';
import { COURSES } from './data/courses';
import {
  GraduationCap,
  Clock,
  CheckCircle2,
  XCircle,
  HelpCircle,
  RotateCcw,
  Eye,
  Lightbulb,
  BookOpen,
  ClipboardCheck,
  Sparkles,
  Award,
  Play,
  Pause,
  ListChecks,
  User,
  LogOut,
  Lock,
  UserPlus,
  LogIn
} from 'lucide-react';

const CLOUD_BUCKET = 'XDdUb2W7LRjEjWdzcBhfzB';
const USERS_CLOUD_URL = `https://kvdb.io/${CLOUD_BUCKET}/sdu_isg_users_v2`;

async function sha256Browser(str) {
  const buf = new TextEncoder().encode(str + '_sdu_isg_salt');
  const hashBuffer = await crypto.subtle.digest('SHA-256', buf);
  const hashArray = Array.from(new Uint8Array(hashBuffer));
  return hashArray.map((b) => b.toString(16).padStart(2, '0')).join('');
}

function createEmptyAnswers() {
  const init = {};
  COURSES.forEach((c) => {
    init[c.id] = { mc: {}, fill: {} };
  });
  return init;
}

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

const LETTERS = ['A', 'B', 'C', 'D', 'E'];

export default function App() {
  // Auth state
  const [currentUser, setCurrentUser] = useState(() => {
    try {
      const savedUser = localStorage.getItem('sdu_isg_auth_user_v2');
      if (savedUser) return JSON.parse(savedUser);
    } catch (e) {}
    return null;
  });

  const [authTab, setAuthTab] = useState('login'); // 'login' | 'signup'
  const [authUsername, setAuthUsername] = useState('');
  const [authPassword, setAuthPassword] = useState('');
  const [authFullName, setAuthFullName] = useState('');
  const [authError, setAuthError] = useState('');
  const [authLoading, setAuthLoading] = useState(false);

  const [activeCourseId, setActiveCourseId] = useState(COURSES[0].id);
  const [mode, setMode] = useState('study'); // 'study' | 'exam'
  const [filter, setFilter] = useState('all'); // 'all' | 'mc' | 'fill'
  const [showWordBank, setShowWordBank] = useState(true);
  const [examSubmitted, setExamSubmitted] = useState(false);

  const [cloudStatus, setCloudStatus] = useState('local'); // 'local' | 'synced' | 'saving'
  const [cloudReady, setCloudReady] = useState(false);

  const userKey = currentUser?.username || 'guest';
  const localStoreKey = `sdu_isg_react_vize_v2_${userKey}`;
  const directCloudUserUrl = `https://kvdb.io/${CLOUD_BUCKET}/sdu_isg_vize_state_${userKey}_v2`;

  const [answers, setAnswers] = useState(() => createEmptyAnswers());

  // Load user's answers from localStorage & Cloud KV whenever currentUser changes
  useEffect(() => {
    if (!currentUser) return;
    setCloudReady(false);

    // 1. Instant load from local cache
    try {
      const localSaved = localStorage.getItem(localStoreKey);
      if (localSaved) {
        setAnswers(JSON.parse(localSaved));
      } else {
        setAnswers(createEmptyAnswers());
      }
    } catch (e) {
      setAnswers(createEmptyAnswers());
    }

    if (currentUser.isGuest) {
      setCloudStatus('local');
      setCloudReady(true);
      return;
    }

    // 2. Load from Cloud KV (/api/sync?user=... or direct fallback)
    async function loadUserCloud() {
      try {
        const r = await fetch(`/api/sync?user=${encodeURIComponent(userKey)}`);
        if (r.ok) {
          const res = await r.json();
          if (res && res.configured) {
            if (res.data && Object.keys(res.data).length > 0) {
              setAnswers(res.data);
            }
            setCloudStatus('synced');
            setCloudReady(true);
            return;
          }
        }
      } catch (e) {}

      try {
        const r2 = await fetch(directCloudUserUrl);
        if (r2.ok) {
          const data = await r2.json();
          if (data && Object.keys(data).length > 0) {
            setAnswers(data);
          }
        }
        setCloudStatus('synced');
        setCloudReady(true);
      } catch (e) {
        setCloudReady(true);
      }
    }
    loadUserCloud();
  }, [currentUser, userKey]);

  // Save user's answers to localStorage + Cloud KV on change
  useEffect(() => {
    if (!currentUser) return;
    try {
      localStorage.setItem(localStoreKey, JSON.stringify(answers));
    } catch (e) {}

    if (!cloudReady || currentUser.isGuest) return;
    setCloudStatus('saving');
    const timer = setTimeout(async () => {
      try {
        const r = await fetch(`/api/sync?user=${encodeURIComponent(userKey)}`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(answers)
        });
        if (r.ok) {
          setCloudStatus('synced');
          return;
        }
      } catch (e) {}

      try {
        await fetch(directCloudUserUrl, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(answers)
        });
        setCloudStatus('synced');
      } catch (e) {}
    }, 600);
    return () => clearTimeout(timer);
  }, [answers, cloudReady, currentUser, userKey]);

  // Handle Login / Signup submit
  const handleAuthSubmit = async (e) => {
    e.preventDefault();
    setAuthError('');
    const cleanUsername = authUsername.trim().toLowerCase().replace(/[^a-z0-9_.-]/g, '');
    if (cleanUsername.length < 3) {
      setAuthError('Kullanıcı adı en az 3 karakter olmalıdır (harf ve rakam).');
      return;
    }
    if (authPassword.length < 4) {
      setAuthError('Şifre en az 4 karakter olmalıdır.');
      return;
    }

    setAuthLoading(true);
    try {
      // Try Vercel Serverless /api/auth first
      const r = await fetch('/api/auth', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          action: authTab,
          username: cleanUsername,
          password: authPassword,
          fullName: authFullName.trim() || cleanUsername
        })
      });

      if (r.ok || r.status === 400 || r.status === 401 || r.status === 409) {
        const data = await r.json();
        if (!r.ok) {
          setAuthError(data.error || 'İşlem başarısız.');
          setAuthLoading(false);
          return;
        }
        localStorage.setItem('sdu_isg_auth_user_v2', JSON.stringify(data.user));
        setCurrentUser(data.user);
        setAuthLoading(false);
        return;
      }
    } catch (err) {}

    // Fallback for Vite localhost dev server (Direct Cloud KV Users Table)
    try {
      let users = {};
      const resGet = await fetch(USERS_CLOUD_URL);
      if (resGet.ok) {
        users = await resGet.json();
      }
      const passHash = await sha256Browser(authPassword);

      if (authTab === 'signup') {
        if (users[cleanUsername]) {
          setAuthError('Bu kullanıcı adı zaten alınmış kanka, giriş yapabilirsin.');
          setAuthLoading(false);
          return;
        }
        const newUser = {
          username: cleanUsername,
          fullName: authFullName.trim() || cleanUsername,
          passHash,
          createdAt: new Date().toISOString()
        };
        users[cleanUsername] = newUser;
        await fetch(USERS_CLOUD_URL, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(users)
        });
        const userSession = { username: newUser.username, fullName: newUser.fullName };
        localStorage.setItem('sdu_isg_auth_user_v2', JSON.stringify(userSession));
        setCurrentUser(userSession);
      } else {
        const existing = users[cleanUsername];
        if (!existing || existing.passHash !== passHash) {
          setAuthError('Kullanıcı adı veya şifre hatalı!');
          setAuthLoading(false);
          return;
        }
        const userSession = { username: existing.username, fullName: existing.fullName };
        localStorage.setItem('sdu_isg_auth_user_v2', JSON.stringify(userSession));
        setCurrentUser(userSession);
      }
    } catch (err) {
      setAuthError('Bağlantı hatası oluştu, tekrar dene kanka.');
    }
    setAuthLoading(false);
  };

  const handleGuestLogin = () => {
    const guest = { username: 'misafir', fullName: 'Misafir Öğrenci', isGuest: true };
    localStorage.setItem('sdu_isg_auth_user_v2', JSON.stringify(guest));
    setCurrentUser(guest);
  };

  const handleLogout = () => {
    localStorage.removeItem('sdu_isg_auth_user_v2');
    setCurrentUser(null);
    setAuthPassword('');
    setAuthError('');
  };

  // 45-min Timer
  const [secondsLeft, setSecondsLeft] = useState(45 * 60);
  const [timerRunning, setTimerRunning] = useState(false);

  useEffect(() => {
    if (!timerRunning) return;
    const interval = setInterval(() => {
      setSecondsLeft((prev) => {
        if (prev <= 1) {
          setTimerRunning(false);
          setExamSubmitted(true);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);
    return () => clearInterval(interval);
  }, [timerRunning]);

  const activeCourse = useMemo(
    () => COURSES.find((c) => c.id === activeCourseId) || COURSES[0],
    [activeCourseId]
  );

  const courseState = answers[activeCourse.id] || { mc: {}, fill: {} };
  const showFeedback = mode === 'study' || examSubmitted;

  const getStats = (course) => {
    const st = answers[course.id] || { mc: {}, fill: {} };
    let correct = 0;
    let wrong = 0;
    let answered = 0;
    const total = course.mcQuestions.length + course.fillQuestions.length;

    course.mcQuestions.forEach((q, idx) => {
      if (st.mc[idx] !== undefined) {
        answered++;
        if (st.mc[idx] === q.answer) correct++;
        else wrong++;
      }
    });

    course.fillQuestions.forEach((q, idx) => {
      const f = st.fill[idx];
      if (f && f.checked) {
        answered++;
        if (f.ok) correct++;
        else wrong++;
      }
    });

    const score = Math.round((correct / total) * 100);
    return { correct, wrong, answered, total, score };
  };

  const activeStats = getStats(activeCourse);
  const pointsPerQuestion = +(100 / activeStats.total).toFixed(1);

  const handleSelectMC = (qIdx, optIdx) => {
    setAnswers((prev) => ({
      ...prev,
      [activeCourse.id]: {
        ...prev[activeCourse.id],
        mc: {
          ...prev[activeCourse.id]?.mc,
          [qIdx]: optIdx
        }
      }
    }));
  };

  const handleFillChange = (qIdx, val) => {
    const q = activeCourse.fillQuestions[qIdx];
    const ok = isFillCorrect(val, q.answers);
    setAnswers((prev) => ({
      ...prev,
      [activeCourse.id]: {
        ...prev[activeCourse.id],
        fill: {
          ...prev[activeCourse.id]?.fill,
          [qIdx]: {
            val,
            checked:
              mode === 'exam'
                ? val.trim().length > 0
                : prev[activeCourse.id]?.fill?.[qIdx]?.checked || false,
            ok
          }
        }
      }
    }));
  };

  const handleCheckFill = (qIdx) => {
    const curVal = courseState.fill[qIdx]?.val || '';
    const q = activeCourse.fillQuestions[qIdx];
    const ok = isFillCorrect(curVal, q.answers);
    setAnswers((prev) => ({
      ...prev,
      [activeCourse.id]: {
        ...prev[activeCourse.id],
        fill: {
          ...prev[activeCourse.id]?.fill,
          [qIdx]: { val: curVal, checked: true, ok }
        }
      }
    }));
  };

  const handleRevealSingleFill = (qIdx) => {
    const q = activeCourse.fillQuestions[qIdx];
    setAnswers((prev) => ({
      ...prev,
      [activeCourse.id]: {
        ...prev[activeCourse.id],
        fill: {
          ...prev[activeCourse.id]?.fill,
          [qIdx]: { val: q.answers[0], checked: true, ok: true }
        }
      }
    }));
  };

  const handleRevealAllCourse = () => {
    const newMc = { ...courseState.mc };
    activeCourse.mcQuestions.forEach((q, i) => {
      if (newMc[i] === undefined) newMc[i] = q.answer;
    });
    const newFill = { ...courseState.fill };
    activeCourse.fillQuestions.forEach((q, i) => {
      if (!newFill[i] || !newFill[i].checked) {
        newFill[i] = { val: q.answers[0], checked: true, ok: true };
      }
    });
    setAnswers((prev) => ({
      ...prev,
      [activeCourse.id]: { mc: newMc, fill: newFill }
    }));
    setExamSubmitted(true);
  };

  const handleResetCourse = () => {
    setAnswers((prev) => ({
      ...prev,
      [activeCourse.id]: { mc: {}, fill: {} }
    }));
    setExamSubmitted(false);
  };

  const formatTime = (secs) => {
    const m = String(Math.floor(secs / 60)).padStart(2, '0');
    const s = String(secs % 60).padStart(2, '0');
    return `${m}:${s}`;
  };

  const wordBankList = useMemo(() => {
    return activeCourse.fillQuestions
      .map((f) => f.answers[0])
      .sort((a, b) => a.localeCompare(b, 'tr'));
  }, [activeCourse]);

  const totalAllCoursesMC = COURSES.reduce((acc, c) => acc + c.mcQuestions.length, 0);
  const totalAllCoursesFill = COURSES.reduce((acc, c) => acc + c.fillQuestions.length, 0);

  // RENDER LOGIN / SIGNUP SCREEN IF NOT AUTHENTICATED
  if (!currentUser) {
    return (
      <div className="min-h-screen bg-slate-950 flex flex-col justify-center items-center px-4 py-12">
        <div className="w-full max-w-md bg-slate-900 border border-slate-800 rounded-2xl shadow-2xl overflow-hidden">
          {/* Header */}
          <div className="bg-gradient-to-r from-amber-500 to-amber-600 p-6 text-slate-950 flex items-center gap-3.5">
            <div className="bg-slate-950 text-amber-400 p-3 rounded-xl shadow">
              <GraduationCap className="w-8 h-8" />
            </div>
            <div>
              <h1 className="text-lg font-black tracking-tight leading-snug">
                SDÜ İSG Yüksek Lisans
              </h1>
              <p className="text-xs font-bold text-slate-900/80">
                Vize Sınav & Çalışma Portalı (6 Ders • 240 Soru)
              </p>
            </div>
          </div>

          {/* Auth Tabs */}
          <div className="grid grid-cols-2 border-b border-slate-800 bg-slate-900/50">
            <button
              type="button"
              onClick={() => {
                setAuthTab('login');
                setAuthError('');
              }}
              className={`py-3.5 text-xs font-extrabold uppercase tracking-wider flex items-center justify-center gap-1.5 border-b-2 transition ${
                authTab === 'login'
                  ? 'border-amber-500 text-amber-400 bg-slate-800/60'
                  : 'border-transparent text-slate-400 hover:text-slate-200'
              }`}
            >
              <LogIn className="w-4 h-4" />
              Giriş Yap
            </button>
            <button
              type="button"
              onClick={() => {
                setAuthTab('signup');
                setAuthError('');
              }}
              className={`py-3.5 text-xs font-extrabold uppercase tracking-wider flex items-center justify-center gap-1.5 border-b-2 transition ${
                authTab === 'signup'
                  ? 'border-amber-500 text-amber-400 bg-slate-800/60'
                  : 'border-transparent text-slate-400 hover:text-slate-200'
              }`}
            >
              <UserPlus className="w-4 h-4" />
              Kayıt Ol
            </button>
          </div>

          {/* Form */}
          <form onSubmit={handleAuthSubmit} className="p-6 space-y-4">
            {authTab === 'signup' && (
              <div>
                <label className="block text-xs font-bold text-slate-300 mb-1.5">
                  Ad Soyad
                </label>
                <div className="relative">
                  <input
                    type="text"
                    value={authFullName}
                    onChange={(e) => setAuthFullName(e.target.value)}
                    placeholder="Örn: Oğuzhan Kaya"
                    className="w-full bg-slate-800 border border-slate-700 focus:border-amber-500 rounded-xl px-3.5 py-2.5 text-sm font-semibold text-white placeholder-slate-500 focus:outline-none"
                  />
                </div>
              </div>
            )}

            <div>
              <label className="block text-xs font-bold text-slate-300 mb-1.5">
                Kullanıcı Adı
              </label>
              <div className="relative flex items-center">
                <User className="w-4 h-4 text-slate-400 absolute left-3.5" />
                <input
                  type="text"
                  required
                  value={authUsername}
                  onChange={(e) => setAuthUsername(e.target.value)}
                  placeholder="oguzhan"
                  className="w-full bg-slate-800 border border-slate-700 focus:border-amber-500 rounded-xl pl-10 pr-3.5 py-2.5 text-sm font-semibold text-white placeholder-slate-500 focus:outline-none"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-300 mb-1.5">
                Şifre
              </label>
              <div className="relative flex items-center">
                <Lock className="w-4 h-4 text-slate-400 absolute left-3.5" />
                <input
                  type="password"
                  required
                  value={authPassword}
                  onChange={(e) => setAuthPassword(e.target.value)}
                  placeholder="••••••••"
                  className="w-full bg-slate-800 border border-slate-700 focus:border-amber-500 rounded-xl pl-10 pr-3.5 py-2.5 text-sm font-semibold text-white placeholder-slate-500 focus:outline-none"
                />
              </div>
            </div>

            {authError && (
              <div className="bg-rose-950/80 border border-rose-700 text-rose-200 text-xs font-bold p-3 rounded-xl flex items-center gap-2">
                <XCircle className="w-4 h-4 text-rose-400 shrink-0" />
                <span>{authError}</span>
              </div>
            )}

            <button
              type="submit"
              disabled={authLoading}
              className="w-full bg-amber-500 hover:bg-amber-400 disabled:opacity-50 text-slate-950 font-black text-sm py-3 rounded-xl shadow-lg transition flex items-center justify-center gap-2"
            >
              {authLoading
                ? 'İşleniyor...'
                : authTab === 'login'
                ? 'Hesabıma Giriş Yap'
                : 'Hesap Oluştur & Başla'}
            </button>

            <div className="pt-3 border-t border-slate-800 text-center">
              <button
                type="button"
                onClick={handleGuestLogin}
                className="text-xs font-bold text-slate-400 hover:text-amber-400 transition"
              >
                Üye olmadan Misafir Öğrenci olarak devam et →
              </button>
            </div>
          </form>
        </div>
        <p className="text-xs text-slate-500 mt-4 text-center">
          Her kullanıcının çözdüğü sorular ve puanları bulut veritabanında kendi hesabına özel saklanır.
        </p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-100 text-slate-900 pb-16">
      {/* Top Navbar */}
      <header className="sticky top-0 z-50 bg-slate-900 text-white border-b-4 border-amber-500 shadow-lg">
        <div className="max-w-7xl mx-auto px-4 py-3.5 flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="bg-amber-500 text-slate-950 p-2 rounded-lg">
              <GraduationCap className="w-6 h-6" />
            </div>
            <div>
              <h1 className="text-lg font-extrabold tracking-tight">
                SDÜ İSG Yüksek Lisans — Vize Sınav Portalı
              </h1>
              <p className="text-xs text-slate-400">
                6 Ders • {totalAllCoursesMC} Çoktan Seçmeli Test + {totalAllCoursesFill} Boşluk Doldurma (Toplam{' '}
                {totalAllCoursesMC + totalAllCoursesFill} Soru • Şık Analizli)
              </p>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-2.5">
            {/* Cloud DB Status Badge */}
            <div
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg border text-xs font-bold ${
                cloudStatus === 'synced'
                  ? 'bg-emerald-950/80 border-emerald-600 text-emerald-300'
                  : cloudStatus === 'saving'
                  ? 'bg-amber-950/80 border-amber-500 text-amber-300'
                  : 'bg-slate-800 border-slate-700 text-slate-300'
              }`}
            >
              <span
                className={`w-2 h-2 rounded-full ${
                  cloudStatus === 'synced'
                    ? 'bg-emerald-400'
                    : cloudStatus === 'saving'
                    ? 'bg-amber-400 animate-pulse'
                    : 'bg-slate-400'
                }`}
              />
              {cloudStatus === 'synced'
                ? '☁️ Bulut DB Senkronize'
                : cloudStatus === 'saving'
                ? '⏳ Kaydediliyor...'
                : '💾 Yerel Hafıza'}
            </div>

            {/* Mode Switcher */}
            <div className="inline-flex rounded-lg bg-slate-800 p-1 border border-slate-700">
              <button
                onClick={() => {
                  setMode('study');
                  setExamSubmitted(false);
                }}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-md text-xs font-bold transition ${
                  mode === 'study'
                    ? 'bg-amber-500 text-slate-950 shadow'
                    : 'text-slate-300 hover:text-white'
                }`}
              >
                <BookOpen className="w-3.5 h-3.5" />
                Çalışma Modu
              </button>
              <button
                onClick={() => {
                  setMode('exam');
                  setExamSubmitted(false);
                }}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-md text-xs font-bold transition ${
                  mode === 'exam'
                    ? 'bg-amber-500 text-slate-950 shadow'
                    : 'text-slate-300 hover:text-white'
                }`}
              >
                <ClipboardCheck className="w-3.5 h-3.5" />
                Sınav Modu
              </button>
            </div>

            {/* Timer */}
            <div className="flex items-center gap-2 bg-slate-800 border border-slate-700 px-3 py-1.5 rounded-lg">
              <Clock className="w-4 h-4 text-amber-400" />
              <span className="font-mono font-bold text-sm text-amber-400">
                {formatTime(secondsLeft)}
              </span>
              <button
                onClick={() => setTimerRunning(!timerRunning)}
                className="bg-slate-700 hover:bg-slate-600 text-xs px-2 py-1 rounded font-semibold flex items-center gap-1"
              >
                {timerRunning ? <Pause className="w-3 h-3" /> : <Play className="w-3 h-3" />}
                {timerRunning ? 'Duraklat' : 'Başlat'}
              </button>
              <button
                onClick={() => {
                  setTimerRunning(false);
                  setSecondsLeft(45 * 60);
                }}
                className="text-slate-400 hover:text-white text-xs px-1"
                title="Sayacı Sıfırla"
              >
                <RotateCcw className="w-3.5 h-3.5" />
              </button>
            </div>

            {mode === 'exam' && (
              <button
                onClick={() => setExamSubmitted(true)}
                className="bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold px-3.5 py-2 rounded-lg shadow transition"
              >
                Sınavı Bitir
              </button>
            )}

            {/* User Badge & Logout */}
            <div className="flex items-center gap-2 bg-slate-800 border border-slate-700 pl-3 pr-2 py-1 rounded-lg">
              <User className="w-3.5 h-3.5 text-amber-400" />
              <span className="text-xs font-bold text-slate-200">
                {currentUser.fullName}
              </span>
              <button
                onClick={handleLogout}
                title="Çıkış Yap"
                className="bg-rose-600/20 hover:bg-rose-600 text-rose-300 hover:text-white p-1.5 rounded-md transition"
              >
                <LogOut className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 mt-6">
        {/* 6 Course Selector Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-3 mb-6">
          {COURSES.map((course) => {
            const st = getStats(course);
            const isSelected = course.id === activeCourse.id;
            return (
              <button
                key={course.id}
                onClick={() => {
                  setActiveCourseId(course.id);
                  setExamSubmitted(false);
                }}
                style={{
                  borderTopColor: isSelected ? course.hex : undefined
                }}
                className={`text-left p-3.5 rounded-xl border transition-all flex flex-col justify-between ${
                  isSelected
                    ? 'bg-white border-2 border-slate-900 shadow-md -translate-y-0.5'
                    : 'bg-white/80 border-slate-200 hover:border-slate-400 hover:bg-white'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between gap-1 text-[11px] font-bold text-slate-500 uppercase">
                    <span>{course.code}</span>
                    <span
                      className="w-2.5 h-2.5 rounded-full"
                      style={{ backgroundColor: course.hex }}
                    />
                  </div>
                  <div className="font-bold text-sm text-slate-900 mt-1 line-clamp-2 leading-snug">
                    {course.title}
                  </div>
                </div>

                <div className="mt-3 pt-2 border-t border-slate-100 flex items-center justify-between text-xs font-semibold">
                  <span className="text-slate-500">
                    {st.answered}/{st.total} Soru
                  </span>
                  <span
                    className={
                      st.score >= 70
                        ? 'text-emerald-700 font-extrabold'
                        : 'text-slate-700 font-bold'
                    }
                  >
                    {st.score} Puan
                  </span>
                </div>
              </button>
            );
          })}
        </div>

        {/* Active Course Banner & Score Card */}
        <div
          className="bg-white rounded-xl border border-slate-200 shadow-sm p-6 mb-6 flex flex-col lg:flex-row justify-between gap-6"
          style={{ borderLeft: `6px solid ${activeCourse.hex}` }}
        >
          <div className="flex-1">
            <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider px-2.5 py-1 rounded bg-slate-100 text-slate-700 mb-2">
              <span>{activeCourse.code}</span>
              <span>•</span>
              <span>{activeCourse.badge}</span>
            </div>
            <h2 className="text-2xl font-black text-slate-900">{activeCourse.title}</h2>
            <p className="text-sm font-semibold text-slate-600 mt-1">
              👨‍🏫 {activeCourse.instructor} &nbsp;|&nbsp; 📋 {activeCourse.examInfo}
            </p>

            <div className="mt-4 bg-amber-50/90 border border-amber-200 rounded-lg p-3.5">
              <div className="flex items-center gap-1.5 text-xs font-extrabold uppercase tracking-wide text-amber-900 mb-1.5">
                <Sparkles className="w-4 h-4 text-amber-600" />
                Hoca Sınav Vurguları & Kritik Tüyolar
              </div>
              <ul className="list-disc list-inside text-xs sm:text-sm text-amber-950 space-y-1">
                {activeCourse.tips.map((tip, i) => (
                  <li key={i}>{tip}</li>
                ))}
              </ul>
            </div>
          </div>

          {/* Score Box */}
          <div className="lg:w-72 bg-slate-50 border border-slate-200 rounded-xl p-5 flex flex-col items-center justify-center text-center shrink-0">
            <Award
              className={`w-8 h-8 mb-1 ${
                activeStats.score >= 70 ? 'text-emerald-600' : 'text-amber-500'
              }`}
            />
            <div className="text-4xl font-black text-slate-900">
              {activeStats.score}
              <span className="text-lg font-bold text-slate-400"> / 100</span>
            </div>
            <div className="text-xs font-bold uppercase tracking-wide mt-1">
              {activeStats.score >= 70 ? (
                <span className="text-emerald-700 bg-emerald-100 px-2.5 py-0.5 rounded-full">
                  ✅ GEÇER NOT (≥70)
                </span>
              ) : (
                <span className="text-amber-700 bg-amber-100 px-2.5 py-0.5 rounded-full">
                  🎯 Geçme Barajı: 70 Puan
                </span>
              )}
            </div>

            <div className="grid grid-cols-3 gap-2 w-full mt-4 pt-3 border-t border-slate-200 text-xs font-bold">
              <div className="text-emerald-700">
                <div className="text-base">{activeStats.correct}</div>
                Doğru
              </div>
              <div className="text-rose-700">
                <div className="text-base">{activeStats.wrong}</div>
                Yanlış
              </div>
              <div className="text-slate-500">
                <div className="text-base">{activeStats.total - activeStats.answered}</div>
                Boş
              </div>
            </div>
          </div>
        </div>

        {/* Filter & Action Bar */}
        <div className="bg-white rounded-xl border border-slate-200 p-3.5 mb-6 flex flex-wrap items-center justify-between gap-3 shadow-sm">
          <div className="flex flex-wrap items-center gap-2">
            <button
              onClick={() => setFilter('all')}
              className={`px-3.5 py-2 rounded-lg text-xs font-bold transition ${
                filter === 'all'
                  ? 'bg-slate-900 text-white'
                  : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
              }`}
            >
              Tüm Sorular ({activeStats.total})
            </button>
            <button
              onClick={() => setFilter('mc')}
              className={`px-3.5 py-2 rounded-lg text-xs font-bold transition ${
                filter === 'mc'
                  ? 'bg-slate-900 text-white'
                  : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
              }`}
            >
              Çoktan Seçmeli Test ({activeCourse.mcQuestions.length})
            </button>
            <button
              onClick={() => setFilter('fill')}
              className={`px-3.5 py-2 rounded-lg text-xs font-bold transition ${
                filter === 'fill'
                  ? 'bg-slate-900 text-white'
                  : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
              }`}
            >
              Boşluk Doldurma ({activeCourse.fillQuestions.length})
            </button>
          </div>

          <div className="flex flex-wrap items-center gap-2">
            <button
              onClick={() => setShowWordBank(!showWordBank)}
              className="flex items-center gap-1.5 px-3 py-2 rounded-lg border border-slate-300 bg-white hover:bg-slate-50 text-xs font-bold text-slate-700"
            >
              <Lightbulb className="w-3.5 h-3.5 text-amber-500" />
              {showWordBank ? 'Kelime Havuzunu Gizle' : 'Kelime Havuzunu Göster'}
            </button>
            <button
              onClick={handleRevealAllCourse}
              className="flex items-center gap-1.5 px-3 py-2 rounded-lg border border-slate-300 bg-white hover:bg-slate-50 text-xs font-bold text-slate-700"
            >
              <Eye className="w-3.5 h-3.5 text-blue-600" />
              Tüm Cevapları Göster
            </button>
            <button
              onClick={handleResetCourse}
              className="flex items-center gap-1.5 px-3 py-2 rounded-lg border border-rose-200 bg-rose-50 hover:bg-rose-100 text-xs font-bold text-rose-700"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              Bu Dersi Sıfırla
            </button>
          </div>
        </div>

        {/* SECTION 1: MULTIPLE CHOICE */}
        {(filter === 'all' || filter === 'mc') && (
          <section className="mb-10">
            <div className="flex items-center justify-between border-b-2 border-slate-300 pb-2 mb-4">
              <h3 className="text-lg font-extrabold text-slate-900">
                📋 Bölüm 1: Çoktan Seçmeli Test Soruları ({activeCourse.mcQuestions.length} Soru)
              </h3>
              <span className="text-xs font-bold text-slate-500">
                Her soru {pointsPerQuestion} puandır • Cevaplandığında tüm şıkların açıklaması açılır
              </span>
            </div>

            <div className="space-y-5">
              {activeCourse.mcQuestions.map((q, qIdx) => {
                const userChoice = courseState.mc[qIdx];
                const hasAnswered = userChoice !== undefined;
                const isCorrect = userChoice === q.answer;

                let borderClass = 'border-slate-200';
                if (hasAnswered && showFeedback) {
                  borderClass = isCorrect
                    ? 'border-emerald-500 ring-1 ring-emerald-500'
                    : 'border-rose-500 ring-1 ring-rose-500';
                }

                return (
                  <div
                    key={qIdx}
                    className={`bg-white rounded-xl border ${borderClass} p-5 shadow-sm transition`}
                  >
                    <div className="flex items-center justify-between gap-2 mb-2.5">
                      <span className="bg-slate-900 text-white text-xs font-extrabold px-2.5 py-1 rounded">
                        TEST SORU {qIdx + 1}
                      </span>
                      <span className="text-xs font-bold text-slate-400">
                        Çoktan Seçmeli • {pointsPerQuestion} Puan
                      </span>
                    </div>

                    <p className="text-base font-bold text-slate-900 mb-4 leading-relaxed">
                      {q.q}
                    </p>

                    <div className="space-y-2.5">
                      {q.options.map((opt, oIdx) => {
                        const isSelected = userChoice === oIdx;
                        const isRightAnswer = q.answer === oIdx;
                        const optExp = q.optionExplanations?.[oIdx];

                        let btnStyle =
                          'bg-slate-50 border-slate-200 text-slate-800 hover:bg-slate-100 hover:border-slate-300';
                        let badgeStyle = 'bg-white border-slate-300 text-slate-700';

                        if (hasAnswered) {
                          if (showFeedback) {
                            if (isRightAnswer) {
                              btnStyle =
                                'bg-emerald-50/90 border-emerald-500 text-emerald-950 font-bold shadow-sm';
                              badgeStyle = 'bg-emerald-600 border-emerald-600 text-white';
                            } else if (isSelected) {
                              btnStyle =
                                'bg-rose-50/90 border-rose-500 text-rose-950 font-semibold shadow-sm';
                              badgeStyle = 'bg-rose-600 border-rose-600 text-white';
                            } else {
                              btnStyle = 'bg-slate-50/70 border-slate-200 text-slate-700';
                            }
                          } else if (isSelected) {
                            btnStyle = 'bg-blue-50 border-blue-600 text-blue-950 font-bold';
                            badgeStyle = 'bg-blue-600 border-blue-600 text-white';
                          }
                        }

                        return (
                          <button
                            key={oIdx}
                            onClick={() => handleSelectMC(qIdx, oIdx)}
                            className={`w-full text-left p-3.5 rounded-lg border flex items-start gap-3 text-sm transition ${btnStyle}`}
                          >
                            <span
                              className={`w-7 h-7 rounded-md border flex items-center justify-center text-xs font-extrabold shrink-0 mt-0.5 ${badgeStyle}`}
                            >
                              {LETTERS[oIdx]}
                            </span>
                            <div className="flex-1">
                              <div className="flex items-center justify-between gap-2">
                                <span>{opt}</span>
                                {hasAnswered && showFeedback && isRightAnswer && (
                                  <span className="text-[11px] font-extrabold uppercase px-2 py-0.5 rounded bg-emerald-600 text-white shrink-0">
                                    ✓ Doğru Şık
                                  </span>
                                )}
                                {hasAnswered && showFeedback && isSelected && !isRightAnswer && (
                                  <span className="text-[11px] font-extrabold uppercase px-2 py-0.5 rounded bg-rose-600 text-white shrink-0">
                                    ✗ Senin Seçimin
                                  </span>
                                )}
                              </div>

                              {/* Inline per-option explanation */}
                              {hasAnswered && showFeedback && optExp && (
                                <div
                                  className={`mt-2 pt-2 border-t text-xs font-normal leading-relaxed ${
                                    isRightAnswer
                                      ? 'border-emerald-200 text-emerald-900'
                                      : isSelected
                                      ? 'border-rose-200 text-rose-900'
                                      : 'border-slate-200 text-slate-600'
                                  }`}
                                >
                                  <span className="font-bold">
                                    {isRightAnswer
                                      ? 'Neden Doğru? '
                                      : `${LETTERS[oIdx]} Şıkkı Nedir? `}
                                  </span>
                                  {optExp}
                                </div>
                              )}
                            </div>
                          </button>
                        );
                      })}
                    </div>

                    {hasAnswered && showFeedback && (
                      <div
                        className={`mt-4 p-4 rounded-xl border-l-4 text-sm ${
                          isCorrect
                            ? 'bg-emerald-50/80 border-emerald-600 text-emerald-950'
                            : 'bg-rose-50/80 border-rose-600 text-rose-950'
                        }`}
                      >
                        <div className="flex items-start gap-2.5">
                          {isCorrect ? (
                            <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                          ) : (
                            <XCircle className="w-5 h-5 text-rose-600 shrink-0 mt-0.5" />
                          )}
                          <div>
                            <span className="font-extrabold">
                              {isCorrect
                                ? 'Doğru Cevap!'
                                : `Yanlış! Doğru Seçenek: ${LETTERS[q.answer]} (${q.options[q.answer]})`}
                            </span>{' '}
                            — {q.explanation}
                          </div>
                        </div>

                        {q.optionExplanations && q.optionExplanations.length > 0 && (
                          <div className="mt-3 pt-3 border-t border-slate-200/80">
                            <div className="flex items-center gap-1.5 text-xs font-extrabold uppercase tracking-wide text-slate-700 mb-2">
                              <ListChecks className="w-4 h-4 text-slate-600" />
                              Tüm Şıkların Detaylı Açıklaması (A - E Özeti)
                            </div>
                            <div className="grid grid-cols-1 gap-1.5">
                              {q.options.map((optText, idx) => {
                                const isRight = idx === q.answer;
                                const isUser = idx === userChoice;
                                return (
                                  <div
                                    key={idx}
                                    className={`text-xs px-3 py-2 rounded-lg border flex flex-col sm:flex-row sm:items-baseline gap-1 sm:gap-2 ${
                                      isRight
                                        ? 'bg-emerald-100/80 border-emerald-400 text-emerald-950 font-semibold'
                                        : isUser
                                        ? 'bg-rose-100/70 border-rose-300 text-rose-950'
                                        : 'bg-white/90 border-slate-200 text-slate-700'
                                    }`}
                                  >
                                    <span className="font-extrabold shrink-0">
                                      {LETTERS[idx]}) {optText}:
                                    </span>
                                    <span className="font-normal">
                                      {q.optionExplanations[idx]}
                                    </span>
                                  </div>
                                );
                              })}
                            </div>
                          </div>
                        )}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </section>
        )}

        {/* SECTION 2: FILL IN THE BLANK */}
        {(filter === 'all' || filter === 'fill') && (
          <section>
            <div className="flex items-center justify-between border-b-2 border-slate-300 pb-2 mb-4">
              <h3 className="text-lg font-extrabold text-slate-900">
                ✍️ Bölüm 2: Boşluk Doldurma Soruları ({activeCourse.fillQuestions.length} Soru)
              </h3>
              <span className="text-xs font-bold text-slate-500">
                Her soru {pointsPerQuestion} puandır
              </span>
            </div>

            {showWordBank && (
              <div className="bg-blue-50 border border-blue-200 rounded-xl p-4 mb-5">
                <div className="text-xs font-extrabold uppercase tracking-wide text-blue-900 mb-2">
                  🔑 Bu Dersin Boşluk Doldurma Kelime Havuzu (Karışık Sıralı — Tıklayıp Kopyalayabilirsin)
                </div>
                <div className="flex flex-wrap gap-2">
                  {wordBankList.map((word, idx) => (
                    <span
                      key={idx}
                      className="bg-white border border-blue-300 text-blue-900 px-3 py-1 rounded-md text-xs font-bold shadow-sm select-all"
                    >
                      {word}
                    </span>
                  ))}
                </div>
              </div>
            )}

            <div className="space-y-4">
              {activeCourse.fillQuestions.map((q, qIdx) => {
                const fState = courseState.fill[qIdx] || {
                  val: '',
                  checked: false,
                  ok: false
                };

                let borderClass = 'border-slate-200';
                if (fState.checked && showFeedback) {
                  borderClass = fState.ok
                    ? 'border-emerald-500 ring-1 ring-emerald-500'
                    : 'border-rose-500 ring-1 ring-rose-500';
                }

                return (
                  <div
                    key={qIdx}
                    className={`bg-white rounded-xl border ${borderClass} p-5 shadow-sm transition`}
                  >
                    <div className="flex items-center justify-between gap-2 mb-2.5">
                      <span className="bg-slate-900 text-white text-xs font-extrabold px-2.5 py-1 rounded">
                        BOŞLUK DOLDURMA {qIdx + 1}
                      </span>
                      <span className="text-xs font-bold text-slate-400">
                        Kavram & Sınır Değer • {pointsPerQuestion} Puan
                      </span>
                    </div>

                    <p className="text-base font-bold text-slate-900 mb-4 leading-relaxed">
                      {q.q}
                    </p>

                    <div className="flex flex-wrap items-center gap-2.5">
                      <input
                        type="text"
                        value={fState.val}
                        onChange={(e) => handleFillChange(qIdx, e.target.value)}
                        onKeyDown={(e) => {
                          if (e.key === 'Enter') handleCheckFill(qIdx);
                        }}
                        placeholder="Cevabınızı buraya yazın..."
                        className="flex-1 min-w-[220px] px-3.5 py-2.5 rounded-lg border-2 border-slate-300 focus:border-blue-600 focus:outline-none text-sm font-bold text-slate-900"
                      />
                      <button
                        onClick={() => handleCheckFill(qIdx)}
                        className="bg-slate-900 hover:bg-slate-800 text-white text-xs font-bold px-4 py-2.5 rounded-lg transition"
                      >
                        Kontrol Et
                      </button>
                      <button
                        onClick={() => handleRevealSingleFill(qIdx)}
                        className="bg-slate-100 hover:bg-slate-200 text-slate-700 border border-slate-300 text-xs font-bold px-3.5 py-2.5 rounded-lg transition"
                      >
                        Cevabı Gör
                      </button>
                    </div>

                    <div className="flex items-center gap-1.5 text-xs text-slate-500 mt-2 font-medium">
                      <HelpCircle className="w-3.5 h-3.5 text-slate-400" />
                      <span>İpucu: {q.hint}</span>
                    </div>

                    {fState.checked && showFeedback && (
                      <div
                        className={`mt-3.5 p-3.5 rounded-lg border-l-4 text-sm flex items-start gap-2.5 ${
                          fState.ok
                            ? 'bg-emerald-50/70 border-emerald-600 text-emerald-950'
                            : 'bg-rose-50/70 border-rose-600 text-rose-950'
                        }`}
                      >
                        {fState.ok ? (
                          <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                        ) : (
                          <XCircle className="w-5 h-5 text-rose-600 shrink-0 mt-0.5" />
                        )}
                        <div>
                          {fState.ok ? (
                            <span>
                              <strong>Doğru!</strong> Cevap:{' '}
                              <u className="font-extrabold">{q.answers[0]}</u>
                            </span>
                          ) : (
                            <span>
                              <strong>Doğru Cevap:</strong>{' '}
                              <u className="font-extrabold">{q.answers[0]}</u>{' '}
                              <span className="text-xs opacity-80">
                                (Senin yazdığın: {fState.val || 'Boş'})
                              </span>
                            </span>
                          )}
                          {q.explanation && (
                            <p className="mt-1 text-xs opacity-90 leading-relaxed">
                              💡 {q.explanation}
                            </p>
                          )}
                        </div>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </section>
        )}
      </main>
    </div>
  );
}
