'use strict';

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;
const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};
const displayNumber = function (number) {
  document.querySelector('.number').textContent = number;
};

// When user clicks 'Check!' or hits 'enter'
const checkNumber = function () {
  const guess = Number(document.querySelector('.guess').value);

  // No input number
  if (!guess) {
    displayMessage('⛔ No number!');

    // Player wins
  } else if (guess === secretNumber) {
    displayNumber(secretNumber);
    displayMessage('🎉 Correct Number!');

    // Manipulating CSS
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';
    document.querySelector('.guess').blur();

    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }

    // Wrong number
  } else if (guess !== secretNumber) {
    if (score > 1) {
      displayMessage(guess > secretNumber ? '📈 Too high!' : '📉 Too low!');

      score--;
      document.querySelector('.score').textContent = score;
    } else {
      // Game lost
      displayMessage('💥 You lost the game!');
      document.querySelector('.score').textContent = 0;
    }
  }
};
// Event listeners
document.querySelector('.check').addEventListener('click', checkNumber);
document.querySelector('.guess').addEventListener('keydown', function (e) {
  if (e.key === 'Enter') checkNumber();
});

// Play again
document.querySelector('.again').addEventListener('click', function () {
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  displayMessage('Start guessing...');
  score = 20;
  document.querySelector('.score').textContent = score;
  displayNumber('?');
  document.querySelector('.guess').value = '';

  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
});
