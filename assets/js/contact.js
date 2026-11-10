document.addEventListener("DOMContentLoaded", function () {
  var form = document.getElementById("contactForm");
  if (!form) return;

  form.addEventListener("submit", function (e) {
    e.preventDefault();
    var f = new FormData(form);
    var lines = [];
    f.forEach(function (value, key) {
      if (key !== "message" && value) lines.push(key.charAt(0).toUpperCase() + key.slice(1) + ": " + value);
    });
    lines.push("", f.get("message"));
    var subject = encodeURIComponent("New project inquiry from the Vayner Group website");
    var body = encodeURIComponent(lines.join("\n"));
    window.location.href = "mailto:" + form.dataset.email + "?subject=" + subject + "&body=" + body;
  });
});
