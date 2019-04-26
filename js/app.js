"use strict";

const cells = Array.from(document.querySelectorAll('td'));
const wrapper = document.querySelector('.wrapper');
const game = document.querySelector('.game');
const congrats = document.querySelector('.congrats');
const whoWon = document.querySelector('.whoWon');
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

game.addEventListener('click', function(e) {
  // if(e.target.value === ''){}
  e.target.innerHTML = 'x';
  playerArr.push(+e.target.getAttribute('id'));
  for(let i =0; i < win.length; i++){
    const winArr = win[i].filter(element => playerArr.includes(element));
    if(winArr.length === 3){
      whoWon.append('Игрок');
      congrats.style.opacity = '1';
    }
    console.log(winArr);
  }
  // console.log(playerArr);
  // console.log(intersection);
});

