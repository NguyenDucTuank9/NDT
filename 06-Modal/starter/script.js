'use strict';
const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const openbtn = document.querySelectorAll('.show-modal');
const closebtn = document.querySelector('.close-modal');

console.log(openbtn);
for (let i = 0; i < openbtn.length; i++) {
  openbtn[i].addEventListener('click', function () {
    console.log('button clicked');
    modal.classList.remove('hidden');
    overlay.classList.remove('hidden');
  });
}
const closefunc = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};
closebtn.addEventListener('click', closefunc);
overlay.addEventListener('click', closefunc);
document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape') {
    if (!modal.classList.contains('hidden')) {
      closefunc();
    }
  }
});
