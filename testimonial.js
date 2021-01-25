const form = document.querySelector('#close-modal')
const message = document.querySelector('#message')
const anotherPersons = document.querySelector('.anotherPersons')

form.addEventListener('click', function(event) {

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

    const star = document.querySelector('.simple-rating_label:checked').value;

    const divStar = document.createElement("div");
    divStar.innerHTML = star;
    anotherPersons.appendChild(divStar);
  
  });

