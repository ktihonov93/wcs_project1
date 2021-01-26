const form = document.querySelector('#close-modal')
const message = document.querySelector('#message')
const anotherPersons = document.querySelector('.anotherPersons')
const stars = document.getElementsByClassName("simple-rating_item")
console.log(stars)

form.addEventListener('click', function (event) {

  // We want to prevent the page to reloas

  event.preventDefault();


  // We create a variable that we set to a new li node

  const newMessage = document.createElement("div");

  // We add the text to the li

  newMessage.innerHTML = message.value;

  // We add the li to the ul 

  anotherPersons.appendChild(newMessage);

  // We clear the value of the input

  //inputTodo.value = "";

  const divStars = document.createElement("div");
    divStars.innerHTML = starImage

    anotherPersons.appendChild(divStars);

});

for (let i = 0; i < stars.length; i++) {
  stars[i].addEventListener('click', function () {

    console.log(stars[i].value)

    let starImage = "★".repeat(stars[i].value);
    console.log(starImage)

    // const divStars = document.createElement("div");
    // divStars.innerHTML = ''
    // divStars.innerHTML = "★".repeat(stars[i].value);

    // We add the li to the ul 
  })
}

