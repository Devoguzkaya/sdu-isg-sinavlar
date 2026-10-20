import React, { useState, useEffect, useRef } from 'react';
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
  Layers,
  ChevronLeft,
  ChevronRight,
  LayoutList,
  FileText,
  Home,
  ArrowRight,
  Check,
  Target,
  Cloud,
  Zap,
  Crown,
  Shield,
  Users,
  Trash2,
  RefreshCw,
  X
} from 'lucide-react';

const LETTERS = ['A', 'B', 'C', 'D', 'E'];
const ADMIN_USERNAMES = ['oguzhan', 'admin', 'devoguzkaya'];

function createEmptyCourseMap(courses) {
  const init = {};
  courses.forEach((c) => {
    init[c.id] = { mc: {}, fill: {} };
  });
  return init;
}

export default function App() {
  // Courses fetched from Backend (/api/questions)
  const [courses, setCourses] = useState([]);
  const [coursesLoading, setCoursesLoading] = useState(true);

  // Auth state (No guest mode allowed!)
  const [currentUser, setCurrentUser] = useState(() => {
    try {
      const savedUser = localStorage.getItem('sdu_isg_auth_user_v2');
      if (savedUser) {
        const parsed = JSON.parse(savedUser);
        if (parsed && !parsed.isGuest && parsed.username !== 'misafir') {
          const isAdm = ADMIN_USERNAMES.includes((parsed.username || '').toLowerCase());
          return {
            ...parsed,
            role: isAdm ? 'admin' : parsed.role || 'user',
            plan: isAdm ? 'pro' : parsed.plan || 'free'
          };
        }
        localStorage.removeItem('sdu_isg_auth_user_v2');
      }
    } catch (e) {}
    return null;
  });

  // Page routing: 'home' (Tanıtım Anasayfası) | 'portal' (Sınav & Çalışma Ekranı)
  const [activePage, setActivePage] = useState(() => {
    try {
      const savedUser = localStorage.getItem('sdu_isg_auth_user_v2');
      if (savedUser) {
        const parsed = JSON.parse(savedUser);
        if (parsed && !parsed.isGuest && parsed.username !== 'misafir') return 'portal';
      }
    } catch (e) {}
    return 'home';
  });

  const [authTab, setAuthTab] = useState('login'); // 'login' | 'signup'
  const [authUsername, setAuthUsername] = useState('');
  const [authPassword, setAuthPassword] = useState('');
  const [authFullName, setAuthFullName] = useState('');
  const [authError, setAuthError] = useState('');
  const [authLoading, setAuthLoading] = useState(false);

  // Modals: Upgrade to PRO modal & Admin Panel modal
  const [showUpgradeModal, setShowUpgradeModal] = useState(false);
  const [showAdminModal, setShowAdminModal] = useState(false);
  const [adminUsers, setAdminUsers] = useState([]);
  const [adminLoading, setAdminLoading] = useState(false);
  const [adminSearch, setAdminSearch] = useState('');

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

  const isAdmin =
    currentUser?.role === 'admin' ||
    ADMIN_USERNAMES.includes((currentUser?.username || '').toLowerCase());
  const isPro = isAdmin || currentUser?.plan === 'pro';

  const userKey = currentUser?.username || 'guest';
  const localStoreKey = `sdu_isg_react_vize_v3_${userKey}`;

  // User's selected options & typed fill strings
  const [answers, setAnswers] = useState({});
  // Backend-evaluated feedback per question (only populated after answering/submitting)
  const [feedback, setFeedback] = useState({});

  const authBoxRef = useRef(null);
  const coursesSectionRef = useRef(null);
  const pricingSectionRef = useRef(null);
  const questionStartRef = useRef(null);

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

  // Sync currentUser's live plan & role from Backend (/api/auth action: 'me')
  useEffect(() => {
    if (!currentUser?.username) return;
    fetch('/api/auth', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ action: 'me', username: currentUser.username })
    })
      .then((r) => (r.ok ? r.json() : null))
      .then((data) => {
        if (data?.user) {
          localStorage.setItem('sdu_isg_auth_user_v2', JSON.stringify(data.user));
          setCurrentUser(data.user);
        }
      })
      .catch(() => {});
  }, [currentUser?.username]);

  // Enforce Free Plan limit: if !isPro and activeTestIdx !== 0, lock to Test 1 (idx 0)
  useEffect(() => {
    if (!isPro && activeTestIdx !== 0) {
      setActiveTestIdx(0);
    }
  }, [isPro, activeTestIdx]);

  // Reset question step to 0 when course, test, or filter changes
  useEffect(() => {
    setCurrentStep(0);
  }, [activeCourseId, activeTestIdx, filter]);

  // Admin helper functions
  const fetchAdminUsers = async () => {
    if (!isAdmin || !currentUser) return;
    setAdminLoading(true);
    try {
      const r = await fetch('/api/auth', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          action: 'admin_list_users',
          adminUsername: currentUser.username
        })
      });
      if (r.ok) {
        const data = await r.json();
        setAdminUsers(data.users || []);
      }
    } catch (e) {}
    setAdminLoading(false);
  };

  const handleAdminSetPlan = async (targetUsername, newPlan) => {
    if (!isAdmin || !currentUser) return;
    setAdminLoading(true);
    try {
      const r = await fetch('/api/auth', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          action: 'admin_set_plan',
          adminUsername: currentUser.username,
          targetUsername,
          newPlan
        })
      });
      if (r.ok) {
        const data = await r.json();
        setAdminUsers(data.users || []);
      }
    } catch (e) {}
    setAdminLoading(false);
  };

  const handleAdminDeleteUser = async (targetUsername) => {
    if (!isAdmin || !currentUser) return;
    if (!window.confirm(`@${targetUsername} kullanıcısını silmek istediğine emin misin kanka?`)) {
      return;
    }
    setAdminLoading(true);
    try {
      const r = await fetch('/api/auth', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          action: 'admin_delete_user',
          adminUsername: currentUser.username,
          targetUsername
        })
      });
      if (r.ok) {
        const data = await r.json();
        setAdminUsers(data.users || []);
      }
    } catch (e) {}
    setAdminLoading(false);
  };

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
  }, [currentUser?.username, userKey, courses.length]);

  // 3. Auto-save user's answers to localStorage + Cloud (/api/sync)
  useEffect(() => {
    if (!currentUser || !cloudReady || courses.length === 0) return;
    try {
      localStorage.setItem(localStoreKey, JSON.stringify(answers));
    } catch (e) {}

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
      setActivePage('portal');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } catch (err) {
      setAuthError('Sunucu bağlantı hatası oluştu.');
    }
    setAuthLoading(false);
  };

  const scrollToAuth = (tab = 'signup') => {
    setAuthTab(tab);
    setAuthError('');
    if (activePage !== 'home') {
      setActivePage('home');
      setTimeout(() => {
        authBoxRef.current?.scrollIntoView({ behavior: 'smooth' });
      }, 80);
    } else {
      authBoxRef.current?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleOpenCourseFromHome = (courseId) => {
    setActiveCourseId(courseId);
    setActiveTestIdx(0);
    if (!currentUser) {
      scrollToAuth('signup');
    } else {
      setActivePage('portal');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const handleLogout = () => {
    localStorage.removeItem('sdu_isg_auth_user_v2');
    setCurrentUser(null);
    setAuthPassword('');
    setAuthError('');
    setActivePage('home');
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
    if (!course) return { correct: 0, wrong: 0, answered: 0, total: 0, score: 0 };
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
    if (!isPro && qIdx >= 10) {
      setShowUpgradeModal(true);
      return;
    }
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
    if (!isPro && qIdx >= 5) {
      setShowUpgradeModal(true);
      return;
    }
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
    if (!isPro && qIdx >= 5) {
      setShowUpgradeModal(true);
      return;
    }
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
    const targetTest = isPro ? activeTestIdx : 0;
    await evaluateAllOnBackend(answers, activeCourse.id, targetTest);
    setExamSubmitted(true);
  };

  const handleResetCurrentView = () => {
    const cId = activeCourse.id;
    if (activeTestIdx === 'all' && isPro) {
      setAnswers((prev) => ({
        ...prev,
        [cId]: { mc: {}, fill: {} }
      }));
      setFeedback((prev) => ({
        ...prev,
        [cId]: { mc: {}, fill: {} }
      }));
    } else {
      const tIdx = activeTestIdx === 'all' ? 0 : activeTestIdx;
      const mcStart = tIdx * 10;
      const fillStart = tIdx * 5;
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

  // ============================================================================
  // UPGRADE TO PRO MODAL (Shown when Free user clicks Test 2..10)
  // ============================================================================
  const renderUpgradeModal = () => {
    if (!showUpgradeModal) return null;
    return (
      <div className="fixed inset-0 z-[100] bg-slate-950/80 backdrop-blur-sm flex items-center justify-center p-4">
        <div className="bg-slate-900 border-2 border-amber-500 rounded-2xl max-w-lg w-full p-6 text-white shadow-2xl relative animate-in fade-in zoom-in-95 duration-150">
          <button
            onClick={() => setShowUpgradeModal(false)}
            className="absolute top-4 right-4 text-slate-400 hover:text-white p-1"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="flex items-center gap-3 mb-4">
            <div className="bg-amber-500 text-slate-950 p-3 rounded-xl shadow">
              <Crown className="w-7 h-7" />
            </div>
            <div>
              <span className="text-[11px] font-extrabold uppercase tracking-wider text-amber-400">
                PRO Üyelik Paketi
              </span>
              <h3 className="text-xl font-black text-white">
                Test 2 – Test 10 Kilidini Açın
              </h3>
            </div>
          </div>

          <p className="text-sm text-slate-300 leading-relaxed mb-4">
            Şu anda <strong>Ücretsiz Plan</strong> kullanıyorsunuz. Ücretsiz planda 6 dersin her birinden <strong>Test 1 (toplam 6 sınav • 90 soru)</strong> açıktır.
          </p>

          <div className="bg-slate-800/90 border border-slate-700 rounded-xl p-4 space-y-2.5 mb-5 text-xs">
            <div className="font-extrabold text-amber-400 uppercase tracking-wide mb-1">
              PRO Пaket İle Açılan Özellikler:
            </div>
            <div className="flex items-center gap-2 text-slate-200">
              <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
              <span>6 Dersin Tamamında <strong>10'ar Deneme Sınavı (Toplam 60 Sınav)</strong></span>
            </div>
            <div className="flex items-center gap-2 text-slate-200">
              <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
              <span><strong>600 Çoktan Seçmeli + 300 Boşluk Doldurma (900 Soru)</strong> Tam Erişim</span>
            </div>
            <div className="flex items-center gap-2 text-slate-200">
              <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
              <span>A'dan E'ye Tüm Şıkların Detaylı Konu & Mevzuat Analizi</span>
            </div>
            <div className="flex items-center gap-2 text-slate-200">
              <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
              <span>Bulut Senkronizasyon ve 45 Dk Gerçek Vize Simülasyonu</span>
            </div>
          </div>

          <div className="bg-amber-500/10 border border-amber-500/30 rounded-xl p-3.5 mb-5 text-xs text-amber-200">
            💡 <strong>Nasıl PRO Olurum?</strong> Hesabınızı (<strong>@{currentUser?.username}</strong>) PRO plana yükseltmek için platform yöneticisi (<strong>Oğuzhan Kaya</strong>) ile iletişime geçebilirsiniz. Yönetici onayladığı anda tüm 60 test anında açılır!
          </div>

          <div className="flex justify-end gap-2.5">
            <button
              onClick={() => setShowUpgradeModal(false)}
              className="bg-amber-500 hover:bg-amber-400 text-slate-950 font-black text-xs px-5 py-2.5 rounded-xl transition"
            >
              Anladım, Test 1'e Devam Et
            </button>
          </div>
        </div>
      </div>
    );
  };

  // ============================================================================
  // ADMIN PANEL MODAL (Only visible to Oğuzhan / Admin)
  // ============================================================================
  const renderAdminModal = () => {
    if (!showAdminModal || !isAdmin) return null;

    const filteredUsers = adminUsers.filter(
      (u) =>
        u.username.toLowerCase().includes(adminSearch.toLowerCase()) ||
        (u.fullName || '').toLowerCase().includes(adminSearch.toLowerCase())
    );
    const proCount = adminUsers.filter((u) => u.plan === 'pro').length;
    const freeCount = adminUsers.length - proCount;

    return (
      <div className="fixed inset-0 z-[100] bg-slate-950/80 backdrop-blur-sm flex items-center justify-center p-4">
        <div className="bg-slate-900 border-2 border-amber-500 rounded-2xl max-w-3xl w-full max-h-[88vh] flex flex-col text-white shadow-2xl overflow-hidden">
          {/* Modal Header */}
          <div className="bg-slate-950 px-6 py-4 border-b border-slate-800 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="bg-amber-500 text-slate-950 p-2.5 rounded-xl">
                <Crown className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-lg font-black text-white">
                  Yönetici (Admin) Paneli — Üye & Paket Yönetimi
                </h3>
                <p className="text-xs text-slate-400">
                  Kayıtlı öğrencileri tek tıkla <strong>PRO (Ücretli)</strong> veya <strong>Ücretsiz (Free)</strong> plana geçirebilirsin.
                </p>
              </div>
            </div>
            <button
              onClick={() => setShowAdminModal(false)}
              className="text-slate-400 hover:text-white p-1.5 rounded-lg bg-slate-800"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Stats & Search */}
          <div className="p-5 border-b border-slate-800 bg-slate-900/60 flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center gap-3 text-xs font-extrabold">
              <span className="bg-slate-800 border border-slate-700 px-3 py-1.5 rounded-lg text-slate-200">
                👥 Toplam Üye: {adminUsers.length}
              </span>
              <span className="bg-amber-500/20 border border-amber-500/40 px-3 py-1.5 rounded-lg text-amber-300">
                👑 PRO Üye: {proCount}
              </span>
              <span className="bg-slate-800 border border-slate-700 px-3 py-1.5 rounded-lg text-slate-400">
                🆓 Ücretsiz Üye: {freeCount}
              </span>
            </div>

            <div className="flex items-center gap-2">
              <input
                type="text"
                value={adminSearch}
                onChange={(e) => setAdminSearch(e.target.value)}
                placeholder="Üye ara (isim veya kullanıcı adı)..."
                className="bg-slate-800 border border-slate-700 rounded-xl px-3.5 py-2 text-xs font-bold text-white placeholder-slate-500 focus:outline-none focus:border-amber-500"
              />
              <button
                onClick={fetchAdminUsers}
                disabled={adminLoading}
                className="bg-slate-800 hover:bg-slate-700 border border-slate-700 text-slate-200 p-2 rounded-xl transition"
                title="Listeyi Yenile"
              >
                <RefreshCw className={`w-4 h-4 ${adminLoading ? 'animate-spin' : ''}`} />
              </button>
            </div>
          </div>

          {/* Users Table */}
          <div className="p-5 overflow-y-auto flex-1 space-y-2.5">
            {adminLoading && adminUsers.length === 0 ? (
              <div className="text-center py-10 text-sm text-slate-400 font-bold">
                Kullanıcılar yükleniyor...
              </div>
            ) : filteredUsers.length === 0 ? (
              <div className="text-center py-10 text-sm text-slate-400 font-bold">
                Kayıtlı kullanıcı bulunamadı.
              </div>
            ) : (
              filteredUsers.map((u) => {
                const isUserAdmin = u.role === 'admin';
                const isUserPro = u.plan === 'pro' || isUserAdmin;
                return (
                  <div
                    key={u.username}
                    className="bg-slate-800/80 border border-slate-700 rounded-xl p-3.5 flex flex-wrap items-center justify-between gap-3"
                  >
                    <div className="flex items-center gap-3">
                      <div
                        className={`w-9 h-9 rounded-xl flex items-center justify-center font-black text-sm ${
                          isUserAdmin
                            ? 'bg-amber-500 text-slate-950'
                            : isUserPro
                            ? 'bg-emerald-600 text-white'
                            : 'bg-slate-700 text-slate-300'
                        }`}
                      >
                        {u.fullName?.[0]?.toUpperCase() || u.username[0].toUpperCase()}
                      </div>
                      <div>
                        <div className="flex items-center gap-2">
                          <span className="font-extrabold text-sm text-white">
                            {u.fullName}
                          </span>
                          <span className="text-xs font-bold text-slate-400">
                            @{u.username}
                          </span>
                          {isUserAdmin && (
                            <span className="bg-amber-500 text-slate-950 text-[10px] font-black px-2 py-0.5 rounded-full uppercase">
                              ADMIN
                            </span>
                          )}
                          <span
                            className={`text-[10px] font-black px-2 py-0.5 rounded-full uppercase ${
                              isUserPro
                                ? 'bg-emerald-500/20 border border-emerald-500/40 text-emerald-300'
                                : 'bg-slate-700 text-slate-300'
                            }`}
                          >
                            {isUserPro ? '👑 PRO PAKET (60 TEST)' : '🆓 ÜCRETSİZ (TEST 1)'}
                          </span>
                        </div>
                        {u.createdAt && (
                          <div className="text-[11px] text-slate-500 mt-0.5">
                            Kayıt: {new Date(u.createdAt).toLocaleDateString('tr-TR')}
                          </div>
                        )}
                      </div>
                    </div>

                    {!isUserAdmin && (
                      <div className="flex items-center gap-2">
                        {isUserPro ? (
                          <button
                            onClick={() => handleAdminSetPlan(u.username, 'free')}
                            disabled={adminLoading}
                            className="bg-slate-700 hover:bg-slate-600 text-slate-200 text-xs font-extrabold px-3 py-2 rounded-lg transition"
                          >
                            Ücretsize Düşür
                          </button>
                        ) : (
                          <button
                            onClick={() => handleAdminSetPlan(u.username, 'pro')}
                            disabled={adminLoading}
                            className="bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-extrabold px-3.5 py-2 rounded-lg shadow transition flex items-center gap-1.5"
                          >
                            <Crown className="w-3.5 h-3.5" />
                            <span>PRO Yap (Tüm Testleri Aç)</span>
                          </button>
                        )}
                        <button
                          onClick={() => handleAdminDeleteUser(u.username)}
                          disabled={adminLoading}
                          title="Kullanıcıyı Sil"
                          className="bg-rose-950/80 hover:bg-rose-600 text-rose-300 hover:text-white p-2 rounded-lg border border-rose-800 transition"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                    )}
                  </div>
                );
              })
            )}
          </div>
        </div>
      </div>
    );
  };

  // Shared Footer Component
  const renderFooter = () => (
    <footer className="bg-slate-950 text-slate-400 border-t border-slate-800 mt-20">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div className="md:col-span-2 space-y-3">
            <div className="flex items-center gap-3">
              <div className="bg-amber-500 text-slate-950 p-2 rounded-lg">
                <GraduationCap className="w-6 h-6" />
              </div>
              <span className="text-lg font-black text-white tracking-tight">
                SDÜ İSG Yüksek Lisans Sınav Portalı
              </span>
            </div>
            <p className="text-sm text-slate-400 leading-relaxed max-w-md">
              Süleyman Demirel Üniversitesi İş Sağlığı ve Güvenliği Yüksek Lisans programı dersleri için hazırlanmış interaktif vize/final çalışma, konu tarama ve deneme sınavı platformu.
            </p>
          </div>

          <div>
            <h4 className="text-xs font-extrabold uppercase tracking-wider text-amber-400 mb-3">
              Yüksek Lisans Dersleri
            </h4>
            <ul className="space-y-2 text-xs font-semibold">
              {courses.map((c) => (
                <li key={c.id}>
                  <button
                    onClick={() => handleOpenCourseFromHome(c.id)}
                    className="hover:text-white transition text-left"
                  >
                    • {c.title}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-extrabold uppercase tracking-wider text-amber-400 mb-3">
              Üyelik & Çalışma Modları
            </h4>
            <ul className="space-y-2 text-xs font-semibold">
              <li>
                <button
                  onClick={() => {
                    setActivePage('home');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="hover:text-white transition"
                >
                  • Tanıtım Anasayfası
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    if (!currentUser) scrollToAuth('signup');
                    else {
                      setMode('study');
                      setActivePage('portal');
                    }
                  }}
                  className="hover:text-white transition"
                >
                  • Öğretici Çalışma Modu (Şık Analizli)
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    if (!currentUser) scrollToAuth('signup');
                    else {
                      setMode('exam');
                      setActivePage('portal');
                    }
                  }}
                  className="hover:text-white transition"
                >
                  • 45 Dk Gerçek Sınav Simülasyonu
                </button>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-6 border-t border-slate-800/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500 font-semibold">
          <p>© 2026 SDÜ İSG Yüksek Lisans Çalışma Portalı • Tüm Hakları Saklıdır.</p>
          <p className="text-slate-400">
            6 Ders • 60 Deneme Sınavı • 900 Çözümlü Soru
          </p>
        </div>
      </div>
    </footer>
  );

  // ============================================================================
  // RENDER LANDING / HOME PAGE ('home' OR NOT LOGGED IN)
  // ============================================================================
  if (activePage === 'home' || !currentUser) {
    return (
      <div className="min-h-screen bg-slate-950 text-white flex flex-col justify-between">
        {renderAdminModal()}
        {/* Top Landing Header */}
        <header className="sticky top-0 z-50 bg-slate-950/90 backdrop-blur-md border-b border-slate-800">
          <div className="max-w-7xl mx-auto px-4 py-4 flex flex-wrap items-center justify-between gap-4">
            <div
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="flex items-center gap-3 cursor-pointer"
            >
              <div className="bg-amber-500 text-slate-950 p-2.5 rounded-xl shadow-md">
                <GraduationCap className="w-6 h-6" />
              </div>
              <div>
                <h1 className="text-base sm:text-lg font-black tracking-tight text-white">
                  SDÜ İSG Yüksek Lisans
                </h1>
                <p className="text-[11px] font-bold text-amber-400">
                  Akademik Sınav & Deneme Platformu
                </p>
              </div>
            </div>

            <nav className="hidden md:flex items-center gap-6 text-xs font-extrabold uppercase tracking-wider text-slate-300">
              <button
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                className="hover:text-amber-400 transition"
              >
                Anasayfa
              </button>
              <button
                onClick={() =>
                  coursesSectionRef.current?.scrollIntoView({ behavior: 'smooth' })
                }
                className="hover:text-amber-400 transition"
              >
                Dersler (6)
              </button>
              <button
                onClick={() =>
                  pricingSectionRef.current?.scrollIntoView({ behavior: 'smooth' })
                }
                className="hover:text-amber-400 transition"
              >
                Paketler (Ücretsiz / PRO)
              </button>
            </nav>

            <div className="flex items-center gap-2.5">
              {currentUser ? (
                <>
                  {isAdmin && (
                    <button
                      onClick={() => {
                        setShowAdminModal(true);
                        fetchAdminUsers();
                      }}
                      className="bg-slate-800 hover:bg-slate-700 text-amber-400 border border-amber-500/40 text-xs font-extrabold px-3.5 py-2.5 rounded-xl transition flex items-center gap-1.5"
                    >
                      <Crown className="w-4 h-4" />
                      <span>Admin Paneli</span>
                    </button>
                  )}
                  <button
                    onClick={() => setActivePage('portal')}
                    className="bg-amber-500 hover:bg-amber-400 text-slate-950 text-xs font-black px-4 py-2.5 rounded-xl shadow transition flex items-center gap-1.5"
                  >
                    <span>Sınavlara Geç ({currentUser.fullName})</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                  <button
                    onClick={handleLogout}
                    title="Çıkış Yap"
                    className="bg-slate-800 hover:bg-rose-600 text-slate-300 hover:text-white p-2.5 rounded-xl border border-slate-700 transition"
                  >
                    <LogOut className="w-4 h-4" />
                  </button>
                </>
              ) : (
                <>
                  <button
                    onClick={() => scrollToAuth('login')}
                    className="bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 text-xs font-bold px-3.5 py-2.5 rounded-xl transition"
                  >
                    Giriş Yap
                  </button>
                  <button
                    onClick={() => scrollToAuth('signup')}
                    className="bg-amber-500 hover:bg-amber-400 text-slate-950 text-xs font-black px-4 py-2.5 rounded-xl shadow transition"
                  >
                    Ücretsiz Kayıt Ol
                  </button>
                </>
              )}
            </div>
          </div>
        </header>

        {/* Hero Section + Login/Signup Card */}
        <section className="relative overflow-hidden py-12 lg:py-20 border-b border-slate-800/80">
          <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            {/* Left Column: Site Introduction */}
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 bg-amber-500/10 border border-amber-500/30 text-amber-400 px-3.5 py-1.5 rounded-full text-xs font-extrabold uppercase tracking-wider">
                <Sparkles className="w-4 h-4" />
                <span>2026 Bahar Dönemi Vize & Final Hazırlık Portalı</span>
              </div>

              <h2 className="text-3xl sm:text-5xl font-black tracking-tight leading-tight text-white">
                SDÜ İş Sağlığı ve Güvenliği{' '}
                <span className="text-amber-400">Yüksek Lisans</span> Deneme Sınavı Merkezi
              </h2>

              <p className="text-slate-300 text-base sm:text-lg leading-relaxed max-w-2xl">
                6 yüksek lisans dersinin tamamı için ders hocalarının sınav formatına birebir uygun olarak hazırlanmış{' '}
                <strong className="text-white">60 ayrı konu temalı deneme sınavı</strong>,{' '}
                <strong className="text-white">600 çoktan seçmeli test</strong> ve{' '}
                <strong className="text-white">300 boşluk doldurma</strong> sorusuyla sınavlara eksiksiz hazırlanın.
              </p>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-2">
                <div className="bg-slate-900/90 border border-slate-800 p-4 rounded-2xl">
                  <div className="text-2xl sm:text-3xl font-black text-amber-400">6</div>
                  <div className="text-xs font-bold text-slate-400 mt-1">Yüksek Lisans Dersi</div>
                </div>
                <div className="bg-slate-900/90 border border-slate-800 p-4 rounded-2xl">
                  <div className="text-2xl sm:text-3xl font-black text-amber-400">60</div>
                  <div className="text-xs font-bold text-slate-400 mt-1">Ayrı Deneme Sınavı</div>
                </div>
                <div className="bg-slate-900/90 border border-slate-800 p-4 rounded-2xl">
                  <div className="text-2xl sm:text-3xl font-black text-amber-400">900</div>
                  <div className="text-xs font-bold text-slate-400 mt-1">Çözümlü Özgün Soru</div>
                </div>
                <div className="bg-slate-900/90 border border-slate-800 p-4 rounded-2xl">
                  <div className="text-2xl sm:text-3xl font-black text-emerald-400">A-E</div>
                  <div className="text-xs font-bold text-slate-400 mt-1">5 Şık Detaylı Analiz</div>
                </div>
              </div>

              <div className="flex flex-wrap items-center gap-3.5 pt-2">
                <button
                  onClick={() => {
                    if (currentUser) setActivePage('portal');
                    else scrollToAuth('signup');
                  }}
                  className="bg-amber-500 hover:bg-amber-400 text-slate-950 font-black text-sm px-6 py-3.5 rounded-xl shadow-lg transition flex items-center gap-2"
                >
                  <span>{currentUser ? 'Sınav Portalına Geç' : 'Ücretsiz Hesap Oluştur & Başla'}</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
                <button
                  onClick={() =>
                    pricingSectionRef.current?.scrollIntoView({ behavior: 'smooth' })
                  }
                  className="bg-slate-900 hover:bg-slate-800 text-slate-200 border border-slate-700 font-bold text-sm px-5 py-3.5 rounded-xl transition"
                >
                  Paketleri İncele (Ücretsiz / PRO)
                </button>
              </div>
            </div>

            {/* Right Column: Login / Signup Card (or Quick Launch Card if logged in) */}
            <div ref={authBoxRef} className="lg:col-span-5 flex justify-center">
              {currentUser ? (
                <div className="w-full max-w-md bg-slate-900 border border-slate-800 rounded-2xl shadow-2xl p-6 space-y-5">
                  <div className="flex items-center justify-between border-b border-slate-800 pb-4">
                    <div className="flex items-center gap-3.5">
                      <div className="bg-amber-500 text-slate-950 p-3 rounded-xl">
                        <User className="w-7 h-7" />
                      </div>
                      <div>
                        <div className="text-xs font-bold text-amber-400 uppercase">
                          Aktif Öğrenci Oturumu
                        </div>
                        <h3 className="text-lg font-black text-white">{currentUser.fullName}</h3>
                        <p className="text-xs text-slate-400">@{currentUser.username}</p>
                      </div>
                    </div>
                    <span
                      className={`text-xs font-black px-3 py-1 rounded-full uppercase ${
                        isAdmin
                          ? 'bg-amber-500 text-slate-950'
                          : isPro
                          ? 'bg-emerald-500/20 border border-emerald-500/40 text-emerald-300'
                          : 'bg-slate-800 border border-slate-700 text-slate-300'
                      }`}
                    >
                      {isAdmin ? '👑 ADMIN' : isPro ? '👑 PRO ÜYE' : '🆓 ÜCRETSİZ PLAN'}
                    </span>
                  </div>

                  <p className="text-xs text-slate-300 leading-relaxed">
                    {isPro
                      ? 'Tüm 6 ders ve 60 deneme sınavına (900 soru) sınırsız erişiminiz aktiftir. Kaldığınız yerden devam edebilirsiniz.'
                      : 'Ücretsiz planda her dersten 1. Deneme Sınavı (toplam 6 sınav • 90 soru) açıktır. Tüm 60 sınav için PRO plana geçebilirsiniz.'}
                  </p>

                  <button
                    onClick={() => setActivePage('portal')}
                    className="w-full bg-amber-500 hover:bg-amber-400 text-slate-950 font-black text-sm py-3.5 rounded-xl shadow-lg transition flex items-center justify-center gap-2"
                  >
                    <span>Sınav Portalına Git</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              ) : (
                <div className="w-full max-w-md bg-slate-900 border border-slate-800 rounded-2xl shadow-2xl overflow-hidden">
                  <div className="bg-gradient-to-r from-amber-500 to-amber-600 p-6 text-slate-950 flex items-center gap-3.5">
                    <div className="bg-slate-950 text-amber-400 p-3 rounded-xl shadow">
                      <GraduationCap className="w-8 h-8" />
                    </div>
                    <div>
                      <h3 className="text-lg font-black tracking-tight leading-snug">
                        SDÜ İSG Yüksek Lisans
                      </h3>
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
                      Ücretsiz Kayıt Ol
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
                          placeholder="Örn: Ahmet Yılmaz"
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
                          autoComplete="username"
                          value={authUsername}
                          onChange={(e) => setAuthUsername(e.target.value)}
                          placeholder="kullanici_adi"
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
                          autoComplete={authTab === 'login' ? 'current-password' : 'new-password'}
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
                        : 'Ücretsiz Hesap Oluştur'}
                    </button>

                    <div className="pt-2 text-center text-[11px] text-slate-400">
                      🎁 Ücretsiz kayıt olarak her dersten <strong>1. Deneme Sınavını (Toplam 6 Test • 90 Soru)</strong> hemen çözebilirsiniz.
                    </div>
                  </form>
                </div>
              )}
            </div>
          </div>
        </section>

        {/* Pricing / Plans Section */}
        <section ref={pricingSectionRef} className="py-14 bg-slate-900/60 border-b border-slate-800/80">
          <div className="max-w-5xl mx-auto px-4">
            <div className="text-center max-w-2xl mx-auto mb-10">
              <span className="text-xs font-extrabold uppercase tracking-wider text-amber-400">
                Üyelik Paketleri
              </span>
              <h3 className="text-2xl sm:text-3xl font-black text-white mt-1">
                Ücretsiz Başlayın, PRO ile Tüm 60 Sınavı Açın
              </h3>
              <p className="text-sm text-slate-400 mt-2">
                Kayıt olan her öğrenci ücretsiz planla her dersten 1'er deneme testi çözebilir.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* FREE PLAN */}
              <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-extrabold uppercase tracking-wider text-slate-400">
                      Başlangıç Paketi
                    </span>
                    <span className="bg-slate-800 text-slate-300 text-xs font-extrabold px-3 py-1 rounded-full">
                      Her Ders 1 Test
                    </span>
                  </div>
                  <h4 className="text-2xl font-black text-white mt-2">Ücretsiz Plan</h4>
                  <div className="text-3xl font-black text-amber-400 mt-2">
                    0 ₺ <span className="text-xs font-bold text-slate-400">/ Kayıtla Anında Açık</span>
                  </div>

                  <ul className="mt-6 space-y-3 text-xs font-semibold text-slate-300">
                    <li className="flex items-center gap-2.5">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                      <span>6 Dersin Her Birinden <strong>Test 1 (Toplam 6 Sınav • 90 Soru)</strong></span>
                    </li>
                    <li className="flex items-center gap-2.5">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                      <span>A-E Tüm Şıkların Detaylı Çözüm Analizi</span>
                    </li>
                    <li className="flex items-center gap-2.5">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                      <span>Çalışma Modu ve 45 Dk Sınav Modu</span>
                    </li>
                    <li className="flex items-center gap-2.5 text-slate-500">
                      <Lock className="w-4 h-4 text-slate-600 shrink-0" />
                      <span>Test 2 – Test 10 (54 Deneme Sınavı • 810 Soru Kilitli)</span>
                    </li>
                  </ul>
                </div>

                <button
                  onClick={() => {
                    if (currentUser) setActivePage('portal');
                    else scrollToAuth('signup');
                  }}
                  className="mt-8 w-full bg-slate-800 hover:bg-slate-700 text-white font-extrabold text-xs py-3.5 rounded-xl border border-slate-700 transition"
                >
                  {currentUser ? 'Ücretsiz Testlere Git' : 'Ücretsiz Hesap Oluştur'}
                </button>
              </div>

              {/* PRO PLAN */}
              <div className="bg-slate-900 border-2 border-amber-500 rounded-2xl p-6 flex flex-col justify-between relative shadow-2xl">
                <div className="absolute -top-3 right-6 bg-amber-500 text-slate-950 text-[11px] font-black uppercase px-3 py-1 rounded-full shadow">
                  👑 TAM ERİŞİM PAKETİ
                </div>
                <div>
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-extrabold uppercase tracking-wider text-amber-400">
                      Sınırsız Hazırlık Paketi
                    </span>
                    <span className="bg-amber-500/20 text-amber-300 text-xs font-extrabold px-3 py-1 rounded-full">
                      Her Ders 10 Test
                    </span>
                  </div>
                  <h4 className="text-2xl font-black text-white mt-2">PRO Üyelik Planı</h4>
                  <div className="text-3xl font-black text-emerald-400 mt-2">
                    Tam Paket <span className="text-xs font-bold text-slate-400">/ Dönem Boyu Sınırsız</span>
                  </div>

                  <ul className="mt-6 space-y-3 text-xs font-semibold text-slate-200">
                    <li className="flex items-center gap-2.5">
                      <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0" />
                      <span>6 Dersin Tamamında <strong>10'ar Test (Toplam 60 Sınav • 900 Soru)</strong></span>
                    </li>
                    <li className="flex items-center gap-2.5">
                      <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0" />
                      <span><strong>600 Çoktan Seçmeli + 300 Boşluk Doldurma</strong> Sorusunun Tamamı</span>
                    </li>
                    <li className="flex items-center gap-2.5">
                      <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0" />
                      <span>150 Soruluk "Tüm 10 Testi Birlikte Çöz" Maraton Modu</span>
                    </li>
                    <li className="flex items-center gap-2.5">
                      <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0" />
                      <span>Bulut Senkronizasyon ile Tüm Cihazlardan Erişim</span>
                    </li>
                  </ul>
                </div>

                <button
                  onClick={() => {
                    if (currentUser) {
                      if (isPro) setActivePage('portal');
                      else {
                        setActivePage('portal');
                        setShowUpgradeModal(true);
                      }
                    } else {
                      scrollToAuth('signup');
                    }
                  }}
                  className="mt-8 w-full bg-amber-500 hover:bg-amber-400 text-slate-950 font-black text-xs py-3.5 rounded-xl shadow-lg transition flex items-center justify-center gap-2"
                >
                  <Crown className="w-4 h-4" />
                  <span>{isPro ? 'PRO Hesabınız Aktif — Sınavlara Git' : 'PRO Üyelik İçin Kayıt Ol / İletişime Geç'}</span>
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-14 border-b border-slate-800/80">
          <div className="max-w-7xl mx-auto px-4">
            <div className="text-center max-w-2xl mx-auto mb-10">
              <h3 className="text-2xl sm:text-3xl font-black text-white">
                Sınavlara Nasıl Hazırlıyoruz?
              </h3>
              <p className="text-sm text-slate-400 mt-2">
                Sadece doğru şıkkı ezberleten değil, diğer 4 şıkkın da ne olduğunu öğreten akıllı çalışma sistemi.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
              <div className="bg-slate-900 border border-slate-800 rounded-2xl p-5 space-y-2.5">
                <div className="w-10 h-10 rounded-xl bg-amber-500/15 text-amber-400 flex items-center justify-center">
                  <ListChecks className="w-5 h-5" />
                </div>
                <h4 className="font-extrabold text-base text-white">
                  5 Şık Detaylı Çözüm Analizi
                </h4>
                <p className="text-xs text-slate-400 leading-relaxed">
                  Bir soruyu işaretlediğinde yalnızca doğru cevabı değil, A'dan E'ye tüm çeldirici şıkların hangi kavrama veya yönetmeliğe ait olduğunu anında görürsün.
                </p>
              </div>

              <div className="bg-slate-900 border border-slate-800 rounded-2xl p-5 space-y-2.5">
                <div className="w-10 h-10 rounded-xl bg-emerald-500/15 text-emerald-400 flex items-center justify-center">
                  <Target className="w-5 h-5" />
                </div>
                <h4 className="font-extrabold text-base text-white">
                  Her Derste 10 Ayrı Deneme Testi
                </h4>
                <p className="text-xs text-slate-400 leading-relaxed">
                  Her ders kendi içinde 10 alt konuya bölünmüştür. Her testte 10 çoktan seçmeli + 5 boşluk doldurma olmak üzere 15 soru yer alır.
                </p>
              </div>

              <div className="bg-slate-900 border border-slate-800 rounded-2xl p-5 space-y-2.5">
                <div className="w-10 h-10 rounded-xl bg-blue-500/15 text-blue-400 flex items-center justify-center">
                  <Zap className="w-5 h-5" />
                </div>
                <h4 className="font-extrabold text-base text-white">
                  Sayfa Sayfa Odaklı Çözüm
                </h4>
                <p className="text-xs text-slate-400 leading-relaxed">
                  Soruları dikkatin dağılmadan tek tek sayfa sayfa çözebilir, boşluk doldurma sorularında kelime havuzundan tek tıkla cevap seçebilirsin.
                </p>
              </div>

              <div className="bg-slate-900 border border-slate-800 rounded-2xl p-5 space-y-2.5">
                <div className="w-10 h-10 rounded-xl bg-purple-500/15 text-purple-400 flex items-center justify-center">
                  <Cloud className="w-5 h-5" />
                </div>
                <h4 className="font-extrabold text-base text-white">
                  Bulut Senkronizasyon & Kayıt
                </h4>
                <p className="text-xs text-slate-400 leading-relaxed">
                  Kullanıcı adınla giriş yaptığında çözdüğün tüm testler buluta kaydedilir; telefondan veya bilgisayardan kaldığın sorudan devam edebilirsin.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* 6 Courses Showcase Section */}
        <section ref={coursesSectionRef} className="py-14">
          <div className="max-w-7xl mx-auto px-4">
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8">
              <div>
                <span className="text-xs font-extrabold uppercase tracking-wider text-amber-400">
                  Ders Müfredatı & Deneme Sınavları
                </span>
                <h3 className="text-2xl sm:text-3xl font-black text-white mt-1">
                  6 Ders • 60 Deneme Sınavı • 900 Soru
                </h3>
              </div>
              <p className="text-xs text-slate-400">
                Ücretsiz üyelikle her dersin 1. testini, PRO üyelikle tamamını çözebilirsiniz.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {courses.map((c) => (
                <div
                  key={c.id}
                  style={{ borderTop: `4px solid ${c.hex}` }}
                  className="bg-slate-900 border border-slate-800 rounded-2xl p-6 flex flex-col justify-between hover:border-slate-700 transition shadow-lg"
                >
                  <div>
                    <div className="flex items-center justify-between gap-2 text-xs font-extrabold text-slate-400 uppercase mb-2">
                      <span>{c.code}</span>
                      <span className="bg-slate-800 text-amber-400 px-2.5 py-0.5 rounded-full text-[11px]">
                        10 Test • 150 Soru
                      </span>
                    </div>

                    <h4 className="text-lg font-black text-white leading-snug">{c.title}</h4>
                    <p className="text-xs font-semibold text-slate-400 mt-1">
                      👨‍🏫 {c.instructor}
                    </p>

                    <div className="mt-4 pt-3 border-t border-slate-800/80 space-y-1.5">
                      <div className="text-[11px] font-extrabold uppercase text-slate-300">
                        Öne Çıkan Sınav Konuları:
                      </div>
                      {(c.tests || []).slice(0, 3).map((t, i) => (
                        <div
                          key={t.testId}
                          className="text-xs text-slate-400 flex items-center gap-1.5 truncate"
                        >
                          {i === 0 ? (
                            <Check className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                          ) : (
                            <Crown className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                          )}
                          <span className="truncate">
                            Test {t.testId}: {t.theme} {i === 0 ? '(Ücretsiz)' : '(PRO)'}
                          </span>
                        </div>
                      ))}
                      <div className="text-[11px] text-slate-500 font-semibold pl-5">
                        + 7 konu testi daha (Toplam 100 Test + 50 Boşluk Doldurma)
                      </div>
                    </div>
                  </div>

                  <button
                    onClick={() => handleOpenCourseFromHome(c.id)}
                    className="mt-6 w-full bg-slate-800 hover:bg-amber-500 text-white hover:text-slate-950 font-extrabold text-xs py-3 rounded-xl border border-slate-700 hover:border-amber-500 transition flex items-center justify-center gap-2"
                  >
                    <span>{currentUser ? 'Bu Dersin Testlerine Başla' : 'Ücretsiz Kayıt Ol & Test 1\'i Çöz'}</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>

        {renderFooter()}
      </div>
    );
  }

  if (coursesLoading || !activeCourse) {
    return (
      <div className="min-h-screen bg-slate-950 text-white flex items-center justify-center">
        <div className="text-center space-y-2">
          <div className="w-10 h-10 border-4 border-amber-500 border-t-transparent rounded-full animate-spin mx-auto" />
          <p className="text-sm font-bold text-slate-300">
            Sorular yükleniyor...
          </p>
        </div>
      </div>
    );
  }

  const effectiveTestIdx = isPro ? activeTestIdx : 0;
  const activeStats = getStats(activeCourse, effectiveTestIdx);
  const overallCourseStats = getStats(activeCourse, 'all');
  const pointsPerQuestion = +(100 / activeStats.total).toFixed(1);
  const totalAllCoursesMC = courses.reduce((acc, c) => acc + c.mcQuestions.length, 0);
  const totalAllCoursesFill = courses.reduce((acc, c) => acc + c.fillQuestions.length, 0);

  // Slice MC and Fill questions according to selected Test (0..9) or 'all'
  const mcStartIdx = effectiveTestIdx === 'all' ? 0 : effectiveTestIdx * 10;
  const mcEndIdx =
    effectiveTestIdx === 'all'
      ? activeCourse.mcQuestions.length
      : Math.min((effectiveTestIdx + 1) * 10, activeCourse.mcQuestions.length);

  const fillStartIdx = effectiveTestIdx === 'all' ? 0 : effectiveTestIdx * 5;
  const fillEndIdx =
    effectiveTestIdx === 'all'
      ? activeCourse.fillQuestions.length
      : Math.min((effectiveTestIdx + 1) * 5, activeCourse.fillQuestions.length);

  const visibleMC = activeCourse.mcQuestions.slice(mcStartIdx, mcEndIdx);
  const visibleFill = activeCourse.fillQuestions.slice(fillStartIdx, fillEndIdx);

  const activeTestMeta =
    effectiveTestIdx !== 'all' && activeCourse.tests ? activeCourse.tests[effectiveTestIdx] : null;
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

  const scrollToQuestionStart = () => {
    setTimeout(() => {
      if (questionStartRef.current) {
        questionStartRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }, 20);
  };

  const goPrevStep = () => {
    if (safeStep > 0) {
      setCurrentStep(safeStep - 1);
      scrollToQuestionStart();
    }
  };

  const goNextStep = () => {
    if (safeStep < pagedItems.length - 1) {
      setCurrentStep(safeStep + 1);
      scrollToQuestionStart();
    } else if (effectiveTestIdx !== 'all' && effectiveTestIdx < 9) {
      if (!isPro) {
        setShowUpgradeModal(true);
        return;
      }
      setActiveTestIdx(effectiveTestIdx + 1);
      setCurrentStep(0);
      scrollToQuestionStart();
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
            {effectiveTestIdx === 'all' && (
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
                  : effectiveTestIdx !== 'all' && effectiveTestIdx < 9
                  ? isPro
                    ? `Sonraki Teste Geç (Test ${effectiveTestIdx + 2})`
                    : `🔒 Test 2'yi Aç (PRO Paket)`
                  : 'Test Tamamlandı'}
              </span>
              <ChevronRight className="w-4 h-4" />
            </button>
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
            {effectiveTestIdx === 'all' && (
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
                  : effectiveTestIdx !== 'all' && effectiveTestIdx < 9
                  ? isPro
                    ? `Sonraki Teste Geç (Test ${effectiveTestIdx + 2})`
                    : `🔒 Test 2'yi Aç (PRO Paket)`
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
    <div className="min-h-screen bg-slate-100 text-slate-900 flex flex-col justify-between">
      {renderUpgradeModal()}
      {renderAdminModal()}

      <div>
        {/* Sleek Modern Single-Row SaaS Navbar */}
        <header className="sticky top-0 z-50 bg-slate-950/95 backdrop-blur-md text-white border-b border-slate-800 shadow-md">
          <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between gap-3">
            {/* Left: Brand + Primary Nav Links */}
            <div className="flex items-center gap-6">
              <div
                onClick={() => {
                  setActivePage('home');
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="flex items-center gap-2.5 cursor-pointer group"
              >
                <div className="bg-amber-500 group-hover:bg-amber-400 text-slate-950 p-2 rounded-xl transition shadow-sm">
                  <GraduationCap className="w-5 h-5" />
                </div>
                <div className="leading-tight">
                  <span className="font-black text-sm sm:text-base tracking-tight text-white block">
                    SDÜ İSG <span className="text-amber-400">Akademi</span>
                  </span>
                  <span className="text-[10px] font-bold text-slate-400 hidden sm:block">
                    60 Deneme Sınavı • 900 Soru
                  </span>
                </div>
              </div>

              <nav className="hidden md:flex items-center gap-1 bg-slate-900/90 border border-slate-800 p-1 rounded-xl">
                <button
                  onClick={() => {
                    setActivePage('home');
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-bold text-slate-300 hover:text-white hover:bg-slate-800 transition"
                >
                  <Home className="w-3.5 h-3.5 text-amber-400" />
                  <span>Anasayfa</span>
                </button>
                <button
                  onClick={() => {
                    setMode('study');
                    setExamSubmitted(false);
                  }}
                  className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-bold transition ${
                    mode === 'study'
                      ? 'bg-amber-500 text-slate-950 shadow-sm'
                      : 'text-slate-300 hover:text-white hover:bg-slate-800'
                  }`}
                >
                  <BookOpen className="w-3.5 h-3.5" />
                  <span>Çalışma Modu</span>
                </button>
                <button
                  onClick={() => {
                    setMode('exam');
                    setExamSubmitted(false);
                  }}
                  className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-bold transition ${
                    mode === 'exam'
                      ? 'bg-amber-500 text-slate-950 shadow-sm'
                      : 'text-slate-300 hover:text-white hover:bg-slate-800'
                  }`}
                >
                  <ClipboardCheck className="w-3.5 h-3.5" />
                  <span>Sınav Modu</span>
                </button>
              </nav>
            </div>

            {/* Right: Compact Exam Timer (only in Exam mode) + Admin/Plan + User Profile */}
            <div className="flex items-center gap-2.5">
              {mode === 'exam' && (
                <div className="flex items-center gap-1.5 bg-slate-900 border border-slate-800 px-2.5 py-1.5 rounded-xl">
                  <Clock className="w-3.5 h-3.5 text-amber-400" />
                  <span className="font-mono font-bold text-xs text-amber-400">
                    {formatTime(secondsLeft)}
                  </span>
                  <button
                    onClick={() => setTimerRunning(!timerRunning)}
                    className="bg-slate-800 hover:bg-slate-700 text-[11px] px-2 py-0.5 rounded-md font-bold text-slate-200"
                  >
                    {timerRunning ? 'Duraklat' : 'Başlat'}
                  </button>
                  <button
                    onClick={async () => {
                      await evaluateAllOnBackend(answers);
                      setExamSubmitted(true);
                    }}
                    className="bg-emerald-600 hover:bg-emerald-500 text-white text-[11px] font-extrabold px-2.5 py-0.5 rounded-md transition"
                  >
                    Bitir
                  </button>
                </div>
              )}

              {isAdmin ? (
                <button
                  onClick={() => {
                    setShowAdminModal(true);
                    fetchAdminUsers();
                  }}
                  className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-amber-500/15 hover:bg-amber-500/25 border border-amber-500/40 text-amber-300 text-xs font-extrabold transition"
                >
                  <Crown className="w-3.5 h-3.5 text-amber-400" />
                  <span className="hidden sm:inline">Admin Paneli</span>
                </button>
              ) : (
                <button
                  onClick={() => {
                    if (!isPro) setShowUpgradeModal(true);
                  }}
                  className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl border text-xs font-extrabold transition ${
                    isPro
                      ? 'bg-emerald-950/60 border-emerald-500/40 text-emerald-300'
                      : 'bg-amber-500 text-slate-950 border-amber-500 hover:bg-amber-400'
                  }`}
                >
                  <Crown className="w-3.5 h-3.5" />
                  <span>{isPro ? 'PRO Üye' : 'PRO\'ya Geç'}</span>
                </button>
              )}

              <div className="flex items-center gap-2 bg-slate-900 border border-slate-800 pl-3 pr-1.5 py-1 rounded-xl">
                <div className="w-6 h-6 rounded-lg bg-slate-800 text-amber-400 flex items-center justify-center text-xs font-black">
                  {currentUser.fullName?.[0]?.toUpperCase() || 'U'}
                </div>
                <span className="text-xs font-bold text-slate-200 hidden sm:inline max-w-[120px] truncate">
                  {currentUser.fullName}
                </span>
                <button
                  onClick={handleLogout}
                  title="Çıkış Yap"
                  className="text-slate-400 hover:text-rose-400 hover:bg-slate-800 p-1.5 rounded-lg transition"
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
              const st = getStats(course, isPro ? 'all' : 0);
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
                      {isPro ? '10 Test' : 'Test 1'} • {st.answered}/{st.total}
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
                {effectiveTestIdx === 'all' ? 'Tüm 10 Test Genel Puanı' : `Test ${effectiveTestIdx + 1} Puanı`}
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

          {/* 10-TEST SELECTOR BAR (Test 1 Free, Test 2..10 PRO unless user isPro) */}
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
                    if (!isPro) {
                      setShowUpgradeModal(true);
                      return;
                    }
                    setActiveTestIdx('all');
                    setExamSubmitted(false);
                  }}
                  className={`px-3 py-1.5 rounded-lg text-xs font-extrabold transition border flex items-center gap-1.5 ${
                    effectiveTestIdx === 'all'
                      ? 'bg-amber-500 text-slate-950 border-amber-600 shadow'
                      : 'bg-slate-100 text-slate-700 border-slate-300 hover:bg-slate-200'
                  }`}
                >
                  {!isPro && <Lock className="w-3.5 h-3.5 text-amber-600" />}
                  <span>📚 Tüm 10 Testi Birlikte Seç (150 Soru)</span>
                </button>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-5 lg:grid-cols-10 gap-2">
                {activeCourse.tests.map((t, idx) => {
                  const isLocked = !isPro && idx >= 1;
                  const tStat = getStats(activeCourse, idx);
                  const isSelected = effectiveTestIdx === idx;
                  const isDone = !isLocked && tStat.answered === tStat.total && tStat.total > 0;
                  return (
                    <button
                      key={t.testId}
                      onClick={() => {
                        if (isLocked) {
                          setShowUpgradeModal(true);
                          return;
                        }
                        setActiveTestIdx(idx);
                        setExamSubmitted(false);
                      }}
                      title={isLocked ? `${t.title} (PRO Üyelik Gerektirir)` : t.title}
                      className={`p-2.5 rounded-xl border text-left transition flex flex-col justify-between ${
                        isSelected
                          ? 'bg-slate-900 text-white border-slate-900 shadow-md -translate-y-0.5'
                          : isLocked
                          ? 'bg-slate-100/80 border-slate-200 text-slate-500 hover:border-amber-400'
                          : isDone
                          ? 'bg-emerald-50/70 border-emerald-300 text-slate-900 hover:border-emerald-500'
                          : 'bg-slate-50 border-slate-200 text-slate-800 hover:bg-white hover:border-slate-400'
                      }`}
                    >
                      <div>
                        <div className="flex items-center justify-between gap-1">
                          <span
                            className={`text-xs font-black ${
                              isSelected
                                ? 'text-amber-400'
                                : isLocked
                                ? 'text-slate-600'
                                : 'text-slate-900'
                            }`}
                          >
                            {t.shortTitle}
                          </span>
                          {isLocked ? (
                            <span className="text-[10px] font-black px-1.5 py-0.5 rounded bg-amber-100 text-amber-900 flex items-center gap-0.5">
                              <Lock className="w-2.5 h-2.5" /> PRO
                            </span>
                          ) : (
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
                          )}
                        </div>
                        <div
                          className={`text-[11px] font-medium mt-1 line-clamp-2 leading-tight ${
                            isSelected ? 'text-slate-300' : 'text-slate-500'
                          }`}
                        >
                          {t.theme}
                        </div>
                      </div>

                      <div
                        className={`mt-2 pt-1.5 border-t text-[10px] font-extrabold flex items-center justify-between ${
                          isSelected
                            ? 'border-slate-700 text-amber-300'
                            : 'border-slate-200 text-slate-500'
                        }`}
                      >
                        {isLocked ? (
                          <span className="text-amber-700 font-bold">🔒 PRO Paket</span>
                        ) : (
                          <>
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
                          </>
                        )}
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
                {effectiveTestIdx === 'all' ? 'Tüm 150 Cevabı Göster' : `Test ${effectiveTestIdx + 1} Cevaplarını Göster`}
              </button>
              <button
                onClick={handleResetCurrentView}
                className="flex items-center gap-1.5 px-3 py-2 rounded-lg border border-rose-200 bg-rose-50 hover:bg-rose-100 text-xs font-bold text-rose-700"
              >
                <RotateCcw className="w-3.5 h-3.5" />
                {effectiveTestIdx === 'all' ? 'Tüm Dersi Sıfırla' : `Test ${effectiveTestIdx + 1}'i Sıfırla`}
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
              <div ref={questionStartRef} className="scroll-mt-20">
                {currentPagedItem.type === 'mc'
                  ? renderMCCard(currentPagedItem.q, currentPagedItem.qIdx, true)
                  : renderFillCard(currentPagedItem.q, currentPagedItem.qIdx, true)}
              </div>

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
                    (effectiveTestIdx === 'all' || effectiveTestIdx >= 9)
                  }
                  className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 disabled:opacity-40 disabled:pointer-events-none text-white text-xs sm:text-sm font-extrabold shadow transition"
                >
                  <span>
                    {safeStep < pagedItems.length - 1
                      ? 'Sonraki Soru'
                      : effectiveTestIdx !== 'all' && effectiveTestIdx < 9
                      ? isPro
                        ? `Test ${effectiveTestIdx + 2}'ye Geç`
                        : `🔒 Test 2 (PRO)`
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
                      Her soru {pointsPerQuestion} puandır • Cevaplandığında 5 şık analizi açılır
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
                        🔑 {effectiveTestIdx === 'all' ? 'Bu Dersin' : `Test ${effectiveTestIdx + 1}`} Boşluk Doldurma Kelime Havuzu (Karışık Sıralı — Tıklayıp Kopyalayabilirsin)
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

      {renderFooter()}
    </div>
  );
}
