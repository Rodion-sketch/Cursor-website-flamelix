/* ========================================
   FLAMELIX — Interactive Scripts
   ======================================== */

// ====== Translations ======
const translations = {
    en: {
        // Page
        page_title: 'Flamelix — Marketing & IT Team for Real Estate Developers',

        // Nav
        nav_services: 'Services',
        nav_experience: 'Experience',
        nav_approach: 'How We Work',
        nav_team: 'Team',
        nav_contact: 'Get in Touch',

        // Hero
        hero_badge: 'Marketing & IT Team for Real Estate',
        hero_title: 'We help achieve<br><span class="gradient-text">sales targets</span> by building<br>data-driven marketing systems.',
        hero_subtitle: 'We work across all stages: from market analysis to strategy execution — through research, creating marketing materials, lead generation, CRM implementation, and end-to-end analytics setup.',
        hero_cta: 'Start a Project',
        hero_cta2: 'Explore Our Services',
        metric_projects: 'Projects delivered',
        metric_years: 'Years of experience',
        metric_countries: 'Countries',

        // Trusted By
        trusted_label: 'TRUSTED BY',

        // Challenges
        challenges_intro: 'We recognize the challenges you face. That is why your path to impact starts here.',
        ch1: 'Marketing budgets without measurable return on investment.',
        ch2: 'Disconnected teams handling strategy, creative, and analytics in silos.',
        ch3: 'Sales targets missed due to lack of data-driven decision making.',
        ch4: 'Technology investments that add cost instead of driving growth.',

        // Services
        services_label: 'OUR SERVICES',
        services_title: 'Capabilities',
        services_desc: 'A ready-made team that takes full ownership of your marketing system. We design and deliver solutions that solve real business challenges and create measurable impact.',
        s1_title: 'Research',
        s1_desc: 'Market analysis, in-depth customer interviews, internal process audits, advertising channel potential assessment',
        s2_title: 'Customer Experience',
        s2_desc: 'We implement a human-centered approach — learning to listen to customers. Applied to product development, strategies, IT infrastructure, and team processes',
        s3_title: 'Marketing Strategy',
        s3_desc: 'We develop and execute strategies aligned with sales targets — from positioning to channel mix optimization',
        s4_title: 'Lead Generation',
        s4_desc: 'Scalable customer acquisition through performance advertising and integration with online and offline events',
        s5_title: 'Sales Materials',
        s5_desc: 'We create websites, landing pages, presentations, creatives, and advertising materials that convert',
        s6_title: 'End-to-End Analytics',
        s6_desc: 'We track the journey from advertising spend to leads, funnel stages, and closed deals in CRM',
        s7_title: 'Partner Marketing',
        s7_desc: 'We build relationships with real estate agencies: create relationship systems, prepare partner materials, and conduct training',

        // Process
        process_label: 'OUR APPROACH',
        process_title: 'How we work',
        process_desc: 'We form a ready-made team that takes full ownership of implementing your marketing system.',
        step1_title: 'Discover',
        step1_desc: 'We start by understanding your goals, audience, and challenges. Deep market research, customer interviews, and internal audits reveal opportunities and surface actionable insights.',
        step2_title: 'Strategize',
        step2_desc: 'We develop a comprehensive marketing strategy aligned with your sales targets. From positioning and channel mix to CRM architecture and analytics setup.',
        step3_title: 'Execute',
        step3_desc: 'We build and launch — creating materials, setting up advertising, implementing CRM, and configuring end-to-end analytics. Full ownership from day one.',
        step4_title: 'Optimize',
        step4_desc: 'We track results, refine performance, and scale what works. Continuous improvement driven by data — from ad investments to closed deals in CRM.',

        // Cases
        cases_label: 'EXPERIENCE',
        cases_title: 'Proven track record with<br>industry leaders',
        c1_badge: 'Customer Experience & IT',
        c1_desc: 'Managed Customer Experience projects, implemented changes to increase conversions at every stage of the customer journey. IT infrastructure transformation: CRM, electronic document management, online apartment purchases, marketplace website, mobile app.',
        c1_m1: 'Transformation', c1_m2: 'Implementation', c1_m3: 'Development',
        c2_badge: 'SMM & Research',
        c2_desc: "Audience research and social media communication strategy for Yandex's new division",
        c2_m1: 'Strategy',
        c3_badge: 'Digital Marketing',
        c3_desc: 'Doubled sales of residential, commercial, and international real estate in one year. Built profitable digital marketing',
        c3_m1: 'Sales Growth',
        cl1_desc: 'From brand creation to delivering 3,500 workspaces',
        cl2_desc: 'Sold a villa complex in 6 months',
        cl3_desc: "Rebranded Bali's largest developer",
        cl4_desc: 'Built marketing department and lead generation across 5 countries',
        cl5_desc: 'End-to-end analytics and data-driven marketing for TOP-20 Russian developers',

        // CTA Band
        cta_title: 'Ready to hit your sales targets?',
        cta_subtitle: "Let's discuss your project and build a custom marketing system",
        cta_btn: 'Get in Touch',

        // Team
        team_label: 'TEAM',
        team_title: 'The partner you have<br>been looking for',
        team_desc: 'We bring together a wealth of experience to make marketing work. Partnering with developers to design bespoke solutions that meet their highest standards.',
        t1_name: 'Rodion Angaev', t1_role: 'Growth Strategies & Data-Driven Marketing',
        t1_desc: 'Builds marketing systems and manages lead generation KPIs. Partner marketing expert.',
        t2_name: 'Ilya Volgin', t2_role: 'Customer Experience & Digital Transformation',
        t2_desc: 'CX projects, marketplace websites, mobile apps, online real estate sales. Director of Digital Transformation at MR Group.',
        t3_name: 'Alexander Vorobyov', t3_role: 'Branding, Websites & Presentations',
        t3_desc: 'Over 30 real estate projects. Creates sales materials: websites, presentations, and advertising creatives.',
        t4_name: 'Andrey Sokolov', t4_role: 'Analytics & Automation',
        t4_desc: 'System and end-to-end analytics, marketing and sales automation. Builds reporting from ad investments to closed deals in CRM.',

        // FAQ
        faq_title: 'Frequently Asked Questions',
        faq1_q: 'Why choose Flamelix?',
        faq1_a: 'Flamelix is dedicated to delivering measurable results for real estate developers. We provide a complete marketing team — from research and strategy to execution and analytics — eliminating the need to coordinate multiple agencies. Our deep industry expertise across 30+ projects ensures solutions tailored to your specific market.',
        faq2_q: 'What makes Flamelix different from other agencies?',
        faq2_a: 'We are not a traditional marketing agency. We form a dedicated team embedded in your processes — covering research, CX, strategy, lead generation, sales materials, CRM, and end-to-end analytics. We focus on full-lifecycle support tied directly to your sales targets, not vanity metrics.',
        faq3_q: 'What industries do you work with?',
        faq3_a: 'We specialize in real estate development — residential, commercial, and international properties. Our clients include top developers like MR Group, Knight Frank, and ENKA, as well as proptech companies and international real estate platforms across 5 countries.',
        faq4_q: 'Do we need an in-house marketing team to work with you?',
        faq4_a: 'Not at all. We function as your complete marketing department — handling everything from strategy to implementation. If you already have a team, we integrate seamlessly, filling gaps and amplifying capabilities. Either way, you get a full-cycle solution.',
        faq5_q: 'How do you measure success?',
        faq5_a: 'Everything is tied to your business goals. We set up end-to-end analytics tracking the full journey — from advertising spend to leads, funnel stages, and closed deals in CRM. You see exactly how every ruble or dollar of your marketing budget translates into sales.',

        // Contact
        contact_label: 'CONTACT',
        contact_title: "Let's build your<br>marketing system",
        contact_desc: "Tell us about your project, and we'll propose the optimal solution to hit your sales targets",
        form_name: 'Name',
        form_name_ph: 'Your name',
        form_project: 'About your project',
        form_project_ph: 'Tell us about your project and goals...',
        form_submit: 'Send Request',
        form_sent: 'Sent',

        // Footer
        footer_desc: 'Marketing & IT Team for Real Estate Developers',
        footer_copy: '\u00a9 2025 Flamelix. All rights reserved.'
    },
    ru: {
        // Page
        page_title: 'Flamelix — Маркетинг и IT для девелоперов недвижимости',

        // Nav
        nav_services: 'Услуги',
        nav_experience: 'Опыт',
        nav_approach: 'Подход',
        nav_team: 'Команда',
        nav_contact: 'Связаться',

        // Hero
        hero_badge: 'Маркетинг и IT для девелоперов недвижимости',
        hero_title: 'Помогаем достигать<br><span class="gradient-text">планов продаж</span>,<br>выстраивая data-driven<br>маркетинговые системы.',
        hero_subtitle: 'Работаем на всех этапах: от анализа рынка до реализации стратегии — через исследования, создание маркетинговых материалов, лидогенерацию, внедрение CRM и настройку сквозной аналитики.',
        hero_cta: 'Начать проект',
        hero_cta2: 'Наши услуги',
        metric_projects: 'Проектов реализовано',
        metric_years: 'Лет опыта',
        metric_countries: 'Стран',

        // Trusted By
        trusted_label: 'НАМ ДОВЕРЯЮТ',

        // Challenges
        challenges_intro: 'Мы понимаем вызовы, с которыми вы сталкиваетесь. Именно поэтому ваш путь к результату начинается здесь.',
        ch1: 'Маркетинговые бюджеты без измеримого возврата инвестиций.',
        ch2: 'Разрозненные команды, работающие над стратегией, креативом и аналитикой в отрыве друг от друга.',
        ch3: 'Планы продаж не выполняются из-за отсутствия data-driven подхода.',
        ch4: 'Технологические инвестиции, которые увеличивают затраты вместо роста.',

        // Services
        services_label: 'НАШИ УСЛУГИ',
        services_title: 'Компетенции',
        services_desc: 'Готовая команда, которая берёт на себя всю вашу маркетинговую систему. Мы создаём решения, которые решают реальные бизнес-задачи и приносят измеримый результат.',
        s1_title: 'Исследования',
        s1_desc: 'Анализ рынка, глубинные интервью с клиентами, аудит внутренних процессов, оценка потенциала рекламных каналов',
        s2_title: 'Customer Experience',
        s2_desc: 'Внедряем человекоцентричный подход — учимся слушать клиентов. Применяем к разработке продукта, стратегиям, IT-инфраструктуре и командным процессам',
        s3_title: 'Маркетинговая стратегия',
        s3_desc: 'Разрабатываем и реализуем стратегии, увязанные с планами продаж — от позиционирования до оптимизации медиа-микса',
        s4_title: 'Лидогенерация',
        s4_desc: 'Масштабируемое привлечение клиентов через performance-рекламу и интеграцию с онлайн и оффлайн мероприятиями',
        s5_title: 'Продающие материалы',
        s5_desc: 'Создаём сайты, лендинги, презентации, креативы и рекламные материалы, которые конвертируют',
        s6_title: 'Сквозная аналитика',
        s6_desc: 'Отслеживаем путь от рекламных вложений до лидов, стадий воронки и закрытых сделок в CRM',
        s7_title: 'Партнёрский маркетинг',
        s7_desc: 'Выстраиваем отношения с агентствами недвижимости: создаём системы взаимоотношений, готовим партнёрские материалы и проводим обучение',

        // Process
        process_label: 'НАШ ПОДХОД',
        process_title: 'Как мы работаем',
        process_desc: 'Мы формируем готовую команду, которая берёт на себя полную ответственность за внедрение вашей маркетинговой системы.',
        step1_title: 'Исследование',
        step1_desc: 'Начинаем с понимания ваших целей, аудитории и вызовов. Глубокое исследование рынка, интервью с клиентами и внутренний аудит выявляют возможности и инсайты.',
        step2_title: 'Стратегия',
        step2_desc: 'Разрабатываем комплексную маркетинговую стратегию, привязанную к вашим планам продаж. От позиционирования и медиа-микса до архитектуры CRM и настройки аналитики.',
        step3_title: 'Реализация',
        step3_desc: 'Создаём и запускаем — материалы, рекламу, CRM, сквозную аналитику. Полная ответственность с первого дня.',
        step4_title: 'Оптимизация',
        step4_desc: 'Отслеживаем результаты, улучшаем эффективность и масштабируем то, что работает. Непрерывное улучшение на основе данных.',

        // Cases
        cases_label: 'ОПЫТ',
        cases_title: 'Подтверждённый опыт<br>с лидерами отрасли',
        c1_badge: 'Customer Experience и IT',
        c1_desc: 'Управляли CX-проектами, внедряли изменения для роста конверсий на каждом этапе пути клиента. Трансформация IT-инфраструктуры: CRM, ЭДО, онлайн-покупка квартир, сайт-маркетплейс, мобильное приложение.',
        c1_m1: 'Трансформация', c1_m2: 'Внедрение', c1_m3: 'Разработка',
        c2_badge: 'SMM и исследования',
        c2_desc: 'Исследование аудитории и стратегия коммуникации в социальных сетях для нового подразделения Яндекса',
        c2_m1: 'Стратегия',
        c3_badge: 'Digital-маркетинг',
        c3_desc: 'Удвоили продажи жилой, коммерческой и зарубежной недвижимости за год. Построили прибыльный digital-маркетинг',
        c3_m1: 'Рост продаж',
        cl1_desc: 'От создания бренда до ввода 3 500 рабочих мест',
        cl2_desc: 'Продали комплекс вилл за 6 месяцев',
        cl3_desc: 'Провели ребрендинг крупнейшего девелопера Бали',
        cl4_desc: 'Построили отдел маркетинга и лидогенерацию в 5 странах',
        cl5_desc: 'Сквозная аналитика и data-driven маркетинг для ТОП-20 девелоперов России',

        // CTA Band
        cta_title: 'Готовы выполнить планы продаж?',
        cta_subtitle: 'Обсудим ваш проект и построим индивидуальную маркетинговую систему',
        cta_btn: 'Связаться',

        // Team
        team_label: 'КОМАНДА',
        team_title: 'Партнёр, которого вы<br>искали',
        team_desc: 'Мы объединяем богатый опыт, чтобы маркетинг работал. Партнёрство с девелоперами для создания решений, отвечающих самым высоким стандартам.',
        t1_name: 'Родион Ангаев', t1_role: 'Growth-стратегии и data-driven маркетинг',
        t1_desc: 'Выстраивает маркетинговые системы и управляет KPI лидогенерации. Эксперт в партнёрском маркетинге.',
        t2_name: 'Илья Волгин', t2_role: 'Customer Experience и цифровая трансформация',
        t2_desc: 'CX-проекты, сайты-маркетплейсы, мобильные приложения, онлайн-продажи недвижимости. Директор по цифровой трансформации MR Group.',
        t3_name: 'Александр Воробьёв', t3_role: 'Брендинг, сайты и презентации',
        t3_desc: 'Более 30 проектов в недвижимости. Создаёт продающие материалы: сайты, презентации и рекламные креативы.',
        t4_name: 'Андрей Соколов', t4_role: 'Аналитика и автоматизация',
        t4_desc: 'Системная и сквозная аналитика, автоматизация маркетинга и продаж. Строит отчётность от рекламных вложений до закрытых сделок в CRM.',

        // FAQ
        faq_title: 'Часто задаваемые вопросы',
        faq1_q: 'Почему Flamelix?',
        faq1_a: 'Flamelix специализируется на достижении измеримых результатов для девелоперов недвижимости. Мы предоставляем полную маркетинговую команду — от исследований и стратегии до реализации и аналитики — устраняя необходимость координировать несколько агентств. Наш глубокий отраслевой опыт в 30+ проектах гарантирует решения, адаптированные под ваш рынок.',
        faq2_q: 'Чем Flamelix отличается от других агентств?',
        faq2_a: 'Мы не традиционное маркетинговое агентство. Мы формируем выделенную команду, встроенную в ваши процессы — покрывая исследования, CX, стратегию, лидогенерацию, продающие материалы, CRM и сквозную аналитику. Мы фокусируемся на полном жизненном цикле, привязанном к вашим планам продаж.',
        faq3_q: 'С какими отраслями вы работаете?',
        faq3_a: 'Мы специализируемся на девелопменте недвижимости — жилой, коммерческой и международной. Наши клиенты включают ведущих девелоперов, таких как MR Group, Knight Frank и ENKA, а также proptech-компании и международные платформы в 5 странах.',
        faq4_q: 'Нужна ли нам собственная маркетинговая команда для работы с вами?',
        faq4_a: 'Совсем нет. Мы выполняем функцию вашего полноценного маркетингового отдела — от стратегии до реализации. Если у вас уже есть команда, мы бесшовно интегрируемся, заполняя пробелы и усиливая возможности.',
        faq5_q: 'Как вы измеряете успех?',
        faq5_a: 'Всё привязано к вашим бизнес-целям. Мы настраиваем сквозную аналитику, отслеживая весь путь — от рекламных вложений до лидов, стадий воронки и закрытых сделок в CRM. Вы видите, как каждый рубль маркетингового бюджета превращается в продажи.',

        // Contact
        contact_label: 'КОНТАКТЫ',
        contact_title: 'Давайте построим вашу<br>маркетинговую систему',
        contact_desc: 'Расскажите о вашем проекте, и мы предложим оптимальное решение для достижения планов продаж',
        form_name: 'Имя',
        form_name_ph: 'Ваше имя',
        form_project: 'О проекте',
        form_project_ph: 'Расскажите о вашем проекте и целях...',
        form_submit: 'Отправить заявку',
        form_sent: 'Отправлено',

        // Footer
        footer_desc: 'Маркетинг и IT для девелоперов недвижимости',
        footer_copy: '\u00a9 2025 Flamelix. Все права защищены.'
    }
};

let currentLang = 'en';

function setLanguage(lang) {
    currentLang = lang;
    const t = translations[lang];
    if (!t) return;

    // Update text content
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (t[key] !== undefined) {
            el.textContent = t[key];
        }
    });

    // Update HTML content (for elements with <br> and <span>)
    document.querySelectorAll('[data-i18n-html]').forEach(el => {
        const key = el.getAttribute('data-i18n-html');
        if (t[key] !== undefined) {
            el.innerHTML = t[key];
        }
    });

    // Update placeholders
    document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
        const key = el.getAttribute('data-i18n-placeholder');
        if (t[key] !== undefined) {
            el.placeholder = t[key];
        }
    });

    // Update html lang attribute & page title
    document.documentElement.lang = lang;
    if (t.page_title) {
        document.title = t.page_title;
    }

    // Update active button
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.classList.toggle('active', btn.dataset.lang === lang);
    });

    // Save preference
    try { localStorage.setItem('flamelix-lang', lang); } catch(e) {}
}

// ====== Throttle utility ======
function throttle(fn, delay) {
    let lastCall = 0;
    return function (...args) {
        const now = Date.now();
        if (now - lastCall >= delay) {
            lastCall = now;
            fn.apply(this, args);
        }
    };
}

// ====== Initialize ======
document.addEventListener('DOMContentLoaded', () => {
    initLanguageSwitcher();
    initNavigation();
    initScrollAnimations();
    initMetricCounters();
    initContactForm();
    initFAQ();
});

// ====== Language Switcher ======
function initLanguageSwitcher() {
    const switcher = document.getElementById('langSwitcher');
    if (!switcher) return;

    // Check saved preference
    let savedLang = null;
    try { savedLang = localStorage.getItem('flamelix-lang'); } catch(e) {}

    // Check browser language
    if (!savedLang) {
        const browserLang = navigator.language || navigator.userLanguage || '';
        savedLang = browserLang.startsWith('ru') ? 'ru' : 'en';
    }

    // Set initial language
    setLanguage(savedLang);

    // Bind clicks
    switcher.querySelectorAll('.lang-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            setLanguage(btn.dataset.lang);
        });
    });
}

// ====== Navigation ======
function initNavigation() {
    const navbar = document.getElementById('navbar');
    const menuToggle = document.getElementById('menuToggle');
    const navMenu = document.getElementById('navMenu');
    const navOverlay = document.getElementById('navOverlay');

    // Throttled scroll handler
    window.addEventListener('scroll', throttle(() => {
        if (window.pageYOffset > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    }, 100));

    function closeMenu() {
        navMenu.classList.remove('active');
        menuToggle.classList.remove('active');
        menuToggle.setAttribute('aria-expanded', 'false');
        if (navOverlay) navOverlay.classList.remove('active');
        document.body.style.overflow = '';
    }

    function openMenu() {
        navMenu.classList.add('active');
        menuToggle.classList.add('active');
        menuToggle.setAttribute('aria-expanded', 'true');
        if (navOverlay) navOverlay.classList.add('active');
        document.body.style.overflow = 'hidden';
    }

    if (menuToggle && navMenu) {
        menuToggle.addEventListener('click', () => {
            const isOpen = navMenu.classList.contains('active');
            if (isOpen) {
                closeMenu();
            } else {
                openMenu();
            }
        });

        navMenu.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', closeMenu);
        });
    }

    // Close on overlay click
    if (navOverlay) {
        navOverlay.addEventListener('click', closeMenu);
    }

    // Close on Escape key
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && navMenu && navMenu.classList.contains('active')) {
            closeMenu();
        }
    });

    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        });
    });
}

// ====== Scroll Animations ======
function initScrollAnimations() {
    const aosElements = document.querySelectorAll('[data-aos]');
    if (!aosElements.length) return;

    // Safety fallback: force all elements visible after 4 seconds
    setTimeout(() => {
        aosElements.forEach(el => el.classList.add('visible'));
    }, 4000);

    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.05,
        rootMargin: '0px 0px -40px 0px'
    });

    aosElements.forEach((el) => {
        observer.observe(el);
    });

    // Immediately show elements that are already in viewport on load
    requestAnimationFrame(() => {
        aosElements.forEach(el => {
            const rect = el.getBoundingClientRect();
            if (rect.top < window.innerHeight && rect.bottom > 0) {
                el.classList.add('visible');
            }
        });
    });
}

// ====== Metric Counters ======
function initMetricCounters() {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                animateMetrics();
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.3 });

    const metricsSection = document.querySelector('.hero-metrics');
    if (metricsSection) {
        observer.observe(metricsSection);
    }
}

function animateMetrics() {
    const metrics = document.querySelectorAll('.metric-value');
    metrics.forEach(metric => {
        const target = parseInt(metric.dataset.target);
        const suffix = metric.dataset.suffix || '';
        const duration = 2000;
        const start = performance.now();

        function update(currentTime) {
            const elapsed = currentTime - start;
            const progress = Math.min(elapsed / duration, 1);
            const eased = 1 - Math.pow(1 - progress, 3);
            const current = Math.round(eased * target);

            metric.textContent = current + (progress >= 1 ? suffix : '');

            if (progress < 1) {
                requestAnimationFrame(update);
            }
        }

        requestAnimationFrame(update);
    });
}

// ====== FAQ Accordion ======
function initFAQ() {
    const faqItems = document.querySelectorAll('.faq-item');
    faqItems.forEach(item => {
        const btn = item.querySelector('.faq-question');
        if (!btn) return;

        btn.addEventListener('click', () => {
            const isActive = item.classList.contains('active');

            // Close all
            faqItems.forEach(other => {
                other.classList.remove('active');
                const otherBtn = other.querySelector('.faq-question');
                if (otherBtn) otherBtn.setAttribute('aria-expanded', 'false');
            });

            // Toggle current
            if (!isActive) {
                item.classList.add('active');
                btn.setAttribute('aria-expanded', 'true');
            }
        });
    });
}

// ====== Contact Form ======
function initContactForm() {
    const form = document.querySelector('.contact-form');
    if (form) {
        form.addEventListener('submit', (e) => {
            e.preventDefault();

            const btn = form.querySelector('button[type="submit"]');
            const originalHTML = btn.innerHTML;
            const sentText = translations[currentLang]?.form_sent || 'Sent';

            btn.innerHTML = `<span>${sentText}</span>`;
            btn.style.background = '#22c55e';
            btn.disabled = true;

            setTimeout(() => {
                btn.innerHTML = originalHTML;
                // Re-apply current language to the button text
                const submitSpan = btn.querySelector('[data-i18n]');
                if (submitSpan) {
                    const key = submitSpan.getAttribute('data-i18n');
                    submitSpan.textContent = translations[currentLang]?.[key] || submitSpan.textContent;
                }
                btn.style.background = '';
                btn.disabled = false;
                form.reset();
            }, 3000);
        });
    }
}
