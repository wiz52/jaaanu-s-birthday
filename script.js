// ==========================================================
// PERSONAL CONTENT — EDIT THIS SECTION
// ==========================================================
// Fill in the placeholders below with real memories, photos,
// and letters. Everything else on the page updates itself
// automatically once you save this file.
// ==========================================================

const SITE_CONTENT = {

  herName: "Jaaanu",
  yourName: "[your name]",
  birthdayDate: "02 · 09 · 2026",

  herIntro: "[write a sweet little intro about her here — a sentence or two]",

  aboutHer: [
    { label: "she always", text: "[add a tiny habit of hers here]" },
    { label: "her go-to order", text: "[add something she always orders / eats / drinks]" },
    { label: "you'll usually find her", text: "[add where she usually is or what she's doing]" },
    { label: "currently obsessed with", text: "[add something she's into right now]" },
  ],

  timeline: [
    { label: "the beginning", date: "[date]", title: "a small moment", text: "[tell the story of how you met or how this started]" },
    { label: "the first memory", date: "[date]", title: "[title of the memory]", text: "[add your first real memory together here]" },
    { label: "somewhere along the way", date: "[date]", title: "[title]", text: "[add a moment that mattered to you both]" },
    { label: "now", date: "2026", title: "and somehow, here we are", text: "[add a line about where things stand today]" },
  ],

  littleThings: [
    { title: "the way you laugh", text: "[add a personal note here]" },
    { title: "the thing you always say", text: "[add a personal note here]" },
    { title: "your random habit", text: "[add a personal note here]" },
    { title: "the little thing you don't know I notice", text: "[add a personal note here]" },
  ],

  gallery: [
    { image: "assets/images/memory-01.jpg", caption: "[add a caption for this photo]", date: "[date]" },
    { image: "assets/images/memory-02.jpg", caption: "[add a caption]", date: "[date]" },
    { image: "assets/images/memory-03.jpg", caption: "[add a caption]", date: "[date]" },
    { image: "assets/images/memory-04.jpg", caption: "[add a caption]", date: "[date]" },
  ],

  // `answer` is the index (starting at 0) of the correct option
  quiz: [
    { question: "Where did we first ______?", options: ["[option a]", "[option b]", "[option c]"], answer: 0 },
    { question: "What song reminds us of each other?", options: ["[option a]", "[option b]", "[option c]"], answer: 1 },
    { question: "What do I always tease you about?", options: ["[option a]", "[option b]", "[option c]"], answer: 0 },
  ],

  openWhen: [
    { title: "open when you miss me", message: "[write a personal letter here]" },
    { title: "open when you've had a bad day", message: "[write a comforting message here]" },
    { title: "open when you need to smile", message: "[write something funny here]" },
    { title: "open when you wonder if I love you", message: "[write a heartfelt message here]" },
    { title: "open when you're about to sleep", message: "[write a short goodnight message here]" },
  ],

  future: [
    { title: "the first trip", description: "[describe a trip you want to take together]" },
    { title: "the first sunrise we watch together", description: "[describe this]" },
    { title: "that restaurant we keep talking about", description: "[describe it]" },
    { title: "the place we'll go someday", description: "[describe it]" },
  ],

  // Small clickable hidden notes sprinkled near section headings.
  hiddenMessages: [
    "[hidden message 1]",
    "[hidden message 2]",
    "[hidden message 3]",
  ],

  birthdayNote: "[add a short sweet birthday line here]",

  // Each string becomes its own paragraph in the final letter.
  finalLetter: [
    "[write your final letter here. Add as many paragraphs as you like — just add more strings to this array.]"
  ],
};


// ==========================================================
// SITE MACHINERY — you shouldn't need to edit below this line
// ==========================================================

document.addEventListener("DOMContentLoaded", () => {
  const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  initNav();
  initMusic();
  renderHer();
  renderTimeline();
  renderLittleThings();
  renderGallery();
  initLightbox();
  renderQuiz();
  renderOpenWhen();
  initLetterOverlay();
  renderFuture();
  initCake();
  renderFinalLetter();
  initEasterEggs();
  initOnViewReveal();

  // ---------- NAV ----------
  function initNav(){
    const nav = document.getElementById("site-nav");
    const toggle = document.getElementById("nav-toggle");
    const links = document.querySelectorAll("#nav-panel a");

    toggle.addEventListener("click", () => {
      const isOpen = nav.classList.toggle("open");
      toggle.setAttribute("aria-expanded", String(isOpen));
    });

    links.forEach(link => {
      link.addEventListener("click", () => {
        nav.classList.remove("open");
        toggle.setAttribute("aria-expanded", "false");
      });
    });

    document.addEventListener("click", (e) => {
      if (!nav.contains(e.target)) {
        nav.classList.remove("open");
        toggle.setAttribute("aria-expanded", "false");
      }
    });

    if ("IntersectionObserver" in window) {
      const sections = document.querySelectorAll("main .section, #landing");
      const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const id = entry.target.id;
            links.forEach(l => l.classList.toggle("active", l.getAttribute("href") === `#${id}`));
          }
        });
      }, { rootMargin: "-45% 0px -45% 0px" });
      sections.forEach(s => observer.observe(s));
    }
  }

  // ---------- MUSIC ----------
  function initMusic(){
    const btn = document.getElementById("music-toggle");
    const audio = document.getElementById("bg-audio");

    btn.addEventListener("click", () => {
      const playing = btn.getAttribute("aria-pressed") === "true";
      if (playing) {
        audio.pause();
        btn.setAttribute("aria-pressed", "false");
        btn.textContent = "🎵 music";
      } else {
        audio.play().then(() => {
          btn.setAttribute("aria-pressed", "true");
          btn.textContent = "🎵 playing";
        }).catch(() => {
          btn.textContent = "🎵 add a song";
        });
      }
    });
  }

  // ---------- HER ----------
  function renderHer(){
    document.getElementById("her-intro-copy").textContent = SITE_CONTENT.herIntro;
    const grid = document.getElementById("her-details");
    grid.innerHTML = SITE_CONTENT.aboutHer.map(item => `
      <div class="her-item on-view">
        <span class="detail-label">${escapeHTML(item.label)}</span>
        <p>${escapeHTML(item.text)}</p>
      </div>
    `).join("");
  }

  // ---------- TIMELINE ----------
  function renderTimeline(){
    const el = document.getElementById("timeline");
    el.innerHTML = SITE_CONTENT.timeline.map(item => `
      <div class="timeline-item on-view">
        <p class="timeline-date">${escapeHTML(item.date)}</p>
        <span class="timeline-label">${escapeHTML(item.label)}</span>
        <h3>${escapeHTML(item.title)}</h3>
        <p>${escapeHTML(item.text)}</p>
      </div>
    `).join("");
  }

  // ---------- LITTLE THINGS ----------
  function renderLittleThings(){
    const el = document.getElementById("little-things-grid");
    el.innerHTML = SITE_CONTENT.littleThings.map(item => `
      <div class="lt-card on-view">
        <h3>${escapeHTML(item.title)}</h3>
        <p>${escapeHTML(item.text)}</p>
      </div>
    `).join("");
  }

  // ---------- GALLERY ----------
  let galleryItems = [];
  function renderGallery(){
    const el = document.getElementById("gallery");
    galleryItems = SITE_CONTENT.gallery;
    el.innerHTML = galleryItems.map((item, i) => `
      <button class="gallery-item on-view" data-index="${i}" aria-label="Open photo ${i + 1}">
        <div class="gallery-photo" data-label="add photo ${i + 1} here">
          <img src="${item.image}" alt="${escapeHTML(item.caption)}" loading="lazy" onerror="this.style.display='none'" />
        </div>
        <p class="gallery-caption">${escapeHTML(item.caption)}</p>
      </button>
    `).join("");

    el.querySelectorAll(".gallery-item").forEach(btn => {
      btn.addEventListener("click", () => openLightbox(Number(btn.dataset.index)));
    });
  }

  // ---------- LIGHTBOX ----------
  let currentLightboxIndex = 0;
  function initLightbox(){
    document.getElementById("lightbox-close").addEventListener("click", closeLightbox);
    document.getElementById("lightbox-prev").addEventListener("click", () => stepLightbox(-1));
    document.getElementById("lightbox-next").addEventListener("click", () => stepLightbox(1));
    document.getElementById("lightbox").addEventListener("click", (e) => {
      if (e.target.id === "lightbox") closeLightbox();
    });
    document.addEventListener("keydown", (e) => {
      const lb = document.getElementById("lightbox");
      if (lb.hidden) return;
      if (e.key === "Escape") closeLightbox();
      if (e.key === "ArrowLeft") stepLightbox(-1);
      if (e.key === "ArrowRight") stepLightbox(1);
    });
  }
  function openLightbox(index){
    if (!galleryItems.length) return;
    currentLightboxIndex = index;
    updateLightbox();
    document.getElementById("lightbox").hidden = false;
    document.getElementById("lightbox-close").focus();
  }
  function stepLightbox(dir){
    currentLightboxIndex = (currentLightboxIndex + dir + galleryItems.length) % galleryItems.length;
    updateLightbox();
  }
  function updateLightbox(){
    const item = galleryItems[currentLightboxIndex];
    const img = document.getElementById("lightbox-img");
    img.style.opacity = "1";
    img.src = item.image;
    img.alt = item.caption;
    img.onerror = () => { img.style.opacity = "0.15"; };
    document.getElementById("lightbox-caption").textContent = item.caption;
    document.getElementById("lightbox-date").textContent = item.date || "";
  }
  function closeLightbox(){
    document.getElementById("lightbox").hidden = true;
  }

  // ---------- QUIZ ----------
  function renderQuiz(){
    const el = document.getElementById("quiz");
    el.innerHTML = SITE_CONTENT.quiz.map((q, qi) => `
      <div class="quiz-card on-view">
        <p class="quiz-question">${escapeHTML(q.question)}</p>
        <div class="quiz-options" data-qi="${qi}">
          ${q.options.map((opt, oi) => `<button class="quiz-option" data-oi="${oi}">${escapeHTML(opt)}</button>`).join("")}
        </div>
        <p class="quiz-feedback" aria-live="polite"></p>
      </div>
    `).join("") + `<p class="quiz-final on-view" id="quiz-final" hidden>okay. you still know us pretty well 🎀</p>`;

    let answeredCount = 0;
    el.querySelectorAll(".quiz-options").forEach(group => {
      const qi = Number(group.dataset.qi);
      const q = SITE_CONTENT.quiz[qi];
      group.querySelectorAll(".quiz-option").forEach(btn => {
        btn.addEventListener("click", () => {
          const oi = Number(btn.dataset.oi);
          const correct = oi === q.answer;
          group.querySelectorAll(".quiz-option").forEach((b, i) => {
            b.disabled = true;
            if (i === q.answer) b.classList.add("correct");
            else if (i === oi) b.classList.add("incorrect");
          });
          const feedback = group.parentElement.querySelector(".quiz-feedback");
          feedback.textContent = correct ? "you remembered! 💗" : "hmm. keeping that one in the archives 🤭";
          answeredCount++;
          if (answeredCount === SITE_CONTENT.quiz.length) {
            document.getElementById("quiz-final").hidden = false;
          }
        }, { once: true });
      });
    });
  }

  // ---------- OPEN WHEN ----------
  function renderOpenWhen(){
    const el = document.getElementById("open-when-grid");
    el.innerHTML = SITE_CONTENT.openWhen.map((item, i) => `
      <button class="ow-card on-view" data-index="${i}">
        <span class="ow-card-title">${escapeHTML(item.title)}</span>
        <span class="ow-card-cue">tap to open</span>
      </button>
    `).join("");
    el.querySelectorAll(".ow-card").forEach(btn => {
      btn.addEventListener("click", () => openLetter(Number(btn.dataset.index)));
    });
  }

  function initLetterOverlay(){
    document.getElementById("letter-close").addEventListener("click", closeLetter);
    document.getElementById("letter-overlay").addEventListener("click", (e) => {
      if (e.target.id === "letter-overlay") closeLetter();
    });
    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape" && !document.getElementById("letter-overlay").hidden) closeLetter();
    });
  }
  function openLetter(index){
    const item = SITE_CONTENT.openWhen[index];
    document.getElementById("letter-kicker").textContent = item.title;
    document.getElementById("letter-body").innerHTML = String(item.message)
      .split(/\n\s*\n/)
      .map(p => `<p>${escapeHTML(p.trim())}</p>`)
      .join("");
    const overlay = document.getElementById("letter-overlay");
    overlay.hidden = false;
    document.getElementById("letter-close").focus();
  }
  function closeLetter(){
    document.getElementById("letter-overlay").hidden = true;
  }

  // ---------- SOMEDAY ----------
  function renderFuture(){
    const el = document.getElementById("future-grid");
    el.innerHTML = SITE_CONTENT.future.map(item => `
      <div class="future-card on-view">
        <h3>${escapeHTML(item.title)}</h3>
        <p>${escapeHTML(item.description)}</p>
      </div>
    `).join("");
  }

  // ---------- FINAL LETTER ----------
  function renderFinalLetter(){
    document.getElementById("final-letter-body").innerHTML = SITE_CONTENT.finalLetter
      .map(p => `<p>${escapeHTML(p)}</p>`).join("");
    document.getElementById("signoff-name").textContent = SITE_CONTENT.yourName;
    document.getElementById("final-name").textContent = SITE_CONTENT.yourName;
  }

  // ---------- CAKE ----------
  function initCake(){
    const candles = document.querySelectorAll(".candle");
    let blownOut = 0;

    function blow(candle){
      if (candle.classList.contains("out")) return;
      candle.classList.add("out");
      candle.setAttribute("aria-pressed", "true");
      blownOut++;
      if (blownOut === candles.length) {
        setTimeout(revealBirthdayMessage, prefersReducedMotion ? 0 : 500);
      }
    }

    candles.forEach(candle => {
      candle.addEventListener("click", () => blow(candle));
      candle.addEventListener("keydown", (e) => {
        if (e.key === "Enter" || e.key === " ") { e.preventDefault(); blow(candle); }
      });
    });

    function revealBirthdayMessage(){
      const instruction = document.getElementById("cake-instruction");
      instruction.style.opacity = "0";
      const wish = document.getElementById("wish-text");
      wish.hidden = false;
      setTimeout(() => {
        document.getElementById("birthday-message").hidden = false;
        document.getElementById("bday-note").textContent = SITE_CONTENT.birthdayNote;
      }, prefersReducedMotion ? 0 : 1200);
    }
  }

  // ---------- EASTER EGGS ----------
  function initEasterEggs(){
    const total = SITE_CONTENT.hiddenMessages.length;
    if (total === 0) return;
    let found = 0;
    const counter = document.getElementById("egg-counter");

    const hosts = [
      document.querySelector("#her .section-title"),
      document.querySelector("#us .section-title"),
      document.querySelector("#little-things .section-title"),
      document.querySelector("#memories .section-title"),
      document.querySelector("#someday .section-title"),
    ];

    SITE_CONTENT.hiddenMessages.forEach((msg, i) => {
      const host = hosts[i % hosts.length];
      if (!host) return;
      const mark = document.createElement("span");
      mark.className = "egg-trigger";
      mark.setAttribute("role", "button");
      mark.setAttribute("tabindex", "0");
      mark.setAttribute("aria-label", "Hidden note");
      mark.textContent = " ✦";
      mark.dataset.found = "false";
      mark.addEventListener("click", () => reveal(mark, msg));
      mark.addEventListener("keydown", (e) => {
        if (e.key === "Enter" || e.key === " ") { e.preventDefault(); reveal(mark, msg); }
      });
      host.appendChild(mark);
    });

    function reveal(mark, msg){
      if (mark.dataset.found === "true") { showToast(msg); return; }
      mark.dataset.found = "true";
      found++;
      showToast(msg);
      counter.textContent = `you found ${found}/${total} 🎀`;
      counter.classList.add("show");
      if (found === total) {
        setTimeout(() => showToast("apparently you really do look everywhere 🥹"), 1600);
      }
    }

    let toastTimer = null;
    function showToast(text){
      let toast = document.querySelector(".egg-toast");
      if (!toast) {
        toast = document.createElement("div");
        toast.className = "egg-toast";
        document.body.appendChild(toast);
      }
      toast.textContent = text;
      requestAnimationFrame(() => toast.classList.add("show"));
      clearTimeout(toastTimer);
      toastTimer = setTimeout(() => toast.classList.remove("show"), 3200);
    }
  }

  // ---------- ON-VIEW REVEAL ----------
  function initOnViewReveal(){
    const targets = document.querySelectorAll(".on-view");
    if (prefersReducedMotion || !("IntersectionObserver" in window)) {
      targets.forEach(t => t.classList.add("in"));
      return;
    }
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("in");
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1 });
    targets.forEach(t => observer.observe(t));
  }

  // ---------- UTIL ----------
  function escapeHTML(str){
    const div = document.createElement("div");
    div.textContent = str == null ? "" : str;
    return div.innerHTML;
  }
});
