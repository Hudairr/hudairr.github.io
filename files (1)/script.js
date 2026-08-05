/* ==========================================================
   Renders SITE (from content.js) into the page, then wires up
   the palette-rail scroll indicator + reveal-on-scroll.
   ========================================================== */
(function () {
  const $ = (sel, ctx = document) => ctx.querySelector(sel);
  const $$ = (sel, ctx = document) => Array.from(ctx.querySelectorAll(sel));

  function renderHero() {
    $("#hero-eyebrow").textContent = SITE.role;
    $("#hero-heading").innerHTML =
      `${SITE.name.split(" ")[0]} <em>${SITE.name.split(" ").slice(1).join(" ")}</em>`;
    $("#hero-tagline").textContent = SITE.tagline;
    $("#hero-location").textContent = SITE.location;
    $("#hero-availability").textContent = SITE.availability;
    $("#nav-mark").textContent = SITE.name;
    $("#footer-name").textContent = `© ${SITE.name}`;
    $("#footer-year").textContent = new Date().getFullYear();
  }

  function renderAbout() {
    $("#about-text").textContent = SITE.about;
    const wrap = $("#creds-list");
    wrap.innerHTML = SITE.credentials.map(c => `
      <div class="creds__row">
        <span class="creds__label">${c.label}</span>
        <span class="creds__detail">${c.detail || ""}</span>
      </div>
    `).join("");
  }

  function renderDesign() {
    const grid = $("#design-grid");
    grid.innerHTML = SITE.design.map(p => {
      const isPhoto = /\.(jpe?g)$/i.test(p.image || "");
      return `
      <article class="card reveal">
        <div class="card__media${isPhoto ? " is-photo" : ""}">
          <img src="${p.image}" alt="${p.imageAlt || p.title}" loading="lazy" decoding="async">
        </div>
        <div class="card__body">
          <span class="card__tag">${p.tag}</span>
          <h3 class="card__title">${p.title}</h3>
          <p class="card__desc">${p.description}</p>
        </div>
      </article>`;
    }).join("");
  }

  function renderData() {
    $("#stat-row").innerHTML = SITE.stats.map(s => `
      <div class="stat">
        <div class="stat__value">${s.value}</div>
        <div class="stat__label">${s.label}</div>
      </div>
    `).join("");

    $("#work-list").innerHTML = SITE.dataWork.map(w => `
      <div class="work-item">
        <div>
          <div class="work-item__title">${w.title}</div>
          <span class="work-item__tag">${w.tag}</span>
        </div>
        <p class="work-item__desc">${w.description}</p>
      </div>
    `).join("");
  }

  function renderCommunity() {
    $("#community-list").innerHTML = SITE.community.map(c => `
      <div class="community-card">
        <span class="community-card__tag">${c.tag}</span>
        <h3 class="community-card__title">${c.title}</h3>
        <p class="community-card__desc">${c.description}</p>
      </div>
    `).join("");
  }

  function renderContact() {
    const c = SITE.contact;
    const links = [
      c.linkedin ? { label: "LinkedIn", href: c.linkedin } : null,
      c.email ? { label: c.email.replace("mailto:", ""), href: `mailto:${c.email}` } : null,
      c.telegram ? { label: "Telegram", href: c.telegram } : null,
      c.instagram ? { label: "Instagram", href: c.instagram } : null,
      c.tiktok ? { label: "TikTok", href: c.tiktok } : null,
    ].filter(Boolean);

    $("#contact-links").innerHTML = links.map(l =>
      `<a href="${l.href}" target="_blank" rel="noopener">${l.label} →</a>`
    ).join("");
  }

  function renderAll() {
    renderHero();
    renderAbout();
    renderDesign();
    renderData();
    renderCommunity();
    renderContact();
  }

  // ---- Palette rail: jump-links + active-section tracking ----
  function wireRail() {
    const segs = $$(".rail__seg");
    segs.forEach(seg => {
      seg.addEventListener("click", () => {
        const target = document.getElementById(seg.dataset.target);
        if (target) target.scrollIntoView({ behavior: "smooth" });
      });
    });

    const sectionIds = ["hero", "design", "data", "community", "contact"];
    const sections = sectionIds.map(id => document.getElementById(id)).filter(Boolean);

    const io = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const id = entry.target.id;
          segs.forEach(s => s.classList.toggle("is-active", s.dataset.target === id));
        }
      });
    }, { threshold: 0, rootMargin: "-45% 0px -45% 0px" });

    sections.forEach(s => io.observe(s));
  }

  // ---- Reveal-on-scroll ----
  function wireReveal() {
    const items = $$(".reveal");
    const io = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-in");
          io.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12 });
    items.forEach(item => io.observe(item));
  }

  document.addEventListener("DOMContentLoaded", () => {
    renderAll();
    wireRail();
    wireReveal();
    // mark hero active immediately on load
    $(".rail__seg[data-target='hero']").classList.add("is-active");
  });
})();
