const form = document.querySelector("#close-modal");
const message = document.querySelector("#message");
const anotherPersons = document.querySelector(".anotherPersons");
const stars = document.getElementsByClassName("simple-rating_item");
const reviewImage = document.querySelector(".reviewImage");
const reviewStar = document.querySelector(".reviewStar");
const reviewText = document.querySelector(".reviewText");
const textStar2 = document.querySelector(".text_star2");
const message2 = "Thank you for your review!";

for (let i = 0; i < stars.length; i++) {
  stars[i].addEventListener("click", function () {
    reviewStar.innerHTML = "";

    reviewStar.innerHTML = "★".repeat(stars[i].value);
  });
}

form.addEventListener("click", function (event) {
  event.preventDefault();

  const newMessage = document.createElement("div");

  newMessage.innerHTML = message.value;

  reviewText.appendChild(newMessage);

  reviewStar.style.display = "block";
  reviewStar.style.textAlign = "center";
  reviewStar.style.paddingBottom = "10px";
  reviewImage.style.display = "block";
  reviewImage.style.borderRadius = "15px";
  reviewImage.style.marginRight = "-75px";
  textStar2.style.display = "block";
  alert(message2);
});

function updateImage() {
  const file = document.getElementById("user-picture").files[0];
  document.getElementById("meme-picture").src =
    window.URL.createObjectURL(file);
}
