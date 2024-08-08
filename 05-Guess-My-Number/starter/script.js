'use strict';
let num = Math.trunc(Math.random() * 20 + 1);
let score = 20;
let hscore = 0;
const dpl = function (message) {
  document.querySelector('.message').textContent = message;
};

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess);
  if (!guess) dpl('No number!');
  else if (guess === num) {
    dpl('Correct answer!!');
    document.querySelector('.number').textContent = num;

    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';
    if (score > hscore) {
      hscore = score;
      document.querySelector('.highscore').textContent = hscore;
    }
  } else if (guess !== num) {
    if (score > 1) {
      document.querySelector('.message').textContent =
        guess > num ? 'Smaller' : 'Bigger';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      dpl('You lost the game');
      document.querySelector('.score').textContent = 0;
    }
  }
});
document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  num = Math.round(Math.random() * 20 + 1);
  dpl('Start guessing...');
  document.querySelector('.number').textContent = '?';
  document.querySelector('.score').textContent = score;
  document.querySelector('.guess').value = '';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
});
