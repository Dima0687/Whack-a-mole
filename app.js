const squares = document.querySelectorAll('.square');
const mole = document.querySelector('.mole');

const timeLeft = document.querySelector('#time-left');
const score = document.querySelector('#score');

const newGameButton = document.querySelector('#new-game');

let result = 0;
let hitPosition = null;
let timerId = null;
let currentTime = null;
let countDownTimerId = null;

function randomSquare() {
  squares.forEach( (square) => {
    square.classList.remove('mole')
  })

  const randomNumber = Math.floor(Math.random() * squares.length)
  const randomSquare = squares[randomNumber]
  randomSquare.classList.add('mole');

  hitPosition = randomSquare.id;
}

squares.forEach( square => {
  square.addEventListener('mousedown', () => {
    if(square.id === hitPosition){
      result++;
      score.innerText = result;
      hitPosition = null;
    }
  })
})

function moveMole() {
  timerId = setInterval( randomSquare, 500 );
}

function countDown() {
  currentTime--
  timeLeft.innerText = currentTime;

  if(currentTime === 0){
    alert(`Your final score is ${score.innerText}`, 
    resetGame());
  }
}

newGameButton.addEventListener('click', () => {
  resetGame();
  countDownTimerId = setInterval(countDown, 1000);
  moveMole();
})

function resetGame() {
  result = 0;
  score.innerText = result;
  currentTime = 60;
  clearInterval(countDownTimerId);
  clearInterval(timerId);
}