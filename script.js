/* ═══════════════════════════════════════════════════════════════
   ELEVA — script.js
   • Bilingual (PT / EN)
   • Navbar scroll effect
   • Mobile menu
   • Animated counters
   • Scroll fade-in
   ═══════════════════════════════════════════════════════════════ */

'use strict';

/* ── Translations ─────────────────────────────────────────────── */
const T = {
  pt: {
    /* nav */
    nav_framework : 'Framework',
    nav_services  : 'Serviços',
    nav_about     : 'Sobre',
    nav_contact   : 'Contato',
    nav_cta       : 'Fale Conosco',

    /* hero */
    hero_eyebrow      : 'Framework Proprietário · O&G Brasil',
    hero_title_line1  : 'Elevando a Maturidade',
    hero_title_line2  : 'de Gestão das PMEs',
    hero_sub          : 'Governança corporativa e gestão estruturada para empresas de construção e montagem em óleo e gás — da informalidade à excelência operacional.',
    hero_cta1         : 'Conheça o Framework',
    hero_cta2         : 'Fale com um Especialista',

    /* band */
    band_about_title  : 'Sobre a Eleva',
    band_about_text   : 'A Eleva é uma consultoria especializada em governança corporativa e gestão para PMEs de construção e montagem em O&G. Estruturamos empresas que operam bem no improviso para crescer por design — com processos, indicadores e governança que sustentam o próximo nível.',
    band_exp_title    : 'Nossa Expertise',
    exp1_title        : 'Diagnóstico de Maturidade',
    exp1_text         : '11 dimensões com profundidade setorial.',
    exp2_title        : 'Redesenho Organizacional',
    exp2_text         : 'Estrutura, processos e políticas alinhados.',
    exp3_title        : 'KPIs e Dashboards',
    exp3_text         : 'Gestão por indicadores com cadência real.',
    exp4_title        : 'Implantação e Mudança',
    exp4_text         : 'Quatro ondas até a autonomia total.',
    band_cases_title  : 'Casos Recentes',
    case1             : 'Manutenção Brownfield — Sudeste',
    case2             : 'Montagem Eletromecânica — Nordeste',

    /* phases */
    phases_eyebrow : 'Metodologia Proprietária',
    phases_title   : 'O Framework ELEVA',
    phases_sub     : 'Seis fases encadeadas — do diagnóstico à operação autônoma. Cada fase só faz sentido sobre a base construída pela anterior. Uma consultoria que entrega diagnóstico e vai embora não produz resultado — produz relatório.',
    phase1_tag     : 'Fundação',
    phase1_title   : 'Diagnóstico',
    phase1_text    : 'Avaliação de maturidade em 11 dimensões: governança, projetos, financeiro, HSE, compliance e mais. Sem diagnóstico honesto, qualquer redesenho é chute calibrado como certeza.',
    phase2_tag     : 'Direção',
    phase2_title   : 'Estratégia',
    phase2_text    : 'Definir onde a empresa quer chegar e, principalmente, em qual jogo ela tem condição real de vencer. Lógica de jogo antes de redesenho organizacional — sempre.',
    phase3_tag     : 'Design',
    phase3_title   : 'Estrutura',
    phase3_text    : 'Organograma, papéis, macroprocessos, matrizes RACI e políticas críticas. O blueprint da empresa que se quer ser — não da empresa que se é hoje.',
    phase4_tag     : 'Gestão',
    phase4_title   : 'Indicadores',
    phase4_text    : 'KPIs, dashboards e cadência de decisão. Sem indicadores rodando em reuniões reais, o blueprint da Fase 3 vira papel numa gaveta em seis meses.',
    phase5_tag     : 'Execução',
    phase5_title   : 'Implantação',
    phase5_text    : 'Quatro ondas progressivas com quick wins nos primeiros 90 dias, gestão ativa de resistência e transferência gradual de autonomia para a equipe interna.',
    phase6_tag     : 'Autonomia',
    phase6_title   : 'Sustentação',
    phase6_text    : 'Acompanhamento até o sistema de gestão rodar de forma autônoma. O trabalho só está concluído quando a empresa não precisa mais da consultoria para funcionar bem.',

    /* overview */
    overview_eyebrow    : 'Resultados Concretos',
    overview_title      : 'Construído para o setor.<br>Não adaptado para ele.',
    overview_text       : 'Cada ferramenta, KPI, fluxo e política do Framework ELEVA foi calibrada para a realidade de empresas de construção e montagem em O&G. Requisitos de CRCC, NR-33, NR-35, NR-10, Lei Anticorrupção 12.846/2013 e a dinâmica de contratos EPC vs. medição no Brasil são realidade operacional — não notas de rodapé.',
    stat1               : 'Dimensões avaliadas',
    stat2               : 'Fases do framework',
    stat3               : 'Dias de implantação',
    stat4               : 'Macroprocessos',
    overview_badge_text : 'Framework ELEVA v6.0',

    /* differentiators */
    diff_eyebrow  : 'Diferenciais',
    diff_title    : 'Por que o Framework ELEVA<br>é diferente',
    diff1_title   : 'Construído para o setor',
    diff1_text    : 'Cada ferramenta foi calibrada para EPC, manutenção e serviços em O&G. Não é governança genérica adaptada — é metodologia construída para Petrobras, EPCistas Tier-1 e industriais de grande porte.',
    diff2_title   : 'Lógica de jogo primeiro',
    diff2_text    : 'A maioria das consultorias começa pelo organograma. O ELEVA começa pela pergunta: "em qual jogo esta empresa tem condição real de vencer?" — e só depois desenha a estrutura que sustenta essa escolha.',
    diff3_title   : 'Implantação no produto',
    diff3_text    : 'A implantação é parte estrutural do framework — não uma fase opcional. O trabalho não está concluído até que as rotinas rodem e a equipe opere com autonomia.',
    diff4_title   : 'Especificidade brasileira',
    diff4_text    : 'CRCC Petrobras, NR-33, NR-35, NR-10, Lei 12.846/2013, ANP e a dinâmica de contratos por medição vs. EPC lump sum são tratados como realidade operacional — não como notas de rodapé.',

    /* contact */
    contact_eyebrow : 'Próximo Passo',
    contact_title   : 'Pronto para elevar<br>sua empresa?',
    contact_sub     : 'O trabalho só está concluído quando o sistema de gestão roda de forma autônoma e os indicadores provam que a maturidade subiu de forma mensurável e sustentável. Comece pela conversa.',
    contact_btn     : 'Enviar Mensagem',
    contact_note    : 'Respondemos em até 48 horas úteis.',

    /* footer */
    footer_tagline : 'Governança e gestão para PMEs de O&G.',
    footer_rights  : 'Todos os direitos reservados.',
  },

  en: {
    /* nav */
    nav_framework : 'Framework',
    nav_services  : 'Services',
    nav_about     : 'About',
    nav_contact   : 'Contact',
    nav_cta       : 'Get in Touch',

    /* hero */
    hero_eyebrow      : 'Proprietary Framework · O&G Brazil',
    hero_title_line1  : 'Elevating Management',
    hero_title_line2  : 'Maturity for SMEs',
    hero_sub          : 'Corporate governance and structured management for construction and assembly companies in oil & gas — from informality to operational excellence.',
    hero_cta1         : 'Discover the Framework',
    hero_cta2         : 'Talk to an Expert',

    /* band */
    band_about_title  : 'About Eleva',
    band_about_text   : 'Eleva is a consultancy specializing in corporate governance and management for construction and assembly SMEs in O&G. We transform companies that operate well on improvisation into organizations that grow by design — with processes, metrics, and governance that support the next level.',
    band_exp_title    : 'Our Expertise',
    exp1_title        : 'Maturity Diagnosis',
    exp1_text         : '11 dimensions with sector-specific depth.',
    exp2_title        : 'Organizational Redesign',
    exp2_text         : 'Structure, processes and policies aligned.',
    exp3_title        : 'KPIs & Dashboards',
    exp3_text         : 'Indicator-driven management with real cadence.',
    exp4_title        : 'Implementation & Change',
    exp4_text         : 'Four progressive waves to full autonomy.',
    band_cases_title  : 'Recent Cases',
    case1             : 'Brownfield Maintenance — Southeast Brazil',
    case2             : 'Electromechanical Assembly — Northeast Brazil',

    /* phases */
    phases_eyebrow : 'Proprietary Methodology',
    phases_title   : 'The ELEVA Framework',
    phases_sub     : 'Six linked phases — from diagnosis to autonomous operation. Each phase only makes sense built on the foundation laid by the previous one. A consultancy that delivers a diagnosis and leaves does not produce results — it produces reports.',
    phase1_tag     : 'Foundation',
    phase1_title   : 'Diagnosis',
    phase1_text    : 'Maturity assessment across 11 dimensions: governance, projects, finance, HSE, compliance, and more. Without an honest diagnosis, any redesign is a calibrated guess.',
    phase2_tag     : 'Direction',
    phase2_title   : 'Strategy',
    phase2_text    : 'Define where the company wants to go and, more importantly, which game it has a real chance of winning. Game logic before organizational redesign — always.',
    phase3_tag     : 'Design',
    phase3_title   : 'Structure',
    phase3_text    : 'Org chart, roles, macro-processes, RACI matrices, and critical policies. The blueprint for the company you want to be — not the company you are today.',
    phase4_tag     : 'Management',
    phase4_title   : 'Indicators',
    phase4_text    : 'KPIs, dashboards, and decision cadence. Without indicators running in real meetings, the Phase 3 blueprint becomes paper in a drawer within six months.',
    phase5_tag     : 'Execution',
    phase5_title   : 'Implementation',
    phase5_text    : 'Four progressive waves with quick wins in the first 90 days, active resistance management, and gradual transfer of autonomy to the internal team.',
    phase6_tag     : 'Autonomy',
    phase6_title   : 'Sustainment',
    phase6_text    : 'Ongoing support until the management system runs autonomously. The work is only complete when the company no longer needs the consultancy to function well.',

    /* overview */
    overview_eyebrow    : 'Concrete Results',
    overview_title      : 'Built for the sector.<br>Not adapted for it.',
    overview_text       : 'Every tool, KPI, workflow, and policy in the ELEVA Framework was calibrated for the reality of construction and assembly companies in O&G. CRCC requirements, NR-33, NR-35, NR-10, Anti-Corruption Law 12.846/2013, and the dynamics of EPC vs. unit-price contracts in Brazil are treated as operational reality — not footnotes.',
    stat1               : 'Assessed dimensions',
    stat2               : 'Framework phases',
    stat3               : 'Implementation days',
    stat4               : 'Macro-processes',
    overview_badge_text : 'ELEVA Framework v6.0',

    /* differentiators */
    diff_eyebrow  : 'Differentiators',
    diff_title    : 'Why the ELEVA Framework<br>is different',
    diff1_title   : 'Built for the sector',
    diff1_text    : 'Every tool was calibrated for EPC, maintenance, and services in O&G. This is not generic governance adapted to the sector — it is a methodology built for Petrobras, Tier-1 EPCists, and large industrials.',
    diff2_title   : 'Game logic first',
    diff2_text    : 'Most consultancies start with the org chart. ELEVA starts with the question: "which game does this company have a real chance of winning?" — and only then designs the structure that supports that choice.',
    diff3_title   : 'Implementation in the product',
    diff3_text    : 'Implementation is a structural part of the framework — not an optional phase clients buy later. The work is not done until routines are running and the team operates autonomously.',
    diff4_title   : 'Brazilian specificity',
    diff4_text    : 'Petrobras CRCC, NR-33, NR-35, NR-10, Law 12.846/2013, ANP, and the dynamics of unit-price vs. EPC lump sum contracts in Brazil are treated as operational reality — not as footnotes.',

    /* contact */
    contact_eyebrow : 'Next Step',
    contact_title   : 'Ready to elevate<br>your company?',
    contact_sub     : 'The work is only complete when the management system runs autonomously and indicators prove that maturity has risen measurably and sustainably. Start with a conversation.',
    contact_btn     : 'Send Message',
    contact_note    : 'We respond within 48 business hours.',

    /* footer */
    footer_tagline : 'Governance and management for O&G SMEs.',
    footer_rights  : 'All rights reserved.',
  }
};

/* ── State ────────────────────────────────────────────────────── */
let currentLang = 'pt';

/* ── Apply language ───────────────────────────────────────────── */
function setLang(lang) {
  if (lang === currentLang) return;
  currentLang = lang;

  /* Toggle active button */
  document.getElementById('btn-pt').classList.toggle('active', lang === 'pt');
  document.getElementById('btn-en').classList.toggle('active', lang === 'en');

  /* Update all data-i18n elements */
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.dataset.i18n;
    if (T[lang][key] !== undefined) {
      el.innerHTML = T[lang][key];
    }
  });

  /* Update input/textarea placeholders */
  document.querySelectorAll('.form-input[data-' + lang + ']').forEach(el => {
    el.placeholder = el.dataset[lang];
  });

  /* Update html lang attribute */
  document.documentElement.lang = lang === 'pt' ? 'pt-BR' : 'en';
}

/* ── Navbar scroll ────────────────────────────────────────────── */
const navbar = document.getElementById('navbar');

window.addEventListener('scroll', () => {
  navbar.classList.toggle('scrolled', window.scrollY > 40);
}, { passive: true });

/* ── Mobile hamburger ─────────────────────────────────────────── */
const hamburger = document.getElementById('hamburger');
const navLinks  = document.getElementById('navLinks');

hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('open');
  navLinks.classList.toggle('open');
});

/* Close menu on link click */
navLinks.querySelectorAll('a').forEach(a => {
  a.addEventListener('click', () => {
    hamburger.classList.remove('open');
    navLinks.classList.remove('open');
  });
});

/* ── Animated counters ────────────────────────────────────────── */
function animateCount(el) {
  const target = +el.dataset.count;
  const duration = 1400;
  const step = 16;
  const increment = target / (duration / step);
  let current = 0;

  const timer = setInterval(() => {
    current += increment;
    if (current >= target) {
      el.textContent = target;
      clearInterval(timer);
    } else {
      el.textContent = Math.floor(current);
    }
  }, step);
}

/* ── Intersection Observer ────────────────────────────────────── */
const observerOptions = { threshold: 0.15 };

/* Fade-up cards */
const fadeObserver = new IntersectionObserver((entries) => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      e.target.classList.add('visible');
      fadeObserver.unobserve(e.target);
    }
  });
}, observerOptions);

document.querySelectorAll('.phase-card, .diff-card, .band-card, .stat').forEach(el => {
  el.classList.add('fade-up');
  fadeObserver.observe(el);
});

/* Counter trigger */
const counterObserver = new IntersectionObserver((entries) => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      e.target.querySelectorAll('.stat-num[data-count]').forEach(animateCount);
      counterObserver.unobserve(e.target);
    }
  });
}, { threshold: 0.3 });

const statsRow = document.querySelector('.stats-row');
if (statsRow) counterObserver.observe(statsRow);

/* ── Smooth scroll for anchor links ──────────────────────────── */
document.querySelectorAll('a[href^="#"]').forEach(a => {
  a.addEventListener('click', e => {
    const target = document.querySelector(a.getAttribute('href'));
    if (!target) return;
    e.preventDefault();
    const offset = navbar.offsetHeight + 8;
    const top    = target.getBoundingClientRect().top + window.scrollY - offset;
    window.scrollTo({ top, behavior: 'smooth' });
  });
});

/* ── Contact form (prevent default, show feedback) ───────────── */
document.getElementById('contactForm').addEventListener('submit', e => {
  e.preventDefault();
  const btn = e.target.querySelector('.btn-submit');
  const msg = { pt: 'Mensagem enviada! Entraremos em contato em breve.', en: 'Message sent! We\'ll be in touch soon.' };
  btn.textContent = msg[currentLang];
  btn.disabled = true;
  btn.style.opacity = '.7';
  setTimeout(() => {
    btn.textContent = T[currentLang].contact_btn;
    btn.disabled = false;
    btn.style.opacity = '1';
    e.target.reset();
  }, 4000);
});

/* ── Active nav link highlight on scroll ─────────────────────── */
const sections  = ['home','services','framework','about','contact'];
const navAnchors = document.querySelectorAll('.nav-links a');

const sectionObserver = new IntersectionObserver((entries) => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      navAnchors.forEach(a => a.style.color = '');
      const active = document.querySelector(`.nav-links a[href="#${e.target.id}"]`);
      if (active) active.style.color = '#4B8EF5';
    }
  });
}, { threshold: 0.4 });

sections.forEach(id => {
  const el = document.getElementById(id);
  if (el) sectionObserver.observe(el);
});

/* ── Init ─────────────────────────────────────────────────────── */
/* Set initial placeholder text for form */
document.querySelectorAll('.form-input[data-pt]').forEach(el => {
  el.placeholder = el.dataset.pt;
});
