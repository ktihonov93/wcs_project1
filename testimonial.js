const form = document.querySelector('#close-modal')
const message = document.querySelector('#message')
const anotherPersons = document.querySelector('.anotherPersons')
const stars = document.getElementsByClassName("simple-rating_item")
const reviewImage = document.querySelector(".reviewImage")
const reviewStar = document.querySelector(".reviewStar")
const reviewText = document.querySelector(".reviewText")
console.log(reviewStar)
console.log(stars)

//const createStars = () => {
  for (let i = 0; i < stars.length; i++) {
    
    stars[i].addEventListener('click', function () {
      reviewStar.innerHTML = ''
      
      reviewStar.innerHTML = "★".repeat(stars[i].value);
      console.log(reviewStar)
      console.log("★".repeat(stars[i].value))

      //createReview()
    })
  }
//}
//const createReview = () => {
form.addEventListener('click', function (event) {

  // We want to prevent the page to reloas

  event.preventDefault();

  //createStars()

  // We create a variable that we set to a new li node

  const newMessage = document.createElement("div");

  // We add the text to the li

  newMessage.innerHTML = message.value;

  // We add the li to the ul 

  reviewText.appendChild(newMessage);

  // We clear the value of the input

  //inputTodo.value = "";

  reviewStar.style.display = "block"
  reviewStar.style.textAlign = "center";
  reviewImage.style.display = "block"

  // const divStars = document.createElement("div");
  //  divStars.innerHTML = starImage

  // anotherPersons.appendChild(divStars);

});
//}

function updateImage() {
  const file = document.getElementById('user-picture').files[0];
  document.getElementById('meme-picture').src = window.URL.createObjectURL(file);
}

