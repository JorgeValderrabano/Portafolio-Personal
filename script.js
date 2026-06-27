/* ==========================================
   JORGE VALDERRABANO — PORTFOLIO
   Main Script: Translations, Animations,
   Drag/Resize, Project Rendering
   ========================================== */

(function () {
    'use strict';

    /* ==========================================
       BILINGUAL TRANSLATIONS
       ========================================== */
    const translations = {
        es: {
            nav_home: 'Inicio',
            nav_about: 'Sobre Mí',
            nav_education: 'Educación',
            nav_experience: 'Experiencia',
            nav_projects: 'Proyectos',
            nav_contact: 'Contacto',

            hero_subtitle: 'Desarrollador Web &amp; Diseñador',
            hero_scroll: 'Desplázate',

            about_title: 'Sobre Mí',
            about_bio1: 'Hola, soy <strong>Jorge Valderrabano</strong>. Soy desarrollador web especializado en diseño web, desarrollo frontend y WordPress. Licenciado en Comunicación con experiencia en marketing digital, gestión de redes sociales y análisis de datos.',
            about_bio2: 'Combino mi formación en comunicación con habilidades técnicas para crear experiencias web que no solo se ven bien, sino que comunican eficazmente. He trabajado con más de 40 clientes creando sitios web profesionales, plataformas de e-commerce y aplicaciones web.',
            about_bio3: 'Actualmente disponible para proyectos freelance. Si necesitas un sitio web profesional, no dudes en contactarme.',
            about_phone_label: 'Teléfono',
            about_email_label: 'Email',
            about_location_label: 'Ubicación',
            about_status_label: 'Disponibilidad',
            about_status_value: 'Freelance',
            about_cv_btn: 'Descargar CV',
            about_skills_title: 'Habilidades',
            skill_design: 'Diseño Web',
            skill_writing: 'Redacción',
            skill_video: 'Edición',
            skill_english: 'Inglés',
            textcard1_title: 'Lo que hago',
            textcard1_text: 'Creo sitios web modernos y funcionales que reflejan la identidad de cada marca.',
            textcard2_title: 'Mi enfoque',
            textcard2_text: 'Diseño centrado en el usuario, rendimiento optimizado y código limpio.',
            textcard3_title: 'Tecnologías',
            textcard3_text: 'HTML, CSS, JavaScript, WordPress, React, Node.js, Python, Git, Figma y más.',

            edu_title: 'Educación',
            edu1_title: 'Licenciado en Comunicación',
            edu1_inst: 'Universidad Juárez Autónoma de Tabasco',
            edu2_title: 'Técnico en Informática',
            edu2_inst: 'Fundación Carlos Slim',
            edu3_title: 'Introducción al Desarrollo Web',
            edu3_inst: 'Google',
            edu4_title: 'Responsive Web Design',
            edu4_inst: 'freeCodeCamp',
            edu5_title: 'Elements of AI',
            edu5_inst: 'University of Helsinki',
            edu6_title: 'Desarrollador de Servidores',
            edu6_inst: 'Fundación Carlos Slim',

            exp_title: 'Experiencia de Trabajo',
            exp1_title: 'Redactor',
            exp1_inst: 'Revista Tomos y Grapas',
            exp1_desc: 'Trabajé como redactor de noticias, reportajes y crónicas. También desarrollé mis habilidades en edición de contenidos para páginas web.',
            exp2_title: 'Coordinador de Servicios Generales',
            exp2_inst: 'Grupo Financiero Banorte',
            exp2_desc: 'Comencé como analista de datos, elaborando reportes y requisiciones. Actué como coordinador de proyectos y solicitudes de servicio con seguimiento a nivel nacional.',
            exp3_title: 'Frontend Developer',
            exp3_inst: 'Lavendi',
            exp3_desc: 'Desarrollador frontend y WordPress. He diseñado y desarrollado más de 40 sitios web para clientes en diversos sectores: salud, educación, e-commerce, servicios profesionales y más.',

            proj_title: 'Proyectos',
            proj_subtitle: 'Una selección de sitios web y aplicaciones que he diseñado y desarrollado.',
            proj_github_title: 'Proyectos en GitHub',
            filter_all: 'Todos',
            filter_web: 'Sitios Web',
            filter_ecommerce: 'E-Commerce',
            filter_education: 'Educación',
            visit_btn: 'Visitar',

            contact_title: 'Contacto',
            contact_subtitle: '¿Tienes un proyecto en mente? Hablemos.',
            contact_loc_title: 'Ubicación',
            contact_phone_title: 'Teléfono',
            contact_email_title: 'Email',

            footer_rights: 'Todos los derechos reservados.'
        },

        en: {
            nav_home: 'Home',
            nav_about: 'About',
            nav_education: 'Education',
            nav_experience: 'Experience',
            nav_projects: 'Projects',
            nav_contact: 'Contact',

            hero_subtitle: 'Web Developer &amp; Designer',
            hero_scroll: 'Scroll',

            about_title: 'About Me',
            about_bio1: 'Hi, I\'m <strong>Jorge Valderrabano</strong>. I\'m a web developer specializing in web design, frontend development, and WordPress. I hold a Bachelor\'s degree in Communication with experience in digital marketing, social media management, and data analysis.',
            about_bio2: 'I combine my communication background with technical skills to create web experiences that not only look great but communicate effectively. I\'ve worked with over 40 clients creating professional websites, e-commerce platforms, and web applications.',
            about_bio3: 'Currently available for freelance projects. If you need a professional website, don\'t hesitate to reach out.',
            about_phone_label: 'Phone',
            about_email_label: 'Email',
            about_location_label: 'Location',
            about_status_label: 'Availability',
            about_status_value: 'Freelance',
            about_cv_btn: 'Download CV',
            about_skills_title: 'Skills',
            skill_design: 'Web Design',
            skill_writing: 'Copywriting',
            skill_video: 'Editing',
            skill_english: 'English',
            textcard1_title: 'What I Do',
            textcard1_text: 'I build modern, functional websites that reflect each brand\'s identity.',
            textcard2_title: 'My Approach',
            textcard2_text: 'User-centered design, optimized performance, and clean code.',
            textcard3_title: 'Technologies',
            textcard3_text: 'HTML, CSS, JavaScript, WordPress, React, Node.js, Python, Git, Figma & more.',

            edu_title: 'Education',
            edu1_title: 'Bachelor\'s in Communication',
            edu1_inst: 'Universidad Juárez Autónoma de Tabasco',
            edu2_title: 'IT Technician',
            edu2_inst: 'Fundación Carlos Slim',
            edu3_title: 'Intro to Web Development',
            edu3_inst: 'Google',
            edu4_title: 'Responsive Web Design',
            edu4_inst: 'freeCodeCamp',
            edu5_title: 'Elements of AI',
            edu5_inst: 'University of Helsinki',
            edu6_title: 'Server Developer',
            edu6_inst: 'Fundación Carlos Slim',

            exp_title: 'Work Experience',
            exp1_title: 'Writer',
            exp1_inst: 'Revista Tomos y Grapas',
            exp1_desc: 'Worked as a news, report, and chronicle writer. Also developed skills in web content editing.',
            exp2_title: 'General Services Coordinator',
            exp2_inst: 'Grupo Financiero Banorte',
            exp2_desc: 'Started as a data analyst, producing reports and requisitions. Acted as project and service request coordinator with nationwide follow-up.',
            exp3_title: 'Frontend Developer',
            exp3_inst: 'Lavendi',
            exp3_desc: 'Frontend & WordPress developer. I\'ve designed and built over 40 websites for clients across various sectors: healthcare, education, e-commerce, professional services, and more.',

            proj_title: 'Projects',
            proj_subtitle: 'A selection of websites and applications I\'ve designed and developed.',
            proj_github_title: 'GitHub Projects',
            filter_all: 'All',
            filter_web: 'Websites',
            filter_ecommerce: 'E-Commerce',
            filter_education: 'Education',
            visit_btn: 'Visit',

            contact_title: 'Contact',
            contact_subtitle: 'Have a project in mind? Let\'s talk.',
            contact_loc_title: 'Location',
            contact_phone_title: 'Phone',
            contact_email_title: 'Email',

            footer_rights: 'All rights reserved.'
        }
    };

    /* ==========================================
       PROJECT DATA
       ========================================== */
    const projects = [
        { name: 'Destination Dental', desc_es: 'Consultorio Dental', desc_en: 'Dental Clinic', url: 'https://destinationdentalmx.com', img: 'img/p1.png', category: 'web' },
        { name: 'Global Car Rental', desc_es: 'Servicio de Renta de Autos', desc_en: 'Car Rental Service', url: 'https://globalcarrentalmx.com/', img: 'img/p2.png', category: 'web' },
        { name: 'Universidad Olmeca', desc_es: 'Universidad Privada', desc_en: 'Private University', url: 'https://www.olmeca.edu.mx/', img: 'img/p3.png', category: 'education' },
        { name: 'Posgrados UO', desc_es: 'Posgrados Universitarios', desc_en: 'Graduate Programs', url: 'https://eeplv.olmeca.edu.mx/', img: 'img/p4.png', category: 'education' },
        { name: 'Unacura', desc_es: 'Tienda de Productos Naturales', desc_en: 'Natural Products Store', url: 'https://unacura.com/', img: 'img/p5.png', category: 'ecommerce' },
        { name: 'Triskel Psicoterapias', desc_es: 'Consultorio Psicológico', desc_en: 'Psychology Clinic', url: 'https://triskelpsicoterapias.mx/', img: 'img/p6.png', category: 'web' },
        { name: 'Papelería Dalí', desc_es: 'Papelería', desc_en: 'Stationery Store', url: 'https://papeleriasdali.com/', img: 'img/p7.png', category: 'ecommerce' },
        { name: 'Collectible List', desc_es: 'Galería de Arte', desc_en: 'Art Gallery', url: 'https://collectiblelist.shop/', img: 'img/p8.png', category: 'ecommerce' },
        { name: 'Medicare', desc_es: 'Tienda de Artículos Médicos', desc_en: 'Medical Supplies Store', url: 'https://medicare.mx/', img: 'img/p9.png', category: 'ecommerce' },
        { name: 'JZ Seguros', desc_es: 'Broker de Seguros', desc_en: 'Insurance Broker', url: 'https://jzseguros.com/', img: 'img/p10.png', category: 'web' },
        { name: 'Realtop', desc_es: 'Plataforma Inmobiliaria', desc_en: 'Real Estate Platform', url: 'https://realtop.mx/', img: 'img/p11.png', category: 'web' },
        { name: 'Ingeniería R&A', desc_es: 'Servicios de Energía Eléctrica', desc_en: 'Electrical Energy Services', url: 'https://ingenieriarya.com/', img: 'img/p12.png', category: 'web' },
        { name: 'Dos Búhos', desc_es: 'Viñedo', desc_en: 'Vineyard', url: 'https://www.dosbuhos.com/', img: 'img/p13.png', category: 'web' },
        { name: 'Conisa', desc_es: 'Servicios de Regulación Sanitaria', desc_en: 'Health Regulation Services', url: 'https://conisasc.com.mx/', img: 'img/p14.png', category: 'web' },
        { name: 'Instituto Cencalli', desc_es: 'Instituto de Terapia Familiar', desc_en: 'Family Therapy Institute', url: 'https://cencalli.edu.mx/', img: 'img/p15.png', category: 'web' },
        { name: 'Abame', desc_es: 'Renta de Campers y Baños Móviles', desc_en: 'Camper & Mobile Bathroom Rental', url: 'https://abame.mx/', img: 'img/p16.png', category: 'web' },
        { name: 'Hardanflex', desc_es: 'Venta de Cortinas y Puertas Rápidas', desc_en: 'Doors & Curtains Supplier', url: 'https://hardanflex.com/', img: 'img/p17.png', category: 'ecommerce' },
        { name: 'Vanité', desc_es: 'Clínica de Medicina Estética', desc_en: 'Aesthetic Medicine Clinic', url: 'https://vanite.com.mx/', img: 'img/p18.png', category: 'web' },
        { name: 'Ecoluxxe', desc_es: 'Marketplace para Hoteles Boutique de Lujo', desc_en: 'Boutique Hotel Marketplace', url: 'https://ecoluxxe.com/', img: 'img/p19.png', category: 'ecommerce' },
        { name: 'Abaofic 2L', desc_es: 'Tienda de Artículos de Oficina', desc_en: 'Office Supplies Store', url: 'https://abaofic.com/', img: 'img/p20.png', category: 'ecommerce' },
        { name: 'Gecko Electronics', desc_es: 'Tienda de Audio y Video', desc_en: 'Audio & Video Store', url: 'https://geckoelectronics.com/', img: 'img/p21.png', category: 'ecommerce' },
        { name: 'UO Medical Affairs', desc_es: 'Revista de Divulgación Científica', desc_en: 'Scientific Journal', url: 'https://uomedicalaffairs.olmeca.edu.mx/', img: 'img/p22.png', category: 'education' },
        { name: 'Tienda UO', desc_es: 'Tienda de la Universidad Olmeca', desc_en: 'Universidad Olmeca Store', url: 'https://tiendauo.olmeca.edu.mx/', img: 'img/p23.png', category: 'ecommerce' },
        { name: 'Expo Ciencias Tabasco 2024', desc_es: 'Exposición de Proyectos Científicos', desc_en: 'Science Projects Exhibition', url: 'https://ecn2024.laredmex.org/', img: 'img/p24.png', category: 'education' },
        { name: 'Linflet', desc_es: 'Servicios de Traslados e Importación', desc_en: 'Transport & Import Services', url: 'https://linflet.com/', img: 'img/p25.png', category: 'web' },
        { name: 'World Trade Products', desc_es: 'Marketplace de Productos Agrícolas', desc_en: 'Agricultural Products Marketplace', url: 'https://worldtradeproducts.com/', img: 'img/p26.png', category: 'ecommerce' },
        { name: 'Bolsas El Zaguán', desc_es: 'Proveedor de Bolsas y Embalaje', desc_en: 'Bags & Packaging Supplier', url: 'https://www.bolsaselzaguan.com/', img: 'img/p27.png', category: 'ecommerce' },
        { name: 'Ingeniería Aplicada', desc_es: 'Proveedor de Equipo de Laboratorio', desc_en: 'Lab Equipment Supplier', url: 'https://ingaplicada.com.mx/', img: 'img/p28.png', category: 'ecommerce' },
        { name: 'Albercas JCV', desc_es: 'Proveedor de Albercas', desc_en: 'Swimming Pool Supplier', url: 'https://albercasjcv.com/', img: 'img/p29.png', category: 'ecommerce' },
        { name: 'Jonuteek', desc_es: 'Santuario de Conservación de Manatíes', desc_en: 'Manatee Conservation Sanctuary', url: 'https://jonuteek.com.mx/', img: 'img/p30.png', category: 'web' },
        { name: 'Resanic', desc_es: 'Tienda de Artículos para Trabajos en Alturas', desc_en: 'Height Work Equipment Store', url: 'https://tienda.resanic.com.mx/', img: 'img/p31.png', category: 'ecommerce' },
        { name: 'Notaría 39 de Tabasco', desc_es: 'Despacho de Abogados y Notario', desc_en: 'Law Firm & Notary', url: 'https://notaria39tabasco.mx/', img: 'img/p32.png', category: 'web' },
        { name: 'Hotel San Juan', desc_es: 'Hotel en Villahermosa, Tabasco', desc_en: 'Hotel in Villahermosa, Tabasco', url: 'https://hotelsanjuanvhsa.com.mx/', img: 'img/p33.png', category: 'web' },
        { name: 'Enrique Vertiz Studio', desc_es: 'Arquitecto', desc_en: 'Architect', url: 'https://enriquevertizstudio.com/', img: 'img/p34.png', category: 'web' },
        { name: 'Mind Fiction Studio', desc_es: 'Servicios de Fotografía y Video', desc_en: 'Photography & Video Services', url: 'https://mindfictionstudio.com/', img: 'img/p35.png', category: 'web' },
        { name: 'Flash Recarga', desc_es: 'Venta y Recarga de Cartuchos de Tinta', desc_en: 'Ink Cartridge Sales & Refill', url: 'https://flashrecarga.com.mx/', img: 'img/p36.png', category: 'ecommerce' },
        { name: 'Tesa Trucks', desc_es: 'Venta de Camiones y Trailers en El Paso, Texas', desc_en: 'Truck & Trailer Sales in El Paso, Texas', url: 'https://tesatrucks.com/', img: 'img/p37.png', category: 'ecommerce' },
        { name: 'Guest and Suites', desc_es: 'Renta de Inmuebles Vacacionales', desc_en: 'Vacation Property Rental', url: 'https://guestandsuites.com/', img: 'img/p38.png', category: 'web' },
        { name: 'Paola Moctezuma', desc_es: 'Terapeuta y Escritora', desc_en: 'Therapist & Writer', url: 'https://paolamoctezuma.com/', img: 'img/p39.png', category: 'web' },
        { name: 'One Global MG', desc_es: 'Servicios de Fletes e Importación', desc_en: 'Freight & Import Services', url: 'https://oneglobalmg.com/', img: 'img/p40.png', category: 'web' },
        { name: 'The Supps Factory', desc_es: 'Tienda de Suplementos Alimenticios', desc_en: 'Nutritional Supplements Store', url: 'https://thesuppsfactory.com.mx/', img: 'img/p41.png', category: 'ecommerce' },
        { name: 'ISF Academy', desc_es: 'Academia de Finanzas Sostenibles', desc_en: 'Sustainable Finance Academy', url: 'https://isf-academy.com/', img: 'img/p42.png', category: 'education' },
        { name: 'MCI', desc_es: 'Tienda de Insertos para Maquinado y Torneado', desc_en: 'Machining Inserts Store', url: 'https://minsertos.com.mx/', img: 'img/p43.png', category: 'ecommerce' }
    ];

    const githubProjects = [
        { name: 'Gatorama', desc_es: 'Juego de memoria muy felino', desc_en: 'A very feline memory game', url: 'https://github.com/JorgeValderrabano/gatorama', lang: 'JavaScript' },
        { name: 'CRM Virtualder', desc_es: 'CRM creado por Virtualder', desc_en: 'CRM created by Virtualder', url: 'https://github.com/JorgeValderrabano/crm-virtualder', lang: 'Python' },
        { name: 'Calorie Counter', desc_es: 'Contador de calorías con validación de formularios', desc_en: 'Calorie counter with form validation', url: 'https://github.com/JorgeValderrabano/Calorie-Counter', lang: 'HTML' },
        { name: 'Role Playing Game', desc_es: 'Juego de rol construido con JavaScript', desc_en: 'RPG built with JavaScript', url: 'https://github.com/JorgeValderrabano/Role-Playing-Game', lang: 'JavaScript' },
        { name: 'Countries Table', desc_es: 'Tabla responsiva con datos de países', desc_en: 'Responsive table with country data', url: 'https://github.com/JorgeValderrabano/Countries-Responsive-Table', lang: 'HTML' }
    ];

    /* ==========================================
       STATE
       ========================================== */
    let currentLang = 'es';

    /* ==========================================
       LANGUAGE TOGGLE
       ========================================== */
    function setLanguage(lang) {
        currentLang = lang;
        document.documentElement.setAttribute('data-lang', lang);

        // Update toggle button
        const flag = document.getElementById('langFlag');
        const label = document.getElementById('langLabel');
        if (lang === 'es') {
            flag.textContent = '🇬🇧';
            label.textContent = 'EN';
        } else {
            flag.textContent = '🇪🇸';
            label.textContent = 'ES';
        }

        // Update page title
        document.title = lang === 'es'
            ? 'Jorge Valderrabano — Portafolio'
            : 'Jorge Valderrabano — Web Developer & Designer';

        // Update all translatable elements
        document.querySelectorAll('[data-i18n]').forEach(el => {
            const key = el.getAttribute('data-i18n');
            if (translations[lang] && translations[lang][key]) {
                el.innerHTML = translations[lang][key];
            }
        });

        // Re-render projects with new language
        renderProjects('all');
        renderGithubProjects();

        // Save preference
        localStorage.setItem('portfolio-lang', lang);
    }

    /* ==========================================
       PROJECT RENDERING
       ========================================== */
    function renderProjects(filter) {
        const grid = document.getElementById('projectsGrid');
        if (!grid) return;

        const filtered = filter === 'all'
            ? projects
            : projects.filter(p => p.category === filter);

        const visitText = translations[currentLang].visit_btn;

        grid.innerHTML = filtered.map((p, i) => `
            <div class="project-card animate-on-scroll" style="transition-delay: ${Math.min(i * 0.04, 0.6)}s">
                <div class="project-card__image-wrapper">
                    <img src="${p.img}" alt="${p.name}" class="project-card__image" loading="lazy">
                </div>
                <div class="project-card__body">
                    <h3 class="project-card__name">${p.name}</h3>
                    <p class="project-card__desc">${currentLang === 'es' ? p.desc_es : p.desc_en}</p>
                    <a href="${p.url}" target="_blank" rel="noopener" class="project-card__link">
                        ${visitText} <i class="fa-solid fa-arrow-right"></i>
                    </a>
                </div>
            </div>
        `).join('');

        // Observe new cards for scroll animation
        observeElements();
    }

    function renderGithubProjects() {
        const grid = document.getElementById('githubGrid');
        if (!grid) return;

        grid.innerHTML = githubProjects.map(p => `
            <div class="github-card animate-on-scroll">
                <h4 class="github-card__name"><i class="fa-brands fa-github"></i> ${p.name}</h4>
                <p class="github-card__desc">${currentLang === 'es' ? p.desc_es : p.desc_en}</p>
                <div class="github-card__meta">
                    <span><i class="fa-solid fa-code"></i> ${p.lang}</span>
                </div>
                <a href="${p.url}" target="_blank" rel="noopener" class="github-card__link">
                    <i class="fa-brands fa-github"></i> GitHub <i class="fa-solid fa-arrow-right"></i>
                </a>
            </div>
        `).join('');

        observeElements();
    }

    /* ==========================================
       SCROLL ANIMATIONS (Intersection Observer)
       ========================================== */
    let scrollObserver = null;

    function observeElements() {
        // Disconnect existing observer
        if (scrollObserver) scrollObserver.disconnect();

        scrollObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');

                    // Special: animate skill tag icons
                    if (entry.target.classList.contains('skill-tag')) {
                        entry.target.classList.add('animated');
                    }

                    scrollObserver.unobserve(entry.target);
                }
            });
        }, {
            threshold: 0.1,
            rootMargin: '0px 0px -40px 0px'
        });

        document.querySelectorAll('.animate-on-scroll:not(.visible)').forEach(el => {
            scrollObserver.observe(el);
        });
    }

    /* ==========================================
       NAV — Active Link & Mobile Menu
       ========================================== */
    function setupNavigation() {
        const hamburger = document.getElementById('navHamburger');
        const navLinks = document.getElementById('navLinks');
        const links = document.querySelectorAll('.nav__link');

        // Hamburger toggle
        if (hamburger) {
            hamburger.addEventListener('click', () => {
                hamburger.classList.toggle('open');
                navLinks.classList.toggle('open');
            });
        }

        // Close mobile menu on link click
        links.forEach(link => {
            link.addEventListener('click', () => {
                hamburger.classList.remove('open');
                navLinks.classList.remove('open');
            });
        });

        // Active link on scroll
        const sections = document.querySelectorAll('section[id]');

        function updateActiveLink() {
            const scrollPos = window.scrollY + 120;

            sections.forEach(section => {
                const top = section.offsetTop;
                const height = section.offsetHeight;
                const id = section.getAttribute('id');

                if (scrollPos >= top && scrollPos < top + height) {
                    links.forEach(l => l.classList.remove('active'));
                    const active = document.querySelector(`.nav__link[href="#${id}"]`);
                    if (active) active.classList.add('active');
                }
            });
        }

        window.addEventListener('scroll', updateActiveLink, { passive: true });
        updateActiveLink();
    }

    /* ==========================================
       PROJECT FILTERS
       ========================================== */
    function setupFilters() {
        const buttons = document.querySelectorAll('.filter-btn');

        buttons.forEach(btn => {
            btn.addEventListener('click', () => {
                buttons.forEach(b => b.classList.remove('active'));
                btn.classList.add('active');
                renderProjects(btn.getAttribute('data-filter'));
            });
        });
    }

    /* ==========================================
       DRAG & RESIZE FOR TEXT CARDS
       ========================================== */
    function setupDragResize() {
        document.querySelectorAll('.draggable').forEach(el => {
            const handle = el.querySelector('.text-card__handle') || el;

            let isDragging = false;
            let startX, startY, offsetX, offsetY;

            function onStart(e) {
                isDragging = true;
                el.classList.add('dragging');

                const clientX = e.touches ? e.touches[0].clientX : e.clientX;
                const clientY = e.touches ? e.touches[0].clientY : e.clientY;

                const rect = el.getBoundingClientRect();
                offsetX = clientX - rect.left;
                offsetY = clientY - rect.top;

                // Switch to absolute positioning
                if (getComputedStyle(el).position !== 'absolute') {
                    el.style.position = 'relative';
                }

                el.style.zIndex = '100';

                document.addEventListener('mousemove', onMove);
                document.addEventListener('mouseup', onEnd);
                document.addEventListener('touchmove', onMove, { passive: false });
                document.addEventListener('touchend', onEnd);
            }

            function onMove(e) {
                if (!isDragging) return;
                e.preventDefault();

                const clientX = e.touches ? e.touches[0].clientX : e.clientX;
                const clientY = e.touches ? e.touches[0].clientY : e.clientY;

                el.style.transform = `translate(${clientX - offsetX - el.parentElement.getBoundingClientRect().left}px, ${clientY - offsetY - el.parentElement.getBoundingClientRect().top}px)`;
            }

            function onEnd() {
                isDragging = false;
                el.classList.remove('dragging');
                document.removeEventListener('mousemove', onMove);
                document.removeEventListener('mouseup', onEnd);
                document.removeEventListener('touchmove', onMove);
                document.removeEventListener('touchend', onEnd);
            }

            handle.addEventListener('mousedown', onStart);
            handle.addEventListener('touchstart', onStart, { passive: true });
        });
    }

    /* ==========================================
       SKILL ICON SCROLL ANIMATION
       ========================================== */
    function setupSkillAnimations() {
        const skillsSection = document.querySelector('.about__skills');

        if (!skillsSection) return;

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const tags = entry.target.querySelectorAll('.skill-tag');
                    tags.forEach((tag, i) => {
                        setTimeout(() => {
                            tag.classList.add('animated');
                        }, i * 80);
                    });
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.2 });

        observer.observe(skillsSection);
    }

    /* ==========================================
       LANGUAGE TOGGLE SETUP
       ========================================== */
    function setupLanguageToggle() {
        const toggle = document.getElementById('langToggle');
        if (!toggle) return;

        toggle.addEventListener('click', () => {
            setLanguage(currentLang === 'es' ? 'en' : 'es');
        });
    }

    /* ==========================================
       INITIALIZATION
       ========================================== */
    function init() {
        // Restore saved language or default to Spanish
        const savedLang = localStorage.getItem('portfolio-lang') || 'es';
        setLanguage(savedLang);

        // Setup all interactive features
        setupNavigation();
        setupFilters();
        setupDragResize();
        setupSkillAnimations();
        setupLanguageToggle();

        // Render projects
        renderProjects('all');
        renderGithubProjects();

        // Initial scroll animation observation
        observeElements();
    }

    // Run when DOM is ready
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }

})();
