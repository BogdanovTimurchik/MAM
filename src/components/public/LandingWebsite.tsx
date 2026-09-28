import React, { useState } from 'react';
import { 
  Laptop, 
  Users, 
  TrendingUp, 
  ShieldCheck, 
  ArrowRight, 
  CheckCircle2, 
  Sparkles, 
  Code2, 
  Clock, 
  Calendar, 
  ChevronDown, 
  ChevronUp, 
  BookOpen,
  Award,
  Target,
  User,
  Phone,
  CalendarCheck
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { Course, Lead } from '../../types';
import { useLanguage } from '../../i18n/LanguageContext';
import { LanguageSwitcher } from '../common/LanguageSwitcher';

interface LandingWebsiteProps {
  onOpenBookingWithCourse?: (courseId: string) => void;
  onOpenBooking: () => void;
  onLeadCreated?: (lead: Lead) => void;
}

export const LandingWebsite: React.FC<LandingWebsiteProps> = ({
  onOpenBookingWithCourse,
  onOpenBooking,
  onLeadCreated
}) => {
  const { t, localizedCourses, localizedFaqs } = useLanguage();

  // Фильтрация курсов
  const [selectedAgeFilter, setSelectedAgeFilter] = useState<string>('all');
  const [selectedCourseDetail, setSelectedCourseDetail] = useState<Course | null>(null);

  // Интерактивный подбор курса
  const [recAge, setRecAge] = useState<number>(11);
  const [recGoal, setRecGoal] = useState<string>('games_to_code');
  const [recExperience, setRecExperience] = useState<string>('beginner');

  // Калькулятор окупаемости (ROI)
  const [calcChildAge, setCalcChildAge] = useState<number>(12);
  const [calcMonths, setCalcMonths] = useState<number>(8);
  const [calcTrackRate] = useState<number>(240);

  // FAQ аккордеон
  const [openFaqId, setOpenFaqId] = useState<string | null>('faq-1');
  const [selectedFaqCategory, setSelectedFaqCategory] = useState<string>('all');

  // Шаги дорожной карты
  const [activeRoadmapMonth, setActiveRoadmapMonth] = useState<number>(1);

  // Инлайн форма быстрой записи на сайте
  const [inlineParentName, setInlineParentName] = useState('');
  const [inlinePhone, setInlinePhone] = useState('');
  const [inlineStudentName, setInlineStudentName] = useState('');
  const [inlineAge, setInlineAge] = useState(11);
  const [inlineCourseId, setInlineCourseId] = useState('python-ai-kids');
  const [inlineSlot, setInlineSlot] = useState('Вторник 16:00 (Лаб. Альфа)');
  const [inlineSubmitted, setInlineSubmitted] = useState(false);
  const [inlineErrors, setInlineErrors] = useState<{ [key: string]: string }>({});

  const handleInlineSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const errs: { [key: string]: string } = {};
    if (!inlineParentName.trim()) errs.parentName = t.bookingModal.parentNameLabel;
    if (!inlinePhone.trim() || inlinePhone.length < 8) errs.phone = t.bookingModal.phoneLabel;
    if (Object.keys(errs).length > 0) {
      setInlineErrors(errs);
      return;
    }
    setInlineErrors({});

    const chosenCourse = localizedCourses.find((c) => c.id === inlineCourseId) || localizedCourses[0];

    const newLead: Lead = {
      id: `lead-${Date.now().toString().slice(-4)}`,
      parentName: inlineParentName.trim(),
      studentName: inlineStudentName.trim() || 'Ученик',
      studentAge: inlineAge,
      phone: inlinePhone.trim(),
      email: 'direct-web@mam.academy',
      interestedCourseId: chosenCourse?.id || 'python-ai-kids',
      preferredSlot: inlineSlot,
      stage: 'Trial Booked',
      notes: `Запись через сайт MAM. Курс: ${chosenCourse?.title}. Время: ${inlineSlot}`,
      createdAt: new Date().toISOString().split('T')[0],
      trialDate: inlineSlot,
      dealValue: 1440
    };

    if (onLeadCreated) {
      onLeadCreated(newLead);
    }
    setInlineSubmitted(true);

    try {
      confetti({
        particleCount: 80,
        spread: 70,
        origin: { y: 0.7 }
      });
    } catch {
      // ignore
    }
  };

  // Расчет окупаемости
  const totalTuitionInvested = calcMonths * calcTrackRate;
  const estimatedPortfolioValue = calcMonths >= 6 ? 4800 : 2200;
  const estimatedInternshipPotential = calcChildAge >= 14 ? 3500 : 0;
  const estimatedScholarshipPoints = Math.round(calcMonths * 450);
  const netEstimatedAdvantage = estimatedPortfolioValue + estimatedInternshipPotential + estimatedScholarshipPoints;
  const paybackMultiplier = (netEstimatedAdvantage / totalTuitionInvested).toFixed(1);

  // Фильтр курсов по возрасту
  const filteredCourses = localizedCourses.filter((course) => {
    if (selectedAgeFilter === 'all') return true;
    if (selectedAgeFilter === 'junior') return course.minAge <= 11;
    if (selectedAgeFilter === 'senior') return course.maxAge >= 13;
    return true;
  });

  // Рекомендованный курс
  const getRecommendedCourse = (): Course => {
    if (recAge <= 11) {
      return localizedCourses.find((c) => c.id === 'python-ai-kids') || localizedCourses[0];
    }
    if (recGoal === 'web_cloud') {
      return localizedCourses.find((c) => c.id === 'fullstack-web-pro') || localizedCourses[1];
    }
    if (recGoal === 'cyber') {
      return localizedCourses.find((c) => c.id === 'cyber-defense-security') || localizedCourses[2];
    }
    if (recGoal === 'robotics') {
      return localizedCourses.find((c) => c.id === 'ai-robotics-iot') || localizedCourses[4];
    }
    return localizedCourses.find((c) => c.id === 'mobile-app-engineering') || localizedCourses[3];
  };

  const recommendedCourse = getRecommendedCourse();

  const filteredFaqs = localizedFaqs.filter((faq) => {
    if (selectedFaqCategory === 'all') return true;
    if (selectedFaqCategory === 'methodology') return faq.category === t.faq.methodologyCategory;
    if (selectedFaqCategory === 'equipment') return faq.category === t.faq.hardwareCategory;
    if (selectedFaqCategory === 'economics') return faq.category === t.faq.economicsCategory;
    if (selectedFaqCategory === 'schedule') return faq.category === t.faq.scheduleCategory;
    return faq.category === selectedFaqCategory;
  });

  return (
    <div id="landing-website-container" className="min-h-screen bg-slate-50 text-slate-800">
      
      {/* Верхнее оповещение */}
      <div className="bg-gradient-to-r from-emerald-50 via-teal-50 to-indigo-50 border-b border-emerald-200/80 py-2.5 px-4 text-center text-xs">
        <span className="inline-flex items-center gap-2 font-medium text-slate-700">
          <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
          <span>{t.banner.autumnIntake} • {t.banner.spotsRemaining}</span>
          <button 
            onClick={onOpenBooking} 
            className="underline font-bold text-emerald-700 hover:text-emerald-900 ml-1 inline-flex items-center gap-0.5"
          >
            {t.banner.claimSpot} <ArrowRight className="w-3 h-3" />
          </button>
        </span>
      </div>

      {/* Hero-секция */}
      <section className="relative pt-12 pb-16 sm:pt-20 sm:pb-24 overflow-hidden bg-gradient-to-b from-white to-slate-50">
        {/* Мягкие фоновые акценты */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[350px] bg-emerald-100/60 blur-[130px] pointer-events-none rounded-full" />
        <div className="absolute top-1/3 right-10 w-[450px] h-[300px] bg-indigo-100/50 blur-[140px] pointer-events-none rounded-full" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            
            {/* Бейдж аккредитации */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold bg-white text-emerald-800 border border-emerald-200 shadow-sm mb-6">
              <ShieldCheck className="w-4 h-4 text-emerald-600" />
              <span>{t.hero.badge}</span>
            </div>

            {/* Заголовок первого экрана */}
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-slate-900 leading-[1.12]">
              {t.hero.titlePart1}{' '}
              <span className="bg-gradient-to-r from-emerald-600 via-teal-600 to-indigo-600 bg-clip-text text-transparent">
                {t.hero.titleAccent}
              </span>{' '}
              {t.hero.titlePart2}
            </h1>

            {/* Подзаголовок */}
            <p className="mt-6 text-lg sm:text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
              {t.hero.subtitle}
            </p>

            {/* Кнопки призыва к действию */}
            <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
              <button
                id="hero-book-trial-btn"
                onClick={onOpenBooking}
                className="w-full sm:w-auto px-8 py-4 rounded-2xl bg-gradient-to-r from-emerald-600 via-teal-600 to-emerald-500 text-white font-extrabold text-base tracking-wide shadow-lg shadow-emerald-600/25 hover:shadow-emerald-600/40 hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center justify-center gap-2.5"
              >
                <Sparkles className="w-5 h-5 text-white" />
                <span>{t.hero.bookTrialCta}</span>
              </button>

              <a
                href="#courses"
                className="w-full sm:w-auto px-7 py-4 rounded-2xl bg-white hover:bg-slate-100 text-slate-800 border border-slate-200 shadow-sm font-bold text-base transition-all flex items-center justify-center gap-2"
              >
                <Code2 className="w-5 h-5 text-indigo-600" />
                <span>{t.hero.exploreCoursesCta}</span>
              </a>
            </div>

            {/* Доверительные факты */}
            <div className="mt-14 pt-8 border-t border-slate-200 grid grid-cols-2 md:grid-cols-4 gap-6 text-left">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-emerald-50 border border-emerald-200 flex items-center justify-center shrink-0">
                  <Laptop className="w-5 h-5 text-emerald-600" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-slate-900">{t.hero.pillarLaptop}</h4>
                  <p className="text-xs text-slate-500">{t.hero.pillarLaptopDesc}</p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-indigo-50 border border-indigo-200 flex items-center justify-center shrink-0">
                  <Users className="w-5 h-5 text-indigo-600" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-slate-900">{t.hero.pillarRatio}</h4>
                  <p className="text-xs text-slate-500">{t.hero.pillarRatioDesc}</p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-teal-50 border border-teal-200 flex items-center justify-center shrink-0">
                  <TrendingUp className="w-5 h-5 text-teal-600" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-slate-900">{t.hero.pillarPortfolio}</h4>
                  <p className="text-xs text-slate-500">{t.hero.pillarPortfolioDesc}</p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-amber-50 border border-amber-200 flex items-center justify-center shrink-0">
                  <Award className="w-5 h-5 text-amber-600" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-slate-900">{t.hero.pillarIso}</h4>
                  <p className="text-xs text-slate-500">{t.hero.pillarIsoDesc}</p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 3 Железных столпа MAM */}
      <section id="methodology" className="py-16 sm:py-24 bg-white border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-mono uppercase tracking-widest text-emerald-700 font-bold">
              {t.methodology.badge}
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mt-2">
              {t.methodology.title}
            </h2>
            <p className="text-slate-600 text-sm sm:text-base mt-3">
              {t.methodology.subtitle}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Столп 1 */}
            <div className="p-6 sm:p-8 rounded-3xl bg-slate-50 border border-slate-200 hover:border-emerald-400 hover:shadow-lg transition-all flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-2xl bg-emerald-100 border border-emerald-200 flex items-center justify-center mb-6">
                  <Laptop className="w-6 h-6 text-emerald-700" />
                </div>
                <div className="text-xs font-mono text-emerald-700 font-bold mb-1">PILLAR 01</div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">{t.hero.pillarLaptop}</h3>
                <p className="text-slate-600 text-sm leading-relaxed mb-4">
                  {t.hero.pillarLaptopDesc}
                </p>
              </div>
              <div className="p-3 rounded-2xl bg-white border border-slate-200 text-xs font-mono text-slate-700 flex items-center justify-between shadow-sm">
                <span>Specs:</span>
                <span className="text-emerald-700 font-bold">32GB RAM / NVMe / Linux LTS</span>
              </div>
            </div>

            {/* Столп 2 */}
            <div className="p-6 sm:p-8 rounded-3xl bg-slate-50 border border-slate-200 hover:border-indigo-400 hover:shadow-lg transition-all flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-2xl bg-indigo-100 border border-indigo-200 flex items-center justify-center mb-6">
                  <Users className="w-6 h-6 text-indigo-700" />
                </div>
                <div className="text-xs font-mono text-indigo-700 font-bold mb-1">PILLAR 02</div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">{t.hero.pillarRatio}</h3>
                <p className="text-slate-600 text-sm leading-relaxed mb-4">
                  {t.hero.pillarRatioDesc}
                </p>
              </div>
              <div className="p-3 rounded-2xl bg-white border border-slate-200 text-xs font-mono text-slate-700 flex items-center justify-between shadow-sm">
                <span>Code Review:</span>
                <span className="text-indigo-700 font-bold">Every 6–8 mins</span>
              </div>
            </div>

            {/* Столп 3 */}
            <div className="p-6 sm:p-8 rounded-3xl bg-slate-50 border border-slate-200 hover:border-teal-400 hover:shadow-lg transition-all flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-2xl bg-teal-100 border border-teal-200 flex items-center justify-center mb-6">
                  <TrendingUp className="w-6 h-6 text-teal-700" />
                </div>
                <div className="text-xs font-mono text-teal-700 font-bold mb-1">PILLAR 03</div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">{t.hero.pillarPortfolio}</h3>
                <p className="text-slate-600 text-sm leading-relaxed mb-4">
                  {t.hero.pillarPortfolioDesc}
                </p>
              </div>
              <div className="p-3 rounded-2xl bg-white border border-slate-200 text-xs font-mono text-slate-700 flex items-center justify-between shadow-sm">
                <span>Payback ROI:</span>
                <span className="text-teal-700 font-bold">~8 Months</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Каталог курсов */}
      <section id="courses" className="py-20 sm:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
            <div>
              <span className="text-xs font-mono uppercase tracking-widest text-emerald-700 font-bold">
                {t.courses.badge}
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mt-1">
                {t.courses.title}
              </h2>
              <p className="text-slate-600 text-sm mt-2 max-w-xl">
                {t.courses.subtitle}
              </p>
            </div>

            {/* Фильтр по возрасту */}
            <div className="flex items-center gap-1.5 p-1 bg-white border border-slate-200 rounded-xl shadow-sm">
              <button
                onClick={() => setSelectedAgeFilter('all')}
                className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                  selectedAgeFilter === 'all'
                    ? 'bg-emerald-600 text-white font-bold shadow-sm'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                {t.courses.filterAll}
              </button>
              <button
                onClick={() => setSelectedAgeFilter('junior')}
                className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                  selectedAgeFilter === 'junior'
                    ? 'bg-emerald-600 text-white font-bold shadow-sm'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                {t.courses.filterJunior}
              </button>
              <button
                onClick={() => setSelectedAgeFilter('senior')}
                className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                  selectedAgeFilter === 'senior'
                    ? 'bg-emerald-600 text-white font-bold shadow-sm'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                {t.courses.filterSenior}
              </button>
            </div>
          </div>

          {/* Сетка курсов */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredCourses.map((course) => (
              <div
                key={course.id}
                className="bg-white border border-slate-200 hover:border-slate-300 rounded-3xl overflow-hidden flex flex-col justify-between group transition-all hover:shadow-xl shadow-sm"
              >
                <div>
                  {/* Заголовок карточки */}
                  <div className="p-6 border-b border-slate-100">
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-[11px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-md bg-emerald-50 text-emerald-800 border border-emerald-200">
                        {course.badge}
                      </span>
                      <span className="text-xs text-slate-500 font-mono flex items-center gap-1">
                        <Clock className="w-3.5 h-3.5 text-slate-400" />
                        <span>{course.durationMonths} {t.calculator.monthsUnit}</span>
                      </span>
                    </div>

                    <h3 className="text-xl font-bold text-slate-900 group-hover:text-emerald-700 transition-colors">
                      {course.title}
                    </h3>
                    <p className="text-xs text-slate-600 mt-2 line-clamp-2">
                      {course.tagline}
                    </p>

                    <div className="flex items-center gap-4 mt-4 text-xs font-medium text-slate-600">
                      <span className="flex items-center gap-1.5">
                        <Users className="w-3.5 h-3.5 text-emerald-600" />
                        <span>{course.ageRange}</span>
                      </span>
                      <span className="flex items-center gap-1.5">
                        <Calendar className="w-3.5 h-3.5 text-indigo-600" />
                        <span>{course.sessionsPerWeek}x / week ({course.hoursPerSession}h)</span>
                      </span>
                    </div>
                  </div>

                  {/* Стек и результат */}
                  <div className="p-6 space-y-4">
                    <div>
                      <span className="text-[11px] uppercase font-mono tracking-wider text-slate-500 block mb-2">
                        {t.courses.modulesCount}
                      </span>
                      <div className="flex flex-wrap gap-1.5">
                        {course.tags.map((tag) => (
                          <span
                            key={tag}
                            className="px-2 py-0.5 rounded text-[11px] font-mono bg-slate-100 text-slate-700 border border-slate-200"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="p-3 rounded-2xl bg-slate-50 border border-slate-200 text-xs text-slate-700">
                      <span className="font-semibold text-emerald-800 block mb-1 flex items-center gap-1">
                        <Target className="w-3.5 h-3.5 text-emerald-600" /> {t.courses.keyDeliverables}:
                      </span>
                      <p className="text-[11px] text-slate-600 line-clamp-2">
                        {course.outcomeProject}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Цена и запись */}
                <div className="p-6 pt-0 border-t border-slate-100 bg-slate-50/50">
                  <div className="flex items-baseline justify-between mb-4 mt-4">
                    <div>
                      <span className="text-2xl font-black text-slate-900">${course.monthlyTuitionUSD}</span>
                      <span className="text-xs text-slate-500 font-mono"> {t.courses.perMonth}</span>
                    </div>
                    <span className="text-[11px] text-slate-500 font-mono font-medium">{t.hardware.zeroSharedPc}</span>
                  </div>

                  <div className="grid grid-cols-2 gap-2">
                    <button
                      onClick={() => setSelectedCourseDetail(course)}
                      className="py-2.5 px-3 rounded-xl bg-white hover:bg-slate-100 text-slate-700 font-semibold text-xs border border-slate-200 shadow-sm transition-all flex items-center justify-center gap-1"
                    >
                      <BookOpen className="w-3.5 h-3.5 text-slate-500" />
                      <span>{t.courses.viewSyllabus}</span>
                    </button>
                    <button
                      onClick={() => onOpenBookingWithCourse ? onOpenBookingWithCourse(course.id) : onOpenBooking()}
                      className="py-2.5 px-3 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs shadow-sm transition-all flex items-center justify-center gap-1"
                    >
                      <span>{t.courses.bookTrialForCourse}</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Модальное окно полной программы курса */}
      {selectedCourseDetail && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm">
          <div className="relative w-full max-w-3xl bg-white border border-slate-200 rounded-3xl p-6 sm:p-8 max-h-[90vh] overflow-y-auto shadow-2xl">
            <div className="flex items-center justify-between pb-4 border-b border-slate-100 mb-6">
              <div>
                <span className="text-xs font-mono text-emerald-700 font-bold">{t.courses.syllabusModalTitle}</span>
                <h3 className="text-2xl font-bold text-slate-900">{selectedCourseDetail.title}</h3>
                <p className="text-xs text-slate-500 mt-1">{selectedCourseDetail.ageRange} • {selectedCourseDetail.durationMonths} {t.calculator.monthsUnit}</p>
              </div>
              <button
                onClick={() => setSelectedCourseDetail(null)}
                className="p-2 text-slate-400 hover:text-slate-700 rounded-xl hover:bg-slate-100"
              >
                ✕
              </button>
            </div>

            <div className="space-y-6 mb-8">
              <div>
                <h4 className="text-sm font-bold text-slate-800 uppercase font-mono tracking-wider mb-3">
                  {t.courses.modulesCount}
                </h4>
                <div className="space-y-3">
                  {selectedCourseDetail.curriculumModules.map((mod, idx) => (
                    <div key={idx} className="p-4 rounded-2xl bg-slate-50 border border-slate-200">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-sm font-bold text-emerald-800">{mod.title}</span>
                        <span className="text-xs font-mono text-slate-500">{mod.weeks}</span>
                      </div>
                      <ul className="space-y-1.5 text-xs text-slate-600">
                        {mod.deliverables.map((del, dIdx) => (
                          <li key={dIdx} className="flex items-center gap-2">
                            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                            <span>{del}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200">
                <h4 className="text-xs font-bold text-indigo-700 uppercase font-mono tracking-wider mb-1">
                  {t.hardware.badge}
                </h4>
                <p className="text-xs text-slate-600">
                  {selectedCourseDetail.hardwareRequirements}
                </p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 justify-end pt-4 border-t border-slate-100">
              <button
                onClick={() => setSelectedCourseDetail(null)}
                className="px-5 py-2.5 bg-slate-100 text-slate-700 font-medium text-xs rounded-xl hover:bg-slate-200"
              >
                {t.courses.closeBtn}
              </button>
              <button
                onClick={() => {
                  const cId = selectedCourseDetail.id;
                  setSelectedCourseDetail(null);
                  if (onOpenBookingWithCourse) onOpenBookingWithCourse(cId);
                  else onOpenBooking();
                }}
                className="px-6 py-2.5 bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs rounded-xl shadow-md shadow-emerald-600/20"
              >
                {t.courses.bookTrialForCourse}
              </button>
            </div>
          </div>
        </div>
      )}


      {/* Интерактивные инструменты: Подбор трека и Калькулятор окупаемости */}
      <section id="calculator" className="py-20 bg-white border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="text-xs font-mono uppercase tracking-widest text-emerald-700 font-bold">
              {t.quiz.badge}
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mt-1">
              {t.quiz.title}
            </h2>
            <p className="text-slate-600 text-sm mt-2">
              {t.quiz.subtitle}
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
            
            {/* Инструмент 1: Подбор курса */}
            <div className="p-6 sm:p-8 rounded-3xl bg-slate-50 border border-slate-200 shadow-sm">
              <div className="flex items-center justify-between mb-6">
                <div>
                  <h3 className="text-xl font-bold text-slate-900 flex items-center gap-2">
                    <Target className="w-5 h-5 text-emerald-600" />
                    <span>{t.quiz.title}</span>
                  </h3>
                  <p className="text-xs text-slate-500 mt-1">{t.quiz.subtitle}</p>
                </div>
                <span className="px-2.5 py-1 rounded text-[10px] font-mono font-bold bg-emerald-100 text-emerald-800 border border-emerald-200">
                  {t.quiz.badge}
                </span>
              </div>

              <div className="space-y-5">
                {/* Возраст */}
                <div>
                  <div className="flex justify-between text-xs font-medium mb-1.5">
                    <span className="text-slate-700">{t.quiz.ageQuestion}:</span>
                    <span className="text-emerald-700 font-mono font-bold">{recAge} {t.courses.yearsUnit}</span>
                  </div>
                  <input
                    type="range"
                    min={8}
                    max={17}
                    value={recAge}
                    onChange={(e) => setRecAge(Number(e.target.value))}
                    className="w-full accent-emerald-600 cursor-pointer"
                  />
                  <div className="flex justify-between text-[10px] text-slate-500 font-mono mt-1">
                    <span>8–10</span>
                    <span>11–13</span>
                    <span>14–17</span>
                  </div>
                </div>

                {/* Основной интерес */}
                <div>
                  <label className="block text-xs font-medium text-slate-700 mb-2">
                    {t.quiz.goalQuestion}:
                  </label>
                  <div className="grid grid-cols-2 gap-2 text-xs">
                    {[
                      { id: 'games_to_code', label: t.quiz.goalGames },
                      { id: 'web_cloud', label: t.quiz.goalWeb },
                      { id: 'cyber', label: t.quiz.goalCyber },
                      { id: 'robotics', label: t.quiz.goalRobotics }
                    ].map((g) => (
                      <button
                        type="button"
                        key={g.id}
                        onClick={() => setRecGoal(g.id)}
                        className={`p-2.5 rounded-xl border text-left transition-all ${
                          recGoal === g.id
                            ? 'border-emerald-600 bg-emerald-50 text-emerald-900 font-semibold shadow-sm'
                            : 'border-slate-200 bg-white text-slate-600 hover:text-slate-900 hover:bg-slate-100'
                        }`}
                      >
                        {g.label}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Опыт */}
                <div>
                  <label className="block text-xs font-medium text-slate-700 mb-2">
                    {t.quiz.expQuestion}:
                  </label>
                  <div className="grid grid-cols-3 gap-2 text-xs">
                    {[
                      { id: 'beginner', label: t.quiz.expBeginner },
                      { id: 'some', label: t.quiz.expSome },
                      { id: 'advanced', label: t.quiz.expAdvanced }
                    ].map((exp) => (
                      <button
                        type="button"
                        key={exp.id}
                        onClick={() => setRecExperience(exp.id)}
                        className={`p-2 rounded-xl border text-center transition-all ${
                          recExperience === exp.id
                            ? 'border-indigo-600 bg-indigo-50 text-indigo-900 font-semibold shadow-sm'
                            : 'border-slate-200 bg-white text-slate-600 hover:text-slate-900 hover:bg-slate-100'
                        }`}
                      >
                        {exp.label}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Результат рекомендации */}
                <div className="p-4 rounded-2xl bg-white border border-emerald-200 shadow-sm">
                  <div className="flex items-center justify-between text-xs text-slate-500 mb-1">
                    <span>{t.quiz.recommendedTrack}:</span>
                    <span className="text-emerald-700 font-mono font-bold">98.6%</span>
                  </div>
                  <h4 className="text-base font-bold text-slate-900">{recommendedCourse.title}</h4>
                  <p className="text-xs text-slate-600 mt-1 line-clamp-2">{recommendedCourse.tagline}</p>
                  
                  <div className="mt-3 pt-3 border-t border-slate-100 flex items-center justify-between">
                    <span className="text-xs font-mono text-emerald-800 font-bold">${recommendedCourse.monthlyTuitionUSD} {t.courses.perMonth}</span>
                    <button
                      onClick={() => onOpenBookingWithCourse ? onOpenBookingWithCourse(recommendedCourse.id) : onOpenBooking()}
                      className="px-3 py-1.5 rounded-lg bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs transition-all shadow-sm"
                    >
                      {t.quiz.enrollRecommended}
                    </button>
                  </div>
                </div>

              </div>
            </div>

            {/* Инструмент 2: Калькулятор окупаемости ROI */}
            <div className="p-6 sm:p-8 rounded-3xl bg-slate-50 border border-slate-200 shadow-sm">
              <div className="flex items-center justify-between mb-6">
                <div>
                  <h3 className="text-xl font-bold text-slate-900 flex items-center gap-2">
                    <TrendingUp className="w-5 h-5 text-teal-600" />
                    <span>{t.calculator.title}</span>
                  </h3>
                  <p className="text-xs text-slate-500 mt-1">{t.calculator.subtitle}</p>
                </div>
                <span className="px-2.5 py-1 rounded text-[10px] font-mono font-bold bg-teal-100 text-teal-800 border border-teal-200">
                  {paybackMultiplier}x {t.calculator.paybackMultiplier}
                </span>
              </div>

              <div className="space-y-5">
                {/* Ползунки */}
                <div>
                  <div className="flex justify-between text-xs font-medium mb-1">
                    <span className="text-slate-700">{t.calculator.studyDurationLabel}:</span>
                    <span className="text-teal-700 font-mono font-bold">{calcMonths} {t.calculator.monthsUnit}</span>
                  </div>
                  <input
                    type="range"
                    min={4}
                    max={12}
                    value={calcMonths}
                    onChange={(e) => setCalcMonths(Number(e.target.value))}
                    className="w-full accent-teal-600 cursor-pointer"
                  />
                </div>

                <div>
                  <div className="flex justify-between text-xs font-medium mb-1">
                    <span className="text-slate-700">{t.calculator.childAgeLabel}:</span>
                    <span className="text-indigo-700 font-mono font-bold">{calcChildAge} {t.calculator.yearsOldUnit}</span>
                  </div>
                  <input
                    type="range"
                    min={8}
                    max={17}
                    value={calcChildAge}
                    onChange={(e) => setCalcChildAge(Number(e.target.value))}
                    className="w-full accent-indigo-600 cursor-pointer"
                  />
                </div>

                {/* Балансовый отчет */}
                <div className="p-4 rounded-2xl bg-white border border-slate-200 space-y-2.5 text-xs font-mono shadow-sm">
                  <div className="flex justify-between pb-2 border-b border-slate-100">
                    <span className="text-slate-500">{t.calculator.totalInvested}:</span>
                    <span className="text-rose-700 font-bold">${totalTuitionInvested.toLocaleString()} USD</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-500">{t.calculator.portfolioAsset}:</span>
                    <span className="text-emerald-700 font-bold">+${estimatedPortfolioValue.toLocaleString()} USD</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-500">{t.calculator.scholarshipBonus}:</span>
                    <span className="text-emerald-700 font-bold">+${estimatedScholarshipPoints.toLocaleString()} USD</span>
                  </div>
                  {calcChildAge >= 14 && (
                    <div className="flex justify-between">
                      <span className="text-slate-500">{t.calculator.internshipPotential}:</span>
                      <span className="text-teal-700 font-bold">+${estimatedInternshipPotential.toLocaleString()} USD</span>
                    </div>
                  )}
                  <div className="pt-2 border-t border-slate-100 flex justify-between text-sm font-bold">
                    <span className="text-slate-900">{t.calculator.estimatedValue}:</span>
                    <span className="text-emerald-700 font-black">+${(netEstimatedAdvantage - totalTuitionInvested).toLocaleString()} USD</span>
                  </div>
                </div>

                <p className="text-[11px] text-slate-500 italic">
                  {t.calculator.ctaNote}
                </p>

                <button
                  onClick={onOpenBooking}
                  className="w-full py-3 rounded-xl bg-gradient-to-r from-teal-600 to-emerald-600 hover:from-teal-700 hover:to-emerald-700 text-white font-bold text-xs tracking-wider shadow-md shadow-teal-600/20 transition-all flex items-center justify-center gap-1.5"
                >
                  <Sparkles className="w-4 h-4 text-white" />
                  <span>{t.calculator.bookWithCalculation}</span>
                </button>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Дорожная карта обучения по месяцам */}
      <section id="roadmap" className="py-20 sm:py-28 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="text-xs font-mono uppercase tracking-widest text-emerald-700 font-bold">
              {t.roadmap.eyebrow}
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mt-1">
              {t.roadmap.title}
            </h2>
            <p className="text-slate-600 text-sm mt-2">
              {t.roadmap.subtitle}
            </p>
          </div>

          {/* Переключатель месяцев */}
          <div className="flex items-center justify-center gap-2 overflow-x-auto pb-4 mb-8">
            {[
              { month: 1, label: t.roadmap.m1Tab },
              { month: 2, label: t.roadmap.m2Tab },
              { month: 4, label: t.roadmap.m4Tab },
              { month: 6, label: t.roadmap.m6Tab },
              { month: 8, label: t.roadmap.m8Tab }
            ].map((step) => (
              <button
                key={step.month}
                onClick={() => setActiveRoadmapMonth(step.month)}
                className={`px-4 py-2 rounded-xl text-xs font-semibold whitespace-nowrap transition-all border ${
                  activeRoadmapMonth === step.month
                    ? 'border-emerald-600 bg-emerald-600 text-white font-bold shadow-md shadow-emerald-600/20'
                    : 'border-slate-200 bg-white text-slate-600 hover:text-slate-900 shadow-sm'
                }`}
              >
                {step.label}
              </button>
            ))}
          </div>

          {/* Содержимое активного месяца */}
          <div className="max-w-4xl mx-auto p-6 sm:p-8 rounded-3xl bg-white border border-slate-200 shadow-sm">
            {activeRoadmapMonth === 1 && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
                <div>
                  <span className="text-xs font-mono text-emerald-700 font-bold">{t.roadmap.m1Badge}</span>
                  <h3 className="text-2xl font-bold text-slate-900 mt-1">{t.roadmap.m1Title}</h3>
                  <p className="text-slate-600 text-sm mt-2 leading-relaxed">
                    {t.roadmap.m1Desc}
                  </p>
                  <div className="mt-4 space-y-2 text-xs text-slate-700 font-mono">
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                      <span>{t.roadmap.m1Point1}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                      <span>{t.roadmap.m1Point2}</span>
                    </div>
                  </div>
                </div>
                <div className="bg-slate-900 p-4 rounded-2xl border border-slate-800 font-mono text-xs text-emerald-400 shadow-md">
                  <div className="text-slate-400 mb-2 border-b border-slate-800 pb-1"># Terminal Output (W3)</div>
                  <pre className="text-slate-200 whitespace-pre-wrap">
{`$ python3 adventure.py
[SYSTEM]: Turing Hero Engine Init...
Player: Rayan (Level 1, Scout)
[QUEST]: Choose path (1) Dark Forest (2) Cyber Lab
> 2
Access Granted! Decrypting memory key...`}
                  </pre>
                </div>
              </div>
            )}

            {activeRoadmapMonth === 2 && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
                <div>
                  <span className="text-xs font-mono text-indigo-700 font-bold">{t.roadmap.m2Badge}</span>
                  <h3 className="text-2xl font-bold text-slate-900 mt-1">{t.roadmap.m2Title}</h3>
                  <p className="text-slate-600 text-sm mt-2 leading-relaxed">
                    {t.roadmap.m2Desc}
                  </p>
                  <div className="mt-4 space-y-2 text-xs text-slate-700 font-mono">
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-indigo-600" />
                      <span>{t.roadmap.m2Point1}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-indigo-600" />
                      <span>{t.roadmap.m2Point2}</span>
                    </div>
                  </div>
                </div>
                <div className="bg-slate-900 p-4 rounded-2xl border border-slate-800 font-mono text-xs text-indigo-300 shadow-md">
                  <div className="text-slate-400 mb-2 border-b border-slate-800 pb-1"># Kinematic Physics Controller</div>
                  <pre className="text-slate-200 whitespace-pre-wrap">
{`def update_physics(self, dt):
    self.velocity_y += GRAVITY * dt
    self.rect.y += self.velocity_y
    if self.rect.bottom >= GROUND_Y:
        self.rect.bottom = GROUND_Y
        self.is_grounded = True`}
                  </pre>
                </div>
              </div>
            )}

            {activeRoadmapMonth === 4 && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
                <div>
                  <span className="text-xs font-mono text-teal-700 font-bold">{t.roadmap.m4Badge}</span>
                  <h3 className="text-2xl font-bold text-slate-900 mt-1">{t.roadmap.m4Title}</h3>
                  <p className="text-slate-600 text-sm mt-2 leading-relaxed">
                    {t.roadmap.m4Desc}
                  </p>
                  <div className="mt-4 space-y-2 text-xs text-slate-700 font-mono">
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-teal-600" />
                      <span>{t.roadmap.m4Point1}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-teal-600" />
                      <span>{t.roadmap.m4Point2}</span>
                    </div>
                  </div>
                </div>
                <div className="bg-slate-900 p-4 rounded-2xl border border-slate-800 font-mono text-xs text-teal-300 shadow-md">
                  <div className="text-slate-400 mb-2 border-b border-slate-800 pb-1"># Pathfinding Logic A*</div>
                  <pre className="text-slate-200 whitespace-pre-wrap">
{`def heuristic(a, b):
    # Manhattan distance on 2D grid
    return abs(a.x - b.x) + abs(a.y - b.y)

# Priority queue traversal
frontier.put(start, 0)`}
                  </pre>
                </div>
              </div>
            )}

            {activeRoadmapMonth === 6 && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
                <div>
                  <span className="text-xs font-mono text-emerald-700 font-bold">{t.roadmap.m6Badge}</span>
                  <h3 className="text-2xl font-bold text-slate-900 mt-1">{t.roadmap.m6Title}</h3>
                  <p className="text-slate-600 text-sm mt-2 leading-relaxed">
                    {t.roadmap.m6Desc}
                  </p>
                  <div className="mt-4 space-y-2 text-xs text-slate-700 font-mono">
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                      <span>{t.roadmap.m6Point1}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                      <span>{t.roadmap.m6Point2}</span>
                    </div>
                  </div>
                </div>
                <div className="bg-slate-900 p-4 rounded-2xl border border-slate-800 font-mono text-xs text-emerald-300 shadow-md">
                  <div className="text-slate-400 mb-2 border-b border-slate-800 pb-1"># Node.js Router</div>
                  <pre className="text-slate-200 whitespace-pre-wrap">
{`app.post('/api/telemetry', authGuard, async (req, res) => {
    const { deviceId, status } = req.body;
    const entry = await db.insert(logs).values({
        deviceId, status, timestamp: new Date()
    });
    return res.status(201).json({ success: true });
});`}
                  </pre>
                </div>
              </div>
            )}

            {activeRoadmapMonth === 8 && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
                <div>
                  <span className="text-xs font-mono text-amber-700 font-bold">{t.roadmap.m8Badge}</span>
                  <h3 className="text-2xl font-bold text-slate-900 mt-1">{t.roadmap.m8Title}</h3>
                  <p className="text-slate-600 text-sm mt-2 leading-relaxed">
                    {t.roadmap.m8Desc}
                  </p>
                  <div className="mt-4 space-y-2 text-xs text-slate-700 font-mono">
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-amber-600" />
                      <span>{t.roadmap.m8Point1}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-amber-600" />
                      <span>{t.roadmap.m8Point2}</span>
                    </div>
                  </div>
                </div>
                <div className="bg-amber-50 p-6 rounded-2xl border border-amber-200 text-center">
                  <Award className="w-12 h-12 text-amber-600 mx-auto mb-2" />
                  <div className="font-bold text-slate-900 text-base">{t.roadmap.m8DiplomaTitle}</div>
                  <p className="text-xs text-slate-600 mt-1">{t.roadmap.m8DiplomaDesc}</p>
                </div>
              </div>
            )}
          </div>

        </div>
      </section>

      {/* Отзывы родителей */}
      <section id="testimonials" className="py-20 bg-white border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-mono uppercase tracking-widest text-emerald-700 font-bold">
              {t.testimonials.eyebrow}
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mt-1">
              {t.testimonials.title}
            </h2>
            <p className="text-slate-600 text-sm mt-2">
              {t.testimonials.subtitle}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 rounded-3xl bg-slate-50 border border-slate-200 flex flex-col justify-between shadow-sm">
              <div>
                <div className="flex items-center gap-1 text-amber-500 mb-3">
                  {'★'.repeat(5)}
                </div>
                <p className="text-slate-700 text-sm leading-relaxed italic mb-4">
                  "{t.testimonials.t1Quote}"
                </p>
              </div>
              <div className="pt-4 border-t border-slate-200 flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-slate-200 text-slate-700 flex items-center justify-center font-bold text-xs">
                  ТА
                </div>
                <div>
                  <h4 className="text-sm font-bold text-slate-900">{t.testimonials.t1Author}</h4>
                  <p className="text-xs text-slate-500">{t.testimonials.t1Role}</p>
                </div>
              </div>
            </div>

            <div className="p-6 rounded-3xl bg-slate-50 border border-slate-200 flex flex-col justify-between shadow-sm">
              <div>
                <div className="flex items-center gap-1 text-amber-500 mb-3">
                  {'★'.repeat(5)}
                </div>
                <p className="text-slate-700 text-sm leading-relaxed italic mb-4">
                  "{t.testimonials.t2Quote}"
                </p>
              </div>
              <div className="pt-4 border-t border-slate-200 flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-slate-200 text-slate-700 flex items-center justify-center font-bold text-xs">
                  ДЧ
                </div>
                <div>
                  <h4 className="text-sm font-bold text-slate-900">{t.testimonials.t2Author}</h4>
                  <p className="text-xs text-slate-500">{t.testimonials.t2Role}</p>
                </div>
              </div>
            </div>

            <div className="p-6 rounded-3xl bg-slate-50 border border-slate-200 flex flex-col justify-between shadow-sm">
              <div>
                <div className="flex items-center gap-1 text-amber-500 mb-3">
                  {'★'.repeat(5)}
                </div>
                <p className="text-slate-700 text-sm leading-relaxed italic mb-4">
                  "{t.testimonials.t3Quote}"
                </p>
              </div>
              <div className="pt-4 border-t border-slate-200 flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-slate-200 text-slate-700 flex items-center justify-center font-bold text-xs">
                  ФК
                </div>
                <div>
                  <h4 className="text-sm font-bold text-slate-900">{t.testimonials.t3Author}</h4>
                  <p className="text-xs text-slate-500">{t.testimonials.t3Role}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Вопросы и ответы (FAQ) */}
      <section id="faq" className="py-20 sm:py-28 bg-slate-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-xs font-mono uppercase tracking-widest text-emerald-700 font-bold">
              {t.faq.badge}
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mt-1">
              {t.faq.title}
            </h2>
            <p className="text-slate-600 text-sm mt-2">
              {t.faq.subtitle}
            </p>

            {/* Фильтр категорий */}
            <div className="flex items-center justify-center gap-2 mt-6 flex-wrap">
              {[
                { id: 'all', label: t.faq.allCategory },
                { id: 'methodology', label: t.faq.methodologyCategory },
                { id: 'equipment', label: t.faq.hardwareCategory },
                { id: 'economics', label: t.faq.economicsCategory },
                { id: 'schedule', label: t.faq.scheduleCategory },
              ].map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => setSelectedFaqCategory(cat.id)}
                  className={`px-3 py-1 rounded-xl text-xs font-semibold transition-all ${
                    selectedFaqCategory === cat.id
                      ? 'bg-white text-emerald-800 border border-emerald-300 shadow-sm font-bold'
                      : 'text-slate-600 hover:text-slate-900 bg-slate-100'
                  }`}
                >
                  {cat.label}
                </button>
              ))}
            </div>
          </div>

          <div className="space-y-3">
            {filteredFaqs.map((faq) => {
              const isOpen = openFaqId === faq.id;
              return (
                <div
                  key={faq.id}
                  className="rounded-2xl bg-white border border-slate-200 overflow-hidden transition-all shadow-sm"
                >
                  <button
                    onClick={() => setOpenFaqId(isOpen ? null : faq.id)}
                    className="w-full p-5 text-left flex items-center justify-between gap-4"
                  >
                    <span className="font-bold text-base text-slate-900">{faq.question}</span>
                    <div className="p-1.5 rounded-lg bg-slate-100 text-slate-500 shrink-0">
                      {isOpen ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                    </div>
                  </button>
                  {isOpen && (
                    <div className="px-5 pb-5 pt-0 text-sm text-slate-600 leading-relaxed border-t border-slate-100 mt-1 pt-3">
                      {faq.answer}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Нижний блок: Интерактивная запись на пробный урок прямо на сайте */}
      <section id="booking" className="py-20 sm:py-28 bg-gradient-to-b from-white via-emerald-50/30 to-slate-100 border-t border-slate-200 relative">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-12">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-bold bg-emerald-100 text-emerald-800 border border-emerald-200 mb-3">
              <Sparkles className="w-3.5 h-3.5" />
              <span>{t.bottomCta.badge}</span>
            </div>

            <h2 className="text-3xl sm:text-5xl font-black text-slate-900 tracking-tight">
              {t.bottomCta.title}
            </h2>
            <p className="mt-3 text-base sm:text-lg text-slate-600 max-w-2xl mx-auto">
              {t.bottomCta.subtitle}
            </p>
          </div>

          {/* Интерактивная форма записи на сайте */}
          <div className="max-w-4xl mx-auto bg-white rounded-3xl border border-slate-200 shadow-xl overflow-hidden">
            <div className="h-2 w-full bg-gradient-to-r from-emerald-500 via-teal-500 to-indigo-600" />
            
            {inlineSubmitted ? (
              /* Экран подтверждения бронирования */
              <div className="p-8 sm:p-14 text-center space-y-6">
                <div className="w-20 h-20 bg-emerald-50 border-2 border-emerald-500 rounded-full flex items-center justify-center mx-auto text-emerald-600 shadow-lg shadow-emerald-500/10">
                  <CheckCircle2 className="w-10 h-10 text-emerald-600" />
                </div>

                <div className="space-y-2">
                  <span className="px-3 py-1 rounded-full text-xs font-mono font-bold bg-emerald-50 text-emerald-800 border border-emerald-200">
                    БРОНЬ ПОДТВЕРЖДЕНА
                  </span>
                  <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
                    {t.bookingModal.successTitle}
                  </h3>
                  <p className="text-sm text-slate-600 max-w-md mx-auto">
                    {t.bookingModal.successDesc}
                  </p>
                </div>

                {/* Электронный талон записи */}
                <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 max-w-md mx-auto text-left text-xs font-mono space-y-2.5 text-slate-700 shadow-sm">
                  <div className="flex justify-between border-b border-slate-200 pb-2">
                    <span className="text-slate-500">Родитель:</span>
                    <span className="text-slate-900 font-bold">{inlineParentName}</span>
                  </div>
                  <div className="flex justify-between border-b border-slate-200 pb-2">
                    <span className="text-slate-500">Телефон:</span>
                    <span className="text-emerald-700 font-bold">{inlinePhone}</span>
                  </div>
                  <div className="flex justify-between border-b border-slate-200 pb-2">
                    <span className="text-slate-500">Ученик:</span>
                    <span className="text-slate-900">{inlineStudentName || 'Ученик'}, {inlineAge} лет</span>
                  </div>
                  <div className="flex justify-between border-b border-slate-200 pb-2">
                    <span className="text-slate-500">Курс:</span>
                    <span className="text-slate-900 font-semibold">{localizedCourses.find(c => c.id === inlineCourseId)?.title}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-500">Слот:</span>
                    <span className="text-emerald-800 font-bold">{inlineSlot}</span>
                  </div>
                </div>

                <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
                  <button
                    onClick={() => {
                      setInlineSubmitted(false);
                      setInlineParentName('');
                      setInlinePhone('');
                      setInlineStudentName('');
                    }}
                    className="px-6 py-3 bg-slate-900 hover:bg-slate-800 text-white font-semibold rounded-xl text-xs transition-colors"
                  >
                    Записать еще одного ребенка
                  </button>
                  <a
                    href="tel:+79993829014"
                    className="px-6 py-3 bg-white border border-slate-200 hover:bg-slate-50 text-slate-800 font-semibold rounded-xl text-xs transition-colors shadow-sm"
                  >
                    Связаться по телефону
                  </a>
                </div>
              </div>
            ) : (
              /* Форма записи на странице */
              <div className="grid grid-cols-1 lg:grid-cols-12 divide-y lg:divide-y-0 lg:divide-x divide-slate-200">
                
                {/* Левая колонка: Стандарты и гарантии */}
                <div className="lg:col-span-5 p-6 sm:p-10 bg-slate-50/70 flex flex-col justify-between">
                  <div>
                    <span className="text-[11px] font-mono font-bold text-emerald-800 bg-emerald-100/70 border border-emerald-200 px-2.5 py-0.5 rounded-md uppercase tracking-wider">
                      Гарантии MAM
                    </span>
                    <h3 className="text-xl sm:text-2xl font-black text-slate-900 mt-3">
                      Каждому ученику — отдельный ноутбук и наставник
                    </h3>
                    <p className="text-xs text-slate-600 mt-2 leading-relaxed">
                      На пробном уроке ребенок напишет первую программу уже через 15 минут под руководством действующего Senior-инженера.
                    </p>

                    <div className="mt-6 space-y-3.5 text-xs text-slate-700">
                      <div className="flex items-start gap-2.5">
                        <Laptop className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                        <span><strong>1:1 ThinkPad / Mac:</strong> ребенок работает за персональным настроенным ноутбуком.</span>
                      </div>
                      <div className="flex items-start gap-2.5">
                        <Users className="w-4 h-4 text-teal-600 shrink-0 mt-0.5" />
                        <span><strong>Мини-группа до 5 детей:</strong> преподаватель видит экран каждого ученика в реальном времени.</span>
                      </div>
                      <div className="flex items-start gap-2.5">
                        <ShieldCheck className="w-4 h-4 text-indigo-600 shrink-0 mt-0.5" />
                        <span><strong>100% бесплатно:</strong> без скрытых подписок, предоплат и обязательств.</span>
                      </div>
                    </div>
                  </div>

                  <div className="mt-8 pt-6 border-t border-slate-200">
                    <p className="text-[11px] text-slate-500 font-mono">
                      Нужна быстрая консультация методиста?
                    </p>
                    <a 
                      href="tel:+79993829014" 
                      className="text-sm font-bold text-emerald-700 hover:text-emerald-800 transition-colors mt-0.5 inline-block"
                    >
                      +7 (999) 382-90-14
                    </a>
                  </div>
                </div>

                {/* Правая колонка: Инпуты формы */}
                <div className="lg:col-span-7 p-6 sm:p-10">
                  <div className="mb-6">
                    <h4 className="text-lg sm:text-xl font-bold text-slate-900">
                      {t.bookingModal.title}
                    </h4>
                    <p className="text-xs text-slate-500 mt-1">
                      {t.bookingModal.subtitle}
                    </p>
                  </div>

                  <form onSubmit={handleInlineSubmit} className="space-y-4">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                      <div>
                        <label className="block text-xs font-semibold text-slate-700 mb-1">
                          {t.bookingModal.parentNameLabel}
                        </label>
                        <div className="relative">
                          <input
                            type="text"
                            value={inlineParentName}
                            onChange={(e) => setInlineParentName(e.target.value)}
                            placeholder={t.bookingModal.parentNamePlaceholder}
                            className={`w-full px-3.5 py-2.5 bg-slate-50 border rounded-xl text-xs sm:text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-emerald-500/40 focus:bg-white transition-all ${
                              inlineErrors.parentName ? 'border-rose-400 ring-1 ring-rose-200' : 'border-slate-200'
                            }`}
                          />
                          <User className="absolute right-3 top-2.5 w-4 h-4 text-slate-400 pointer-events-none" />
                        </div>
                        {inlineErrors.parentName && (
                          <p className="text-[10px] text-rose-500 mt-1">Пожалуйста, укажите имя родителя</p>
                        )}
                      </div>

                      <div>
                        <label className="block text-xs font-semibold text-slate-700 mb-1">
                          {t.bookingModal.phoneLabel}
                        </label>
                        <div className="relative">
                          <input
                            type="tel"
                            value={inlinePhone}
                            onChange={(e) => setInlinePhone(e.target.value)}
                            placeholder={t.bookingModal.phonePlaceholder}
                            className={`w-full px-3.5 py-2.5 bg-slate-50 border rounded-xl text-xs sm:text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-emerald-500/40 focus:bg-white transition-all ${
                              inlineErrors.phone ? 'border-rose-400 ring-1 ring-rose-200' : 'border-slate-200'
                            }`}
                          />
                          <Phone className="absolute right-3 top-2.5 w-4 h-4 text-slate-400 pointer-events-none" />
                        </div>
                        {inlineErrors.phone && (
                          <p className="text-[10px] text-rose-500 mt-1">Пожалуйста, укажите корректный телефон</p>
                        )}
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                      <div>
                        <label className="block text-xs font-semibold text-slate-700 mb-1">
                          {t.bookingModal.studentNameLabel}
                        </label>
                        <input
                          type="text"
                          value={inlineStudentName}
                          onChange={(e) => setInlineStudentName(e.target.value)}
                          placeholder={t.bookingModal.studentNamePlaceholder}
                          className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs sm:text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-emerald-500/40 focus:bg-white transition-all"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-semibold text-slate-700 mb-1">
                          {t.bookingModal.studentAgeLabel}: <span className="text-emerald-700 font-bold">{inlineAge} лет</span>
                        </label>
                        <input
                          type="range"
                          min="8"
                          max="17"
                          value={inlineAge}
                          onChange={(e) => setInlineAge(Number(e.target.value))}
                          className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-emerald-600 mt-3"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                      <div>
                        <label className="block text-xs font-semibold text-slate-700 mb-1">
                          {t.bookingModal.courseLabel}
                        </label>
                        <select
                          value={inlineCourseId}
                          onChange={(e) => setInlineCourseId(e.target.value)}
                          className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs sm:text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-emerald-500/40 focus:bg-white transition-all"
                        >
                          {localizedCourses.map((c) => (
                            <option key={c.id} value={c.id}>
                              {c.title} ({c.minAge}–{c.maxAge} лет)
                            </option>
                          ))}
                        </select>
                      </div>

                      <div>
                        <label className="block text-xs font-semibold text-slate-700 mb-1">
                          {t.bookingModal.preferredTimeLabel}
                        </label>
                        <select
                          value={inlineSlot}
                          onChange={(e) => setInlineSlot(e.target.value)}
                          className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs sm:text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-emerald-500/40 focus:bg-white transition-all"
                        >
                          <option value="Вторник 16:00 (Лаб. Альфа)">Вторник 16:00 (Лаб. Альфа — 1 место)</option>
                          <option value="Среда 17:30 (Лаб. Бета)">Среда 17:30 (Лаб. Бета — 2 места)</option>
                          <option value="Четверг 16:00 (Лаб. Альфа)">Четверг 16:00 (Лаб. Альфа — 1 место)</option>
                          <option value="Суббота 11:00 (Интенсив Дельта)">Суббота 11:00 (Интенсив Дельта — 1 место)</option>
                        </select>
                      </div>
                    </div>

                    <div className="pt-2">
                      <button
                        type="submit"
                        className="w-full py-3.5 px-6 rounded-2xl bg-gradient-to-r from-emerald-600 via-teal-600 to-emerald-500 text-white font-extrabold text-sm sm:text-base shadow-lg shadow-emerald-600/25 hover:shadow-emerald-600/40 hover:scale-[1.01] active:scale-[0.99] transition-all flex items-center justify-center gap-2"
                      >
                        <Sparkles className="w-5 h-5 text-white" />
                        <span>{t.bookingModal.submitBtn}</span>
                      </button>
                      <p className="text-[11px] text-center text-slate-500 mt-2">
                        🔒 {t.bookingModal.guaranteeText}
                      </p>
                    </div>
                  </form>
                </div>

              </div>
            )}
          </div>

          {/* Дополнительные гарантии снизу */}
          <div className="mt-12 flex items-center justify-center gap-6 text-xs text-slate-600 flex-wrap">
            <span>✓ {t.bottomCta.guarantee1}</span>
            <span>✓ {t.bottomCta.guarantee2}</span>
            <span>✓ {t.bottomCta.guarantee3}</span>
          </div>

        </div>
      </section>

      {/* Футер */}
      <footer className="bg-white border-t border-slate-200 py-14 text-slate-600 text-xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
            
            {/* Колонка 1: Бренд и аккредитация */}
            <div>
              <div className="flex items-center gap-2 mb-3">
                <div className="w-7 h-7 rounded-lg bg-emerald-600 flex items-center justify-center text-white font-black">
                  M
                </div>
                <span className="font-extrabold text-base text-slate-900 tracking-wider">
                  MARYAM<span className="text-emerald-600">.ACADEMY</span>
                </span>
              </div>
              <p className="text-slate-500 text-xs leading-relaxed mb-4">
                {t.footer.desc}
              </p>
              <div className="text-[11px] font-mono text-emerald-700 font-bold">
                {t.footer.accreditation}
              </div>
            </div>

            {/* Колонка 2: Направления */}
            <div>
              <h4 className="text-sm font-bold text-slate-900 uppercase font-mono tracking-wider mb-4">
                {t.footer.tracksTitle}
              </h4>
              <ul className="space-y-2">
                {localizedCourses.map((c) => (
                  <li key={c.id}>
                    <a href="#courses" className="hover:text-emerald-700 transition-colors">
                      {c.title} ({c.minAge}–{c.maxAge} {t.courses.yearsUnit})
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Колонка 3: Лаборатории */}
            <div>
              <h4 className="text-sm font-bold text-slate-900 uppercase font-mono tracking-wider mb-4">
                {t.footer.campusesTitle}
              </h4>
              <p className="text-slate-800 font-semibold mb-1">{t.footer.hubName}</p>
              <p className="text-slate-500 leading-relaxed mb-3">
                {t.footer.addressLine1}<br />
                {t.footer.addressLine2}
              </p>
              <p className="text-slate-500">
                {t.footer.hours}<br />
                {t.footer.admissions}: admissions@maryam.academy
              </p>
            </div>

            {/* Колонка 4: Стандарты и регламенты */}
            <div>
              <h4 className="text-sm font-bold text-slate-900 uppercase font-mono tracking-wider mb-4">
                {t.footer.standardsTitle}
              </h4>
              <ul className="space-y-2">
                <li><span className="hover:text-slate-900 cursor-pointer">{t.footer.privacyData}</span></li>
                <li><span className="hover:text-slate-900 cursor-pointer">{t.footer.hardwarePolicy}</span></li>
                <li><span className="hover:text-slate-900 cursor-pointer">{t.footer.accessControl}</span></li>
                <li><span className="hover:text-slate-900 cursor-pointer">{t.footer.refundPolicy}</span></li>
                <li><span className="hover:text-slate-900 cursor-pointer">{t.footer.equalAccess}</span></li>
              </ul>
            </div>

          </div>

          <div className="pt-8 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-4 text-slate-400">
            <div>
              {t.footer.copyright}
            </div>
            <div className="flex gap-4">
              <span className="hover:text-slate-600 cursor-pointer">{t.footer.privacyPolicy}</span>
              <span>•</span>
              <span className="hover:text-slate-600 cursor-pointer">{t.footer.termsOfService}</span>
              <span>•</span>
              <span className="hover:text-slate-600 cursor-pointer">{t.footer.labRules}</span>
            </div>
          </div>
        </div>
      </footer>

    </div>
  );
};
