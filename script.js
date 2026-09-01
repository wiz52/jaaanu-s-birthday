// ==========================================================
// PERSONAL CONTENT — EDIT THIS SECTION
// ==========================================================
// Fill in the placeholders below with real memories, photos,
// and letters. Everything else on the page updates itself
// automatically once you save this file.
// ==========================================================

const SITE_CONTENT = {

  herName: "Jaaanu",
  yourName: "Navaneeth",
  birthdayDate: "02 · 09 · 2026",

  herIntro: "the prettiest girl I know — and somehow also the calmest one. She'll say \"kuch nahi hoga,\" and just like that, I believe her.",

  aboutHer: [
    { label: "she always", text: "says \"kuch nahi hoga\" — and somehow it actually helps" },
    { label: "her go-to order", text: "chowmein. every single time." },
    { label: "you'll usually find her", text: "at her PG, buried in notes, studying 🥺" },
    { label: "currently obsessed with", text: "getting through exam season" },
  ],

  timeline: [
    { label: "the beginning", date: "16 April", title: "a session app, and then everything changed", text: "We met on a session app. Neither of us saw it coming." },
    { label: "the first memory", date: "[add the date — your birthday]", title: "she cut a cake for me", text: "You surprised me by cutting a cake for my birthday. Such a small thing. Felt like everything." },
    { label: "somewhere along the way", date: "17 June", title: "the day we said yes to this", text: "We officially became us on June 17th. I still remember exactly how that felt." },
    { label: "now", date: "2026", title: "our first birthday together", text: "It's only been a few months, but it already feels like this — you, me, the distance, all of it — is exactly where I'm supposed to be." },
  ],

  littleThings: [
    { title: "the way you laugh", text: "your laugh actually calms me down, every single time" },
    { title: "the thing you always say", text: "\"accha rakhti hoon\" — and somehow I believe you completely" },
    { title: "your random habit", text: "always digging up some new song to send me" },
    { title: "the little thing you don't know I notice", text: "how just being around you — even through a screen — lifts my whole mood" },
  ],

  // I wrote 3 short captions myself since you asked — swap any of these out freely.
  gallery: [
    { image: "assets/images/memory-01.jpg", caption: "our first movie together", date: "[add the date]" },
    { image: "assets/images/memory-02.jpg", caption: "just us, mid-conversation, like always", date: "[add the date]" },
    { image: "assets/images/memory-03.jpg", caption: "a quiet moment I keep coming back to", date: "[add the date]" },
    { image: "assets/images/memory-04.jpg", caption: "you, being you", date: "[add the date]" },
  ],

  quiz: [
    { question: "What was the first movie we watched together?", options: ["Wuthering Heights", "How to Lose a Guy in 10 Days", "Main Vaapas Aaunga"], answer: 0 },
    { question: "What song reminds us of each other?", options: ["Tum Se Hi", "Raabta", "Kabhi Kabhi Aditi"], answer: 0 },
    { question: "What do I always tease you about?", options: ["saying \"kuch nahi hoga\" about literally everything", "your chowmein loyalty", "falling asleep mid-conversation"], answer: 0 },
  ],

  // Wrote these 5 myself, kept minimal like you asked — edit anything that doesn't sound like you.
  openWhen: [
    { title: "open when you miss me", message: "Hey. I know the distance is doing that thing again.\n\nJust remember — the version of me on the other side of this screen is missing you exactly this much too. Go eat your chowmein, breathe, and text me something small. I'll be here." },
    { title: "open when you've had a bad day", message: "Whatever it is, it's allowed to be hard right now. You don't have to have it figured out today.\n\nSay \"kuch nahi hoga\" — actually say it out loud — and let me carry the rest for tonight." },
    { title: "open when you need to smile", message: "Okay but remember when you cut that cake for my birthday and got frosting literally everywhere except the actual cake?\n\nI still think about that. You're welcome." },
    { title: "open when you wonder if I love you", message: "April 16th wasn't an accident. June 17th wasn't either.\n\nEvery single day since has been me choosing you again, on purpose. That's not going to change." },
    { title: "open when you're about to sleep", message: "Put your phone down after this one.\n\n\"Accha rakhti hoon,\" you always tell me — let me say it back tonight. Sleep well, Jaaanu. I've got you." },
  ],

  future: [
    { title: "the trip to Umrangso", description: "I really want to take you to Umrangso someday soon." },
    { title: "trying new food together", description: "There's so many cuisines we still haven't tried side by side — let's fix that." },
    { title: "just holding your hand", description: "Something as simple as walking somewhere, hand in hand, no rush at all." },
    { title: "getting lost in your eyes", description: "I want a moment where I can just look at you and not have to look away." },
  ],

  hiddenMessages: [
    "psst — 16 April was the day I got lucky.",
    "you have no idea how often \"kuch nahi hoga\" gets me through my own day too.",
    "found it. of course you did. that's so you.",
  ],

  birthdayNote: "happy birthday, my Jaaanu 🎀 — today's the day I get to make a big deal out of you (as I should).",

  // Each string becomes its own paragraph in the final letter.
  finalLetter: [
    "wishing you a very happy birthday. I hope all your wishes come true.",
    "I'm so, so, so, so happy to have you in my life — September 2nd has become such an important date for me now.",
    "I love you so much, and I can't wait to meet you. Sending you all my love 😗❤️"
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
