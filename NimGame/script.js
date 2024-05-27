const gamePlayContainer = document.querySelector("#gamePlayContainer");
const modeContainer = document.querySelector("#modeContainer");
const backBtn = document.querySelector("#back");
let sizeSlider = document.getElementById("sizeRange");
let yourNumOfSticks = document.getElementById("you");
let BotsNumOfSticks = document.getElementById("bot");
let sticksLeft = document.getElementById("sticksLeft");
let confirmBtn = document.getElementById("confirmBtn");
let BlockLeft = document.querySelector(".BlockLeft");
let BlockRight = document.querySelector(".BlockRight");
let gameMode;
let sticksToRemove = 0;
let numOfSticks = 100;
let proccesing = false;
let playerSticks = parseInt(yourNumOfSticks.innerHTML);
let remainingSticks =  numOfSticks - sticksToRemove;
let updatedRemaining;
let botSticks;

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

function play(id) {
    gameMode = id;
    gamePlayContainer.style.display = "flex";
    modeContainer.style.display = "none";
    yourNumOfSticks.innerHTML = "1";
    sizeSlider.value = 1;
    sticksLeft.innerHTML = "How many?";
    sticksLeft.style.display = "flex";
    confirmBtn.style.display = "block";
}

function back() {
    if(proccesing==false){
    gamePlayContainer.style.display = "none";
    modeContainer.style.display = "flex";
    sticksLeft.innerHTML = "";
    sticksLeft.style.display = "none";
    sticksToRemove = 0;
    proccesing=false;
    for (let i = 0; i < stickElement.length; i++) { // loop to go over all sticks
        stickElement[i].style.backgroundColor = "black";
    }
}else{
    backBtn.style.borderColor = "red"; sleep(400).then(() => {backBtn.style.borderColor = "transparent"})
}
}

function sliderChange(value) {
    yourNumOfSticks.innerHTML = value;
}

function confirm() {
    playerSticks = parseInt(yourNumOfSticks.innerHTML);
    sticksToRemove += playerSticks;
    remainingSticks = numOfSticks - sticksToRemove;
    if(remainingSticks <= 0){
        sticksLeft.innerHTML = "You won!";
        removedSticksUpdate();
        return;
    }
    if(proccesing==false){
        removedSticksUpdate();
        BlockRight.style.borderStyle = "solid";
        BlockLeft.style.borderStyle = "none";
        proccesing=true;
        confirmBtn.style.display = "none";
    if (gameMode === "modeStupid") {
        sticksLeft.innerHTML = "Thinking";
        sleep(100).then(() => {
            sticksLeft.innerHTML = "Thinking.";
            sleep(200).then(() => {
                sticksLeft.innerHTML = "Thinking..";
                sleep(300).then(() => {
                    sticksLeft.innerHTML = "Thinking...";
                    botSticks = Math.floor(Math.random() * 9) + 1;
                    sticksToRemove += botSticks;
                    BotsNumOfSticks.innerHTML = botSticks;
                    updatedRemaining = numOfSticks - sticksToRemove;
                    if (updatedRemaining <= 0) {
                        sticksLeft.innerHTML = "Bot won!";
                        proccesing=false;
                        removedSticksUpdate();
                        return;
                    }
                    sticksLeft.innerHTML = `${updatedRemaining} Sticks Left`;
                    proccesing=false;
                    removedSticksUpdate();
                    confirmBtn.style.display = "block";
                    BlockRight.style.borderStyle = "none";
                    BlockLeft.style.borderStyle = "solid";
                });
            });
        });
    } else {
        sticksLeft.innerHTML = "Thinking";
        sleep(100).then(() => {
            sticksLeft.innerHTML = "Thinking.";
            sleep(200).then(() => {
                sticksLeft.innerHTML = "Thinking..";
                sleep(300).then(() => {
                    sticksLeft.innerHTML = "Thinking...";
                    botSticks = 10 - playerSticks;
                    sticksToRemove += botSticks;
                    BotsNumOfSticks.innerHTML = botSticks;
                    updatedRemaining = numOfSticks - sticksToRemove;
                    if (updatedRemaining <= 0) {
                        sticksLeft.innerHTML = "Bot won!";
                        proccesing=false;
                        removedSticksUpdate();
                        return;
                    }
                    sticksLeft.innerHTML = `${updatedRemaining} Sticks Left`;
                    proccesing=false;
                    removedSticksUpdate();
                    confirmBtn.style.display = "block";
                    BlockRight.style.borderStyle = "none";
                    BlockLeft.style.borderStyle = "solid";
                });
            });
        });
    }


}}


function removedSticksUpdate() {
    for (let i = 0; i < sticksToRemove; i++) { // loop to go over all sticks
        stickElement[i].style.backgroundColor = "red";
    }
}