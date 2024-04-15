
const pageConsole = document.getElementById('pageConsole');
const Label = document.getElementById('turnLabel');
let refreshButton;

let gameBoardArr = [];
let Console2DArray = [];
let currentShape = "O";
let X_Name = null;
let O_Name = null;
let gameRunning;

let setBoardSize = 9;
let setBoardSizeSqrt = Math.round(Math.sqrt(setBoardSize));

function sliderChange(val) {
    setBoardSize = val*val;
    setBoardSizeSqrt = val;
    gameBoardArr = new Array(setBoardSize).fill('■'); // Update gameBoardArr
    delBoard();
    buildPage(setBoardSize, val);
    }


buildPage(setBoardSize, setBoardSizeSqrt);


function delBoard(){
    let board = document.getElementById("board");
    while (board.firstChild) {
        board.removeChild(board.firstChild);
    }
}

function buildPage(BoardSize, BoardSizeSqrt){
   
    //  create Board
    let board = document.getElementById("board");
    board.style.display = "grid";
    board.style.gridTemplateColumns = "1fr ".repeat(BoardSizeSqrt);
    board.style.gridTemplateRows = "1fr ".repeat(BoardSizeSqrt);
    board.style.gap = "10px";
    
    //  create Board Buttons
    for(var i = 0; i < BoardSize; i++) {
        let boardButton = document.createElement("BUTTON");
        board.appendChild(boardButton);
        boardButton.className = i % 2 == 0 ? "TIC" : "TAC";
        boardButton.value = i;

        boardButton.onclick = function() {
            BoardSet(this.value)
        };
        board.appendChild(boardButton);

        // Add event listeners to the button
        boardButton.addEventListener('mouseover', () => {
            if (boardButton.innerHTML == '') {
                boardButton.innerHTML = currentShape;
            }
        });
        boardButton.addEventListener('mouseout', () => {
            if (boardButton.innerHTML !="") {
                boardButton.innerHTML = "";
            }
        });
    }


    //  RefreshButton
    refreshButton = document.getElementById("Refresh"); 
    refreshButton.onclick = function() {
        Refresh(setBoardSize);
        delBoard();
        buildPage(setBoardSize, setBoardSizeSqrt);

        document.getElementById("pageConsole").animate(
            [
              { fontSize: '0px'},
              { fontSize: '80px'},
            ], {
              duration: 340,
            }
          );

        document.getElementById("pageConsole").style.animation = "flyIn";
        
    };


    
    Refresh(setBoardSize);
}


function Refresh(BoardSize) {
    gameRunning = true;
    pageConsole.value = '';
    console.clear();
    gameBoardArr = [];
    for(var i = 0; i < BoardSize; i++) {
        gameBoardArr.push("■");
    }

    BoardOutput(setBoardSizeSqrt);
}


function changeName(){
    let namePattern = /^A-Z*[A-Z]$/i;
    if (!namePattern.test(X_Name) && !namePattern.test(O_Name)) {
        turnLabel.innerHTML = `${currentShape}'s Turn!`;  
    } else {
        if (currentShape == "X") {
            X_Name = turnLabel.innerHTML;
        } else {
            O_Name = turnLabel.innerHTML;
        }
        currentShape == "X" ? turnLabel.innerHTML = `${X_Name}'s Turn!` : turnLabel.innerHTML = `${O_Name}'s Turn!`;
    }

    turnLabel.addEventListener('mouseover', () => {
        if (turnLabel.innerHTML == `${currentShape}'s Turn!`) {
            turnLabel.innerHTML = "Enter Your Name";
            turnLabel.style.color = "grey";
            turnLabel.contentEditable = true;
        }
    });

    turnLabel.addEventListener('mouseout', () => {
        if (turnLabel.innerHTML == "Enter Your Name") {
            turnLabel.innerHTML = `${currentShape}'s Turn!`;
            turnLabel.style.color = "white";
            turnLabel.contentEditable = false;
        }
    });

    turnLabel.addEventListener('click', () => {
        if (turnLabel.innerHTML == "Enter Your Name") {
            turnLabel.style.color = "white";
            turnLabel.innerHTML = "";
        }
    });

    turnLabel.addEventListener('focusout', () => {
        if (turnLabel.innerHTML != "") {            
            if (currentShape == "X") {

                X_Name = turnLabel.innerHTML;
                turnLabel.innerHTML = `${X_Name}'s Turn!`;
            } else {
                O_Name = turnLabel.innerHTML;
                turnLabel.innerHTML = `${O_Name}'s Turn!`;
            }
        } else {
            currentShape == "X" ? turnLabel.innerHTML = `${currentShape}'s Turn!` : turnLabel.innerHTML = `${currentShape}'s Turn!`;
        }
    });
}


function ShapeChange() {
    currentShape == "O"? currentShape = "X" : currentShape = "O";  
    changeName();
    checkGameStatus(currentShape);
}



function BoardSet(buttonValue){
    if (gameBoardArr[buttonValue] == "■" && gameRunning == true){
        gameBoardArr[buttonValue] = currentShape;

        BoardOutput(setBoardSizeSqrt);
        
        
    }
}

function BoardOutput(BoardSizeSqrt) {
    pageConsole.value += '\n\n';
    console.log("\n\n");
    
    for (let i = 0; i < gameBoardArr.length; i++) {
        pageConsole.value += gameBoardArr[i];
        if ((i + 1) % BoardSizeSqrt === 0) pageConsole.value += "\n";
        else pageConsole.value += " ";
    }

    BoardSizeSqrt > 4 ? pageConsole.value += '\n': pageConsole.value += '\n\n';

    logBoard(gameBoardArr);
    
    console.table(Console2DArray);
    console.log("\n\n");
    pageConsole.scrollTop = pageConsole.scrollHeight;
    if (checkGameStatus(currentShape)) {
        gameRunning = false;}
        
    ShapeChange();
    
}

function logBoard(gameBoardArr) {
    let n = Math.sqrt(gameBoardArr.length); // Square root of the array length
    let twoDimensionalArr = [];

    for (let i = 0; i < gameBoardArr.length; i += n) {
        let row = gameBoardArr.slice(i, i + n);
        twoDimensionalArr.push(row);
    }

    console.table(twoDimensionalArr);
}



function checkWin(player) {
    let size = Math.sqrt(gameBoardArr.length);

    // Check rows
    for (let i = 0; i < gameBoardArr.length; i++) {
        if (i % size < size - 2 && gameBoardArr[i] === player && gameBoardArr[i + 1] === player && gameBoardArr[i + 2] === player) {
            return true;
        }
    }

    // Check columns
    for (let i = 0; i < gameBoardArr.length - 2 * size; i++) {
        if (gameBoardArr[i] === player && gameBoardArr[i + size] === player && gameBoardArr[i + 2 * size] === player) {
            return true;
        }
    }

    // Check main diagonal
    for (let i = 0; i < gameBoardArr.length - 2 * size; i++) {
        if (i % size < size - 2 && gameBoardArr[i] === player && gameBoardArr[i + size + 1] === player && gameBoardArr[i + 2 * size + 2] === player) {
            return true;
        }
    }

    // Check secondary diagonal
    for (let i = 0; i < gameBoardArr.length - 2 * size; i++) {
        if (i % size > 1 && gameBoardArr[i] === player && gameBoardArr[i + size - 1] === player && gameBoardArr[i + 2 * size - 2] === player) {
            return true;
        }
    }

    return false;
}


  function checkGameStatus(player) {

    if (checkWin(player)) {
        pageConsole.value = pageConsole.value.replace(/\n+$/, "");
        pageConsole.value += "\n\n" + player +" Wins!" + "\n\n";
        console.log("\n\n" + player +" Wins!" + "\n\n");
        console.scrollTop = pageConsole.scrollHeight;
        return true;
        
    }
  
    
    if (!gameBoardArr.includes("■")) {
        if(checkWin(player)){
        pageConsole.value = pageConsole.value.replace(/\n+$/, "");
        pageConsole.value += "\n\n" + "It's A Tie!" + "\n\n";
        console.log("\n\n" + "It's A Tie!" + "\n\n");
        pageConsole.scrollTop = pageConsole.scrollHeight;
        gameRunning = false;
        }else{
        pageConsole.value = pageConsole.value.replace(/\n+$/, "");
        pageConsole.value += "\n\n" + "So Close!" + "\n\n";
        console.log("\n\n" + "So Close!" + "\n\n");
        pageConsole.scrollTop = pageConsole.scrollHeight;
        }
      return;
    }
  }