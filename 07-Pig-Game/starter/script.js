'use strict';
const score0 = document.querySelector('#score--0');
const score1 = document.querySelector('#score--1');
const dice2 = document.querySelector('.dice');
const btnNew = document.querySelector('.button--new');
const btnHold = document.querySelector('.button--hold');

score0.textContent = 0;
score1.textContent = 0;
dice2.classList.add('hidden');

document.querySelector('.button--roll').addEventListener('click', function () {
  const dice = Math.trunc(Math.random() * 6) + 1;
  dice2.classList.remove('hidden');
  dice2.src = `dice-${dice}.png`;
});
cd;
