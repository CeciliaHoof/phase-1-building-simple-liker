// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!
let modal = document.querySelector('#modal')
modal.classList.add('hidden');
const heartsArr = document.querySelectorAll('.like-glyph');
mimicServerCall(url="http://mimicServer.example.com", config={})
  .then((resp) => {
    console.log(resp)
    heartsArr.forEach((element) => element.addEventListener('click', function() {
      if (element.textContent === EMPTY_HEART){
        element.textContent = FULL_HEART;
        element.classList.add('activated-heart')
      }
      else if (element.textContent === FULL_HEART)
      {
        element.textContent = EMPTY_HEART;
        element.classList.remove('activated-heart')
      }
    }))
  })
  .catch((error) => {
    console.error(error)
    modal.classList.remove('hidden');
    modal.textContent = "Random server error. Try again.";
    setTimeout(() => {
       document.querySelector('#modal').classList.add('hidden');
     }, 3000);
  })




//------------------------------------------------------------------------------
// Don't change the code below: this function mocks the server response
//------------------------------------------------------------------------------

function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}
