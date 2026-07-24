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
            about_bio1: 'Hola, soy <strong>Jorge Valderrabano</strong>. Soy desarrollador web, especialista en operaciones digitales y fundador de Virtualder. Con más de 10 años de experiencia combinada, me dedico a crear soluciones integrales para potenciar la presencia en línea de las empresas.',
            about_bio2: 'Hoy, utilizo esta experiencia multidisciplinaria para construir sitios web optimizados para conversiones (utilizando HTML, CSS, JavaScript y CMS), gestionar sistemas CRM y automatizar flujos de trabajo. Mi objetivo es simple: crear plataformas que no solo destaquen visualmente, sino que impulsen el crecimiento real y los ingresos de mis clientes. Combino mi formación en comunicación con habilidades técnicas para crear experiencias web que no solo se ven bien, sino que comunican eficazmente. He trabajado con más de 40 clientes creando sitios web profesionales, plataformas de e-commerce y aplicaciones web.',
            about_bio3: 'Hoy, utilizo esta experiencia multidisciplinaria para construir sitios web optimizados para conversiones (utilizando HTML, CSS, JavaScript y CMS), gestionar sistemas CRM y automatizar flujos de trabajo. Mi objetivo es simple: crear plataformas que no solo destaquen visualmente, sino que impulsen el crecimiento real y los ingresos de mis clientes. Actualmente disponible para proyectos freelance. Si necesitas un sitio web profesional, no dudes en contactarme.',
            about_phone_label: 'Teléfono',
            about_email_label: 'Email',
            about_location_label: 'Ubicación',
            about_status_label: 'Disponibilidad',
            about_status_value: 'Disponible hasta Agosto | Freelance',
            about_projects_done: 'proyectos realizados',
            about_cv_btn: 'Descargar CV',
            about_skills_title: 'Habilidades',
            skill_design: 'Diseño Web',
            skill_writing: 'Redacción',
            skill_video: 'Edición',
            skill_english: 'Inglés Nivel C2',
            skill_italian: 'Italiano Nivel B1',
            textcard1_title: 'Lo que hago',
            textcard1_text: 'Creo sitios web modernos y funcionales que reflejan la identidad de cada marca.',
            textcard2_title: 'Mi enfoque',
            textcard2_text: 'Diseño centrado en el usuario, rendimiento optimizado y código limpio.',
            textcard3_title: 'Tecnologías',
            textcard3_text: 'HTML, CSS, JavaScript, WordPress, React, Node.js, Python, Git, Figma y más.',

            edu_title: 'Formación y Certificaciones',
            edu1_title: 'Licenciado en Comunicación',
            edu1_inst: 'Universidad Juárez Autónoma de Tabasco',
            edu1_desc: 'Formación en comunicación estratégica, periodismo, producción audiovisual, comunicación organizacional y marketing. Desarrollé habilidades en redacción, investigación, creación de contenidos, narrativa y gestión de proyectos de comunicación que hoy aplico en el desarrollo web y el marketing digital.',
            edu2_title: 'Técnico en Informática',
            edu2_inst: 'Fundación Carlos Slim',
            edu2_desc: 'Capacitación en hardware, software, sistemas operativos, redes y soporte técnico. Fortalecí mi capacidad para resolver problemas técnicos y comprender el funcionamiento de la infraestructura informática.',
            edu3_title: 'Introducción al Desarrollo Web I & II',
            edu3_inst: 'Google',
            edu3_desc: 'Fundamentos del desarrollo web moderno, incluyendo HTML, CSS, JavaScript y buenas prácticas para la creación de sitios accesibles, responsivos y orientados a la experiencia del usuario.',
            edu4_title: 'Responsive Web Design',
            edu4_inst: 'freeCodeCamp',
            edu4_desc: 'Desarrollo de interfaces web adaptables utilizando HTML5 y CSS3, aplicando principios de diseño responsive, accesibilidad y maquetación moderna para diferentes dispositivos.',
            edu5_title: 'Elements of AI',
            edu5_inst: 'University of Helsinki',
            edu5_desc: 'Introducción a la inteligencia artificial, aprendizaje automático y aplicaciones prácticas de la IA. Comprensión de sus fundamentos y de cómo integrarla para mejorar procesos y productividad.',
            edu6_title: 'Desarrollador de Servidores',
            edu6_inst: 'Fundación Carlos Slim',
            edu6_desc: 'Conocimientos sobre administración de servidores, servicios de red, configuración de infraestructura y gestión de entornos para aplicaciones y sitios web.',
            edu7_title: 'Administrador de Bases de Datos',
            edu7_inst: 'Fundación Carlos Slim',
            edu7_desc: 'Formación en diseño, administración y mantenimiento de bases de datos relacionales, consultas SQL y gestión eficiente de la información para aplicaciones empresariales.',
            edu8_title: 'Inglés C2',
            edu8_inst: 'EF SET Certificate',
            edu8_desc: 'Certificación de dominio avanzado del idioma inglés (C2), con capacidad para comunicarme de forma profesional en entornos internacionales, comprender documentación técnica y colaborar con equipos globales.',
            edu9_title: 'Curso Preparatorio del Centro Público de Formación en Inteligencia Artificial',
            edu9_inst: 'Tecnológico Nacional de México',
            edu9_desc: 'Programa del Centro Público de Inteligencia Artificial adscrito a la Secretaría de Extensión y Vinculación y a la Dirección de Vinculación e Intercambio Académico.',

            exp_title: 'Experiencia de Trabajo',
            exp1_title: 'Fundador y Creador de Contenido',
            exp1_inst: 'Gatto Comics',
            exp1_desc: 'Fundé y desarrollé Gatto Comics, un proyecto dedicado a la divulgación del mundo del cómic, manga y la cultura pop. Produzco contenido para YouTube y redes sociales, realizando investigación, guionismo, edición de video, diseño gráfico, SEO, estrategia de contenido y community management, alcanzando una audiencia de más de 36,000 suscriptores.',
            exp2_title: 'Coordinador de Proyectos',
            exp2_inst: 'CASUNI S.A. de C.V.',
            exp2_desc: 'Coordiné proyectos de mantenimiento y auditoría para instituciones financieras a nivel nacional, supervisando procesos operativos, elaboración de reportes, control de inventario y seguimiento de incidencias. Desarrollé habilidades en gestión de proyectos, organización, resolución de problemas y trabajo bajo presión.',
            exp3_title: 'Redactor',
            exp3_inst: 'Tomos y Grapas',
            exp3_desc: 'Colaboré como redactor especializado para una revista digital dedicada al cómic y la cultura geek. Escribí reseñas, artículos de opinión y contenido editorial, fortaleciendo mis habilidades de investigación, redacción periodística y comunicación escrita para audiencias digitales.',
            exp4_title: 'Coordinador de Servicios Generales',
            exp4_inst: 'Grupo Financiero Banorte',
            exp4_desc: 'Coordiné procesos administrativos y operativos relacionados con reportes, requisiciones, facturación, contabilidad y seguimiento de proyectos internos. Gestioné solicitudes de servicio, optimicé procesos y coordiné entre diferentes departamentos para asegurar el cumplimiento oportuno y la adherencia a estándares de calidad.',
            exp5_title: 'Web Producer',
            exp5_inst: 'lavendi.mx',
            exp5_desc: 'Gestioné el desarrollo, mantenimiento y publicación de sitios web, colaborando estrechamente con los equipos de marketing y ventas. Implementé estrategias de SEO, optimización de contenido, campañas de Google Ads, generación de leads mediante CRM y automatizaciones impulsadas por IA, contribuyendo al crecimiento digital de múltiples clientes.',
            exp6_title: 'Fundador y Desarrollador Web',
            exp6_inst: 'Virtualder',
            exp6_desc: 'Fundé Virtualder, una agencia especializada en desarrollo web, SEO y marketing digital. Diseño y desarrollo sitios web enfocados en rendimiento y conversión, integrando soluciones personalizadas para empresas de diversos sectores. Además, asesoro a clientes en estrategia digital, posicionamiento orgánico, automatización de procesos e implementación de tecnologías de inteligencia artificial.',

            proj_title: 'Proyectos',
            proj_current_title: 'Proyectos Actuales',
            proj_current_subtitle: 'Selección de los proyectos más recientes desarrollados desde virtualder.mx, diseñados y desarrollados por mí.',
            proj_additional_title: 'Proyectos Adicionales',
            proj_subtitle: 'Una selección de sitios web y aplicaciones que he diseñado y desarrollado.',
            proj_github_title: 'Proyectos en GitHub',
            filter_all: 'Todos',
            filter_health: 'Salud',
            filter_reservations: 'Reservaciones',
            filter_education: 'Educación',
            filter_ecommerce: 'E-Commerce',
            filter_artists: 'Artistas',
            filter_professional_services: 'Servicios Profesionales',
            filter_real_estate: 'Bienes Raíces',
            filter_tourism: 'Turismo',
            filter_saas: 'SaaS',
            filter_games: 'Juegos',
            filter_business: 'Negocios',
            filter_professionals: 'Profesionales',
            visit_btn: 'Visitar',

            cert_btn: 'Ver Certificado',

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
            about_bio1: 'Hi, I\'m <strong>Jorge Valderrabano</strong>. I\'m a web developer, digital operations specialist, and founder of Virtualder. With over 10 years of combined experience, I specialize in creating comprehensive solutions to elevate businesse\'s online presence.',
            about_bio2: 'My profile is unique because it bridges creativity with analytical rigor. On one hand, my background in Communication has allowed me to specialize in content creation, SEO, and digital marketing strategies. On the other hand, my corporate track record—at institutions like Grupo Financiero Banorte and CASUNI—trained me in rigorous project management, operational administration, auditing, and data analysis. I combine my communication background with technical skills to create web experiences that not only look great but communicate effectively. I\'ve worked with over 40 clients creating professional websites, e-commerce platforms, and web applications.',
            about_bio3: 'Today, I leverage this multidisciplinary experience to build conversion-optimized websites (using HTML, CSS, JavaScript, and CMS), manage CRM systems, and automate workflows. My goal is simple: to build platforms that not only stand out visually but also drive real growth and revenue for my clients. Currently available for freelance projects. If you need a professional website, don\'t hesitate to reach out.',
            about_phone_label: 'Phone',
            about_email_label: 'Email',
            about_location_label: 'Location',
            about_status_label: 'Availability',
            about_status_value: 'Available until August | Freelance',
            about_projects_done: 'completed projects',
            about_cv_btn: 'Download CV',
            about_skills_title: 'Skills',
            skill_design: 'Web Design',
            skill_writing: 'Copywriting',
            skill_video: 'Editing',
            skill_english: 'C2 English',
            skill_italian: 'B1 Italian',
            textcard1_title: 'What I Do',
            textcard1_text: 'I build modern, functional websites that reflect each brand\'s identity.',
            textcard2_title: 'My Approach',
            textcard2_text: 'User-centered design, optimized performance, and clean code.',
            textcard3_title: 'Technologies',
            textcard3_text: 'HTML, CSS, JavaScript, WordPress, React, Node.js, Python, Git, Figma & more.',

            edu_title: 'Education & Certifications',
            edu1_title: 'Bachelor\'s in Communication',
            edu1_inst: 'Universidad Juárez Autónoma de Tabasco',
            edu1_desc: 'Training in strategic communication, journalism, audiovisual production, organizational communication, and marketing. Developed skills in writing, research, content creation, narrative, and communication project management that I now apply in web development and digital marketing.',
            edu2_title: 'IT Technician',
            edu2_inst: 'Fundación Carlos Slim',
            edu2_desc: 'Training in hardware, software, operating systems, networks, and technical support. Strengthened my ability to solve technical problems and understand how IT infrastructure works.',
            edu3_title: 'Intro to Web Development I & II',
            edu3_inst: 'Google',
            edu3_desc: 'Fundamentals of modern web development, including HTML, CSS, JavaScript, and best practices for creating accessible, responsive, user-experience-oriented websites.',
            edu4_title: 'Responsive Web Design',
            edu4_inst: 'freeCodeCamp',
            edu4_desc: 'Development of adaptable web interfaces using HTML5 and CSS3, applying responsive design principles, accessibility, and modern layout techniques for different devices.',
            edu5_title: 'Elements of AI',
            edu5_inst: 'University of Helsinki',
            edu5_desc: 'Introduction to artificial intelligence, machine learning, and practical AI applications. Understanding its fundamentals and how to integrate it to improve processes and productivity.',
            edu6_title: 'Server Developer',
            edu6_inst: 'Fundación Carlos Slim',
            edu6_desc: 'Knowledge of server administration, network services, infrastructure configuration, and environment management for applications and websites.',
            edu7_title: 'Database Administrator',
            edu7_inst: 'Fundación Carlos Slim',
            edu7_desc: 'Training in design, administration, and maintenance of relational databases, SQL queries, and efficient information management for business applications.',
            edu8_title: 'C2 English',
            edu8_inst: 'EF SET Certificate',
            edu8_desc: 'Advanced English proficiency certification (C2), with the ability to communicate professionally in international environments, understand technical documentation, and collaborate with global teams.',
            edu9_title: 'Preparatory Course of the Public Center for Training in Artificial Intelligence',
            edu9_inst: 'National Technological Institute of Mexico',
            edu9_desc: 'Program of the Public Center for Artificial Intelligence affiliated with the Secretariat of Extension and Outreach and the Directorate of Academic Outreach and Exchange.',

            exp_title: 'Work Experience',
            exp1_title: 'Founder and Content Creator',
            exp1_inst: 'Gatto Comics',
            exp1_desc: 'I founded and developed Gatto Comics, a project dedicated to promoting the world of comics, manga, and pop culture. I produce content for YouTube and social media, handling research, scriptwriting, video editing, graphic design, SEO, content strategy, and community management, reaching an audience of over 36,000 subscribers.',
            exp2_title: 'Project Coordinator',
            exp2_inst: 'CASUNI S.A. de C.V.',
            exp2_desc: 'I coordinated maintenance and audit projects for financial institutions nationwide, overseeing operational processes, report preparation, inventory control, and incident tracking. I developed skills in project management, organization, problem-solving, and working under pressure.',
            exp3_title: 'Writer',
            exp3_inst: 'Tomos y Grapas',
            exp3_desc: 'I collaborated as a specialized writer for a digital magazine dedicated to comics and geek culture. I wrote reviews, opinion pieces, and editorial content, strengthening my research, journalistic writing, and written communication skills for digital audiences.',
            exp4_title: 'General Services Coordinator',
            exp4_inst: 'Grupo Financiero Banorte',
            exp4_desc: 'I coordinated administrative and operational processes related to reports, requisitions, invoicing, accounting, and internal project tracking. I worked on managing service requests, optimizing processes, and coordinating between different departments to ensure timely completion and adherence to quality standards.',
            exp5_title: 'Web Producer',
            exp5_inst: 'lavendi.mx',
            exp5_desc: 'I managed the development, maintenance, and publication of websites, collaborating closely with marketing and sales teams. I implemented SEO strategies, content optimization, Google Ads campaigns, lead generation through CRM, and AI-powered automations, contributing to the digital growth of multiple clients.',
            exp6_title: 'Founder and Web Developer',
            exp6_inst: 'Virtualder',
            exp6_desc: 'I founded Virtualder, an agency specializing in web development, SEO, and digital marketing. I design and develop websites focused on performance and conversion, integrating customized solutions for companies in various sectors. I also advise clients on digital strategy, organic positioning, process automation, and the implementation of artificial intelligence technologies.',

            proj_title: 'Projects',
            proj_current_title: 'Current Projects',
            proj_current_subtitle: 'Selection of the most recent projects developed from virtualder.mx, designed and developed by me.',
            proj_additional_title: 'Additional Projects',
            proj_subtitle: 'A selection of websites and applications I\'ve designed and developed.',
            proj_github_title: 'GitHub Projects',
            filter_all: 'All',
            filter_health: 'Health',
            filter_reservations: 'Reservations',
            filter_education: 'Education',
            filter_ecommerce: 'E-Commerce',
            filter_artists: 'Artists',
            filter_professional_services: 'Professional Services',
            filter_real_estate: 'Real Estate',
            filter_tourism: 'Tourism',
            filter_saas: 'SaaS',
            filter_games: 'Games',
            filter_business: 'Business',
            filter_professionals: 'Professionals',
            visit_btn: 'Visit',

            cert_btn: 'View Certificate',

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
    const currentProjects = [
        { name: 'Kareni Santiago', desc_es: 'Portafolio oficial de Kareni Santiago, ilustradora y creadora de cómics radicada en México.', desc_en: 'Official portfolio of Kareni Santiago, illustrator and comic creator based in Mexico.', url: 'https://karenisantiago.art/', img: 'img/p62.webp', category: 'artists' },
        { name: 'CRM Virtualder', desc_es: 'Sistema CRM hecho a la medida para centralizar y organizar toda la información de clientes actuales y prospectos.', desc_en: 'Custom CRM system to centralize and organize all current and prospective client information.', url: 'https://crm.virtualder.mx/', img: 'img/p63.webp', category: 'saas' },
        { name: 'Gatorama', desc_es: 'Gatorama es un juego de memoria con temática de gatos. Debes emparejar los pares para completar el tablero.', desc_en: 'Gatorama is a cat-themed memory game. Match pairs to complete the board.', url: 'https://gatorama.virtualder.mx/', img: 'img/p64.webp', category: 'games' },
        { name: 'Cymbo Care', desc_es: 'CymboCare es una solución tópica natural que ayuda a aliviar molestias de lesiones bucales y herpes labial.', desc_en: 'CymboCare is a natural topical solution that helps relieve discomfort from mouth sores and cold sores.', url: 'https://cymbocare.com.mx/', img: 'img/p65.webp', category: 'ecommerce' },
        { name: 'Gastri Lif', desc_es: 'Gastri Lif es un suplemento alimenticio 100% natural formulado para favorecer el equilibrio gástrico y digestivo.', desc_en: 'Gastri Lif is a 100% natural dietary supplement formulated to promote gastric and digestive balance.', url: 'https://gastrilif.com.mx/', img: 'img/p66.webp', category: 'ecommerce' },
        { name: 'Mundo Gráfico de Monterrey', desc_es: 'Soluciones integrales en papelería corporativa, empaques, publicidad y acabados de lujo en Monterrey.', desc_en: 'Comprehensive solutions in corporate stationery, packaging, advertising, and luxury finishes in Monterrey.', url: 'https://imprentamonterrey.com/', img: 'img/p67.webp', category: 'business' },
        { name: 'Impresoras 360', desc_es: 'Renta, venta y mantenimiento de equipos multifuncionales, impresoras y escáneres en Ciudad de México.', desc_en: 'Rental, sale, and maintenance of multifunctional equipment, printers, and scanners in Mexico City.', url: 'https://impresoras360.com/', img: 'img/p68.webp', category: 'ecommerce' },
        { name: 'JP Inspecciones', desc_es: 'Sistema de verificación de diplomas y certificaciones mediante folio o QR de empresa de certificación en México.', desc_en: 'Diploma and certification verification system via folio or QR from a certification company in Mexico.', url: 'https://jpinspecciones.com/', img: 'img/p69.webp', category: 'saas' },
        { name: 'Vamos a Volar', desc_es: 'Operadora especializada en atender agencias y agentes de viaje independientes con sede en Chihuahua.', desc_en: 'Tour operator specialized in serving independent travel agencies and agents based in Chihuahua.', url: 'https://vamosavolar.com.mx/', img: 'img/p70.webp', category: 'business' },
        { name: 'Sandra Jahnsen', desc_es: 'Coach especializada en técnicas neurolingüísticas con experiencia en el sector energético en México y Noruega.', desc_en: 'Coach specialized in neurolinguistic techniques with experience in the energy sector in Mexico and Norway.', url: 'https://sandrajahnsen.com/', img: 'img/p71.webp', category: 'professionals' },
        { name: 'Bravo Deleite', desc_es: 'Empresa de salsas gourmet, hogar de La Original Salsa Qulera de venta en México, Estados Unidos y Europa.', desc_en: 'Gourmet sauce company, home of La Original Salsa Qulera, sold in Mexico, the United States, and Europe.', url: 'https://bravodeleite.com/', img: 'img/p72.webp', category: 'ecommerce' },
        { name: 'EZ Communications', desc_es: 'Agencia de relaciones públicas, gestión de eventos y marketing especializada en Estados Unidos.', desc_en: 'Public relations, event management, and marketing agency specialized in the United States.', url: 'https://ezcommunications.com/', img: 'img/p73.webp', category: 'artists' },
        { name: 'Resurqroo', desc_es: 'Inversiones inmobiliarias seguras y rentables en Chetumal y el sur de Quintana Roo.', desc_en: 'Safe and profitable real estate investments in Chetumal and southern Quintana Roo.', url: 'https://cesarvazquez.com.mx/', img: 'img/p74.webp', category: 'professionals' },
        { name: 'Estudios Pacífico', desc_es: 'Estudio creativo de expertos en proyectos arquitectónicos y ejecutivos en Puerto Vallarta, Jalisco.', desc_en: 'Creative studio of experts in architectural and executive projects in Puerto Vallarta, Jalisco.', url: 'https://estudiospacifico.com/', img: 'img/p75.webp', category: 'professionals' },
        { name: 'Solarstav & Co', desc_es: 'Empresa dedicada a impulsar el uso de energías renovables en Juriquilla, Querétaro.', desc_en: 'Company dedicated to promoting the use of renewable energy in Juriquilla, Querétaro.', url: 'https://solarstav.com/', img: 'img/p76.webp', category: 'business' },
        { name: 'Alquimia Consultorio', desc_es: 'Consultorio de medicina estética y tienda de productos de medicina funcional en La Piedad, Michoacán.', desc_en: 'Aesthetic medicine clinic and functional medicine products store in La Piedad, Michoacán.', url: 'https://alquimiaconsultorio.com/', img: 'img/p77.webp', category: 'ecommerce' },
        { name: 'El Mejor Lavado', desc_es: 'Lavandería y tintorería con servicio a domicilio en la ciudad de Santa Catarina, Nuevo León.', desc_en: 'Laundry and dry cleaning with home delivery service in Santa Catarina, Nuevo León.', url: 'https://elmejorlavado.com/', img: 'img/p78.webp', category: 'business' },
        { name: 'Karen Santiago', desc_es: 'Asesora en Estrategias de Inversión y en productos bursátiles de la banca tradicional.', desc_en: 'Investment Strategy Advisor and stock market products from traditional banking.', url: 'https://karen-santiago.com/', img: 'img/p79.webp', category: 'professionals' }
    ];

    const projects = [
        // ponytail: UOnline first, Ideas Disruptivas last among new ones, then existing order
        { name: 'UOnline', desc_es: 'Universidad en línea.', desc_en: 'Online University', url: 'https://uonline.mx/', img: 'img/p61.png', category: 'education' },
        { name: 'Ena Barrera', desc_es: 'Psicóloga y terapeuta familiar.', desc_en: 'Psychologist & Family Therapist', url: 'https://enabarrera.com/', img: 'img/p54.png', category: 'health' },
        { name: 'Espléndido', desc_es: 'Florería en Villahermosa, Tabasco.', desc_en: 'Florist in Villahermosa, Tabasco', url: 'https://esplendido.mx/', img: 'img/p55.png', category: 'ecommerce' },
        { name: 'Zazil Tunich', desc_es: 'Cenote-Museo en Valladolid, Yucatán', desc_en: 'Cenote-Museum in Valladolid, Yucatán', url: 'https://zaziltunich.com/', img: 'img/p56.png', category: 'tourism' },
        { name: 'Altamar Cancún', desc_es: 'Tours privados en Riviera Maya.', desc_en: 'Private Tours in Riviera Maya', url: 'https://altamarcancun.com/', img: 'img/p57.png', category: 'tourism' },
        { name: 'RTM Group', desc_es: 'Servicios de internet en Estados Unidos.', desc_en: 'Internet Services in the United States', url: 'https://rtmgroupllc.net/', img: 'img/p58.png', category: 'professional-services' },
        { name: 'Prismatic WiFi', desc_es: 'Servicios de telefonía e internet en Estados Unidos.', desc_en: 'Telephony & Internet Services in the United States', url: 'https://prismaticwifi.com/', img: 'img/p59.png', category: 'professional-services' },
        { name: 'Power Fan', desc_es: 'Turbinas y ventiladores publicitarios.', desc_en: 'Advertising Turbines & Fans', url: 'https://www.power-fan.com/', img: 'img/p60.png', category: 'professional-services' },
        { name: 'Ideas Disruptivas', desc_es: 'Servicio de innovación digital.', desc_en: 'Digital Innovation Service', url: 'https://ideasdisruptivas.com/', img: 'img/p53.png', category: 'professional-services' },
        // Existing projects
        { name: '818 Inmobiliaria', desc_es: 'Bienes raíces en Villahermosa, Tabasco.', desc_en: 'Real Estate in Villahermosa, Tabasco.', url: 'https://818.com.mx/', img: 'img/p52.png', category: 'real-estate' },
        { name: 'Prohiseg', desc_es: 'Consultoría en higiene y seguridad', desc_en: 'Hygiene & Safety Consulting', url: 'https://www.prohiseg.com/', img: 'img/p50.png', category: 'professional-services' },
        { name: 'Servicio Hurtado', desc_es: 'Pipas de agua en CDMX', desc_en: 'Water Trucks in Mexico City', url: 'https://serviciohurtado.com/', img: 'img/p51.png', category: 'professional-services' },
        { name: 'Vita Valley', desc_es: 'Productos agrícolas al mayoreo.', desc_en: 'Wholesale Agricultural Products', url: 'https://vitavalley.mx/es/', img: 'img/p49.png', category: 'professional-services' },
        { name: 'AAIN Holístico', desc_es: 'Terapia holística.', desc_en: 'Holistic Therapy', url: 'https://aainholistico.com/', img: 'img/p48.png', category: 'health' },
        { name: 'Six Gardens', desc_es: 'Parque ecoturístico en Veracruz.', desc_en: 'Ecotourism Park in Veracruz', url: 'https://sixgardens.mx/', img: 'img/p47.png', category: 'tourism' },
        { name: 'Villa Maryana', desc_es: 'Casa en la playa en Tabasco.', desc_en: 'Beach House in Tabasco', url: 'https://villamaryanamx.com/', img: 'img/p46.png', category: 'tourism' },
        { name: 'Maya Transportation', desc_es: 'Renta de vehículos en la Riviera Maya', desc_en: 'Vehicle Rental in Riviera Maya', url: 'https://mayatransportationmx.com/', img: 'img/p45.png', category: 'tourism' },
        { name: 'Sisu Seguros', desc_es: 'Servicio de seguros.', desc_en: 'Insurance Service', url: 'https://www.sisuseguros.mx/', img: 'img/p44.png', category: 'professional-services' },
        { name: 'MCI', desc_es: 'Tienda de Insertos para Maquinado y Torneado', desc_en: 'Machining Inserts Store', url: 'https://minsertos.com.mx/', img: 'img/p43.png', category: 'ecommerce' },
        { name: 'The Supps Factory', desc_es: 'Tienda de Suplementos Alimenticios', desc_en: 'Nutritional Supplements Store', url: 'https://thesuppsfactory.com.mx/', img: 'img/p41.png', category: 'ecommerce' },
        { name: 'One Global MG', desc_es: 'Servicios de Fletes e Importación', desc_en: 'Freight & Import Services', url: 'https://oneglobalmg.com/', img: 'img/p40.png', category: 'ecommerce' },
        { name: 'Tesa Trucks', desc_es: 'Venta de Camiones y Trailers en El Paso, Texas', desc_en: 'Truck & Trailer Sales in El Paso, Texas', url: 'https://tesatrucks.com/', img: 'img/p37.png', category: 'ecommerce' },
        { name: 'Resanic', desc_es: 'Tienda de Artículos para Trabajos en Alturas', desc_en: 'Height Work Equipment Store', url: 'https://tienda.resanic.com.mx/', img: 'img/p31.png', category: 'ecommerce' },
        { name: 'Albercas JCV', desc_es: 'Proveedor de Albercas', desc_en: 'Swimming Pool Supplier', url: 'https://albercasjcv.com/', img: 'img/p29.png', category: 'ecommerce' },
        { name: 'Bolsas El Zaguán', desc_es: 'Proveedor de Bolsas y Embalaje', desc_en: 'Bags & Packaging Supplier', url: 'https://www.bolsaselzaguan.com/', img: 'img/p27.png', category: 'ecommerce' },
        { name: 'World Trade Products', desc_es: 'Marketplace de Productos Agrícolas', desc_en: 'Agricultural Products Marketplace', url: 'https://worldtradeproducts.com/', img: 'img/p26.png', category: 'ecommerce' },
        { name: 'Tienda UO', desc_es: 'Tienda de la Universidad Olmeca', desc_en: 'Universidad Olmeca Store', url: 'https://tiendauo.olmeca.edu.mx/', img: 'img/p23.png', category: 'ecommerce' },
        { name: 'Gecko Electronics', desc_es: 'Tienda de Audio y Video', desc_en: 'Audio & Video Store', url: 'https://geckoelectronics.com/', img: 'img/p21.png', category: 'ecommerce' },
        { name: 'Abaofic 2L', desc_es: 'Tienda de Artículos de Oficina', desc_en: 'Office Supplies Store', url: 'https://abaofic.com/', img: 'img/p20.png', category: 'ecommerce' },
        { name: 'Ecoluxxe', desc_es: 'Marketplace para Hoteles Boutique de Lujo', desc_en: 'Boutique Hotel Marketplace', url: 'https://ecoluxxe.com/', img: 'img/p19.png', category: 'ecommerce' },
        { name: 'Medicare', desc_es: 'Tienda de Artículos Médicos', desc_en: 'Medical Supplies Store', url: 'https://medicare.mx/', img: 'img/p9.png', category: 'ecommerce' },
        { name: 'Papelerías Dalí', desc_es: 'Papelería', desc_en: 'Stationery Store', url: 'https://papeleriasdali.com/', img: 'img/p7.png', category: 'ecommerce' },
        { name: 'Flash Recarga', desc_es: 'Venta y Recarga de Cartuchos de Tinta', desc_en: 'Ink Cartridge Sales & Refill', url: 'https://flashrecarga.com.mx/', img: 'img/p36.png', category: 'professional-services' },
        { name: 'Enrique Vertiz Studio', desc_es: 'Arquitecto', desc_en: 'Architect', url: 'https://enriquevertizstudio.com/', img: 'img/p34.png', category: 'professional-services' },
        { name: 'Notaría 39 de Tabasco', desc_es: 'Despacho de Abogados y Notario', desc_en: 'Law Firm & Notary', url: 'https://notaria39tabasco.mx/', img: 'img/p32.png', category: 'professional-services' },
        { name: 'Ingeniería Aplicada', desc_es: 'Proveedor de Equipo de Laboratorio', desc_en: 'Lab Equipment Supplier', url: 'https://ingaplicada.com.mx/', img: 'img/p28.png', category: 'professional-services' },
        { name: 'Linflet', desc_es: 'Servicios de Traslados e Importación', desc_en: 'Transport & Import Services', url: 'https://linflet.com/', img: 'img/p25.png', category: 'professional-services' },
        { name: 'Hardanflex', desc_es: 'Venta de Cortinas y Puertas Rápidas', desc_en: 'Doors & Curtains Supplier', url: 'https://hardanflex.com/', img: 'img/p17.png', category: 'professional-services' },
        { name: 'Abame', desc_es: 'Renta de Campers y Baños Móviles', desc_en: 'Camper & Mobile Bathroom Rental', url: 'https://abame.mx/', img: 'img/p16.png', category: 'professional-services' },
        { name: 'Conisa', desc_es: 'Servicios de Regulación Sanitaria', desc_en: 'Health Regulation Services', url: 'https://conisasc.com.mx/', img: 'img/p14.png', category: 'professional-services' },
        { name: 'Ingeniería R&A', desc_es: 'Servicios de Energía Eléctrica', desc_en: 'Electrical Energy Services', url: 'https://ingenieriarya.com/', img: 'img/p12.png', category: 'professional-services' },
        { name: 'JZ Seguros', desc_es: 'Broker de Seguros', desc_en: 'Insurance Broker', url: 'https://jzseguros.com/', img: 'img/p10.png', category: 'professional-services' },
        { name: 'Collectible List', desc_es: 'Galería de Arte', desc_en: 'Art Gallery', url: 'https://collectiblelist.shop/', img: 'img/p8.png', category: 'artists' },
        { name: 'Mind Fiction Studio', desc_es: 'Servicios de Fotografía y Video', desc_en: 'Photography & Video Services', url: 'https://mindfictionstudio.com/', img: 'img/p35.png', category: 'artists' },
        { name: 'Realtop', desc_es: 'Plataforma Inmobiliaria', desc_en: 'Real Estate Platform', url: 'https://realtop.mx/', img: 'img/p11.png', category: 'real-estate' },
        { name: 'Dos Búhos', desc_es: 'Viñedo', desc_en: 'Vineyard', url: 'https://www.dosbuhos.com/', img: 'img/p13.png', category: 'tourism' },
        { name: 'Jonuteek', desc_es: 'Santuario de Conservación de Manatíes', desc_en: 'Manatee Conservation Sanctuary', url: 'https://jonuteek.com.mx/', img: 'img/p30.png', category: 'tourism' },
        { name: 'ISF Academy', desc_es: 'Academia de Finanzas Sostenibles', desc_en: 'Sustainable Finance Academy', url: 'https://isf-academy.com/', img: 'img/p42.png', category: 'education' },
        { name: 'Expo Ciencias Tabasco 2024', desc_es: 'Exposición de Proyectos Científicos', desc_en: 'Science Projects Exhibition', url: 'https://ecn2024.laredmex.org/', img: 'img/p24.png', category: 'education' },
        { name: 'UO Medical Affairs', desc_es: 'Revista de Divulgación Científica', desc_en: 'Scientific Journal', url: 'https://uomedicalaffairs.olmeca.edu.mx/', img: 'img/p22.png', category: 'education' },
        { name: 'Instituto Cencalli', desc_es: 'Instituto de Terapia Familiar', desc_en: 'Family Therapy Institute', url: 'https://cencalli.edu.mx/', img: 'img/p15.png', category: 'education' },
        { name: 'Posgrados UO', desc_es: 'Posgrados Universitarios', desc_en: 'Graduate Programs', url: 'https://eeplv.olmeca.edu.mx/', img: 'img/p4.png', category: 'education' },
        { name: 'Universidad Olmeca', desc_es: 'Universidad Privada', desc_en: 'Private University', url: 'https://www.olmeca.edu.mx/', img: 'img/p3.png', category: 'education' },
        { name: 'Guest and Suites', desc_es: 'Renta de Inmuebles Vacacionales', desc_en: 'Vacation Property Rental', url: 'https://guestandsuites.com/', img: 'img/p38.png', category: 'reservations' },
        { name: 'Hotel San Juan', desc_es: 'Hotel en Villahermosa, Tabasco', desc_en: 'Hotel in Villahermosa, Tabasco', url: 'https://hotelsanjuanvhsa.com.mx/', img: 'img/p33.png', category: 'reservations' },
        { name: 'Global Car Rental', desc_es: 'Servicio de Renta de Autos', desc_en: 'Car Rental Service', url: 'https://globalcarrentalmx.com/', img: 'img/p2.png', category: 'reservations' },
        { name: 'Paola Moctezuma', desc_es: 'Terapeuta y Escritora', desc_en: 'Therapist & Writer', url: 'https://paolamoctezuma.com/', img: 'img/p39.png', category: 'health' },
        { name: 'Vanité', desc_es: 'Clínica de Medicina Estética', desc_en: 'Aesthetic Medicine Clinic', url: 'https://vanite.com.mx/', img: 'img/p18.png', category: 'health' },
        { name: 'Triskel Psicoterapias', desc_es: 'Consultorio Psicológico', desc_en: 'Psychology Clinic', url: 'https://triskelpsicoterapias.mx/', img: 'img/p6.png', category: 'health' },
        { name: 'Unacura', desc_es: 'Tienda de Productos Naturales', desc_en: 'Natural Products Store', url: 'https://unacura.com/', img: 'img/p5.png', category: 'health' },
        { name: 'Destination Dental', desc_es: 'Consultorio Dental', desc_en: 'Dental Clinic', url: 'https://destinationdentalmx.com', img: 'img/p1.png', category: 'health' }
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
        const label = document.getElementById('langLabel');
        if (label) {
            label.textContent = lang === 'es' ? 'EN' : 'ES';
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

        // Update filter counts for current language
        updateFilterCounts();

        // Re-render projects with new language
        renderCurrentProjects();
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

    function renderCurrentProjects(filter) {
        const grid = document.getElementById('currentProjectsGrid');
        if (!grid) return;

        const filtered = filter && filter !== 'all'
            ? currentProjects.filter(p => p.category === filter)
            : currentProjects;

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
    function updateFilterCounts() {
        document.querySelectorAll('.filter-btn').forEach(btn => {
            const filter = btn.getAttribute('data-filter');
            const count = filter === 'all' ? projects.length : projects.filter(p => p.category === filter).length;
            const label = translations[currentLang]['filter_' + filter] || btn.textContent.replace(/\s*\(\d+\)$/, '');
            btn.textContent = label + ' (' + count + ')';
        });
    }

    function setupFilters() {
        updateFilterCounts();
        const buttons = document.querySelectorAll('.filter-btn');

        buttons.forEach(btn => {
            btn.addEventListener('click', () => {
                buttons.forEach(b => b.classList.remove('active'));
                btn.classList.add('active');
                renderProjects(btn.getAttribute('data-filter'));
            });
        });
    }

    function setupCurrentFilters() {
        const buttons = document.querySelectorAll('.filter-btn-c');

        buttons.forEach(btn => {
            btn.addEventListener('click', () => {
                buttons.forEach(b => b.classList.remove('active'));
                btn.classList.add('active');
                renderCurrentProjects(btn.getAttribute('data-filter'));
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
       STICKY EDUCATION TITLE (handled by CSS now)
       ========================================== */
    function setupStickyEduTitle() {
        // Now handled purely via CSS position: sticky on .education__left
        // No JS scroll logic needed
    }

    /* ==========================================
       CERTIFICATE LIGHTBOX
       ========================================== */
    function setupCertLightbox() {
        const lightbox = document.getElementById('certLightbox');
        const image = document.getElementById('certImage');
        const closeBtn = document.getElementById('certClose');
        const overlay = document.getElementById('certOverlay');

        if (!lightbox || !image || !closeBtn || !overlay) return;

        function open(src) {
            image.src = src;
            lightbox.classList.add('open');
            lightbox.setAttribute('aria-hidden', 'false');
            document.body.style.overflow = 'hidden';
        }

        function close() {
            lightbox.classList.remove('open');
            lightbox.setAttribute('aria-hidden', 'true');
            document.body.style.overflow = '';
        }

        // Open on any .cert-btn click
        document.addEventListener('click', function (e) {
            const btn = e.target.closest('.cert-btn');
            if (btn && btn.dataset.cert) {
                open(btn.dataset.cert);
            }
        });

        // Close on X or overlay click
        closeBtn.addEventListener('click', close);
        overlay.addEventListener('click', close);

        // Close on Escape key
        document.addEventListener('keydown', function (e) {
            if (e.key === 'Escape' && lightbox.classList.contains('open')) {
                close();
            }
        });
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
        setupCurrentFilters();
        setupDragResize();
        setupSkillAnimations();
        setupLanguageToggle();

        // Certificate lightbox
        setupCertLightbox();

        // Render projects
        renderCurrentProjects();
        renderProjects('all');
        renderGithubProjects();

        // Initial scroll animation observation
        observeElements();

        // ASCII canvas background animation
        setupAsciiCanvas();
    }

    /* ==========================================
       ASCII CANVAS ANIMATION (Hero Background)
       ========================================== */
    function setupAsciiCanvas() {
        const canvas = document.getElementById('asciiCanvas');
        if (!canvas) return;

        const ctx = canvas.getContext('2d');
        let cols, rows, drops;
        const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789<>/{}[]|&^%$#@!';
        const fontSize = 10;

        function resize() {
            const hero = canvas.parentElement;
            canvas.width = hero.offsetWidth;
            canvas.height = hero.offsetHeight;
            cols = Math.floor(canvas.width / fontSize);
            rows = Math.floor(canvas.height / fontSize);
            drops = Array(cols).fill(0).map(() => Math.floor(Math.random() * -rows));
        }

        function draw() {
            ctx.fillStyle = 'rgba(10, 10, 10, 0.05)';
            ctx.fillRect(0, 0, canvas.width, canvas.height);

            ctx.font = fontSize + 'px monospace';
            ctx.fillStyle = '#8b5cf6';

            for (let i = 0; i < drops.length; i++) {
                const char = chars[Math.floor(Math.random() * chars.length)];
                const x = i * fontSize;
                const y = drops[i] * fontSize;
                ctx.fillText(char, x, y);

                if (y > canvas.height && Math.random() > 0.975) {
                    drops[i] = 0;
                }
                drops[i]++;
            }
        }

        resize();
        window.addEventListener('resize', resize);
        setInterval(draw, 50);
    }

    // Run when DOM is ready
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }

})();
