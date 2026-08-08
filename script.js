/* ==========================================================
   Renders SITE (from content.js) into the page, then wires up
   the palette-rail scroll indicator, service tabs, and
   reveal-on-scroll.
   ========================================================== */
(function () {
  const $ = (sel, ctx = document) => ctx.querySelector(sel);
  const $$ = (sel, ctx = document) => Array.from(ctx.querySelectorAll(sel));

  function renderHero() {
    $("#hero-eyebrow").textContent = SITE.positioning;
    const first = SITE.name.split(" ")[0];
    const rest = SITE.name.split(" ").slice(1).join(" ");
    $("#hero-heading").innerHTML =
      `<span class="name-cycle">${first}</span> <span class="name-black">${rest}</span>`;
    $("#hero-tagline").textContent = SITE.tagline;
    $("#hero-location").textContent = SITE.location;
    $("#hero-availability").textContent = SITE.availability;
    $("#nav-mark").textContent = SITE.name;
    $("#footer-name").textContent = `© ${SITE.name}`;
    $("#footer-year").textContent = new Date().getFullYear();
    if (SITE.contact && SITE.contact.email) {
      $("#hero-cta").href = `mailto:${SITE.contact.email}`;
    }
  }

  function renderAbout() {
    $("#about-text").textContent = SITE.about;
    $("#about-philosophy").textContent = `\u201C${SITE.philosophy}\u201D`;
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
    if (!grid) return;
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

  function renderExperience() {
    $("#stat-row").innerHTML = SITE.stats.map(s => `
      <div class="stat">
        <div class="stat__value" data-final="${s.value}">0</div>
        <div class="stat__label">${s.label}</div>
      </div>
    `).join("");

    $("#work-list").innerHTML = SITE.experience.map(w => `
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

  // ---- Services: tab bar + grid, driven by SITE.serviceCategories ----
  function renderServices() {
    const tabWrap = $("#service-tabs");
    const grid = $("#services-grid");
    const categories = SITE.serviceCategories;

    tabWrap.innerHTML = categories.map((cat, i) => `
      <button class="tab${i === 0 ? " is-active" : ""}" role="tab" aria-selected="${i === 0}" data-cat="${cat}">${cat}</button>
    `).join("");

    function paint(cat) {
      const items = SITE.services[cat] || [];
      grid.innerHTML = items.map(s => `
        <div class="card card--light reveal is-in">
          <div class="card__body">
            <h3 class="card__title">${s.title}</h3>
            <p class="card__desc">${s.description}</p>
          </div>
        </div>
      `).join("");
    }

    tabWrap.addEventListener("click", (e) => {
      const btn = e.target.closest(".tab");
      if (!btn) return;
      $$(".tab", tabWrap).forEach(t => { t.classList.remove("is-active"); t.setAttribute("aria-selected", "false"); });
      btn.classList.add("is-active");
      btn.setAttribute("aria-selected", "true");
      paint(btn.dataset.cat);
    });

    paint(categories[0]);
  }

  // ---- Creator spotlight (@lookitshuda) ----
  function renderCreator() {
    const c = SITE.creator;
    if (!c) { $("#ugc").remove(); return; }

    $("#creator-handle").textContent = c.handle;
    $("#creator-position").textContent = c.positioning;
    $("#creator-tagline").textContent = c.tagline;

    $("#creator-pillars").innerHTML = c.pillars.map(p => `<span class="chip">${p}</span>`).join("");

    $("#creator-stats").innerHTML = c.stats.map(s => `
      <div class="stat stat--compact">
        <div class="stat__value" data-final="${s.value}">0</div>
        <div class="stat__label">${s.label}</div>
      </div>
    `).join("");

    $("#creator-brands").innerHTML = c.brands.map(b => `<span class="chip chip--outline">${b}</span>`).join("");

    $("#creator-packages").innerHTML = c.packages.map(p => `
      <div class="card card--outline">
        <div class="card__body">
          <h3 class="card__title">${p.title}</h3>
          <p class="card__desc">${p.description}</p>
        </div>
      </div>
    `).join("");
  }

  // ---- Contact dock: fixed edge nav mirroring the palette rail ----
  function renderContact() {
    const c = SITE.contact;
    if (c.email) {
      $("#contact-email-cta").href = `mailto:${c.email}`;
      $("#contact-email-cta").textContent = `Email me — ${c.email} →`;
    }

    const items = [
      c.linkedin ? { short: "in", label: "LinkedIn", href: c.linkedin } : null,
      c.email ? { short: "\u2709", label: c.email, href: `mailto:${c.email}` } : null,
      c.telegram ? { short: "tg", label: "Telegram", href: c.telegram } : null,
      c.instagram ? { short: "ig", label: "Instagram", href: c.instagram } : null,
      c.tiktok ? { short: "tt", label: "TikTok", href: c.tiktok } : null,
      c.creatorEmail ? { short: "ugc", label: `${c.creatorEmail} (creator inquiries)`, href: `mailto:${c.creatorEmail}` } : null,
    ].filter(Boolean);

    $("#contact-dock").innerHTML = items.map(l => `
      <a class="dock__item" href="${l.href}" target="_blank" rel="noopener">
        <span class="dock__short">${l.short}</span>
        <span class="dock__label">${l.label}</span>
      </a>
    `).join("");
  }

  function renderAll() {
    renderHero();
    renderAbout();
    renderServices();
    renderDesign();
    renderExperience();
    renderCommunity();
    renderCreator();
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

  // ---- Count-up stat numbers ----
  const prefersReducedMotion = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  function animateValue(el, finalText, duration) {
    const match = finalText.match(/^([\d,]+(?:\.\d+)?)/);
    if (!match) { el.textContent = finalText; return; }
    const numStr = match[1];
    const suffix = finalText.slice(numStr.length);
    const hasComma = numStr.indexOf(",") !== -1;
    const decimals = numStr.indexOf(".") !== -1 ? numStr.split(".")[1].length : 0;
    const target = parseFloat(numStr.replace(/,/g, ""));
    const start = performance.now();

    function frame(now) {
      const p = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - p, 3);
      const val = target * eased;
      let display = decimals ? val.toFixed(decimals) : Math.round(val).toString();
      if (hasComma) {
        display = Number(display).toLocaleString(undefined, { minimumFractionDigits: decimals, maximumFractionDigits: decimals });
      }
      el.textContent = display + suffix;
      if (p < 1) requestAnimationFrame(frame); else el.textContent = finalText;
    }
    requestAnimationFrame(frame);
  }

  function wireCountUp() {
    const nodes = $$(".stat__value[data-final]");
    if (prefersReducedMotion) {
      nodes.forEach(el => { el.textContent = el.dataset.final; });
      return;
    }
    const io = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          animateValue(entry.target, entry.target.dataset.final, 1100);
          io.unobserve(entry.target);
        }
      });
    }, { threshold: 0.4 });
    nodes.forEach(el => io.observe(el));
  }

  document.addEventListener("DOMContentLoaded", () => {
    renderAll();
    wireRail();
    wireReveal();
    wireCountUp();
    // mark hero active immediately on load
    $(".rail__seg[data-target='hero']").classList.add("is-active");
  });
})();
