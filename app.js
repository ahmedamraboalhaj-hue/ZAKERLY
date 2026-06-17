const STORAGE_KEY = "zakrly_multi_teacher_platform_v2";

const firebaseConfig = {
  apiKey: "AIzaSyAfbB8f3gVpykOgxcTaBrUB7s209PLp9Lg",
  authDomain: "home-26331.firebaseapp.com",
  projectId: "home-26331",
  storageBucket: "home-26331.firebasestorage.app",
  messagingSenderId: "75590524459",
  appId: "1:75590524459:web:b2a96dcfc091bfee45d46e",
  measurementId: "G-7RC6XBPSGF"
};

const bunnyConfig = {
  libraryId: "685502",
  cdnHost: "vz-5f54bf46-654.b-cdn.net",
  apiKey: "5c8fcfe0-ae80-4d47-bb6a48e83ef2-eb20-496f"
};

const cloudinaryConfig = {
  cloudName: "dwrhl6gjf",
  uploadPreset: "asr-kareem",
  endpoint: "https://api.cloudinary.com/v1_1/dwrhl6gjf/image/upload"
};

const seed = {
  theme: "light",
  activeUser: null,
  students: [
    {
      id: "s1",
      name: "أحمد محمود",
      phone: "01000000000",
      recoveryPhone: "01111111111",
      password: "123456",
      educationSystem: "تربية وتعليم",
      grade: "الصف الثالث الثانوي",
      track: "علمي علوم",
      enrollments: ["c1", "c4"]
    }
  ],
  teachers: [
    {
      id: "t1",
      code: "ARB-2030",
      name: "أ. عبد الحميد حامد",
      subject: "اللغة العربية",
      grade: "الثالث الثانوي",
      city: "القاهرة",
      bio: "مدرس لغة عربية يركز على التأسيس والتحليل والتدريب المكثف على أسئلة الامتحانات.",
      avatar: "ع",
      avatarStyle: "linear-gradient(135deg,#12b7cf,#7056d9)",
      avatarImage: "teacher_t1.png",
      avatarImageX: 50,
      avatarImageY: 35,
      avatarImageScale: 128,
      stats: { students: 1840, rating: 4.9 },
      courses: ["c1", "c2"]
    },
    {
      id: "t2",
      code: "MTH-4040",
      name: "د. محمد أيمن",
      subject: "الرياضيات",
      grade: "الثاني الثانوي",
      city: "الإسكندرية",
      bio: "شرح منظم للمفاهيم، واجبات تفاعلية، واختبارات قصيرة بعد كل درس.",
      avatar: "م",
      avatarStyle: "linear-gradient(135deg,#20b66f,#12b7cf)",
      avatarImage: "teacher_t2.png",
      avatarImageX: 50,
      avatarImageY: 35,
      avatarImageScale: 128,
      stats: { students: 1260, rating: 4.8 },
      courses: ["c3"]
    },
    {
      id: "t3",
      code: "SCI-9090",
      name: "م. محمد صلاح",
      subject: "الفيزياء",
      grade: "الأول الثانوي",
      city: "المنصورة",
      bio: "تبسيط القوانين والتجارب مع ملفات مراجعة منظمة ومتابعة مستمرة للطلاب.",
      avatar: "ص",
      avatarStyle: "linear-gradient(135deg,#f6a609,#ef3f6d)",
      avatarImage: "teacher_t3.png",
      avatarImageX: 50,
      avatarImageY: 35,
      avatarImageScale: 128,
      stats: { students: 980, rating: 4.7 },
      courses: ["c4"]
    }
  ],
  courses: [
    {
      id: "c1",
      teacherId: "t1",
      title: "المراجعة النهائية للصف الثالث الثانوي",
      headerTitle: "مراجعة ليلة الامتحان",
      level: "الثالث الثانوي",
      price: 0,
      type: "مجاني",
      themeColor: "#0b7f67",
      thumbnail: "",
      imageX: 50,
      imageY: 50,
      cover: "linear-gradient(135deg,#0b7f67,#111936 60%,#ef3f6d)",
      description: "مراجعة شاملة للمنهج مع تدريبات على القطع والنحو والبلاغة.",
      lessons: ["l1", "l2"],
      tests: ["q1"],
      files: ["ملخص البلاغة.pdf", "خطة مراجعة يونيو.pdf"]
    },
    {
      id: "c2",
      teacherId: "t1",
      title: "كورس التأسيس في النحو",
      headerTitle: "النحو من الصفر",
      level: "الأول الثانوي",
      price: 220,
      type: "مدفوع",
      themeColor: "#7056d9",
      thumbnail: "",
      imageX: 50,
      imageY: 50,
      cover: "linear-gradient(135deg,#12b7cf,#7056d9)",
      description: "بناء قواعد النحو من البداية حتى مستوى حل الامتحان.",
      lessons: ["l3"],
      tests: ["q2"],
      files: ["قواعد الإعراب.pdf"]
    },
    {
      id: "c3",
      teacherId: "t2",
      title: "التفاضل خطوة بخطوة",
      headerTitle: "خطة التفاضل",
      level: "الثاني الثانوي",
      price: 180,
      type: "مدفوع",
      themeColor: "#12b7cf",
      thumbnail: "",
      imageX: 50,
      imageY: 50,
      cover: "linear-gradient(135deg,#111936,#12b7cf)",
      description: "شرح تدريجي للتفاضل مع بنك أسئلة بعد كل وحدة.",
      lessons: ["l4"],
      tests: ["q3"],
      files: ["قوانين التفاضل.pdf"]
    },
    {
      id: "c4",
      teacherId: "t3",
      title: "ليالي الامتحان في الفيزياء",
      headerTitle: "ليالي الفيزياء",
      level: "الأول الثانوي",
      price: 0,
      type: "مجاني",
      themeColor: "#f6a609",
      thumbnail: "",
      imageX: 50,
      imageY: 50,
      cover: "linear-gradient(135deg,#7f1d1d,#f6a609)",
      description: "ملخصات مركزة وحل نماذج متوقعة قبل الامتحان.",
      lessons: ["l5"],
      tests: ["q4"],
      files: ["قوانين الحركة.pdf"]
    }
  ],
  lessons: [
    {
      id: "l1",
      teacherId: "t1",
      courseId: "c1",
      title: "خطة المراجعة النهائية",
      description: "ترتيب مذاكرة الأيام الأخيرة قبل الامتحان.",
      videos: [{ title: "خطة المراجعة", description: "طريقة استخدام الكورس", url: "https://example.com/video-arabic-plan" }],
      attachments: [{ label: "ملف الخطة", url: "https://drive.google.com/" }],
      testIds: ["q1"]
    },
    {
      id: "l2",
      teacherId: "t1",
      courseId: "c1",
      title: "النحو في ورقة واحدة",
      description: "تلخيص أهم قواعد النحو.",
      videos: [{ title: "النحو السريع", description: "شرح مركز", url: "https://example.com/video-grammar" }],
      attachments: [{ label: "ملخص النحو", url: "https://onedrive.live.com/" }],
      testIds: []
    },
    {
      id: "l3",
      teacherId: "t1",
      courseId: "c2",
      title: "علامات الإعراب الأصلية",
      description: "درس تأسيسي في علامات الإعراب.",
      videos: [{ title: "الضمة والفتحة والكسرة", description: "فيديو تطبيقي", url: "https://example.com/video-nahw" }],
      attachments: [],
      testIds: ["q2"]
    },
    {
      id: "l4",
      teacherId: "t2",
      courseId: "c3",
      title: "مفهوم النهاية",
      description: "مدخل مبسط للنهايات.",
      videos: [{ title: "مقدمة النهايات", description: "شرح وتطبيق", url: "https://example.com/video-limit" }],
      attachments: [],
      testIds: ["q3"]
    },
    {
      id: "l5",
      teacherId: "t3",
      courseId: "c4",
      title: "ملخص قوانين الحركة",
      description: "أهم قوانين الحركة في ورقة واحدة.",
      videos: [{ title: "قوانين الحركة", description: "حل أمثلة", url: "https://example.com/video-motion" }],
      attachments: [{ label: "قوانين الحركة", url: "https://dropbox.com/" }],
      testIds: ["q4"]
    }
  ],
  tests: [
    { id: "q1", teacherId: "t1", courseId: "c1", lessonId: "l1", title: "اختبار شامل على البلاغة", minutes: 30, questions: [{ text: "ما نوع الصورة البيانية؟", options: ["تشبيه", "استعارة", "كناية"], correct: "استعارة", grade: 2 }] },
    { id: "q2", teacherId: "t1", courseId: "c2", lessonId: "l3", title: "اختبار علامات الإعراب", minutes: 20, questions: [{ text: "علامة رفع المثنى؟", options: ["الألف", "الواو", "الضمة"], correct: "الألف", grade: 2 }] },
    { id: "q3", teacherId: "t2", courseId: "c3", lessonId: "l4", title: "اختبار النهايات", minutes: 25, questions: [{ text: "النهاية اليمنى تعني الاقتراب من؟", options: ["اليمين", "اليسار", "الصفر"], correct: "اليمين", grade: 2 }] },
    { id: "q4", teacherId: "t3", courseId: "c4", lessonId: "l5", title: "اختبار قوانين الحركة", minutes: 25, questions: [{ text: "وحدة السرعة؟", options: ["م/ث", "نيوتن", "جول"], correct: "م/ث", grade: 2 }] }
  ],
  codes: [
    { id: "a1", teacherId: "t1", courseId: "c2", code: "ARB-NHW-22", expires: "2026-08-30", maxUses: 40, used: 12, active: true },
    { id: "a2", teacherId: "t2", courseId: "c3", code: "MATH-DIF-18", expires: "2026-09-15", maxUses: 25, used: 4, active: true },
    { id: "a3", teacherId: "t3", courseId: "c4", code: "PHY-FREE", expires: "2026-12-31", maxUses: 999, used: 130, active: true }
  ],
  teacherSignupCodes: [
    { code: "394857", used: false },
    { code: "829104", used: false },
    { code: "573029", used: false },
    { code: "184930", used: false },
    { code: "692847", used: false },
    { code: "405928", used: false },
    { code: "910283", used: false },
    { code: "284756", used: false },
    { code: "739102", used: false },
    { code: "502938", used: false }
  ]
};

let state = loadState();
let currentTeacherTab = "courses";
let dashboardTab = "overview";
let homeCourseFilter = "all";
let firestoreDocRef = null;
let firebaseStorage = null;
let firebaseStorageTools = null;
let firebaseOnline = false;
let applyingRemoteState = false;
let pendingRemoteSave = null;

const educationGrades = {
  "أزهر": [
    "الصف الأول الابتدائي الأزهري",
    "الصف الثاني الابتدائي الأزهري",
    "الصف الثالث الابتدائي الأزهري",
    "الصف الرابع الابتدائي الأزهري",
    "الصف الخامس الابتدائي الأزهري",
    "الصف السادس الابتدائي الأزهري",
    "الصف الأول الإعدادي الأزهري",
    "الصف الثاني الإعدادي الأزهري",
    "الصف الثالث الإعدادي الأزهري",
    "الصف الأول الثانوي الأزهري",
    "الصف الثاني الثانوي الأزهري",
    "الصف الثالث الثانوي الأزهري"
  ],
  "تربية وتعليم": [
    "الصف الأول الابتدائي",
    "الصف الثاني الابتدائي",
    "الصف الثالث الابتدائي",
    "الصف الرابع الابتدائي",
    "الصف الخامس الابتدائي",
    "الصف السادس الابتدائي",
    "الصف الأول الإعدادي",
    "الصف الثاني الإعدادي",
    "الصف الثالث الإعدادي",
    "الصف الأول الثانوي",
    "الصف الثاني الثانوي",
    "الصف الثالث الثانوي"
  ]
};

const azharTracks = ["علمي", "أدبي"];
const generalTracks = ["علمي علوم", "علمي رياضة", "أدبي"];

const platformGrades = [
  "الصف الأول الابتدائي",
  "الصف الثاني الابتدائي",
  "الصف الثالث الابتدائي",
  "الصف الرابع الابتدائي",
  "الصف الخامس الابتدائي",
  "الصف السادس الابتدائي",
  "الصف الأول الإعدادي",
  "الصف الثاني الإعدادي",
  "الصف الثالث الإعدادي",
  "الصف الأول الثانوي",
  "الصف الثاني الثانوي",
  "الصف الثالث الثانوي"
];

const teacherSubjects = [
  "اللغة العربية",
  "اللغة الإنجليزية",
  "الرياضيات",
  "الفيزياء",
  "الكيمياء",
  "الأحياء",
  "العلوم",
  "الدراسات الاجتماعية",
  "التاريخ",
  "الجغرافيا",
  "الفلسفة",
  "علم النفس",
  "اللغة الفرنسية",
  "المواد الشرعية",
  "القرآن الكريم",
  "الحديث",
  "الفقه",
  "التفسير",
  "النحو",
  "البلاغة",
  "أخرى"
];

function clone(value) {
  return JSON.parse(JSON.stringify(value));
}

function loadState() {
  const saved = localStorage.getItem(STORAGE_KEY);
  if (!saved) return clone(seed);
  try {
    const parsed = JSON.parse(saved);
    return normalizeState(parsed);
  } catch {
    return clone(seed);
  }
}

function saveState() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
  queueFirebaseSave();
}

async function initializeFirebaseSync() {
  try {
    const appModule = await import("https://www.gstatic.com/firebasejs/10.12.5/firebase-app.js");
    const analyticsModule = await import("https://www.gstatic.com/firebasejs/10.12.5/firebase-analytics.js");
    const firestoreModule = await import("https://www.gstatic.com/firebasejs/10.12.5/firebase-firestore.js");
    const storageModule = await import("https://www.gstatic.com/firebasejs/10.12.5/firebase-storage.js");
    const firebaseApp = appModule.initializeApp(firebaseConfig);
    try {
      analyticsModule.getAnalytics(firebaseApp);
    } catch {
      // Analytics may be unavailable on local file previews.
    }
    const db = firestoreModule.getFirestore(firebaseApp);
    firebaseStorage = storageModule.getStorage(firebaseApp);
    firebaseStorageTools = storageModule;
    firestoreDocRef = firestoreModule.doc(db, "platform", "main");
    const firstSnapshot = await firestoreModule.getDoc(firestoreDocRef);
    if (!firstSnapshot.exists()) {
      await firestoreModule.setDoc(firestoreDocRef, {
        state: stripRuntimeState(state),
        updatedAt: firestoreModule.serverTimestamp()
      });
    }
    firestoreModule.onSnapshot(firestoreDocRef, snapshot => {
      if (!snapshot.exists()) return;
      const remoteState = snapshot.data().state;
      if (!remoteState) return;
      // لو في save pending (يعني احنا اللي عملنا التغيير دلوقتي)، اتجاهل الـ snapshot القديم
      if (pendingRemoteSave) return;
      applyingRemoteState = true;
      state = normalizeState(remoteState);
      localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
      applyingRemoteState = false;
      firebaseOnline = true;
      render();
    }, () => {
      firebaseOnline = false;
      render();
    });
  } catch {
    firebaseOnline = false;
    render();
  }
}

function queueFirebaseSave() {
  if (applyingRemoteState || !firestoreDocRef) return;
  clearTimeout(pendingRemoteSave);
  pendingRemoteSave = setTimeout(async () => {
    pendingRemoteSave = null;
    try {
      const firestoreModule = await import("https://www.gstatic.com/firebasejs/10.12.5/firebase-firestore.js");
      await firestoreModule.setDoc(firestoreDocRef, {
        state: stripRuntimeState(state),
        updatedAt: firestoreModule.serverTimestamp()
      }, { merge: true });
      firebaseOnline = true;
    } catch {
      firebaseOnline = false;
    }
    render();
  }, 350);
}

function stripRuntimeState(value) {
  const next = clone(value);
  return next;
}

function normalizeState(value) {
  // نستخدم seed فقط للحقول الافتراضية اللي مش موجودة في القيمة المحفوظة
  // مع الحفاظ على الـ arrays (students, teachers, codes, ...) كما هي من القيمة المحفوظة
  const next = { ...clone(seed) };
  for (const key of Object.keys(value)) {
    if (value[key] !== undefined && value[key] !== null) {
      next[key] = value[key];
    }
  }
  next.teachers = (next.teachers || []).map(normalizeTeacher);
  return next;
}

function $(selector) {
  return document.querySelector(selector);
}

function uid(prefix) {
  return `${prefix}${Date.now().toString(36)}${Math.random().toString(36).slice(2, 7)}`;
}

function escapeHtml(value = "") {
  return String(value).replace(/[&<>"']/g, char => ({
    "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#039;"
  }[char]));
}

function normalizeTeacher(teacher = {}) {
  const loginCodes = Array.isArray(teacher.loginCodes) && teacher.loginCodes.length
    ? teacher.loginCodes
    : (teacher.code ? [teacher.code] : []);
  return {
    ...teacher,
    bio: teacher.bio || teacher.description || "",
    avatar: teacher.avatar || teacher.name?.trim()?.charAt(0) || "م",
    avatarStyle: teacher.avatarStyle || "linear-gradient(135deg,#12b7cf,#7056d9)",
    avatarImage: teacher.avatarImage || "",
    avatarImageX: Number(teacher.avatarImageX ?? 50),
    avatarImageY: Number(teacher.avatarImageY ?? 35),
    avatarImageScale: Number(teacher.avatarImageScale ?? 128),
    profileTheme: teacher.profileTheme || "#7c3aed",
    loginCodes,
    stats: teacher.stats || { students: 0, rating: 0 },
    courses: teacher.courses || []
  };
}

function teacherAccessCodes(teacher) {
  return Array.isArray(teacher?.loginCodes) && teacher.loginCodes.length ? teacher.loginCodes : (teacher?.code ? [teacher.code] : []);
}

function isTeacherAccessCodeTaken(code) {
  return state.teachers.some(teacher => teacherAccessCodes(teacher).includes(code)) || state.codes.some(item => item.code === code);
}

function generateTeacherAccessCodes(count = 10) {
  const codes = [];
  while (codes.length < count) {
    const candidate = `TCH-${randomCode()}`;
    if (codes.includes(candidate) || isTeacherAccessCodeTaken(candidate)) continue;
    codes.push(candidate);
  }
  return codes;
}

function teacherAvatarBackground(teacher) {
  if (teacher.avatarImage) {
    const imageUrl = String(teacher.avatarImage).replace(/"/g, "%22");
    return `background-image:url("${imageUrl}");background-position:${teacher.avatarImageX || 50}% ${teacher.avatarImageY || 35}%;background-size:${teacher.avatarImageScale || 128}%`;
  }
  return `background:${teacher.avatarStyle || teacher.profileTheme || "linear-gradient(135deg,#12b7cf,#7056d9)"}`;
}

function teacherAvatarMarkup(teacher, options = {}) {
  const classes = ["teacher-avatar", options.className || "", teacher.avatarImage ? "has-image" : ""].filter(Boolean).join(" ");
  const sizeStyle = [
    options.size ? `width:${options.size};height:${options.size};` : "",
    options.radius ? `border-radius:${options.radius};` : "",
    options.fontSize ? `font-size:${options.fontSize};` : "",
    options.extraStyle || ""
  ].join("");
  if (teacher.avatarImage) {
    return `
      <div class="${classes}" style="${teacherAvatarBackground(teacher)};${sizeStyle}">
        <img
          class="teacher-avatar-image"
          src="${escapeHtml(teacher.avatarImage)}"
          alt="${escapeHtml(teacher.name || "المدرس")}">
      </div>
    `;
  }
  return `<div class="${classes}" style="${teacherAvatarBackground(teacher)};${sizeStyle}">${escapeHtml(teacher.avatar || "")}</div>`;
}

function icon(name) {
  const icons = {
    menu: '<svg width="20" height="20" viewBox="0 0 24 24" fill="none"><path d="M4 7h16M4 12h16M4 17h16" stroke="currentColor" stroke-width="2" stroke-linecap="round"/></svg>',
    search: '<svg width="20" height="20" viewBox="0 0 24 24" fill="none"><circle cx="11" cy="11" r="7" stroke="currentColor" stroke-width="2"/><path d="m20 20-3.5-3.5" stroke="currentColor" stroke-width="2" stroke-linecap="round"/></svg>',
    moon: '<svg width="20" height="20" viewBox="0 0 24 24" fill="none"><path d="M20 15.5A8.5 8.5 0 0 1 8.5 4 8.7 8.7 0 1 0 20 15.5Z" stroke="currentColor" stroke-width="2" stroke-linejoin="round"/></svg>',
    sun: '<svg width="20" height="20" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="4" stroke="currentColor" stroke-width="2"/><path d="M12 2v2M12 20v2M2 12h2M20 12h2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M19.1 4.9l-1.4 1.4M6.3 17.7l-1.4 1.4" stroke="currentColor" stroke-width="2" stroke-linecap="round"/></svg>',
    user: '<svg width="20" height="20" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="8" r="4" stroke="currentColor" stroke-width="2"/><path d="M4 21a8 8 0 0 1 16 0" stroke="currentColor" stroke-width="2" stroke-linecap="round"/></svg>',
    plus: '<svg width="20" height="20" viewBox="0 0 24 24" fill="none"><path d="M12 5v14M5 12h14" stroke="currentColor" stroke-width="2" stroke-linecap="round"/></svg>',
    lock: '<svg width="20" height="20" viewBox="0 0 24 24" fill="none"><rect x="5" y="10" width="14" height="10" rx="2" stroke="currentColor" stroke-width="2"/><path d="M8 10V8a4 4 0 0 1 8 0v2" stroke="currentColor" stroke-width="2"/></svg>',
    book: '<svg width="20" height="20" viewBox="0 0 24 24" fill="none"><path d="M5 4h11a3 3 0 0 1 3 3v13H8a3 3 0 0 0-3-3V4Z" stroke="currentColor" stroke-width="2"/><path d="M5 17V7a3 3 0 0 1 3-3" stroke="currentColor" stroke-width="2"/></svg>',
    chart: '<svg width="20" height="20" viewBox="0 0 24 24" fill="none"><path d="M5 19V5M5 19h14M9 16v-5M13 16V8M17 16v-8" stroke="currentColor" stroke-width="2" stroke-linecap="round"/></svg>',
    close: '<svg width="20" height="20" viewBox="0 0 24 24" fill="none"><path d="m6 6 12 12M18 6 6 18" stroke="currentColor" stroke-width="2" stroke-linecap="round"/></svg>',
    copy: '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path></svg>',
    printer: '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="6 9 6 2 18 2 18 9"></polyline><path d="M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2"></path><rect x="6" y="14" width="12" height="8"></rect></svg>',
    logo: '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M22 10L12 5 2 10l10 5 10-5z" fill="rgba(255,255,255,0.25)"/><path d="M6 12v5c0 2 2 3 6 3s6-1 6-3v-5"/><path d="M20 10v6M12 15v7"/></svg>'
  };
  return icons[name] || "";
}

function appLayout(content) {
  const account = activeAccount();
  const user = account ? { ...state.activeUser, name: account.name } : null;
  const links = [
    ["#/teachers", "المدرسون"],
    ["#/courses", "الكورسات"],
    ["#/student", "كورساتي"],
    ["#/teacher-dashboard", "لوحة المدرس"]
  ];
  return `
    <header class="topbar">
      <nav class="container nav">
        <a class="brand" href="#/">
          <span class="logo-mark" style="border-radius: 12px; background: linear-gradient(135deg, var(--brand), var(--violet)); box-shadow: 0 8px 18px rgba(18, 183, 207, .25);">${icon("logo")}</span>
          <span class="logo-title" style="font-weight: 800; font-size: 24px; color: var(--navy); margin-right: 4px;">ذاكرلي</span>
        </a>
        <button class="icon-btn mobile-menu" data-menu aria-label="فتح القائمة">${icon("menu")}</button>
        <div class="nav-links" id="navLinks">
          ${links.map(([href, label]) => `<a class="nav-link ${location.hash === href ? "active" : ""}" href="${href}">${label}</a>`).join("")}
        </div>
        <div class="nav-actions">
          <button class="icon-btn" data-theme-toggle aria-label="تغيير الوضع">${state.theme === "dark" ? icon("sun") : icon("moon")}</button>
          <a class="nav-link" href="#/search">${icon("search")}</a>
          ${user ? `<button class="btn small" data-logout>${escapeHtml(user.name)} | خروج</button>` : `<a class="btn small" href="#/login">${icon("user")} سجل دخولك</a>`}
          <a class="btn primary small" href="#/register">${icon("plus")} حساب جديد</a>
        </div>
      </nav>
    </header>
    <main>${content}</main>
    <button class="whatsapp" title="تواصل واتساب">واتس</button>
    <footer class="footer">
      <div class="container">
        <span>ذاكرلي - منصة متعددة المدرسين قابلة للتوسع</span>
        <span>${firebaseOnline ? "متصل بقاعدة Firebase اللحظية" : "وضع محلي احتياطي حتى يتوفر اتصال Firebase"}</span>
      </div>
    </footer>
    <div id="modalRoot"></div>
    <div id="toastRoot"></div>
  `;
}

function render() {
  document.documentElement.dataset.theme = state.theme;
  const route = location.hash || "#/";
  const [path, param] = route.replace("#/", "").split("/");
  const page = routes[path || "home"] ? routes[path || "home"](param) : notFound();
  $("#app").innerHTML = appLayout(page);
  bindGlobalEvents();
}

const routes = {
  home: renderHome,
  teachers: renderTeachersPage,
  courses: renderCoursesPage,
  teacher: renderTeacherPage,
  login: renderLogin,
  register: renderRegister,
  student: renderStudentArea,
  "teacher-dashboard": renderTeacherDashboard,
  search: renderSearchPage
};

function renderHome() {
  const displayCourses = homeCourseFilter === "free"
    ? state.courses.filter(c => c.type === "مجاني")
    : state.courses;
  const student = currentStudent();
  const eyebrowText = student
    ? `مرحبا بك في منصة ذاكرلي، ${escapeHtml(student.name)} 👋`
    : "مستقبلك يبدأ هنا • منصة تعليمية متكاملة لجميع الصفوف";

  return `
    <section class="hero">
      <div class="container hero-grid">
        <div>
          <p class="eyebrow" style="font-weight: 700; color: var(--brand-dark); font-size: 14px; letter-spacing: 0.5px;">${eyebrowText}</p>
          <h1 style="font-weight: 900; font-size: clamp(32px, 5.5vw, 60px); line-height: 1.2; margin: 12px 0 20px;">ادرس مع نخبة المدرسين <br><span style="background: linear-gradient(135deg, var(--brand), var(--violet)); -webkit-background-clip: text; -webkit-text-fill-color: transparent;">وانطلق نحو القمة</span></h1>
          <p style="font-size: 16px; line-height: 1.75; color: var(--muted); margin-bottom: 28px; max-width: 620px;">منصة تعليمية متكاملة تمنحك حساباً واحداً لمتابعة دروسك، تفعيل كورساتك بالأكواد، واجتياز اختباراتك مع مدرسي النخبة في لوحات تعليمية مستقلة ومميزة.</p>
          
          <form class="quick-search" data-home-search style="margin-bottom: 28px;">
            <input class="field" name="query" placeholder="ابحث باسم المدرس، المادة أو الصف" style="flex: 1;">
            <div style="display: flex; gap: 8px; padding-left: 6px;">
              <button class="btn primary" type="submit" style="display: inline-flex; align-items: center; gap: 6px; box-shadow: 0 4px 14px rgba(18, 183, 207, 0.3);">${icon("search")} بحث</button>
              <button class="btn" type="button" data-scroll-free-courses style="background: linear-gradient(135deg, var(--green), #10b981); border: none; color: #fff; font-weight: 700; display: inline-flex; align-items: center; gap: 6px; box-shadow: 0 4px 14px rgba(32, 182, 111, 0.3);">كورسات مجانية 🎁</button>
            </div>
          </form>
          
          <div class="hero-stats">
            <div class="stat"><strong>${state.teachers.length}</strong><span>مدرس نشط</span></div>
            <div class="stat"><strong>${state.courses.length}</strong><span>كورس متاح</span></div>
            <div class="stat"><strong>${state.codes.length}</strong><span>نظام أكواد مستقل</span></div>
          </div>
        </div>
        <div class="visual-board" aria-hidden="true">
          <div class="floating-chip chip-a" style="border-radius: 50px; font-weight: 700; color: var(--green); box-shadow: 0 8px 20px rgba(0,0,0,0.06); padding: 8px 16px;">اختبارات فورية</div>
          <div class="floating-chip chip-b" style="border-radius: 50px; font-weight: 700; color: var(--amber); box-shadow: 0 8px 20px rgba(0,0,0,0.06); padding: 8px 16px;">أكواد تفعيل</div>
          <div class="floating-chip chip-c" style="border-radius: 50px; font-weight: 700; color: var(--rose); box-shadow: 0 8px 20px rgba(0,0,0,0.06); padding: 8px 16px;">لوحة مدرس</div>
          <div class="student-visual student-visual--photo" style="border-radius: 28px; box-shadow: var(--shadow);"></div>
        </div>
      </div>
    </section>
    ${teachersSection(state.teachers.slice(0, 3))}
    <div id="coursesSectionElement">
      ${coursesSection(displayCourses, homeCourseFilter === "free" ? "الكورسات المجانية" : "الكورسات المتاحة", homeCourseFilter === "free" ? "تصفح والتحق بأي كورس مجاني تابع لأي مدرس مباشرة وبدون أكواد." : "فعّل الكورس المجاني مباشرة أو اشترك في الكورسات المدفوعة.")}
    </div>
  `;
}

function teachersSection(teachers) {
  return `
    <section class="section">
      <div class="container">
        <div class="section-head">
          <div>
            <h2>اختر <span>المدرسين</span></h2>
            <p>كل مدرس له صفحة عامة ولوحة تحكم ومحتوى منفصل بالكامل.</p>
          </div>
          <a class="btn" href="#/teachers">عرض الكل</a>
        </div>
        <div class="grid teachers-grid">${teachers.map(teacherCard).join("")}</div>
      </div>
    </section>
  `;
}

function teacherCard(teacher) {
  return `
    <article class="card teacher-card" data-go="#/teacher/${teacher.id}">
      <div class="teacher-art teacher-art--compact teacher-art--square">
        ${teacherAvatarMarkup(teacher, { className: "teacher-avatar--card", size: "100%", radius: "0", fontSize: "38px", extraStyle: "box-shadow: none;" })}
      </div>
      <div class="teacher-meta teacher-meta--compact teacher-meta--simple">
        <h3>${escapeHtml(teacher.name)}</h3>
        <p class="teacher-subject">${escapeHtml(teacher.subject)}</p>
      </div>
    </article>
  `;
}

function renderTeachersPage() {
  return `
    <section class="page">
      <div class="container">
        <div class="teachers-hero">
          <div>
            <p class="eyebrow">اختر المدرسين</p>
            <h1>المدرسون في <span>واجهة أوضح</span></h1>
            <p>كل بطاقة تعرض الصورة والاسم والوصف بشكل أسهل، مع لون بنفسجي خفيف ومظهر مناسب للطلاب.</p>
          </div>
          <div class="teachers-hero-card">
            <strong>${state.teachers.length}</strong>
            <span>مدرس متاح</span>
          </div>
        </div>
        <div class="toolbar teachers-filters">
          <input class="field" id="teacherSearch" placeholder="ابحث عن مدرس أو مادة">
          <select class="select" id="gradeFilter">${optionList(["كل الصفوف", ...unique(state.teachers.map(t => t.grade))])}</select>
          <select class="select" id="subjectFilter">${optionList(["كل المواد", ...unique(state.teachers.map(t => t.subject))])}</select>
        </div>
        <div class="grid teachers-grid" id="teachersGrid">${state.teachers.map(teacherCard).join("")}</div>
      </div>
    </section>
  `;
}

function coursesSection(courses, title = "الكورسات المتاحة", text = "فعّل الكورس المجاني مباشرة أو اشترك في الكورسات المدفوعة.") {
  const isFreeFilter = homeCourseFilter === "free";
  return `
    <section class="section">
      <div class="container">
        <div class="section-head" style="align-items: center; border-bottom: 1px solid var(--line); padding-bottom: 24px; margin-bottom: 32px; flex-wrap: wrap; gap: 16px;">
          <div>
            <h2 style="font-size: clamp(28px, 4vw, 40px); font-weight: 800; margin: 0;">${title.split(" ")[0]} <span style="background: linear-gradient(135deg, var(--brand), var(--violet)); -webkit-background-clip: text; -webkit-text-fill-color: transparent;">${title.split(" ").slice(1).join(" ")}</span></h2>
            <p style="margin-top: 6px; color: var(--muted);">${text}</p>
            
            <div class="tabs" style="margin: 18px 0 0 0; display: flex; gap: 8px;">
              <button class="btn small ${!isFreeFilter ? "active" : ""}" data-home-course-tab="all" style="border-radius: 30px; padding: 6px 16px; font-weight: 700;">كل الكورسات</button>
              <button class="btn small ${isFreeFilter ? "active" : ""}" data-home-course-tab="free" style="border-radius: 30px; padding: 6px 16px; font-weight: 700; ${isFreeFilter ? "background: var(--green); border-color: var(--green); color: #fff;" : ""}">الكورسات المجانية 🎁</button>
            </div>
          </div>
          <a class="btn" href="#/courses" style="border-radius: 30px; padding: 8px 22px; font-weight: 700;">عرض كل الكورسات</a>
        </div>
        <div class="grid courses-grid">${courses.length ? courses.map(courseCard).join("") : `<div class="empty" style="grid-column: 1 / -1; text-align: center; padding: 40px 0;">لا توجد كورسات مجانية متاحة حالياً.</div>`}</div>
      </div>
    </section>
  `;
}

function courseCard(course) {
  const teacher = teacherById(course.teacherId);
  const enrolled = isEnrolled(course.id);
  const coverStyle = course.thumbnail
    ? `--course-color:${course.themeColor || "#12b7cf"};--cover:url('${course.thumbnail}');--image-x:${course.imageX || 50}%;--image-y:${course.imageY || 50}%`
    : `--course-color:${course.themeColor || "#12b7cf"};--cover:${course.cover || `linear-gradient(135deg,${course.themeColor || "#12b7cf"},#111936)`};--image-x:50%;--image-y:50%`;
  
  const ribbonBg = course.type === "مجاني" 
    ? "background: linear-gradient(135deg, var(--green), #10b981); box-shadow: 0 4px 10px rgba(32, 182, 111, 0.35);" 
    : "background: linear-gradient(135deg, var(--rose), #ff4e7e); box-shadow: 0 4px 10px rgba(239, 63, 109, 0.35);";
    
  const priceTag = course.type === "مجاني" 
    ? `<span class="tag green" style="font-weight: 700; background: rgba(32, 182, 111, 0.12); color: var(--green);">مجاني 🎁</span>` 
    : `<span class="tag rose" style="font-weight: 700; background: rgba(239, 63, 109, 0.12); color: var(--rose);">${course.price} ج.م</span>`;

  return `
    <article class="card course-card" style="--course-color:${course.themeColor || "#12b7cf"}; display: flex; flex-direction: column; height: 100%;">
      <div class="course-cover" style="${coverStyle}; min-height: 170px;">
        <span class="ribbon" style="${ribbonBg}">${course.type === "مجاني" ? "كورس مجاني" : "مدفوع"}</span>
        <strong style="position: relative; z-index: 2; font-size: 18px; font-weight: 800; text-shadow: 0 2px 8px rgba(0,0,0,0.6);">${escapeHtml(course.headerTitle || course.title)}</strong>
      </div>
      <div class="course-body" style="padding: 16px; display: flex; flex-direction: column; flex: 1;">
        <h3 style="font-size: 20px; font-weight: 800; margin-bottom: 6px; color: var(--course-color, var(--ink));">${escapeHtml(course.title)}</h3>
        <p class="muted" style="font-size: 13px; line-height: 1.6; display: -webkit-box; -webkit-line-clamp: 2; -webkit-box-orient: vertical; overflow: hidden; height: 42px; margin: 0 0 12px;">${escapeHtml(course.description)}</p>
        
        <div class="tags" style="display: flex; flex-wrap: wrap; gap: 6px; margin-top: auto;">
          <span class="tag" style="background: rgba(18, 183, 207, 0.08); color: var(--brand-dark); font-weight: 600;">${escapeHtml(teacher?.name || "")}</span>
          <span class="tag amber" style="font-weight: 600;">${escapeHtml(course.level)}</span>
          <span class="tag green" style="font-weight: 600;">${course.lessons.length} دروس</span>
          ${priceTag}
        </div>
        
        <div class="course-actions" style="margin-top: 16px; display: flex; gap: 8px; align-items: center;">
          <button class="btn primary small course-action" data-open-course="${course.id}" style="flex: 1.2; border-radius: 30px; font-weight: 700; height: 38px; min-height: 38px; font-size: 13px;">${enrolled ? "الدخول للكورس" : course.price === 0 ? "اشترك مجانا" : "تفعيل بالكود"}</button>
          <a class="btn small" href="#/teacher/${course.teacherId}" style="flex: 0.8; border-radius: 30px; text-align: center; justify-content: center; height: 38px; min-height: 38px; font-size: 13px; font-weight: 600;">صفحة المدرس</a>
        </div>
      </div>
    </article>
  `;
}

function renderCoursesPage() {
  return `
    <section class="page">
      <div class="container">
        <div class="page-title">
          <p class="eyebrow">كورسات المنصة</p>
          <h1>كورسات منظمة حسب <span>كل مدرس</span></h1>
        </div>
        <div class="toolbar">
          <input class="field" id="courseSearch" placeholder="ابحث عن كورس أو مدرس">
          <select class="select" id="courseTeacher">${optionList(["كل المدرسين", ...state.teachers.map(t => t.name)])}</select>
          <select class="select" id="courseType">${optionList(["كل الأنواع", "مجاني", "مدفوع"])}</select>
        </div>
        <div class="grid courses-grid" id="coursesGrid">${state.courses.map(courseCard).join("")}</div>
      </div>
    </section>
  `;
}

function renderTeacherPage(id) {
  const teacher = teacherById(id);
  if (!teacher) return notFound();
  const courses = teacherCourses(id);
  const lessons = state.lessons.filter(item => item.teacherId === id);
  const tests = state.tests.filter(item => item.teacherId === id);
  return `
    <section class="page">
      <div class="container">
        <article class="card teacher-hero teacher-profile-public">
          ${teacherAvatarMarkup(teacher, { className: "teacher-avatar--hero", size: "180px", radius: "30px", fontSize: "64px", extraStyle: "box-shadow: 0 18px 40px rgba(17,25,54,.18);" })}
          <div>
            <p class="eyebrow">${escapeHtml(teacher.subject)} | ${escapeHtml(teacher.grade)}</p>
            <h1>${escapeHtml(teacher.name)}</h1>
            <p class="muted">${escapeHtml(teacher.bio)}</p>
            <div class="tags">
              <span class="tag" style="background: rgba(18, 183, 207, 0.12); color: var(--brand-dark); font-weight: 700; font-size: 13px; padding: 6px 14px;">${teacher.stats.students} طالب مشترك</span>
              <span class="tag violet">${teacher.stats.rating} تقييم</span>
            </div>
          </div>
        </article>
        <div class="tabs">
          <button class="btn tab ${currentTeacherTab === "courses" ? "active" : ""}" data-teacher-tab="courses">الكورسات</button>
          <button class="btn tab ${currentTeacherTab === "lessons" ? "active" : ""}" data-teacher-tab="lessons">الدروس والملفات</button>
          <button class="btn tab ${currentTeacherTab === "tests" ? "active" : ""}" data-teacher-tab="tests">الاختبارات</button>
        </div>
        ${currentTeacherTab === "courses" ? `<div class="grid courses-grid">${courses.map(courseCard).join("")}</div>` : ""}
        ${currentTeacherTab === "lessons" ? renderLessonList(lessons) : ""}
        ${currentTeacherTab === "tests" ? renderTestList(tests) : ""}
      </div>
    </section>
  `;
}

function renderLessonList(lessons) {
  if (!lessons.length) return `<div class="empty">لا توجد دروس لهذا المدرس حاليا.</div>`;
  return `<div class="list">${lessons.map(lesson => `
    <div class="list-item">
      <div><h4>${escapeHtml(lesson.title)}</h4><p>${escapeHtml(lesson.description || "")}</p><p>${escapeHtml(courseById(lesson.courseId)?.title || "")} | ${(lesson.videos || []).length} فيديو | ${(lesson.attachments || []).length} مرفقات</p></div>
      <button class="btn small" data-open-lesson="${lesson.id}">فتح الدرس</button>
    </div>
  `).join("")}</div>`;
}

function renderTestList(tests) {
  if (!tests.length) return `<div class="empty">لا توجد اختبارات لهذا المدرس حاليا.</div>`;
  return `<div class="list">${tests.map(test => `
    <div class="list-item">
      <div>
        <h4>${escapeHtml(test.title)}</h4>
        <p>${questionTypeLabel((test.questions || [])[0]?.type)} | ${(test.questions || []).length} سؤال | ${test.minutes} دقيقة</p>
        ${renderQuestionPreview((test.questions || [])[0])}
      </div>
      <button class="btn small">ابدأ الاختبار</button>
    </div>
  `).join("")}</div>`;
}

function renderQuestionPreview(question) {
  if (!question) return "";
  const normalized = normalizeQuestion(question);
  return `
    <div class="question-preview">
      ${normalized.image ? `<img src="${escapeHtml(normalized.image)}" style="width:${normalized.imageSize}px" alt="صورة السؤال">` : ""}
      <p>${escapeHtml(normalized.text)}</p>
      <div class="tags">${(normalized.options || []).map(option => `<span class="tag">${escapeHtml(option)}</span>`).join("")}</div>
    </div>
  `;
}

function renderLogin(role = "student") {
  return authPage("login", role === "teacher" ? "teacher" : "student");
}

function renderRegister(role = "student") {
  return authPage("register", role === "teacher" ? "teacher" : "student");
}

function authPage(mode, role = "student") {
  const isRegister = mode === "register";
  const isTeacher = role === "teacher";
  const title = isRegister
    ? (isTeacher ? "إنشاء حساب مدرس" : "حساب طالب جديد")
    : (isTeacher ? "دخول المدرسين" : "تسجيل الدخول");
  const description = isRegister
    ? (isTeacher ? "أدخل الكود الممنوح لك من المطور وسجّل بياناتك. هذا الكود سيكون كلمة مرورك للدخول في أي وقت." : "حساب واحد برقم الهاتف يجمع كل كورساتك مع كل المدرسين.")
    : (isTeacher ? "ادخل كود ال**6 أرقام** الخاص بك وستدخل لوحتك فوراً." : "يدخل الطالب برقم الهاتف وكلمة المرور.");
  const switchLink = isRegister
    ? (isTeacher ? "#/register" : "#/register/teacher")
    : (isTeacher ? "#/login" : "#/login/teacher");
  const switchLabel = isRegister
    ? (isTeacher ? "إنشاء حساب طالب" : "إنشاء حساب مدرس")
    : (isTeacher ? "دخول الطلاب" : "دخول المدرسين");
  return `
    <section class="auth-wrap">
      <div class="auth-form">
        <div class="auth-switch">
          <a class="btn small ${!isTeacher ? "active" : ""}" href="${isRegister ? "#/register" : "#/login"}">${isRegister ? "إنشاء حساب طالب" : "دخول الطلاب"}</a>
          <a class="btn small ${isTeacher ? "active" : ""}" href="${isRegister ? "#/register/teacher" : "#/login/teacher"}">${isRegister ? "إنشاء حساب مدرس" : "دخول المدرسين"}</a>
        </div>
        <p class="eyebrow">${title}</p>
        <h1>${isTeacher && isRegister ? "أنشئ حساب مدرس" : isTeacher && !isRegister ? "ادخل كمدرس" : isRegister ? "أنشئ حسابك في ذاكرلي" : "ادخل على حسابك"}</h1>
        <p class="muted">${description}</p>
        <form class="form-grid" data-auth="${isTeacher ? (isRegister ? "teacher-register" : "teacher-login") : (isRegister ? "student-register" : "student-login")}">
          ${isTeacher && isRegister ? `
            <input class="field" name="name" placeholder="اسم المدرس" required>
            <div class="upload-box" data-profile-avatar-zone>
              <input type="hidden" name="avatarImage" value="">
              <input class="file-input" type="file" accept="image/*" data-profile-avatar-input>
              <div class="upload-preview" data-profile-avatar-preview>
                <span>اسحب صورة المدرس هنا أو اضغط للرفع</span>
              </div>
            </div>
            <input class="field" name="phone" placeholder="رقم الهاتف" required>
            <input class="field" name="recoveryPhone" placeholder="رقم هاتف استرداد الحساب" required>
            <div class="form-row">
              <select class="select" name="teacherSystem" required>
                <option value="">اختر النظام</option>
                <option value="تربية وتعليم فقط">تربية وتعليم فقط</option>
                <option value="أزهر فقط">أزهر فقط</option>
                <option value="الاثنين معًا">الاثنين معًا</option>
              </select>
              <select class="select" name="subject" required>
                <option value="">اختر المادة</option>
                ${teacherSubjects.map(subject => `<option>${escapeHtml(subject)}</option>`).join("")}
              </select>
            </div>
            <input class="field" name="devSignupCode" placeholder="كودك الخاص الممنوح من المطور (6 أرقام) - احتفظ به جيداً" required>
          ` : isTeacher ? `
            <input class="field" name="loginCode" placeholder="كودك الخاص المكون من 6 أرقام" required>
          ` : isRegister ? `
            <input class="field" name="name" placeholder="اسم الطالب" required>
            <input class="field" name="phone" placeholder="رقم هاتف الطالب" required>
            <input class="field" name="recoveryPhone" placeholder="رقم هاتف استرجاع الحساب" required>
            <div class="form-row">
              <select class="select" name="educationSystem" id="educationSystem" required>
                <option value="">هل أنت: أزهر أم تربية وتعليم؟</option>
                <option>أزهر</option>
                <option>تربية وتعليم</option>
              </select>
              <select class="select" name="grade" id="gradeSelect" required>
                <option value="">اختر الصف الدراسي</option>
              </select>
            </div>
            <select class="select is-hidden" name="track" id="trackSelect">
              <option value="">اختر الشعبة</option>
            </select>
            <input class="field" name="password" type="password" placeholder="كلمة المرور" required>
            <input class="field" name="confirmPassword" type="password" placeholder="تأكيد كلمة المرور" required>
          ` : `
            <input class="field" name="login" placeholder="رقم هاتف الطالب أو كود المدرس" required>
            <input class="field" name="password" type="password" placeholder="كلمة المرور" required>
          `}

          ${isRegister && !isTeacher ? `<button class="btn ghost small" type="button" data-switch-teacher-register>إنشاء حساب مدرس</button>` : ""}
          ${!isRegister && !isTeacher ? `<button class="btn ghost small" type="button" data-switch-teacher-login>دخول المدرسين</button>` : ""}
          ${!isTeacher && !isRegister ? `<button class="btn ghost small" type="button" data-recover-account>استرجاع الحساب</button>` : ""}
          <button class="btn primary" type="submit">${isRegister ? (isTeacher ? "إنشاء الحساب" : "إنشاء الحساب") : (isTeacher ? "دخول اللوحة" : "تسجيل الدخول")}</button>
          <p class="hint">${isTeacher && isRegister ? "سيتم حفظ كودك وستستخدمه للدخول دائماً — احتفظ به!" : isTeacher ? "ادخل كودك الخاص المكون من 6 أرقام وخلاص." : "تجربة طالب: 01000000000 / 123456"}</p>
        </form>
      </div>
      <div class="auth-visual"><div class="lock-visual"></div></div>
    </section>
  `;
}

function renderStudentArea() {
  const user = state.activeUser?.role === "student" ? state.students.find(s => s.id === state.activeUser.id) : null;
  if (!user) return loginRequired("student");
  const courses = state.courses.filter(course => user.enrollments.includes(course.id));
  return `
    <section class="page">
      <div class="container">
        <div class="dash-head">
          <div><p class="eyebrow">واجهة الطالب</p><h1>أهلا ${escapeHtml(user.name)}</h1></div>
          <button class="btn primary" data-open-activate>${icon("lock")} تفعيل كود</button>
        </div>
        <div class="stats-grid">
          <div class="stat"><strong>${courses.length}</strong><span>كورسات مشتركة</span></div>
          <div class="stat"><strong>${courses.reduce((sum, c) => sum + c.lessons.length, 0)}</strong><span>دروس متاحة</span></div>
          <div class="stat"><strong>${courses.reduce((sum, c) => sum + c.tests.length, 0)}</strong><span>اختبارات</span></div>
        </div>
        ${courses.length ? `<div class="grid courses-grid">${courses.map(courseCard).join("")}</div>` : `<div class="empty">لم تشترك في كورسات بعد. ابحث عن مدرسك أو فعّل كود كورس.</div>`}
      </div>
    </section>
  `;
}

function renderTeacherDashboard() {
  const teacher = teacherContext();
  if (!teacher) {
    return `
      <section class="page">
        <div class="container">
          <div class="empty">
            <h2>لوحة المدرس تحتاج تسجيل دخول مدرس</h2>
            <p>سجل دخولك كمدرس حتى تظهر بيانات حسابك فقط.</p>
            <div class="course-actions"><a class="btn primary" href="#/login/teacher">تسجيل دخول مدرس</a></div>
          </div>
        </div>
      </section>
    `;
  }
  return dashboardView(teacher);
}

function dashboardView(teacher) {
  const courses = teacherCourses(teacher.id);
  const lessons = teacherLessons(teacher.id);
  const tests = teacherTests(teacher.id);
  const codes = teacherCodes(teacher.id);
  const enrolledStudents = state.students.filter(student => student.enrollments.some(id => courses.some(course => course.id === id)));
  return `
    <section class="page">
      <div class="container split-layout">
        <aside class="side-panel">
          <div class="profile-mini">
            ${teacherAvatarMarkup(teacher, { className: "teacher-avatar--mini", size: "118px", radius: "26px", fontSize: "44px", extraStyle: "box-shadow: 0 12px 24px rgba(0,0,0,.12);" })}
            <div><strong>${escapeHtml(teacher.name)}</strong><p class="muted">${teacher.code}</p></div>
          </div>
          <div class="menu-list">
            ${dashButton("overview", "الإحصائيات")}
            ${dashButton("profile", "الصفحة الشخصية")}
            ${dashButton("courses", "إدارة الكورسات")}
            ${dashButton("lessons", "إدارة الدروس والملفات")}
            ${dashButton("tests", "إدارة الاختبارات")}
            ${dashButton("codes", "أكواد التفعيل")}
            ${dashButton("students", "الطلاب المشتركين")}
          </div>
        </aside>
        <section class="content-panel">
          <div class="dash-head">
            <div><p class="eyebrow">لوحة تحكم مستقلة</p><h1>${escapeHtml(tabTitle(dashboardTab))}</h1></div>
            ${dashboardAction(dashboardTab)}
          </div>
          ${dashboardTab === "overview" ? overviewPanel(courses, lessons, tests, codes, enrolledStudents) : ""}
          ${dashboardTab === "profile" ? profilePanel(teacher) : ""}
          ${dashboardTab === "courses" ? coursesTable(courses) : ""}
          ${dashboardTab === "lessons" ? lessonsTable(lessons, courses) : ""}
          ${dashboardTab === "tests" ? testsTable(tests, courses) : ""}
          ${dashboardTab === "codes" ? codesTable(codes, courses) : ""}
          ${dashboardTab === "students" ? studentsTable(enrolledStudents, courses) : ""}
        </section>
      </div>
    </section>
  `;
}

function dashButton(id, label) {
  return `<button class="btn ${dashboardTab === id ? "active" : ""}" data-dash-tab="${id}">${label}</button>`;
}

function dashboardAction(tab) {
  const actions = {
    profile: `<button class="btn primary" data-open-profile-editor>${icon("user")} تعديل الصفحة الشخصية</button>`,
    courses: `<button class="btn primary" data-manage-course="new">${icon("plus")} كورس جديد</button>`,
    lessons: `<button class="btn primary" data-manage-lesson="new">${icon("plus")} درس جديد</button>`,
    tests: `<button class="btn primary" data-manage-test="new">${icon("plus")} اختبار جديد</button>`,
    codes: `<button class="btn primary" data-manage-code="new">${icon("plus")} كود جديد</button>`
  };
  return actions[tab] || "";
}

function tabTitle(tab) {
  return {
    overview: "الإحصائيات",
    profile: "الصفحة الشخصية",
    courses: "إدارة الكورسات",
    lessons: "إدارة الدروس والملفات",
    tests: "إدارة الاختبارات",
    codes: "أكواد التفعيل",
    students: "الطلاب المشتركين"
  }[tab];
}

function overviewPanel(courses, lessons, tests, codes, students) {
  return `
    <div class="dash-grid">
      <div class="stat"><strong>${courses.length}</strong><span>كورسات</span></div>
      <div class="stat"><strong>${lessons.length}</strong><span>دروس وملفات</span></div>
      <div class="stat"><strong>${tests.length}</strong><span>اختبارات</span></div>
      <div class="stat"><strong>${students.length}</strong><span>طلاب</span></div>
    </div>
    <div class="empty">هذه اللوحة تعرض بيانات المدرس الحالي فقط، ولا تقرأ أو تعدل بيانات أي مدرس آخر.</div>
  `;
}

function profilePanel(teacher) {
  return `
    <div class="profile-panel">
      <div class="profile-preview card">
        <div class="profile-preview-head">
          ${teacherAvatarMarkup(teacher, { className: "teacher-avatar--profile", size: "168px", radius: "34px", fontSize: "54px", extraStyle: "box-shadow: 0 18px 42px rgba(17,25,54,.15);" })}
          <div>
            <p class="eyebrow">الظهور للطلاب</p>
            <h3>${escapeHtml(teacher.name)}</h3>
            <p class="muted">${escapeHtml(teacher.bio)}</p>
          </div>
        </div>
        <div class="profile-preview-metrics">
          <div class="stat"><strong>${teacher.stats.students}</strong><span>طالب</span></div>
          <div class="stat"><strong>${teacher.stats.rating}</strong><span>تقييم</span></div>
          <div class="stat"><strong>${teacherCourses(teacher.id).length}</strong><span>كورسات</span></div>
        </div>
      </div>
      <div class="empty profile-tip">اضغط على تعديل الصفحة الشخصية لتغيير الاسم والوصف والصورة وحجمها ومكانها.</div>
    </div>
  `;
}

function openTeacherProfileModal() {
  const teacher = teacherContext();
  if (!teacher) return;
  const previewStyle = teacher.avatarImage
    ? `background-image:url('${teacher.avatarImage}');background-position:${teacher.avatarImageX || 50}% ${teacher.avatarImageY || 35}%;background-size:${teacher.avatarImageScale || 128}%`
    : `background:${teacher.avatarStyle || "linear-gradient(135deg,#12b7cf,#7056d9)"}`;
  modal(`
    <div class="modal-head"><h3>الصفحة الشخصية</h3><button class="icon-btn" data-close-modal>${icon("close")}</button></div>
    <form class="form-grid" data-save-teacher-profile>
      <input class="field" name="name" placeholder="اسم المدرس" value="${escapeHtml(teacher.name)}" required>
      <textarea class="textarea" name="bio" placeholder="وصف المدرس" rows="4">${escapeHtml(teacher.bio || "")}</textarea>
      <label class="color-field">
        <span>لون الهوية</span>
        <input name="profileTheme" type="color" value="${escapeHtml(teacher.profileTheme || "#7c3aed")}">
      </label>
      <div class="upload-box" data-profile-avatar-zone>
        <input type="hidden" name="avatarImage" value="${escapeHtml(teacher.avatarImage || "")}">
        <input class="file-input" type="file" accept="image/*" data-profile-avatar-input>
        <div class="upload-preview ${teacher.avatarImage ? "has-image" : ""}" data-profile-avatar-preview style="${previewStyle}">
          <span>${teacher.avatarImage ? "اضغط أو اسحب لتغيير الصورة" : "اسحب صورة المدرس هنا أو اضغط للرفع"}</span>
        </div>
      </div>
      <div class="form-row">
        <label class="range-field">تحريك الصورة أفقيًا <input name="avatarImageX" type="range" min="0" max="100" value="${teacher.avatarImageX || 50}"></label>
        <label class="range-field">تحريك الصورة رأسيًا <input name="avatarImageY" type="range" min="0" max="100" value="${teacher.avatarImageY || 35}"></label>
      </div>
      <label class="range-field">تكبير الصورة <input name="avatarImageScale" type="range" min="90" max="180" value="${teacher.avatarImageScale || 128}"></label>
      <button class="btn primary" type="submit">حفظ الصفحة الشخصية</button>
    </form>
  `);
  document.querySelector("[data-save-teacher-profile]")?.addEventListener("submit", saveTeacherProfile);
  bindTeacherAvatarUpload();
}

function coursesTable(courses) {
  return table(["الكورس", "الصف", "النوع", "السعر", "إجراءات"], courses.map(course => [
    course.title,
    course.level,
    course.type,
    course.price ? `${course.price} ج.م` : "مجاني",
    `<button class="btn primary small" data-manage-lesson="new:${course.id}">إضافة درس</button> <button class="btn small" data-course-codes="${course.id}">الأكواد</button> ${rowActions("course", course.id)}`
  ]));
}

function lessonsTable(lessons, courses) {
  return table(["الدرس", "الكورس", "الفيديوهات", "المرفقات", "إجراءات"], lessons.map(lesson => [
    lesson.title,
    courses.find(course => course.id === lesson.courseId)?.title || "",
    (lesson.videos || []).length,
    (lesson.attachments || []).length,
    rowActions("lesson", lesson.id)
  ]));
}

function testsTable(tests, courses = []) {
  return table(["الاختبار", "النوع", "الكورس", "الدرس المرتبط", "الأسئلة", "الدقائق", "إجراءات"], tests.map(test => [
    test.title,
    questionTypeLabel((test.questions || [])[0]?.type || "mcq"),
    courses.find(course => course.id === test.courseId)?.title || "",
    lessonById(test.lessonId)?.title || "",
    (test.questions || []).length,
    test.minutes,
    rowActions("test", test.id)
  ]));
}

function codesTable(codes, courses = []) {
  return table(["الكود", "الكورس", "الحالة", "الصلاحية", "الاستخدام", "إجراءات"], codes.map(code => [
    code.code,
    courses.find(course => course.id === code.courseId)?.title || "",
    code.active === false ? "متوقف" : "نشط",
    code.expires,
    `${code.used}/${code.maxUses}`,
    rowActions("code", code.id)
  ]));
}

function studentsTable(students, courses) {
  return table(["الطالب", "الهاتف", "النظام", "الصف", "كورسات هذا المدرس"], students.map(student => [
    student.name,
    student.phone || "",
    student.educationSystem || "",
    [student.grade, student.track].filter(Boolean).join(" - "),
    student.enrollments.filter(id => courses.some(course => course.id === id)).map(id => courseById(id)?.title).join("، ")
  ]));
}

function table(headers, rows) {
  if (!rows.length) return `<div class="empty">لا توجد بيانات حتى الآن.</div>`;
  return `
    <div class="table-wrap">
      <table class="data-table">
        <thead><tr>${headers.map(item => `<th>${escapeHtml(item)}</th>`).join("")}</tr></thead>
        <tbody>${rows.map(row => `<tr>${row.map(cell => `<td>${safeTableCell(cell)}</td>`).join("")}</tr>`).join("")}</tbody>
      </table>
    </div>
  `;
}

function safeTableCell(cell) {
  const value = String(cell ?? "");
  return value.includes("data-manage-") || value.includes("data-delete-") ? value : escapeHtml(value);
}

function rowActions(type, id) {
  return `<button class="btn small" data-manage-${type}="${id}">تعديل</button> <button class="btn rose small" data-delete-${type}="${id}">حذف</button>`;
}

function renderSearchPage() {
  return renderTeachersPage();
}

function loginRequired(role) {
  return `
    <section class="page">
      <div class="container">
        <div class="empty">
          <h2>يرجى تسجيل الدخول</h2>
          <p>هذه الصفحة مخصصة لحساب ${role === "student" ? "الطالب" : "المدرس"}.</p>
          <a class="btn primary" href="#/login">تسجيل الدخول</a>
        </div>
      </div>
    </section>
  `;
}

function notFound() {
  return `<section class="page"><div class="container"><div class="empty">الصفحة غير موجودة.</div></div></section>`;
}

function bindGlobalEvents() {
  document.querySelectorAll("[data-go]").forEach(el => el.addEventListener("click", () => location.hash = el.dataset.go));
  document.querySelector("[data-menu]")?.addEventListener("click", () => $("#navLinks")?.classList.toggle("open"));
  document.querySelector("[data-theme-toggle]")?.addEventListener("click", () => {
    state.theme = state.theme === "dark" ? "light" : "dark";
    saveState();
    render();
  });
  document.querySelector("[data-logout]")?.addEventListener("click", () => {
    state.activeUser = null;
    saveState();
    toast("تم تسجيل الخروج");
    location.hash = "#/";
  });
  document.querySelector("[data-home-search]")?.addEventListener("submit", event => {
    event.preventDefault();
    location.hash = "#/teachers";
    setTimeout(() => {
      const input = $("#teacherSearch");
      if (input) {
        input.value = new FormData(event.currentTarget).get("query");
        filterTeachers();
      }
    }, 0);
  });
  $("#teacherSearch")?.addEventListener("input", filterTeachers);
  $("#gradeFilter")?.addEventListener("change", filterTeachers);
  $("#subjectFilter")?.addEventListener("change", filterTeachers);
  $("#courseSearch")?.addEventListener("input", filterCourses);
  $("#courseTeacher")?.addEventListener("change", filterCourses);
  $("#courseType")?.addEventListener("change", filterCourses);
  document.querySelectorAll("[data-teacher-tab]").forEach(btn => btn.addEventListener("click", () => {
    currentTeacherTab = btn.dataset.teacherTab;
    render();
  }));
  document.querySelectorAll("[data-dash-tab]").forEach(btn => btn.addEventListener("click", () => {
    dashboardTab = btn.dataset.dashTab;
    render();
  }));
  document.querySelector("[data-open-profile-editor]")?.addEventListener("click", openTeacherProfileModal);
  document.querySelectorAll("[data-open-course]").forEach(btn => btn.addEventListener("click", () => openCourse(btn.dataset.openCourse)));
  document.querySelectorAll("[data-open-lesson]").forEach(btn => btn.addEventListener("click", () => openLessonDetails(btn.dataset.openLesson)));
  document.querySelector("[data-open-activate]")?.addEventListener("click", openActivationModal);
  document.querySelector("[data-auth]")?.addEventListener("submit", handleAuth);
  document.querySelector("[data-recover-account]")?.addEventListener("click", openRecoveryModal);
  $("#educationSystem")?.addEventListener("change", updateGradeOptions);
  $("#gradeSelect")?.addEventListener("change", updateTrackOptions);
  bindCrudEvents();

  if (document.querySelector("[data-auth='teacher-register'] [data-profile-avatar-zone]")) {
    bindTeacherAvatarUpload();
  }

  document.querySelectorAll("[data-scroll-free-courses]").forEach(btn => btn.addEventListener("click", () => {
    homeCourseFilter = "free";
    render();
    setTimeout(() => {
      document.getElementById("coursesSectionElement")?.scrollIntoView({ behavior: "smooth" });
    }, 50);
  }));

  document.querySelectorAll("[data-home-course-tab]").forEach(btn => btn.addEventListener("click", () => {
    homeCourseFilter = btn.dataset.homeCourseTab;
    render();
    setTimeout(() => {
      document.getElementById("coursesSectionElement")?.scrollIntoView({ behavior: "instant" });
    }, 10);
  }));
}

function bindTeacherAvatarUpload() {
  const zone = document.querySelector("[data-profile-avatar-zone]");
  const input = document.querySelector("[data-profile-avatar-input]");
  const hidden = document.querySelector('input[name="avatarImage"]');
  const preview = document.querySelector("[data-profile-avatar-preview]");
  const xRange = document.querySelector('input[name="avatarImageX"]');
  const yRange = document.querySelector('input[name="avatarImageY"]');
  const scaleRange = document.querySelector('input[name="avatarImageScale"]');
  const themeInput = document.querySelector('input[name="profileTheme"]');
  if (!zone || !input || !hidden || !preview) return;

  const syncPreview = () => {
    if (hidden.value) {
      preview.style.backgroundImage = `url('${hidden.value}')`;
      preview.style.backgroundPosition = `${xRange?.value || 50}% ${yRange?.value || 35}%`;
      preview.style.backgroundSize = `${scaleRange?.value || 128}%`;
      preview.classList.add("has-image");
    } else {
      preview.style.background = themeInput?.value || "linear-gradient(135deg,#12b7cf,#7056d9)";
      preview.classList.remove("has-image");
    }
  };

  [xRange, yRange, scaleRange, themeInput].forEach(control => control?.addEventListener("input", syncPreview));
  preview.addEventListener("click", () => input.click());
  input.addEventListener("change", () => readTeacherAvatarFile(input.files?.[0], hidden, preview, syncPreview));
  ["dragenter", "dragover"].forEach(type => zone.addEventListener(type, event => {
    event.preventDefault();
    zone.classList.add("drag-over");
  }));
  ["dragleave", "drop"].forEach(type => zone.addEventListener(type, event => {
    event.preventDefault();
    zone.classList.remove("drag-over");
  }));
  zone.addEventListener("drop", event => readTeacherAvatarFile(event.dataTransfer?.files?.[0], hidden, preview, syncPreview));
  syncPreview();
}

async function readTeacherAvatarFile(file, hidden, preview, syncPreview) {
  if (!file || !file.type.startsWith("image/")) return toast("اختر صورة صالحة للمدرس");
  preview.querySelector("span").textContent = "جاري رفع الصورة...";
  const url = await uploadAsset(file, "teacher-avatars");
  hidden.value = url;
  preview.style.backgroundImage = `url('${url}')`;
  preview.classList.add("has-image");
  preview.querySelector("span").textContent = "تم رفع الصورة، ويمكنك ضبط موضعها وتكبيرها";
  syncPreview();
}

function saveTeacherProfile(event) {
  event.preventDefault();
  const teacher = teacherContext();
  if (!teacher) return;
  const data = Object.fromEntries(new FormData(event.currentTarget));
  Object.assign(teacher, {
    name: data.name,
    bio: data.bio,
    profileTheme: data.profileTheme || "#7c3aed",
    avatarImage: data.avatarImage || "",
    avatarImageX: Number(data.avatarImageX || 50),
    avatarImageY: Number(data.avatarImageY || 35),
    avatarImageScale: Number(data.avatarImageScale || 128),
    avatarStyle: `linear-gradient(135deg,${data.profileTheme || "#7c3aed"},#111936)`,
    avatar: data.name?.trim()?.charAt(0) || teacher.avatar
  });
  if (state.activeUser?.role === "teacher" && state.activeUser.id === teacher.id) {
    state.activeUser.name = teacher.name;
  }
  saveState();
  closeModal();
  render();
}

function filterTeachers() {
  const q = ($("#teacherSearch")?.value || "").trim();
  const grade = $("#gradeFilter")?.value || "كل الصفوف";
  const subject = $("#subjectFilter")?.value || "كل المواد";
  const teachers = state.teachers.filter(teacher => {
    const text = `${teacher.name} ${teacher.subject} ${teacher.grade} ${teacher.city}`;
    return (!q || text.includes(q)) &&
      (grade === "كل الصفوف" || teacher.grade === grade) &&
      (subject === "كل المواد" || teacher.subject === subject);
  });
  $("#teachersGrid").innerHTML = teachers.length ? teachers.map(teacherCard).join("") : `<div class="empty">لا توجد نتائج مطابقة.</div>`;
  document.querySelectorAll("[data-go]").forEach(el => el.addEventListener("click", () => location.hash = el.dataset.go));
}

function filterCourses() {
  const q = ($("#courseSearch")?.value || "").trim();
  const teacherName = $("#courseTeacher")?.value || "كل المدرسين";
  const type = $("#courseType")?.value || "كل الأنواع";
  const courses = state.courses.filter(course => {
    const teacher = teacherById(course.teacherId);
    const text = `${course.title} ${course.description} ${teacher?.name || ""}`;
    return (!q || text.includes(q)) &&
      (teacherName === "كل المدرسين" || teacher?.name === teacherName) &&
      (type === "كل الأنواع" || course.type === type);
  });
  $("#coursesGrid").innerHTML = courses.length ? courses.map(courseCard).join("") : `<div class="empty">لا توجد نتائج مطابقة.</div>`;
  document.querySelectorAll("[data-open-course]").forEach(btn => btn.addEventListener("click", () => openCourse(btn.dataset.openCourse)));
}

function handleAuth(event) {
  event.preventDefault();
  const form = event.currentTarget;
  const data = Object.fromEntries(new FormData(form));
  if (form.dataset.auth === "student-register") {
    if (data.password !== data.confirmPassword) return toast("كلمة المرور وتأكيدها غير متطابقين");
    if (state.students.some(student => student.phone === data.phone)) return toast("رقم الهاتف مسجل بالفعل");
    const needsTrack = requiredTracks(data.educationSystem, data.grade).length > 0;
    if (needsTrack && !data.track) return toast("اختر الشعبة المناسبة للصف");
    const student = {
      id: uid("s"),
      name: data.name,
      phone: data.phone,
      recoveryPhone: data.recoveryPhone,
      password: data.password,
      educationSystem: data.educationSystem,
      grade: data.grade,
      track: data.track || "",
      enrollments: []
    };
    state.students.push(student);
    state.activeUser = { role: "student", id: student.id, name: student.name };
    saveState();
    toast(`مرحبا بك في منصة ذاكرلي، ${student.name}`);
    location.hash = "#/";
    return;
  }
  if (form.dataset.auth === "teacher-register") {
    const enteredCode = String(data.devSignupCode || "").trim();
    const validCode = state.teacherSignupCodes?.find(c => c.code === enteredCode && !c.used);
    if (!validCode) {
      return toast("كود التسجيل غير صحيح أو تم استخدامه من قبل");
    }

    const loginCodes = generateTeacherAccessCodes(10);
    const teacher = {
      id: uid("t"),
      code: enteredCode,
      loginCodes: [enteredCode, ...loginCodes],
      devSignupCode: enteredCode,
      name: data.name,
      subject: data.subject,
      grade: data.teacherSystem,
      city: "",
      bio: "",
      avatar: data.name?.trim()?.charAt(0) || "م",
      avatarStyle: `linear-gradient(135deg,${data.profileTheme || "#7c3aed"},#7056d9)`,
      avatarImage: data.avatarImage || "",
      avatarImageX: Number(data.avatarImageX || 50),
      avatarImageY: Number(data.avatarImageY || 35),
      avatarImageScale: Number(data.avatarImageScale || 128),
      profileTheme: data.profileTheme || "#7c3aed",
      stats: { students: 0, rating: 5 },
      courses: [],
      phone: data.phone || "",
      recoveryPhone: data.recoveryPhone || "",
      password: ""
    };
    state.teachers.push(normalizeTeacher(teacher));
    validCode.used = true;
    state.activeUser = { role: "teacher", id: teacher.id, name: teacher.name };
    dashboardTab = "profile";
    saveState();
    toast(`مرحباً ${teacher.name}! تم إنشاء حسابك. كودك هو ${enteredCode} — احتفظ به!`);
    location.hash = "#/teacher-dashboard";
    return;
  }
  if (form.dataset.auth === "teacher-login") {
    const enteredCode = String(data.loginCode || "").trim();
    if (!enteredCode) return toast("ادخل كودك الخاص");
    const teacher = state.teachers.find(item =>
      item.devSignupCode === enteredCode ||
      teacherAccessCodes(item).map(c => c.toLowerCase()).includes(enteredCode.toLowerCase())
    );
    if (!teacher) return toast("كود الدخول غير صحيح");
    state.activeUser = { role: "teacher", id: teacher.id, name: teacher.name };
    saveState();
    location.hash = "#/teacher-dashboard";
    return;
  }
  if (form.dataset.auth === "student-login") {
    const student = state.students.find(item => item.phone === data.login && item.password === data.password);
    if (student) {
      state.activeUser = { role: "student", id: student.id, name: student.name };
      saveState();
      location.hash = "#/student";
      return;
    }
  }
  toast("بيانات الدخول غير صحيحة");
}

function updateGradeOptions() {
  const system = $("#educationSystem")?.value;
  const gradeSelect = $("#gradeSelect");
  if (!gradeSelect) return;
  const grades = educationGrades[system] || [];
  gradeSelect.innerHTML = `<option value="">اختر الصف الدراسي</option>${grades.map(grade => `<option>${escapeHtml(grade)}</option>`).join("")}`;
  updateTrackOptions();
}

function updateTrackOptions() {
  const system = $("#educationSystem")?.value;
  const grade = $("#gradeSelect")?.value;
  const trackSelect = $("#trackSelect");
  if (!trackSelect) return;
  const tracks = requiredTracks(system, grade);
  trackSelect.innerHTML = `<option value="">اختر الشعبة</option>${tracks.map(track => `<option>${escapeHtml(track)}</option>`).join("")}`;
  trackSelect.classList.toggle("is-hidden", tracks.length === 0);
  trackSelect.required = tracks.length > 0;
}

function requiredTracks(system, grade) {
  if (system === "أزهر" && ["الصف الأول الثانوي الأزهري", "الصف الثاني الثانوي الأزهري", "الصف الثالث الثانوي الأزهري"].includes(grade)) return azharTracks;
  if (system === "تربية وتعليم" && ["الصف الثاني الثانوي", "الصف الثالث الثانوي"].includes(grade)) return generalTracks;
  return [];
}

function openRecoveryModal() {
  modal(`
    <div class="modal-head"><h3>استرجاع الحساب</h3><button class="icon-btn" data-close-modal>${icon("close")}</button></div>
    <form class="form-grid" data-recovery>
      <input class="field" name="phone" placeholder="رقم هاتف الطالب" required>
      <input class="field" name="recoveryPhone" placeholder="رقم هاتف استرجاع الحساب" required>
      <input class="field" name="password" type="password" placeholder="كلمة المرور الجديدة" required>
      <input class="field" name="confirmPassword" type="password" placeholder="تأكيد كلمة المرور الجديدة" required>
      <button class="btn primary" type="submit">إعادة تعيين كلمة المرور</button>
    </form>
  `);
  document.querySelector("[data-recovery]").addEventListener("submit", event => {
    event.preventDefault();
    const data = Object.fromEntries(new FormData(event.currentTarget));
    const student = state.students.find(item => item.phone === data.phone && item.recoveryPhone === data.recoveryPhone);
    if (!student) return toast("رقم الاسترجاع غير صحيح");
    if (data.password !== data.confirmPassword) return toast("كلمة المرور وتأكيدها غير متطابقين");
    student.password = data.password;
    state.activeUser = { role: "student", id: student.id, name: student.name };
    saveState();
    closeModal();
    toast("تم استرجاع الحساب وتسجيل الدخول");
    location.hash = "#/student";
  });
}

function openCourse(courseId) {
  const course = courseById(courseId);
  const user = currentStudent();
  if (!user) {
    toast("يجب تسجيل الدخول أو إنشاء حساب أولاً للاشتراك في الكورسات");
    location.hash = "#/login";
    return;
  }
  if (user.enrollments.includes(courseId)) {
    openCourseDetails(course);
    return;
  }
  if (course.price === 0) {
    user.enrollments.push(courseId);
    saveState();
    toast("تم الاشتراك في الكورس المجاني");
    render();
    return;
  }
  openActivationModal(courseId);
}

function openCourseDetails(course) {
  const lessons = state.lessons.filter(item => item.courseId === course.id);
  modal(`
    <div class="modal-head"><h3>${escapeHtml(course.title)}</h3><button class="icon-btn" data-close-modal>${icon("close")}</button></div>
    <p class="muted">${escapeHtml(course.description)}</p>
    <h4>الدروس</h4>${renderLessonList(lessons)}
  `);
  document.querySelectorAll("[data-open-lesson]").forEach(btn => btn.addEventListener("click", () => openLessonDetails(btn.dataset.openLesson)));
}

function openLessonDetails(lessonId) {
  const lesson = state.lessons.find(item => item.id === lessonId);
  if (!lesson) return;
  const tests = state.tests.filter(test => test.lessonId === lesson.id);
  modal(`
    <div class="modal-head"><h3>${escapeHtml(lesson.title)}</h3><button class="icon-btn" data-close-modal>${icon("close")}</button></div>
    <p class="muted">${escapeHtml(lesson.description || "")}</p>
    <h4>الفيديوهات</h4>
    <div class="list">
      ${(lesson.videos || []).map((video, index) => `
        <div class="lesson-video-item">
          <div><h4>${index + 1}. ${escapeHtml(video.title)}</h4><p class="muted">${escapeHtml(video.description || "")}</p></div>
          ${video.embedUrl ? `<iframe class="video-frame" src="${escapeHtml(video.embedUrl)}" loading="lazy" allow="accelerometer; gyroscope; autoplay; encrypted-media; picture-in-picture;" allowfullscreen></iframe>` : ""}
          <a class="btn small course-action" href="${escapeHtml(video.embedUrl || video.url)}" target="_blank" rel="noopener">فتح الفيديو</a>
        </div>
      `).join("") || `<div class="empty">لا توجد فيديوهات لهذا الدرس.</div>`}
    </div>
    <h4>المرفقات الخارجية</h4>
    <div class="course-actions">
      ${(lesson.attachments || []).map(link => `<a class="btn small" href="${escapeHtml(link.url)}" target="_blank" rel="noopener">${escapeHtml(link.label || "تحميل")}</a>`).join("") || `<span class="muted">لا توجد مرفقات.</span>`}
    </div>
    <h4>الاختبار المرتبط</h4>
    ${renderTestList(tests)}
  `);
}

function openActivationModal(courseId = "") {
  modal(`
    <div class="modal-head"><h3>تفعيل كود كورس</h3><button class="icon-btn" data-close-modal>${icon("close")}</button></div>
    <form class="form-grid" data-activate>
      ${courseId ? `<input type="hidden" name="courseId" value="${courseId}">` : ""}
      <input class="field" name="code" placeholder="اكتب كود التفعيل" required>
      <button class="btn primary" type="submit">تفعيل الكورس</button>
      <p class="hint">أمثلة: 83920481 أو 57392014</p>
    </form>
  `);
  document.querySelector("[data-activate]").addEventListener("submit", event => {
    event.preventDefault();
    const data = Object.fromEntries(new FormData(event.currentTarget));
    activateCode(data.code, data.courseId);
  });
}

function activateCode(rawCode, requestedCourseId) {
  const user = currentStudent();
  if (!user) {
    closeModal();
    toast("سجل كطالب أولا لتفعيل الكود");
    location.hash = "#/login";
    return;
  }
  const code = state.codes.find(item => item.code.toLowerCase() === rawCode.trim().toLowerCase());
  if (!code) return toast("الكود غير موجود");
  if (code.active === false) return toast("هذا الكود متوقف حاليا");
  if (requestedCourseId && code.courseId !== requestedCourseId) return toast("الكود لا يخص هذا الكورس");
  if (new Date(code.expires) < new Date()) return toast("انتهت صلاحية الكود");
  if (code.used >= code.maxUses) return toast("تم استهلاك عدد مرات استخدام الكود");
  if (!user.enrollments.includes(code.courseId)) user.enrollments.push(code.courseId);
  code.used += 1;
  saveState();
  closeModal();
  toast("تم تفعيل الكورس بنجاح");
  render();
}

function bindCrudEvents() {
  document.querySelectorAll("[data-manage-course]").forEach(btn => btn.addEventListener("click", () => courseForm(btn.dataset.manageCourse)));
  document.querySelectorAll("[data-manage-lesson]").forEach(btn => btn.addEventListener("click", () => lessonForm(btn.dataset.manageLesson)));
  document.querySelectorAll("[data-manage-test]").forEach(btn => btn.addEventListener("click", () => testForm(btn.dataset.manageTest)));
  document.querySelectorAll("[data-manage-code]").forEach(btn => btn.addEventListener("click", () => codeForm(btn.dataset.manageCode)));
  document.querySelectorAll("[data-course-codes]").forEach(btn => btn.addEventListener("click", () => courseCodesForm(btn.dataset.courseCodes)));
  ["course", "lesson", "test", "code"].forEach(type => {
    document.querySelectorAll(`[data-delete-${type}]`).forEach(btn => btn.addEventListener("click", () => deleteEntity(type, btn.dataset[`delete${capitalize(type)}`])));
  });
}

function teacherContext() {
  if (state.activeUser?.role !== "teacher" || !state.activeUser.id) return null;
  return teacherById(state.activeUser.id) || null;
}

function activeAccount() {
  if (state.activeUser?.role === "student") return currentStudent();
  if (state.activeUser?.role === "teacher") return teacherContext();
  return null;
}

function courseForm(id) {
  const teacher = teacherContext();
  if (!teacher) return;
  const item = id === "new" ? {} : courseById(id);
  if (id !== "new" && (!item || item.teacherId !== teacher.id)) return toast("لا يمكن تعديل كورس مدرس آخر");
  modal(`
    <div class="modal-head"><h3>${id === "new" ? "كورس جديد" : "تعديل كورس"}</h3><button class="icon-btn" data-close-modal>${icon("close")}</button></div>
    <form class="form-grid" data-save-course="${id}">
      <input class="field" name="title" placeholder="اسم الكورس" value="${escapeHtml(item.title || "")}" required>
      <input class="field" name="headerTitle" placeholder="عنوان مميز للكورس Header Title" value="${escapeHtml(item.headerTitle || "")}" required>
      <select class="select" name="level" required>${optionList(platformGrades, item.level || platformGrades[0])}</select>
      <select class="select" name="type" data-course-type>${optionList(["مجاني", "مدفوع"], item.type || "مدفوع")}</select>
      <input class="field ${item.type === "مجاني" ? "is-hidden" : ""}" name="price" data-course-price type="number" min="0" placeholder="سعر الكورس" value="${item.type === "مجاني" ? 0 : item.price || 0}">
      <textarea class="textarea" name="description" placeholder="وصف الكورس" rows="4">${escapeHtml(item.description || "")}</textarea>
      <label class="color-field">
        <span>لون ثيم الكورس</span>
        <input name="themeColor" type="color" value="${escapeHtml(item.themeColor || "#12b7cf")}">
      </label>
      <div class="upload-box" data-drop-zone>
        <input type="hidden" name="thumbnail" value="${escapeHtml(item.thumbnail || "")}">
        <input class="file-input" type="file" accept="image/*" data-thumbnail-input>
        <div class="upload-preview ${item.thumbnail ? "has-image" : ""}" data-thumbnail-preview style="${item.thumbnail ? `background-image:url('${item.thumbnail}');background-position:${item.imageX || 50}% ${item.imageY || 50}%` : ""}">
          <span>${item.thumbnail ? "اسحب صورة جديدة أو اضغط للتغيير" : "اسحب صورة الكورس هنا أو اضغط للرفع"}</span>
        </div>
      </div>
      <div class="form-row">
        <label class="range-field">موضع الصورة أفقيًا <input name="imageX" type="range" min="0" max="100" value="${item.imageX || 50}"></label>
        <label class="range-field">موضع الصورة رأسيًا <input name="imageY" type="range" min="0" max="100" value="${item.imageY || 50}"></label>
      </div>
      <button class="btn primary" type="submit">حفظ الكورس</button>
    </form>
  `);
  document.querySelector("[data-save-course]").addEventListener("submit", event => saveCourse(event, id));
  bindCourseTypeToggle();
  bindThumbnailUpload();
}

function saveCourse(event, id) {
  event.preventDefault();
  const teacher = teacherContext();
  if (!teacher) return;
  const data = Object.fromEntries(new FormData(event.currentTarget));
  const price = data.type === "مجاني" ? 0 : Number(data.price || 0);
  if (id === "new") {
    const course = {
      id: uid("c"),
      teacherId: teacher.id,
      title: data.title,
      headerTitle: data.headerTitle,
      level: data.level,
      price,
      type: data.type,
      themeColor: data.themeColor || "#12b7cf",
      thumbnail: data.thumbnail || "",
      imageX: Number(data.imageX || 50),
      imageY: Number(data.imageY || 50),
      cover: `linear-gradient(135deg,${data.themeColor || "#12b7cf"},#111936)`,
      description: data.description,
      lessons: [],
      tests: [],
      files: []
    };
    state.courses.push(course);
    teacher.courses.push(course.id);
  } else {
    const course = courseById(id);
    if (!course || course.teacherId !== teacher.id) return toast("لا يمكن تعديل كورس مدرس آخر");
    Object.assign(course, {
      title: data.title,
      headerTitle: data.headerTitle,
      level: data.level,
      type: data.type,
      price,
      themeColor: data.themeColor || "#12b7cf",
      thumbnail: data.thumbnail || "",
      imageX: Number(data.imageX || 50),
      imageY: Number(data.imageY || 50),
      cover: `linear-gradient(135deg,${data.themeColor || "#12b7cf"},#111936)`,
      description: data.description
    });
  }
  saveState();
  closeModal();
  render();
}

function bindCourseTypeToggle() {
  const typeSelect = document.querySelector("[data-course-type]");
  const priceInput = document.querySelector("[data-course-price]");
  if (!typeSelect || !priceInput) return;
  const sync = () => {
    const isFree = typeSelect.value === "مجاني";
    priceInput.classList.toggle("is-hidden", isFree);
    priceInput.required = !isFree;
    if (isFree) priceInput.value = 0;
  };
  typeSelect.addEventListener("change", sync);
  sync();
}

function bindThumbnailUpload() {
  const dropZone = document.querySelector("[data-drop-zone]");
  const input = document.querySelector("[data-thumbnail-input]");
  const hidden = document.querySelector('input[name="thumbnail"]');
  const preview = document.querySelector("[data-thumbnail-preview]");
  const xRange = document.querySelector('input[name="imageX"]');
  const yRange = document.querySelector('input[name="imageY"]');
  if (!dropZone || !input || !hidden || !preview) return;

  const updatePosition = () => {
    preview.style.backgroundPosition = `${xRange?.value || 50}% ${yRange?.value || 50}%`;
  };
  xRange?.addEventListener("input", updatePosition);
  yRange?.addEventListener("input", updatePosition);
  preview.addEventListener("click", () => input.click());
  input.addEventListener("change", () => readThumbnailFile(input.files?.[0], hidden, preview));
  ["dragenter", "dragover"].forEach(type => dropZone.addEventListener(type, event => {
    event.preventDefault();
    dropZone.classList.add("drag-over");
  }));
  ["dragleave", "drop"].forEach(type => dropZone.addEventListener(type, event => {
    event.preventDefault();
    dropZone.classList.remove("drag-over");
  }));
  dropZone.addEventListener("drop", event => readThumbnailFile(event.dataTransfer?.files?.[0], hidden, preview));
}

async function readThumbnailFile(file, hidden, preview) {
  if (!file || !file.type.startsWith("image/")) return toast("اختر صورة صالحة للكورس");
  preview.querySelector("span").textContent = "جاري رفع الصورة...";
  const url = await uploadAsset(file, "course-thumbnails");
  hidden.value = url;
  preview.style.backgroundImage = `url('${url}')`;
  preview.classList.add("has-image");
  preview.querySelector("span").textContent = "تم رفع الصورة، ويمكنك ضبط موضعها";
}

function bindVideoUpload() {
  const zone = document.querySelector("[data-video-zone]");
  const input = document.querySelector("[data-video-input]");
  const hidden = document.querySelector('input[name="videoUrl"]');
  const embedHidden = document.querySelector('input[name="videoEmbedUrl"]');
  const bunnyHidden = document.querySelector('input[name="bunnyVideoId"]');
  const preview = document.querySelector("[data-video-preview]");
  if (!zone || !input || !hidden || !preview) return;
  preview.addEventListener("click", () => input.click());
  input.addEventListener("change", () => readVideoFile(input.files?.[0], hidden, embedHidden, bunnyHidden, preview));
  ["dragenter", "dragover"].forEach(type => zone.addEventListener(type, event => {
    event.preventDefault();
    zone.classList.add("drag-over");
  }));
  ["dragleave", "drop"].forEach(type => zone.addEventListener(type, event => {
    event.preventDefault();
    zone.classList.remove("drag-over");
  }));
  zone.addEventListener("drop", event => readVideoFile(event.dataTransfer?.files?.[0], hidden, embedHidden, bunnyHidden, preview));
}

async function readVideoFile(file, hidden, embedHidden, bunnyHidden, preview) {
  if (!file || !file.type.startsWith("video/")) return toast("اختر ملف فيديو صالح");
  preview.querySelector("span").textContent = "جاري رفع الفيديو إلى Bunny Stream...";
  try {
    const video = await uploadVideoToBunny(file, file.name);
    hidden.value = video.playbackUrl;
    if (embedHidden) embedHidden.value = video.embedUrl;
    if (bunnyHidden) bunnyHidden.value = video.videoId;
    preview.classList.add("has-image");
    preview.querySelector("span").textContent = `تم رفع الفيديو على Bunny: ${file.name}`;
    toast("تم رفع الفيديو على Bunny Stream بنجاح");
  } catch (error) {
    preview.querySelector("span").textContent = "تعذر رفع الفيديو إلى Bunny، سيتم حفظ نسخة محلية مؤقتة";
    const url = await uploadAsset(file, "lesson-videos");
    hidden.value = url;
    if (embedHidden) embedHidden.value = "";
    if (bunnyHidden) bunnyHidden.value = "";
    preview.classList.add("has-image");
    toast(error.message || "فشل رفع الفيديو إلى Bunny Stream");
  }
}

async function uploadVideoToBunny(file, title) {
  if (!bunnyConfig.apiKey || !bunnyConfig.libraryId) {
    throw new Error("إعدادات Bunny Stream غير مكتملة");
  }
  const createResponse = await fetch(`https://video.bunnycdn.com/library/${bunnyConfig.libraryId}/videos`, {
    method: "POST",
    headers: {
      "AccessKey": bunnyConfig.apiKey,
      "Content-Type": "application/json"
    },
    body: JSON.stringify({ title: title.replace(/\.[^.]+$/, "") || "lesson-video" })
  });
  if (!createResponse.ok) {
    throw new Error("فشل إنشاء الفيديو على Bunny Stream");
  }
  const created = await createResponse.json();
  const videoId = created.guid || created.videoLibraryId || created.id;
  if (!videoId) throw new Error("لم يتم استلام معرف الفيديو من Bunny");

  const uploadResponse = await fetch(`https://video.bunnycdn.com/library/${bunnyConfig.libraryId}/videos/${videoId}`, {
    method: "PUT",
    headers: {
      "AccessKey": bunnyConfig.apiKey,
      "Content-Type": "application/octet-stream"
    },
    body: file
  });
  if (!uploadResponse.ok) {
    throw new Error("فشل رفع ملف الفيديو إلى Bunny Stream");
  }
  return {
    videoId,
    playbackUrl: `https://${bunnyConfig.cdnHost}/${videoId}/playlist.m3u8`,
    embedUrl: `https://iframe.mediadelivery.net/embed/${bunnyConfig.libraryId}/${videoId}`
  };
}

function bindQuestionTypeToggle() {
  const typeSelect = document.querySelector("[data-question-type]");
  const mcqFields = document.querySelector("[data-mcq-fields]");
  const tfFields = document.querySelector("[data-tf-fields]");
  if (!typeSelect || !mcqFields || !tfFields) return;
  const sync = () => {
    const isMcq = typeSelect.value === "mcq";
    mcqFields.classList.toggle("is-hidden", !isMcq);
    tfFields.classList.toggle("is-hidden", isMcq);
  };
  typeSelect.addEventListener("change", sync);
  sync();
}

function bindQuestionImageUpload() {
  const zone = document.querySelector("[data-question-image-zone]");
  const input = document.querySelector("[data-question-image-input]");
  const hidden = document.querySelector('input[name="questionImage"]');
  const preview = document.querySelector("[data-question-image-preview]");
  if (!zone || !input || !hidden || !preview) return;
  preview.addEventListener("click", () => input.click());
  input.addEventListener("change", () => readQuestionImage(input.files?.[0], hidden, preview));
  ["dragenter", "dragover"].forEach(type => zone.addEventListener(type, event => {
    event.preventDefault();
    zone.classList.add("drag-over");
  }));
  ["dragleave", "drop"].forEach(type => zone.addEventListener(type, event => {
    event.preventDefault();
    zone.classList.remove("drag-over");
  }));
  zone.addEventListener("drop", event => readQuestionImage(event.dataTransfer?.files?.[0], hidden, preview));
}

async function readQuestionImage(file, hidden, preview) {
  if (!file || !file.type.startsWith("image/")) return toast("اختر صورة صالحة للسؤال");
  preview.querySelector("span").textContent = "جاري رفع صورة السؤال...";
  const url = await uploadAsset(file, "question-images");
  hidden.value = url;
  preview.style.backgroundImage = `url('${url}')`;
  preview.classList.add("has-image");
  preview.querySelector("span").textContent = "تم رفع صورة السؤال";
}

async function uploadAsset(file, folder) {
  try {
    const formData = new FormData();
    formData.append("file", file);
    formData.append("upload_preset", cloudinaryConfig.uploadPreset);
    formData.append("folder", folder);
    formData.append("public_id", `${folder}-${Date.now()}-${file.name.replace(/[^\w.\-]+/g, "_")}`);
    const response = await fetch(cloudinaryConfig.endpoint, {
      method: "POST",
      body: formData
    });
    if (!response.ok) throw new Error("Cloudinary upload failed");
    const payload = await response.json();
    if (payload.secure_url) return payload.secure_url;
  } catch {
    if (firebaseStorage && firebaseStorageTools) {
      try {
        const safeName = file.name.replace(/[^\w.\-]+/g, "_");
        const storageRef = firebaseStorageTools.ref(firebaseStorage, `assets/${folder}/${Date.now()}-${safeName}`);
        await firebaseStorageTools.uploadBytes(storageRef, file);
        return await firebaseStorageTools.getDownloadURL(storageRef);
      } catch {
        toast("تعذر رفع الملف إلى Firebase Storage، سيتم استخدام نسخة محلية مؤقتة");
      }
    }
  }
  return fileToDataUrl(file);
}

function fileToDataUrl(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => resolve(reader.result);
    reader.onerror = reject;
    reader.readAsDataURL(file);
  });
}

function buildQuestion(data) {
  if (data.questionType === "truefalse") {
    return {
      type: "truefalse",
      text: data.questionText || "",
      image: data.questionImage || "",
      imageSize: Number(data.imageSize || 220),
      options: ["صح", "خطأ"],
      correct: data.tfCorrect || "صح",
      grade: Number(data.grade || 1)
    };
  }
  const options = [data.option1, data.option2, data.option3, data.option4].map(option => option || "");
  const correctIndex = Number(data.mcqCorrect || 0);
  return {
    type: "mcq",
    text: data.questionText || "",
    image: data.questionImage || "",
    imageSize: Number(data.imageSize || 220),
    options,
    correctIndex,
    correct: options[correctIndex] || "",
    grade: Number(data.grade || 1)
  };
}

function normalizeQuestion(question = {}) {
  if (question.type === "truefalse") {
    return { type: "truefalse", text: question.text || "", image: question.image || "", imageSize: question.imageSize || 220, options: ["صح", "خطأ"], correct: question.correct || "صح", grade: question.grade || 1 };
  }
  const options = question.options || ["", "", "", ""];
  const correctIndex = Number.isInteger(question.correctIndex) ? question.correctIndex : Math.max(0, options.indexOf(question.correct));
  return { type: "mcq", text: question.text || "", image: question.image || "", imageSize: question.imageSize || 220, options: [options[0] || "", options[1] || "", options[2] || "", options[3] || ""], correctIndex, correct: question.correct || options[correctIndex] || "", grade: question.grade || 1 };
}

function questionTypeLabel(type) {
  return type === "truefalse" ? "صح أو خطأ" : "اختيار من متعدد";
}

function syncLessonTestLinks(lesson, nextTestIds, nextCourseId) {
  const oldIds = lesson.testIds || [];
  oldIds.filter(id => !nextTestIds.includes(id)).forEach(id => {
    const test = state.tests.find(row => row.id === id);
    if (test && test.lessonId === lesson.id) test.lessonId = "";
    const course = courseById(lesson.courseId);
    if (course) course.tests = course.tests.filter(testId => testId !== id);
  });
  nextTestIds.forEach(id => {
    const test = state.tests.find(row => row.id === id);
    if (test) {
      test.lessonId = lesson.id;
      test.courseId = nextCourseId;
      const course = courseById(nextCourseId);
      if (course && !course.tests.includes(id)) course.tests.push(id);
    }
  });
}

function lessonForm(id) {
  const teacher = teacherContext();
  if (!teacher) return;
  const [mode, presetCourseId = ""] = String(id).split(":");
  const isNew = mode === "new";
  const actualId = isNew ? "new" : id;
  const courses = teacherCourses(teacher.id);
  if (presetCourseId && !teacherOwnsCourse(teacher, presetCourseId)) return toast("لا يمكن إضافة درس إلى كورس مدرس آخر");
  const item = isNew ? { courseId: presetCourseId } : state.lessons.find(row => row.id === actualId);
  if (!isNew && (!item || item.teacherId !== teacher.id)) return toast("لا يمكن تعديل درس مدرس آخر");
  modal(`
    <div class="modal-head"><h3>${isNew ? "درس جديد" : "تعديل درس"}</h3><button class="icon-btn" data-close-modal>${icon("close")}</button></div>
    <form class="form-grid" data-save-lesson="${actualId}">
      <input class="field" name="title" placeholder="اسم الدرس" value="${escapeHtml(item.title || "")}" required>
      <select class="select" name="courseId">${courses.map(course => `<option value="${course.id}" ${item.courseId === course.id ? "selected" : ""}>${escapeHtml(course.title)}</option>`).join("")}</select>
      <textarea class="textarea" name="description" placeholder="وصف الدرس" rows="3">${escapeHtml(item.description || "")}</textarea>
      <div class="upload-box" data-video-zone>
        <input type="hidden" name="videoUrl" value="${escapeHtml((item.videos || [])[0]?.url || "")}">
        <input type="hidden" name="videoEmbedUrl" value="${escapeHtml((item.videos || [])[0]?.embedUrl || "")}">
        <input type="hidden" name="bunnyVideoId" value="${escapeHtml((item.videos || [])[0]?.bunnyVideoId || "")}">
        <input class="file-input" type="file" accept="video/*" data-video-input>
        <div class="upload-preview compact ${((item.videos || [])[0]?.url) ? "has-image" : ""}" data-video-preview>
          <span>${((item.videos || [])[0]?.url) ? "تم اختيار فيديو الدرس، اضغط للتغيير" : "اضغط لرفع فيديو الدرس أو اسحبه هنا"}</span>
        </div>
      </div>
      <textarea class="textarea" name="attachments" placeholder="ملفات الدرس: اسم الملف | رابط الملف - مثال: ملف الواجب | https://drive.google.com/..." rows="4">${escapeHtml(formatAttachments(item.attachments || []))}</textarea>
      <select class="select" name="testId">
        <option value="">بدون اختبار</option>
        ${state.tests.filter(test => test.teacherId === teacher.id).map(test => `<option value="${test.id}" ${(item.testIds || []).includes(test.id) ? "selected" : ""}>${escapeHtml(test.title)}</option>`).join("")}
      </select>
      <button class="btn primary" type="submit">حفظ</button>
    </form>
  `);
  document.querySelector("[data-save-lesson]").addEventListener("submit", event => saveLesson(event, actualId));
  bindVideoUpload();
}

function saveLesson(event, id) {
  event.preventDefault();
  const teacher = teacherContext();
  if (!teacher) return;
  const data = Object.fromEntries(new FormData(event.currentTarget));
  const course = courseById(data.courseId);
  if (!course || course.teacherId !== teacher.id) return toast("لا يمكن ربط الدرس بكورس مدرس آخر");
  const linkedTest = data.testId ? state.tests.find(row => row.id === data.testId && row.teacherId === teacher.id) : null;
  const payload = {
    title: data.title,
    courseId: data.courseId,
    description: data.description,
    videos: data.videoUrl ? [{ title: data.title, description: data.description, url: data.videoUrl, embedUrl: data.videoEmbedUrl || "", bunnyVideoId: data.bunnyVideoId || "" }] : [],
    attachments: parseAttachments(data.attachments),
    testIds: linkedTest ? [linkedTest.id] : []
  };
  if (id === "new") {
    const lesson = { id: uid("l"), teacherId: teacher.id, ...payload };
    state.lessons.push(lesson);
    course.lessons.push(lesson.id);
    if (linkedTest) {
      linkedTest.courseId = payload.courseId;
      linkedTest.lessonId = lesson.id;
      if (!course.tests.includes(linkedTest.id)) course.tests.push(linkedTest.id);
    }
  } else {
    const lesson = state.lessons.find(row => row.id === id);
    if (!lesson || lesson.teacherId !== teacher.id) return toast("لا يمكن تعديل درس مدرس آخر");
    if (lesson.courseId !== payload.courseId) {
      const oldCourse = courseById(lesson.courseId);
      if (oldCourse) oldCourse.lessons = oldCourse.lessons.filter(lessonId => lessonId !== id);
      const newCourse = courseById(payload.courseId);
      if (newCourse && !newCourse.lessons.includes(id)) newCourse.lessons.push(id);
    }
    syncLessonTestLinks(lesson, payload.testIds, payload.courseId);
    Object.assign(lesson, payload);
  }
  saveState();
  closeModal();
  render();
}

function testForm(id) {
  const teacher = teacherContext();
  if (!teacher) return;
  const item = id === "new" ? {} : state.tests.find(row => row.id === id);
  if (id !== "new" && (!item || item.teacherId !== teacher.id)) return toast("لا يمكن تعديل اختبار مدرس آخر");
  const question = normalizeQuestion((item.questions || [])[0]);
  modal(`
    <div class="modal-head"><h3>${id === "new" ? "اختبار جديد" : "تعديل اختبار"}</h3><button class="icon-btn" data-close-modal>${icon("close")}</button></div>
    <form class="form-grid" data-save-test="${id}">
      <input class="field" name="title" placeholder="اسم الاختبار" value="${escapeHtml(item.title || "")}" required>
      <input class="field" name="minutes" type="number" min="1" value="${item.minutes || 15}" placeholder="المدة بالدقائق">
      <select class="select" name="questionType" data-question-type>
        <option value="mcq" ${question.type === "mcq" ? "selected" : ""}>اختيار من متعدد</option>
        <option value="truefalse" ${question.type === "truefalse" ? "selected" : ""}>صح أو خطأ</option>
      </select>
      <textarea class="textarea" name="questionText" rows="3" placeholder="نص السؤال">${escapeHtml(question.text || "")}</textarea>
      <div class="upload-box" data-question-image-zone>
        <input type="hidden" name="questionImage" value="${escapeHtml(question.image || "")}">
        <input class="file-input" type="file" accept="image/*" data-question-image-input>
        <div class="upload-preview compact ${question.image ? "has-image" : ""}" data-question-image-preview style="${question.image ? `background-image:url('${question.image}')` : ""}">
          <span>${question.image ? "تم رفع صورة السؤال، اضغط للتغيير" : "اضغط لرفع صورة السؤال أو اسحبها هنا"}</span>
        </div>
      </div>
      <label class="range-field">حجم صورة السؤال <input name="imageSize" type="range" min="80" max="420" value="${question.imageSize || 220}"></label>
      <div data-mcq-fields>
        <div class="form-row">
          <input class="field" name="option1" placeholder="الاختيار الأول" value="${escapeHtml(question.options?.[0] || "")}">
          <input class="field" name="option2" placeholder="الاختيار الثاني" value="${escapeHtml(question.options?.[1] || "")}">
        </div>
        <div class="form-row">
          <input class="field" name="option3" placeholder="الاختيار الثالث" value="${escapeHtml(question.options?.[2] || "")}">
          <input class="field" name="option4" placeholder="الاختيار الرابع" value="${escapeHtml(question.options?.[3] || "")}">
        </div>
        <select class="select" name="mcqCorrect">
          ${["1", "2", "3", "4"].map((value, index) => `<option value="${index}" ${question.correctIndex === index ? "selected" : ""}>الإجابة الصحيحة: الاختيار ${value}</option>`).join("")}
        </select>
      </div>
      <div data-tf-fields>
        <select class="select" name="tfCorrect">
          <option value="صح" ${question.correct === "صح" ? "selected" : ""}>الإجابة الصحيحة: صح</option>
          <option value="خطأ" ${question.correct === "خطأ" ? "selected" : ""}>الإجابة الصحيحة: خطأ</option>
        </select>
      </div>
      <input class="field" name="grade" type="number" min="1" value="${question.grade || 1}" placeholder="درجة السؤال">
      <button class="btn primary" type="submit">حفظ</button>
    </form>
  `);
  document.querySelector("[data-save-test]").addEventListener("submit", event => saveTest(event, id));
  bindQuestionTypeToggle();
  bindQuestionImageUpload();
}

function saveTest(event, id) {
  event.preventDefault();
  const teacher = teacherContext();
  if (!teacher) return;
  const data = Object.fromEntries(new FormData(event.currentTarget));
  const existing = id === "new" ? {} : state.tests.find(row => row.id === id);
  const payload = {
    title: data.title,
    minutes: Number(data.minutes || 0),
    courseId: existing.courseId || "",
    lessonId: existing.lessonId || "",
    questions: [buildQuestion(data)]
  };
  if (id === "new") {
    const test = { id: uid("q"), teacherId: teacher.id, ...payload };
    state.tests.push(test);
  } else {
    const test = state.tests.find(row => row.id === id);
    if (!test || test.teacherId !== teacher.id) return toast("لا يمكن تعديل اختبار مدرس آخر");
    Object.assign(test, payload);
  }
  saveState();
  closeModal();
  render();
}

function codeForm(id) {
  const teacher = teacherContext();
  if (!teacher) return;
  const courses = teacherCourses(teacher.id);
  const item = id === "new" ? {} : state.codes.find(row => row.id === id);
  if (id !== "new" && (!item || item.teacherId !== teacher.id)) return toast("لا يمكن تعديل كود مدرس آخر");
  modal(`
    <div class="modal-head"><h3>${id === "new" ? "كود جديد" : "تعديل كود"}</h3><button class="icon-btn" data-close-modal>${icon("close")}</button></div>
    <form class="form-grid" data-save-code="${id}">
      <input class="field" name="code" placeholder="الكود" value="${escapeHtml(item.code || randomCode(teacher.code))}" required>
      <select class="select" name="courseId">${courses.map(course => `<option value="${course.id}" ${item.courseId === course.id ? "selected" : ""}>${escapeHtml(course.title)}</option>`).join("")}</select>
      <div class="form-row">
        <input class="field" name="expires" type="date" value="${item.expires || "2026-12-31"}">
        <input class="field" name="maxUses" type="number" min="1" value="${item.maxUses || 1}" placeholder="عدد مرات الاستخدام">
      </div>
      <label class="check-field"><input type="checkbox" name="active" ${item.active === false ? "" : "checked"}> الكود نشط</label>
      <button class="btn primary" type="submit">حفظ</button>
    </form>
  `);
  document.querySelector("[data-save-code]").addEventListener("submit", event => saveCode(event, id));
}

function courseCodesForm(courseId) {
  renderCourseCodesModalContent(courseId);
}

function renderCourseCodesModalContent(courseId) {
  const teacher = teacherContext();
  if (!teacher) return;
  const course = courseById(courseId);
  if (!course) return;
  if (course.teacherId !== teacher.id) return toast("لا يمكن إدارة أكواد كورس مدرس آخر");

  const courseCodes = state.codes.filter(c => c.teacherId === teacher.id && c.courseId === courseId);

  const content = `
    <div class="modal-head">
      <h3>أكواد تفعيل كورس: ${escapeHtml(course.title)}</h3>
      <button class="icon-btn" data-close-modal>${icon("close")}</button>
    </div>
    
    <div style="display: grid; gap: 20px; max-height: 80vh; overflow-y: auto; padding-right: 4px;">
      <!-- Generation Panel -->
      <div class="stat" style="display: flex; flex-direction: column; gap: 12px; border-color: var(--brand);">
        <h4 style="margin: 0; color: var(--brand-dark);">توليد أكواد جديدة</h4>
        <div style="display: flex; gap: 8px; flex-wrap: wrap;">
          <button class="btn small" type="button" data-preset-count="10">10 أكواد</button>
          <button class="btn small" type="button" data-preset-count="20">20 كود</button>
          <button class="btn small" type="button" data-preset-count="30">30 كود</button>
        </div>
        
        <form id="generateCodesForm" style="display: grid; grid-template-columns: 1fr auto; gap: 10px; align-items: end;">
          <div>
            <label style="font-size: 13px; color: var(--muted); display: block; margin-bottom: 4px;">عدد الأكواد المطلوب إنشاؤها</label>
            <input class="field" type="number" id="codesCount" min="1" max="100" value="10" required placeholder="مثال: 15">
          </div>
          <button class="btn primary" type="submit" style="height: 46px;">إنشاء الأكواد</button>
        </form>
      </div>

      <!-- Actions Row -->
      <div style="display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 10px;">
        <h4 style="margin: 0;">الأكواد الحالية (${courseCodes.length})</h4>
        <div style="display: flex; gap: 8px;">
          <button class="btn small" id="copyAllCodesBtn" ${courseCodes.length === 0 ? "disabled" : ""}>${icon("copy")} نسخ كل الأكواد</button>
          <button class="btn small" id="printCodesBtn" ${courseCodes.length === 0 ? "disabled" : ""}>${icon("printer")} طباعة الأكواد</button>
        </div>
      </div>

      <!-- Codes List -->
      <div class="table-wrap" style="max-height: 300px; overflow-y: auto;">
        ${courseCodes.length === 0 ? `
          <div class="empty" style="padding: 20px 0;">لا توجد أكواد لهذا الكورس حتى الآن.</div>
        ` : `
          <table class="data-table" style="width: 100%; text-align: right;">
            <thead>
              <tr>
                <th>الكود</th>
                <th>الاستخدام</th>
                <th>الحالة</th>
                <th>إجراءات</th>
              </tr>
            </thead>
            <tbody>
              ${courseCodes.map(code => {
                const isUsedUp = code.used >= code.maxUses;
                const isActive = code.active !== false;
                const statusText = !isActive ? "متوقف" : (isUsedUp ? "مستخدم بالكامل" : "نشط");
                const statusStyle = !isActive ? "color: var(--rose); font-weight: bold;" : (isUsedUp ? "color: var(--muted);" : "color: var(--brand-dark); font-weight: bold;");
                return `
                  <tr>
                    <td><strong style="font-family: monospace; font-size: 15px; letter-spacing: 0.5px; background: var(--surface-2); padding: 2px 6px; border-radius: 4px; color: var(--navy);">${escapeHtml(code.code)}</strong></td>
                    <td>${code.used}/${code.maxUses}</td>
                    <td><span style="${statusStyle}">${statusText}</span></td>
                    <td>
                      <button class="btn small" data-copy-single="${escapeHtml(code.code)}" title="نسخ الكود" style="padding: 4px 8px; min-height: 28px;">نسخ</button>
                      <button class="btn rose small" data-delete-single="${code.id}" title="حذف الكود" style="padding: 4px 8px; min-height: 28px;">حذف</button>
                    </td>
                  </tr>
                `;
              }).join("")}
            </tbody>
          </table>
        `}
      </div>
    </div>
  `;

  modal(content);

  document.querySelectorAll("[data-preset-count]").forEach(btn => {
    btn.addEventListener("click", () => {
      const input = document.getElementById("codesCount");
      if (input) input.value = btn.dataset.presetCount;
    });
  });

  document.getElementById("generateCodesForm").addEventListener("submit", event => {
    event.preventDefault();
    const countInput = document.getElementById("codesCount");
    const count = parseInt(countInput.value) || 10;
    
    const generatedList = [];
    
    for (let i = 0; i < count; i++) {
      let codeString;
      do {
        codeString = randomCode();
      } while (state.codes.some(c => c.code === codeString) || generatedList.includes(codeString));
      
      generatedList.push(codeString);
      state.codes.push({
        id: uid("a"),
        teacherId: teacher.id,
        courseId: courseId,
        code: codeString,
        expires: "2026-12-31",
        maxUses: 1,
        used: 0,
        active: true
      });
    }
    
    saveState();
    toast(`تم إنشاء ${count} كود بنجاح`);
    
    renderCourseCodesModalContent(courseId);
    render();
  });

  document.getElementById("copyAllCodesBtn")?.addEventListener("click", () => {
    const codesText = courseCodes.map(c => c.code).join("\n");
    navigator.clipboard.writeText(codesText).then(() => {
      toast("تم نسخ جميع الأكواد إلى الحافظة");
    }).catch(err => {
      console.error("Failed to copy codes:", err);
      toast("حدث خطأ أثناء نسخ الأكواد");
    });
  });

  document.getElementById("printCodesBtn")?.addEventListener("click", () => {
    const printWindow = window.open("", "_blank");
    const codesHtml = courseCodes.map(c => `
      <div style="border: 1px solid #ccc; padding: 10px; margin: 5px; font-family: monospace; font-size: 16px; border-radius: 4px; display: inline-block; min-width: 150px; text-align: center;">
        ${escapeHtml(c.code)}
      </div>
    `).join("");
    
    printWindow.document.write(`
      <html dir="rtl" lang="ar">
      <head>
        <title>طباعة أكواد كورس: ${escapeHtml(course.title)}</title>
        <style>
          body { font-family: Arial, sans-serif; padding: 20px; text-align: center; }
          h2 { color: #333; margin-bottom: 20px; }
          .container { display: flex; flex-wrap: wrap; justify-content: center; gap: 10px; }
          .footer { margin-top: 40px; font-size: 12px; color: #666; }
          @media print {
            button { display: none; }
          }
        </style>
      </head>
      <body>
        <h2>أكواد تفعيل كورس: ${escapeHtml(course.title)}</h2>
        <p>المدرس: ${escapeHtml(teacher.name)}</p>
        <button onclick="window.print()" style="padding: 10px 20px; font-size: 16px; cursor: pointer; margin-bottom: 20px;">طباعة الصفحة</button>
        <div class="container">${codesHtml}</div>
        <div class="footer">توليد بواسطة منصة ذاكرلي</div>
      </body>
      </html>
    `);
    printWindow.document.close();
  });

  document.querySelectorAll("[data-copy-single]").forEach(btn => {
    btn.addEventListener("click", () => {
      const code = btn.dataset.copySingle;
      navigator.clipboard.writeText(code).then(() => {
        const oldText = btn.innerText;
        btn.innerText = "تم!";
        btn.style.backgroundColor = "var(--green)";
        btn.style.color = "#fff";
        setTimeout(() => {
          btn.innerText = oldText;
          btn.style.backgroundColor = "";
          btn.style.color = "";
        }, 1200);
      });
    });
  });

  document.querySelectorAll("[data-delete-single]").forEach(btn => {
    btn.addEventListener("click", () => {
      if (!confirm("هل تريد بالتأكيد حذف هذا الكود؟")) return;
      const codeId = btn.dataset.deleteSingle;
      const code = state.codes.find(c => c.id === codeId);
      if (!code || code.teacherId !== teacher.id || code.courseId !== courseId) return toast("لا يمكن حذف كود مدرس آخر");
      state.codes = state.codes.filter(c => c.id !== codeId);
      saveState();
      toast("تم حذف الكود بنجاح");
      renderCourseCodesModalContent(courseId);
      render();
    });
  });
}

function saveCode(event, id) {
  event.preventDefault();
  const teacher = teacherContext();
  if (!teacher) return;
  const data = Object.fromEntries(new FormData(event.currentTarget));
  if (!teacherOwnsCourse(teacher, data.courseId)) return toast("لا يمكن ربط الكود بكورس مدرس آخر");
  data.maxUses = Number(data.maxUses || 1);
  data.active = data.active === "on";
  if (id === "new") {
    state.codes.push({ id: uid("a"), teacherId: teacher.id, used: 0, ...data });
  } else {
    const code = state.codes.find(row => row.id === id);
    if (!code || code.teacherId !== teacher.id) return toast("لا يمكن تعديل كود مدرس آخر");
    Object.assign(code, data);
  }
  saveState();
  closeModal();
  render();
}

function deleteEntity(type, id) {
  const teacher = teacherContext();
  const maps = { course: "courses", lesson: "lessons", test: "tests", code: "codes" };
  const key = maps[type];
  const item = state[key].find(row => row.id === id);
  if (!item || item.teacherId !== teacher.id) return toast("لا يمكن حذف بيانات مدرس آخر");
  if (!confirm("هل تريد الحذف؟")) return;
  if (type === "course") {
    state.lessons = state.lessons.filter(row => row.courseId !== id || row.teacherId !== teacher.id);
    state.tests = state.tests.filter(row => row.courseId !== id || row.teacherId !== teacher.id);
    state.codes = state.codes.filter(row => row.courseId !== id || row.teacherId !== teacher.id);
    state.students.forEach(student => {
      student.enrollments = student.enrollments.filter(courseId => courseId !== id);
    });
    teacher.courses = teacher.courses.filter(courseId => courseId !== id);
  }
  if (type === "lesson") {
    const course = courseById(item.courseId);
    if (course) course.lessons = course.lessons.filter(lessonId => lessonId !== id);
  }
  if (type === "test") {
    const course = courseById(item.courseId);
    if (course) course.tests = course.tests.filter(testId => testId !== id);
    const lesson = lessonById(item.lessonId);
    if (lesson) lesson.testIds = (lesson.testIds || []).filter(testId => testId !== id);
  }
  state[key] = state[key].filter(row => row.id !== id);
  saveState();
  render();
}

function modal(content) {
  $("#modalRoot").innerHTML = `<div class="modal-backdrop"><div class="modal">${content}</div></div>`;
  document.querySelectorAll("[data-close-modal], .modal-backdrop").forEach(el => el.addEventListener("click", event => {
    if (event.target === el || el.hasAttribute("data-close-modal")) closeModal();
  }));
}

function closeModal() {
  $("#modalRoot").innerHTML = "";
}

function toast(message) {
  $("#toastRoot").innerHTML = `<div class="toast">${escapeHtml(message)}</div>`;
  setTimeout(() => {
    const root = $("#toastRoot");
    if (root) root.innerHTML = "";
  }, 2800);
}

function parseVideos(value = "") {
  return value.split("\n").map(line => line.trim()).filter(Boolean).map(line => {
    const [title = "", description = "", url = ""] = line.split("|").map(part => part.trim());
    return { title, description, url };
  }).filter(video => video.title && video.url);
}

function formatVideos(videos = []) {
  return videos.map(video => `${video.title || ""} | ${video.description || ""} | ${video.url || ""}`).join("\n");
}

function parseAttachments(value = "") {
  return value.split("\n").map(line => line.trim()).filter(Boolean).map(line => {
    const [label = "", url = ""] = line.split("|").map(part => part.trim());
    return { label, url };
  }).filter(link => link.label && link.url);
}

function formatAttachments(attachments = []) {
  return attachments.map(link => `${link.label || ""} | ${link.url || ""}`).join("\n");
}

function parseQuestions(value = "") {
  return value.split("\n").map(line => line.trim()).filter(Boolean).map(line => {
    const [text = "", optionsText = "", correct = "", grade = "1"] = line.split("|").map(part => part.trim());
    return { text, options: optionsText.split(",").map(option => option.trim()).filter(Boolean), correct, grade: Number(grade || 1) };
  }).filter(question => question.text && question.options.length && question.correct);
}

function formatQuestions(questions = []) {
  return questions.map(question => `${question.text || ""} | ${(question.options || []).join(", ")} | ${question.correct || ""} | ${question.grade || 1}`).join("\n");
}

function teacherById(id) {
  return state.teachers.find(item => item.id === id);
}

function courseById(id) {
  return state.courses.find(item => item.id === id);
}

function lessonById(id) {
  return state.lessons.find(item => item.id === id);
}

function teacherCourses(teacherId) {
  return state.courses.filter(course => course.teacherId === teacherId);
}

function teacherLessons(teacherId) {
  return state.lessons.filter(lesson => lesson.teacherId === teacherId);
}

function teacherTests(teacherId) {
  return state.tests.filter(test => test.teacherId === teacherId);
}

function teacherCodes(teacherId) {
  return state.codes.filter(code => code.teacherId === teacherId);
}

function teacherOwnsCourse(teacher, courseId) {
  const course = courseById(courseId);
  return Boolean(teacher && course && course.teacherId === teacher.id);
}

function currentStudent() {
  if (state.activeUser?.role !== "student") return null;
  return state.students.find(student => student.id === state.activeUser.id);
}

function isEnrolled(courseId) {
  return Boolean(currentStudent()?.enrollments.includes(courseId));
}

function unique(values) {
  return [...new Set(values)];
}

function optionList(values, selected = values[0]) {
  return values.map(value => `<option ${value === selected ? "selected" : ""}>${escapeHtml(value)}</option>`).join("");
}

function capitalize(value) {
  return value.charAt(0).toUpperCase() + value.slice(1);
}

function randomCode() {
  return Math.floor(10000000 + Math.random() * 90000000).toString();
}

window.addEventListener("hashchange", render);
document.addEventListener("DOMContentLoaded", () => {
  render();
  initializeFirebaseSync();
});
