// Interacciones del CV. Sin dependencias.
(() => {
  'use strict';

  // ───────── Diccionario ES → EN (por fragmento de texto) ─────────
  // Para agregar contenido nuevo: añade aquí la frase en español tal como aparece en el HTML.
  const EN = {
    'David Alejandro Meyer Romero — Estudiante Tecnólogo ADSO en formación': 'David Alejandro Meyer Romero — Software Analysis & Development Technologist in training',
    'Disponible de inmediato': 'Available immediately',
    'Hoja de vida · 2026': 'Résumé · 2026',
    'Soporte Técnico & Mesa de Ayuda': 'Technical Support & Help Desk',
    'Tecnólogo ADSO en formación': 'ADSO Technologist in training',
    'Tecnólogo ADSO · SENA (en curso)': 'ADSO Technologist · SENA (in progress)',
    '10 credenciales IBM · Cisco': '10 IBM · Cisco credentials',
    'Experiencia BPO': 'BPO experience',
    'Sé explicar lo técnico en palabras simples,': 'I can explain technical topics in simple words,',
    'cuido la información como si fuera mía': 'I protect information as if it were my own',
    'y aprendo rápido:': 'and I learn fast:',
    '8 credenciales en un solo trimestre': '8 credentials in a single quarter',
    'mientras estudio en el SENA.': 'while studying at SENA.',
    'Bogotá D.C., Colombia': 'Bogotá D.C., Colombia',
    'Credly · insignias verificables': 'Credly · verifiable badges',
    'Formación': 'Education',
    'Tecnología en Análisis y Desarrollo de Software': 'Technologist in Software Analysis and Development',
    'Servicio Nacional de Aprendizaje — SENA': 'National Learning Service — SENA',
    'Sep 2025 – Dic 2027': 'Sep 2025 – Dec 2027',
    'En curso': 'In progress',
    'Etapa Lectiva': 'Classroom stage',
    'BACH': 'HS',
    'Bachiller Académico': 'High School Diploma (Academic)',
    'Institución Educativa Académico · Guadalajara de Buga, Valle del Cauca': 'Institución Educativa Académico · Guadalajara de Buga, Valle del Cauca',
    'Graduado': 'Graduated',
    'Habilidades técnicas': 'Technical skills',
    'Soporte y operación': 'Support & operations',
    'Atención a usuarios': 'User support',
    'Incidencias en plataformas web': 'Web platform incidents',
    'Gestión de accesos y contraseñas': 'Access & password management',
    'PQRS': 'Customer requests & complaints (PQRS)',
    'Desarrollo y datos': 'Development & data',
    'fundamentos': 'fundamentals',
    'básico': 'basic',
    'intermedio': 'intermediate',
    'Ciberseguridad (fundamentos)': 'Cybersecurity (fundamentals)',
    'Seguridad de redes y sistemas': 'Network & system security',
    'Seguridad en la nube': 'Cloud security',
    'Gestión de vulnerabilidades': 'Vulnerability management',
    'Respuesta a incidentes': 'Incident response',
    'GRC y privacidad de datos': 'GRC & data privacy',
    'Herramientas': 'Tools',
    'Ruta de aprendizaje': 'Learning path',
    'Ago 2026': 'Aug 2026',
    'Inicio del tecnólogo en Análisis y Desarrollo de Software': 'Started the Technologist degree in Software Analysis and Development',
    '+5 credenciales': '+5 credentials',
    'Cloud Security, Network Security, Vulnerability Management, GRC y AI Fundamentals': 'Cloud Security, Network Security, Vulnerability Management, GRC and AI Fundamentals',
    '+2 credenciales': '+2 credentials',
    'Incident Response y Security Operations': 'Incident Response and Security Operations',
    'Hoy': 'Today',
    'Listo para mi siguiente reto en soporte o seguridad': 'Ready for my next challenge in support or security',
    'Competencias': 'Core competencies',
    'Comunicación asertiva y paciencia para explicar procesos': 'Assertive communication and patience to explain processes',
    'Resolución práctica de problemas': 'Practical problem solving',
    'Atención al detalle': 'Attention to detail',
    'Adaptabilidad y trabajo en equipo': 'Adaptability and teamwork',
    'Orientación al servicio y a la calidad': 'Service and quality orientation',
    'Idiomas': 'Languages',
    'Español': 'Spanish',
    'Nativo': 'Native',
    'Inglés': 'English',
    'A2 · lectura técnica y soporte básico': 'A2 · technical reading and basic support',
    'Datos adicionales': 'Additional info',
    'Disponibilidad inmediata': 'Immediate availability',
    'Flexibilidad horaria': 'Flexible schedule',
    'Licencia de conducción vigente': 'Valid driver’s license',
    'Carro y moto': 'Car and motorcycle',
    'Perfil': 'Profile',
    'Estudiante de': 'Student of the',
    'Tecnología en Análisis y Desarrollo de Software en el SENA': 'Technologist program in Software Analysis and Development at SENA',
    ', con experiencia atendiendo usuarios de una plataforma transaccional de seguridad social en entorno BPO. Combino lo que aprendí en la primera línea de soporte —diagnosticar, explicar y resolver con paciencia— con': ', with experience supporting users of a social-security transactional platform in a BPO environment. I combine what I learned on the support front line —diagnosing, explaining and solving with patience— with',
    '10 credenciales en ciberseguridad, datos e IA': '10 credentials in cybersecurity, data and AI',
    'de IBM y Cisco. Busco un rol en': 'from IBM and Cisco. I am looking for a role in',
    'soporte técnico, mesa de ayuda u operaciones de seguridad': 'technical support, help desk or security operations',
    'donde pueda aportar desde el primer día y seguir creciendo.': 'where I can contribute from day one and keep growing.',
    'Llamadas de soporte atendidas al día en Nexa BPO': 'Support calls handled per day at Nexa BPO',
    'Credenciales verificables en Credly': 'Verifiable credentials on Credly',
    'En ciberseguridad (IBM · Cisco)': 'In cybersecurity (IBM · Cisco)',
    'Obtenidas entre julio y septiembre de 2026': 'Earned between July and September 2026',
    'Lo que aporto': 'What I bring',
    'Trato con usuarios reales': 'Experience with real users',
    'Atendía entre 40 y 50 llamadas diarias de empresas y personas en una plataforma de seguridad social. Sé escuchar, diagnosticar y explicar un proceso técnico sin tecnicismos.': 'I handled 40 to 50 daily calls from companies and individuals on a social-security platform. I know how to listen, diagnose and explain a technical process without jargon.',
    'Disciplina con la información': 'Discipline with information',
    'Verifiqué identidades y manejé datos confidenciales en cada caso: la misma disciplina que exige un equipo de ciberseguridad.': 'I verified identities and handled confidential data in every case: the same discipline a cybersecurity team requires.',
    'Aprendo rápido y por mi cuenta': 'Fast, self-directed learner',
    '8 credenciales en un solo trimestre, de forma autónoma y en paralelo con el tecnólogo del SENA.': '8 credentials in a single quarter, self-taught and alongside my SENA technologist degree.',
    'Base técnica en crecimiento': 'Growing technical foundation',
    'Python, SQL, Git/GitHub y fundamentos de redes, nube, gestión de vulnerabilidades y respuesta a incidentes.': 'Python, SQL, Git/GitHub and fundamentals of networks, cloud, vulnerability management and incident response.',
    'Experiencia': 'Experience',
    'Asesor de Servicio al Cliente y Soporte a Plataformas': 'Customer Service & Platform Support Advisor',
    '· Campaña Aportes en Línea · Bogotá': '· Aportes en Línea campaign · Bogotá',
    'Dic 2023 – Mar 2024': 'Dec 2023 – Mar 2024',
    'Soporte de primer nivel a un volumen de 40 a 50 llamadas diarias': 'First-level support for a volume of 40 to 50 calls per day',
    'de empresas y personas naturales: desbloqueo de accesos, restablecimiento de contraseñas y actualización de datos y correos.': 'from companies and individuals: unlocking accounts, resetting passwords and updating data and emails.',
    'Acompañamiento en la liquidación y generación de planillas PILA': 'Assistance with the calculation and generation of PILA forms',
    '(seguridad social) y en requerimientos de cesantías empresariales.': '(social security) and with employer severance-fund requests.',
    'Registro, control y seguimiento de PQRS': 'Logging, control and follow-up of PQRS',
    '(peticiones, quejas y consultas), con respuestas ágiles y claras para cada usuario.': '(requests, complaints and inquiries), with quick and clear answers for every user.',
    'Manejo de información confidencial': 'Handling of confidential information',
    'y aplicación estricta de protocolos de verificación de identidad.': 'and strict application of identity-verification protocols.',
    'Soporte N1': 'L1 support',
    'Gestión de accesos': 'Access management',
    'Cesantías': 'Severance funds',
    'Datos confidenciales': 'Confidential data',
    'Otra experiencia': 'Other experience',
    'Conductor y repartidor independiente': 'Independent driver & delivery courier',
    '· Plataformas digitales · Trabajo independiente': '· Digital platforms · Self-employed',
    'Servicio directo al cliente': 'Direct customer service',
    'en plataformas de domicilios y movilidad, con puntualidad y buen trato en cada servicio calificado por el usuario.': 'on delivery and ride platforms, with punctuality and courtesy in every service rated by the user.',
    'Organización autónoma': 'Self-managed organization',
    'de rutas, tiempos y jornadas de trabajo a través de aplicaciones móviles.': 'of routes, timing and work shifts through mobile apps.',
    'Proyectos destacados': 'Featured projects',
    'Repositorio Educativo/Laboral': 'Academic / Professional repository',
    'Proyecto de grado · SENA': 'Capstone project · SENA',
    'En desarrollo': 'In development',
    'Plataforma web de logística para': 'Logistics web platform for',
    ', una empresa ficticia, desarrollada como proyecto de grado del tecnólogo en Análisis y Desarrollo de Software. Código abierto bajo licencia MIT.': ', a fictional company, developed as the capstone project of the Software Analysis and Development technologist degree. Open source under the MIT license.',
    'Desarrollo web': 'Web development',
    'Logística': 'Logistics',
    'Licencia MIT': 'MIT license',
    'Ver repositorio': 'View repository',
    'Repositorio Autodidacta': 'Self-taught repository',
    'Laboratorio Full-Stack · Autodidacta': 'Full-Stack lab · Self-taught',
    'Laboratorio centralizado autodidacta y monorepo de desarrollo práctico autodidacta ADSO.': 'Centralized self-taught lab and monorepo for hands-on, self-directed ADSO development practice.',
    'Certificaciones y microcredenciales': 'Certifications & micro-credentials',
    'Todas verificables en línea': 'All verifiable online',
    '· IBM SkillsBuild y Cisco Networking Academy': '· IBM SkillsBuild and Cisco Networking Academy',
    'Ver en Credly': 'View on Credly',
    'Ciberseguridad': 'Cybersecurity',
    'Datos, IA y programación': 'Data, AI & programming',
    'Referencias laborales y personales disponibles a solicitud.': 'Professional and personal references available upon request.',
    'Actualizada · octubre 2026': 'Updated · October 2026',
    'Descargar PDF': 'Download PDF',
    '5 de 5': '5 of 5',
    '2 de 5': '2 of 5',
    'Hoja de vida de David Alejandro Meyer Romero: soporte técnico, mesa de ayuda y tecnólogo ADSO en formación. Bogotá, Colombia.': 'Résumé of David Alejandro Meyer Romero: technical support, help desk and Software Analysis & Development technologist in training. Bogotá, Colombia.'
  };

  const norm = (s) => s.replace(/\s+/g, ' ').trim();
  const store = new Map(); // nodo → texto original (ES)
  const attrs = [['meta[name="description"]', 'content'], ['.dots', 'aria-label']];

  function translate(lang) {
    const toEN = lang === 'en';
    const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT, {
      acceptNode: (n) => (n.parentElement.closest('script,style,svg,.fab') ? NodeFilter.FILTER_REJECT : NodeFilter.FILTER_ACCEPT)
    });
    for (let n = walker.nextNode(); n; n = walker.nextNode()) {
      if (!store.has(n)) store.set(n, n.nodeValue);
      const orig = store.get(n);
      const key = norm(orig);
      if (!key) continue;
      n.nodeValue = toEN && EN[key] ? orig.replace(orig.trim(), EN[key]) : orig;
    }
    attrs.forEach(([sel, attr]) => document.querySelectorAll(sel).forEach((el) => {
      if (!el.dataset['es' + attr]) el.dataset['es' + attr] = el.getAttribute(attr) || '';
      const es = el.dataset['es' + attr];
      el.setAttribute(attr, toEN && EN[es] ? EN[es] : es);
    }));
    // <title> (está en <head>, fuera del walker)
    if (!document.documentElement.dataset.esTitle) document.documentElement.dataset.esTitle = document.title;
    const esTitle = document.documentElement.dataset.esTitle;
    document.title = toEN && EN[esTitle] ? EN[esTitle] : esTitle;

    document.documentElement.lang = lang;
    document.querySelectorAll('#lang-btn b').forEach((b) => b.classList.toggle('on', b.dataset.l === lang));
    const btn = document.getElementById('lang-btn');
    if (btn) btn.setAttribute('aria-label', toEN ? 'Switch to Spanish' : 'Cambiar a inglés');
  }

  let current = 'es';
  try { current = localStorage.getItem('cv-lang') || 'es'; } catch (e) { /* sin almacenamiento */ }
  if (current !== 'es') translate(current);

  const langBtn = document.getElementById('lang-btn');
  if (langBtn) langBtn.addEventListener('click', () => {
    current = current === 'es' ? 'en' : 'es';
    translate(current);
    try { localStorage.setItem('cv-lang', current); } catch (e) { /* ignorar */ }
  });

  // Descargar PDF: abre el diálogo de impresión (el CSS @media print ya prepara la hoja)
  const printBtn = document.getElementById('print-btn');
  if (printBtn) printBtn.addEventListener('click', () => window.print());

  // Enlaces externos: abrir siempre con rel seguro
  document.querySelectorAll('a[target="_blank"]').forEach((a) => {
    a.rel = 'noopener noreferrer';
  });
})();
