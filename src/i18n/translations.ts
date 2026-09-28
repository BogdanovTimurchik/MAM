import { LanguageCode } from './types';

export interface TranslationSchema {
  // Nav
  nav: {
    missionBadge: string;
    tagline: string;
    mainSite: string;
    studentParentPortal: string;
    adminCrm: string;
    marketingLegal: string;
    turingSpot: string;
    bookTrialBtn: string;
    bookTrialShort: string;
    selectLanguage: string;
    courses: string;
    methodology: string;
    calculator: string;
    roadmap: string;
    testimonials: string;
    faq: string;
  };

  // Top banner
  banner: {
    autumnIntake: string;
    spotsRemaining: string;
    claimSpot: string;
  };

  // Hero
  hero: {
    badge: string;
    titlePart1: string;
    titleAccent: string;
    titlePart2: string;
    subtitle: string;
    bookTrialCta: string;
    exploreCoursesCta: string;
    calculateRoiCta: string;
    spotsRemainingBadge: string;
    pillarRatio: string;
    pillarRatioDesc: string;
    pillarLaptop: string;
    pillarLaptopDesc: string;
    pillarPortfolio: string;
    pillarPortfolioDesc: string;
    pillarIso: string;
    pillarIsoDesc: string;
  };

  // Calculator
  calculator: {
    badge: string;
    title: string;
    subtitle: string;
    childAgeLabel: string;
    studyDurationLabel: string;
    monthsUnit: string;
    yearsOldUnit: string;
    totalInvested: string;
    estimatedValue: string;
    paybackMultiplier: string;
    portfolioAsset: string;
    portfolioAssetDesc: string;
    internshipPotential: string;
    internshipPotentialDesc: string;
    scholarshipBonus: string;
    scholarshipBonusDesc: string;
    ctaNote: string;
    bookWithCalculation: string;
  };

  // Course Quiz
  quiz: {
    badge: string;
    title: string;
    subtitle: string;
    ageQuestion: string;
    goalQuestion: string;
    expQuestion: string;
    goalGames: string;
    goalWeb: string;
    goalCyber: string;
    goalRobotics: string;
    expBeginner: string;
    expSome: string;
    expAdvanced: string;
    recommendedTrack: string;
    trackOutcome: string;
    durationLabel: string;
    enrollRecommended: string;
  };

  // Courses
  courses: {
    badge: string;
    title: string;
    subtitle: string;
    filterAll: string;
    filterJunior: string;
    filterSenior: string;
    perMonth: string;
    monthsDuration: string;
    sessionsWeekly: string;
    viewSyllabus: string;
    bookTrialForCourse: string;
    syllabusModalTitle: string;
    syllabusModalSubtitle: string;
    modulesCount: string;
    closeBtn: string;
    keyDeliverables: string;
    yearsUnit: string;
  };

  // Hardware
  hardware: {
    badge: string;
    title: string;
    subtitle: string;
    p14sTitle: string;
    p14sDesc: string;
    macbookTitle: string;
    macbookDesc: string;
    zeroSharedPc: string;
    zeroSharedPcDesc: string;
    securityTag: string;
    securityTagDesc: string;
  };

  // Methodology
  methodology: {
    badge: string;
    title: string;
    subtitle: string;
    ratioTitle: string;
    ratioDesc: string;
    feedbackTitle: string;
    feedbackDesc: string;
    psychologyTitle: string;
    psychologyDesc: string;
    vsStandardTitle: string;
    vsStandardMAM: string;
    vsStandardOthers: string;
  };

  // Roadmap
  roadmap: {
    eyebrow: string;
    title: string;
    subtitle: string;
    m1Tab: string;
    m2Tab: string;
    m4Tab: string;
    m6Tab: string;
    m8Tab: string;
    m1Badge: string;
    m1Title: string;
    m1Desc: string;
    m1Point1: string;
    m1Point2: string;
    m2Badge: string;
    m2Title: string;
    m2Desc: string;
    m2Point1: string;
    m2Point2: string;
    m4Badge: string;
    m4Title: string;
    m4Desc: string;
    m4Point1: string;
    m4Point2: string;
    m6Badge: string;
    m6Title: string;
    m6Desc: string;
    m6Point1: string;
    m6Point2: string;
    m8Badge: string;
    m8Title: string;
    m8Desc: string;
    m8Point1: string;
    m8Point2: string;
    m8DiplomaTitle: string;
    m8DiplomaDesc: string;
  };

  // Testimonials
  testimonials: {
    badge: string;
    eyebrow: string;
    title: string;
    subtitle: string;
    t1Quote: string;
    t1Author: string;
    t1Role: string;
    t2Quote: string;
    t2Author: string;
    t2Role: string;
    t3Quote: string;
    t3Author: string;
    t3Role: string;
  };

  // FAQ
  faq: {
    badge: string;
    title: string;
    subtitle: string;
    allCategory: string;
    methodologyCategory: string;
    hardwareCategory: string;
    economicsCategory: string;
    scheduleCategory: string;
  };

  // Bottom CTA
  bottomCta: {
    badge: string;
    title: string;
    subtitle: string;
    bookBtn: string;
    phone: string;
    guarantee1: string;
    guarantee2: string;
    guarantee3: string;
  };

  // Modal
  bookingModal: {
    title: string;
    subtitle: string;
    parentNameLabel: string;
    studentNameLabel: string;
    studentAgeLabel: string;
    phoneLabel: string;
    emailLabel: string;
    courseLabel: string;
    preferredTimeLabel: string;
    parentNamePlaceholder: string;
    studentNamePlaceholder: string;
    phonePlaceholder: string;
    submitBtn: string;
    guaranteeText: string;
    successTitle: string;
    successDesc: string;
    doneBtn: string;
  };

  // Mobile App Experience
  mobileApp: {
    badge: string;
    specLabel: string;
    platform: string;
    title: string;
    subtitle: string;
    kidRole: string;
    parentRole: string;
    roleKid: string;
    roleParent: string;
    phoneFrame: string;
    wideFrame: string;
    wideView: string;
    uxSpec: string;
    activeProfile: string;
    tabDashboard: string;
    tabProjects: string;
    tabSchedule: string;
    tabCerts: string;
    tabLeaderboard: string;
    streakLabel: string;
    currentQuest: string;
    terminalBtn: string;
    laptopAssigned: string;
    readyStatus: string;
    badgesTitle: string;
    parentStatusTitle: string;
    attendanceLabel: string;
    laptopHealthLabel: string;
    mentorFeedbackTitle: string;
    subscriptionStatus: string;
    paidStatus: string;
    consultationBtn: string;
  };

  // Admin CRM
  adminCrm: {
    badge: string;
    systemVersion: string;
    title: string;
    subtitle: string;
    addLeadBtn: string;
    kpiActiveStudents: string;
    kpiMonthlyRevenue: string;
    kpiRetention: string;
    kpiSeatCapacity: string;
    kpiMiniGroups: string;
    tabLeads: string;
    tabGroups: string;
    tabHardware: string;
    tabCertificates: string;
  };

  // Marketing
  marketing: {
    badge: string;
    metaLabel: string;
    title: string;
    subtitle: string;
    printKit: string;
    tabScript: string;
    tabBrochure: string;
    tabLegal: string;
  };

  // Footer
  footer: {
    aboutTitle: string;
    aboutText: string;
    accreditationTitle: string;
    accreditationText: string;
    contactTitle: string;
    address: string;
    workingHours: string;
    rightsReserved: string;
    language: string;
    desc: string;
    accreditation: string;
    tracksTitle: string;
    campusesTitle: string;
    hubName: string;
    addressLine1: string;
    addressLine2: string;
    hours: string;
    admissions: string;
    standardsTitle: string;
    privacyData: string;
    hardwarePolicy: string;
    accessControl: string;
    refundPolicy: string;
    equalAccess: string;
    copyright: string;
    privacyPolicy: string;
    termsOfService: string;
    labRules: string;
  };
}

export const TRANSLATIONS: Record<LanguageCode, TranslationSchema> = {
  // ================= RUSSIAN =================
  ru: {
    nav: {
      missionBadge: 'МИССИЯ MAM',
      tagline: 'Группы 5:1 • 1:1 Ноутбук • Стандарты ISO',
      mainSite: 'Главный сайт',
      studentParentPortal: 'Портал ученика и родителя',
      adminCrm: 'CRM и Администрация',
      marketingLegal: 'Материалы и Оферта',
      turingSpot: 'Лаб. Тьюринга: 1 место свободно',
      bookTrialBtn: 'Пробный урок 45 мин',
      bookTrialShort: 'Пробный',
      selectLanguage: 'Язык',
      courses: 'Курсы',
      methodology: 'Методика',
      calculator: 'Калькулятор',
      roadmap: 'Программа',
      testimonials: 'Отзывы',
      faq: 'FAQ'
    },
    banner: {
      autumnIntake: 'Осенний поток 2026:',
      spotsRemaining: 'осталось всего 3 из 35 мест в лабораториях Альфа, Бета и Дельта.',
      claimSpot: 'Забронировать место →'
    },
    hero: {
      badge: 'АКАДЕМИЯ ПРОГРАММИРОВАНИЯ ВЫСШИХ СТАНДАРТОВ (8–17 ЛЕТ)',
      titlePart1: 'Воспитываем инженеров, а не потребителей игр.',
      titleAccent: 'Строго до 5 детей',
      titlePart2: 'в группе и персональный ноутбук.',
      subtitle: 'Превращаем увлечение смартфонами и геймингом в серьезные навыки: Python, искусственный интеллект, Full-Stack разработку и кибербезопасность. Гарантия результата на первом же занятии.',
      bookTrialCta: 'Записаться на бесплатный пробный урок',
      exploreCoursesCta: 'Каталог направлений',
      calculateRoiCta: 'Рассчитать окупаемость',
      spotsRemainingBadge: 'Свободно 3 места из 35 на этот месяц',
      pillarRatio: 'Строго 5:1 соотношение',
      pillarRatioDesc: 'Преподаватель успевает разобрать код каждого ребенка каждые 6 минут.',
      pillarLaptop: '1:1 Рабочая станция',
      pillarLaptopDesc: 'ThinkPad P14s или MacBook Pro персонально за каждым учеником.',
      pillarPortfolio: 'Коммерческое портфолио',
      pillarPortfolioDesc: 'Выпускники имеют от 4 реальных проектов на GitHub с чистым кодом.',
      pillarIso: 'Методика ISO-9001',
      pillarIsoDesc: 'Европейский образовательный стандарт для детей от 8 до 17 лет.'
    },
    calculator: {
      badge: 'ФИНАНСОВО-ОБРАЗОВАТЕЛЬНАЯ МОДЕЛЬ',
      title: 'Инвестиции в ребенка с измеримой отдачей (ROI)',
      subtitle: 'Посчитайте ценность практических IT-навыков, созданного портфолио и академических стипендий при поступлении.',
      childAgeLabel: 'Возраст ребенка:',
      studyDurationLabel: 'Планируемый срок обучения:',
      monthsUnit: 'мес.',
      yearsOldUnit: 'лет',
      totalInvested: 'Инвестиции в обучение',
      estimatedValue: 'Расчетная ценность активов',
      paybackMultiplier: 'Коэффициент отдачи (ROI)',
      portfolioAsset: 'Капитализация портфолио GitHub',
      portfolioAssetDesc: 'Создание реальных веб-сервисов и ботов с чистой архитектурой.',
      internshipPotential: 'Потенциал коммерческих стажировок',
      internshipPotentialDesc: 'Для подростков от 14 лет при выполнении реальных клиентских спринтов.',
      scholarshipBonus: 'Баллы для академических грантов',
      scholarshipBonusDesc: 'Победы в хакатонах и рекомендательные письма от ведущих инженеров.',
      ctaNote: 'Обучение окупается уже во время создания выпускного проекта.',
      bookWithCalculation: 'Забронировать пробный урок по этому расчету'
    },
    quiz: {
      badge: 'ПЕРСОНАЛЬНЫЙ НАВИГАТОР',
      title: 'Подберите идеальную программу для вашего ребенка',
      subtitle: 'Ответьте на 3 вопроса, чтобы узнать подходящий трек и ближайшую свободную рабочую станцию.',
      ageQuestion: '1. Сколько лет вашему ребенку?',
      goalQuestion: '2. Какая главная цель обучения?',
      expQuestion: '3. Есть ли уже опыт в программировании?',
      goalGames: 'Превратить игры в создание своих миров и Python',
      goalWeb: 'Создавать сайты, веб-сервисы и веб-приложения',
      goalCyber: 'Изучить кибербезопасность, сети и защиту от атак',
      goalRobotics: 'Программировать роботов, датчики и железо (IoT)',
      expBeginner: 'С нуля (только играет в игры и серфит)',
      expSome: 'Немного пробовал Scratch или Minecraft моды',
      expAdvanced: 'Уже писал код или пробовал базовый Python',
      recommendedTrack: 'РЕКОМЕНДОВАННЫЙ ТРЕК:',
      trackOutcome: 'Итоговый выпускной проект:',
      durationLabel: 'Длительность программы:',
      enrollRecommended: 'Записаться на этот курс со скидкой'
    },
    courses: {
      badge: 'ОБРАЗОВАТЕЛЬНЫЕ НАПРАВЛЕНИЯ',
      title: 'Программы обучения мирового уровня',
      subtitle: 'Все программы адаптированы под возраст и включают написание промышленного кода с первого дня.',
      filterAll: 'Все направления',
      filterJunior: 'Младшие (8–12 лет)',
      filterSenior: 'Старшие (13–17 лет)',
      perMonth: 'в месяц',
      monthsDuration: 'мес.',
      sessionsWeekly: 'зан./нед.',
      viewSyllabus: 'Программа курса',
      bookTrialForCourse: 'Записаться на пробный урок',
      syllabusModalTitle: 'Учебный план курса',
      syllabusModalSubtitle: 'Пошаговый план от базовых понятий до публикации в продакшн',
      modulesCount: 'модуля',
      closeBtn: 'Закрыть',
      keyDeliverables: 'Результаты модуля:',
      yearsUnit: 'лет'
    },
    hardware: {
      badge: 'ИНФРАСТРУКТУРА ЛАБОРАТОРИЙ',
      title: 'Профессиональное оборудование для каждого',
      subtitle: 'Никаких старых компьютеров. За каждым ребенком закрепляется мощная рабочая станция.',
      p14sTitle: 'Lenovo ThinkPad P14s Gen 5',
      p14sDesc: 'AMD Ryzen 7 Pro, 32GB RAM, быстрый SSD NVMe. Идеально для нейросетей, Pygame и компиляции.',
      macbookTitle: 'Apple MacBook Pro 14" M2 Pro',
      macbookDesc: '10 ядер CPU, retina-дисплей с калибровкой цвета. Для веб-разработки и создания мобильных приложений.',
      zeroSharedPc: 'Принцип «Ноль общих ПК»',
      zeroSharedPcDesc: 'Ребенок всегда садится за одну и ту же персональную станцию со своими файлами и средой.',
      securityTag: 'Изолированная безопасная среда',
      securityTagDesc: 'Контроль сетевого трафика, защита данных и отсутствие отвлекающих социальных сетей.'
    },
    methodology: {
      badge: 'ЗОЛОТОЙ СТАНДАРТ MAM',
      title: 'Почему мы строго ограничиваем группы 5 учениками',
      subtitle: 'Пока конкуренты собирают классы по 15–20 человек ради максимальной прибыли, мы инвестируем в результат каждого.',
      ratioTitle: 'Внимание наставника 5:1',
      ratioDesc: 'Наставник проверяет каждую строчку кода и находит ошибки за секунды до потери мотивации.',
      feedbackTitle: 'Глубокий код-ревью',
      feedbackDesc: 'Учим писать чистый, читаемый код по мировым стандартам индустрии (PEP-8, ESLint, SOLID).',
      psychologyTitle: 'Психологический комфорт',
      psychologyDesc: 'В камерной атмосфере даже стеснительные дети раскрываются и не боятся задавать вопросы.',
      vsStandardTitle: 'Сравнение подходов к обучению',
      vsStandardMAM: 'Maryam Academy (MAM)',
      vsStandardOthers: 'Обычные курсы и школы'
    },
    roadmap: {
      eyebrow: 'ПОШАГОВАЯ ТРАЕКТОРИЯ УСПЕХА',
      title: 'Что ваш ребенок создаст за 8 месяцев',
      subtitle: 'От первой строчки синтаксиса до архитектуры нейросетей и публикации полномасштабных продуктов.',
      m1Tab: 'Месяц 1',
      m2Tab: 'Месяц 2',
      m4Tab: 'Месяц 4',
      m6Tab: 'Месяц 6',
      m8Tab: 'Месяц 8',
      m1Badge: 'Месяц 1: Алгоритмическое мышление',
      m1Title: 'Первая игра и синтаксис CLI',
      m1Desc: 'Освоение переменных, списков, условий и циклов. Создание текстовой ролевой квест-игры с ветвящимся сюжетом.',
      m1Point1: 'Чистый синтаксис Python без визуальных блоков',
      m1Point2: 'Умение самостоятельно находить и исправлять синтаксические ошибки',
      m2Badge: 'Месяц 2: Графика и физика',
      m2Title: 'Собственный 2D-движок на Pygame',
      m2Desc: 'Изучение векторной математики, детекции коллизий, гравитации и анимации спрайтов в 60 FPS.',
      m2Point1: 'Кинематическая физика прыжка и инерции',
      m2Point2: 'Модульная архитектура классов и игровых объектов',
      m4Badge: 'Месяц 4: Искусственный интеллект',
      m4Title: 'Умные боты и поиск путей A*',
      m4Desc: 'Интеграция алгоритмов поиска кратчайшего пути по сетке и конечных автоматов поведения боссов.',
      m4Point1: 'Реализация алгоритма A* и взвешенных графов',
      m4Point2: 'Умный ИИ противников с адаптивной реакцией на игрока',
      m6Badge: 'Месяц 6: Серверная часть и Web API',
      m6Title: 'Сетевой мультиплеер и облачные базы',
      m6Desc: 'Клиент-серверное взаимодействие через HTTP и WebSocket. Сохранение рекордов и профилей в облачную базу данных.',
      m6Point1: 'REST API, авторизация и передача JSON-пакетов',
      m6Point2: 'Облачная база рекордов и аналитика игроков',
      m8Badge: 'Месяц 8: Выпускной проект и Демо-День',
      m8Title: 'Публикация продукта и защита диплома',
      m8Desc: 'Финальная полировка архитектуры, сборка дистрибутива под Windows/macOS и публичная презентация перед инвесторами и родителями.',
      m8Point1: 'Готовый публичный проект в портфолио GitHub',
      m8Point2: 'Международный верифицированный сертификат MAM ISO-9001',
      m8DiplomaTitle: 'Диплом инженера-разработчика MAM',
      m8DiplomaDesc: 'Криптографически подписанный сертификат с QR-кодом для подтверждения подлинности в любой точке мира.'
    },
    testimonials: {
      badge: 'ОТЗЫВЫ РОДИТЕЛЕЙ',
      eyebrow: 'ОТЗЫВЫ РОДИТЕЛЕЙ',
      title: 'Истории успехов наших учеников',
      subtitle: 'Реальные результаты детей и впечатления их родителей после прохождения программ.',
      t1Quote: 'Сын перестал бессмысленно зависать в YouTube и Roblox. Теперь он сам программирует физику в Pygame и с гордостью показывает свои игры всей семье.',
      t1Author: 'Татьяна А.',
      t1Role: 'Мама Марка (10 лет, трек Python & AI)',
      t2Quote: 'Мини-группа из 5 человек — это лучшее, что мы встречали. Наставник буквально каждую минуту рядом, а выделенный ThinkPad избавил от вечных проблем с домашним ноутбуком.',
      t2Author: 'Дамир Ч.',
      t2Role: 'Папа Амира (13 лет, трек Full-Stack)',
      t3Quote: 'Дочь поступила на международный IT-лицей благодаря портфолио проектов, собранному в MAM. Эксперты на собеседовании были поражены уровнем чистоты кода.',
      t3Author: 'Фатима К.',
      t3Role: 'Мама Софии (15 лет, трек CyberSec)'
    },
    faq: {
      badge: 'ЧАСТЫЕ ВОПРОСЫ',
      title: 'Ответы на главные вопросы родителей',
      subtitle: 'Все, что нужно знать об обучении, оборудовании, расписании и гарантиях качества.',
      allCategory: 'Все',
      methodologyCategory: 'Методология',
      hardwareCategory: 'Оборудование',
      economicsCategory: 'Экономика',
      scheduleCategory: 'Расписание'
    },
    bottomCta: {
      badge: 'НАЧНИТЕ С БЕСПЛАТНОГО ТЕСТ-ДРАЙВА',
      title: 'Забронируйте рабочую станцию для вашего ребенка',
      subtitle: '45 минут практики на ThinkPad P14s в мини-группе до 5 человек. Наставник определит сильные стороны и составит дорожную карту.',
      bookBtn: 'Записаться на пробный урок',
      phone: '+7 (999) 382-90-14',
      guarantee1: '100% бесплатно и без обязательств',
      guarantee2: 'Персональный ноутбук 1:1 каждому ребенку',
      guarantee3: 'Первый работающий код за 15 минут'
    },
    bookingModal: {
      title: 'Запись на 45-минутный пробный урок',
      subtitle: 'Индивидуальное занятие в мини-группе до 5 человек. Оборудование предоставляется.',
      parentNameLabel: 'ФИО родителя *',
      studentNameLabel: 'Имя ребенка *',
      studentAgeLabel: 'Возраст ребенка *',
      phoneLabel: 'Номер телефона (WhatsApp/Telegram) *',
      emailLabel: 'Email для отправки материалов *',
      courseLabel: 'Интересующее направление',
      preferredTimeLabel: 'Удобное время посещения',
      parentNamePlaceholder: 'Например: Елена Смирнова',
      studentNamePlaceholder: 'Например: Артем',
      phonePlaceholder: '+7 (___) ___-__-__',
      submitBtn: 'Забронировать бесплатный пробный урок',
      guaranteeText: 'Бесплатно. Не обязывает к покупке. Ребенок напишет первый код за 15 минут.',
      successTitle: 'Заявка успешно подтверждена!',
      successDesc: 'Рабочая станция забронирована. Куратор свяжется с вами в течение 15 минут для подтверждения времени.',
      doneBtn: 'Понятно, спасибо!'
    },
    mobileApp: {
      badge: 'АРХЕТИП 2: МОБИЛЬНЫЙ ПОРТАЛ',
      specLabel: 'Спецификация React Native (iOS / Android)',
      platform: 'Спецификация React Native (iOS / Android)',
      title: 'Двухролевой Портал: Ребенок и Родитель',
      subtitle: 'Интерактивный терминал ученика, геймификация квестов и телеметрия успеваемости для родителей в реальном времени.',
      kidRole: 'Режим ученика',
      parentRole: 'Режим родителя',
      roleKid: 'Режим ученика',
      roleParent: 'Режим родителя',
      phoneFrame: 'Рамка смартфона',
      wideFrame: 'Широкий вид',
      wideView: 'Широкий вид',
      uxSpec: 'Спецификация UX',
      activeProfile: 'Активный профиль:',
      tabDashboard: 'Главная',
      tabProjects: 'Проекты',
      tabSchedule: 'Расписание',
      tabCerts: 'Дипломы',
      tabLeaderboard: 'Рейтинг',
      streakLabel: 'дней серии кодинга!',
      currentQuest: 'Текущий квест по коду',
      terminalBtn: 'Открыть терминал',
      laptopAssigned: 'Закреплен ThinkPad P14s',
      readyStatus: 'Готов к работе',
      badgesTitle: 'Инженерные достижения',
      parentStatusTitle: 'Академический статус ученика',
      attendanceLabel: 'Посещаемость',
      laptopHealthLabel: 'Сохранность ноутбука',
      mentorFeedbackTitle: 'Последняя оценка наставника',
      subscriptionStatus: 'Статус абонемента',
      paidStatus: 'ОПЛАЧЕНО',
      consultationBtn: 'Записаться на 10-мин консультацию с наставником'
    },
    adminCrm: {
      badge: 'АРХЕТИП 3: CRM И УПРАВЛЕНИЕ АКАДЕМИЕЙ',
      systemVersion: 'Кампусная система v2026.3',
      title: 'Maryam Academy Mission — Центр Управления',
      subtitle: 'Мониторинг заполняемости групп до 5 человек, инвентаризация 1:1 ноутбуков, реестр дипломов и воронка продаж.',
      addLeadBtn: 'Добавить нового лида',
      kpiActiveStudents: 'АКТИВНЫЕ УЧЕНИКИ',
      kpiMonthlyRevenue: 'МЕСЯЧНАЯ ВЫРУЧКА',
      kpiRetention: 'УДЕРЖАНИЕ (RETENTION)',
      kpiSeatCapacity: 'ЗАГРУЗКА МЕСТ',
      kpiMiniGroups: 'МИНИ-ГРУППЫ (ПО 5)',
      tabLeads: 'Воронка пробных уроков',
      tabGroups: 'Мини-группы (лимит 5 мест)',
      tabHardware: '1:1 Ноутбуки и оборудование',
      tabCertificates: 'Реестр и выпуск дипломов'
    },
    marketing: {
      badge: 'АРХЕТИП 4: МАРКЕТИНГОВЫЕ И ЮРИДИЧЕСКИЕ МАТЕРИАЛЫ',
      metaLabel: 'Методология продаж и документация',
      title: 'Методологическая База и Материалы для Родителей',
      subtitle: 'Проверенный 45-минутный сценарий конверсионного урока, 4-страничный буклет для родителей и официальный договор оферты.',
      printKit: 'Печать комплекта',
      tabScript: 'Сценарий 45-мин пробного урока',
      tabBrochure: 'Буклет для родителей',
      tabLegal: 'Договор оферты и регламент'
    },
    footer: {
      aboutTitle: 'О Maryam Academy Mission',
      aboutText: 'Международная академия программирования и инженерии нового поколения. Воспитываем архитекторов цифрового будущего в атмосфере уважения, дисциплины и высоких стандартов.',
      accreditationTitle: 'Сертификация и безопасность',
      accreditationText: 'Соответствие европейским образовательным протоколам ISO-9001. Персональное рабочее место 1:1, шифрование данных и защищенная лабораторная среда.',
      contactTitle: 'Кампус и контакты',
      address: 'Центральный кампус, Лаборатории Тьюринга, Ловелейс и Фон Неймана',
      workingHours: 'Пн-Вс: 09:00 – 20:30',
      rightsReserved: 'Все права защищены.',
      language: 'Язык интерфейса:',
      desc: 'Международная инженерная IT-академия для детей и подростков 8–17 лет. Мини-группы до 5 учеников, 1:1 ноутбуки и подготовка к карьере в BigTech.',
      accreditation: '✓ Международный стандарт качества образования ISO-9001:2026',
      tracksTitle: 'Программы обучения',
      campusesTitle: 'Кампусы и лаборатории',
      hubName: 'Центральный хаб робототехники и AI',
      addressLine1: 'IT-Парк Тьюринг, Корпус А, оф. 402',
      addressLine2: 'Лаборатории Ловелейс, Тьюринга и Фон Неймана',
      hours: 'График: Пн–Вс, 09:00 – 21:00',
      admissions: 'Приемная комиссия',
      standardsTitle: 'Стандарты и регламенты',
      privacyData: 'Политика обработки персональных данных',
      hardwarePolicy: 'Регламент использования оборудования 1:1',
      accessControl: 'Пропускной режим и безопасность кампуса',
      refundPolicy: 'Финансовые гарантии и условия возврата',
      equalAccess: 'Положение об инклюзивности и грантах',
      copyright: '© 2026 Maryam Academy Mission. Все права защищены.',
      privacyPolicy: 'Политика конфиденциальности',
      termsOfService: 'Договор публичной оферты',
      labRules: 'Правила лабораторий'
    }
  },

  // ================= ENGLISH =================
  en: {
    nav: {
      missionBadge: 'MAM MISSION',
      tagline: '5:1 Ratio • 1:1 Dedicated Laptop • ISO Standards',
      mainSite: 'Main Portal',
      studentParentPortal: 'Student & Parent App',
      adminCrm: 'CRM & Operations',
      marketingLegal: 'Playbooks & Legal',
      turingSpot: 'Turing Lab: 1 Seat Open',
      bookTrialBtn: 'Book 45-Min Trial',
      bookTrialShort: 'Book Trial',
      selectLanguage: 'Language',
      courses: 'Courses',
      methodology: 'Methodology',
      calculator: 'ROI Calculator',
      roadmap: 'Roadmap',
      testimonials: 'Reviews',
      faq: 'FAQ'
    },
    banner: {
      autumnIntake: 'Fall 2026 Cohort:',
      spotsRemaining: 'only 3 of 35 seats remaining across Alpha, Beta & Delta Labs.',
      claimSpot: 'Claim Seat →'
    },
    hero: {
      badge: 'ELITE COMPUTER SCIENCE ACADEMY (AGES 8–17)',
      titlePart1: 'Raising Future Tech Architects, Not Gamers.',
      titleAccent: 'Strict 5:1 Ratio',
      titlePart2: 'and 1:1 Dedicated Laptops.',
      subtitle: 'Transform childhood screen time into world-class software engineering skills: Python, AI neural networks, Full-Stack web systems, and Cybersecurity. Guaranteed code results on lesson one.',
      bookTrialCta: 'Book Free 45-Min Trial Lesson',
      exploreCoursesCta: 'Explore Curriculum',
      calculateRoiCta: 'Calculate Education ROI',
      spotsRemainingBadge: '3 of 35 seats available this month',
      pillarRatio: 'Strict 5:1 Student Ratio',
      pillarRatioDesc: 'Mentors conduct personal code reviews for every child every 6 minutes.',
      pillarLaptop: '1:1 Dedicated Workstation',
      pillarLaptopDesc: 'Assigned ThinkPad P14s or Apple MacBook Pro for each student.',
      pillarPortfolio: 'Commercial Portfolio',
      pillarPortfolioDesc: 'Graduates deploy 4+ production repositories on GitHub with clean code.',
      pillarIso: 'ISO-9001 Standards',
      pillarIsoDesc: 'Rigorous European pedagogy framework tailored for young minds.'
    },
    calculator: {
      badge: 'FINANCIAL ROI ENGINE',
      title: 'Measurable Return on Educational Investment',
      subtitle: 'Calculate the compound value of practical software engineering, GitHub assets, and competitive university scholarships.',
      childAgeLabel: 'Student Age:',
      studyDurationLabel: 'Planned Study Duration:',
      monthsUnit: 'mos',
      yearsOldUnit: 'yrs',
      totalInvested: 'Total Tuition Invested',
      estimatedValue: 'Estimated Asset Value',
      paybackMultiplier: 'Payback Multiplier (ROI)',
      portfolioAsset: 'GitHub Asset Capitalization',
      portfolioAssetDesc: 'Building deployable SaaS services, games, and bots with clean architecture.',
      internshipPotential: 'Junior Internship Potential',
      internshipPotentialDesc: 'For teens 14+ through our commercial client engineering sprints.',
      scholarshipBonus: 'Academic Scholarship Bonus',
      scholarshipBonusDesc: 'Hackathon awards and verified mentor recommendations for global universities.',
      ctaNote: 'Tuition fully pays for itself during the capstone release phase.',
      bookWithCalculation: 'Book Trial With This Projection'
    },
    quiz: {
      badge: 'TRACK FINDER',
      title: 'Find the Ideal Engineering Track for Your Child',
      subtitle: 'Answer 3 quick questions to discover the best course and available lab workstation.',
      ageQuestion: '1. How old is your child?',
      goalQuestion: '2. What is your primary learning goal?',
      expQuestion: '3. Do they have prior coding experience?',
      goalGames: 'Turn video games into Python game physics & AI bots',
      goalWeb: 'Build modern SaaS web apps, APIs & cloud databases',
      goalCyber: 'Master network security, packet defense & ethical CTFs',
      goalRobotics: 'Program hardware microcontrollers, sensors & IoT (C++)',
      expBeginner: 'Complete beginner (only consumes gaming/YouTube)',
      expSome: 'Tried visual tools like Scratch or Minecraft mods',
      expAdvanced: 'Already writes text code or learned basic Python',
      recommendedTrack: 'RECOMMENDED TRACK:',
      trackOutcome: 'Capstone Outcome:',
      durationLabel: 'Program Length:',
      enrollRecommended: 'Enroll in This Track With Priority'
    },
    courses: {
      badge: 'ACADEMIC CATALOG',
      title: 'World-Class Computer Science Curricula',
      subtitle: 'Every syllabus is age-calibrated and immerses students in real industry tooling from day one.',
      filterAll: 'All Programs',
      filterJunior: 'Junior (Ages 8–12)',
      filterSenior: 'Senior (Ages 13–17)',
      perMonth: '/month',
      monthsDuration: 'months',
      sessionsWeekly: 'sessions/wk',
      viewSyllabus: 'View Syllabus',
      bookTrialForCourse: 'Book Free Trial for Course',
      syllabusModalTitle: 'Curriculum Roadmap',
      syllabusModalSubtitle: 'Step-by-step progression from foundational logic to production delivery',
      modulesCount: 'modules',
      closeBtn: 'Close',
      keyDeliverables: 'Module Deliverables:',
      yearsUnit: 'yrs'
    },
    hardware: {
      badge: 'LABORATORY HARDWARE',
      title: 'Professional Workstations for Every Child',
      subtitle: 'No outdated classroom PCs. Every learner gets a designated enterprise-grade machine.',
      p14sTitle: 'Lenovo ThinkPad P14s Gen 5',
      p14sDesc: 'AMD Ryzen 7 Pro, 32GB RAM, ultra-fast NVMe storage. Designed for Pygame, AI models, and fast compiles.',
      macbookTitle: 'Apple MacBook Pro 14" M2 Pro',
      macbookDesc: '10-core CPU, factory-calibrated Retina display. Engineered for responsive Web & Mobile UI development.',
      zeroSharedPc: 'Zero Shared PC Policy',
      zeroSharedPcDesc: 'Students log into the same personal machine each week with saved repositories and tailored dev tools.',
      securityTag: 'Isolated Enterprise Security',
      securityTagDesc: 'Hardware TPM encryption, strict child-safe DNS filtering, and zero distracting social networks.'
    },
    methodology: {
      badge: 'THE MAM STANDARD',
      title: 'Why We Strict-Cap Cohorts at 5 Students',
      subtitle: 'While mass-market schools herd 15–25 kids into crowded rooms, we invest deeply into each child’s individual code output.',
      ratioTitle: '5:1 Deep Mentor Ratio',
      ratioDesc: 'Instructors catch logic misunderstandings in seconds before frustration can derail a child’s passion.',
      feedbackTitle: 'Rigorous Code Review',
      feedbackDesc: 'We teach clean, maintainable architecture conforming to global industry standards (PEP-8, ESLint, SOLID).',
      psychologyTitle: 'Psychological Safety',
      psychologyDesc: 'In our intimate studio setting, even introverted kids thrive and freely ask challenging questions.',
      vsStandardTitle: 'Educational Approach Comparison',
      vsStandardMAM: 'Maryam Academy (MAM)',
      vsStandardOthers: 'Typical Commercial Bootcamps'
    },
    roadmap: {
      eyebrow: 'STEP-BY-STEP TRAJECTORY',
      title: 'What Your Child Creates in 8 Months',
      subtitle: 'From the first line of terminal syntax to AI neural pathfinding and deploying production-ready code.',
      m1Tab: 'Month 1',
      m2Tab: 'Month 2',
      m4Tab: 'Month 4',
      m6Tab: 'Month 6',
      m8Tab: 'Month 8',
      m1Badge: 'Month 1: Algorithmic Foundations',
      m1Title: 'First CLI Adventure Engine',
      m1Desc: 'Mastering variables, control flow, loops, and data structures. Building a text-based terminal RPG with branching choices.',
      m1Point1: 'Pure Python syntax without visual block crutches',
      m1Point2: 'Independent debugging of runtime and logic errors',
      m2Badge: 'Month 2: Graphics and Physics',
      m2Title: 'Custom 2D Game Engine in Pygame',
      m2Desc: 'Vector kinematics, collision response, gravity simulations, and smooth 60 FPS sprite rendering systems.',
      m2Point1: 'Inertial jumping and platformer physics',
      m2Point2: 'Modular OOP design with reusable game entity classes',
      m4Badge: 'Month 4: Artificial Intelligence',
      m4Title: 'Smart Bots & A* Pathfinding Algorithms',
      m4Desc: 'Implementing grid heuristics and finite-state machines for intelligent non-player characters and boss encounters.',
      m4Point1: 'Grid-based A* heuristics and weighted graphs',
      m4Point2: 'Adaptive opponent logic reacting to player behavior',
      m6Badge: 'Month 6: Server-Side & Cloud Web API',
      m6Title: 'Multiplayer Telemetry and Cloud Databases',
      m6Desc: 'Client-server communications over HTTP and WebSocket. Storing leaderboards and user save states in cloud databases.',
      m6Point1: 'REST APIs, JSON payloads, and token security',
      m6Point2: 'Cloud database syncing and player stats telemetry',
      m8Badge: 'Month 8: Capstone Product & Demo Day',
      m8Title: 'Product Deployment and Diploma Defense',
      m8Desc: 'Polishing UX, packaging binaries for Windows/macOS, and delivering a public demo presentation before parents and tech mentors.',
      m8Point1: 'Production-ready GitHub project portfolio piece',
      m8Point2: 'ISO-9001 verified Maryam Academy diploma credentials',
      m8DiplomaTitle: 'MAM Certified Software Engineering Diploma',
      m8DiplomaDesc: 'Cryptographically signed credential with a verifiable QR code recognized across international STEM programs.'
    },
    testimonials: {
      badge: 'PARENT TESTIMONIALS',
      eyebrow: 'PARENT TESTIMONIALS',
      title: 'Transformative Stories from MAM Families',
      subtitle: 'Read genuine verified feedback from parents whose children graduated our flagship tracks.',
      t1Quote: 'My son stopped mindlessly consuming YouTube and Roblox. Now he builds physical kinematic simulations in Pygame and proudly explains his code to our entire family.',
      t1Author: 'Sarah Jenkins',
      t1Role: 'Mother of Leo (Age 10, Python & AI Track)',
      t2Quote: 'The 5-student cohort cap is extraordinary. The mentor is right there for every bug, and the dedicated ThinkPad P14s eliminated our constant home laptop struggles.',
      t2Author: 'David Chen',
      t2Role: 'Father of Eric (Age 13, Full-Stack Track)',
      t3Quote: 'My daughter earned admission into a competitive STEM academy largely due to the GitHub portfolio she built at MAM. The admissions panel was stunned by her code quality.',
      t3Author: 'Elena Rostova',
      t3Role: 'Mother of Sofia (Age 15, CyberSec Track)'
    },
    faq: {
      badge: 'FREQUENTLY ASKED QUESTIONS',
      title: 'Clear Answers for Mindful Parents',
      subtitle: 'Everything you need to know regarding pedagogy, equipment, scheduling, and learning outcomes.',
      allCategory: 'All',
      methodologyCategory: 'Methodology',
      hardwareCategory: 'Hardware',
      economicsCategory: 'Economics',
      scheduleCategory: 'Schedule'
    },
    bottomCta: {
      badge: 'START WITH A FREE TEST DRIVE',
      title: 'Reserve a Workstation for Your Child',
      subtitle: '45 minutes of hands-on coding on a dedicated ThinkPad P14s in a mini-group of max 5 students. Mentor identifies strengths and maps out a roadmap.',
      bookBtn: 'Book Free Trial Lesson',
      phone: '+7 (999) 382-90-14',
      guarantee1: '100% Free & zero obligation',
      guarantee2: 'Dedicated 1:1 workstation per learner',
      guarantee3: 'First running code in 15 minutes'
    },
    bookingModal: {
      title: 'Book 45-Minute Trial Coding Session',
      subtitle: 'Personalized mini-group session (max 5 students). Professional workstation provided.',
      parentNameLabel: 'Parent Full Name *',
      studentNameLabel: 'Child Name *',
      studentAgeLabel: 'Child Age *',
      phoneLabel: 'Phone (WhatsApp / Telegram) *',
      emailLabel: 'Email for prep materials *',
      courseLabel: 'Target Curriculum Track',
      preferredTimeLabel: 'Preferred Lab Timeslot',
      parentNamePlaceholder: 'e.g. Sarah Jenkins',
      studentNamePlaceholder: 'e.g. Leo',
      phonePlaceholder: '+1 (555) 000-0000',
      submitBtn: 'Confirm Free Trial Reservation',
      guaranteeText: '100% Free. No purchase obligation. Your child writes working code within 15 minutes.',
      successTitle: 'Trial Reservation Confirmed!',
      successDesc: 'Lab workstation successfully assigned. Our academic director will reach out within 15 minutes.',
      doneBtn: 'Great, Thank You!'
    },
    mobileApp: {
      badge: 'ARCHETYPE 2: MOBILE ECOSYSTEM',
      specLabel: 'React Native Spec (iOS / Android)',
      platform: 'React Native Spec (iOS / Android)',
      title: 'Dual-Role Mobile Portal: Kid & Parent',
      subtitle: 'Interactive student terminal, quest gamification, and real-time parent telemetry.',
      kidRole: 'Kid Mode',
      parentRole: 'Parent Mode',
      roleKid: 'Kid Mode',
      roleParent: 'Parent Mode',
      phoneFrame: 'Phone Frame',
      wideFrame: 'Wide View',
      wideView: 'Wide View',
      uxSpec: 'UX Spec Sheet',
      activeProfile: 'Active Profile:',
      tabDashboard: 'Dashboard',
      tabProjects: 'Projects',
      tabSchedule: 'Schedule',
      tabCerts: 'Certificates',
      tabLeaderboard: 'Leaderboard',
      streakLabel: 'Day Coding Streak!',
      currentQuest: 'Active Terminal Quest',
      terminalBtn: 'Launch Terminal',
      laptopAssigned: 'Assigned ThinkPad P14s',
      readyStatus: 'Lab Ready',
      badgesTitle: 'Engineering Badges',
      parentStatusTitle: 'Student Academic Status',
      attendanceLabel: 'Attendance Rate',
      laptopHealthLabel: 'Laptop Care Index',
      mentorFeedbackTitle: 'Latest Mentor Review',
      subscriptionStatus: 'Tuition Membership',
      paidStatus: 'PAID & VERIFIED',
      consultationBtn: 'Book 10-Min Mentor Consultation'
    },
    adminCrm: {
      badge: 'ARCHETYPE 3: CRM & CAMPUS OPS',
      systemVersion: 'Campus Engine v2026.3',
      title: 'Maryam Academy Mission — Operations Center',
      subtitle: '5:1 cohort density monitor, 1:1 laptop inventory, cryptographic certificate issuer, and lead pipeline.',
      addLeadBtn: 'Register New Student Lead',
      kpiActiveStudents: 'ACTIVE LEARNERS',
      kpiMonthlyRevenue: 'MONTHLY REVENUE',
      kpiRetention: 'RETENTION RATE',
      kpiSeatCapacity: 'STATION LOAD',
      kpiMiniGroups: '5-SEAT COHORTS',
      tabLeads: 'Trial Lesson Funnel',
      tabGroups: '5-Seat Cohorts',
      tabHardware: '1:1 Workstations',
      tabCertificates: 'Certificates Registry'
    },
    marketing: {
      badge: 'ARCHETYPE 4: MARKETING & LEGAL',
      metaLabel: 'Pedagogy Playbooks & Compliance',
      title: 'Curriculum Playbooks & Parent Collateral',
      subtitle: 'Battle-tested 45-minute trial lesson script (78.5% conversion), 4-page brochure, and terms of service.',
      printKit: 'Print Collateral Kit',
      tabScript: '45-Min Trial Script',
      tabBrochure: 'Parent Brochure',
      tabLegal: 'Legal Terms & Rules'
    },
    footer: {
      aboutTitle: 'About Maryam Academy Mission',
      aboutText: 'A next-generation international computer science academy. We nurture tomorrow’s tech architects through discipline, mentorship, and uncompromising standards.',
      accreditationTitle: 'Certification & Quality',
      accreditationText: 'Fully compliant with European ISO-9001 EdTech standards. 1:1 hardware assignment, encrypted sandbox environments, and rigorous mentorship.',
      contactTitle: 'Campus & Inquiries',
      address: 'Central Campus, Turing, Lovelace & Von Neumann Laboratories',
      workingHours: 'Mon-Sun: 09:00 – 20:30',
      rightsReserved: 'All rights reserved.',
      language: 'Interface Language:',
      desc: 'International computer science & engineering academy for kids and teens aged 8–17. Mini-groups of max 5 students, dedicated 1:1 hardware, and future-proof skills.',
      accreditation: '✓ Certified ISO-9001:2026 Quality Protocol',
      tracksTitle: 'Academic Tracks',
      campusesTitle: 'Campus & Labs',
      hubName: 'Central Robotics & AI Hub',
      addressLine1: 'Turing IT Park, Building A, Suite 402',
      addressLine2: 'Lovelace, Turing & Von Neumann Labs',
      hours: 'Hours: Mon–Sun, 09:00 – 21:00',
      admissions: 'Admissions Office',
      standardsTitle: 'Standards & Compliance',
      privacyData: 'Child Data Protection Policy',
      hardwarePolicy: '1:1 Hardware Equipment Protocol',
      accessControl: 'Campus Safety & Access Standards',
      refundPolicy: 'Tuition Guarantee & Refund Policy',
      equalAccess: 'Equal Access & Scholarship Charter',
      copyright: '© 2026 Maryam Academy Mission. All rights reserved.',
      privacyPolicy: 'Privacy Policy',
      termsOfService: 'Terms of Service',
      labRules: 'Laboratory Code of Conduct'
    }
  },

  // ================= KAZAKH =================
  kz: {
    nav: {
      missionBadge: 'MAM МИССИЯСЫ',
      tagline: '5:1 шағын топтар • 1:1 ноутбук • ISO стандарты',
      mainSite: 'Басты сайт',
      studentParentPortal: 'Оқушы мен ата-ана порталы',
      adminCrm: 'CRM және Әкімшілік',
      marketingLegal: 'Материалдар мен Оферта',
      turingSpot: 'Тьюринг зерт.: 1 орын бос',
      bookTrialBtn: '45 мин байқау сабағы',
      bookTrialShort: 'Байқау сабағы',
      selectLanguage: 'Тіл',
      courses: 'Курстар',
      methodology: 'Әдістеме',
      calculator: 'Калькулятор',
      roadmap: 'Бағдарлама',
      testimonials: 'Пікірлер',
      faq: 'Сұрақ-жауап'
    },
    banner: {
      autumnIntake: '2026 жылғы күзгі қабылдау:',
      spotsRemaining: 'Альфа, Бета және Дельта зертханаларында 35 орынның бар болғаны 3-еуі қалды.',
      claimSpot: 'Орынды брондау →'
    },
    hero: {
      badge: 'ЖОҒАРЫ ДӘРЕЖЕДЕГІ БАҒДАРЛАМАЛАУ АКАДЕМИЯСЫ (8–17 ЖАС)',
      titlePart1: 'Ойын ойнаушыларды емес, болашақ инженерлерді тәрбиелейміз.',
      titleAccent: 'Топта қатаң 5 балаға дейін',
      titlePart2: 'және әрқайсысына жеке ноутбук.',
      subtitle: 'Смартфонға тәуелділікті жоғары IT-дағдыларға айналдырамыз: Python, жасанды интеллект, Full-Stack веб-жүйелер және киберқауіпсіздік. Алғашқы сабақтан нақты нәтиже.',
      bookTrialCta: 'Тегін 45 мин байқау сабағына жазылу',
      exploreCoursesCta: 'Бағыттар каталогы',
      calculateRoiCta: 'Өзін-өзі ақтауды есептеу',
      spotsRemainingBadge: 'Осы айға 35 орынның 3-еуі ғана қалды',
      pillarRatio: 'Қатаң 5:1 қатынасы',
      pillarRatioDesc: 'Оқытушы әр 6 минут сайын әр баланың кодын жеке тексеріп үлгереді.',
      pillarLaptop: '1:1 Жеке жұмыс станциясы',
      pillarLaptopDesc: 'Әр оқушыға жеке бекітілген ThinkPad P14s немесе MacBook Pro ноутбугі.',
      pillarPortfolio: 'Коммерциялық портфолио',
      pillarPortfolioDesc: 'Түлектер GitHub-та 4-тен астам нақты жобаны жариялайды.',
      pillarIso: 'ISO-9001 әдістемесі',
      pillarIsoDesc: '8-17 жастағы балаларға арналған халықаралық сапа стандарты.'
    },
    calculator: {
      badge: 'ҚАРЖЫЛЫҚ-БІЛІМ БЕРУ МОДЕЛІ',
      title: 'Балаға салынған инвестицияның нақты қайтарымы (ROI)',
      subtitle: 'Тәжірибелік IT-дағдылардың, GitHub портфолиосының және шетелдік гранттардың қаржылық құндылығын есептеңіз.',
      childAgeLabel: 'Баланың жасы:',
      studyDurationLabel: 'Жоспарланған оқу мерзімі:',
      monthsUnit: 'ай',
      yearsOldUnit: 'жас',
      totalInvested: 'Оқуға салынған инвестиция',
      estimatedValue: 'Есептелген активтер құны',
      paybackMultiplier: 'Қайтарым коэффициенті (ROI)',
      portfolioAsset: 'GitHub портфолиосын капиталдандыру',
      portfolioAssetDesc: 'Таза архитектурамен нақты веб-қызметтер мен боттар жасау.',
      internshipPotential: 'Ақылы тағылымдамалар әлеуеті',
      internshipPotentialDesc: '14 жастан асқан жасөспірімдер үшін клиенттік жобаларды орындау арқылы.',
      scholarshipBonus: 'Академиялық гранттарға арналған ұпайлар',
      scholarshipBonusDesc: 'Хакатондардағы жеңістер және жетекші инженерлерден ұсыныс хаттар.',
      ctaNote: 'Оқу шығыны қорытынды жобаны орындау барысында-ақ өтеледі.',
      bookWithCalculation: 'Осы есеп бойынша байқау сабағына жазылу'
    },
    quiz: {
      badge: 'ЖЕКЕ НАВИГАТОР',
      title: 'Балаңызға ең қолайлы бағдарламаны таңдаңыз',
      subtitle: '3 сұраққа жауап беріп, қолайлы бағытты және бос зертханалық станцияны анықтаңыз.',
      ageQuestion: '1. Балаңыз неше жаста?',
      goalQuestion: '2. Оқудағы басты мақсатыңыз қандай?',
      expQuestion: '3. Бұған дейін бағдарламалау тәжірибесі бар ма?',
      goalGames: 'Ойындарды Python арқылы өз әлемін құруға айналдыру',
      goalWeb: 'Веб-сайттар, бұлтты жүйелер және веб-сервистер құру',
      goalCyber: 'Киберқауіпсіздік пен желілерді қорғауды меңгеру',
      goalRobotics: 'Роботтарды, датчиктерді және микросұлбаларды (IoT) бағдарламалау',
      expBeginner: 'Нөлден (тек ойын ойнап, интернет қарайды)',
      expSome: 'Scratch немесе Minecraft модымен аздап айналысқан',
      expAdvanced: 'Код жазып көрген немесе базалық Python біледі',
      recommendedTrack: 'ҰСЫНЫЛҒАН БАҒЫТ:',
      trackOutcome: 'Қорытынды бітіру жобасы:',
      durationLabel: 'Бағдарлама ұзақтығы:',
      enrollRecommended: 'Бұл курсқа артықшылықпен жазылу'
    },
    courses: {
      badge: 'БІЛІМ БЕРУ БАҒЫТТАРЫ',
      title: 'Әлемдік деңгейдегі оқу бағдарламалары',
      subtitle: 'Барлық курстар жас ерекшеліктеріне сай бейімделген және алғашқы күннен бастап код жазуды үйретеді.',
      filterAll: 'Барлық бағыттар',
      filterJunior: 'Кіші топ (8–12 жас)',
      filterSenior: 'Үлкен топ (13–17 жас)',
      perMonth: 'айына',
      monthsDuration: 'ай',
      sessionsWeekly: 'сабақ/апт.',
      viewSyllabus: 'Оқу жоспары',
      bookTrialForCourse: 'Курсқа байқау сабағына жазылу',
      syllabusModalTitle: 'Курстың оқу жоспары',
      syllabusModalSubtitle: 'Негізгі ұғымдардан бастап нақты өнімді шығаруға дейінгі қадамдар',
      modulesCount: 'модуль',
      closeBtn: 'Жабу',
      keyDeliverables: 'Модуль нәтижелері:',
      yearsUnit: 'жас'
    },
    hardware: {
      badge: 'ЗЕРТХАНАЛЫҚ ИНФРАҚҰРЫЛЫМ',
      title: 'Әрбір балаға кәсіби жабдық',
      subtitle: 'Ескі компьютерлер жоқ. Әр балаға қуатты корпоративтік жұмыс станциясы бекітіледі.',
      p14sTitle: 'Lenovo ThinkPad P14s Gen 5',
      p14sDesc: 'AMD Ryzen 7 Pro, 32GB RAM, жылдам NVMe жады. Нейрожелілер, Pygame және код компиляциясы үшін керемет.',
      macbookTitle: 'Apple MacBook Pro 14" M2 Pro',
      macbookDesc: '10 ядролы CPU, Retina экран. Заманауи веб және мобильді интерфейстерді жасауға арналған.',
      zeroSharedPc: '«Ортақ компьютер жоқ» қағидаты',
      zeroSharedPcDesc: 'Оқушы әрдайым тек өзінің жеке станциясында өз файлдарымен жұмыс істейді.',
      securityTag: 'Қорғалған қауіпсіз орта',
      securityTagDesc: 'Желілік трафикті бақылау, деректерді қорғау және бөтен әлеуметтік желілерді бұғаттау.'
    },
    methodology: {
      badge: 'MAM АЛТЫН СТАНДАРТЫ',
      title: 'Неліктен топтарды қатаң 5 оқушымен шектейміз',
      subtitle: 'Басқа курстар пайда табу үшін 15–20 баланы бір топқа жинаса, біз әр баланың жеке нәтижесіне мән береміз.',
      ratioTitle: 'Тәлімгердің 5:1 назары',
      ratioDesc: 'Тәлімгер баланың ынтасы жоғалмай тұрып, қателіктерді дер кезінде түзетеді.',
      feedbackTitle: 'Терең код-ревью',
      feedbackDesc: 'Әлемдік индустрия стандарттары бойынша (PEP-8, ESLint, SOLID) таза код жазуға баулимыз.',
      psychologyTitle: 'Психологиялық жайлылық',
      psychologyDesc: 'Шағын ортада тіпті ұялшақ балалар да ашылып, сұрақ қоюдан тартынбайды.',
      vsStandardTitle: 'Оқыту тәсілдерін салыстыру',
      vsStandardMAM: 'Maryam Academy (MAM)',
      vsStandardOthers: 'Қарапайым курстар мен мектептер'
    },
    roadmap: {
      eyebrow: 'ТАБЫСҚА ЖЕТУДІҢ ҚАДАМДЫҚ ЖОЛЫ',
      title: 'Балаңыз 8 ай ішінде не жасайды',
      subtitle: 'Кодтың алғашқы жолынан бастап нейрожелілер архитектурасы мен толыққанды өнімдерді шығаруға дейін.',
      m1Tab: '1-ай',
      m2Tab: '2-ай',
      m4Tab: '4-ай',
      m6Tab: '6-ай',
      m8Tab: '8-ай',
      m1Badge: '1-ай: Алгоритмдік ойлау негіздері',
      m1Title: 'Алғашқы ойын және CLI синтаксисі',
      m1Desc: 'Айнымалылар, шарттар мен циклдерді меңгеру. Сюжеті тармақталған мәтіндік квест ойынын жасау.',
      m1Point1: 'Визуалды блоктарсыз таза Python синтаксисі',
      m1Point2: 'Синтаксистік қателерді өздігінен табу және түзету',
      m2Badge: '2-ай: Графика және физика',
      m2Title: 'Pygame-дегі жеке 2D-қозғалтқыш',
      m2Desc: 'Векторлық математика, гравитация, соқтығысу физикасы және 60 FPS спрайттық анимация жүйесі.',
      m2Point1: 'Секіру мен инерцияның кинематикалық физикасы',
      m2Point2: 'Кластар мен нысандардың модульдік архитектурасы',
      m4Badge: '4-ай: Жасанды интеллект',
      m4Title: 'Ақылды боттар және A* алгоритмі',
      m4Desc: 'Ең қысқа жолды табу алгоритмдерін енгізу және бостардың автономды мінез-құлық логикасын құру.',
      m4Point1: 'Тордағы A* эвристикасы және салмақталған графтар',
      m4Point2: 'Ойыншының қимылына бейімделетін қарсыластар ИИ-і',
      m6Badge: '6-ай: Серверлік бөлім және Web API',
      m6Title: 'Желілік мультиплеер және бұлтты базалар',
      m6Desc: 'HTTP және WebSocket арқылы клиент-серверлік байланыс. Рекордтар мен профильдерді бұлтта сақтау.',
      m6Point1: 'REST API, авторизация және JSON пакеттерімен алмасу',
      m6Point2: 'Бұлтты дерекқормен синхрондау және ойыншылар статистикасы',
      m8Badge: '8-ай: Қорытынды диплом және Демо-күн',
      m8Title: 'Өнімді жариялау және дипломды қорғау',
      m8Desc: 'Архитектураны жетілдіру, Windows/macOS үшін бағдарламаны жинақтау және ата-аналар алдында қорғау.',
      m8Point1: 'GitHub-тағы дайын ресми портфолио жобасы',
      m8Point2: 'MAM ISO-9001 халықаралық верификацияланған сертификаты',
      m8DiplomaTitle: 'MAM бағдарламалық инженер дипломы',
      m8DiplomaDesc: 'Әлемнің кез келген нүктесінде тексеруге болатын QR-коды бар криптографиялық қорғалған диплом.'
    },
    testimonials: {
      badge: 'АТА-АНАЛАРДЫҢ ПІКІРЛЕРІ',
      eyebrow: 'АТА-АНАЛАРДЫҢ ПІКІРЛЕРІ',
      title: 'Біздің оқушылардың табыс тарихы',
      subtitle: 'Балалардың нақты жетістіктері мен ата-аналардың шынайы пікірлері.',
      t1Quote: 'Ұлым YouTube пен ойындарда мақсатсыз отыруды қойды. Қазір өзі Pygame-де физикалық симуляциялар жасап, бүкіл отбасымызға мақтанышпен көрсетеді.',
      t1Author: 'Татьяна А.',
      t1Role: 'Марктың анасы (10 жас, Python & AI бағыты)',
      t2Quote: '5 оқушыдан тұратын шағын топ — ең ұтымды шешім. Тәлімгер әрбір қатені бірден түсіндіреді, ал жеке ThinkPad үйдегі ескі компьютер мәселесін шешті.',
      t2Author: 'Дамир Ч.',
      t2Role: 'Әмірдің әкесі (13 жас, Full-Stack бағыты)',
      t3Quote: 'Қызым MAM-да жинаған жобалар портфолиосының арқасында халықаралық IT-лицейге түсті. Сұхбаттасу кезінде сарапшылар оның кодының тазалығына таңғалды.',
      t3Author: 'Фатима Қ.',
      t3Role: 'Софияның анасы (15 жас, CyberSec бағыты)'
    },
    faq: {
      badge: 'ЖИІ ҚОЙЫЛАТЫН СҰРАҚТАР',
      title: 'Ата-аналардың басты сұрақтарына жауаптар',
      subtitle: 'Оқыту, жабдықтар, кесте және сапа кепілдіктері туралы барлық маңызды ақпарат.',
      allCategory: 'Барлығы',
      methodologyCategory: 'Әдістеме',
      hardwareCategory: 'Жабдықтар',
      economicsCategory: 'Экономика',
      scheduleCategory: 'Кесте'
    },
    bottomCta: {
      badge: 'ТЕГІН СЫНАҚ САБАҒЫНАН БАСТАҢЫЗ',
      title: 'Балаңыз үшін жұмыс станциясын брондаңыз',
      subtitle: '5 оқушыға дейінгі шағын топта ThinkPad P14s-те 45 минуттық тәжірибе. Тәлімгер баланың қабілетін анықтап, даму жоспарын жасайды.',
      bookBtn: 'Байқау сабағына жазылу',
      phone: '+7 (999) 382-90-14',
      guarantee1: '100% тегін әрі ешқандай міндеттемесіз',
      guarantee2: 'Әр балаға 1:1 жеке ноутбук',
      guarantee3: '15 минутта алғашқы нәтижелі код'
    },
    bookingModal: {
      title: '45 минуттық байқау сабағына жазылу',
      subtitle: '5 балаға дейінгі шағын топтағы жеке сабақ. Қажетті жабдық толық қамтамасыз етіледі.',
      parentNameLabel: 'Ата-ананың аты-жөні *',
      studentNameLabel: 'Баланың аты *',
      studentAgeLabel: 'Баланың жасы *',
      phoneLabel: 'Телефон нөмірі (WhatsApp) *',
      emailLabel: 'Материалдарды жіберуге арналған Email *',
      courseLabel: 'Таңдалған курс бағыты',
      preferredTimeLabel: 'Қолайлы келу уақыты',
      parentNamePlaceholder: 'Мысалы: Айгүл Қасымова',
      studentNamePlaceholder: 'Мысалы: Әлихан',
      phonePlaceholder: '+7 (___) ___-__-__',
      submitBtn: 'Тегін байқау сабағына орын алу',
      guaranteeText: 'Толық тегін. Сатып алу міндеттелмейді. Бала 15 минутта алғашқы кодын жазады.',
      successTitle: 'Өтінім сәтті қабылданды!',
      successDesc: 'Жұмыс станциясы брондалды. Куратор уақытты нақтылау үшін 15 минут ішінде хабарласады.',
      doneBtn: 'Түсінікті, рахмет!'
    },
    mobileApp: {
      badge: 'АРХЕТИП 2: МОБИЛЬДІ ПОРТАЛ',
      specLabel: 'React Native Спецификациясы (iOS / Android)',
      platform: 'React Native спецификациясы (iOS / Android)',
      title: 'Екі рөлді портал: Оқушы мен Ата-ана',
      subtitle: 'Оқушының интерактивті терминалы, квесттер және ата-анаға арналған нақты уақыттағы телеметрия.',
      kidRole: 'Оқушы режимі',
      parentRole: 'Ата-ана режимі',
      roleKid: 'Оқушы режимі',
      roleParent: 'Ата-ана режимі',
      phoneFrame: 'Смартфон жақтауы',
      wideFrame: 'Кең көрініс',
      wideView: 'Кең көрініс',
      uxSpec: 'UX спецификациясы',
      activeProfile: 'Белсенді профиль:',
      tabDashboard: 'Басты',
      tabProjects: 'Жобалар',
      tabSchedule: 'Кесте',
      tabCerts: 'Дипломдар',
      tabLeaderboard: 'Рейтинг',
      streakLabel: 'күн қатарынан код жазу!',
      currentQuest: 'Ағымдағы код квесті',
      terminalBtn: 'Терминалды ашу',
      laptopAssigned: 'Бекітілген ThinkPad P14s',
      readyStatus: 'Жұмысқа дайын',
      badgesTitle: 'Инженерлік жетістіктер',
      parentStatusTitle: 'Оқушының академиялық мәртебесі',
      attendanceLabel: 'Қатысу көрсеткіші',
      laptopHealthLabel: 'Ноутбуктің сақталуы',
      mentorFeedbackTitle: 'Тәлімгердің соңғы бағасы',
      subscriptionStatus: 'Абонемент мәртебесі',
      paidStatus: 'ТӨЛЕНДІ',
      consultationBtn: 'Тәлімгермен 10 минуттық кеңеске жазылу'
    },
    adminCrm: {
      badge: 'АРХЕТИП 3: CRM ЖӘНЕ АКАДЕМИЯНЫ БАСҚАРУ',
      systemVersion: 'Кампус жүйесі v2026.3',
      title: 'Maryam Academy Mission — Басқару Орталығы',
      subtitle: '5 орындық топтардың толуын бақылау, 1:1 ноутбуктер инвентары, дипломдар тізілімі және сату воронкасы.',
      addLeadBtn: 'Жаңа оқушыны қосу',
      kpiActiveStudents: 'БЕЛСЕНДІ ОҚУШЫЛАР',
      kpiMonthlyRevenue: 'АЙЛЫҚ ТҮСІМ',
      kpiRetention: 'ОҚУШЫЛАРДЫ САҚТАУ (RETENTION)',
      kpiSeatCapacity: 'ОРЫНДАРДЫҢ ТОЛУЫ',
      kpiMiniGroups: 'ШАҒЫН ТОПТАР (5 АДАМ)',
      tabLeads: 'Байқау сабағы воронкасы',
      tabGroups: 'Шағын топтар (5 орын шегі)',
      tabHardware: '1:1 Ноутбуктер мен құрылғылар',
      tabCertificates: 'Дипломдар тізілімі'
    },
    marketing: {
      badge: 'АРХЕТИП 4: МАРКЕТИНГ ЖӘНЕ ҚҰҚЫҚТЫҚ ҚҰЖАТТАР',
      metaLabel: 'Сату әдістемесі және құжаттама',
      title: 'Әдістемелік База және Ата-аналарға арналған Материалдар',
      subtitle: 'Сыналған 45 мин байқау сабағының сценарийі (78.5% конверсия), 4 беттік буклет және ресми оферта шарты.',
      printKit: 'Жинақты басып шығару',
      tabScript: '45 мин байқау сабағының сценарийі',
      tabBrochure: 'Ата-аналарға арналған буклет',
      tabLegal: 'Оферта шарты және ережелер'
    },
    footer: {
      aboutTitle: 'Maryam Academy Mission туралы',
      aboutText: 'Жаңа буынның халықаралық бағдарламалау академиясы. Құрмет, тәртіп және жоғары стандарттар аясында цифрлық болашақтың архитекторларын тәрбиелейміз.',
      accreditationTitle: 'Сертификаттау және сапа',
      accreditationText: 'Еуропалық ISO-9001 EdTech хаттамаларына толық сәйкестік. 1:1 жеке жұмыс орны, деректерді қорғау және қауіпсіз зертханалық орта.',
      contactTitle: 'Кампус және байланыс',
      address: 'Орталық кампус, Тьюринг, Лавлейс және Фон Нейман зертханалары',
      workingHours: 'Дс-Жс: 09:00 – 20:30',
      rightsReserved: 'Барлық құқықтар қорғалған.',
      language: 'Интерфейс тілі:',
      desc: '8–17 жас аралығындағы балалар мен жасөспірімдерге арналған халықаралық IT-инженерия академиясы. 5 оқушыға дейінгі топтар, 1:1 ноутбуктер және BigTech деңгейіндегі білім.',
      accreditation: '✓ ISO-9001:2026 білім беру сапасының халықаралық сертификаты',
      tracksTitle: 'Оқу бағыттары',
      campusesTitle: 'Кампустар мен зертханалар',
      hubName: 'Робототехника және AI орталық хабы',
      addressLine1: 'Тьюринг IT-Паркі, А ғимараты, 402-кеңсе',
      addressLine2: 'Лавлейс, Тьюринг және Фон Нейман зертханалары',
      hours: 'Кесте: Дс–Жс, 09:00 – 21:00',
      admissions: 'Қабылдау комиссиясы',
      standardsTitle: 'Стандарттар мен ережелер',
      privacyData: 'Деректерді қорғау саясаты',
      hardwarePolicy: '1:1 жабдықты пайдалану ережесі',
      accessControl: 'Кампус қауіпсіздігі мен өткізу тәртібі',
      refundPolicy: 'Қаржылық кепілдіктер мен қайтару шарттары',
      equalAccess: 'Инклюзивтілік пен гранттар туралы ереже',
      copyright: '© 2026 Maryam Academy Mission. Барлық құқықтар қорғалған.',
      privacyPolicy: 'Құпиялылық саясаты',
      termsOfService: 'Қоғамдық оферта шарты',
      labRules: 'Зертхана ережелері'
    }
  },

  // ================= UZBEK =================
  uz: {
    nav: {
      missionBadge: 'MAM MISSIYASI',
      tagline: '5:1 guruhlar • 1:1 noutbuk • ISO standartlari',
      mainSite: 'Asosiy portal',
      studentParentPortal: 'O\'quvchi va ota-ona portali',
      adminCrm: 'CRM va Boshqaruv',
      marketingLegal: 'Materiallar va Oferta',
      turingSpot: 'Tyuring lab: 1 ta joy bo\'sh',
      bookTrialBtn: '45 daq sinov darsi',
      bookTrialShort: 'Sinov darsi',
      selectLanguage: 'Til',
      courses: 'Kurslar',
      methodology: 'Metodika',
      calculator: 'Kalkulyator',
      roadmap: 'Dastur',
      testimonials: 'Fikrlar',
      faq: 'Savol-javob'
    },
    banner: {
      autumnIntake: '2026-yilgi kuzgi qabul:',
      spotsRemaining: 'Alfa, Beta va Delta laboratoriyalarida 35 ta o\'rindan atigi 3 tasi qoldi.',
      claimSpot: 'O\'rinni band qilish →'
    },
    hero: {
      badge: 'YUQORI STANDARTLI DASTURLASH AKADEMIYASI (8–17 YOSH)',
      titlePart1: 'O\'yin o\'ynovchilarni emas, kelajak muhandislarini tarbiyalaymiz.',
      titleAccent: 'Guruhda qat\'iy 5 tagacha bola',
      titlePart2: 'va har biriga shaxsiy noutbuk.',
      subtitle: 'Smartfonga qaramlikni professional IT-ko\'nikmalarga aylantiramiz: Python, sun\'iy intellekt, Full-Stack veb-tizimlar va kiberxavfsizlik. Birinchi darsdan kafolatlangan natija.',
      bookTrialCta: 'Bepul 45 daqiqalik sinov darsiga yozilish',
      exploreCoursesCta: 'Yo\'nalishlar katalogi',
      calculateRoiCta: 'Qoplaish muddatini hisoblash',
      spotsRemainingBadge: 'Ushbu oyga 35 tadan faqat 3 ta o\'rin qoldi',
      pillarRatio: 'Qat\'iy 5:1 nisbati',
      pillarRatioDesc: 'O\'qituvchi har 6 daqiqada har bir bolaning kodini shaxsan tekshirishga ulguradi.',
      pillarLaptop: '1:1 Shaxsiy ish stansiyasi',
      pillarLaptopDesc: 'Har bir o\'quvchiga ThinkPad P14s yoki MacBook Pro korporativ noutbuki biriktiriladi.',
      pillarPortfolio: 'Tijoriy portfoliyo',
      pillarPortfolioDesc: 'Bitiruvchilar GitHub-da toza kod bilan yozilgan 4 tadan ortiq real loyihaga ega bo\'ladi.',
      pillarIso: 'ISO-9001 metodologiyasi',
      pillarIsoDesc: '8 yoshdan 17 yoshgacha bo\'lgan bolalar uchun xalqaro ta\'lim standarti.'
    },
    calculator: {
      badge: 'MOLIYAVIY-TA\'LIM MODELI',
      title: 'Farzandingizga sarflangan investitsiyaning aniq qaytimi (ROI)',
      subtitle: 'Amaliy IT-ko\'nikmalar, GitHub portfoliyosi va xalqaro universitet stipendiyalarining qiymatini hisoblang.',
      childAgeLabel: 'Bolaning yoshi:',
      studyDurationLabel: 'Rejalashtirilgan o\'qish muddati:',
      monthsUnit: 'oy',
      yearsOldUnit: 'yosh',
      totalInvested: 'O\'qishga sarflanadigan mablag\'',
      estimatedValue: 'Hisoblangan aktivlar qiymati',
      paybackMultiplier: 'Qaytim koeffitsiyenti (ROI)',
      portfolioAsset: 'GitHub portfoliyosini kapitallashtirish',
      portfolioAssetDesc: 'Toza arxitektura bilan real veb-servislar va botlar yaratish.',
      internshipPotential: 'Pullik amaliyotlar salohiyati',
      internshipPotentialDesc: '14 yoshdan katta o\'smirlar uchun real mijozlar sprintlarini bajarish orqali.',
      scholarshipBonus: 'Akademik grantlar uchun qo\'shimcha ballar',
      scholarshipBonusDesc: 'Xakatonlardagi g\'alabalar va yetakchi muhandislardan tavsiyanomalar.',
      ctaNote: 'Ta\'lim xarajati yakuniy loyihani yaratish bosqichidayoq o\'zini to\'liq oqlaydi.',
      bookWithCalculation: 'Ushbu hisob bo\'yicha sinov darsiga yozilish'
    },
    quiz: {
      badge: 'SHAXSIY NAVIGATOR',
      title: 'Farzandingiz uchun eng mos dasturni tanlang',
      subtitle: '3 ta savolga javob bering va mos yo\'nalish hamda bo\'sh ish stansiyasini aniqlang.',
      ageQuestion: '1. Farzandingiz necha yoshda?',
      goalQuestion: '2. Ta\'limdagi asosiy maqsadingiz nima?',
      expQuestion: '3. Dasturlashda avval tajribasi bo\'lganmi?',
      goalGames: 'O\'yinlarni Python orqali o\'z dunyosini yaratishga aylantirish',
      goalWeb: 'Veb-saytlar, bulutli tizimlar va veb-ilovalarni yaratish',
      goalCyber: 'Kiberxavfsizlik, tarmoqlar va hujumlardan himoyalanishni o\'rganish',
      goalRobotics: 'Robotlarni, datchiklarni va mikrosxemalarni (IoT) dasturlash',
      expBeginner: 'Noldan (faqat o\'yin o\'ynaydi va internet ko\'radi)',
      expSome: 'Scratch yoki Minecraft modlari bilan ozgina shug\'ullangan',
      expAdvanced: 'Kod yozib ko\'rgan yoki boshlang\'ich Python-ni biladi',
      recommendedTrack: 'TAVSIYA ETILGAN YO\'NALISH:',
      trackOutcome: 'Yakuniy bitiruv loyihasi:',
      durationLabel: 'Dastur davomiyligi:',
      enrollRecommended: 'Ushbu kursga imtiyozli yozilish'
    },
    courses: {
      badge: 'TA\'LIM YO\'NALISHLARI',
      title: 'Jahon darajasidagi o\'quv dasturlari',
      subtitle: 'Barcha kurslar yosh xususiyatlariga moslashtirilgan va birinchi kundan boshlab kod yozishni o\'rgatadi.',
      filterAll: 'Barcha yo\'nalishlar',
      filterJunior: 'Kichik guruh (8–12 yosh)',
      filterSenior: 'Katta guruh (13–17 yosh)',
      perMonth: '/oyiga',
      monthsDuration: 'oy',
      sessionsWeekly: 'dars/hafta',
      viewSyllabus: 'O\'quv rejasi',
      bookTrialForCourse: 'Kursga sinov darsiga yozilish',
      syllabusModalTitle: 'Kurs o\'quv rejasi',
      syllabusModalSubtitle: 'Boshlang\'ich tushunchalardan to real loyihani nashr etishgacha bo\'lgan qadamlar',
      modulesCount: 'ta modul',
      closeBtn: 'Yopish',
      keyDeliverables: 'Modul natijalari:',
      yearsUnit: 'yosh'
    },
    hardware: {
      badge: 'LABORATORIYA INFRATUZILMASI',
      title: 'Har bir bolaga professional jihozlar',
      subtitle: 'Eski kompyuterlar yo\'q. Har bir bolaga kuchli korporativ ish stansiyasi biriktiriladi.',
      p14sTitle: 'Lenovo ThinkPad P14s Gen 5',
      p14sDesc: 'AMD Ryzen 7 Pro, 32GB operativ xotira, tezkor NVMe xotira. Neyrotarmoqlar va Pygame uchun a\'lo darajada.',
      macbookTitle: 'Apple MacBook Pro 14" M2 Pro',
      macbookDesc: '10 yadroli protsessor, Retina displey. Zamonaviy veb va mobil interfeyslarni ishlab chiqish uchun.',
      zeroSharedPc: '«Umumiy kompyuter yo\'q» qoidasi',
      zeroSharedPcDesc: 'O\'quvchi har doim faqat o\'zining shaxsiy noutbukida o\'z fayllari bilan ishlaydi.',
      securityTag: 'Himoyalangan xavfsiz muhit',
      securityTagDesc: 'Tarmoq trafigini nazorat qilish, ma\'lumotlar xavfsizligi va chalg\'ituvchi tarmoqlarni bloklash.'
    },
    methodology: {
      badge: 'MAM OLTIN STANDARTI',
      title: 'Nega guruhlarni qat\'iy 5 nafar o\'quvchi bilan cheklaymiz',
      subtitle: 'Boshqa maktablar ko\'proq foyda olish uchun 15–20 bolani bitta sinfga yig\'sa, biz har bir bolaning natijasiga e\'tibor qaratamiz.',
      ratioTitle: 'Ustozning 5:1 e\'tibori',
      ratioDesc: 'Ustoz bolaning ishtiyoqi so\'nmasdan oldin xatolarni bir necha soniyada topadi va tushuntiradi.',
      feedbackTitle: 'Chuqur kod-revyu',
      feedbackDesc: 'Jahon sanoati standartlari (PEP-8, ESLint, SOLID) bo\'yicha toza kod yozishni o\'rgatamiz.',
      psychologyTitle: 'Psixologik qulaylik',
      psychologyDesc: 'Kichik guruhda hatto tortinchoq bolalar ham o\'zini erkin his qilib, savol berishdan qo\'rqmaydi.',
      vsStandardTitle: 'Ta\'lim yondashuvlarini taqqoslash',
      vsStandardMAM: 'Maryam Academy (MAM)',
      vsStandardOthers: 'Oddiy kurslar va maktablar'
    },
    roadmap: {
      eyebrow: 'MUVAFFAQIYATGA BOSQICHMA-BOSQICH YO\'L',
      title: 'Farzandingiz 8 oy ichida nimalarni yaratadi',
      subtitle: 'Terminal sintaksisining birinchi qatoridan to sun\'iy intellekt neyrotarmoqlari va to\'liq mahsulotlarni ishga tushirishgacha.',
      m1Tab: '1-oy',
      m2Tab: '2-oy',
      m4Tab: '4-oy',
      m6Tab: '6-oy',
      m8Tab: '8-oy',
      m1Badge: '1-oy: Algoritmik fikrlash asoslari',
      m1Title: 'Birinchi o\'yin va CLI sintaksisi',
      m1Desc: 'O\'zgaruvchilar, shartlar va sikllarni o\'zlashtirish. Shoxlanuvchi syujetga ega matnli CLI kvest o\'yinini yaratish.',
      m1Point1: 'Vizual bloklarsiz sof Python sintaksisi',
      m1Point2: 'Xatolarni mustaqil topish va tuzatish ko\'nikmasi',
      m2Badge: '2-oy: Grafika va fizika',
      m2Title: 'Pygame-da shaxsiy 2D o\'yin mexanizmi',
      m2Desc: 'Vektorli matematika, to\'qnashuvlar fizikasi, tortishish kuchi va 60 FPS silliq sprayt animatsiyalari.',
      m2Point1: 'Sakrash va inersiyaning kinematik fizikasi',
      m2Point2: 'Klasslar va obyektlarning modulli arxitekturasi',
      m4Badge: '4-oy: Sun\'iy intellekt',
      m4Title: 'Aqlli botlar va A* marshrutlash algoritmlari',
      m4Desc: 'Eng qisqa yo\'lni topish algoritmlari hamda boslarning avtonom xulq-atvori mantiqini dasturlash.',
      m4Point1: 'A* evristikasi va vaznli graflar bilan ishlash',
      m4Point2: 'O\'yinchiga moslashuvchan javob beradigan aqlli AI',
      m6Badge: '6-oy: Server qismi va Web API',
      m6Title: 'Tarmoqli multiplayer va bulutli bazalar',
      m6Desc: 'HTTP va WebSocket orqali mijoz-server aloqasi. Rekordlar va profillarni bulutli ma\'lumotlar bazasida saqlash.',
      m6Point1: 'REST API, avtorizatsiya va JSON paketlar almashinuvi',
      m6Point2: 'Bulutli ma\'lumotlar bazasi va o\'yinchilar tahlili',
      m8Badge: '8-oy: Yakuniy loyiha va Demo-kun',
      m8Title: 'Mahsulotni nashr qilish va diplom himoyasi',
      m8Desc: 'Arxitekturani sayqallash, dasturni Windows/macOS uchun yig\'ish va ota-onalar oldida ommaviy himoya qilish.',
      m8Point1: 'GitHub-dagi tayyor ommaviy portfolio loyihasi',
      m8Point2: 'MAM ISO-9001 xalqaro tasdiqlangan sertifikati',
      m8DiplomaTitle: 'MAM dasturiy muhandisi diplomi',
      m8DiplomaDesc: 'Dunyoning istalgan nuqtasida tekshirish mumkin bo\'lgan QR-kodli kriptografik diplom.'
    },
    testimonials: {
      badge: 'OTA-ONALAR FIKRLARI',
      eyebrow: 'OTA-ONALAR FIKRLARI',
      title: 'O\'quvchilarimizning muvaffaqiyat hikoyalari',
      subtitle: 'Bolalarning real natijalari va ota-onalarning samimiy taassurotlari.',
      t1Quote: 'O\'g\'lim YouTube va o\'yinlarda bekorga vaqt o\'tkazishni to\'xtatdi. Endi u Pygame-da fizikani mustaqil dasturlab, o\'yinlarini oilamizga faxr bilan ko\'rsatadi.',
      t1Author: 'Tatyana A.',
      t1Role: 'Markning onasi (10 yosh, Python & AI yo\'nalishi)',
      t2Quote: '5 kishilik mini-guruh — eng to\'g\'ri tanlov. Ustoz har daqiqa yonida turadi, ajratilgan ThinkPad esa uydagi eski noutbuk muammosidan butunlay qutqardi.',
      t2Author: 'Damir Ch.',
      t2Role: 'Amirning otasi (13 yosh, Full-Stack yo\'nalishi)',
      t3Quote: 'Qizim MAM-da to\'plagan loyihalari tufayli nufuzli xalqaro IT-litseyga qabul qilindi. Suhbat chog\'ida komissiya a\'zolari uning kodi sifatidan lol qolishdi.',
      t3Author: 'Fotima Q.',
      t3Role: 'Sofiyaning onasi (15 yosh, CyberSec yo\'nalishi)'
    },
    faq: {
      badge: 'KO\'P SO\'RALADIGAN SAVOLLAR',
      title: 'Ota-onalarni qiziqtirgan asosiy savollarga javoblar',
      subtitle: 'O\'qitish, uskunalar, dars jadvali va sifat kafolatlari haqida barcha muhim ma\'lumotlar.',
      allCategory: 'Barchasi',
      methodologyCategory: 'Metodologiya',
      hardwareCategory: 'Uskunalar',
      economicsCategory: 'Iqtisodiyot',
      scheduleCategory: 'Dars jadvali'
    },
    bottomCta: {
      badge: 'BEPUL SINOV DARSIDAN BOSHLANG',
      title: 'Farzandingiz uchun ish stansiyasini band qiling',
      subtitle: 'Maksimum 5 kishilik kichik guruhda ThinkPad P14s-da 45 daqiqalik amaliyot. Ustoz kuchli tomonlarni aniqlaydi va yo\'l xaritasini tuzadi.',
      bookBtn: 'Sinov darsiga yozilish',
      phone: '+7 (999) 382-90-14',
      guarantee1: '100% bepul va hech qanday majburiyatsiz',
      guarantee2: 'Har bir bolaga 1:1 shaxsiy noutbuk',
      guarantee3: '15 daqiqada birinchi ishlaydigan kod'
    },
    bookingModal: {
      title: '45 daqiqalik sinov darsiga yozilish',
      subtitle: '5 tagacha boladan iborat kichik guruhda individual dars. Barcha uskunalar taqdim etiladi.',
      parentNameLabel: 'Ota-onaning to\'liq ismi *',
      studentNameLabel: 'Bolaning ismi *',
      studentAgeLabel: 'Bolaning yoshi *',
      phoneLabel: 'Telefon raqami (WhatsApp / Telegram) *',
      emailLabel: 'Materiallarni yuborish uchun Email *',
      courseLabel: 'Tanlangan kurs yo\'nalishi',
      preferredTimeLabel: 'Qulay kelish vaqti',
      parentNamePlaceholder: 'Masalan: Nilufar Rahimova',
      studentNamePlaceholder: 'Masalan: Temur',
      phonePlaceholder: '+998 (__) ___-__-__',
      submitBtn: 'Bepul sinov darsiga joyni band qilish',
      guaranteeText: 'Mutlaqo bepul. Sotib olish majburiyati yo\'q. Bola 15 daqiqada birinchi kodini yozadi.',
      successTitle: 'Arizangiz muvaffaqiyatli qabul qilindi!',
      successDesc: 'Ish stansiyasi band qilindi. Kurator vaqtni tasdiqlash uchun 15 daqiqa ichida bog\'lanadi.',
      doneBtn: 'Tushunarli, rahmat!'
    },
    mobileApp: {
      badge: 'ARXETIP 2: MOBIL PORTAL',
      specLabel: 'React Native Spetsifikatsiyasi (iOS / Android)',
      platform: 'React Native spetsifikatsiyasi (iOS / Android)',
      title: 'Ikki tomonlama portal: O\'quvchi va Ota-ona',
      subtitle: 'O\'quvchining interaktiv terminali, kvestlar va ota-ona uchun real vaqtdagi natijalar telemetriyasi.',
      kidRole: 'O\'quvchi rejimi',
      parentRole: 'Ota-ona rejimi',
      roleKid: 'O\'quvchi rejimi',
      roleParent: 'Ota-ona rejimi',
      phoneFrame: 'Smartfon ramkasi',
      wideFrame: 'Keng ko\'rinish',
      wideView: 'Keng ko\'rinish',
      uxSpec: 'UX spetsifikatsiyasi',
      activeProfile: 'Faol profil:',
      tabDashboard: 'Bosh sahifa',
      tabProjects: 'Loyihalar',
      tabSchedule: 'Dars jadvali',
      tabCerts: 'Diplomlar',
      tabLeaderboard: 'Reyting',
      streakLabel: 'kun ketma-ket kod yozish!',
      currentQuest: 'Joriy kod kvesti',
      terminalBtn: 'Terminalni ochish',
      laptopAssigned: 'Biriktirilgan ThinkPad P14s',
      readyStatus: 'Ishga tayyor',
      badgesTitle: 'Muhandislik yutuqlari',
      parentStatusTitle: 'O\'quvchining akademik holati',
      attendanceLabel: 'Davomat ko\'rsatkichi',
      laptopHealthLabel: 'Noutbukning holati',
      mentorFeedbackTitle: 'Ustozning so\'nggi bahosi',
      subscriptionStatus: 'Abonement holati',
      paidStatus: 'TO\'LANGAN',
      consultationBtn: 'Ustoz bilan 10 daqiqalik maslahatga yozilish'
    },
    adminCrm: {
      badge: 'ARXETIP 3: CRM VA AKADEMIYANI BOSHQARISH',
      systemVersion: 'Kampus tizimi v2026.3',
      title: 'Maryam Academy Mission — Boshqaruv Markazi',
      subtitle: '5 o\'rinli guruhlarning to\'lishini nazorat qilish, 1:1 noutbuklar inventarizatsiyasi va diplomlar reyestri.',
      addLeadBtn: 'Yangi o\'quvchini qo\'shish',
      kpiActiveStudents: 'FAOL O\'QUVCHILAR',
      kpiMonthlyRevenue: 'OYLIK TUSHUM',
      kpiRetention: 'O\'QUVCHILARNI SAQLASH (RETENTION)',
      kpiSeatCapacity: 'O\'RINLAR TO\'LISHI',
      kpiMiniGroups: 'KICHIK GURUHLAR (5 KISHI)',
      tabLeads: 'Sinov darslari voronkasi',
      tabGroups: 'Kichik guruhlar (5 o\'rin)',
      tabHardware: '1:1 Noutbuklar va uskunalar',
      tabCertificates: 'Diplomlar reyestri'
    },
    marketing: {
      badge: 'ARXETIP 4: MARKETING VA HUQUQIY MATERIALLAR',
      metaLabel: 'Sotuv metodologiyasi va hujjatlar',
      title: 'Metodologik Baza va Ota-onalar uchun Materiallar',
      subtitle: 'Sinovdan o\'tgan 45 daqiqalik dars ssenariysi (78.5% konversiya), 4 sahifali buklet va rasmiy oferta shartnomasi.',
      printKit: 'To\'plamni chop etish',
      tabScript: '45 daq sinov darsi ssenariysi',
      tabBrochure: 'Ota-onalar uchun buklet',
      tabLegal: 'Oferta shartnomasi va qoidalar'
    },
    footer: {
      aboutTitle: 'Maryam Academy Mission haqida',
      aboutText: 'Yangi avlod xalqaro dasturlash va muhandislik akademiyasi. Hurmat, intizom va yuqori standartlar asosida raqamli kelajak me\'morlarini tarbiyalaymiz.',
      accreditationTitle: 'Sertifikatlash va sifat',
      accreditationText: 'Yevropaning ISO-9001 EdTech standartlariga to\'liq muvofiq. 1:1 shaxsiy ish joyi, ma\'lumotlar xavfsizligi va himoyalangan laboratoriya muhiti.',
      contactTitle: 'Kampus va aloqa',
      address: 'Markaziy kampus, Tyuring, Lavleys va Fon Neyman laboratoriyalari',
      workingHours: 'Dush-Yak: 09:00 – 20:30',
      rightsReserved: 'Barcha huquqlar himoyalangan.',
      language: 'Interfeys tili:',
      desc: '8–17 yoshdagi bolalar va o\'smirlar uchun xalqaro IT-muhandislik akademiyasi. 5 kishilik mini-guruhlar, 1:1 noutbuklar va kelajak kasblariga tayyorgarlik.',
      accreditation: '✓ ISO-9001:2026 ta\'lim sifati bo\'yicha xalqaro standart',
      tracksTitle: 'Ta\'lim yo\'nalishlari',
      campusesTitle: 'Kampus va laboratoriyalar',
      hubName: 'Robototexnika va AI markaziy habi',
      addressLine1: 'Tyuring IT-Parki, A binosi, 402-xona',
      addressLine2: 'Lavleys, Tyuring va Fon Neyman laboratoriyalari',
      hours: 'Ish tartibi: Dush–Yak, 09:00 – 21:00',
      admissions: 'Qabul komissiyasi',
      standardsTitle: 'Standartlar va nizomlar',
      privacyData: 'Shaxsiy ma\'lumotlarni himoya qilish siyosati',
      hardwarePolicy: '1:1 uskunadan foydalanish reglamenti',
      accessControl: 'Kampus xavfsizligi va nazorat tartibi',
      refundPolicy: 'Moliyaviy kafolatlar va qaytarish shartlari',
      equalAccess: 'Inklyuzivlik va grantlar to\'g\'risidagi nizom',
      copyright: '© 2026 Maryam Academy Mission. Barcha huquqlar himoyalangan.',
      privacyPolicy: 'Maxfiylik siyosati',
      termsOfService: 'Ommaviy oferta shartnomasi',
      labRules: 'Laboratoriya qoidalari'
    }
  }
};
