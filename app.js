/* ------- Particles Background ------- */
/* You can tweak values freely */
particlesJS("particles-js", {
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

/* ------- Data you can edit (JUST UPDATE THESE ARRAYS) ------- */
/* 1) Put your images under /images (e.g., images/me1.jpg, images/project1.jpg)
   2) Update these arrays with your real content/paths
   3) No other code changes needed.
*/

/* ------- Content (edit these arrays) ------- */
const projectsData = [
  {
    title: "Elevator Quotation & Invoice Builder",
    desc: "Production Streamlit app that generates Word proposals in minutes with a rules engine & image pipelines.",
    cover: "images/project-invoice.jpg",
    tags: ["Python", "Streamlit", "Pandas", "SQLAlchemy", "DocxTemplate", "Docker"],
    links: { live: "#", github: "#" }
  },
  {
    title: "Realtime Churn Alerts Pipeline",
    desc: "Kafka (Redpanda) → Python Consumer → Flask (XGBoost + SHAP) → Postgres notifications → Nylas Email.",
    cover: "images/hero-architecture.jpg",
    tags: ["Kafka/Redpanda", "Python", "Flask", "XGBoost", "SHAP", "Postgres", "Nylas"],
    links: { live: "#", github: "#" }
  },
  {
    title: "ProfeRank EC",
    desc: "Professor ratings web app with modern UI and SQLite/Prisma backend (WIP).",
    cover: "images/project-proferank.jpg",
    tags: ["Next.js", "TypeScript", "SQLite", "Tailwind"],
    links: { live: "#", github: "#" }
  }
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
        <div class="card-actions">
          <a href="${p.links.live || '#'}" target="_blank" rel="noopener">Live</a>
          <a href="${p.links.github || '#'}" target="_blank" rel="noopener">Code</a>
        </div>
      </div>
    </article>
  `).join("");
}

function renderGallery() {
  const grid = document.getElementById("galleryGrid");
  if (!grid) return;
  grid.innerHTML = galleryData.map(g => `
    <img class="gallery-img" src="\${g.src}" alt="\${g.alt}" loading="lazy" />
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
  toggle?.addEventListener("click", () => nav?.classList.toggle("is-open"));

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

/* ------- Init ------- */
addEventListener("DOMContentLoaded", () => {
  renderProjects();
  renderCases();
  renderHobbies();
  setYear();
  navBehavior();
});

