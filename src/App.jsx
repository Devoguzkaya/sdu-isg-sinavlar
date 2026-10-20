import React, { useState, useEffect } from 'react';
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
  LogIn,
  ShieldCheck,
  Layers,
  ChevronLeft,
  ChevronRight,
  LayoutList,
  FileText
} from 'lucide-react';

const LETTERS = ['A', 'B', 'C', 'D', 'E'];

function createEmptyCourseMap(courses) {
  const init = {};
  courses.forEach((c) => {
    init[c.id] = { mc: {}, fill: {} };
  });
  return init;
}

export default function App() {
  // Courses fetched from Backend (/api/questions — answers stripped!)
  const [courses, setCourses] = useState([]);
  const [coursesLoading, setCoursesLoading] = useState(true);

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

  const [activeCourseId, setActiveCourseId] = useState('elektrik');
  const [activeTestIdx, setActiveTestIdx] = useState(0); // 0..9 for Test 1..10, or 'all'
  const [currentStep, setCurrentStep] = useState(0); // Current question index inside paged view
  const [viewMode, setViewMode] = useState('paged'); // 'paged' (Sayfa Sayfa) | 'list' (Tüm Liste)
  const [mode, setMode] = useState('study'); // 'study' | 'exam'
  const [filter, setFilter] = useState('all'); // 'all' | 'mc' | 'fill'
  const [showWordBank, setShowWordBank] = useState(true);
  const [examSubmitted, setExamSubmitted] = useState(false);

  const [cloudStatus, setCloudStatus] = useState('local'); // 'local' | 'synced' | 'saving'
  const [cloudReady, setCloudReady] = useState(false);

  const userKey = currentUser?.username || 'guest';
  const localStoreKey = `sdu_isg_react_vize_v3_${userKey}`;

  // User's selected options & typed fill strings
  const [answers, setAnswers] = useState({});
  // Backend-evaluated feedback per question (only populated after answering/submitting)
  const [feedback, setFeedback] = useState({});

  // 1. Fetch sanitized questions from Backend (/api/questions)
  useEffect(() => {
    fetch('/api/questions')
      .then((r) => r.json())
      .then((data) => {
        if (data?.courses) {
          setCourses(data.courses);
          setActiveCourseId(data.courses[0].id);
        }
        setCoursesLoading(false);
      })
      .catch(() => setCoursesLoading(false));
  }, []);

  // Reset question step to 0 when course, test, or filter changes
  useEffect(() => {
    setCurrentStep(0);
  }, [activeCourseId, activeTestIdx, filter]);

  // Helper to batch-evaluate existing answers on the backend
  const evaluateAllOnBackend = async (userAns, revealCourseId = null, revealTestIdx = undefined) => {
    try {
      const r = await fetch('/api/questions', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          action: 'evaluate_all',
          userAnswers: userAns,
          revealCourseId,
          revealTestIdx
        })
      });
      if (r.ok) {
        const res = await r.json();
        if (res.feedback) setFeedback(res.feedback);
        if (revealCourseId && res.updatedUserAnswers) {
          setAnswers(res.updatedUserAnswers);
        }
      }
    } catch (e) {}
  };

  // 2. Load user's saved answers from Cloud (/api/sync) + evaluate them on Backend
  useEffect(() => {
    if (!currentUser || courses.length === 0) return;
    setCloudReady(false);

    let initialAns = createEmptyCourseMap(courses);
    try {
      const localSaved = localStorage.getItem(localStoreKey);
      if (localSaved) {
        initialAns = { ...initialAns, ...JSON.parse(localSaved) };
      }
    } catch (e) {}
    setAnswers(initialAns);

    if (currentUser.isGuest) {
      setCloudStatus('local');
      setCloudReady(true);
      evaluateAllOnBackend(initialAns);
      return;
    }

    async function loadUserCloud() {
      try {
        const r = await fetch(`/api/sync?user=${encodeURIComponent(userKey)}`);
        if (r.ok) {
          const res = await r.json();
          if (res && res.configured) {
            if (res.data && Object.keys(res.data).length > 0) {
              initialAns = { ...createEmptyCourseMap(courses), ...res.data };
              setAnswers(initialAns);
            }
            setCloudStatus('synced');
          }
        }
      } catch (e) {}
      setCloudReady(true);
      evaluateAllOnBackend(initialAns);
    }
    loadUserCloud();
  }, [currentUser, userKey, courses.length]);

  // 3. Auto-save user's answers to localStorage + Cloud (/api/sync)
  useEffect(() => {
    if (!currentUser || !cloudReady || courses.length === 0) return;
    try {
      localStorage.setItem(localStoreKey, JSON.stringify(answers));
    } catch (e) {}

    if (currentUser.isGuest) return;
    setCloudStatus('saving');
    const timer = setTimeout(async () => {
      try {
        const r = await fetch(`/api/sync?user=${encodeURIComponent(userKey)}`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(answers)
        });
        if (r.ok) setCloudStatus('synced');
      } catch (e) {}
    }, 600);
    return () => clearTimeout(timer);
  }, [answers, cloudReady, currentUser, userKey]);

  // Handle Login / Signup via Backend (/api/auth)
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
      const data = await r.json();
      if (!r.ok) {
        setAuthError(data.error || 'İşlem başarısız.');
        setAuthLoading(false);
        return;
      }
      localStorage.setItem('sdu_isg_auth_user_v2', JSON.stringify(data.user));
      setCurrentUser(data.user);
    } catch (err) {
      setAuthError('Sunucu bağlantı hatası oluştu.');
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

  const activeCourse = courses.find((c) => c.id === activeCourseId) || courses[0];
  const courseState = (activeCourse && answers[activeCourse.id]) || { mc: {}, fill: {} };
  const courseFeedback = (activeCourse && feedback[activeCourse.id]) || { mc: {}, fill: {} };
  const showFeedback = mode === 'study' || examSubmitted;

  // Stats for an entire course (150 questions) or a specific test (0..9 => 15 questions)
  const getStats = (course, testIdx = 'all') => {
    const st = answers[course.id] || { mc: {}, fill: {} };
    const fb = feedback[course.id] || { mc: {}, fill: {} };
    let correct = 0;
    let wrong = 0;
    let answered = 0;

    const mcStart = testIdx === 'all' ? 0 : testIdx * 10;
    const mcEnd =
      testIdx === 'all'
        ? course.mcQuestions.length
        : Math.min((testIdx + 1) * 10, course.mcQuestions.length);
    const fillStart = testIdx === 'all' ? 0 : testIdx * 5;
    const fillEnd =
      testIdx === 'all'
        ? course.fillQuestions.length
        : Math.min((testIdx + 1) * 5, course.fillQuestions.length);

    const total = mcEnd - mcStart + (fillEnd - fillStart);

    for (let idx = mcStart; idx < mcEnd; idx++) {
      if (st.mc?.[idx] !== undefined) {
        answered++;
        if (fb.mc?.[idx]) {
          if (fb.mc[idx].correct) correct++;
          else wrong++;
        }
      }
    }

    for (let idx = fillStart; idx < fillEnd; idx++) {
      const f = st.fill?.[idx];
      if (f && f.checked) {
        answered++;
        if (fb.fill?.[idx]) {
          if (fb.fill[idx].ok) correct++;
          else wrong++;
        }
      }
    }

    const score = total > 0 ? Math.round((correct / total) * 100) : 0;
    return { correct, wrong, answered, total, score };
  };

  // Select MC Option -> Verify on Backend (/api/questions)
  const handleSelectMC = async (qIdx, optIdx) => {
    const cId = activeCourse.id;
    setAnswers((prev) => ({
      ...prev,
      [cId]: {
        ...prev[cId],
        mc: {
          ...prev[cId]?.mc,
          [qIdx]: optIdx
        }
      }
    }));

    try {
      const r = await fetch('/api/questions', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          action: 'check_mc',
          courseId: cId,
          qIdx,
          userChoice: optIdx
        })
      });
      if (r.ok) {
        const res = await r.json();
        setFeedback((prev) => ({
          ...prev,
          [cId]: {
            ...prev[cId],
            mc: {
              ...prev[cId]?.mc,
              [qIdx]: res
            }
          }
        }));
      }
    } catch (e) {}
  };

  const handleFillChange = (qIdx, val) => {
    const cId = activeCourse.id;
    setAnswers((prev) => ({
      ...prev,
      [cId]: {
        ...prev[cId],
        fill: {
          ...prev[cId]?.fill,
          [qIdx]: {
            val,
            checked: mode === 'exam' ? val.trim().length > 0 : prev[cId]?.fill?.[qIdx]?.checked || false
          }
        }
      }
    }));
  };

  // Check Fill-in-the-blank on Backend (/api/questions)
  const handleCheckFill = async (qIdx, reveal = false) => {
    const cId = activeCourse.id;
    const curVal = courseState.fill?.[qIdx]?.val || '';

    try {
      const r = await fetch('/api/questions', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          action: 'check_fill',
          courseId: cId,
          qIdx,
          val: curVal,
          reveal
        })
      });
      if (r.ok) {
        const res = await r.json();
        setAnswers((prev) => ({
          ...prev,
          [cId]: {
            ...prev[cId],
            fill: {
              ...prev[cId]?.fill,
              [qIdx]: {
                val: reveal ? res.correctAnswer : curVal,
                checked: true
              }
            }
          }
        }));
        setFeedback((prev) => ({
          ...prev,
          [cId]: {
            ...prev[cId],
            fill: {
              ...prev[cId]?.fill,
              [qIdx]: res
            }
          }
        }));
      }
    } catch (e) {}
  };

  const handleRevealCurrentView = async () => {
    await evaluateAllOnBackend(answers, activeCourse.id, activeTestIdx);
    setExamSubmitted(true);
  };

  const handleResetCurrentView = () => {
    const cId = activeCourse.id;
    if (activeTestIdx === 'all') {
      setAnswers((prev) => ({
        ...prev,
        [cId]: { mc: {}, fill: {} }
      }));
      setFeedback((prev) => ({
        ...prev,
        [cId]: { mc: {}, fill: {} }
      }));
    } else {
      const mcStart = activeTestIdx * 10;
      const fillStart = activeTestIdx * 5;
      setAnswers((prev) => {
        const nextMc = { ...(prev[cId]?.mc || {}) };
        const nextFill = { ...(prev[cId]?.fill || {}) };
        for (let i = mcStart; i < mcStart + 10; i++) delete nextMc[i];
        for (let i = fillStart; i < fillStart + 5; i++) delete nextFill[i];
        return { ...prev, [cId]: { mc: nextMc, fill: nextFill } };
      });
      setFeedback((prev) => {
        const nextMc = { ...(prev[cId]?.mc || {}) };
        const nextFill = { ...(prev[cId]?.fill || {}) };
        for (let i = mcStart; i < mcStart + 10; i++) delete nextMc[i];
        for (let i = fillStart; i < fillStart + 5; i++) delete nextFill[i];
        return { ...prev, [cId]: { mc: nextMc, fill: nextFill } };
      });
    }
    setCurrentStep(0);
    setExamSubmitted(false);
  };

  const formatTime = (secs) => {
    const m = String(Math.floor(secs / 60)).padStart(2, '0');
    const s = String(secs % 60).padStart(2, '0');
    return `${m}:${s}`;
  };

  // RENDER LOGIN / SIGNUP SCREEN IF NOT AUTHENTICATED
  if (!currentUser) {
    return (
      <div className="min-h-screen bg-slate-950 flex flex-col justify-center items-center px-4 py-12">
        <div className="w-full max-w-md bg-slate-900 border border-slate-800 rounded-2xl shadow-2xl overflow-hidden">
          <div className="bg-gradient-to-r from-amber-500 to-amber-600 p-6 text-slate-950 flex items-center gap-3.5">
            <div className="bg-slate-950 text-amber-400 p-3 rounded-xl shadow">
              <GraduationCap className="w-8 h-8" />
            </div>
            <div>
              <h1 className="text-lg font-black tracking-tight leading-snug">
                SDÜ İSG Yüksek Lisans
              </h1>
              <p className="text-xs font-bold text-slate-900/80">
                Vize Sınav & Çalışma Portalı (6 Ders • 60 Test • 900 Soru)
              </p>
            </div>
          </div>

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

          <form onSubmit={handleAuthSubmit} className="p-6 space-y-4">
            {authTab === 'signup' && (
              <div>
                <label className="block text-xs font-bold text-slate-300 mb-1.5">
                  Ad Soyad
                </label>
                <input
                  type="text"
                  value={authFullName}
                  onChange={(e) => setAuthFullName(e.target.value)}
                  placeholder="Örn: Oğuzhan Kaya"
                  className="w-full bg-slate-800 border border-slate-700 focus:border-amber-500 rounded-xl px-3.5 py-2.5 text-sm font-semibold text-white placeholder-slate-500 focus:outline-none"
                />
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
        <p className="text-xs text-slate-500 mt-4 text-center flex items-center gap-1.5">
          <ShieldCheck className="w-4 h-4 text-emerald-400" />
          Sorular ve cevap anahtarları F12 korumalı olarak sunucu tarafında (/api/questions) tutulmaktadır.
        </p>
      </div>
    );
  }

  if (coursesLoading || !activeCourse) {
    return (
      <div className="min-h-screen bg-slate-950 text-white flex items-center justify-center">
        <div className="text-center space-y-2">
          <div className="w-10 h-10 border-4 border-amber-500 border-t-transparent rounded-full animate-spin mx-auto" />
          <p className="text-sm font-bold text-slate-300">
            Sorular güvenli sunucudan (/api/questions) yükleniyor...
          </p>
        </div>
      </div>
    );
  }

  const activeStats = getStats(activeCourse, activeTestIdx);
  const overallCourseStats = getStats(activeCourse, 'all');
  const pointsPerQuestion = +(100 / activeStats.total).toFixed(1);
  const totalAllCoursesMC = courses.reduce((acc, c) => acc + c.mcQuestions.length, 0);
  const totalAllCoursesFill = courses.reduce((acc, c) => acc + c.fillQuestions.length, 0);

  // Slice MC and Fill questions according to selected Test (0..9) or 'all'
  const mcStartIdx = activeTestIdx === 'all' ? 0 : activeTestIdx * 10;
  const mcEndIdx =
    activeTestIdx === 'all'
      ? activeCourse.mcQuestions.length
      : Math.min((activeTestIdx + 1) * 10, activeCourse.mcQuestions.length);

  const fillStartIdx = activeTestIdx === 'all' ? 0 : activeTestIdx * 5;
  const fillEndIdx =
    activeTestIdx === 'all'
      ? activeCourse.fillQuestions.length
      : Math.min((activeTestIdx + 1) * 5, activeCourse.fillQuestions.length);

  const visibleMC = activeCourse.mcQuestions.slice(mcStartIdx, mcEndIdx);
  const visibleFill = activeCourse.fillQuestions.slice(fillStartIdx, fillEndIdx);

  const activeTestMeta =
    activeTestIdx !== 'all' && activeCourse.tests ? activeCourse.tests[activeTestIdx] : null;
  const currentWordBank = activeTestMeta?.wordBank || activeCourse.wordBank || [];

  // Build unified step list for Paged ("Sayfa Sayfa") mode
  const pagedItems = [];
  if (filter === 'all' || filter === 'mc') {
    visibleMC.forEach((q, localIdx) => {
      const qIdx = mcStartIdx + localIdx;
      pagedItems.push({
        type: 'mc',
        q,
        qIdx,
        localIdx,
        testNumber: Math.floor(qIdx / 10) + 1,
        questionInTest: (qIdx % 10) + 1
      });
    });
  }
  if (filter === 'all' || filter === 'fill') {
    visibleFill.forEach((q, localIdx) => {
      const qIdx = fillStartIdx + localIdx;
      pagedItems.push({
        type: 'fill',
        q,
        qIdx,
        localIdx,
        testNumber: Math.floor(qIdx / 5) + 1,
        questionInTest: (qIdx % 5) + 1
      });
    });
  }

  const safeStep = Math.min(currentStep, Math.max(0, pagedItems.length - 1));
  const currentPagedItem = pagedItems[safeStep];

  const goPrevStep = () => {
    if (safeStep > 0) {
      setCurrentStep(safeStep - 1);
      window.scrollTo({ top: 260, behavior: 'smooth' });
    }
  };

  const goNextStep = () => {
    if (safeStep < pagedItems.length - 1) {
      setCurrentStep(safeStep + 1);
      window.scrollTo({ top: 260, behavior: 'smooth' });
    } else if (activeTestIdx !== 'all' && activeTestIdx < 9) {
      setActiveTestIdx(activeTestIdx + 1);
      setCurrentStep(0);
      window.scrollTo({ top: 220, behavior: 'smooth' });
    }
  };

  // Helper to render a single MC question card (used in both Paged and List modes)
  const renderMCCard = (q, qIdx, showNextPrompt = false) => {
    const testNumber = Math.floor(qIdx / 10) + 1;
    const questionInTest = (qIdx % 10) + 1;

    const userChoice = courseState.mc?.[qIdx];
    const hasAnswered = userChoice !== undefined;
    const qFb = courseFeedback.mc?.[qIdx];
    const isCorrect = qFb?.correct;

    let borderClass = 'border-slate-200';
    if (hasAnswered && showFeedback && qFb) {
      borderClass = isCorrect
        ? 'border-emerald-500 ring-1 ring-emerald-500'
        : 'border-rose-500 ring-1 ring-rose-500';
    }

    return (
      <div
        key={`mc-${qIdx}`}
        className={`bg-white rounded-xl border ${borderClass} p-5 sm:p-6 shadow-sm transition`}
      >
        <div className="flex items-center justify-between gap-2 mb-3">
          <div className="flex items-center gap-2">
            <span className="bg-slate-900 text-white text-xs font-extrabold px-2.5 py-1 rounded">
              TEST {testNumber} • SORU {questionInTest}
            </span>
            <span className="bg-amber-100 text-amber-900 text-[11px] font-extrabold px-2 py-0.5 rounded">
              Çoktan Seçmeli
            </span>
            {activeTestIdx === 'all' && (
              <span className="text-xs font-bold text-slate-500">(Genel #{qIdx + 1})</span>
            )}
          </div>
          <span className="text-xs font-bold text-slate-400">{pointsPerQuestion} Puan</span>
        </div>

        <p className="text-base sm:text-lg font-bold text-slate-900 mb-5 leading-relaxed">
          {q.q}
        </p>

        <div className="space-y-2.5">
          {q.options.map((opt, oIdx) => {
            const isSelected = userChoice === oIdx;
            const isRightAnswer = qFb && qFb.answer === oIdx;
            const optExp = qFb?.optionExplanations?.[oIdx];

            let btnStyle =
              'bg-slate-50 border-slate-200 text-slate-800 hover:bg-slate-100 hover:border-slate-300';
            let badgeStyle = 'bg-white border-slate-300 text-slate-700';

            if (hasAnswered) {
              if (showFeedback && qFb) {
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
                    {hasAnswered && showFeedback && qFb && isRightAnswer && (
                      <span className="text-[11px] font-extrabold uppercase px-2 py-0.5 rounded bg-emerald-600 text-white shrink-0">
                        ✓ Doğru Şık
                      </span>
                    )}
                    {hasAnswered && showFeedback && qFb && isSelected && !isRightAnswer && (
                      <span className="text-[11px] font-extrabold uppercase px-2 py-0.5 rounded bg-rose-600 text-white shrink-0">
                        ✗ Senin Seçimin
                      </span>
                    )}
                  </div>

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
                        {isRightAnswer ? 'Neden Doğru? ' : `${LETTERS[oIdx]} Şıkkı Nedir? `}
                      </span>
                      {optExp}
                    </div>
                  )}
                </div>
              </button>
            );
          })}
        </div>

        {/* Immediate "Sonraki Soru" action bar right after selecting an answer in Paged mode */}
        {showNextPrompt && hasAnswered && (
          <div className="mt-5 pt-4 border-t border-slate-200 flex flex-wrap items-center justify-between gap-3">
            <span className="text-xs font-bold text-slate-600">
              {showFeedback && qFb ? (
                isCorrect ? (
                  <span className="text-emerald-700 font-extrabold">
                    ✅ Harika! Cevabın doğru, sıradaki soruya geçebilirsin.
                  </span>
                ) : (
                  <span className="text-rose-700 font-extrabold">
                    💡 Açıklamayı incelediysen sıradaki soruya geçebilirsin.
                  </span>
                )
              ) : (
                <span className="text-blue-700 font-extrabold">
                  ✓ Seçimin kaydedildi ({LETTERS[userChoice]}).
                </span>
              )}
            </span>

            <button
              onClick={goNextStep}
              className="bg-amber-500 hover:bg-amber-400 text-slate-950 font-black text-sm px-5 py-2.5 rounded-xl shadow-md hover:shadow-lg transition flex items-center gap-2 ml-auto"
            >
              <span>
                {safeStep < pagedItems.length - 1
                  ? `Sonraki Soru (Soru ${safeStep + 2}/${pagedItems.length})`
                  : activeTestIdx !== 'all' && activeTestIdx < 9
                  ? `Sonraki Teste Geç (Test ${activeTestIdx + 2})`
                  : 'Test Tamamlandı'}
              </span>
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        )}

        {hasAnswered && showFeedback && qFb && (
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
                    : `Yanlış! Doğru Seçenek: ${LETTERS[qFb.answer]} (${q.options[qFb.answer]})`}
                </span>{' '}
                — {qFb.explanation}
              </div>
            </div>

            {qFb.optionExplanations && qFb.optionExplanations.length > 0 && (
              <div className="mt-3 pt-3 border-t border-slate-200/80">
                <div className="flex items-center gap-1.5 text-xs font-extrabold uppercase tracking-wide text-slate-700 mb-2">
                  <ListChecks className="w-4 h-4 text-slate-600" />
                  Tüm Şıkların Detaylı Açıklaması (A - E Özeti)
                </div>
                <div className="grid grid-cols-1 gap-1.5">
                  {q.options.map((optText, idx) => {
                    const isRight = idx === qFb.answer;
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
                        <span className="font-normal">{qFb.optionExplanations[idx]}</span>
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
  };

  // Helper to render a single Fill-in-the-blank card (used in both Paged and List modes)
  const renderFillCard = (q, qIdx, showNextPrompt = false) => {
    const testNumber = Math.floor(qIdx / 5) + 1;
    const fillInTest = (qIdx % 5) + 1;

    const fState = courseState.fill?.[qIdx] || {
      val: '',
      checked: false
    };
    const fFb = courseFeedback.fill?.[qIdx];

    let borderClass = 'border-slate-200';
    if (fState.checked && showFeedback && fFb) {
      borderClass = fFb.ok
        ? 'border-emerald-500 ring-1 ring-emerald-500'
        : 'border-rose-500 ring-1 ring-rose-500';
    }

    return (
      <div
        key={`fill-${qIdx}`}
        className={`bg-white rounded-xl border ${borderClass} p-5 sm:p-6 shadow-sm transition`}
      >
        {showWordBank && currentWordBank.length > 0 && showNextPrompt && (
          <div className="bg-blue-50 border border-blue-200 rounded-xl p-3.5 mb-4">
            <div className="text-xs font-extrabold uppercase tracking-wide text-blue-900 mb-2">
              🔑 Bu Testin Kelime Havuzu (Kelimeye Tıklayarak Direkt Kutuya Yazdırabilirsin)
            </div>
            <div className="flex flex-wrap gap-2">
              {currentWordBank.map((word, idx) => (
                <button
                  type="button"
                  key={idx}
                  onClick={() => handleFillChange(qIdx, word)}
                  className="bg-white hover:bg-blue-600 hover:text-white border border-blue-300 text-blue-900 px-3 py-1 rounded-md text-xs font-bold shadow-sm transition"
                >
                  {word}
                </button>
              ))}
            </div>
          </div>
        )}

        <div className="flex items-center justify-between gap-2 mb-3">
          <div className="flex items-center gap-2">
            <span className="bg-slate-900 text-white text-xs font-extrabold px-2.5 py-1 rounded">
              TEST {testNumber} • BOŞLUK DOLDURMA {fillInTest}
            </span>
            <span className="bg-blue-100 text-blue-900 text-[11px] font-extrabold px-2 py-0.5 rounded">
              Boşluk Doldurma
            </span>
            {activeTestIdx === 'all' && (
              <span className="text-xs font-bold text-slate-500">(Genel #{qIdx + 1})</span>
            )}
          </div>
          <span className="text-xs font-bold text-slate-400">{pointsPerQuestion} Puan</span>
        </div>

        <p className="text-base sm:text-lg font-bold text-slate-900 mb-4 leading-relaxed">
          {q.q}
        </p>

        <div className="flex flex-wrap items-center gap-2.5">
          <input
            type="text"
            value={fState.val}
            onChange={(e) => handleFillChange(qIdx, e.target.value)}
            onKeyDown={(e) => {
              if (e.key === 'Enter') handleCheckFill(qIdx, false);
            }}
            placeholder="Cevabınızı buraya yazın veya üstteki kelimeye tıklayın..."
            className="flex-1 min-w-[220px] px-3.5 py-2.5 rounded-lg border-2 border-slate-300 focus:border-blue-600 focus:outline-none text-sm font-bold text-slate-900"
          />
          <button
            onClick={() => handleCheckFill(qIdx, false)}
            className="bg-slate-900 hover:bg-slate-800 text-white text-xs font-bold px-4 py-2.5 rounded-lg transition"
          >
            Kontrol Et
          </button>
          <button
            onClick={() => handleCheckFill(qIdx, true)}
            className="bg-slate-100 hover:bg-slate-200 text-slate-700 border border-slate-300 text-xs font-bold px-3.5 py-2.5 rounded-lg transition"
          >
            Cevabı Gör
          </button>
        </div>

        <div className="flex items-center gap-1.5 text-xs text-slate-500 mt-2 font-medium">
          <HelpCircle className="w-3.5 h-3.5 text-slate-400" />
          <span>İpucu: {q.hint}</span>
        </div>

        {fState.checked && showFeedback && fFb && (
          <div
            className={`mt-4 p-3.5 rounded-lg border-l-4 text-sm flex items-start gap-2.5 ${
              fFb.ok
                ? 'bg-emerald-50/70 border-emerald-600 text-emerald-950'
                : 'bg-rose-50/70 border-rose-600 text-rose-950'
            }`}
          >
            {fFb.ok ? (
              <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
            ) : (
              <XCircle className="w-5 h-5 text-rose-600 shrink-0 mt-0.5" />
            )}
            <div>
              {fFb.ok ? (
                <span>
                  <strong>Doğru!</strong> Cevap:{' '}
                  <u className="font-extrabold">{fFb.correctAnswer}</u>
                </span>
              ) : (
                <span>
                  <strong>Doğru Cevap:</strong>{' '}
                  <u className="font-extrabold">{fFb.correctAnswer}</u>{' '}
                  <span className="text-xs opacity-80">
                    (Senin yazdığın: {fState.val || 'Boş'})
                  </span>
                </span>
              )}
              {fFb.explanation && (
                <p className="mt-1 text-xs opacity-90 leading-relaxed">
                  💡 {fFb.explanation}
                </p>
              )}
            </div>
          </div>
        )}

        {/* Immediate "Sonraki Soru" action bar after checking Fill question in Paged mode */}
        {showNextPrompt && fState.checked && (
          <div className="mt-5 pt-4 border-t border-slate-200 flex flex-wrap items-center justify-between gap-3">
            <span className="text-xs font-bold text-slate-600">
              {fFb?.ok ? (
                <span className="text-emerald-700 font-extrabold">
                  ✅ Doğru cevap! Sıradaki soruya geçebilirsin.
                </span>
              ) : (
                <span className="text-rose-700 font-extrabold">
                  💡 Doğru cevabı incelediysen sıradaki soruya geçebilirsin.
                </span>
              )}
            </span>

            <button
              onClick={goNextStep}
              className="bg-amber-500 hover:bg-amber-400 text-slate-950 font-black text-sm px-5 py-2.5 rounded-xl shadow-md hover:shadow-lg transition flex items-center gap-2 ml-auto"
            >
              <span>
                {safeStep < pagedItems.length - 1
                  ? `Sonraki Soru (Soru ${safeStep + 2}/${pagedItems.length})`
                  : activeTestIdx !== 'all' && activeTestIdx < 9
                  ? `Sonraki Teste Geç (Test ${activeTestIdx + 2})`
                  : 'Test Tamamlandı'}
              </span>
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        )}
      </div>
    );
  };

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
              <h1 className="text-lg font-extrabold tracking-tight flex items-center gap-2">
                SDÜ İSG Yüksek Lisans — Vize Sınav Portalı
                <span className="hidden sm:inline-flex items-center gap-1 text-[10px] bg-emerald-950 border border-emerald-600 text-emerald-300 px-2 py-0.5 rounded-full font-bold">
                  <ShieldCheck className="w-3 h-3" /> 60 Deneme Sınavı • Backend Korumalı
                </span>
              </h1>
              <p className="text-xs text-slate-400">
                6 Ders × 10 Test = 60 Sınav • {totalAllCoursesMC} Çoktan Seçmeli + {totalAllCoursesFill} Boşluk Doldurma (Toplam{' '}
                {totalAllCoursesMC + totalAllCoursesFill} Soru)
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
                onClick={async () => {
                  await evaluateAllOnBackend(answers);
                  setExamSubmitted(true);
                }}
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
          {courses.map((course) => {
            const st = getStats(course, 'all');
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
                    10 Test • {st.answered}/{st.total}
                  </span>
                  <span
                    className={
                      st.score >= 70
                        ? 'text-emerald-700 font-extrabold'
                        : 'text-slate-700 font-bold'
                    }
                  >
                    %{st.score}
                  </span>
                </div>
              </button>
            );
          })}
        </div>

        {/* Active Course Banner & Score Card */}
        <div
          className="bg-white rounded-xl border border-slate-200 shadow-sm p-6 mb-5 flex flex-col lg:flex-row justify-between gap-6"
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
            <div className="text-[11px] font-extrabold uppercase tracking-wider text-slate-500 mb-1">
              {activeTestIdx === 'all' ? 'Tüm 10 Test Genel Puanı' : `Test ${activeTestIdx + 1} Puanı`}
            </div>
            <Award
              className={`w-7 h-7 mb-1 ${
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

            <div className="grid grid-cols-3 gap-2 w-full mt-3.5 pt-3 border-t border-slate-200 text-xs font-bold">
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

            <div className="w-full mt-3 pt-2.5 border-t border-slate-200 text-[11px] font-bold text-slate-500 flex items-center justify-between">
              <span>Ders Genel (10 Test):</span>
              <span className="text-slate-800">
                {overallCourseStats.answered}/{overallCourseStats.total} Soru (%{overallCourseStats.score})
              </span>
            </div>
          </div>
        </div>

        {/* 10-TEST SELECTOR BAR (Test 1 .. Test 10 + Tüm 10 Test) */}
        {activeCourse.tests && activeCourse.tests.length > 0 && (
          <div className="bg-white rounded-xl border border-slate-200 p-4 mb-5 shadow-sm">
            <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
              <div className="flex items-center gap-2 text-xs font-extrabold uppercase tracking-wider text-slate-800">
                <Layers className="w-4 h-4 text-amber-600" />
                <span>
                  {activeCourse.code} — 10 Ayrı Deneme Sınavı Seçimi (Her Test: 10 Çoktan Seçmeli + 5 Boşluk Doldurma = 15 Soru)
                </span>
              </div>
              <button
                onClick={() => {
                  setActiveTestIdx('all');
                  setExamSubmitted(false);
                }}
                className={`px-3 py-1.5 rounded-lg text-xs font-extrabold transition border ${
                  activeTestIdx === 'all'
                    ? 'bg-amber-500 text-slate-950 border-amber-600 shadow'
                    : 'bg-slate-100 text-slate-700 border-slate-300 hover:bg-slate-200'
                }`}
              >
                📚 Tüm 10 Testi Birlikte Seç (150 Soru)
              </button>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-5 lg:grid-cols-10 gap-2">
              {activeCourse.tests.map((t, idx) => {
                const tStat = getStats(activeCourse, idx);
                const isSelected = activeTestIdx === idx;
                const isDone = tStat.answered === tStat.total && tStat.total > 0;
                return (
                  <button
                    key={t.testId}
                    onClick={() => {
                      setActiveTestIdx(idx);
                      setExamSubmitted(false);
                    }}
                    title={t.title}
                    className={`p-2.5 rounded-xl border text-left transition flex flex-col justify-between ${
                      isSelected
                        ? 'bg-slate-900 text-white border-slate-900 shadow-md -translate-y-0.5'
                        : isDone
                        ? 'bg-emerald-50/70 border-emerald-300 text-slate-900 hover:border-emerald-500'
                        : 'bg-slate-50 border-slate-200 text-slate-800 hover:bg-white hover:border-slate-400'
                    }`}
                  >
                    <div>
                      <div className="flex items-center justify-between gap-1">
                        <span
                          className={`text-xs font-black ${
                            isSelected ? 'text-amber-400' : 'text-slate-900'
                          }`}
                        >
                          {t.shortTitle}
                        </span>
                        <span
                          className={`text-[10px] font-extrabold px-1.5 py-0.5 rounded ${
                            isSelected
                              ? 'bg-slate-800 text-slate-200'
                              : isDone
                              ? 'bg-emerald-600 text-white'
                              : 'bg-slate-200 text-slate-700'
                          }`}
                        >
                          {tStat.answered}/{tStat.total}
                        </span>
                      </div>
                      <div
                        className={`text-[11px] font-medium mt-1 line-clamp-2 leading-tight ${
                          isSelected ? 'text-slate-300' : 'text-slate-600'
                        }`}
                      >
                        {t.theme}
                      </div>
                    </div>

                    <div
                      className={`mt-2 pt-1.5 border-t text-[10px] font-extrabold flex items-center justify-between ${
                        isSelected ? 'border-slate-700 text-amber-300' : 'border-slate-200 text-slate-500'
                      }`}
                    >
                      <span>Puan:</span>
                      <span
                        className={
                          tStat.score >= 70
                            ? isSelected
                              ? 'text-emerald-400'
                              : 'text-emerald-700'
                            : ''
                        }
                      >
                        {tStat.score}/100
                      </span>
                    </div>
                  </button>
                );
              })}
            </div>

            {activeTestMeta && (
              <div className="mt-3 pt-3 border-t border-slate-200 flex flex-wrap items-center justify-between gap-2 text-xs">
                <div className="font-extrabold text-slate-900 flex items-center gap-2">
                  <span className="bg-amber-500 text-slate-950 px-2.5 py-0.5 rounded font-black">
                    AKTİF SINAV: {activeTestMeta.shortTitle.toUpperCase()}
                  </span>
                  <span>{activeTestMeta.theme}</span>
                </div>
                <span className="text-slate-500 font-semibold">
                  10 Çoktan Seçmeli + 5 Boşluk Doldurma = 15 Soru (Her soru {pointsPerQuestion} Puan)
                </span>
              </div>
            )}
          </div>
        )}

        {/* Filter, View Mode (Sayfa Sayfa / Liste) & Action Bar */}
        <div className="bg-white rounded-xl border border-slate-200 p-3.5 mb-5 flex flex-wrap items-center justify-between gap-3 shadow-sm">
          <div className="flex flex-wrap items-center gap-2">
            {/* View Mode Toggle: Sayfa Sayfa vs Liste */}
            <div className="inline-flex rounded-lg bg-slate-100 p-1 border border-slate-300 mr-1">
              <button
                onClick={() => setViewMode('paged')}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-md text-xs font-extrabold transition ${
                  viewMode === 'paged'
                    ? 'bg-amber-500 text-slate-950 shadow-sm'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                <FileText className="w-3.5 h-3.5" />
                Sayfa Sayfa (Tek Soru)
              </button>
              <button
                onClick={() => setViewMode('list')}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-md text-xs font-extrabold transition ${
                  viewMode === 'list'
                    ? 'bg-amber-500 text-slate-950 shadow-sm'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                <LayoutList className="w-3.5 h-3.5" />
                Tüm Liste
              </button>
            </div>

            <button
              onClick={() => setFilter('all')}
              className={`px-3 py-2 rounded-lg text-xs font-bold transition ${
                filter === 'all'
                  ? 'bg-slate-900 text-white'
                  : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
              }`}
            >
              Tümü ({activeStats.total})
            </button>
            <button
              onClick={() => setFilter('mc')}
              className={`px-3 py-2 rounded-lg text-xs font-bold transition ${
                filter === 'mc'
                  ? 'bg-slate-900 text-white'
                  : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
              }`}
            >
              Çoktan Seçmeli ({visibleMC.length})
            </button>
            <button
              onClick={() => setFilter('fill')}
              className={`px-3 py-2 rounded-lg text-xs font-bold transition ${
                filter === 'fill'
                  ? 'bg-slate-900 text-white'
                  : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
              }`}
            >
              Boşluk Doldurma ({visibleFill.length})
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
              onClick={handleRevealCurrentView}
              className="flex items-center gap-1.5 px-3 py-2 rounded-lg border border-slate-300 bg-white hover:bg-slate-50 text-xs font-bold text-slate-700"
            >
              <Eye className="w-3.5 h-3.5 text-blue-600" />
              {activeTestIdx === 'all' ? 'Tüm 150 Cevabı Göster' : `Test ${activeTestIdx + 1} Cevaplarını Göster`}
            </button>
            <button
              onClick={handleResetCurrentView}
              className="flex items-center gap-1.5 px-3 py-2 rounded-lg border border-rose-200 bg-rose-50 hover:bg-rose-100 text-xs font-bold text-rose-700"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              {activeTestIdx === 'all' ? 'Tüm Dersi Sıfırla' : `Test ${activeTestIdx + 1}'i Sıfırla`}
            </button>
          </div>
        </div>

        {/* ===================================================================== */}
        {/* PAGED ("SAYFA SAYFA / TEK SORU") MODE                                  */}
        {/* ===================================================================== */}
        {viewMode === 'paged' && currentPagedItem && (
          <div className="mb-10">
            {/* Question Number Navigator Bar */}
            <div className="bg-white rounded-xl border border-slate-200 p-4 mb-4 shadow-sm">
              <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                <div className="text-xs font-extrabold uppercase tracking-wider text-slate-700">
                  📌 Soru Gezgini — Soru {safeStep + 1} / {pagedItems.length}
                  <span className="ml-2 text-slate-400 font-semibold">
                    ({currentPagedItem.type === 'mc' ? 'Çoktan Seçmeli Test' : 'Boşluk Doldurma'})
                  </span>
                </div>

                <div className="flex items-center gap-3 text-[11px] font-bold">
                  <span className="flex items-center gap-1 text-emerald-700">
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 inline-block" /> Doğru
                  </span>
                  <span className="flex items-center gap-1 text-rose-700">
                    <span className="w-2.5 h-2.5 rounded-full bg-rose-500 inline-block" /> Yanlış
                  </span>
                  <span className="flex items-center gap-1 text-slate-500">
                    <span className="w-2.5 h-2.5 rounded-full bg-slate-200 inline-block" /> Boş
                  </span>
                </div>
              </div>

              {/* Numbered Buttons (1..15) */}
              <div className="flex flex-wrap gap-1.5">
                {pagedItems.map((item, idx) => {
                  const isCurrent = idx === safeStep;
                  let pillClass = 'bg-slate-100 text-slate-700 border-slate-300 hover:bg-slate-200';

                  if (item.type === 'mc') {
                    const ans = courseState.mc?.[item.qIdx];
                    const fb = courseFeedback.mc?.[item.qIdx];
                    if (ans !== undefined) {
                      if (showFeedback && fb) {
                        pillClass = fb.correct
                          ? 'bg-emerald-600 text-white border-emerald-700'
                          : 'bg-rose-600 text-white border-rose-700';
                      } else {
                        pillClass = 'bg-blue-600 text-white border-blue-700';
                      }
                    }
                  } else {
                    const fSt = courseState.fill?.[item.qIdx];
                    const fb = courseFeedback.fill?.[item.qIdx];
                    if (fSt?.checked) {
                      if (showFeedback && fb) {
                        pillClass = fb.ok
                          ? 'bg-emerald-600 text-white border-emerald-700'
                          : 'bg-rose-600 text-white border-rose-700';
                      } else {
                        pillClass = 'bg-blue-600 text-white border-blue-700';
                      }
                    }
                  }

                  return (
                    <button
                      key={`${item.type}-${item.qIdx}`}
                      onClick={() => setCurrentStep(idx)}
                      className={`w-9 h-9 rounded-lg border text-xs font-extrabold transition flex items-center justify-center ${pillClass} ${
                        isCurrent ? 'ring-2 ring-amber-500 ring-offset-2 scale-105 shadow' : ''
                      }`}
                      title={
                        item.type === 'mc'
                          ? `Soru ${idx + 1}: Çoktan Seçmeli`
                          : `Soru ${idx + 1}: Boşluk Doldurma`
                      }
                    >
                      {idx + 1}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Active Single Question Card */}
            {currentPagedItem.type === 'mc'
              ? renderMCCard(currentPagedItem.q, currentPagedItem.qIdx, true)
              : renderFillCard(currentPagedItem.q, currentPagedItem.qIdx, true)}

            {/* Bottom Prev / Next Navigation Bar */}
            <div className="mt-4 bg-white rounded-xl border border-slate-200 p-4 shadow-sm flex items-center justify-between gap-4">
              <button
                onClick={goPrevStep}
                disabled={safeStep === 0}
                className="flex items-center gap-2 px-4 py-2.5 rounded-xl border border-slate-300 bg-slate-50 hover:bg-slate-100 disabled:opacity-40 disabled:pointer-events-none text-xs sm:text-sm font-extrabold text-slate-800 transition"
              >
                <ChevronLeft className="w-4 h-4" />
                <span>Önceki Soru</span>
              </button>

              <div className="text-xs sm:text-sm font-extrabold text-slate-600 text-center">
                Soru <span className="text-slate-950">{safeStep + 1}</span> / {pagedItems.length}
              </div>

              <button
                onClick={goNextStep}
                disabled={
                  safeStep === pagedItems.length - 1 &&
                  (activeTestIdx === 'all' || activeTestIdx >= 9)
                }
                className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 disabled:opacity-40 disabled:pointer-events-none text-white text-xs sm:text-sm font-extrabold shadow transition"
              >
                <span>
                  {safeStep < pagedItems.length - 1
                    ? 'Sonraki Soru'
                    : activeTestIdx !== 'all' && activeTestIdx < 9
                    ? `Test ${activeTestIdx + 2}'ye Geç`
                    : 'Son Soru'}
                </span>
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        )}

        {/* ===================================================================== */}
        {/* LIST ("TÜM LİSTE") MODE                                                */}
        {/* ===================================================================== */}
        {viewMode === 'list' && (
          <>
            {(filter === 'all' || filter === 'mc') && (
              <section className="mb-10">
                <div className="flex items-center justify-between border-b-2 border-slate-300 pb-2 mb-4">
                  <h3 className="text-lg font-extrabold text-slate-900">
                    📋 Bölüm 1: Çoktan Seçmeli Test Soruları ({visibleMC.length} Soru)
                  </h3>
                  <span className="text-xs font-bold text-slate-500">
                    Her soru {pointsPerQuestion} puandır • Cevaplandığında sunucudan 5 şık analizi gelir
                  </span>
                </div>

                <div className="space-y-5">
                  {visibleMC.map((q, localIdx) =>
                    renderMCCard(q, mcStartIdx + localIdx, false)
                  )}
                </div>
              </section>
            )}

            {(filter === 'all' || filter === 'fill') && (
              <section>
                <div className="flex items-center justify-between border-b-2 border-slate-300 pb-2 mb-4">
                  <h3 className="text-lg font-extrabold text-slate-900">
                    ✍️ Bölüm 2: Boşluk Doldurma Soruları ({visibleFill.length} Soru)
                  </h3>
                  <span className="text-xs font-bold text-slate-500">
                    Her soru {pointsPerQuestion} puandır
                  </span>
                </div>

                {showWordBank && currentWordBank.length > 0 && (
                  <div className="bg-blue-50 border border-blue-200 rounded-xl p-4 mb-5">
                    <div className="text-xs font-extrabold uppercase tracking-wide text-blue-900 mb-2">
                      🔑 {activeTestIdx === 'all' ? 'Bu Dersin' : `Test ${activeTestIdx + 1}`} Boşluk Doldurma Kelime Havuzu (Karışık Sıralı — Tıklayıp Kopyalayabilirsin)
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {currentWordBank.map((word, idx) => (
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
                  {visibleFill.map((q, localIdx) =>
                    renderFillCard(q, fillStartIdx + localIdx, false)
                  )}
                </div>
              </section>
            )}
          </>
        )}
      </main>
    </div>
  );
}
