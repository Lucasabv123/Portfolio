/* ------- Particles Background ------- */
/* Guard for CDN + reduced motion */
function initParticles() {
  const prefersReduced = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (prefersReduced) return;
  if (!window.particlesJS) return;
  window.particlesJS("particles-js", {
    particles: {
      number: { value: 80, density: { enable: true, value_area: 800 } },
      color: { value: "#ffffff" },
      shape: { type: "circle", stroke: { width: 0, color: "#000000" } },
      opacity: { value: 0.5 },
      size: { value: 3, random: true },
      line_linked: { enable: true, distance: 150, color: "#ffffff", opacity: 0.4, width: 1 },
      move: { enable: true, speed: 3, out_mode: "out" }
    },
    interactivity: {
      detect_on: "canvas",
      events: { onhover: { enable: true, mode: "repulse" }, onclick: { enable: true, mode: "push" }, resize: true },
      modes: { repulse: { distance: 200, duration: 0.4 }, push: { particles_nb: 4 } }
    },
    retina_detect: true
  });
}

/* ------- Data you can edit (JUST UPDATE THESE ARRAYS) ------- */
/* 1) Put your images under /images (e.g., images/me1.jpg, images/project1.jpg)
   2) Update these arrays with your real content/paths
   3) No other code changes needed.
*/

/* ------- Content (edit these arrays) ------- */
const projectsData = [
  {
    title: "Perfumagic — Operations Platform",
    desc: "Internal platform bringing sales, field service, collections, and management together. Four modules designed for about 35 staff, with mobile visit reports, commercial PDFs, payment controls, and audit histories.",
    cover: "images/project-perfumagic.svg",
    tags: ["Next.js", "TypeScript", "Supabase", "PostgreSQL"],
    links: {},
    note: "Internal company application · Private source"
  },
  {
    title: "Elevator Quotation & Invoice Builder",
    desc: "Production Streamlit app that generates Word proposals in minutes with a rules engine & image pipelines.",
    cover: "images/project-invoice.jpg",
    tags: ["Python", "Streamlit", "Pandas", "SQLAlchemy", "DocxTemplate", "Docker"],
    links: { github: "https://github.com/Lucasabv123/elevators" }
  },
  {
    title: "Realtime Churn Alerts Pipeline",
    desc: "Kafka (Redpanda) → Python Consumer → Flask (XGBoost + SHAP) → Postgres notifications → Nylas Email.",
    cover: "images/hero-architecture.jpg",
    tags: ["Kafka/Redpanda", "Python", "Flask", "XGBoost", "SHAP", "Postgres", "Nylas"],
    links: { github: "https://github.com/Lucasabv123/Churn_Risk" }
  },
  {
    title: "ProfeRank EC",
    desc: "Professor and course discovery for students in Ecuador, with school rankings, Google sign-in, review moderation, English/Spanish interfaces, and cached review translations.",
    cover: "images/project-proferank.jpg",
    tags: ["Next.js", "TypeScript", "Prisma", "PostgreSQL", "FastAPI"],
    links: { github: "https://github.com/Lucasabv123/proferankec" }
  }
];

const otherProjectsData = [
  {
    title: "CR Decksmith",
    desc: "Express + TypeScript API that learns your Clash Royale playstyle and suggests decks via a lightweight model.",
    tags: ["Express","TypeScript","ML-lite"],
    links: { github: "https://github.com/Lucasabv123/clash-royale" }
  },
  {
    title: "AI Code Helper",
    desc: "CLI that explains common compiler/runtime errors and suggests fixes; vector search over docs.",
    tags: ["Python","Embeddings","CLI"],
    links: {}
  },
  {
    title: "BST & Matrix Exp (C)",
    desc: "Data structures + matrix exponentiation exercises with unit tests and benchmarks.",
    tags: ["C","DSA","Testing"],
    links: {}
  }
  // Add more items as you like
];

const caseStudiesData = [
  {
    title: "Perfumagic Operations Platform",
    meta: "Perfumagic / Aromalab • Full Stack Developer Intern • July 2026–Present",
    problem: "Bring spreadsheet-based business workflows into one application while preserving the rules staff rely on.",
    bullets: [
      "Built four connected modules for sales, field service, collections, and management",
      "Implemented PostgreSQL row-level security, role-based permissions, and audit histories",
      "Added live duplicate-payment warnings with linked receipts while preserving entered form data",
      "Combined mobile equipment readings and photo evidence with PDF generation for quotations, contracts, and service orders",
      "Created an Apps Script compatibility runner and regression tests to preserve legacy business rules"
    ]
  },
  {
    title: "ProfeRank EC — Discovery & Reviews",
    meta: "Education • Ecuador",
    problem: "Help students find professors and courses with useful, manageable student feedback.",
    bullets: [
      "Connected professors, courses, and schools through a Prisma/PostgreSQL data model",
      "Added school rankings that require at least three visible reviews",
      "Implemented student submissions, review reporting, and administrator moderation",
      "Built English/Spanish interfaces and a FastAPI translation service with translations cached by language"
    ]
  },
  {
    title: "Churn Prediction + Alerts",
    meta: "CRM analytics • July 2025",
    problem: "Detect churn risk early and notify CSMs with explainability.",
    bullets: [
      "Built Redpanda → Flask scoring API with XGBoost",
      "Used SHAP to surface top drivers",
      "Exposed model predictions through a Flask API and containerized services with Docker Compose"
    ]
  },
  {
    title: "Proposal Automation",
    meta: "KMON Ascensores • May–August 2025",
    problem: "Generate ready-to-send proposals with pricing and images.",
    bullets: [
      "Rule engine + templates via DocxTemplate",
      "Asset pipelines + watermarking",
      "Reduced proposal preparation from 90 to 10 minutes"
    ]
  }
];

const hobbiesData = [
  { icon: "fa-solid fa-camera", title: "Photography", blurb: "Street and portraits on weekends." },
  { icon: "fa-solid fa-dumbbell", title: "Fitness", blurb: "Strength training 4x/week." },
  { icon: "fa-solid fa-chess-knight", title: "Chess", blurb: "Rapid games and tactics drills." }
];

const galleryData = [
  { src: "images/me1.jpg", alt: "Lucas headshot" },
  { src: "images/me2.jpg", alt: "Lucas working" },
  { src: "images/shap-drivers.svg", alt: "SHAP bar chart: top drivers for churn" },
  { src: "images/hero-architecture.svg", alt: "Realtime churn architecture diagram" }
];

/* (If you still have my earlier tiny bug, make sure your renderGallery looks like this:) */
function renderGallery() {
  const grid = document.getElementById("galleryGrid");
  if (!grid) return;
  grid.innerHTML = galleryData.map(g => `
    <img class="gallery-img" src="${g.src}" alt="${g.alt}" loading="lazy" />
  `).join("");
}


/* ------- Renderers ------- */
function renderProjectLinks(project) {
  const links = [
    project.links.live && `<a href="${project.links.live}" target="_blank" rel="noreferrer noopener">Live</a>`,
    project.links.github && `<a href="${project.links.github}" target="_blank" rel="noreferrer noopener">Code</a>`
  ].filter(Boolean);
  return links.length ? `<div class="card-actions">${links.join("")}</div>` : "";
}

function renderProjects() {
  const grid = document.getElementById("projectsGrid");
  if (!grid) return;
  grid.innerHTML = projectsData.map(p => `
    <article class="project-card">
      <img class="project-cover" src="${p.cover}" alt="${p.title} cover" loading="lazy" />
      <div class="project-body">
        <h3 class="project-title">${p.title}</h3>
        <p class="project-desc">${p.desc}</p>
        <div class="tags">
          ${p.tags.map(t => `<span class="tag">${t}</span>`).join("")}
        </div>
        ${renderProjectLinks(p)}
        ${p.note ? `<p class="project-desc project-note">${p.note}</p>` : ''}
      </div>
    </article>
  `).join("");
}

function renderCases() {
  const grid = document.getElementById("caseGrid");
  if (!grid) return;
  grid.innerHTML = caseStudiesData.map(c => `
    <article class="case-card">
      <header class="case-head">
        <h3 class="project-title">${c.title}</h3>
        <p class="meta">${c.meta}</p>
      </header>
      <p class="case-problem"><strong>Problem:</strong> ${c.problem}</p>
      <details>
        <summary>What I did</summary>
        <ul class="case-list">
          ${c.bullets.map(b => `<li>${b}</li>`).join("")}
        </ul>
      </details>
    </article>
  `).join("");
}

function renderHobbies() {
  const grid = document.getElementById("hobbiesGrid");
  if (!grid) return;
  grid.innerHTML = hobbiesData.map(h => `
    <article class="hobby-card">
      <div class="hobby-icon"><i class="${h.icon}" aria-hidden="true"></i></div>
      <h3 class="hobby-title">${h.title}</h3>
      <p class="hobby-blurb">${h.blurb}</p>
    </article>
  `).join("");
}


/* ------- UI Bits ------- */
function setYear() {
  const y = document.getElementById("year");
  if (y) y.textContent = new Date().getFullYear();
}

function navBehavior() {
  const toggle = document.querySelector(".nav-toggle");
  const nav = document.querySelector(".site-nav");
  if (toggle && nav) {
    // a11y wiring
    toggle.setAttribute("aria-expanded", "false");
    const navId = nav.getAttribute("id") || "primary-nav";
    nav.setAttribute("id", navId);
    toggle.setAttribute("aria-controls", navId);

    const closeNav = () => {
      nav.classList.remove("is-open");
      toggle.setAttribute("aria-expanded", "false");
    };
    nav.addEventListener("click", event => {
      if (event.target.closest("a")) closeNav();
    });
    document.addEventListener("keydown", event => {
      if (event.key === "Escape" && nav.classList.contains("is-open")) {
        closeNav();
        toggle.focus();
      }
    });
    window.matchMedia("(min-width: 981px)").addEventListener("change", closeNav);
    toggle.addEventListener("click", () => {
      const isOpen = nav.classList.toggle("is-open");
      toggle.setAttribute("aria-expanded", String(isOpen));
    });
  }

  // Active link on scroll
  const links = [...document.querySelectorAll(".site-nav a")];
  const ids = links.map(a => a.getAttribute("href")).filter(Boolean).map(h => h.replace("#",""));
  const sections = ids.map(id => document.getElementById(id)).filter(Boolean);

  const onScroll = () => {
    const scrollPos = window.scrollY + 120;
    let activeId = null;
    for (const sec of sections) {
      if (sec.offsetTop <= scrollPos) activeId = sec.id;
    }
    links.forEach(a => a.classList.toggle("is-active", a.getAttribute("href") === "#" + activeId));
  };
  document.addEventListener("scroll", onScroll, { passive: true });
  onScroll();
}


function renderOtherProjects() {
  const grid = document.getElementById("otherGrid");
  if (!grid) return;
  grid.innerHTML = otherProjectsData.map(p => `
    <article class="op-card">
      <h3 class="op-title">${p.title}</h3>
      <p class="op-desc">${p.desc}</p>
      <div class="tags">${p.tags.map(t => `<span class="tag">${t}</span>`).join("")}</div>
      ${renderProjectLinks(p)}
    </article>
  `).join("");
}


/* ------- Init ------- */
addEventListener("DOMContentLoaded", () => {
  initParticles();
  renderProjects();
  renderCases();
  renderHobbies();
  renderOtherProjects();
  setYear();
  navBehavior();
});
