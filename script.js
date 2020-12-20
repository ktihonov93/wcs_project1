const message =
  "Thank you! We'll consider your candidacy as soon as possible!";

document
  .getElementById("contactForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();
    alert(message);
  });