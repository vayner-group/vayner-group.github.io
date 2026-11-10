document.addEventListener("DOMContentLoaded", function () {
  var form = document.getElementById("contactForm");
  if (!form) return;
  form.addEventListener("submit", function (e) {
    e.preventDefault();
    var f = new FormData(form);
    var subject = encodeURIComponent("New message from the Vayner Group website");
    var body = encodeURIComponent(
      "Name: " + f.get("name") + "\n" +
      "Email: " + f.get("email") + "\n" +
      "Phone: " + (f.get("phone") || "-") + "\n\n" +
      f.get("message")
    );
    window.location.href = "mailto:" + form.dataset.email + "?subject=" + subject + "&body=" + body;
  });
});
