(function () {
  // Header gets a stronger background once the page is scrolled
  var nav = document.querySelector("nav");
  var onScroll = function () {
    if (nav) nav.classList.toggle("scrolled", window.scrollY > 20);
  };
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();

  // Smooth reveal of content blocks as they enter the viewport
  var targets = document.querySelectorAll(
    ".title, .card, .step, .about .logo-box, .about > div:last-child, .faq, .cta-band .container > *, .hero > .container > *"
  );
  targets.forEach(function (el, i) {
    el.classList.add("reveal");
    el.style.setProperty("--d", (i % 4) * 90 + "ms");
  });

  if (!("IntersectionObserver" in window)) {
    targets.forEach(function (el) { el.classList.add("in"); });
    return;
  }
  var io = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        entry.target.classList.add("in");
        io.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12, rootMargin: "0px 0px -40px 0px" });
  targets.forEach(function (el) { io.observe(el); });
})();
