const message2 = "Thank you for your message! We will consider your candidacy as soon as possible!";
const form = document.querySelector('#close-modal')

form.addEventListener('click', function (event) { 
    event.preventDefault();
    alert(message2)
} ) 
