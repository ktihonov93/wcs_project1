/*const message =
  "Thank you! We'll consider your candidacy as soon as possible!";

document
  .getElementById("contactForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();
    alert(message);
  });*/

// const closeButton = document.querySelector('#close-modal');
// const openButton = document.querySelector('#contactForm');
// const modal = document.querySelector('.modal');

//openButton.addEventListener("click", function (event) {
 // event.preventDefault();
//   modal.style.display = "block";
 //});

// closeButton.addEventListener("click", function (event) {
//   event.preventDefault();
//   modal.style.display = "none";
// });


const popupLinks = document.querySelectorAll('.bottom');
const body = document.querySelector('body');
const lockPadding = document.querySelectorAll('.lock-padding');

let unlock = true
const timeout = 800
if (popupLinks.length > 0) {
  for (let i=0; i < popupLinks.length; i++){
const popupLink = popupLinks[i]
popupLink.addEventListener('click', function (e) {
  const popupName = popupLink.getAttribute('href').replace('#', '')
  const currentPopup = document.getElementById(popupName)
  popupOpen(currentPopup)
  e.preventDefault()
})
  }
}

const popupCloseIcon = document.querySelectorAll('.close-popup')
if (popupCloseIcon.length > 0) {
  for (let i=0; i < popupCloseIcon.length; i++){
const el = popupCloseIcon[i]
el.addEventListener('click', function (e) {
  popupClose(el.closest('.popup'))
  e.preventDefault()
})
  }
}

function popupOpen(currentPopup) {
if (currentPopup && unlock) {
  const popupActive = document.querySelector('.popup.open')
  if (popupActive) {
popupClose(popupActive, false)
  } else {
    bodylock()
  }
currentPopup.classList.add('open')
currentPopup.addEventListener('click', function (e) {
if (!e.target.closest('.popup_content')) {
  popupClose(e.target.closest('.popup'))
}
  })
}
}

function popupClose(popupActive, doUnlock = true) {
  if (unlock) {
popupActive.classList.remove('open')
if (doUnlock) {
bodyUnlock()
}
  }
}

function bodylock() {
const lockPaddingValue = window.innerWidth - document.querySelector('.wrapper').offsetWidth + 'px'

for(let i=0; i < lockPadding.length; i++) {
const el = lockPadding[i]
el.style.paddingRight = lockPaddingValue
}
body.style.paddingRight = lockPaddingValue
body.classList.add('lock')

unlock = false
setTimeout(function () {
  unlock = true
}, timeout);
}

function bodyUnlock() {
  setTimeout(function () {
    if(lockPadding.length > 0) {
for (let i=0; i < lockPadding; i++) {
const el = lockPadding[i]
el.style.paddingRight = '0px'
    }
}
body.style.paddingRight = '0px'
body.classList.remove('lock')
  }, timeout)

  unlock = false
  setTimeout(function() {
    unlock = true
  }, timeout);
}

document.addEventListener('keydown', function (e) {
  if (e.which === 27) {
    const popupActive = document.querySelector('.popup.open')
    popupClose(popupActive)
  }
})

