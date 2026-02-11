/* ========================================
   FLAMELIX — Interactive Scripts
   Claude-inspired edition
   ======================================== */

// ====== Translations ======
const translations = {
    en: {
        page_title: 'Flamelix — Marketing & IT Team for Real Estate Developers',

        nav_services: 'Services',
        nav_experience: 'Experience',
        nav_approach: 'How We Work',
        nav_team: 'Team',
        nav_contact: 'Get in Touch',

        hero_badge: 'Marketing & IT Team for Real Estate',
        hero_title: 'We help achieve <em>sales targets</em> by building data\u2011driven marketing\u00a0systems',
        hero_subtitle: 'From market analysis to strategy execution — research, marketing materials, lead generation, CRM, and end-to-end analytics.',
        hero_cta: 'Start a Project',
        hero_cta2: 'Explore Services',
        metric_projects: 'Projects delivered',
        metric_years: 'Years of experience',
        metric_countries: 'Countries',

        trusted_label: 'Trusted by',

        value_title: 'A complete marketing team,<br>built around your sales goals',
        value_text: "We don\u2019t sell services \u2014 we take ownership of your entire marketing system. From research to closed deals, one integrated team replaces the need for multiple agencies.",

        services_label: 'Services',
        services_heading: 'What we do',
        s1_title: 'Research',
        s1_desc: 'Market analysis, in-depth customer interviews, internal process audits, advertising channel potential assessment',
        s2_title: 'Customer Experience',
        s2_desc: 'We implement a human-centered approach \u2014 learning to listen to customers. Applied to product development, strategies, IT infrastructure, and team processes',
        s3_title: 'Marketing Strategy',
        s3_desc: 'We develop and execute strategies aligned with sales targets \u2014 from positioning to channel mix optimization',
        s4_title: 'Lead Generation',
        s4_desc: 'Scalable customer acquisition through performance advertising and integration with online and offline events',
        s5_title: 'Sales Materials',
        s5_desc: 'We create websites, landing pages, presentations, creatives, and advertising materials that convert',
        s6_title: 'End-to-End Analytics',
        s6_desc: 'We track the journey from advertising spend to leads, funnel stages, and closed deals in CRM',
        s7_title: 'Partner Marketing',
        s7_desc: 'We build relationships with real estate agencies: create relationship systems, prepare partner materials, and conduct training',

        process_label: 'Approach',
        process_heading: 'How we work',
        step1_title: 'Discover',
        step1_desc: 'We start by understanding your goals, audience, and challenges. Deep market research, customer interviews, and internal audits reveal opportunities and surface actionable insights.',
        step2_title: 'Strategize',
        step2_desc: 'We develop a comprehensive marketing strategy aligned with your sales targets. From positioning and channel mix to CRM architecture and analytics setup.',
        step3_title: 'Execute',
        step3_desc: 'We build and launch \u2014 creating materials, setting up advertising, implementing CRM, and configuring end-to-end analytics. Full ownership from day one.',
        step4_title: 'Optimize',
        step4_desc: 'We track results, refine performance, and scale what works. Continuous improvement driven by data \u2014 from ad investments to closed deals in CRM.',

        cases_label: 'Experience',
        cases_heading: 'Proven track record with industry\u00a0leaders',
        c1_badge: 'Customer Experience & IT',
        c1_desc: 'Managed Customer Experience projects, implemented changes to increase conversions at every stage of the customer journey. IT infrastructure transformation: CRM, electronic document management, online apartment purchases, marketplace website, mobile app.',
        c1_m1: 'Transformation', c1_m2: 'Implementation', c1_m3: 'Development',
        c2_badge: 'SMM & Research',
        c2_desc: "Audience research and social media communication strategy for Yandex\u2019s new division",
        c2_m1: 'Strategy',
        c3_badge: 'Digital Marketing',
        c3_desc: 'Doubled sales of residential, commercial, and international real estate in one year. Built profitable digital marketing',
        c3_m1: 'Sales Growth',
        cl1_desc: 'From brand creation to delivering 3,500 workspaces',
        cl2_desc: 'Sold a villa complex in 6 months',
        cl3_desc: "Rebranded Bali\u2019s largest developer",
        cl4_desc: 'Built marketing department and lead generation across 5 countries',
        cl5_desc: 'End-to-end analytics and data-driven marketing for TOP-20 Russian developers',

        testimonial_label: 'Testimonials',
        testimonial_1_text: 'Flamelix\u2019s systematic approach and analytical precision played a key role in Flexity\u2019s growth. Over three years of partnership their team built us a modern marketing infrastructure, high\u2011performing campaigns, and end\u2011to\u2011end measurable results.',
        testimonial_1_name: 'Sarper Altunyuva',
        testimonial_1_role: 'CEO, Flexity (ENKA)',

        cta_title: 'Ready to hit your sales targets?',
        cta_subtitle: "Let\u2019s discuss your project and build a custom marketing system",
        cta_btn: 'Get in Touch',

        team_label: 'Team',
        team_heading: 'The partner you have been\u00a0looking\u00a0for',
        t1_name: 'Rodion Angaev', t1_role: 'Growth Strategies & Data-Driven Marketing',
        t1_desc: 'Builds marketing systems and manages lead generation KPIs. Partner marketing expert.',
        t2_name: 'Ilya Volgin', t2_role: 'Customer Experience & Digital Transformation',
        t2_desc: 'CX projects, marketplace websites, mobile apps, online real estate sales. Director of Digital Transformation at MR Group.',
        t3_name: 'Alexander Vorobyov', t3_role: 'Branding, Websites & Presentations',
        t3_desc: 'Over 30 real estate projects. Creates sales materials: websites, presentations, and advertising creatives.',
        t4_name: 'Andrey Sokolov', t4_role: 'Analytics & Automation',
        t4_desc: 'System and end-to-end analytics, marketing and sales automation. Builds reporting from ad investments to closed deals in CRM.',

        faq_title: 'Frequently Asked Questions',
        faq1_q: 'Why choose Flamelix?',
        faq1_a: 'Flamelix is dedicated to delivering measurable results for real estate developers. We provide a complete marketing team \u2014 from research and strategy to execution and analytics \u2014 eliminating the need to coordinate multiple agencies. Our deep industry expertise across 30+ projects ensures solutions tailored to your specific market.',
        faq2_q: 'What makes Flamelix different from other agencies?',
        faq2_a: 'We are not a traditional marketing agency. We form a dedicated team embedded in your processes \u2014 covering research, CX, strategy, lead generation, sales materials, CRM, and end-to-end analytics. We focus on full-lifecycle support tied directly to your sales targets, not vanity metrics.',
        faq3_q: 'What industries do you work with?',
        faq3_a: 'We specialize in real estate development \u2014 residential, commercial, and international properties. Our clients include top developers like MR Group, Knight Frank, and ENKA, as well as proptech companies and international real estate platforms across 5 countries.',
        faq4_q: 'Do we need an in-house marketing team?',
        faq4_a: 'Not at all. We function as your complete marketing department \u2014 handling everything from strategy to implementation. If you already have a team, we integrate seamlessly, filling gaps and amplifying capabilities. Either way, you get a full-cycle solution.',
        faq5_q: 'How do you measure success?',
        faq5_a: 'Everything is tied to your business goals. We set up end-to-end analytics tracking the full journey \u2014 from advertising spend to leads, funnel stages, and closed deals in CRM. You see exactly how every ruble or dollar of your marketing budget translates into sales.',

        contact_label: 'Contact',
        contact_heading: "Let\u2019s build your marketing\u00a0system",
        contact_desc: "Tell us about your project, and we\u2019ll propose the optimal solution to hit your sales targets",
        form_name: 'Name',
        form_name_ph: 'Your name',
        form_project: 'About your project',
        form_project_ph: 'Tell us about your project and goals...',
        form_submit: 'Send Request',
        form_sent: 'Sent',

        footer_desc: 'Marketing & IT Team for Real Estate Developers',
        footer_copy: '\u00a9 2026 Flamelix. All rights reserved.'
    },
    ru: {
        page_title: 'Flamelix \u2014 \u041c\u0430\u0440\u043a\u0435\u0442\u0438\u043d\u0433 \u0438 IT \u0434\u043b\u044f \u0434\u0435\u0432\u0435\u043b\u043e\u043f\u0435\u0440\u043e\u0432 \u043d\u0435\u0434\u0432\u0438\u0436\u0438\u043c\u043e\u0441\u0442\u0438',

        nav_services: '\u0423\u0441\u043b\u0443\u0433\u0438',
        nav_experience: '\u041e\u043f\u044b\u0442',
        nav_approach: '\u041f\u043e\u0434\u0445\u043e\u0434',
        nav_team: '\u041a\u043e\u043c\u0430\u043d\u0434\u0430',
        nav_contact: '\u0421\u0432\u044f\u0437\u0430\u0442\u044c\u0441\u044f',

        hero_badge: '\u041c\u0430\u0440\u043a\u0435\u0442\u0438\u043d\u0433 \u0438 IT \u0434\u043b\u044f \u0434\u0435\u0432\u0435\u043b\u043e\u043f\u0435\u0440\u043e\u0432 \u043d\u0435\u0434\u0432\u0438\u0436\u0438\u043c\u043e\u0441\u0442\u0438',
        hero_title: '\u041f\u043e\u043c\u043e\u0433\u0430\u0435\u043c \u0434\u043e\u0441\u0442\u0438\u0433\u0430\u0442\u044c <em>\u043f\u043b\u0430\u043d\u043e\u0432 \u043f\u0440\u043e\u0434\u0430\u0436</em>, \u0432\u044b\u0441\u0442\u0440\u0430\u0438\u0432\u0430\u044f data\u2011driven \u043c\u0430\u0440\u043a\u0435\u0442\u0438\u043d\u0433\u043e\u0432\u044b\u0435\u00a0\u0441\u0438\u0441\u0442\u0435\u043c\u044b',
        hero_subtitle: '\u041e\u0442 \u0430\u043d\u0430\u043b\u0438\u0437\u0430 \u0440\u044b\u043d\u043a\u0430 \u0434\u043e \u0440\u0435\u0430\u043b\u0438\u0437\u0430\u0446\u0438\u0438 \u0441\u0442\u0440\u0430\u0442\u0435\u0433\u0438\u0438 \u2014 \u0438\u0441\u0441\u043b\u0435\u0434\u043e\u0432\u0430\u043d\u0438\u044f, \u043c\u0430\u0440\u043a\u0435\u0442\u0438\u043d\u0433\u043e\u0432\u044b\u0435 \u043c\u0430\u0442\u0435\u0440\u0438\u0430\u043b\u044b, \u043b\u0438\u0434\u043e\u0433\u0435\u043d\u0435\u0440\u0430\u0446\u0438\u044f, CRM \u0438 \u0441\u043a\u0432\u043e\u0437\u043d\u0430\u044f \u0430\u043d\u0430\u043b\u0438\u0442\u0438\u043a\u0430.',
        hero_cta: '\u041d\u0430\u0447\u0430\u0442\u044c \u043f\u0440\u043e\u0435\u043a\u0442',
        hero_cta2: '\u041d\u0430\u0448\u0438 \u0443\u0441\u043b\u0443\u0433\u0438',
        metric_projects: '\u041f\u0440\u043e\u0435\u043a\u0442\u043e\u0432 \u0440\u0435\u0430\u043b\u0438\u0437\u043e\u0432\u0430\u043d\u043e',
        metric_years: '\u041b\u0435\u0442 \u043e\u043f\u044b\u0442\u0430',
        metric_countries: '\u0421\u0442\u0440\u0430\u043d',

        trusted_label: '\u041d\u0430\u043c \u0434\u043e\u0432\u0435\u0440\u044f\u044e\u0442',

        value_title: '\u041f\u043e\u043b\u043d\u043e\u0446\u0435\u043d\u043d\u0430\u044f \u043c\u0430\u0440\u043a\u0435\u0442\u0438\u043d\u0433\u043e\u0432\u0430\u044f \u043a\u043e\u043c\u0430\u043d\u0434\u0430,<br>\u043f\u043e\u0441\u0442\u0440\u043e\u0435\u043d\u043d\u0430\u044f \u0432\u043e\u043a\u0440\u0443\u0433 \u0432\u0430\u0448\u0438\u0445 \u043f\u043b\u0430\u043d\u043e\u0432 \u043f\u0440\u043e\u0434\u0430\u0436',
        value_text: '\u041c\u044b \u043d\u0435 \u043f\u0440\u043e\u0434\u0430\u0451\u043c \u0443\u0441\u043b\u0443\u0433\u0438 \u2014 \u043c\u044b \u0431\u0435\u0440\u0451\u043c \u043d\u0430 \u0441\u0435\u0431\u044f \u0432\u0441\u044e \u0432\u0430\u0448\u0443 \u043c\u0430\u0440\u043a\u0435\u0442\u0438\u043d\u0433\u043e\u0432\u0443\u044e \u0441\u0438\u0441\u0442\u0435\u043c\u0443. \u041e\u0442 \u0438\u0441\u0441\u043b\u0435\u0434\u043e\u0432\u0430\u043d\u0438\u0439 \u0434\u043e \u0437\u0430\u043a\u0440\u044b\u0442\u044b\u0445 \u0441\u0434\u0435\u043b\u043e\u043a \u2014 \u043e\u0434\u043d\u0430 \u0438\u043d\u0442\u0435\u0433\u0440\u0438\u0440\u043e\u0432\u0430\u043d\u043d\u0430\u044f \u043a\u043e\u043c\u0430\u043d\u0434\u0430 \u0432\u043c\u0435\u0441\u0442\u043e \u043d\u0435\u0441\u043a\u043e\u043b\u044c\u043a\u0438\u0445 \u0430\u0433\u0435\u043d\u0442\u0441\u0442\u0432.',

        services_label: '\u0423\u0441\u043b\u0443\u0433\u0438',
        services_heading: '\u0427\u0442\u043e \u043c\u044b \u0434\u0435\u043b\u0430\u0435\u043c',
        s1_title: '\u0418\u0441\u0441\u043b\u0435\u0434\u043e\u0432\u0430\u043d\u0438\u044f',
        s1_desc: '\u0410\u043d\u0430\u043b\u0438\u0437 \u0440\u044b\u043d\u043a\u0430, \u0433\u043b\u0443\u0431\u0438\u043d\u043d\u044b\u0435 \u0438\u043d\u0442\u0435\u0440\u0432\u044c\u044e \u0441 \u043a\u043b\u0438\u0435\u043d\u0442\u0430\u043c\u0438, \u0430\u0443\u0434\u0438\u0442 \u0432\u043d\u0443\u0442\u0440\u0435\u043d\u043d\u0438\u0445 \u043f\u0440\u043e\u0446\u0435\u0441\u0441\u043e\u0432, \u043e\u0446\u0435\u043d\u043a\u0430 \u043f\u043e\u0442\u0435\u043d\u0446\u0438\u0430\u043b\u0430 \u0440\u0435\u043a\u043b\u0430\u043c\u043d\u044b\u0445 \u043a\u0430\u043d\u0430\u043b\u043e\u0432',
        s2_title: 'Customer Experience',
        s2_desc: '\u0412\u043d\u0435\u0434\u0440\u044f\u0435\u043c \u0447\u0435\u043b\u043e\u0432\u0435\u043a\u043e\u0446\u0435\u043d\u0442\u0440\u0438\u0447\u043d\u044b\u0439 \u043f\u043e\u0434\u0445\u043e\u0434 \u2014 \u0443\u0447\u0438\u043c\u0441\u044f \u0441\u043b\u0443\u0448\u0430\u0442\u044c \u043a\u043b\u0438\u0435\u043d\u0442\u043e\u0432. \u041f\u0440\u0438\u043c\u0435\u043d\u044f\u0435\u043c \u043a \u0440\u0430\u0437\u0440\u0430\u0431\u043e\u0442\u043a\u0435 \u043f\u0440\u043e\u0434\u0443\u043a\u0442\u0430, \u0441\u0442\u0440\u0430\u0442\u0435\u0433\u0438\u044f\u043c, IT-\u0438\u043d\u0444\u0440\u0430\u0441\u0442\u0440\u0443\u043a\u0442\u0443\u0440\u0435 \u0438 \u043a\u043e\u043c\u0430\u043d\u0434\u043d\u044b\u043c \u043f\u0440\u043e\u0446\u0435\u0441\u0441\u0430\u043c',
        s3_title: '\u041c\u0430\u0440\u043a\u0435\u0442\u0438\u043d\u0433\u043e\u0432\u0430\u044f \u0441\u0442\u0440\u0430\u0442\u0435\u0433\u0438\u044f',
        s3_desc: '\u0420\u0430\u0437\u0440\u0430\u0431\u0430\u0442\u044b\u0432\u0430\u0435\u043c \u0438 \u0440\u0435\u0430\u043b\u0438\u0437\u0443\u0435\u043c \u0441\u0442\u0440\u0430\u0442\u0435\u0433\u0438\u0438, \u0443\u0432\u044f\u0437\u0430\u043d\u043d\u044b\u0435 \u0441 \u043f\u043b\u0430\u043d\u0430\u043c\u0438 \u043f\u0440\u043e\u0434\u0430\u0436 \u2014 \u043e\u0442 \u043f\u043e\u0437\u0438\u0446\u0438\u043e\u043d\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u044f \u0434\u043e \u043e\u043f\u0442\u0438\u043c\u0438\u0437\u0430\u0446\u0438\u0438 \u043c\u0435\u0434\u0438\u0430-\u043c\u0438\u043a\u0441\u0430',
        s4_title: '\u041b\u0438\u0434\u043e\u0433\u0435\u043d\u0435\u0440\u0430\u0446\u0438\u044f',
        s4_desc: '\u041c\u0430\u0441\u0448\u0442\u0430\u0431\u0438\u0440\u0443\u0435\u043c\u043e\u0435 \u043f\u0440\u0438\u0432\u043b\u0435\u0447\u0435\u043d\u0438\u0435 \u043a\u043b\u0438\u0435\u043d\u0442\u043e\u0432 \u0447\u0435\u0440\u0435\u0437 performance-\u0440\u0435\u043a\u043b\u0430\u043c\u0443 \u0438 \u0438\u043d\u0442\u0435\u0433\u0440\u0430\u0446\u0438\u044e \u0441 \u043e\u043d\u043b\u0430\u0439\u043d \u0438 \u043e\u0444\u0444\u043b\u0430\u0439\u043d \u043c\u0435\u0440\u043e\u043f\u0440\u0438\u044f\u0442\u0438\u044f\u043c\u0438',
        s5_title: '\u041f\u0440\u043e\u0434\u0430\u044e\u0449\u0438\u0435 \u043c\u0430\u0442\u0435\u0440\u0438\u0430\u043b\u044b',
        s5_desc: '\u0421\u043e\u0437\u0434\u0430\u0451\u043c \u0441\u0430\u0439\u0442\u044b, \u043b\u0435\u043d\u0434\u0438\u043d\u0433\u0438, \u043f\u0440\u0435\u0437\u0435\u043d\u0442\u0430\u0446\u0438\u0438, \u043a\u0440\u0435\u0430\u0442\u0438\u0432\u044b \u0438 \u0440\u0435\u043a\u043b\u0430\u043c\u043d\u044b\u0435 \u043c\u0430\u0442\u0435\u0440\u0438\u0430\u043b\u044b, \u043a\u043e\u0442\u043e\u0440\u044b\u0435 \u043a\u043e\u043d\u0432\u0435\u0440\u0442\u0438\u0440\u0443\u044e\u0442',
        s6_title: '\u0421\u043a\u0432\u043e\u0437\u043d\u0430\u044f \u0430\u043d\u0430\u043b\u0438\u0442\u0438\u043a\u0430',
        s6_desc: '\u041e\u0442\u0441\u043b\u0435\u0436\u0438\u0432\u0430\u0435\u043c \u043f\u0443\u0442\u044c \u043e\u0442 \u0440\u0435\u043a\u043b\u0430\u043c\u043d\u044b\u0445 \u0432\u043b\u043e\u0436\u0435\u043d\u0438\u0439 \u0434\u043e \u043b\u0438\u0434\u043e\u0432, \u0441\u0442\u0430\u0434\u0438\u0439 \u0432\u043e\u0440\u043e\u043d\u043a\u0438 \u0438 \u0437\u0430\u043a\u0440\u044b\u0442\u044b\u0445 \u0441\u0434\u0435\u043b\u043e\u043a \u0432 CRM',
        s7_title: '\u041f\u0430\u0440\u0442\u043d\u0451\u0440\u0441\u043a\u0438\u0439 \u043c\u0430\u0440\u043a\u0435\u0442\u0438\u043d\u0433',
        s7_desc: '\u0412\u044b\u0441\u0442\u0440\u0430\u0438\u0432\u0430\u0435\u043c \u043e\u0442\u043d\u043e\u0448\u0435\u043d\u0438\u044f \u0441 \u0430\u0433\u0435\u043d\u0442\u0441\u0442\u0432\u0430\u043c\u0438 \u043d\u0435\u0434\u0432\u0438\u0436\u0438\u043c\u043e\u0441\u0442\u0438: \u0441\u043e\u0437\u0434\u0430\u0451\u043c \u0441\u0438\u0441\u0442\u0435\u043c\u044b \u0432\u0437\u0430\u0438\u043c\u043e\u043e\u0442\u043d\u043e\u0448\u0435\u043d\u0438\u0439, \u0433\u043e\u0442\u043e\u0432\u0438\u043c \u043f\u0430\u0440\u0442\u043d\u0451\u0440\u0441\u043a\u0438\u0435 \u043c\u0430\u0442\u0435\u0440\u0438\u0430\u043b\u044b \u0438 \u043f\u0440\u043e\u0432\u043e\u0434\u0438\u043c \u043e\u0431\u0443\u0447\u0435\u043d\u0438\u0435',

        process_label: '\u041f\u043e\u0434\u0445\u043e\u0434',
        process_heading: '\u041a\u0430\u043a \u043c\u044b \u0440\u0430\u0431\u043e\u0442\u0430\u0435\u043c',
        step1_title: '\u0418\u0441\u0441\u043b\u0435\u0434\u043e\u0432\u0430\u043d\u0438\u0435',
        step1_desc: '\u041d\u0430\u0447\u0438\u043d\u0430\u0435\u043c \u0441 \u043f\u043e\u043d\u0438\u043c\u0430\u043d\u0438\u044f \u0432\u0430\u0448\u0438\u0445 \u0446\u0435\u043b\u0435\u0439, \u0430\u0443\u0434\u0438\u0442\u043e\u0440\u0438\u0438 \u0438 \u0432\u044b\u0437\u043e\u0432\u043e\u0432. \u0413\u043b\u0443\u0431\u043e\u043a\u043e\u0435 \u0438\u0441\u0441\u043b\u0435\u0434\u043e\u0432\u0430\u043d\u0438\u0435 \u0440\u044b\u043d\u043a\u0430, \u0438\u043d\u0442\u0435\u0440\u0432\u044c\u044e \u0441 \u043a\u043b\u0438\u0435\u043d\u0442\u0430\u043c\u0438 \u0438 \u0432\u043d\u0443\u0442\u0440\u0435\u043d\u043d\u0438\u0439 \u0430\u0443\u0434\u0438\u0442 \u0432\u044b\u044f\u0432\u043b\u044f\u044e\u0442 \u0432\u043e\u0437\u043c\u043e\u0436\u043d\u043e\u0441\u0442\u0438 \u0438 \u0438\u043d\u0441\u0430\u0439\u0442\u044b.',
        step2_title: '\u0421\u0442\u0440\u0430\u0442\u0435\u0433\u0438\u044f',
        step2_desc: '\u0420\u0430\u0437\u0440\u0430\u0431\u0430\u0442\u044b\u0432\u0430\u0435\u043c \u043a\u043e\u043c\u043f\u043b\u0435\u043a\u0441\u043d\u0443\u044e \u043c\u0430\u0440\u043a\u0435\u0442\u0438\u043d\u0433\u043e\u0432\u0443\u044e \u0441\u0442\u0440\u0430\u0442\u0435\u0433\u0438\u044e, \u043f\u0440\u0438\u0432\u044f\u0437\u0430\u043d\u043d\u0443\u044e \u043a \u0432\u0430\u0448\u0438\u043c \u043f\u043b\u0430\u043d\u0430\u043c \u043f\u0440\u043e\u0434\u0430\u0436. \u041e\u0442 \u043f\u043e\u0437\u0438\u0446\u0438\u043e\u043d\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u044f \u0434\u043e \u0430\u0440\u0445\u0438\u0442\u0435\u043a\u0442\u0443\u0440\u044b CRM.',
        step3_title: '\u0420\u0435\u0430\u043b\u0438\u0437\u0430\u0446\u0438\u044f',
        step3_desc: '\u0421\u043e\u0437\u0434\u0430\u0451\u043c \u0438 \u0437\u0430\u043f\u0443\u0441\u043a\u0430\u0435\u043c \u2014 \u043c\u0430\u0442\u0435\u0440\u0438\u0430\u043b\u044b, \u0440\u0435\u043a\u043b\u0430\u043c\u0443, CRM, \u0441\u043a\u0432\u043e\u0437\u043d\u0443\u044e \u0430\u043d\u0430\u043b\u0438\u0442\u0438\u043a\u0443. \u041f\u043e\u043b\u043d\u0430\u044f \u043e\u0442\u0432\u0435\u0442\u0441\u0442\u0432\u0435\u043d\u043d\u043e\u0441\u0442\u044c \u0441 \u043f\u0435\u0440\u0432\u043e\u0433\u043e \u0434\u043d\u044f.',
        step4_title: '\u041e\u043f\u0442\u0438\u043c\u0438\u0437\u0430\u0446\u0438\u044f',
        step4_desc: '\u041e\u0442\u0441\u043b\u0435\u0436\u0438\u0432\u0430\u0435\u043c \u0440\u0435\u0437\u0443\u043b\u044c\u0442\u0430\u0442\u044b, \u0443\u043b\u0443\u0447\u0448\u0430\u0435\u043c \u044d\u0444\u0444\u0435\u043a\u0442\u0438\u0432\u043d\u043e\u0441\u0442\u044c \u0438 \u043c\u0430\u0441\u0448\u0442\u0430\u0431\u0438\u0440\u0443\u0435\u043c \u0442\u043e, \u0447\u0442\u043e \u0440\u0430\u0431\u043e\u0442\u0430\u0435\u0442. \u041d\u0435\u043f\u0440\u0435\u0440\u044b\u0432\u043d\u043e\u0435 \u0443\u043b\u0443\u0447\u0448\u0435\u043d\u0438\u0435 \u043d\u0430 \u043e\u0441\u043d\u043e\u0432\u0435 \u0434\u0430\u043d\u043d\u044b\u0445.',

        cases_label: '\u041e\u043f\u044b\u0442',
        cases_heading: '\u041f\u043e\u0434\u0442\u0432\u0435\u0440\u0436\u0434\u0451\u043d\u043d\u044b\u0439 \u043e\u043f\u044b\u0442 \u0441 \u043b\u0438\u0434\u0435\u0440\u0430\u043c\u0438\u00a0\u043e\u0442\u0440\u0430\u0441\u043b\u0438',
        c1_badge: 'Customer Experience \u0438 IT',
        c1_desc: '\u0423\u043f\u0440\u0430\u0432\u043b\u044f\u043b\u0438 CX-\u043f\u0440\u043e\u0435\u043a\u0442\u0430\u043c\u0438, \u0432\u043d\u0435\u0434\u0440\u044f\u043b\u0438 \u0438\u0437\u043c\u0435\u043d\u0435\u043d\u0438\u044f \u0434\u043b\u044f \u0440\u043e\u0441\u0442\u0430 \u043a\u043e\u043d\u0432\u0435\u0440\u0441\u0438\u0439 \u043d\u0430 \u043a\u0430\u0436\u0434\u043e\u043c \u044d\u0442\u0430\u043f\u0435 \u043f\u0443\u0442\u0438 \u043a\u043b\u0438\u0435\u043d\u0442\u0430. \u0422\u0440\u0430\u043d\u0441\u0444\u043e\u0440\u043c\u0430\u0446\u0438\u044f IT-\u0438\u043d\u0444\u0440\u0430\u0441\u0442\u0440\u0443\u043a\u0442\u0443\u0440\u044b: CRM, \u042d\u0414\u041e, \u043e\u043d\u043b\u0430\u0439\u043d-\u043f\u043e\u043a\u0443\u043f\u043a\u0430 \u043a\u0432\u0430\u0440\u0442\u0438\u0440, \u0441\u0430\u0439\u0442-\u043c\u0430\u0440\u043a\u0435\u0442\u043f\u043b\u0435\u0439\u0441, \u043c\u043e\u0431\u0438\u043b\u044c\u043d\u043e\u0435 \u043f\u0440\u0438\u043b\u043e\u0436\u0435\u043d\u0438\u0435.',
        c1_m1: '\u0422\u0440\u0430\u043d\u0441\u0444\u043e\u0440\u043c\u0430\u0446\u0438\u044f', c1_m2: '\u0412\u043d\u0435\u0434\u0440\u0435\u043d\u0438\u0435', c1_m3: '\u0420\u0430\u0437\u0440\u0430\u0431\u043e\u0442\u043a\u0430',
        c2_badge: 'SMM \u0438 \u0438\u0441\u0441\u043b\u0435\u0434\u043e\u0432\u0430\u043d\u0438\u044f',
        c2_desc: '\u0418\u0441\u0441\u043b\u0435\u0434\u043e\u0432\u0430\u043d\u0438\u0435 \u0430\u0443\u0434\u0438\u0442\u043e\u0440\u0438\u0438 \u0438 \u0441\u0442\u0440\u0430\u0442\u0435\u0433\u0438\u044f \u043a\u043e\u043c\u043c\u0443\u043d\u0438\u043a\u0430\u0446\u0438\u0438 \u0432 \u0441\u043e\u0446\u0438\u0430\u043b\u044c\u043d\u044b\u0445 \u0441\u0435\u0442\u044f\u0445 \u0434\u043b\u044f \u043d\u043e\u0432\u043e\u0433\u043e \u043f\u043e\u0434\u0440\u0430\u0437\u0434\u0435\u043b\u0435\u043d\u0438\u044f \u042f\u043d\u0434\u0435\u043a\u0441\u0430',
        c2_m1: '\u0421\u0442\u0440\u0430\u0442\u0435\u0433\u0438\u044f',
        c3_badge: 'Digital-\u043c\u0430\u0440\u043a\u0435\u0442\u0438\u043d\u0433',
        c3_desc: '\u0423\u0434\u0432\u043e\u0438\u043b\u0438 \u043f\u0440\u043e\u0434\u0430\u0436\u0438 \u0436\u0438\u043b\u043e\u0439, \u043a\u043e\u043c\u043c\u0435\u0440\u0447\u0435\u0441\u043a\u043e\u0439 \u0438 \u0437\u0430\u0440\u0443\u0431\u0435\u0436\u043d\u043e\u0439 \u043d\u0435\u0434\u0432\u0438\u0436\u0438\u043c\u043e\u0441\u0442\u0438 \u0437\u0430 \u0433\u043e\u0434. \u041f\u043e\u0441\u0442\u0440\u043e\u0438\u043b\u0438 \u043f\u0440\u0438\u0431\u044b\u043b\u044c\u043d\u044b\u0439 digital-\u043c\u0430\u0440\u043a\u0435\u0442\u0438\u043d\u0433',
        c3_m1: '\u0420\u043e\u0441\u0442 \u043f\u0440\u043e\u0434\u0430\u0436',
        cl1_desc: '\u041e\u0442 \u0441\u043e\u0437\u0434\u0430\u043d\u0438\u044f \u0431\u0440\u0435\u043d\u0434\u0430 \u0434\u043e \u0432\u0432\u043e\u0434\u0430 3 500 \u0440\u0430\u0431\u043e\u0447\u0438\u0445 \u043c\u0435\u0441\u0442',
        cl2_desc: '\u041f\u0440\u043e\u0434\u0430\u043b\u0438 \u043a\u043e\u043c\u043f\u043b\u0435\u043a\u0441 \u0432\u0438\u043b\u043b \u0437\u0430 6 \u043c\u0435\u0441\u044f\u0446\u0435\u0432',
        cl3_desc: '\u041f\u0440\u043e\u0432\u0435\u043b\u0438 \u0440\u0435\u0431\u0440\u0435\u043d\u0434\u0438\u043d\u0433 \u043a\u0440\u0443\u043f\u043d\u0435\u0439\u0448\u0435\u0433\u043e \u0434\u0435\u0432\u0435\u043b\u043e\u043f\u0435\u0440\u0430 \u0411\u0430\u043b\u0438',
        cl4_desc: '\u041f\u043e\u0441\u0442\u0440\u043e\u0438\u043b\u0438 \u043e\u0442\u0434\u0435\u043b \u043c\u0430\u0440\u043a\u0435\u0442\u0438\u043d\u0433\u0430 \u0438 \u043b\u0438\u0434\u043e\u0433\u0435\u043d\u0435\u0440\u0430\u0446\u0438\u044e \u0432 5 \u0441\u0442\u0440\u0430\u043d\u0430\u0445',
        cl5_desc: '\u0421\u043a\u0432\u043e\u0437\u043d\u0430\u044f \u0430\u043d\u0430\u043b\u0438\u0442\u0438\u043a\u0430 \u0438 data-driven \u043c\u0430\u0440\u043a\u0435\u0442\u0438\u043d\u0433 \u0434\u043b\u044f \u0422\u041e\u041f-20 \u0434\u0435\u0432\u0435\u043b\u043e\u043f\u0435\u0440\u043e\u0432 \u0420\u043e\u0441\u0441\u0438\u0438',

        testimonial_label: '\u041e\u0442\u0437\u044b\u0432\u044b',
        testimonial_1_text: '\u0421\u0438\u0441\u0442\u0435\u043c\u043d\u044b\u0439 \u043f\u043e\u0434\u0445\u043e\u0434 \u043a\u043e\u043c\u0430\u043d\u0434\u044b Flamelix \u0438 \u0430\u043d\u0430\u043b\u0438\u0442\u0438\u0447\u0435\u0441\u043a\u0430\u044f \u0442\u043e\u0447\u043d\u043e\u0441\u0442\u044c \u0441\u044b\u0433\u0440\u0430\u043b\u0438 \u043a\u043b\u044e\u0447\u0435\u0432\u0443\u044e \u0440\u043e\u043b\u044c \u0432 \u0440\u0430\u0437\u0432\u0438\u0442\u0438\u0438 Flexity. \u0417\u0430 \u0442\u0440\u0438 \u0433\u043e\u0434\u0430 \u0441\u043e\u0442\u0440\u0443\u0434\u043d\u0438\u0447\u0435\u0441\u0442\u0432\u0430 \u0438\u0445 \u043a\u043e\u043c\u0430\u043d\u0434\u0430 \u043f\u043e\u0441\u0442\u0440\u043e\u0438\u043b\u0430 \u043d\u0430\u043c \u0441\u043e\u0432\u0440\u0435\u043c\u0435\u043d\u043d\u0443\u044e \u043c\u0430\u0440\u043a\u0435\u0442\u0438\u043d\u0433\u043e\u0432\u0443\u044e \u0438\u043d\u0444\u0440\u0430\u0441\u0442\u0440\u0443\u043a\u0442\u0443\u0440\u0443, \u0440\u0435\u0437\u0443\u043b\u044c\u0442\u0430\u0442\u0438\u0432\u043d\u044b\u0435 \u043a\u0430\u043c\u043f\u0430\u043d\u0438\u0438 \u0438 \u0441\u043a\u0432\u043e\u0437\u043d\u0443\u044e \u0430\u043d\u0430\u043b\u0438\u0442\u0438\u043a\u0443.',
        testimonial_1_name: '\u0421\u0430\u0440\u043f\u0435\u0440 \u0410\u043b\u0442\u0443\u043d\u0439\u0443\u0432\u0430',
        testimonial_1_role: '\u0413\u0435\u043d\u0435\u0440\u0430\u043b\u044c\u043d\u044b\u0439 \u0434\u0438\u0440\u0435\u043a\u0442\u043e\u0440, Flexity (\u042d\u041d\u041a\u0410)',

        cta_title: '\u0413\u043e\u0442\u043e\u0432\u044b \u0432\u044b\u043f\u043e\u043b\u043d\u0438\u0442\u044c \u043f\u043b\u0430\u043d\u044b \u043f\u0440\u043e\u0434\u0430\u0436?',
        cta_subtitle: '\u041e\u0431\u0441\u0443\u0434\u0438\u043c \u0432\u0430\u0448 \u043f\u0440\u043e\u0435\u043a\u0442 \u0438 \u043f\u043e\u0441\u0442\u0440\u043e\u0438\u043c \u0438\u043d\u0434\u0438\u0432\u0438\u0434\u0443\u0430\u043b\u044c\u043d\u0443\u044e \u043c\u0430\u0440\u043a\u0435\u0442\u0438\u043d\u0433\u043e\u0432\u0443\u044e \u0441\u0438\u0441\u0442\u0435\u043c\u0443',
        cta_btn: '\u0421\u0432\u044f\u0437\u0430\u0442\u044c\u0441\u044f',

        team_label: '\u041a\u043e\u043c\u0430\u043d\u0434\u0430',
        team_heading: '\u041f\u0430\u0440\u0442\u043d\u0451\u0440, \u043a\u043e\u0442\u043e\u0440\u043e\u0433\u043e \u0432\u044b\u00a0\u0438\u0441\u043a\u0430\u043b\u0438',
        t1_name: '\u0420\u043e\u0434\u0438\u043e\u043d \u0410\u043d\u0433\u0430\u0435\u0432', t1_role: 'Growth-\u0441\u0442\u0440\u0430\u0442\u0435\u0433\u0438\u0438 \u0438 data-driven \u043c\u0430\u0440\u043a\u0435\u0442\u0438\u043d\u0433',
        t1_desc: '\u0412\u044b\u0441\u0442\u0440\u0430\u0438\u0432\u0430\u0435\u0442 \u043c\u0430\u0440\u043a\u0435\u0442\u0438\u043d\u0433\u043e\u0432\u044b\u0435 \u0441\u0438\u0441\u0442\u0435\u043c\u044b \u0438 \u0443\u043f\u0440\u0430\u0432\u043b\u044f\u0435\u0442 KPI \u043b\u0438\u0434\u043e\u0433\u0435\u043d\u0435\u0440\u0430\u0446\u0438\u0438. \u042d\u043a\u0441\u043f\u0435\u0440\u0442 \u0432 \u043f\u0430\u0440\u0442\u043d\u0451\u0440\u0441\u043a\u043e\u043c \u043c\u0430\u0440\u043a\u0435\u0442\u0438\u043d\u0433\u0435.',
        t2_name: '\u0418\u043b\u044c\u044f \u0412\u043e\u043b\u0433\u0438\u043d', t2_role: 'Customer Experience \u0438 \u0446\u0438\u0444\u0440\u043e\u0432\u0430\u044f \u0442\u0440\u0430\u043d\u0441\u0444\u043e\u0440\u043c\u0430\u0446\u0438\u044f',
        t2_desc: 'CX-\u043f\u0440\u043e\u0435\u043a\u0442\u044b, \u0441\u0430\u0439\u0442\u044b-\u043c\u0430\u0440\u043a\u0435\u0442\u043f\u043b\u0435\u0439\u0441\u044b, \u043c\u043e\u0431\u0438\u043b\u044c\u043d\u044b\u0435 \u043f\u0440\u0438\u043b\u043e\u0436\u0435\u043d\u0438\u044f, \u043e\u043d\u043b\u0430\u0439\u043d-\u043f\u0440\u043e\u0434\u0430\u0436\u0438 \u043d\u0435\u0434\u0432\u0438\u0436\u0438\u043c\u043e\u0441\u0442\u0438. \u0414\u0438\u0440\u0435\u043a\u0442\u043e\u0440 \u043f\u043e \u0446\u0438\u0444\u0440\u043e\u0432\u043e\u0439 \u0442\u0440\u0430\u043d\u0441\u0444\u043e\u0440\u043c\u0430\u0446\u0438\u0438 MR Group.',
        t3_name: '\u0410\u043b\u0435\u043a\u0441\u0430\u043d\u0434\u0440 \u0412\u043e\u0440\u043e\u0431\u044c\u0451\u0432', t3_role: '\u0411\u0440\u0435\u043d\u0434\u0438\u043d\u0433, \u0441\u0430\u0439\u0442\u044b \u0438 \u043f\u0440\u0435\u0437\u0435\u043d\u0442\u0430\u0446\u0438\u0438',
        t3_desc: '\u0411\u043e\u043b\u0435\u0435 30 \u043f\u0440\u043e\u0435\u043a\u0442\u043e\u0432 \u0432 \u043d\u0435\u0434\u0432\u0438\u0436\u0438\u043c\u043e\u0441\u0442\u0438. \u0421\u043e\u0437\u0434\u0430\u0451\u0442 \u043f\u0440\u043e\u0434\u0430\u044e\u0449\u0438\u0435 \u043c\u0430\u0442\u0435\u0440\u0438\u0430\u043b\u044b: \u0441\u0430\u0439\u0442\u044b, \u043f\u0440\u0435\u0437\u0435\u043d\u0442\u0430\u0446\u0438\u0438 \u0438 \u0440\u0435\u043a\u043b\u0430\u043c\u043d\u044b\u0435 \u043a\u0440\u0435\u0430\u0442\u0438\u0432\u044b.',
        t4_name: '\u0410\u043d\u0434\u0440\u0435\u0439 \u0421\u043e\u043a\u043e\u043b\u043e\u0432', t4_role: '\u0410\u043d\u0430\u043b\u0438\u0442\u0438\u043a\u0430 \u0438 \u0430\u0432\u0442\u043e\u043c\u0430\u0442\u0438\u0437\u0430\u0446\u0438\u044f',
        t4_desc: '\u0421\u0438\u0441\u0442\u0435\u043c\u043d\u0430\u044f \u0438 \u0441\u043a\u0432\u043e\u0437\u043d\u0430\u044f \u0430\u043d\u0430\u043b\u0438\u0442\u0438\u043a\u0430, \u0430\u0432\u0442\u043e\u043c\u0430\u0442\u0438\u0437\u0430\u0446\u0438\u044f \u043c\u0430\u0440\u043a\u0435\u0442\u0438\u043d\u0433\u0430 \u0438 \u043f\u0440\u043e\u0434\u0430\u0436. \u0421\u0442\u0440\u043e\u0438\u0442 \u043e\u0442\u0447\u0451\u0442\u043d\u043e\u0441\u0442\u044c \u043e\u0442 \u0440\u0435\u043a\u043b\u0430\u043c\u043d\u044b\u0445 \u0432\u043b\u043e\u0436\u0435\u043d\u0438\u0439 \u0434\u043e \u0437\u0430\u043a\u0440\u044b\u0442\u044b\u0445 \u0441\u0434\u0435\u043b\u043e\u043a \u0432 CRM.',

        faq_title: '\u0427\u0430\u0441\u0442\u043e \u0437\u0430\u0434\u0430\u0432\u0430\u0435\u043c\u044b\u0435 \u0432\u043e\u043f\u0440\u043e\u0441\u044b',
        faq1_q: '\u041f\u043e\u0447\u0435\u043c\u0443 Flamelix?',
        faq1_a: 'Flamelix \u0441\u043f\u0435\u0446\u0438\u0430\u043b\u0438\u0437\u0438\u0440\u0443\u0435\u0442\u0441\u044f \u043d\u0430 \u0434\u043e\u0441\u0442\u0438\u0436\u0435\u043d\u0438\u0438 \u0438\u0437\u043c\u0435\u0440\u0438\u043c\u044b\u0445 \u0440\u0435\u0437\u0443\u043b\u044c\u0442\u0430\u0442\u043e\u0432 \u0434\u043b\u044f \u0434\u0435\u0432\u0435\u043b\u043e\u043f\u0435\u0440\u043e\u0432 \u043d\u0435\u0434\u0432\u0438\u0436\u0438\u043c\u043e\u0441\u0442\u0438. \u041c\u044b \u043f\u0440\u0435\u0434\u043e\u0441\u0442\u0430\u0432\u043b\u044f\u0435\u043c \u043f\u043e\u043b\u043d\u0443\u044e \u043c\u0430\u0440\u043a\u0435\u0442\u0438\u043d\u0433\u043e\u0432\u0443\u044e \u043a\u043e\u043c\u0430\u043d\u0434\u0443 \u2014 \u043e\u0442 \u0438\u0441\u0441\u043b\u0435\u0434\u043e\u0432\u0430\u043d\u0438\u0439 \u0434\u043e \u0440\u0435\u0430\u043b\u0438\u0437\u0430\u0446\u0438\u0438. \u041d\u0430\u0448 \u043e\u043f\u044b\u0442 \u0432 30+ \u043f\u0440\u043e\u0435\u043a\u0442\u0430\u0445 \u0433\u0430\u0440\u0430\u043d\u0442\u0438\u0440\u0443\u0435\u0442 \u0440\u0435\u0448\u0435\u043d\u0438\u044f \u043f\u043e\u0434 \u0432\u0430\u0448 \u0440\u044b\u043d\u043e\u043a.',
        faq2_q: '\u0427\u0435\u043c Flamelix \u043e\u0442\u043b\u0438\u0447\u0430\u0435\u0442\u0441\u044f \u043e\u0442 \u0434\u0440\u0443\u0433\u0438\u0445 \u0430\u0433\u0435\u043d\u0442\u0441\u0442\u0432?',
        faq2_a: '\u041c\u044b \u043d\u0435 \u0442\u0440\u0430\u0434\u0438\u0446\u0438\u043e\u043d\u043d\u043e\u0435 \u0430\u0433\u0435\u043d\u0442\u0441\u0442\u0432\u043e. \u041c\u044b \u0444\u043e\u0440\u043c\u0438\u0440\u0443\u0435\u043c \u0432\u044b\u0434\u0435\u043b\u0435\u043d\u043d\u0443\u044e \u043a\u043e\u043c\u0430\u043d\u0434\u0443 \u0432 \u0432\u0430\u0448\u0438\u0445 \u043f\u0440\u043e\u0446\u0435\u0441\u0441\u0430\u0445 \u2014 \u043e\u0442 \u0438\u0441\u0441\u043b\u0435\u0434\u043e\u0432\u0430\u043d\u0438\u0439 \u0434\u043e \u0441\u043a\u0432\u043e\u0437\u043d\u043e\u0439 \u0430\u043d\u0430\u043b\u0438\u0442\u0438\u043a\u0438. \u0424\u043e\u043a\u0443\u0441 \u043d\u0430 \u043f\u043b\u0430\u043d\u0430\u0445 \u043f\u0440\u043e\u0434\u0430\u0436, \u0430 \u043d\u0435 \u043d\u0430 \u0432\u0430\u043d\u0438\u0442\u0438-\u043c\u0435\u0442\u0440\u0438\u043a\u0430\u0445.',
        faq3_q: '\u0421 \u043a\u0430\u043a\u0438\u043c\u0438 \u043e\u0442\u0440\u0430\u0441\u043b\u044f\u043c\u0438 \u0432\u044b \u0440\u0430\u0431\u043e\u0442\u0430\u0435\u0442\u0435?',
        faq3_a: '\u0421\u043f\u0435\u0446\u0438\u0430\u043b\u0438\u0437\u0430\u0446\u0438\u044f \u2014 \u0434\u0435\u0432\u0435\u043b\u043e\u043f\u043c\u0435\u043d\u0442 \u043d\u0435\u0434\u0432\u0438\u0436\u0438\u043c\u043e\u0441\u0442\u0438. \u041a\u043b\u0438\u0435\u043d\u0442\u044b: MR Group, Knight Frank, ENKA, proptech-\u043a\u043e\u043c\u043f\u0430\u043d\u0438\u0438 \u0438 \u043c\u0435\u0436\u0434\u0443\u043d\u0430\u0440\u043e\u0434\u043d\u044b\u0435 \u043f\u043b\u0430\u0442\u0444\u043e\u0440\u043c\u044b \u0432 5 \u0441\u0442\u0440\u0430\u043d\u0430\u0445.',
        faq4_q: '\u041d\u0443\u0436\u043d\u0430 \u043b\u0438 \u043d\u0430\u043c \u0441\u043e\u0431\u0441\u0442\u0432\u0435\u043d\u043d\u0430\u044f \u043c\u0430\u0440\u043a\u0435\u0442\u0438\u043d\u0433\u043e\u0432\u0430\u044f \u043a\u043e\u043c\u0430\u043d\u0434\u0430?',
        faq4_a: '\u0421\u043e\u0432\u0441\u0435\u043c \u043d\u0435\u0442. \u041c\u044b \u0432\u044b\u043f\u043e\u043b\u043d\u044f\u0435\u043c \u0444\u0443\u043d\u043a\u0446\u0438\u044e \u0432\u0430\u0448\u0435\u0433\u043e \u043f\u043e\u043b\u043d\u043e\u0446\u0435\u043d\u043d\u043e\u0433\u043e \u043c\u0430\u0440\u043a\u0435\u0442\u0438\u043d\u0433\u043e\u0432\u043e\u0433\u043e \u043e\u0442\u0434\u0435\u043b\u0430. \u0415\u0441\u043b\u0438 \u0443 \u0432\u0430\u0441 \u0443\u0436\u0435 \u0435\u0441\u0442\u044c \u043a\u043e\u043c\u0430\u043d\u0434\u0430, \u043c\u044b \u0431\u0435\u0441\u0448\u043e\u0432\u043d\u043e \u0438\u043d\u0442\u0435\u0433\u0440\u0438\u0440\u0443\u0435\u043c\u0441\u044f.',
        faq5_q: '\u041a\u0430\u043a \u0432\u044b \u0438\u0437\u043c\u0435\u0440\u044f\u0435\u0442\u0435 \u0443\u0441\u043f\u0435\u0445?',
        faq5_a: '\u0412\u0441\u0451 \u043f\u0440\u0438\u0432\u044f\u0437\u0430\u043d\u043e \u043a \u0431\u0438\u0437\u043d\u0435\u0441-\u0446\u0435\u043b\u044f\u043c. \u0421\u043a\u0432\u043e\u0437\u043d\u0430\u044f \u0430\u043d\u0430\u043b\u0438\u0442\u0438\u043a\u0430 \u043e\u0442\u0441\u043b\u0435\u0436\u0438\u0432\u0430\u0435\u0442 \u043f\u0443\u0442\u044c \u043e\u0442 \u0440\u0435\u043a\u043b\u0430\u043c\u044b \u0434\u043e \u0441\u0434\u0435\u043b\u043e\u043a \u0432 CRM. \u0412\u044b \u0432\u0438\u0434\u0438\u0442\u0435, \u043a\u0430\u043a \u043a\u0430\u0436\u0434\u044b\u0439 \u0440\u0443\u0431\u043b\u044c \u043f\u0440\u0435\u0432\u0440\u0430\u0449\u0430\u0435\u0442\u0441\u044f \u0432 \u043f\u0440\u043e\u0434\u0430\u0436\u0438.',

        contact_label: '\u041a\u043e\u043d\u0442\u0430\u043a\u0442\u044b',
        contact_heading: '\u0414\u0430\u0432\u0430\u0439\u0442\u0435 \u043f\u043e\u0441\u0442\u0440\u043e\u0438\u043c \u0432\u0430\u0448\u0443 \u043c\u0430\u0440\u043a\u0435\u0442\u0438\u043d\u0433\u043e\u0432\u0443\u044e\u00a0\u0441\u0438\u0441\u0442\u0435\u043c\u0443',
        contact_desc: '\u0420\u0430\u0441\u0441\u043a\u0430\u0436\u0438\u0442\u0435 \u043e \u0432\u0430\u0448\u0435\u043c \u043f\u0440\u043e\u0435\u043a\u0442\u0435, \u0438 \u043c\u044b \u043f\u0440\u0435\u0434\u043b\u043e\u0436\u0438\u043c \u043e\u043f\u0442\u0438\u043c\u0430\u043b\u044c\u043d\u043e\u0435 \u0440\u0435\u0448\u0435\u043d\u0438\u0435 \u0434\u043b\u044f \u0434\u043e\u0441\u0442\u0438\u0436\u0435\u043d\u0438\u044f \u043f\u043b\u0430\u043d\u043e\u0432 \u043f\u0440\u043e\u0434\u0430\u0436',
        form_name: '\u0418\u043c\u044f',
        form_name_ph: '\u0412\u0430\u0448\u0435 \u0438\u043c\u044f',
        form_project: '\u041e \u043f\u0440\u043e\u0435\u043a\u0442\u0435',
        form_project_ph: '\u0420\u0430\u0441\u0441\u043a\u0430\u0436\u0438\u0442\u0435 \u043e \u0432\u0430\u0448\u0435\u043c \u043f\u0440\u043e\u0435\u043a\u0442\u0435 \u0438 \u0446\u0435\u043b\u044f\u0445...',
        form_submit: '\u041e\u0442\u043f\u0440\u0430\u0432\u0438\u0442\u044c \u0437\u0430\u044f\u0432\u043a\u0443',
        form_sent: '\u041e\u0442\u043f\u0440\u0430\u0432\u043b\u0435\u043d\u043e',

        footer_desc: '\u041c\u0430\u0440\u043a\u0435\u0442\u0438\u043d\u0433 \u0438 IT \u0434\u043b\u044f \u0434\u0435\u0432\u0435\u043b\u043e\u043f\u0435\u0440\u043e\u0432 \u043d\u0435\u0434\u0432\u0438\u0436\u0438\u043c\u043e\u0441\u0442\u0438',
        footer_copy: '\u00a9 2026 Flamelix. \u0412\u0441\u0435 \u043f\u0440\u0430\u0432\u0430 \u0437\u0430\u0449\u0438\u0449\u0435\u043d\u044b.'
    }
};

let currentLang = 'en';

function setLanguage(lang) {
    currentLang = lang;
    const t = translations[lang];
    if (!t) return;

    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (t[key] !== undefined) el.textContent = t[key];
    });

    document.querySelectorAll('[data-i18n-html]').forEach(el => {
        const key = el.getAttribute('data-i18n-html');
        if (t[key] !== undefined) el.innerHTML = t[key];
    });

    document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
        const key = el.getAttribute('data-i18n-placeholder');
        if (t[key] !== undefined) el.placeholder = t[key];
    });

    document.documentElement.lang = lang;
    if (t.page_title) document.title = t.page_title;

    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.classList.toggle('active', btn.dataset.lang === lang);
    });

    try { localStorage.setItem('flamelix-lang', lang); } catch(e) {}
}

// ====== Utilities ======
function throttle(fn, delay) {
    let last = 0;
    return function (...args) {
        const now = Date.now();
        if (now - last >= delay) { last = now; fn.apply(this, args); }
    };
}

// ====== Init ======
document.addEventListener('DOMContentLoaded', () => {
    initLanguageSwitcher();
    initNavigation();
    initScrollAnimations();
    initMetricCounters();
    initContactForm();
    initFAQ();
});

function initLanguageSwitcher() {
    const switcher = document.getElementById('langSwitcher');
    if (!switcher) return;

    let saved = null;
    try { saved = localStorage.getItem('flamelix-lang'); } catch(e) {}
    if (!saved) {
        const bl = navigator.language || navigator.userLanguage || '';
        saved = bl.startsWith('ru') ? 'ru' : 'en';
    }
    setLanguage(saved);

    switcher.querySelectorAll('.lang-btn').forEach(btn => {
        btn.addEventListener('click', () => setLanguage(btn.dataset.lang));
    });
}

function initNavigation() {
    const navbar = document.getElementById('navbar');
    const toggle = document.getElementById('menuToggle');
    const menu = document.getElementById('navMenu');
    const overlay = document.getElementById('navOverlay');

    window.addEventListener('scroll', throttle(() => {
        navbar.classList.toggle('scrolled', window.pageYOffset > 50);
    }, 100));

    function close() {
        menu.classList.remove('active');
        toggle.classList.remove('active');
        toggle.setAttribute('aria-expanded', 'false');
        if (overlay) overlay.classList.remove('active');
        document.body.style.overflow = '';
    }

    function open() {
        menu.classList.add('active');
        toggle.classList.add('active');
        toggle.setAttribute('aria-expanded', 'true');
        if (overlay) overlay.classList.add('active');
        document.body.style.overflow = 'hidden';
    }

    if (toggle && menu) {
        toggle.addEventListener('click', () => menu.classList.contains('active') ? close() : open());
        menu.querySelectorAll('a').forEach(l => l.addEventListener('click', close));
    }

    if (overlay) overlay.addEventListener('click', close);

    document.addEventListener('keydown', e => {
        if (e.key === 'Escape' && menu?.classList.contains('active')) close();
    });

    document.querySelectorAll('a[href^="#"]').forEach(a => {
        a.addEventListener('click', function(e) {
            e.preventDefault();
            const t = document.querySelector(this.getAttribute('href'));
            if (t) t.scrollIntoView({ behavior: 'smooth', block: 'start' });
        });
    });
}

function initScrollAnimations() {
    const els = document.querySelectorAll('[data-aos]');
    if (!els.length) return;

    setTimeout(() => els.forEach(el => el.classList.add('visible')), 4000);

    const obs = new IntersectionObserver(entries => {
        entries.forEach(e => {
            if (e.isIntersecting) { e.target.classList.add('visible'); obs.unobserve(e.target); }
        });
    }, { threshold: 0.08, rootMargin: '0px 0px -30px 0px' });

    els.forEach(el => obs.observe(el));

    requestAnimationFrame(() => {
        els.forEach(el => {
            const r = el.getBoundingClientRect();
            if (r.top < window.innerHeight && r.bottom > 0) el.classList.add('visible');
        });
    });
}

function initMetricCounters() {
    const obs = new IntersectionObserver(entries => {
        entries.forEach(e => { if (e.isIntersecting) { animateMetrics(); obs.unobserve(e.target); } });
    }, { threshold: 0.3 });

    const s = document.querySelector('.hero-stats');
    if (s) obs.observe(s);
}

function animateMetrics() {
    document.querySelectorAll('.stat-value').forEach(m => {
        const target = parseInt(m.dataset.target);
        const suffix = m.dataset.suffix || '';
        const dur = 2000;
        const start = performance.now();

        function tick(now) {
            const p = Math.min((now - start) / dur, 1);
            const eased = 1 - Math.pow(1 - p, 3);
            m.textContent = Math.round(eased * target) + (p >= 1 ? suffix : '');
            if (p < 1) requestAnimationFrame(tick);
        }

        requestAnimationFrame(tick);
    });
}

function initFAQ() {
    document.querySelectorAll('.faq-item').forEach(item => {
        const btn = item.querySelector('.faq-q');
        if (!btn) return;
        btn.addEventListener('click', () => {
            const active = item.classList.contains('active');
            document.querySelectorAll('.faq-item').forEach(o => {
                o.classList.remove('active');
                const ob = o.querySelector('.faq-q');
                if (ob) ob.setAttribute('aria-expanded', 'false');
            });
            if (!active) {
                item.classList.add('active');
                btn.setAttribute('aria-expanded', 'true');
            }
        });
    });
}

function initContactForm() {
    const form = document.querySelector('.contact-form');
    if (!form) return;
    form.addEventListener('submit', e => {
        e.preventDefault();
        const btn = form.querySelector('button[type="submit"]');
        const orig = btn.innerHTML;
        const sent = translations[currentLang]?.form_sent || 'Sent';

        btn.innerHTML = `<span>${sent}</span>`;
        btn.style.background = '#22c55e';
        btn.disabled = true;

        setTimeout(() => {
            btn.innerHTML = orig;
            const sp = btn.querySelector('[data-i18n]');
            if (sp) {
                const k = sp.getAttribute('data-i18n');
                sp.textContent = translations[currentLang]?.[k] || sp.textContent;
            }
            btn.style.background = '';
            btn.disabled = false;
            form.reset();
        }, 3000);
    });
}
