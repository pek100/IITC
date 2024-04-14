
const pageConsole = document.getElementById('pageConsole');
const Label = document.getElementById('turnLabel');
const Button = document.getElementById('turnLabel');

let gameBoardArr = ["■", "■", "■", "■", "■", "■", "■", "■", "■"];
let currentShape = "O";
let gameRunning = true;

Refresh();

function Refresh() {
    pageConsole.value = '';
    console.clear();
    gameBoardArr = ["■", "■", "■", "■", "■", "■", "■", "■", "■"];
    BoardOutput();
}


function ShapeChange() {
    currentShape == "O"? currentShape = "X" : currentShape = "O";  
    turnLabel.innerHTML = "Turn For " + currentShape + "!";
}



function BoardSet(buttonValue){
    if (gameBoardArr[buttonValue] == "■" && gameRunning == true){
    gameBoardArr[buttonValue] = currentShape;
    BoardOutput();
    }
    
}


function BoardOutput() {
    pageConsole.value += '\n\n';
    console.log("\n\n");
    pageConsole.value += gameBoardArr.slice(0, 3).join(" ") + "\n";
    pageConsole.value += gameBoardArr.slice(3, 6).join(" ") + "\n";
    pageConsole.value += gameBoardArr.slice(6, 9).join(" ") + "\n";
    pageConsole.value += '\n\n';
    console.table([gameBoardArr.slice(0, 3),gameBoardArr.slice(3, 6),gameBoardArr.slice(6, 9)])
    console.log("\n\n");
    ShapeChange();
    pageConsole.scrollTop = pageConsole.scrollHeight;
    checkGameStatus(currentShape);
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
    const winningCombos = [
      [0, 1, 2], [3, 4, 5], [6, 7, 8],
      [0, 3, 6], [1, 4, 7], [2, 5, 8],
      [0, 4, 8], [2, 4, 6]];
  
    return winningCombos.some(combo => {return combo.every(index => gameBoardArr[index] === player);});
  }

  function checkGameStatus(player) {

    if (checkWin(player)) {
        pageConsole.value = pageConsole.value.replace(/\n+$/, "");
        pageConsole.value += "\n\n" + player +" wins!" + "\n\n";
        console.log("\n\n" + player +" wins!" + "\n\n");
        console.scrollTop = pageConsole.scrollHeight;
        gameRunning = false;
        return;
    }
  
    
    if (!gameBoardArr.includes("■")) {
        pageConsole.value = pageConsole.value.replace(/\n+$/, "");
        pageConsole.value += "\n\n" + "It's a tie!" + "\n\n";
        console.log("\n\n" + "It's a tie!" + "\n\n");
        pageConsole.scrollTop = pageConsole.scrollHeight;
        gameRunning = false;
      return;
    }
  }