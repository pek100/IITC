
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
let userWin = false;

let numOfTries = 0;

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
    numOfTries = 0;
    computerNumber();

}
function UserGuessContainerClose(){
    innerContainer.style.display = "flex";
    GuessContainer.style.display = "none";
    computerResponse.innerHTML = "";
    userInput.value="";
    userWin = false;
    confettiOFF();
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
    if (userWin == false){
    if (numOfTries != 7){
    if (parseInt(userInput.value) == userInput.value && Math.sign(userInput.value) == 1 && userInput.value<100){
        numOfTries++;
    if( parseInt(userInput.value) < computerGenNumber){
        computerResponse.innerHTML = "My number is greater! Try: " + numOfTries + "/7";
        computerResponse.style.color = "#DCC5B0"; 
    }else if(parseInt(userInput.value) > computerGenNumber){
        computerResponse.innerHTML = "My number is smaller! Try: " + numOfTries + "/7"; 
        computerResponse.style.color = "#81AED8"; 
    }else if(parseInt(userInput.value) == computerGenNumber){
        computerResponse.innerHTML = "Spot On! It took you: " + numOfTries + "/7 tries!";
        computerResponse.style.color = "#98DB9F"; 
        userWin = true;
        confettiON();
    }else{ computerResponse.innerHTML = "ERROR"; 
        computerResponse.style.color = "#DB9898";
    }
}else{
    computerResponse.innerHTML = "My number is a positive integer between 1 - 100...";
    computerResponse.style.color = "#DB9898";
}
} else {
    computerResponse.innerHTML = "Out of tries!";
    computerResponse.style.color = "#DB9898";
}
}}


function confettiON(){
    confettiL.src = "Assets/confetti.gif";
    confettiR.src = "Assets/confetti.gif";
}

function confettiOFF(){
    confettiL.src = "";
    confettiR.src = "";
}
