import { LanguageCode } from './types';
import { Course, FAQItem } from '../types';
import { COURSES_DATA, FAQS_DATA } from '../data/mockEcosystemData';

export interface LocalizedCourseData {
  title: string;
  tagline: string;
  badge: string;
  level: string;
  outcomeProject: string;
  modules: {
    title: string;
    weeks: string;
    deliverables: string[];
  }[];
}

export const COURSE_TRANSLATIONS: Record<LanguageCode, Record<string, LocalizedCourseData>> = {
  ru: {
    'python-ai-kids': {
      title: 'Python, Нейросети и Архитектура Игр на ИИ',
      tagline: 'Превратите увлечение играми в написание настоящего кода на Python, разработку автономных алгоритмов и игровых движков.',
      badge: 'Флагманский трек для младших',
      level: 'Начальный',
      outcomeProject: 'Опубликованный 2D-платформер с нейросетевым поиском путей врагов и облачной таблицей рекордов',
      modules: [
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
      ]
    },
    'fullstack-web-pro': {
      title: 'Full-Stack Веб-разработка и Облачные Системы',
      tagline: 'От современного семантического фронтенда до облачных REST микросервисов и баз данных PostgreSQL.',
      badge: 'Индустриальный стандарт',
      level: 'Средний',
      outcomeProject: 'Полнофункциональный SaaS-сервис с авторизацией, базой данных ORM и автоматическим CI/CD деплоем',
      modules: [
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
      ]
    },
    'cyber-defense-security': {
      title: 'Кибербезопасность, Сетевые Протоколы и Этичный Хакинг',
      tagline: 'Освойте фундамент безопасности, анализ пакетов Wireshark, настройку файрволов и участие в CTF-соревнованиях.',
      badge: 'Высокая востребованность',
      level: 'Средний',
      outcomeProject: 'Собственный настроенный защитный фаервол, аудит уязвимостей сети и участие в соревновании CTF',
      modules: [
        {
          title: 'Сетевые протоколы и модель OSI',
          weeks: 'Недели 1–6',
          deliverables: ['Пакетный анализ TCP/IP в Wireshark', 'Конфигурация DNS, DHCP и маршрутизации', 'Поиск аномалий трафика']
        },
        {
          title: 'Этичный хакинг и Linux-терминал',
          weeks: 'Недели 7–14',
          deliverables: ['Работа в дистрибутиве Kali Linux', 'Bash-скрипты для автоматизации сканирования', 'Поиск уязвимостей веб-приложений (OWASP Top 10)']
        },
        {
          title: 'Криптография и защита данных',
          weeks: 'Недели 15–20',
          deliverables: ['Асимметричное шифрование RSA', 'SSL/TLS сертификаты и HTTPS', 'Хэш-функции и защита паролей']
        },
        {
          title: 'Финал: Командный турнир CTF',
          weeks: 'Недели 21–24',
          deliverables: ['Защита серверной инфраструктуры', 'Решение практических кибер-квестов', 'Сертификат по безопасности MAM Security']
        }
      ]
    },
    'mobile-app-engineering': {
      title: 'Мобильная разработка (React Native / iOS / Android)',
      tagline: 'Создавайте настоящие мобильные приложения, публикуйте их в App Store и Google Play, подключайте камеры, карты и сенсоры.',
      badge: 'Практический запуск',
      level: 'Средний',
      outcomeProject: 'Опубликованное в сторах мобильное приложение с авторизацией, картой и push-уведомлениями',
      modules: [
        {
          title: 'Основы мобильного UX/UI',
          weeks: 'Недели 1–6',
          deliverables: ['Нативные компоненты React Native', 'Навигация и управление экранами', 'Адаптивный дизайн под планшеты и смартфоны']
        },
        {
          title: 'Сенсоры устройства и аппаратная интеграция',
          weeks: 'Недели 7–14',
          deliverables: ['Работа с камерой и галереей', 'Геолокация и интерактивные карты', 'Локальное хранилище и кэш данных']
        },
        {
          title: 'Бэкенд и облачные уведомления',
          weeks: 'Недели 15–22',
          deliverables: ['Синхронизация данных с облачной базой', 'Push-уведомления в реальном времени', 'Авторизация через OAuth']
        },
        {
          title: 'Релиз и публикация в магазины',
          weeks: 'Недели 23–28',
          deliverables: ['Подготовка иконки, сплэш-скрина и скриншотов', 'Прохождение ревью Google Play и App Store', 'Реальное приложение на смартфонах родителей']
        }
      ]
    },
    'ai-robotics-iot': {
      title: 'ИИ в Робототехнике, Микроконтроллеры и IoT (C++)',
      tagline: 'Соединяем чистый код с физическим миром: программирование микроконтроллеров ESP32, сенсоров, машинного зрения и сервоприводов.',
      badge: 'Инженерия железа',
      level: 'Продвинутый',
      outcomeProject: 'Автономный колесный робот с распознаванием препятствий по камере и управлением через веб-интерфейс',
      modules: [
        {
          title: 'Основы схемотехники и C++',
          weeks: 'Недели 1–6',
          deliverables: ['Закон Ома, макетные платы и мультиметры', 'Синтаксис C++ для встроенных систем', 'Управление светодиодами и аналоговыми датчиками']
        },
        {
          title: 'Микроконтроллеры ESP32 и датчики',
          weeks: 'Недели 7–14',
          deliverables: ['Подключение ультразвуковых дальномеров', 'Сервоприводы и шаговые двигатели', 'Беспроводная передача по Wi-Fi и Bluetooth']
        },
        {
          title: 'Машинное зрение и телеметрия',
          weeks: 'Недели 15–24',
          deliverables: ['Камера ESP32-CAM и OpenCV', 'Распознавание цветных меток и линий', 'Веб-панель управления роботом']
        },
        {
          title: 'Полнофункциональный выпускной робот',
          weeks: 'Недели 25–32',
          deliverables: ['3D-печать корпуса и сборка шасси', 'Прохождение лабиринта в автономном режиме', 'Демонстрационный заезд на полигоне кампуса']
        }
      ]
    }
  },

  en: {
    'python-ai-kids': {
      title: 'Python, Neural Networks & AI Game Architecture',
      tagline: 'Transform gaming obsession into genuine Python engineering, autonomous algorithms, and custom game physics engines.',
      badge: 'Flagship Junior Track',
      level: 'Beginner',
      outcomeProject: 'Published 2D platformer with neural pathfinding enemies and cloud leaderboards',
      modules: [
        {
          title: 'Syntax Foundations & Algorithmic Logic',
          weeks: 'Weeks 1–4',
          deliverables: ['Variables, memory models, and conditionals', 'Interactive text CLI quest engine', 'Loop mechanics and math combat arenas']
        },
        {
          title: 'OOP, Physics & Graphics Engines',
          weeks: 'Weeks 5–12',
          deliverables: ['Pygame sprite systems and render pipelines', 'Collision detection and kinematic gravity', 'Modular sound synthesizer integration']
        },
        {
          title: 'Autonomous Logic & Bot AI',
          weeks: 'Weeks 13–20',
          deliverables: ['A* graph pathfinding implementations', 'Finite State Machines (FSM) for boss logic', 'High score persistence in JSON file systems']
        },
        {
          title: 'Capstone Release & Campus Demo Day',
          weeks: 'Weeks 21–24',
          deliverables: ['Standalone binary build for Windows & macOS', 'Public project defense before parents & engineers', 'Publication to global MAM Hall of Fame']
        }
      ]
    },
    'fullstack-web-pro': {
      title: 'Full-Stack Web Engineering & Cloud Systems',
      tagline: 'From modern reactive frontend interfaces to distributed REST microservices and relational PostgreSQL databases.',
      badge: 'Industry Benchmark',
      level: 'Intermediate',
      outcomeProject: 'Full-fledged SaaS web service with auth, ORM database schema, and automated CI/CD deployment',
      modules: [
        {
          title: 'Modern Reactive Interfaces',
          weeks: 'Weeks 1–6',
          deliverables: ['Semantic HTML5, CSS Grid & Tailwind architecture', 'Strict TypeScript typing & React components', 'Client routing & asynchronous state']
        },
        {
          title: 'Backend Architecture & API Engineering',
          weeks: 'Weeks 7–16',
          deliverables: ['RESTful endpoints in Node.js / Express', 'Secure JWT authentication & session handling', 'PostgreSQL relational schemas & migrations']
        },
        {
          title: 'DevOps, Containers & Cloud Hosting',
          weeks: 'Weeks 17–26',
          deliverables: ['Multi-stage Docker builds', 'GitHub Actions automated testing pipelines', 'Production deployment to cloud container platforms']
        },
        {
          title: 'Commercial Client Sprint',
          weeks: 'Weeks 27–32',
          deliverables: ['Building a real web portal for a local business', 'Code reviews with staff software engineers', 'Verified GitHub repository in portfolio']
        }
      ]
    },
    'cyber-defense-security': {
      title: 'Cybersecurity, Network Protocols & Ethical Hacking',
      tagline: 'Master network security fundamentals, Wireshark packet capture, firewall hardening, and live CTF competitions.',
      badge: 'High In-Demand Track',
      level: 'Intermediate',
      outcomeProject: 'Custom hardened firewall, network penetration audit report, and CTF badge',
      modules: [
        {
          title: 'Network Protocols & OSI Architecture',
          weeks: 'Weeks 1–6',
          deliverables: ['TCP/IP packet inspection in Wireshark', 'DNS, DHCP and routing configurations', 'Detecting network traffic anomalies']
        },
        {
          title: 'Ethical Hacking & Linux Shell',
          weeks: 'Weeks 7–14',
          deliverables: ['Deep terminal work in Kali Linux', 'Bash automation scripts for network scans', 'OWASP Top 10 web vulnerability auditing']
        },
        {
          title: 'Applied Cryptography & Data Protection',
          weeks: 'Weeks 15–20',
          deliverables: ['Asymmetric RSA key pairs and encryption', 'SSL/TLS certificates & HTTPS handshakes', 'Hash algorithms and credential defense']
        },
        {
          title: 'Live CTF Championship Defense',
          weeks: 'Weeks 21–24',
          deliverables: ['Server infrastructure defense against simulated threats', 'Solving competitive cyber flags', 'MAM Security Certified Credential']
        }
      ]
    },
    'mobile-app-engineering': {
      title: 'Mobile App Engineering (React Native / iOS / Android)',
      tagline: 'Build cross-platform mobile apps, publish to App Store and Google Play, integrate camera, GPS, and sensor APIs.',
      badge: 'Direct Store Launch',
      level: 'Intermediate',
      outcomeProject: 'Store-ready mobile app with live auth, interactive maps, and push notifications',
      modules: [
        {
          title: 'Mobile UX/UI Fundamentals',
          weeks: 'Weeks 1–6',
          deliverables: ['React Native components & styling', 'Stack and tab screen navigation', 'Responsive mobile layouts across devices']
        },
        {
          title: 'Hardware Sensors & Native APIs',
          weeks: 'Weeks 7–14',
          deliverables: ['Camera and media library integration', 'Geolocation and real-time mapping', 'Offline SQLite and async storage caching']
        },
        {
          title: 'Cloud Backend & Push Telemetry',
          weeks: 'Weeks 15–22',
          deliverables: ['Real-time cloud database synchronization', 'Push notification pipelines', 'OAuth social and secure authentication']
        },
        {
          title: 'Store Publishing & Launch',
          weeks: 'Weeks 23–28',
          deliverables: ['Icon assets, splash screens and store copy', 'Navigating Google Play & App Store review', 'Running production app on parent devices']
        }
      ]
    },
    'ai-robotics-iot': {
      title: 'AI in Robotics, Microcontrollers & IoT (C++)',
      tagline: 'Bridge high-level code with physical hardware: ESP32 microcontrollers, camera computer vision, sensors, and servo motors.',
      badge: 'Hardware Engineering',
      level: 'Advanced',
      outcomeProject: 'Autonomous wheeled rover with computer vision obstacle avoidance and web telemetry cockpit',
      modules: [
        {
          title: 'Circuit Electronics & C++ Fundamentals',
          weeks: 'Weeks 1–6',
          deliverables: ['Ohm\'s law, breadboards, and multimeter diagnostics', 'C++ syntax for embedded microchips', 'PWM control of LEDs and analog inputs']
        },
        {
          title: 'ESP32 Microcontrollers & Sensor Bus',
          weeks: 'Weeks 7–14',
          deliverables: ['Ultrasonic distance sensors & calibration', 'Servo actuators and DC motor bridges', 'Wi-Fi & Bluetooth telemetry packets']
        },
        {
          title: 'Embedded Computer Vision & Telemetry',
          weeks: 'Weeks 15–24',
          deliverables: ['ESP32-CAM and OpenCV vision streams', 'Color blob tracking and line following', 'Responsive web dashboard robot remote']
        },
        {
          title: 'Capstone Autonomous Rover',
          weeks: 'Weeks 25–32',
          deliverables: ['3D chassis assembly and wiring harness', 'Autonomous maze navigation algorithm', 'Live obstacle trial on campus track']
        }
      ]
    }
  },

  kz: {
    'python-ai-kids': {
      title: 'Python, Нейрожелілер және Ойын Архитектурасы',
      tagline: 'Ойын ойнауды нақты Python кодымен бағдарламалауға, автономды алгоритмдер мен физикалық қозғалтқыштар құруға айналдырыңыз.',
      badge: 'Кіші топтың флагмандық бағыты',
      level: 'Бастапқы',
      outcomeProject: 'Жаулары нейрожелімен жол табатын және бұлтты рекорды бар 2D-платформер ойыны',
      modules: [
        {
          title: 'Синтаксис пен алгоритм негіздері',
          weeks: '1–4 апталар',
          deliverables: ['Айнымалылар, жады құрылымы және шартты операторлар', 'Интерактивті CLI мәтіндік ойыны', 'Циклдер мен математикалық шайқас механикасы']
        },
        {
          title: 'ОББ, Физика және Графика',
          weeks: '5–12 апталар',
          deliverables: ['Pygame спрайт жүйелері', 'Соқтығысуларды анықтау және гравитация', 'Модульдік дыбыстық синтезатор қосу']
        },
        {
          title: 'Автономды логика және Бот ИИ-і',
          weeks: '13–20 апталар',
          deliverables: ['A* жол табу алгоритмдері', 'Бастықтарға арналған ақырғы автоматтар (FSM)', 'JSON жүйесінде рекордтарды сақтау']
        },
        {
          title: 'Қорытынды бітіру жобасы және Демо-күн',
          weeks: '21–24 апталар',
          deliverables: ['Windows/macOS үшін орындалатын файл құрастыру', 'Ата-аналар мен тәлімгерлер алдында қорғау', 'MAM ғаламдық галереясына жариялау']
        }
      ]
    },
    'fullstack-web-pro': {
      title: 'Full-Stack Веб-әзірлеу және Бұлтты Жүйелер',
      tagline: 'Заманауи фронтендтен бастап бұлтты REST микроқызметтер мен PostgreSQL деректер қорына дейін.',
      badge: 'Индустрия стандарты',
      level: 'Орташа',
      outcomeProject: 'Авторизациясы, ORM базасы және автоматты деплойы бар толыққанды SaaS веб-сервисі',
      modules: [
        {
          title: 'Заманауи реактивті интерфейстер',
          weeks: '1–6 апталар',
          deliverables: ['HTML5, CSS Grid және Tailwind', 'TypeScript типтеу және React компоненттері', 'Маршруттау және асинхронды күй']
        },
        {
          title: 'Бэкенд архитектурасы және API',
          weeks: '7–16 апталар',
          deliverables: ['Express.js RESTful эндпоинттері', 'Қауіпсіз JWT аутентификациясы', 'PostgreSQL реляциялық сызбалары']
        },
        {
          title: 'DevOps, Контейнерлеу және Бұлт',
          weeks: '17–26 апталар',
          deliverables: ['Көпсатылы Docker жинақтары', 'GitHub Actions тестілеу құбырлары', 'Бұлтты ортаға өндірістік деплой']
        },
        {
          title: 'Коммерциялық клиенттік спринт',
          weeks: '27–32 апталар',
          deliverables: ['Жергілікті бизнес үшін нақты веб-портал құру', 'Жетекші инженерлермен код-ревью', 'Портфолиодағы расталған GitHub репозиторийі']
        }
      ]
    },
    'cyber-defense-security': {
      title: 'Киберқауіпсіздік, Желілер және Этикалық Хакинг',
      tagline: 'Желілік қауіпсіздік негіздерін, Wireshark трафик талдауын, файрвол орнатуды және CTF жарыстарын меңгеріңіз.',
      badge: 'Жоғары сұранысқа ие',
      level: 'Орташа',
      outcomeProject: 'Өз қолымен бапталған қорғаныс файрволы, осалдықтар аудиті және CTF сертификаты',
      modules: [
        {
          title: 'Желілік хаттамалар және OSI моделі',
          weeks: '1–6 апталар',
          deliverables: ['Wireshark арқылы TCP/IP трафигін талдау', 'DNS, DHCP баптау', 'Желідегі аномалияларды табу']
        },
        {
          title: 'Этикалық хакинг және Linux терминалы',
          weeks: '7–14 апталар',
          deliverables: ['Kali Linux дистрибутивінде жұмыс', 'Сканерлеуді автоматтандыруға арналған Bash скрипттері', 'OWASP Top 10 осалдықтарын тексеру']
        },
        {
          title: 'Криптография және деректерді қорғау',
          weeks: '15–20 апталар',
          deliverables: ['Асимметриялық RSA шифрлауы', 'SSL/TLS сертификаттары мен HTTPS', 'Хэш-функциялар мен құпиясөздерді қорғау']
        },
        {
          title: 'Командалық CTF турнирі',
          weeks: '21–24 апталар',
          deliverables: ['Серверлік инфрақұрылымды қорғау', 'Тәжірибелік кибер-квесттерді шешу', 'MAM Security ресми сертификаты']
        }
      ]
    },
    'mobile-app-engineering': {
      title: 'Мобильді әзірлеу (React Native / iOS / Android)',
      tagline: 'Шынайы мобильді қосымшалар жасап, оларды App Store және Google Play дүкендеріне жариялаңыз.',
      badge: 'Дүкендерге шығару',
      level: 'Орташа',
      outcomeProject: 'Авторизациясы, картасы және push-хабарламалары бар дайын мобильді қосымша',
      modules: [
        {
          title: 'Мобильді UX/UI негіздері',
          weeks: '1–6 апталар',
          deliverables: ['React Native компоненттері мен стилі', 'Экрандар бойынша навигация', 'Құрылғыларға бейімделген дизайн']
        },
        {
          title: 'Құрылғы сенсорлары және жүйелік API',
          weeks: '7–14 апталар',
          deliverables: ['Камера және медиа кітапханамен жұмыс', 'Геолокация және интерактивті карталар', 'Деректерді жергілікті кэштеу']
        },
        {
          title: 'Бұлтты бэкенд және Push-хабарламалар',
          weeks: '15–22 апталар',
          deliverables: ['Бұлтты базамен нақты уақытта үйлестіру', 'Push-хабарламалар жіберу', 'Қауіпсіз OAuth кіру жүйесі']
        },
        {
          title: 'Релиз және дүкендерге жариялау',
          weeks: '23–28 апталар',
          deliverables: ['Иконкалар, сплэш-экрандар жасау', 'Google Play және App Store модерациясынан өту', 'Ата-аналардың телефондарына орнату']
        }
      ]
    },
    'ai-robotics-iot': {
      title: 'Робототехникадағы ИИ, Микроконтроллерлер және IoT (C++)',
      tagline: 'Кодты нақты физикалық әлеммен байланыстырыңыз: ESP32 платасы, камера көру жүйесі, датчиктер мен қозғалтқыштар.',
      badge: 'Аппараттық инженерия',
      level: 'Жоғары',
      outcomeProject: 'Камера арқылы кедергілерді танитын және веб-басқаруы бар автономды дөңгелекті робот',
      modules: [
        {
          title: 'Сұлбатехника мен C++ негіздері',
          weeks: '1–6 апталар',
          deliverables: ['Ом заңы, макеттік тақталар мен өлшеуіштер', 'Енгізілген жүйелер үшін C++ синтаксисі', 'Аналогтық датчиктерді басқару']
        },
        {
          title: 'ESP32 микроконтроллерлері және датчиктер',
          weeks: '7–14 апталар',
          deliverables: ['Ультрадыбыстық қашықтық өлшегіштер', 'Сервоприводтар мен қадамдық моторлар', 'Wi-Fi және Bluetooth арқылы байланыс']
        },
        {
          title: 'Компьютерлік көру және телеметрия',
          weeks: '15–24 апталар',
          deliverables: ['ESP32-CAM және OpenCV көру ағыны', 'Түсті белгілер мен сызықтарды тану', 'Веб-панель арқылы қашықтан басқару']
        },
        {
          title: 'Қорытынды автономды робот',
          weeks: '25–32 апталар',
          deliverables: ['Корпусты 3D-басып шығару және құрастыру', 'Лабиринттен өздігінен өту алгоритмі', 'Кампус алаңындағы демонстрациялық жарыс']
        }
      ]
    }
  },

  uz: {
    'python-ai-kids': {
      title: 'Python, Neyrotarmoqlar va O\'yin Arxitekturasi',
      tagline: 'O\'yinlarga qiziqishni haqiqiy Python dasturlashga, avtonom algoritmlar va fizika dvigatellarini yaratishga aylantiring.',
      badge: 'Kichik guruh uchun asosiy yo\'nalish',
      level: 'Boshlang\'ich',
      outcomeProject: 'Raqiblari neyrotarmoq yordamida yo\'l topadigan va bulutli rekordlar jadvaliga ega 2D-platformer o\'yini',
      modules: [
        {
          title: 'Sintaksis va algoritm asoslari',
          weeks: '1–4 haftalar',
          deliverables: ['O\'zgaruvchilar, xotira tuzilmasi va shart operatorlari', 'Interaktiv CLI matnli o\'yini', 'Tsikllar va matematik jang mexanikasi']
        },
        {
          title: 'OOP, Fizika va Grafika',
          weeks: '5–12 haftalar',
          deliverables: ['Pygame sprayt tizimlari', 'To\'qnashuvlarni aniqlash va tortishish kuchi', 'Modulli tovush sintezatorini ulash']
        },
        {
          title: 'Avtonom mantiq va Bot Sun\'iy Intellekti',
          weeks: '13–20 haftalar',
          deliverables: ['A* yo\'l qidirish algoritmlari', 'Bosslar uchun chekli avtomatlar (FSM)', 'JSON tizimida rekordlarni saqlash']
        },
        {
          title: 'Yakuniy bitiruv loyihasi va Demo kuni',
          weeks: '21–24 haftalar',
          deliverables: ['Windows/macOS uchun ishga tushuvchi fayl yig\'ish', 'Ota-onalar va ustozlar oldida himoya qilish', 'MAM global galereyasida nashr etish']
        }
      ]
    },
    'fullstack-web-pro': {
      title: 'Full-Stack Veb-dasturlash va Bulutli Tizimlar',
      tagline: 'Zamonaviy frontenddan tortib, tarqatilgan REST mikroxizmatlar va PostgreSQL ma\'lumotlar bazasigacha.',
      badge: 'Sanoat standarti',
      level: 'O\'rta',
      outcomeProject: 'Avtorizatsiya, ORM bazasi va avtomatlashtirilgan CI/CD-ga ega to\'liq SaaS veb-xizmati',
      modules: [
        {
          title: 'Zamonaviy reaktiv interfeyslar',
          weeks: '1–6 haftalar',
          deliverables: ['HTML5, CSS Grid va Tailwind arxitekturasi', 'TypeScript qat\'iy tiplash va React komponentlari', 'Marshrutlash va asinxron holat']
        },
        {
          title: 'Backend arxitekturasi va API yaratish',
          weeks: '7–16 haftalar',
          deliverables: ['Node.js / Express RESTful oxirgi nuqtalari', 'Xavfsiz JWT autentifikatsiyasi', 'PostgreSQL relyatsion jadvallari va migratsiyalar']
        },
        {
          title: 'DevOps, Konteynerlar va Bulutli hosting',
          weeks: '17–26 haftalar',
          deliverables: ['Ko\'p bosqichli Docker yig\'uvlari', 'GitHub Actions test sinovlari quvuri', 'Bulutli muhitga ishlab chiqarish joylashtiruvi']
        },
        {
          title: 'Tijoriy mijozlik sprinti',
          weeks: '27–32 haftalar',
          deliverables: ['Haqiqiy biznes uchun veb-portal yaratish', 'Yetakchi muhandislar bilan kod tahlili', 'Portfolioda tasdiqlangan GitHub repozitoriysi']
        }
      ]
    },
    'cyber-defense-security': {
      title: 'Kiberxavfsizlik, Tarmoqlar va Axloqiy Xakerlik',
      tagline: 'Tarmoq xavfsizligi asoslari, Wireshark paketlar tahlili, fayrvollar sozlash va jonli CTF musobaqalari.',
      badge: 'Talab yuqori bo\'lgan yo\'nalish',
      level: 'O\'rta',
      outcomeProject: 'Shaxsiy sozlangan himoya fayrvoli, zaifliklar auditi hisoboti va CTF sertifikati',
      modules: [
        {
          title: 'Tarmoq protokollari va OSI modeli',
          weeks: '1–6 haftalar',
          deliverables: ['Wireshark-da TCP/IP paketlarini tahlil qilish', 'DNS, DHCP va marshrutlashni sozlash', 'Tarmoqdagi anomal xatti-harakatlarni topish']
        },
        {
          title: 'Axloqiy xakerlik va Linux terminali',
          weeks: '7–14 haftalar',
          deliverables: ['Kali Linux tizimida chuqur ishlash', 'Skanerlashni avtomatlashtirish uchun Bash skriptlari', 'OWASP Top 10 veb zaifliklarini tekshirish']
        },
        {
          title: 'Kriptografiya va ma\'lumotlar himoyasi',
          weeks: '15–20 haftalar',
          deliverables: ['Asimmetrik RSA shifrlash tizimi', 'SSL/TLS sertifikatlari va HTTPS', 'Xesh-funksiyalar va parollarni himoyalash']
        },
        {
          title: 'Jonli jamoaviy CTF turniri',
          weeks: '21–24 haftalar',
          deliverables: ['Server infratuzilmasini kiberhujumlardan himoyalash', 'Amaliy kiber-kvestlarni yechish', 'Rasmiy MAM Security sertifikati']
        }
      ]
    },
    'mobile-app-engineering': {
      title: 'Mobil dasturlash (React Native / iOS / Android)',
      tagline: 'Haqiqiy mobil ilovalar yarating, App Store va Google Play-da nashr eting, kamera, GPS va sensorlarni ulang.',
      badge: 'To\'g\'ridan-to\'g\'ri do\'konga chiqarish',
      level: 'O\'rta',
      outcomeProject: 'Avtorizatsiya, xarita va push-bildirishnomalarga ega tayyor mobil ilova',
      modules: [
        {
          title: 'Mobil UX/UI asoslari',
          weeks: '1–6 haftalar',
          deliverables: ['React Native komponentlari va uslublari', 'Ekranlararo navigatsiya tizimi', 'Har xil o\'lchamdagi ekranlarga moslashuv']
        },
        {
          title: 'Qurilma sensorlari va tizim API-lari',
          weeks: '7–14 haftalar',
          deliverables: ['Kamera va media fayllar bilan ishlash', 'Geolokatsiya va interaktiv xaritalar', 'Lokal kesh va ma\'lumotlar saqlash']
        },
        {
          title: 'Bulutli backend va Push-xabarnomalar',
          weeks: '15–22 haftalar',
          deliverables: ['Bulutli baza bilan real vaqtda sinxronizatsiya', 'Push-xabarnomalarni yuborish tizimi', 'OAuth orqali xavfsiz tizimga kirish']
        },
        {
          title: 'Reliz va do\'konlarda nashr qilish',
          weeks: '23–28 haftalar',
          deliverables: ['Ikonkalar va taqdimot rasmlari yaratish', 'Google Play va App Store tekshiruvidan o\'tish', 'Ota-onalar smartfonlariga o\'rnatish']
        }
      ]
    },
    'ai-robotics-iot': {
      title: 'Robototexnikada Sun\'iy Intellekt va IoT (C++)',
      tagline: 'Dastur kodini jismoniy dunyo bilan birlashtiring: ESP32 mikrokontrollerlari, kompyuter ko\'rishi, datchiklar va motorlar.',
      badge: 'Uskunaviy muhandislik',
      level: 'Yuqori',
      outcomeProject: 'Kamera orqali to\'siqlarni aylanib o\'tuvchi va veb-panel orqali boshqariladigan avtonom g\'ildirakli robot',
      modules: [
        {
          title: 'Sxematexnika va C++ asoslari',
          weeks: '1–6 haftalar',
          deliverables: ['Om qonuni, maket platalari va multimetrlar', 'O\'rnatilgan tizimlar uchun C++ sintaksisi', 'Analog datchiklar va yoritgichlarni boshqarish']
        },
        {
          title: 'ESP32 mikrokontrollerlari va datchiklar',
          weeks: '7–14 haftalar',
          deliverables: ['Ultrasonik masofa o\'lchagichlar', 'Servoprivodlar va qadamli motorlar', 'Wi-Fi va Bluetooth orqali ma\'lumot almashish']
        },
        {
          title: 'Kompyuter ko\'rishi va telemetriya',
          weeks: '15–24 haftalar',
          deliverables: ['ESP32-CAM va OpenCV video oqimi', 'Rangli belgilarni va chiziqlarni aniqlash', 'Veb-boshqaruv pulti']
        },
        {
          title: 'Yakuniy avtonom robot loyihasi',
          weeks: '25–32 haftalar',
          deliverables: ['3D-korpus chop etish va mexanikani yig\'ish', 'Labirintdan avtonom tarzda chiqish algoritmi', 'Kampus maydonchasidagi sinov poygasi']
        }
      ]
    }
  }
};

export const FAQ_TRANSLATIONS: Record<LanguageCode, FAQItem[]> = {
  ru: FAQS_DATA,
  en: [
    {
      id: 'faq-1',
      question: 'Why does Maryam Academy enforce a strict maximum limit of 5 students per cohort?',
      category: 'Methodology',
      answer: 'Standard coding bootcamps herd 15–25 students into large rooms or Zoom calls, where an instructor only has time to assist 1–2 vocal kids while others get stuck on syntax errors and lose motivation. At MAM, our 5:1 ratio guarantees that a senior engineer performs personal code reviews every 6–8 minutes. No child is left behind.'
    },
    {
      id: 'faq-2',
      question: 'Does my child need to bring their own laptop to the campus labs?',
      category: 'Hardware',
      answer: 'No. Every enrolled student is assigned a dedicated enterprise-grade workstation (Lenovo ThinkPad P14s Gen 5 or Apple MacBook Pro 14" M2 Pro) equipped with high-speed NVMe storage, isolated Linux/macOS environments, and strict safety policies. That exact workstation is reserved for your child for every session.'
    },
    {
      id: 'faq-3',
      question: 'How is the 8-month educational ROI calculated?',
      category: 'Economics',
      answer: 'By months 6–8, MAM students build deployable commercial web services, automated bots, or IoT robotics prototypes. This delivers a proven edge in paid junior internships, hackathon victories, and academic scholarships ($3,000 to $12,000+). Unlike generic tutors, MAM builds a verified GitHub portfolio that pays for itself quickly.'
    },
    {
      id: 'faq-4',
      question: 'My child has zero coding experience. Will this be too demanding?',
      category: 'Methodology',
      answer: 'Not at all. Over 70% of our top graduates started with zero prior experience. Our proven step-by-step pedagogy first builds algorithmic intuition, then smoothly transitions to professional syntax. In your free 45-minute trial, your child will write and run their first working program in under 12 minutes.'
    },
    {
      id: 'faq-5',
      question: 'Will these intensive sessions interfere with regular school performance?',
      category: 'Schedule',
      answer: 'On the contrary: 94% of parents report marked improvements in mathematics, logical thinking, and English within 60 days. Software engineering teaches structured problem decomposition, directly bolstering focus and school grades.'
    },
    {
      id: 'faq-6',
      question: 'What happens if our family travels or my child falls ill?',
      category: 'Schedule',
      answer: 'Thanks to small 5-seat cohorts, mentors maintain granular individual progress logs. Any missed session can be made up free of charge in a parallel mini-group or during a 1-on-1 mentor session.'
    }
  ],
  kz: [
    {
      id: 'faq-1',
      question: 'Неліктен MAM Академиясында топта қатаң түрде 5 оқушыға дейін ғана шектеу қойылған?',
      category: 'Методология',
      answer: 'Қарапайым бағдарламалау мектептері сыныпқа немесе Zoom-ға 15–25 баланы жинайды. Онда мұғалім тек 1–2 балаға ғана үлгереді де, қалғандары қателіктерге тіреліп, қызығушылығын жоғалтады. MAM-дағы 5:1 қатынасы әрбір 6–8 минут сайын балаңыздың кодын тәжірибелі инженердің жеке тексеруін қамтамасыз етеді.'
    },
    {
      id: 'faq-2',
      question: 'Балаға зертханаға өзінің жеке ноутбугін алып келу қажет пе?',
      category: 'Оборудование',
      answer: 'Жоқ. Әрбір қабылданған оқушыға жеке қуатты корпоративтік станция (Lenovo ThinkPad P14s немесе Apple MacBook Pro) бекітіледі. Жылдам NVMe жады, оқшауланған Linux/macOS жүйесі және қауіпсіздік саясаты орнатылған. Бұл ноутбук әр сабақта тек сіздің балаңыз үшін сақталады.'
    },
    {
      id: 'faq-3',
      question: '8 айлық оқудың экономикалық өзін-өзі ақтауы (ROI) қалай есептеледі?',
      category: 'Экономика',
      answer: 'Оқудың 6–8 айында MAM оқушылары жұмыс істейтін веб-қосымшалар мен боттар жасайды. Бұл ақылы тағылымдамаларға өтуде, хакатондарда жеңіске жетуде және шетелдік гранттарды ұтып алуда нақты артықшылық береді ($3,000-нан $12,000-ға дейін стипендиялар). GitHub портфолиосы оқу шығындарын толық ақтайды.'
    },
    {
      id: 'faq-4',
      question: 'Балам бұрын код жазып көрмеген. Бағдарлама тым қиын болмай ма?',
      category: 'Методология',
      answer: 'Әрине жоқ. Біздің үздік түлектеріміздің 70%-дан астамы нөлден бастаған. Біздің авторлық қадамдық әдістеме алдымен алгоритмдік ойлауды қалыптастырып, содан кейін нақты код жазуға жетелейді. 45 минуттық тегін байқау сабағында балаңыз алғашқы кодын 12 минутта жазады.'
    },
    {
      id: 'faq-5',
      question: 'Бұл қарқынды курс мектептегі сабақтарына кедергі келтірмей ме?',
      category: 'Расписание',
      answer: 'Керісінше: ата-аналардың 94%-ы 60 күн ішінде балаларының математика мен ағылшын тілінен бағалары жақсарғанын байқайды. Бағдарламалау күрделі мәселелерді құрылымдап шешуді үйретіп, зейінді арттырады.'
    },
    {
      id: 'faq-6',
      question: 'Егер отбасымыз демалысқа кетсе немесе бала ауырып қалса не болады?',
      category: 'Расписание',
      answer: '5 адамдық шағын топтардың арқасында тәлімгер әр оқушының жеке үлгерім журналын жүргізеді. Қалдырылған сабақты параллель топта немесе тәлімгермен 1-ге-1 кеңесте тегін өтеуге болады.'
    }
  ],
  uz: [
    {
      id: 'faq-1',
      question: 'Nega MAM Akademiyasida guruhda qat\'iy 5 tagacha o\'quvchi cheklovi o\'rnatilgan?',
      category: 'Metodologiya',
      answer: 'Oddiy dasturlash kurslari bitta sinfga 15–25 tagacha bolani yig\'adi. Bunday sharoitda o\'qituvchi faqat 1–2 bolaga ulguradi, qolganlari esa xatolardan to\'xtab qolib, qiziqishini yo\'qotadi. MAM-dagi 5:1 normativi har 6–8 daqiqada tajribali muhandis farzandingizning kodini shaxsan tekshirib borishini kafolatlaydi.'
    },
    {
      id: 'faq-2',
      question: 'Bola darslarga o\'zining shaxsiy noutbukini olib kelishi kerakmi?',
      category: 'Uskunalar',
      answer: 'Yo\'q. Har bir qabul qilingan o\'quvchiga laboratoriyada shaxsiy korporativ ish stansiyasi (Lenovo ThinkPad P14s yoki Apple MacBook Pro) biriktiriladi. Unda tezkor NVMe xotirasi, Linux/macOS muhiti va xavfsizlik filtrlari o\'rnatilgan. Ushbu noutbuk har bir darsda faqat sizning farzandingiz uchun saqlanadi.'
    },
    {
      id: 'faq-3',
      question: '8 oylik ta\'limning iqtisodiy o\'zini oqlashi (ROI) qanday hisoblanadi?',
      category: 'Iqtisodiyot',
      answer: '6–8 oylik o\'qishdan so\'ng MAM o\'quvchilari real ishlaydigan veb-servislar va botlar yaratadilar. Bu pullik amaliyotlarga kirishda, xakatonlarda g\'olib bo\'lishda va nufuzli universitetlarning akademik grantlarini yutishda ($3,000 dan $12,000 gacha) katta ustunlik beradi.'
    },
    {
      id: 'faq-4',
      question: 'Farzandimda dasturlash bo\'yicha hech qanday tajriba yo\'q. Dastur juda qiyin bo\'lmaydimi?',
      category: 'Metodologiya',
      answer: 'Aslo yo\'q. Muvaffaqiyatli bitiruvchilarimizning 70% dan ortig\'i darslarni noldan boshlagan. Bizning bosqichma-bosqich metodikamiz avval mantiqiy fikrlashni shakllantiradi, keyin esa real kod yozishga olib keladi. 45 daqiqalik bepul sinov darsidayoq farzandingiz 12 daqiqa ichida birinchi dasturini ishga tushiradi.'
    },
    {
      id: 'faq-5',
      question: 'Ushbu kurs maktabdagi o\'qishiga xalaqit bermaydimi?',
      category: 'Dars jadvali',
      answer: 'Aksincha: ota-onalarning 94% 60 kun ichida farzandlarining matematika, mantiq va ingliz tili fanlaridan baholari sezilarli darajada yaxshilanganini ta\'kidlashadi. Dasturlash intizom va diqqatni jamlashni kuchaytiradi.'
    },
    {
      id: 'faq-6',
      question: 'Agar oila ta\'tilga ketsa yoki bola kasal bo\'lib qolsa nima bo\'ladi?',
      category: 'Dars jadvali',
      answer: '5 kishilik kichik guruhlar tufayli ustoz har bir o\'quvchining shaxsiy rivojlanish jurnalini yuritadi. Qoldirilgan darsni parallel guruhda yoki ustoz bilan 1-ga-1 konsultatsiyada bepul qayta o\'tash mumkin.'
    }
  ]
};

export function getLocalizedCourses(lang: LanguageCode): Course[] {
  const overrides = COURSE_TRANSLATIONS[lang] || COURSE_TRANSLATIONS.ru;
  return COURSES_DATA.map((base) => {
    const override = overrides[base.id];
    if (!override) return base;
    return {
      ...base,
      title: override.title,
      tagline: override.tagline,
      badge: override.badge,
      outcomeProject: override.outcomeProject,
      curriculumModules: override.modules
    };
  });
}

export function getLocalizedFaqs(lang: LanguageCode): FAQItem[] {
  return FAQ_TRANSLATIONS[lang] || FAQ_TRANSLATIONS.ru;
}
