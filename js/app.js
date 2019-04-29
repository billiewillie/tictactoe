"use strict";

const wrapper = document.querySelector('.wrapper');
const game = document.querySelector('.game');
const congrats = document.querySelector('.congrats');
const playerArr = [];
const compArr = [];
let endgame = false;
let emptyCells = Array
  .from(document.querySelectorAll('td'))
  .filter(element => element.innerHTML === '');
const win = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
  [1, 4, 7],
  [2, 5, 8],
  [3, 6, 9],
  [1, 5, 9],
  [3, 5, 7],
];

game.addEventListener('click', function (e) {
  if (emptyCells.includes(e.target) && !endgame) {
    e.target.innerHTML = 'x';
    playerArr.push(+e.target.getAttribute('id'));
    emptyCells.splice(emptyCells.indexOf(e.target), 1);
    whoWon(playerArr, 'Игрок');
  }
  compTurn();
  console.log(playerArr);
});

function compTurn() {
  if (!endgame) {
    const number = Math.floor(Math.random() * emptyCells.length);
    emptyCells[number].innerHTML = 'o';
    compArr.push(+(emptyCells[number].getAttribute('id')));
    emptyCells.splice(number, 1);
    whoWon(compArr, 'Компьютер');
  };
  console.log(compArr);
}

function whoWon(arr, str) {
  for (let i = 0; i < win.length; i++) {
    const winArr = win[i].filter(element => arr.includes(element));
    if (winArr.length === 3) {
      congrats.append(str + ' победил');
      congrats.style.opacity = '1';
      endgame = true;
    }
  }
}