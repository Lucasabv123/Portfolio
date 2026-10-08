document.documentElement.classList.add("js");

const toggle = document.querySelector(".nav-toggle");
const nav = document.querySelector("#primary-nav");

function closeNavigation() {
  nav.classList.remove("is-open");
  toggle.setAttribute("aria-expanded", "false");
}

toggle.addEventListener("click", () => {
  const expanded = nav.classList.toggle("is-open");
  toggle.setAttribute("aria-expanded", String(expanded));
});
nav.addEventListener("click", (event) => {
  if (event.target.closest("a")) closeNavigation();
});
document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && nav.classList.contains("is-open")) {
    closeNavigation();
    toggle.focus();
  }
});
document.addEventListener("click", (event) => {
  if (!event.target.closest(".site-header")) closeNavigation();
});
window
  .matchMedia("(min-width: 761px)")
  .addEventListener("change", closeNavigation);

// Open a case study when reached through a project link or a shared URL.
function openLinkedCase() {
  const target = document.getElementById(location.hash.slice(1));
  if (target instanceof HTMLDetailsElement) target.open = true;
}
window.addEventListener("hashchange", openLinkedCase);
openLinkedCase();
document.getElementById("year").textContent = new Date().getFullYear();

document.querySelectorAll('a[href^="#case-"]').forEach((link) => {
  link.addEventListener("click", () => {
    const target = document.getElementById(link.hash.slice(1));
    if (target instanceof HTMLDetailsElement) target.open = true;
  });
});
