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
        hero_title: 'We help achieve<br><span class="gradient-text">sales targets</span> by<br>building data-driven<br>marketing systems',
        hero_subtitle: 'We work across all stages: from market analysis to strategy execution — through research, creating marketing materials, lead generation, CRM implementation, and end-to-end analytics setup.',
        hero_cta: 'Start a Project',
        hero_cta2: 'Our Experience',
        metric_projects: 'Projects delivered',
        metric_years: 'Years of experience',
        metric_countries: 'Countries',

        // Services
        services_label: 'What We Do',
        services_title: 'A ready-made team that takes<br>full ownership of your marketing system',
        s1_title: 'Research',
        s1_desc: 'Market analysis, in-depth customer interviews, internal process audits, advertising channel potential assessment',
        s1_t1: 'Market Analysis', s1_t2: 'Interviews', s1_t3: 'Audits', s1_t4: 'Channel Assessment',
        s2_title: 'Customer Experience',
        s2_desc: 'We implement a human-centered approach — learning to listen to customers. Applied to product development, strategies, IT infrastructure, and team processes',
        s2_t1: 'CX Strategy', s2_t2: 'Human-Centered', s2_t3: 'Journey Mapping', s2_t4: 'Conversion',
        s3_title: 'Marketing Strategy',
        s3_desc: 'We develop and execute strategies aligned with sales targets — from positioning to channel mix optimization',
        s3_t1: 'Strategy', s3_t2: 'Sales Targets', s3_t3: 'Positioning', s3_t4: 'Channel Mix',
        s4_title: 'Lead Generation',
        s4_desc: 'Scalable customer acquisition through performance advertising and integration with online and offline events',
        s4_t2: 'Paid Ads', s4_t3: 'Events', s4_t4: 'Scalable Growth',
        s5_title: 'Sales Materials',
        s5_desc: 'We create websites, landing pages, presentations, creatives, and advertising materials that convert',
        s5_t1: 'Websites', s5_t2: 'Landing Pages', s5_t3: 'Presentations', s5_t4: 'Creatives',
        s6_title: 'End-to-End Analytics',
        s6_desc: 'We track the journey from advertising spend to leads, funnel stages, and closed deals in CRM',
        s6_t1: 'Analytics', s6_t3: 'Attribution', s6_t4: 'ROI Tracking',
        s7_title: 'Partner Marketing',
        s7_desc: 'We build relationships with real estate agencies: create relationship systems, prepare partner materials, and conduct training',
        s7_t1: 'Agency Relations', s7_t2: 'Partner Materials', s7_t3: 'Training', s7_t4: 'Co-marketing',

        // Cases
        cases_label: 'Experience',
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

        // Insight
        insight_quote: 'We form a ready-made team that takes full ownership of implementing your marketing system — from research and strategy to execution and analytics',
        insight_author: '— Flamelix Approach',

        // CTA Band
        cta_title: 'Ready to hit your sales targets?',
        cta_subtitle: "Let's discuss your project and build a custom marketing system",
        cta_btn: 'Get in Touch',

        // Team
        team_label: 'Team',
        team_title: 'Expert team with<br>deep industry knowledge',
        t1_name: 'Rodion Angaev', t1_role: 'Growth Strategies & Data-Driven Marketing',
        t1_desc: 'Builds marketing systems and manages lead generation KPIs. Partner marketing expert.',
        t2_name: 'Ilya Volgin', t2_role: 'Customer Experience & Digital Transformation',
        t2_desc: 'CX projects, marketplace websites, mobile apps, online real estate sales. Director of Digital Transformation at MR Group.',
        t3_name: 'Alexander Vorobyov', t3_role: 'Branding, Websites & Presentations',
        t3_desc: 'Over 30 real estate projects. Creates sales materials: websites, presentations, and advertising creatives.',
        t4_name: 'Andrey Sokolov', t4_role: 'Analytics & Automation',
        t4_desc: 'System and end-to-end analytics, marketing and sales automation. Builds reporting from ad investments to closed deals in CRM.',

        // Contact
        contact_label: 'Contact',
        contact_title: "Let's build your<br>marketing system",
        contact_desc: "Tell us about your project, and we'll propose the optimal solution to hit your sales targets",
        form_name: 'Name',
        form_name_ph: 'Your name',
        form_project: 'About your project',
        form_project_ph: 'Tell us about your project and goals...',
        form_submit: 'Send Request',
        form_sent: 'Sent ✓',

        // Footer
        footer_desc: 'Marketing & IT Team for Real Estate Developers',
        footer_copy: '© 2025 Flamelix. All rights reserved.'
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
        hero_title: 'Помогаем достигать<br><span class="gradient-text">планов продаж</span>,<br>выстраивая data-driven<br>маркетинговые системы',
        hero_subtitle: 'Работаем на всех этапах: от анализа рынка до реализации стратегии — через исследования, создание маркетинговых материалов, лидогенерацию, внедрение CRM и настройку сквозной аналитики.',
        hero_cta: 'Начать проект',
        hero_cta2: 'Наш опыт',
        metric_projects: 'Проектов реализовано',
        metric_years: 'Лет опыта',
        metric_countries: 'Стран',

        // Services
        services_label: 'Что мы делаем',
        services_title: 'Готовая команда, которая берёт<br>на себя всю вашу маркетинговую систему',
        s1_title: 'Исследования',
        s1_desc: 'Анализ рынка, глубинные интервью с клиентами, аудит внутренних процессов, оценка потенциала рекламных каналов',
        s1_t1: 'Анализ рынка', s1_t2: 'Интервью', s1_t3: 'Аудит', s1_t4: 'Оценка каналов',
        s2_title: 'Customer Experience',
        s2_desc: 'Внедряем человекоцентричный подход — учимся слушать клиентов. Применяем к разработке продукта, стратегиям, IT-инфраструктуре и командным процессам',
        s2_t1: 'CX-стратегия', s2_t2: 'Человекоцентричность', s2_t3: 'Карта пути клиента', s2_t4: 'Конверсия',
        s3_title: 'Маркетинговая стратегия',
        s3_desc: 'Разрабатываем и реализуем стратегии, увязанные с планами продаж — от позиционирования до оптимизации медиа-микса',
        s3_t1: 'Стратегия', s3_t2: 'Планы продаж', s3_t3: 'Позиционирование', s3_t4: 'Медиа-микс',
        s4_title: 'Лидогенерация',
        s4_desc: 'Масштабируемое привлечение клиентов через performance-рекламу и интеграцию с онлайн и оффлайн мероприятиями',
        s4_t2: 'Реклама', s4_t3: 'Мероприятия', s4_t4: 'Масштабируемый рост',
        s5_title: 'Продающие материалы',
        s5_desc: 'Создаём сайты, лендинги, презентации, креативы и рекламные материалы, которые конвертируют',
        s5_t1: 'Сайты', s5_t2: 'Лендинги', s5_t3: 'Презентации', s5_t4: 'Креативы',
        s6_title: 'Сквозная аналитика',
        s6_desc: 'Отслеживаем путь от рекламных вложений до лидов, стадий воронки и закрытых сделок в CRM',
        s6_t1: 'Аналитика', s6_t3: 'Атрибуция', s6_t4: 'Отслеживание ROI',
        s7_title: 'Партнёрский маркетинг',
        s7_desc: 'Выстраиваем отношения с агентствами недвижимости: создаём системы взаимоотношений, готовим партнёрские материалы и проводим обучение',
        s7_t1: 'Работа с агентствами', s7_t2: 'Партнёрские материалы', s7_t3: 'Обучение', s7_t4: 'Ко-маркетинг',

        // Cases
        cases_label: 'Опыт',
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

        // Insight
        insight_quote: 'Мы формируем готовую команду, которая берёт на себя полную ответственность за внедрение вашей маркетинговой системы — от исследований и стратегии до реализации и аналитики',
        insight_author: '— Подход Flamelix',

        // CTA Band
        cta_title: 'Готовы выполнить планы продаж?',
        cta_subtitle: 'Обсудим ваш проект и построим индивидуальную маркетинговую систему',
        cta_btn: 'Связаться',

        // Team
        team_label: 'Команда',
        team_title: 'Экспертная команда<br>с глубоким знанием отрасли',
        t1_name: 'Родион Ангаев', t1_role: 'Growth-стратегии и data-driven маркетинг',
        t1_desc: 'Выстраивает маркетинговые системы и управляет KPI лидогенерации. Эксперт в партнёрском маркетинге.',
        t2_name: 'Илья Волгин', t2_role: 'Customer Experience и цифровая трансформация',
        t2_desc: 'CX-проекты, сайты-маркетплейсы, мобильные приложения, онлайн-продажи недвижимости. Директор по цифровой трансформации MR Group.',
        t3_name: 'Александр Воробьёв', t3_role: 'Брендинг, сайты и презентации',
        t3_desc: 'Более 30 проектов в недвижимости. Создаёт продающие материалы: сайты, презентации и рекламные креативы.',
        t4_name: 'Андрей Соколов', t4_role: 'Аналитика и автоматизация',
        t4_desc: 'Системная и сквозная аналитика, автоматизация маркетинга и продаж. Строит отчётность от рекламных вложений до закрытых сделок в CRM.',

        // Contact
        contact_label: 'Контакты',
        contact_title: 'Давайте построим вашу<br>маркетинговую систему',
        contact_desc: 'Расскажите о вашем проекте, и мы предложим оптимальное решение для достижения планов продаж',
        form_name: 'Имя',
        form_name_ph: 'Ваше имя',
        form_project: 'О проекте',
        form_project_ph: 'Расскажите о вашем проекте и целях...',
        form_submit: 'Отправить заявку',
        form_sent: 'Отправлено ✓',

        // Footer
        footer_desc: 'Маркетинг и IT для девелоперов недвижимости',
        footer_copy: '© 2025 Flamelix. Все права защищены.'
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

// ====== Particle Network Canvas ======
class ParticleNetwork {
    constructor(canvas) {
        this.canvas = canvas;
        this.ctx = canvas.getContext('2d');
        this.particles = [];
        this.mouse = { x: null, y: null, radius: 150 };
        this.numParticles = 80;
        this.maxDistance = 150;
        this.isVisible = true;
        this.animationId = null;

        this.resize();
        this.init();
        this.bindEvents();
        this.animate();
    }

    resize() {
        this.canvas.width = window.innerWidth;
        this.canvas.height = window.innerHeight;
    }

    init() {
        this.particles = [];
        for (let i = 0; i < this.numParticles; i++) {
            this.particles.push({
                x: Math.random() * this.canvas.width,
                y: Math.random() * this.canvas.height,
                vx: (Math.random() - 0.5) * 0.5,
                vy: (Math.random() - 0.5) * 0.5,
                size: Math.random() * 1.5 + 0.5,
                opacity: Math.random() * 0.5 + 0.1,
            });
        }
    }

    bindEvents() {
        let resizeTimer;
        window.addEventListener('resize', () => {
            clearTimeout(resizeTimer);
            resizeTimer = setTimeout(() => {
                this.resize();
                this.init();
            }, 200);
        });

        window.addEventListener('mousemove', (e) => {
            this.mouse.x = e.clientX;
            this.mouse.y = e.clientY;
        });

        window.addEventListener('mouseout', () => {
            this.mouse.x = null;
            this.mouse.y = null;
        });

        // Pause animation when tab is hidden
        document.addEventListener('visibilitychange', () => {
            if (document.hidden) {
                this.isVisible = false;
                if (this.animationId) {
                    cancelAnimationFrame(this.animationId);
                    this.animationId = null;
                }
            } else {
                this.isVisible = true;
                if (!this.animationId) {
                    this.animate();
                }
            }
        });
    }

    animate() {
        if (!this.isVisible) return;

        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

        for (let i = 0; i < this.particles.length; i++) {
            const p = this.particles[i];

            p.x += p.vx;
            p.y += p.vy;

            if (p.x < 0 || p.x > this.canvas.width) p.vx *= -1;
            if (p.y < 0 || p.y > this.canvas.height) p.vy *= -1;

            if (this.mouse.x && this.mouse.y) {
                const dx = p.x - this.mouse.x;
                const dy = p.y - this.mouse.y;
                const dist = Math.sqrt(dx * dx + dy * dy);
                if (dist < this.mouse.radius) {
                    const force = (this.mouse.radius - dist) / this.mouse.radius;
                    p.x += dx * force * 0.02;
                    p.y += dy * force * 0.02;
                }
            }

            this.ctx.beginPath();
            this.ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
            this.ctx.fillStyle = `rgba(96, 165, 250, ${p.opacity})`;
            this.ctx.fill();

            for (let j = i + 1; j < this.particles.length; j++) {
                const p2 = this.particles[j];
                const dx = p.x - p2.x;
                const dy = p.y - p2.y;
                const dist = Math.sqrt(dx * dx + dy * dy);

                if (dist < this.maxDistance) {
                    const alpha = (1 - dist / this.maxDistance) * 0.15;
                    this.ctx.beginPath();
                    this.ctx.moveTo(p.x, p.y);
                    this.ctx.lineTo(p2.x, p2.y);
                    this.ctx.strokeStyle = `rgba(96, 165, 250, ${alpha})`;
                    this.ctx.lineWidth = 0.5;
                    this.ctx.stroke();
                }
            }
        }

        this.animationId = requestAnimationFrame(() => this.animate());
    }
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
    const canvas = document.getElementById('particleCanvas');
    if (canvas) {
        new ParticleNetwork(canvas);
    }

    initLanguageSwitcher();
    initNavigation();
    initScrollAnimations();
    initMetricCounters();
    initContactForm();
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

    // Use a very low threshold so elements appear as soon as they peek into view
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.02,
        rootMargin: '0px 0px 0px 0px'
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

// ====== Contact Form ======
function initContactForm() {
    const form = document.querySelector('.contact-form');
    if (form) {
        form.addEventListener('submit', (e) => {
            e.preventDefault();

            const btn = form.querySelector('button[type="submit"]');
            const originalHTML = btn.innerHTML;
            const sentText = translations[currentLang]?.form_sent || 'Sent ✓';

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
