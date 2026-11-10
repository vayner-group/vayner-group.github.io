document.addEventListener("DOMContentLoaded", function () {
  var form = document.getElementById("contactForm");
  if (!form) return;

  // Adjust the form when arriving from the For Freelancers page
  var type = new URLSearchParams(window.location.search).get("type");
  if (type === "freelancer") {
    var h2 = document.querySelector(".title h2");
    if (h2) h2.textContent = "Apply to join our network";
    var msg = form.querySelector('textarea[name="message"]');
    if (msg) msg.placeholder = "Tell us about your skills, stack, experience and portfolio link*";
  }

  form.addEventListener("submit", function (e) {
    e.preventDefault();
    var f = new FormData(form);
    var lines = [];
    f.forEach(function (value, key) {
      if (key !== "message" && value) lines.push(key.charAt(0).toUpperCase() + key.slice(1) + ": " + value);
    });
    lines.push("", f.get("message"));
    var subject = encodeURIComponent("New inquiry from the Vayner Group website");
    var body = encodeURIComponent(lines.join("\n"));
    window.location.href = "mailto:" + form.dataset.email + "?subject=" + subject + "&body=" + body;
  });
});
