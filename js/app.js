"use strict";

const wrapper = document.querySelector('.wrapper');
const game = document.querySelector('.game');
const congrats = document.querySelector('.congrats');
const playerArr = [];
const compArr = [];
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
  const emptyCells = Array
    .from(document.querySelectorAll('td'))
    .filter(element => element.innerHTML === '');
  if (emptyCells.includes(e.target)){
    e.target.innerHTML = 'x';
    playerArr.push(+e.target.getAttribute('id'));
    console.log(playerArr);
  } 
  compTurn();
  whoWon(playerArr, 'Игрок');
});

function compTurn(){
  const emptyCells = Array
    .from(document.querySelectorAll('td'))
    .filter(element => element.innerHTML === '');
  emptyCells[Math.floor(Math.random() * (emptyCells.length + 1))].innerHTML = 'o';
  console.log(emptyCells);
  // whoWon(compArr, 'Компьютер');
}

function whoWon(arr, str){
  for (let i = 0; i < win.length; i++) {
    const winArr = win[i].filter(element => arr.includes(element));
    if (winArr.length === 3) {
      congrats.append(str + ' победил');
      congrats.style.opacity = '1';
    }
  }
}