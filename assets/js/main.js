(function () {
  document.documentElement.classList.add("js");

  // Header background once the page is scrolled
  var nav = document.querySelector(".site-nav");
  var onScroll = function () {
    if (nav) nav.classList.toggle("scrolled", window.scrollY > 24);
  };
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();

  // Staggered reveal on scroll
  var items = document.querySelectorAll("[data-reveal]");
  items.forEach(function (el) {
    var index = el.parentElement
      ? Array.prototype.indexOf.call(el.parentElement.children, el)
      : 0;
    el.style.setProperty("--d", (index % 3) * 100 + "ms");
  });

  if ("IntersectionObserver" in window) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add("in");
          io.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12 });
    items.forEach(function (el) { io.observe(el); });
  } else {
    items.forEach(function (el) { el.classList.add("in"); });
  }

  // Portfolio category filter
  var filters = document.querySelectorAll(".filter");
  var cards = document.querySelectorAll(".project-card");
  var empty = document.getElementById("portfolio-empty");

  filters.forEach(function (btn) {
    btn.addEventListener("click", function () {
      var category = btn.getAttribute("data-filter");
      filters.forEach(function (b) { b.classList.toggle("is-active", b === btn); });

      var visible = 0;
      cards.forEach(function (card) {
        var show = category === "all" || card.getAttribute("data-category") === category;
        card.hidden = !show;
        if (show) visible += 1;
      });
      if (empty) empty.hidden = visible > 0;
    });
  });
})();
