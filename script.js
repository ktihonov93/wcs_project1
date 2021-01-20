const message =
  "Thank you! We'll consider your candidacy as soon as possible!";

document
  .getElementById("contactForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();
    alert(message);
  });

  const closeButton = document.querySelector('#close-modal');
const openButton = document.querySelector('#contactForm');
const modal = document.querySelector('.modal');

openButton.addEventListener("click", function() {
modal.style.display = "block";
            });

closeButton.addEventListener("click", function() {
modal.style.display = "none";
            });