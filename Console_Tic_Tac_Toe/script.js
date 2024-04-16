
const pageConsole = document.getElementById('pageConsole');
const Label = document.getElementById('turnLabel');
let board = document.getElementById("board");
let confettiL = document.getElementById("confettiL");
let confettiR = document.getElementById("confettiR");
let refreshButton = document.getElementById("Refresh");
let sizeSlider = document.getElementById("sizeRange");
let NameInputs = document.getElementById("NameInputs");
let sizeSliderValue;
let lastLabel;
let labelShow = true;
let haveNames = false;
let namePattern = /([a-zA-Z0-9_\s]+)/i; 


let gameBoardArr = [];
let Console2DArray;
let currentShape = "○";
let X_Name = "×";
let O_Name = "○";
let gameRunning;
let row;

let setBoardSize = 9;
let setBoardSizeSqrt = Math.round(Math.sqrt(setBoardSize));

function sliderChange(val) {
    setBoardSize = val*val;
    setBoardSizeSqrt = val;
    gameBoardArr = new Array(setBoardSize).fill('■'); // Update gameBoardArr
    confettiOFF();
    delBoard();
    buildPage(setBoardSize, val);
    }


buildPage(setBoardSize, setBoardSizeSqrt);


function delBoard(){
    while (board.firstChild) {
        board.removeChild(board.firstChild);
    }
}

function buildPage(BoardSize, BoardSizeSqrt){
   
    //  create Board
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
  
    refreshButton.onclick = function() {
        RefreshAll();
    };


    
    Refresh(setBoardSize);
}

function RefreshAll(){
    confettiOFF();
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
}

function RefreshAllPlus(){
        NameInputs.style.display = "none";
        RefreshAll();

        document.getElementById("pageConsole").style.animation = "flyIn";

        refreshButton.style.background = "#9FEF00";
        refreshButton.style.color = "black";
        refreshButton.innerHTML = "Refresh";
        refreshButton.onclick = () => {
            RefreshAll();
        };

        sizeSlider.id = "sizeRange";
        sizeSlider = document.getElementById("sizeRange");
        sizeSlider.type = "range";
        value = sizeSliderValue;
        sizeSlider.onclick = () => {
        };

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
    if (!namePattern.test(X_Name) || !namePattern.test(O_Name) && X_Name == null || O_Name == null) {
        turnLabel.innerHTML = `<font size="6", color="#93dd00">${currentShape}</font>'s Turn!`;  
    } else {
        haveNames = true;
        currentShape == "×" ? turnLabel.innerHTML = `<font size="5", color="#93dd00">${X_Name}'s</font> Turn!` : turnLabel.innerHTML = `<font size="5", color="#93dd00">${O_Name}'s</font> Turn!`;
    }

    turnLabel.addEventListener('mouseover', () => {
            if (turnLabel.innerHTML != "Enter Your Names"){lastLabel = turnLabel.innerHTML};
            turnLabel.innerHTML = "Enter Your Names";
            turnLabel.style.color = "grey";
            turnLabel.style.cursor = "pointer";
        
    }); 

    turnLabel.addEventListener('mouseout', () => {
        if (turnLabel.innerHTML == "Enter Your Names" && labelShow == true) {
            turnLabel.innerHTML = lastLabel;
            turnLabel.style.color = "white";
        }
    });

    turnLabel.addEventListener('click', () => {
        NameInputs.style.display = "flex";
        turnLabel.style.color = "white";
        labelShow = false;
        delBoard();
        turnLabel.innerHTML = "Enter Your Names";
        refreshButton.style.background = "#1573E2";
        refreshButton.style.color = "white";
        refreshButton.innerHTML = "Set Names";
        refreshButton.onclick = () => {
            turnLabel.innerHTML = lastLabel;
            labelShow = true;
            RefreshAllPlus();
            X_Name = document.getElementById("X_Name").value;
            O_Name = document.getElementById("O_Name").value;
            changeName();
        };

        sizeSliderValue = sizeSlider.value;
        sizeSlider.id = "Slider2Buttom";
        sizeSlider = document.getElementById("Slider2Buttom");
        sizeSlider.type = "button";
        sizeSlider.value = "Cancel";
        sizeSlider.onclick = () => {
            turnLabel.innerHTML = lastLabel;
            labelShow = true;
            RefreshAllPlus();
        };

        //buildPage(setBoardSize, setBoardSizeSqrt);
});

}



function ShapeChange() {
    currentShape == "○"? currentShape = "×" : currentShape = "○";  
    changeName();
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

    console.log("\n\n");
    pageConsole.scrollTop = pageConsole.scrollHeight;
    if (checkGameStatus(currentShape)) {
        gameRunning = false;}
        
    ShapeChange();
    
}

function logBoard(gameBoardArr) {
    Console2DArray = [];
    setBoardSizeSqrt = Math.round(Math.sqrt(setBoardSize));
    for (let i = 0; i < gameBoardArr.length; i += setBoardSizeSqrt) {
        row = gameBoardArr.slice(i, i + setBoardSizeSqrt);
        Console2DArray.push(row);
    }

    console.table(Console2DArray);
}



function checkWin(player) {
    // Check rows
    for (let i = 0; i < gameBoardArr.length; i++) {
        if (i % setBoardSizeSqrt < setBoardSizeSqrt - 2 && gameBoardArr[i] === player && gameBoardArr[i + 1] === player && gameBoardArr[i + 2] === player) {
            return true;
        }
    }

    // Check columns
    for (let i = 0; i < gameBoardArr.length - 2 * setBoardSizeSqrt; i++) {
        if (gameBoardArr[i] === player && gameBoardArr[i + setBoardSizeSqrt] === player && gameBoardArr[i + 2 * setBoardSizeSqrt] === player) {
            return true;
        }
    }

    // Check main diagonal
    for (let i = 0; i < gameBoardArr.length - 2 * setBoardSizeSqrt; i++) {
        if (i % setBoardSizeSqrt < setBoardSizeSqrt - 2 && gameBoardArr[i] === player && gameBoardArr[i + setBoardSizeSqrt + 1] === player && gameBoardArr[i + 2 * setBoardSizeSqrt + 2] === player) {
            return true;
        }
    }

    // Check secondary diagonal
    for (let i = 0; i < gameBoardArr.length - 2 * setBoardSizeSqrt; i++) {
        if (i % setBoardSizeSqrt > 1 && gameBoardArr[i] === player && gameBoardArr[i + setBoardSizeSqrt - 1] === player && gameBoardArr[i + 2 * setBoardSizeSqrt - 2] === player) {
            return true;
        }
    }

    return false;
}


function confettiON(){
    confettiL.src = "Assets/confetti.gif";
    confettiR.src = "Assets/confetti.gif";
}

function confettiOFF(){
    confettiL.src = "";
    confettiR.src = "";
}


  function checkGameStatus(player) {

    if (checkWin(player)) {
        if (player == "○") {
            player = O_Name;
        }else{
            player = X_Name;
        }
        pageConsole.value = pageConsole.value.replace(/\n+$/, "");
        pageConsole.value += "\n\n" + player +" Wins!" + "\n\n";
        console.log("\n\n" + player +" Wins!" + "\n\n");
        console.scrollTop = pageConsole.scrollHeight;
        confettiON();
        return true;
        
    }else if(!gameBoardArr.includes("■")) {
        pageConsole.value = pageConsole.value.replace(/\n+$/, "");
        pageConsole.value += "\n\n" + "It's A Tie!" + "\n\n";
        console.log("\n\n" + "It's A Tie!" + "\n\n");
        pageConsole.scrollTop = pageConsole.scrollHeight;
        gameRunning = false;
      return;
    }
  }