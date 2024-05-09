
const instructionsContainer = document.querySelector("#instructionsContainer");
const innerContainer = document.querySelector("#innerContainer");
const MakeItGuessContainer = document.querySelector("#MakeItGuessContainer");
const GuessContainer = document.querySelector("#GuessContainer");
const GuessBtn = document.querySelector("#GuessContainer");
let confettiL = document.getElementById("confettiL");
let confettiR = document.getElementById("confettiR");


const userInput =  document.querySelector("#UserInput");
const computerResponse = document.querySelector("#computerResponse");

let computerGenNumber;

let center = 50;
let min = 1;
let max = 100;
let computerWin = false;

ComputerOut.value = center;

function instructionsOpen(){
    innerContainer.style.display = "none";
    instructionsContainer.style.display = "flex";
    
}
function instructionsClose(){
    innerContainer.style.display = "flex";
    instructionsContainer.style.display = "none";

}
function MakeItGuessContainerOpen(){
    innerContainer.style.display = "none";
    MakeItGuessContainer.style.display = "flex";
}
function GuessContainerClose(){
    innerContainer.style.display = "flex";
    MakeItGuessContainer.style.display = "none";
    confettiOFF();
    computerWin = false;
    center = 50;
    min = 1;
    max = 100;
    ComputerOut.value = center;
}

function UserGuessContainerOpen(){
    innerContainer.style.display = "none";
    GuessContainer.style.display = "flex";
    computerNumber();

}
function UserGuessContainerClose(){
    innerContainer.style.display = "flex";
    GuessContainer.style.display = "none";
}


//center is computer guess

const ComputerGuess = () =>{
    if(!computerWin){
    center = Math.floor((min + max) / 2)
    ComputerOut.value = parseInt(center);
    }
}

const Greater = () =>{
    min = center + 1;
    ComputerGuess();
}

const Smaller = () =>{
    max = center - 1;
    ComputerGuess();
}

const Correct = () =>{
    computerWin = true;
    confettiON();
}



const computerNumber = () =>{
    computerGenNumber = Math.round(Math.random()*100);
    console.log(computerGenNumber);
}

const CheckUserNum = () => {
    if(parseInt(userInput.value) > computerGenNumber){
        computerResponse.innerHTML = "My number is greater!";
    }else if(parseInt(userInput.value) > computerGenNumber){
        computerResponse.innerHTML = "My number is smaller!"; 
    }else if(parseInt(userInput.value) == computerGenNumber){
        computerResponse.innerHTML = "Spot On!"; 
    }else{ computerResponse.innerHTML = "ERROR"; }
}


function confettiON(){
    confettiL.src = "Assets/confetti.gif";
    confettiR.src = "Assets/confetti.gif";
}

function confettiOFF(){
    confettiL.src = "";
    confettiR.src = "";
}
