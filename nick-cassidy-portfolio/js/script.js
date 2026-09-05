(function () {
  "use strict";

  // Mobile nav toggle
  var navToggle = document.getElementById("navToggle");
  var mainNav = document.getElementById("mainNav");
  navToggle.addEventListener("click", function () {
    var isOpen = mainNav.classList.toggle("is-open");
    navToggle.setAttribute("aria-expanded", String(isOpen));
  });
  mainNav.addEventListener("click", function (e) {
    if (e.target.tagName === "A") {
      mainNav.classList.remove("is-open");
      navToggle.setAttribute("aria-expanded", "false");
    }
  });

  // Hero stat pager
  var stats = [
    { num: "300+", desc: "Original cues written for commercials, broadcast opens, and streaming series." },
    { num: "12", desc: "Regional and national networks that have aired the work." }
  ];
  var statIndex = 0;
  var statNum = document.getElementById("statNum");
  var statDesc = document.getElementById("statDesc");
  function renderStat() {
    statNum.textContent = stats[statIndex].num;
    statDesc.textContent = stats[statIndex].desc;
  }
  document.getElementById("statPrev").addEventListener("click", function () {
    statIndex = (statIndex - 1 + stats.length) % stats.length;
    renderStat();
  });
  document.getElementById("statNext").addEventListener("click", function () {
    statIndex = (statIndex + 1) % stats.length;
    renderStat();
  });

  // Services list active state
  var serviceButtons = document.querySelectorAll("#serviceList button");
  serviceButtons.forEach(function (btn) {
    btn.addEventListener("mouseenter", function () {
      serviceButtons.forEach(function (b) { b.classList.remove("is-active"); });
      btn.classList.add("is-active");
    });
  });

  // FAQ accordion
  var faqItems = document.querySelectorAll(".faq-item");
  faqItems.forEach(function (item) {
    var q = item.querySelector(".faq-q");
    q.addEventListener("click", function () {
      var wasOpen = item.classList.contains("is-open");
      faqItems.forEach(function (i) { i.classList.remove("is-open"); });
      if (!wasOpen) item.classList.add("is-open");
    });
  });

  // Scroll reveal
  var revealTargets = document.querySelectorAll(
    ".hero-body, .about-block, .case-item, .services-inner, .journey-step, .quote-grid, .faq-layout, .contact-inner"
  );
  revealTargets.forEach(function (el) { el.classList.add("reveal"); });

  if ("IntersectionObserver" in window) {
    var observer = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15 }
    );
    revealTargets.forEach(function (el) { observer.observe(el); });
  } else {
    revealTargets.forEach(function (el) { el.classList.add("is-visible"); });
  }

  // Placeholder contact form
  var form = document.getElementById("contactForm");
  var note = document.getElementById("formNote");
  form.addEventListener("submit", function (e) {
    e.preventDefault();
    note.hidden = false;
    form.reset();
  });

  // Footer: live local time + booking quarter + year
  function updateClock() {
    var now = new Date();
    var time = now.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });
    document.getElementById("localTime").textContent = "[City] · local time " + time;
  }
  updateClock();
  setInterval(updateClock, 30000);

  var now = new Date();
  var quarter = Math.floor(now.getMonth() / 3) + 1;
  var nextQuarter = quarter === 4 ? 1 : quarter + 1;
  var yearShort = String(now.getFullYear() + (quarter === 4 ? 1 : 0)).slice(-2);
  document.getElementById("bookingLine").textContent = "Booking sessions for Q" + nextQuarter + " '" + yearShort;

  document.getElementById("year").textContent = new Date().getFullYear();
})();
