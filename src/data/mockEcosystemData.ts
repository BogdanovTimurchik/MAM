import { Course, MiniGroup, Student, HardwareDevice, Lead, Certificate, FAQItem } from '../types';

export const COURSES_DATA: Course[] = [
  {
    id: 'python-ai-kids',
    title: 'Python, Нейросети и Архитектура Игр на ИИ',
    slug: 'python-ai-game-architecture',
    tagline: 'Превратите увлечение играми в написание настоящего кода на Python, разработку автономных алгоритмов и игровых движков.',
    ageRange: '8 – 12 лет',
    minAge: 8,
    maxAge: 12,
    level: 'Начальный',
    durationMonths: 6,
    sessionsPerWeek: 2,
    hoursPerSession: 1.5,
    monthlyTuitionUSD: 240,
    tags: ['Python 3.12', 'PyGame CE', 'Основы OpenCV', 'Алгоритмика'],
    gradient: 'from-emerald-500 to-teal-700',
    badge: 'Флагманский трек для младших',
    outcomeProject: 'Опубликованный 2D-платформер с нейросетевым поиском путей врагов и облачной таблицей рекордов',
    curriculumModules: [
      {
        title: 'Основы синтаксиса и алгоритмов',
        weeks: 'Недели 1–4',
        deliverables: ['Переменные, структуры памяти и ветвления', 'Интерактивная текстовая CLI-игра', 'Механика циклов и математические боевые арены']
      },
      {
        title: 'ООП, Физика и Графика',
        weeks: 'Недели 5–12',
        deliverables: ['Графические спрайтовые системы Pygame', 'Детекция коллизий и кинематическая гравитация', 'Интеграция модульного звукового синтезатора']
      },
      {
        title: 'Автономная логика и ИИ ботов',
        weeks: 'Недели 13–20',
        deliverables: ['Алгоритмы поиска путей A*', 'Конечные автоматы (FSM) для боссов', 'Сохранение рекордов в файловых системах JSON']
      },
      {
        title: 'Итоговый выпускной проект и Демо-день',
        weeks: 'Недели 21–24',
        deliverables: ['Сборка в исполняемый файл для Windows/macOS', 'Публичная защита проекта перед родителями и менторами', 'Публикация в глобальную галерею MAM']
      }
    ],
    hardwareRequirements: 'Персональная рабочая станция ThinkPad P14s (Ryzen 7 Pro / 32GB RAM / Ubuntu Linux LTS)'
  },
  {
    id: 'fullstack-web-pro',
    title: 'Full-Stack Веб-разработка и Облачные Системы',
    slug: 'fullstack-web-engineering',
    tagline: 'От современного семантического фронтенда до облачных REST микросервисов и баз данных PostgreSQL.',
    ageRange: '13 – 17 лет',
    minAge: 13,
    maxAge: 17,
    level: 'Средний',
    durationMonths: 8,
    sessionsPerWeek: 2,
    hoursPerSession: 2.0,
    monthlyTuitionUSD: 280,
    tags: ['TypeScript', 'React 19', 'Node.js', 'PostgreSQL', 'Docker'],
    gradient: 'from-indigo-500 to-blue-700',
    badge: 'Индустриальный стандарт',
    outcomeProject: 'Полнофункциональный SaaS-сервис с авторизацией, базой данных ORM и автоматическим CI/CD деплоем',
    curriculumModules: [
      {
        title: 'Современные реактивные интерфейсы',
        weeks: 'Недели 1–6',
        deliverables: ['Семантический HTML5, CSS Grid и Tailwind', 'Строгая типизация TypeScript и компоненты React', 'Клиентский роутинг и асинхронное состояние']
      },
      {
        title: 'Архитектура бэкенда и разработка API',
        weeks: 'Недели 7–16',
        deliverables: ['RESTful эндпоинты Express.js', 'Безопасная аутентификация JWT и сессии', 'Реляционные схемы PostgreSQL и миграции']
      },
      {
        title: 'DevOps, Контейнеризация и Облачный хостинг',
        weeks: 'Недели 17–26',
        deliverables: ['Многоэтапные сборки Docker', 'Пайплайны тестирования GitHub Actions', 'Продакшн деплой в облачную контейнерную среду']
      },
      {
        title: 'Коммерческий клиентский спринт',
        weeks: 'Недели 27–32',
        deliverables: ['Создание реального веб-портала для локального бизнеса', 'Ревью кода с ведущими инженерами', 'Подтвержденный репозиторий GitHub в портфолио']
      }
    ],
    hardwareRequirements: 'Персональный ноутбук Apple MacBook Pro M2 или станция ThinkPad P14s'
  },
  {
    id: 'cyber-defense-security',
    title: 'Кибербезопасность, Сетевые Протоколы и Этичный Хакинг',
    slug: 'cyber-defense-ethical-hacking',
    tagline: 'Освойте фундамент безопасности, анализ пакетов Wireshark, настройку файрволов и участие в CTF-соревнованиях.',
    ageRange: '12 – 16 лет',
    minAge: 12,
    maxAge: 16,
    level: 'Средний',
    durationMonths: 6,
    sessionsPerWeek: 2,
    hoursPerSession: 2.0,
    monthlyTuitionUSD: 290,
    tags: ['Kali Linux', 'Wireshark', 'Bash-скрипты', 'Криптография', 'CTF'],
    gradient: 'from-cyan-500 to-emerald-700',
    badge: 'Высокий спрос',
    outcomeProject: 'Защищенный изолированный периметр безопасности Linux с отчетом аудита уязвимостей',
    curriculumModules: [
      {
        title: 'Сетевые топологии и анализ протоколов',
        weeks: 'Недели 1–6',
        deliverables: ['7-уровневая модель OSI в анализе дампов Wireshark', 'Рукопожатия TCP/IP, защита от DNS-спуфинга', 'Подсети и конфигурация файрволов']
      },
      {
        title: 'Администрирование Linux и автоматизация Bash',
        weeks: 'Недели 7–14',
        deliverables: ['Права доступа POSIX, задачи cron, SSH-ключи', 'Скрипты анализа логов и поиск аномалий', 'Сканирование уязвимостей в OpenVAS']
      },
      {
        title: 'Безопасность веб-приложений и OWASP Top 10',
        weeks: 'Недели 15–20',
        deliverables: ['Защита от SQL-инъекций и санитизация ввода', 'Предотвращение атак XSS и CSRF', 'Внутренний турнир Capture the Flag (CTF)']
      },
      {
        title: 'Выпускной экзамен Кибер-Кадета',
        weeks: 'Недели 21–24',
        deliverables: ['Независимый аудит тестовой корпоративной сети', 'Официальный отчет о тестировании на проникновение', 'Сертификат этичного специалиста по безопасности']
      }
    ],
    hardwareRequirements: 'Изолированная киберлабораторная станция MAM с сетевыми анализаторами Dual-NIC'
  },
  {
    id: 'mobile-app-engineering',
    title: 'Мобильная Разработка и Системы React Native',
    slug: 'mobile-app-engineering',
    tagline: 'Создавайте нативные приложения для iOS и Android с поддержкой камеры, сенсоров, пуш-уведомлений и публикацией в сторы.',
    ageRange: '11 – 15 лет',
    minAge: 11,
    maxAge: 15,
    level: 'Начальный',
    durationMonths: 6,
    sessionsPerWeek: 2,
    hoursPerSession: 1.5,
    monthlyTuitionUSD: 260,
    tags: ['React Native', 'Expo', 'Мобильный UX', 'Firebase', 'API'],
    gradient: 'from-amber-500 to-orange-700',
    badge: 'Быстрый старт',
    outcomeProject: 'Опубликованное мобильное приложение-утилита в TestFlight и Google Play Internal',
    curriculumModules: [
      {
        title: 'Мобильный UX и базовые компоненты',
        weeks: 'Недели 1–6',
        deliverables: ['Сенсорные жесты, виртуализация списков, Flexbox', 'Иерархия компонентов и дизайн-системы', 'Доступ к камере и датчикам акселерометра']
      },
      {
        title: 'Управление состоянием и Синхронизация с облаком',
        weeks: 'Недели 7–14',
        deliverables: ['Офлайн-кэширование и локальная база SQLite', 'Интеграция базы данных реального времени', 'Триггеры push-уведомлений']
      },
      {
        title: 'Подготовка и релиз в App Store',
        weeks: 'Недели 15–24',
        deliverables: ['Иконки, каталоги ассетов и сплэш-экраны', 'Бета-тестирование среди семьи и одноклассников', 'Официальная защита диплома']
      }
    ],
    hardwareRequirements: 'Рабочая станция MAM + тестовые планшеты iPad/Android'
  },
  {
    id: 'ai-robotics-iot',
    title: 'Встраиваемая Робототехника, Edge AI и IoT',
    slug: 'ai-robotics-iot-hardware',
    tagline: 'Программируйте микроконтроллеры ESP32, камеры машинного зрения, LiDAR датчики и автоматизированные роботы.',
    ageRange: '10 – 14 лет',
    minAge: 10,
    maxAge: 14,
    level: 'Средний',
    durationMonths: 6,
    sessionsPerWeek: 2,
    hoursPerSession: 2.0,
    monthlyTuitionUSD: 275,
    tags: ['C++', 'ESP32', 'MicroPython', 'Компьютерное зрение', 'Сенсоры'],
    gradient: 'from-purple-500 to-indigo-700',
    badge: 'Оборудование включено',
    outcomeProject: 'Автономный робот-вездеход с распознаванием препятствий, движением по линии и бортовой камерой зрения',
    curriculumModules: [
      {
        title: 'Схемотехника и Архитектура микроконтроллеров',
        weeks: 'Недели 1–6',
        deliverables: ['Макетные платы, закон Ома, драйверы моторов ШИМ', 'Пины GPIO ESP32 и снятие показаний датчиков', 'Интерфейсы дисплеев I2C']
      },
      {
        title: 'Автономная навигация и Кинематика',
        weeks: 'Недели 7–14',
        deliverables: ['Алгоритмы ультразвукового измерения дистанции', 'ПИД-регуляторы скорости и рулевого управления', 'Беспроводная телеметрия через WebSocket']
      },
      {
        title: 'Машинное зрение Edge AI и Финал робототехники',
        weeks: 'Недели 15–24',
        deliverables: ['Трекинг цвета и лиц бортовой камерой', 'Гран-при роботов MAM: гонка с препятствиями', 'Подарочный набор электронных модулей выпускника домой']
      }
    ],
    hardwareRequirements: 'Индивидуальный аппаратный набор MAM (ESP32, моторы, датчики) предоставляется бесплатно'
  }
];

export const STUDENTS_DATA: Student[] = [
  {
    id: 'std-101',
    fullName: 'Райян Аль-Мансур',
    age: 11,
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&q=80',
    parentName: 'Тарик Аль-Мансур',
    parentPhone: '+7 (999) 382-9014',
    parentEmail: 'tariq.mansoor@example.com',
    courseId: 'python-ai-kids',
    groupId: 'grp-py-01',
    currentLevel: 4,
    xpPoints: 3450,
    streakDays: 19,
    attendanceRate: 100,
    laptopId: 'MAM-DEV-004',
    joinedDate: '2026-04-12',
    recentProjects: [
      {
        title: 'CyberAsteroids 2026',
        description: 'Ретро-космошутер с системой частиц и прогрессивной кривой сложности.',
        stars: 5,
        completionDate: '2026-08-20',
        demoUrl: 'https://mam-arcade.internal/demo/cyberasteroids'
      },
      {
        title: 'Лабиринт с алгоритмом A*',
        description: 'Визуализатор эвристического обхода графа через динамические препятствия.',
        stars: 5,
        completionDate: '2026-09-10'
      }
    ],
    mentorNotes: [
      {
        date: '2026-09-15',
        mentor: 'Инж. Сара Дженкинс (Главный архитектор Python)',
        note: 'Райян продемонстрировал превосходное алгоритмическое мышление. Самостоятельно отрефакторил вложенный цикл в чистую функцию.',
        rating: 5
      },
      {
        date: '2026-09-08',
        mentor: 'Инж. Сара Дженкинс',
        note: 'Завершил задачи спринта на 20 минут раньше группы. Помог сокурснику Зейну с логикой маски коллизий спрайтов.',
        rating: 5
      }
    ]
  },
  {
    id: 'std-102',
    fullName: 'София Чэнь',
    age: 15,
    avatar: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=150&q=80',
    parentName: 'Давид Чэнь',
    parentPhone: '+7 (999) 491-8820',
    parentEmail: 'dchen.tech@example.com',
    courseId: 'fullstack-web-pro',
    groupId: 'grp-fs-02',
    currentLevel: 6,
    xpPoints: 5820,
    streakDays: 34,
    attendanceRate: 98,
    laptopId: 'MAM-MAC-012',
    joinedDate: '2026-02-05',
    recentProjects: [
      {
        title: 'EchoCommunity SaaS',
        description: 'Портал волонтерских инициатив с бэкендом на Node.js и запросами к PostgreSQL.',
        stars: 5,
        completionDate: '2026-09-02'
      }
    ],
    mentorNotes: [
      {
        date: '2026-09-18',
        mentor: 'Алекс Ривера (Staff Full-Stack Инженер)',
        note: 'София освоила мультиконтейнерную оркестрацию Docker Compose. Готова к тесту на коммерческую стажировку.',
        rating: 5
      }
    ]
  },
  {
    id: 'std-103',
    fullName: 'Зайнаб Касим',
    age: 13,
    avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=150&q=80',
    parentName: 'Фара Касим',
    parentPhone: '+7 (999) 203-4921',
    parentEmail: 'farah.q@example.com',
    courseId: 'cyber-defense-security',
    groupId: 'grp-sec-01',
    currentLevel: 5,
    xpPoints: 4120,
    streakDays: 22,
    attendanceRate: 96,
    laptopId: 'MAM-SEC-008',
    joinedDate: '2026-03-10',
    recentProjects: [
      {
        title: 'Ловушка пакетов Zero-Day',
        description: 'Скрипт инспекции сетевых аномалий Wireshark при всплесках широковещания ARP.',
        stars: 5,
        completionDate: '2026-08-28'
      }
    ],
    mentorNotes: [
      {
        date: '2026-09-14',
        mentor: 'Кап. Маркус Вэнс (Руководитель киберзащиты)',
        note: 'Зайнаб заняла 1 место во внутреннем турнире по реверс-инжинирингу CTF.',
        rating: 5
      }
    ]
  },
  {
    id: 'std-104',
    fullName: 'Кэндзи Сато',
    age: 10,
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&q=80',
    parentName: 'Юки Сато',
    parentPhone: '+7 (999) 773-1940',
    parentEmail: 'yuki.s@example.com',
    courseId: 'python-ai-kids',
    groupId: 'grp-py-01',
    currentLevel: 3,
    xpPoints: 2890,
    streakDays: 14,
    attendanceRate: 100,
    laptopId: 'MAM-DEV-005',
    joinedDate: '2026-05-18',
    recentProjects: [
      {
        title: 'Pixel Dino Runner',
        description: 'Бесконечный раннер с уклонением от препятствий и пиксельной анимацией.',
        stars: 4,
        completionDate: '2026-09-01'
      }
    ],
    mentorNotes: [
      {
        date: '2026-09-15',
        mentor: 'Инж. Сара Дженкинс',
        note: 'Кэндзи развил отличную скорость печати кода и самостоятельность в отладке ошибок.',
        rating: 5
      }
    ]
  },
  {
    id: 'std-105',
    fullName: 'Амина Эль-Сайед',
    age: 12,
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&q=80',
    parentName: 'Карим Эль-Сайед',
    parentPhone: '+7 (999) 902-1144',
    parentEmail: 'k.elsayed@example.com',
    courseId: 'ai-robotics-iot',
    groupId: 'grp-rob-01',
    currentLevel: 4,
    xpPoints: 3780,
    streakDays: 18,
    attendanceRate: 100,
    laptopId: 'MAM-ROB-002',
    joinedDate: '2026-04-02',
    recentProjects: [
      {
        title: 'LIDAR Rover v2',
        description: 'Автономный гусеничный робот с ультразвуковой телеметрией и объездом препятствий.',
        stars: 5,
        completionDate: '2026-09-12'
      }
    ],
    mentorNotes: [
      {
        date: '2026-09-16',
        mentor: 'Д-р Эмиль Ковач (Научный сотрудник по робототехнике)',
        note: 'Безупречно спаяла шилд управления двигателями. Выдающаяся инженерная интуиция.',
        rating: 5
      }
    ]
  }
];

export const MINI_GROUPS_DATA: MiniGroup[] = [
  {
    id: 'grp-py-01',
    code: 'MAM-PY-A1',
    courseId: 'python-ai-kids',
    courseTitle: 'Python, Нейросети и Архитектура Игр на ИИ',
    mentorName: 'Инж. Сара Дженкинс',
    mentorAvatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=150&q=80',
    daySchedule: 'Вторник и Четверг',
    timeSlot: '16:00 – 17:30',
    labRoom: 'Лаборатория Альфа (Зал Тьюринга)',
    maxCapacity: 5,
    studentIds: ['std-101', 'std-104', 'std-107', 'std-108'],
    status: 'Active',
    currentModule: 'Модуль 3: Поиск путей A* и Конечные автоматы'
  },
  {
    id: 'grp-fs-02',
    code: 'MAM-FS-B2',
    courseId: 'fullstack-web-pro',
    courseTitle: 'Full-Stack Веб-разработка и Облачные Системы',
    mentorName: 'Алекс Ривера',
    mentorAvatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&q=80',
    daySchedule: 'Понедельник и Среда',
    timeSlot: '17:30 – 19:30',
    labRoom: 'Лаборатория Бета (Зал Лавлейс)',
    maxCapacity: 5,
    studentIds: ['std-102', 'std-109', 'std-110', 'std-111', 'std-112'],
    status: 'Active',
    currentModule: 'Модуль 3: Схемы PostgreSQL и Сборки Docker'
  },
  {
    id: 'grp-sec-01',
    code: 'MAM-SEC-C1',
    courseId: 'cyber-defense-security',
    courseTitle: 'Кибербезопасность и Этичный Хакинг',
    mentorName: 'Кап. Маркус Вэнс',
    mentorAvatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=150&q=80',
    daySchedule: 'Среда и Пятница',
    timeSlot: '16:30 – 18:30',
    labRoom: 'Лаборатория Гамма (Кибер-песочница)',
    maxCapacity: 5,
    studentIds: ['std-103', 'std-113', 'std-114'],
    status: 'Active',
    currentModule: 'Модуль 2: Пакеты Wireshark и Защитные Файрволы'
  },
  {
    id: 'grp-rob-01',
    code: 'MAM-ROB-D1',
    courseId: 'ai-robotics-iot',
    courseTitle: 'Встраиваемая Робототехника, Edge AI и IoT',
    mentorName: 'Д-р Эмиль Ковач',
    mentorAvatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=150&q=80',
    daySchedule: 'Суббота',
    timeSlot: '10:00 – 14:00 (Интенсив)',
    labRoom: 'Лаборатория Дельта (Фаундри)',
    maxCapacity: 5,
    studentIds: ['std-105', 'std-115', 'std-116', 'std-117'],
    status: 'Active',
    currentModule: 'Модуль 2: Ультразвуковые датчики и ПИД-кинематика'
  },
  {
    id: 'grp-mob-01',
    code: 'MAM-MOB-E1',
    courseId: 'mobile-app-engineering',
    courseTitle: 'Мобильная Разработка и React Native',
    mentorName: 'Елена Ростова',
    mentorAvatar: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=150&q=80',
    daySchedule: 'Вторник и Четверг',
    timeSlot: '18:00 – 19:30',
    labRoom: 'Лаборатория Бета (Зал Лавлейс)',
    maxCapacity: 5,
    studentIds: ['std-118', 'std-119', 'std-120'],
    status: 'Forming',
    currentModule: 'Старт 2 октября: Вводная сессия и настройка Expo CLI'
  }
];

export const HARDWARE_INVENTORY: HardwareDevice[] = [
  {
    id: 'MAM-DEV-004',
    serialNumber: 'LNV-P14S-2026-8841',
    model: 'Lenovo ThinkPad P14s Gen 5 (Ryzen 7 Pro / 32GB / Ubuntu LTS)',
    specs: 'AMD Ryzen 7 Pro 8840HS, 32GB LPDDR5x, 1TB NVMe Gen4, WUXGA IPS 400 nits',
    assignedStudentId: 'std-101',
    assignedStudentName: 'Райян Аль-Мансур',
    labStation: 'Станция Альфа-01',
    batteryHealthPercent: 99,
    osStatus: 'Зашифровано и проверено',
    status: 'In-Lab Assigned',
    lastAuditDate: '2026-09-18'
  },
  {
    id: 'MAM-DEV-005',
    serialNumber: 'LNV-P14S-2026-8842',
    model: 'Lenovo ThinkPad P14s Gen 5 (Ryzen 7 Pro / 32GB / Ubuntu LTS)',
    specs: 'AMD Ryzen 7 Pro 8840HS, 32GB LPDDR5x, 1TB NVMe Gen4',
    assignedStudentId: 'std-104',
    assignedStudentName: 'Кэндзи Сато',
    labStation: 'Станция Альфа-02',
    batteryHealthPercent: 98,
    osStatus: 'Зашифровано и проверено',
    status: 'In-Lab Assigned',
    lastAuditDate: '2026-09-18'
  },
  {
    id: 'MAM-MAC-012',
    serialNumber: 'APL-MBP14-M2-9901',
    model: 'Apple MacBook Pro 14" M2 Pro (16GB RAM / 512GB SSD)',
    specs: 'Apple M2 Pro 10 ядер CPU, 16 ядер GPU, 16GB Unified Memory, Liquid Retina XDR',
    assignedStudentId: 'std-102',
    assignedStudentName: 'София Чэнь',
    labStation: 'Станция Бета-03',
    batteryHealthPercent: 97,
    osStatus: 'Зашифровано и проверено',
    status: 'In-Lab Assigned',
    lastAuditDate: '2026-09-19'
  },
  {
    id: 'MAM-SEC-008',
    serialNumber: 'LNV-T14-SEC-3321',
    model: 'ThinkPad T14s Dual-NIC Защищенная станция',
    specs: 'Intel Core i7-1370P vPro, 32GB RAM, Аппаратный TAP-интерфейс, Kali Enterprise',
    assignedStudentId: 'std-103',
    assignedStudentName: 'Зайнаб Касим',
    labStation: 'Станция Гамма-02',
    batteryHealthPercent: 96,
    osStatus: 'Зашифровано и проверено',
    status: 'In-Lab Assigned',
    lastAuditDate: '2026-09-17'
  },
  {
    id: 'MAM-ROB-002',
    serialNumber: 'DELL-XPS15-ROB-771',
    model: 'Dell XPS 15 Станция + Лабораторный стенд ESP32',
    specs: 'Intel Core i9, 32GB RAM, RTX 4060, Логический анализатор USB-C',
    assignedStudentId: 'std-105',
    assignedStudentName: 'Амина Эль-Сайед',
    labStation: 'Станция Дельта-01',
    batteryHealthPercent: 94,
    osStatus: 'Зашифровано и проверено',
    status: 'In-Lab Assigned',
    lastAuditDate: '2026-09-18'
  },
  {
    id: 'MAM-DEV-006',
    serialNumber: 'LNV-P14S-2026-8843',
    model: 'Lenovo ThinkPad P14s Gen 5 (Ryzen 7 Pro / 32GB)',
    specs: 'AMD Ryzen 7 Pro 8840HS, 32GB LPDDR5x, 1TB NVMe Gen4',
    labStation: 'Станция Альфа-05 (Резерв)',
    batteryHealthPercent: 100,
    osStatus: 'Зашифровано и проверено',
    status: 'Available',
    lastAuditDate: '2026-09-20'
  },
  {
    id: 'MAM-MAC-015',
    serialNumber: 'APL-MBP14-M2-9905',
    model: 'Apple MacBook Pro 14" M2 Pro',
    specs: 'Apple M2 Pro 10 ядер CPU, 16GB Unified Memory',
    labStation: 'Станция Бета-05',
    batteryHealthPercent: 100,
    osStatus: 'Зашифровано и проверено',
    status: 'Available',
    lastAuditDate: '2026-09-20'
  }
];

export const INITIAL_LEADS: Lead[] = [
  {
    id: 'lead-801',
    parentName: 'Дмитрий Волков',
    studentName: 'Максим Волков',
    studentAge: 11,
    phone: '+7 (999) 749-3320',
    email: 'd.volkov@example.com',
    interestedCourseId: 'python-ai-kids',
    preferredSlot: 'Вторник 16:00 (Лаб Альфа)',
    stage: 'Trial Booked',
    notes: 'Отец работает в IT. Хочет перенаправить интерес сына с видеоигр в профессиональное программирование.',
    createdAt: '2026-09-18',
    trialDate: '2026-09-23 16:00',
    dealValue: 1440
  },
  {
    id: 'lead-802',
    parentName: 'Надежда Торн',
    studentName: 'Майя Торн',
    studentAge: 14,
    phone: '+7 (999) 881-2245',
    email: 'nadia.thorne@example.com',
    interestedCourseId: 'fullstack-web-pro',
    preferredSlot: 'Понедельник 17:30 (Лаб Бета)',
    stage: 'New Lead',
    notes: 'Готовит портфолио для поступления на летнюю программу профильного колледжа.',
    createdAt: '2026-09-20',
    dealValue: 2240
  },
  {
    id: 'lead-803',
    parentName: 'Омар Фарук',
    studentName: 'Хамза Фарук',
    studentAge: 13,
    phone: '+7 (999) 302-8811',
    email: 'omar.farooq@example.com',
    interestedCourseId: 'cyber-defense-security',
    preferredSlot: 'Среда 16:30',
    stage: 'Trial Completed',
    notes: 'Пробный урок прошел великолепно. Решил 100% логических задач в терминале. Готовы подписать договор.',
    createdAt: '2026-09-14',
    trialDate: '2026-09-17 16:30',
    dealValue: 1740
  },
  {
    id: 'lead-804',
    parentName: 'Анна Ким',
    studentName: 'Лука Ким',
    studentAge: 10,
    phone: '+7 (999) 441-9923',
    email: 'grace.kim@example.com',
    interestedCourseId: 'python-ai-kids',
    preferredSlot: 'Четверг 16:00',
    stage: 'Enrolled',
    notes: 'Подписан договор на 6 месяцев. Закреплен ноутбук ThinkPad MAM-DEV-005.',
    createdAt: '2026-09-08',
    trialDate: '2026-09-12 16:00',
    dealValue: 1440
  },
  {
    id: 'lead-805',
    parentName: 'Карлос Мендоса',
    studentName: 'Матео Мендоса',
    studentAge: 12,
    phone: '+7 (999) 662-8890',
    email: 'cmendoza@example.com',
    interestedCourseId: 'ai-robotics-iot',
    preferredSlot: 'Суббота 10:00',
    stage: 'New Lead',
    notes: 'Увлечен роботами Lego Mindstorms, хочет освоить реальный C++ и плату ESP32.',
    createdAt: '2026-09-19',
    dealValue: 1650
  }
];

export const CERTIFICATES_DATA: Certificate[] = [
  {
    id: 'cert-2026-001',
    certificateNumber: 'MAM-CERT-2026-0891',
    studentName: 'София Чэнь',
    courseName: 'Full-Stack Веб-разработка и Облачные Системы',
    issueDate: '15 сентября 2026',
    mentorName: 'Алекс Ривера (Staff Архитектор)',
    gradeScore: 'С отличием (98.4%)',
    verificationCode: 'VERIFIED-MAM-7729-CHEN',
    verified: true
  },
  {
    id: 'cert-2026-002',
    certificateNumber: 'MAM-CERT-2026-0892',
    studentName: 'Райян Аль-Мансур',
    courseName: 'Основы Python и Алгоритмическая Физика',
    issueDate: '28 августа 2026',
    mentorName: 'Инж. Сара Дженкинс',
    gradeScore: 'Высшая оценка (96.8%)',
    verificationCode: 'VERIFIED-MAM-3310-RAYYAN',
    verified: true
  },
  {
    id: 'cert-2026-003',
    certificateNumber: 'MAM-CERT-2026-0893',
    studentName: 'Зайнаб Касим',
    courseName: 'Защитные Сети и Анализ Пакетов',
    issueDate: '14 августа 2026',
    mentorName: 'Кап. Маркус Вэнс',
    gradeScore: 'Первый класс с отличием (99.1%)',
    verificationCode: 'VERIFIED-MAM-9942-ZAINAB',
    verified: true
  }
];

export const FAQS_DATA: FAQItem[] = [
  {
    id: 'faq-1',
    question: 'Почему в Академии MAM действует жесткий лимит строго до 5 учеников в группе?',
    category: 'Методология',
    answer: 'Обычные школы программирования набирают по 15–25 детей в класс или Zoom, где преподаватель физически успевает помочь лишь 1–2 активным ребятам, а остальные застревают на ошибках синтаксиса и теряют мотивацию. В Maryam Academy Mission норматив 5:1 гарантирует, что опытный инженер проводит код-ревью строк вашего ребенка каждые 6–8 минут. Ни один ученик не остается без внимания.'
  },
  {
    id: 'faq-2',
    question: 'Нужно ли ребенку приносить свой собственный ноутбук на занятия в лабораторию?',
    category: 'Оборудование',
    answer: 'Нет. За каждым зачисленным учеником закрепляется персональная корпоративная рабочая станция (Lenovo ThinkPad P14s Gen 5 или Apple MacBook Pro 14" M2 Pro) с быстрым NVMe-накопителем, изолированной средой разработки Linux/macOS и политиками безопасности. Эта же машина зарезервирована за вашим ребенком на каждом занятии без необходимости сложной домашней настройки.'
  },
  {
    id: 'faq-3',
    question: 'Как рассчитывается экономическая окупаемость обучения за 8 месяцев?',
    category: 'Экономика',
    answer: 'К 6–8 месяцу обучения студенты MAM создают работающие коммерческие веб-приложения, автоматизированных ботов или IoT-прототипы. Это дает реальное преимущество при отборе на оплачиваемые стажировки, победы в хакатонах и получение академических стипендий (в среднем от $3,000 до $12,000 в зарубежные и профильные вузы). В отличие от обычных репетиторов, MAM дает подтвержденное портфолио GitHub и навыки, окупающие затраты на обучение уже с первых прикладных результатов.'
  },
  {
    id: 'faq-4',
    question: 'У моего ребенка нет никакого опыта в кодинге. Не будет ли программа слишком сложной?',
    category: 'Методология',
    answer: 'Вовсе нет. Более 70% наших успешных выпускников начинали с нуля, не имея навыка быстрой слепой печати. Наша авторская пошаговая методика сначала формирует визуальную логику алгоритмов, а затем плавно переходит к настоящему синтаксису кода. Уже на бесплатном 45-минутном пробном уроке ваш ребенок напишет и запустит свою первую программу за первые 12 минут.'
  },
  {
    id: 'faq-5',
    question: 'Не помешает ли интенсивный курс успеваемости в обычной школе?',
    category: 'Расписание',
    answer: 'Напротив: 94% родителей отмечают заметное улучшение оценок по математике, логике и английскому языку уже через 60 дней. Программирование учит структурированной декомпозиции сложных задач, что напрямую развивает дисциплину, концентрацию и школьные результаты.'
  },
  {
    id: 'faq-6',
    question: 'Что произойдет, если семья уедет в отпуск или ребенок заболеет?',
    category: 'Расписание',
    answer: 'Благодаря мини-группам из 5 человек наставник ведет персональный журнал прогресса каждого ученика. Пропущенное занятие можно бесплатно отработать в параллельной мини-группе или на индивидуальной 1-на-1 консультации с наставником.'
  }
];

export const TRIAL_LESSON_FRAMEWORK = {
  durationMinutes: 45,
  targetConversionRate: '78.5%',
  stages: [
    {
      minuteRange: '00:00 – 05:00',
      title: 'Теплый прием, контакт с оборудованием и микро-айсбрейкер',
      mentorAction: 'Встретить родителя и ученика, проводить в лабораторию Тьюринга. Посадить ребенка за рабочую станцию ThinkPad/MacBook, где на экране блокировки уже светится его имя.',
      dialogueScript: '«Добро пожаловать в лабораторию MAM, [Имя ученика]. Видишь табличку со своим именем на этой станции? Сегодня ты не просто играешь — ты главный инженер проекта. Давай запустим твой движок.»',
      parentPsychology: 'Снимает скепсис родителя об академической серьезности. Разительный контраст с детскими игровыми комнатами.'
    },
    {
      minuteRange: '05:00 – 15:00',
      title: 'Первая победа в коде (10 минут до первого результата)',
      mentorAction: 'Помочь ребенку набрать первые 4 строки кода на Python или JavaScript в редакторе VS Code. Запустить терминал. Продемонстрировать мгновенный текстовый вывод и звуковой сигнал.',
      dialogueScript: '«Ты только что заставил 8 ядер кремниевого процессора подчиниться твоей команде. А теперь добавим победный звуковой сигнал, когда ты введешь секретный ключ.»',
      parentPsychology: 'Родитель видит искренний блеск в глазах ребенка и полную концентрацию; страх "у меня не получится" моментально улетучивается.'
    },
    {
      minuteRange: '15:00 – 30:00',
      title: 'Кастомизация мини-игры и взлом игровой физики',
      mentorAction: 'Открыть подготовленный проект игры. Ребенок в реальном времени меняет гравитацию, скорость прыжка персонажа и частоту появления врагов.',
      dialogueScript: '«Смотри, что произойдет, если изменить гравитацию с 9.8 на 2.1. Прыгай! Теперь твой герой прыгает как на Луне. Сможешь добавить турбо-ускорение?»',
      parentPsychology: 'Родитель понимает: ребенок перестал быть пассивным потребителем игр и стал их создателем.'
    },
    {
      minuteRange: '30:00 – 38:00',
      title: 'Презентация результата родителю самим учеником',
      mentorAction: 'Повернуть экран к родителю. Ученик с гордостью запускает свою модификацию игры и объясняет, как он решил баг.',
      dialogueScript: '«Тарик, посмотрите, что ваш сын создал за последние 25 минут. Райян, покажи папе, как ты запрограммировал множитель очков.»',
      parentPsychology: 'Пик эмоционального воодушевления. Глубокая родительская гордость за технический потенциал своего ребенка.'
    },
    {
      minuteRange: '38:00 – 45:00',
      title: 'Диагностическая оценка и бронь места в мини-группе',
      mentorAction: 'Вручить родителю распечатанную диагностическую карту. Показать заполняемость мини-группы (например: «Осталось ровно 1 место во вторник в 16:00»). Зафиксировать бронь.',
      dialogueScript: '«Судя по тому, как быстро Райян освоил циклы, ему идеально подходит трек ИИ для младших. Так как мы строго держим максимум 5 мест в группе, в Лаборатории Альфа осталось всего 1 свободное место. Закрепим эту рабочую станцию за ним?»',
      parentPsychology: 'Дефицит мест реален (всего 5 рабочих станций). Инвестиция полностью оправдана увиденным результатом.'
    }
  ]
};

export const PARENT_BROCHURE_PAGES = [
  {
    pageNumber: 1,
    title: 'Проспект Maryam Academy Mission (MAM)',
    subtitle: 'Воспитываем новое поколение глобальных IT-архитекторов',
    content: [
      'В мире, переполненном пассивным потреблением цифрового контента, Maryam Academy Mission превращает пытливые детские умы в дисциплинированных, этичных и коммерчески востребованных разработчиков.',
      'Мы не тратим время на примитивные конструкторы. Мы погружаем студентов от 8 до 17 лет в настоящую профессиональную среду разработки под наставничеством практикующих IT-инженеров.'
    ],
    highlight: 'Строго до 5 учеников в группе • 1:1 Персональные рабочие станции • Портфолио на GitHub'
  },
  {
    pageNumber: 2,
    title: '3 Железных Столпа Педагогики MAM',
    subtitle: 'Почему обычные кружки программирования не дают результата',
    content: [
      '1. Гарантия 1 ученик = 1 ноутбук: Работа за общим компьютером снижает усвоение на 65%. В MAM каждому студенту выделяется личная корпоративная рабочая станция Lenovo ThinkPad P14s или Apple MacBook Pro на весь период обучения.',
      '2. Фокус наставника 5:1: При группах свыше 5 человек наставник тратит время на поддержание дисциплины, а не на обучение. Наш лимит в 5 мест гарантирует детальное код-ревью для каждого.',
      '3. Практическая окупаемость: К 8 месяцу ученики имеют работающие веб-системы и портфолио для поступления в профильные школы, побед на олимпиадах и первых стажировок.'
    ],
    highlight: 'Удержание учеников 97.4% • 100% защита дипломных проектов'
  },
  {
    pageNumber: 3,
    title: 'Инженерные Направления Обучения',
    subtitle: 'Прогрессивная 4-летняя траектория развития',
    content: [
      '• Уровень 1: Python, Нейросети и Архитектура 2D-игр (8–12 лет)',
      '• Уровень 2: Full-Stack Веб-разработка, React и Базы Данных (13–17 лет)',
      '• Уровень 3: Кибербезопасность, Этичный Хакинг и Сети (12–16 лет)',
      '• Уровень 4: Edge AI Робототехника, MicroPython и IoT (10–14 лет)',
      'Каждый уровень завершается открытым Демо-днем с участием экспертов из ведущих технологических компаний.'
    ],
    highlight: 'Аккредитованные модули по стандарту ISO-9001'
  },
  {
    pageNumber: 4,
    title: 'Условия Поступления, Оплата и Стандарты Безопасности',
    subtitle: 'Прозрачная инвестиция в будущее вашего ребенка',
    content: [
      '• Стоимость: Ежемесячный взнос от $240 до $290 USD в зависимости от курса, включая доступ ко всему лабораторному оборудованию, лицензиям на ПО и участию в турнирах.',
      '• Безопасность: Системы фильтрации воздуха, биометрический контроль доступа в лабораторию, защита персональных данных и отсутствие рекламы.',
      '• Следующий шаг: Запишитесь на бесплатный 45-минутный диагностический урок для определения склонностей ребенка.'
    ],
    highlight: 'Гарантия 100% возврата средств в течение первых 30 дней'
  }
];

export const LEGAL_TERMS = {
  contractTitle: 'Maryam Academy Mission - Договор оферты на образовательные услуги и ответственное хранение оборудования',
  version: '2026.3-RU-PROD',
  clauses: [
    {
      title: '1. Предмет договора и образовательные услуги',
      text: 'Образовательный центр Maryam Academy Mission (далее "MAM") обязуется предоставить специализированные технические курсы в мини-группах численностью строго не более пяти (5) студентов на одного наставника. Все наставники являются квалифицированными инженерами с подтвержденным опытом работы в индустрии.'
    },
    {
      title: '2. Закрепление персонального оборудования и регламент лаборатории',
      text: 'MAM закрепляет за каждым зачисленным студентом индивидуальную высокопроизводительную рабочую станцию (ThinkPad P14s или Apple MacBook Pro) для практических занятий в лаборатории. Оборудование является собственностью MAM. Студент проходит инструктаж по кибергигиене, безопасной работе в терминале и этичным правилам разработки.'
    },
    {
      title: '3. Интеллектуальная собственность на проекты студента',
      text: 'Весь исходный код, дизайн-макеты, алгоритмические модели и игры, созданные студентом во время учебного процесса, являются 100% исключительной интеллектуальной собственностью студента и его законных представителей. MAM получает неисключительное право демонстрировать работы на выставках и в портфолио академии.'
    },
    {
      title: '4. Оплата, график платежей и гарантия качества',
      text: 'Оплата производится ежемесячно по 30-дневному циклу. Если в течение первых тридцати (30) календарных дней студент или его родители решат, что формат обучения им не подходит, MAM гарантирует 100% возврат стоимости первого месяца обучения по письменному заявлению без штрафов и удержаний.'
    }
  ]
};
