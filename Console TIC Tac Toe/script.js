
const console = document.getElementById('console');
const Label = document.getElementById('turnLabel');
const Button = document.getElementById('turnLabel');

let gameBoardArr = ["■", "■", "■", "■", "■", "■", "■", "■", "■"];
let currentShape = "O";


function Refresh() {
    console.value = '';
    gameBoardArr = ["■", "■", "■", "■", "■", "■", "■", "■", "■"];
}


ShapeChange();
function ShapeChange() {
    currentShape == "O"? currentShape = "X" : currentShape = "O";  
    turnLabel.innerHTML = "Turn For " + currentShape + "!";
}

function BoardSet(buttonValue){
    if (gameBoardArr[buttonValue] == "■"){
    gameBoardArr[buttonValue] = currentShape;
    BoardOutput(buttonValue);
    }
    checkGameStatus(currentShape);
}


function BoardOutput(buttonValue) {
    
    gameBoardArr.unshift("");
    console.value += '\n\n';
    for (i=1 ; i<gameBoardArr.length ; i++) {
        i % 3 == 0 ? console.value += gameBoardArr[i] + " " + '\n' : console.value += gameBoardArr[i] + " ";
    }
    console.value += '\n\n';
    gameBoardArr.shift("");
    ShapeChange();
    console.scrollTop = console.scrollHeight; 
}





const buttons = document.querySelectorAll('#board button');
buttons.forEach(button => {
    button.addEventListener('mouseover', () => {
        if (button.innerHTML == '') {
            button.innerHTML = currentShape;
        }
    });
    button.addEventListener('mouseout', () => {
        if (button.innerHTML !="") {
            button.innerHTML = "";
        }
    });

});

function checkWin(player) {
    // Define all possible winning combinations
    const winningCombos = [
      [0, 1, 2], [3, 4, 5], [6, 7, 8], // Rows
      [0, 3, 6], [1, 4, 7], [2, 5, 8], // Columns
      [0, 4, 8], [2, 4, 6]             // Diagonals
    ];
  
    // Check if any of the winning combinations are fulfilled
    return winningCombos.some(combo => {
      return combo.every(index => gameBoardArr[index] === player);
    });
  }
  
  // Function to check the game status after each move
  function checkGameStatus(player) {
    // Check if the player has won
    if (checkWin(player)) {
        console.value = console.value.replace(/\n+$/, "");
        console.value += "\n\n" + player +" wins!" + "\n\n";
        console.scrollTop = console.scrollHeight; 
      return;
    }
  
    // Check if the game is a tie
    if (!gameBoardArr.includes("■")) {
        console.value = console.value.replace(/\n+$/, "");
        console.value += "\n\n" + "It's a tie!" + "\n\n";
        console.scrollTop = console.scrollHeight; 
      return;
    }

  }