// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!

const like = document.querySelectorAll('span.like-glyph');

like.forEach(like => like.addEventListener("click", clickHeart))


function clickHeart(event) {
  const heart = event.target;
  mimicServerCall()
    .then(function () {
      if (heart.innerText === EMPTY_HEART){
        heart.innerText = FULL_HEART;
        heart.classList.add('activated-heart')
      } else {
        heart.innerText = EMPTY_HEART;
        heart.classList.remove('activated-heart')
      }
    })
    .catch( () => {
      const alert = document.getElementById("modal")
      alert.className = "show"
    })
    setTimeout( () => {
      const alert = document.getElementById("modal")
      alert.className = "hidden"}, 3000)
    }




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
