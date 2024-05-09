//1
let i = 0;
let newArr = [];


function findAll(arr, letter){

while(i < arr.length){
if (arr[i] == letter) newArr.push(i);
    i++;
}
return newArr;
}

console.log(findAll('archaebacteria','a'));

//2
// let bullets = 140
// let grenades = 4 
// let daniIsAlive = true


// dragons(dragonNum){
    
// }

// console.log(DragonAttack(6));
// console.log(DragonAttack(4));
// console.log(carriageAttack(1));

let bullets = 140;
let grenades = 4;
let daniIsAlive = true;

function DragonAttack(amount) {
  for (let i = 0; i < amount; i++) {
    if (bullets >= 4) {
      bullets -= 4;
    } else if (grenades >= 1) {
      grenades--;
    } else {
      daniIsAlive = false;
      return false;
    }
  }
  return true;
}

function carriageAttack(amount) {
  let carriagesDestroyed = 0;
  for (let i = 0; i < amount; i++) {
    if (grenades >= 2) {
      grenades -= 2;
      if (Math.random() > 0.5) {
        carriagesDestroyed++;
      }
    } else {
      daniIsAlive = false;
      return carriagesDestroyed;
    }
  }
  return carriagesDestroyed === amount;
}

function playGame() {
  let dragonAttacks = [6, 4];
  let carriageAttacks = [1];

  for (let attack of dragonAttacks) {
    if (!DragonAttack(attack)) {
      console.log("Dani was killed by dragons.");
      return;
    }
  }

  for (let attack of carriageAttacks) {
    if (!carriageAttack(attack)) {
      console.log("Dani was killed by an armored carriage.");
      return;
    }
  }

  console.log("Dani survived all dangers!");
}

playGame();

const fs = require('fs');

let data = fs.readFileSync('E:\\IITC\\IITC\\Training Exercises\\5T5\\avocado.txt', 'utf-8');

console.log(data);

