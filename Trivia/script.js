const body = document.body;
const questionCard = document.getElementById("questionCard");
const Card1 = document.getElementById("Card1");
const Card2 = document.getElementById("Card2");
const Card3 = document.getElementById("Card3");
const Card4 = document.getElementById("Card4");
const menuContainer = document.getElementById("menuContainer");
const gameContainer = document.getElementById("gameContainer");
const scoreLbl = document.getElementById("score");
const correctAnsLbl = document.getElementById("correctAns");
const timeLeft = document.getElementById("progressCard");
const infoCard = document.getElementById("infoCard");

const cardContainer = document.getElementById("cardContainer");
const progressCard = document.getElementById("progressCard");
const exit = document.getElementById("exit");
const MainMenu = document.getElementById("MainMenu");

let questionNumber = 0;
let currentQuestion;
let score = 0;
let correctAnswers = 0;

let currentValue = 2000;
let topicQuestions;
let activation = false;
// let blink;

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

const startTimer = () => {
  interval = setInterval(() => {
    if (currentValue > 0) {
      currentValue--;  ;
      timeLeft.style.width = currentValue/20 *0.6 + "%";
      if(currentValue > 1975){timeLeft.style.borderRadius= "12px"}else{timeLeft.style.borderRadius= "0px";}
      if(currentValue > 1600){timeLeft.style.background = "linear-gradient(1turn, #43ff7285, #5555bd00)";}
      // if(currentValue < 1600){timeLeft.style.background = "linear-gradient(1turn, #318aff85, #5555bd00)";}
      if(currentValue < 1000){timeLeft.style.background = "linear-gradient(1turn, #ffbb0085, #5555bd00)";}
      if(currentValue < 400){timeLeft.style.background = "linear-gradient(1turn, #ff000085, #5555bd00)"; }
      if(currentValue < 2){clearInterval(blink)};
    } else {
      timeLeft.style.borderRadius= "12px"
      clearInterval(interval);
      answerCheck(); // Call on timeout
    }
  }, 10);
  blink = setInterval(function () {
    if(currentValue<400){
    timeLeft.style.visibility = (timeLeft.style.visibility == 'hidden' ? '' : 'hidden'); 
  }else{
    timeLeft.style.visibility = 'visible'; 
  }
}, 100);

}

const getQuestion = (questionNumber) => {
  currentQuestion = topicQuestions[questionNumber];
  questionCard.innerHTML = currentQuestion.question;
  Card1.innerHTML = currentQuestion.optionA;
  Card2.innerHTML = currentQuestion.optionB;
  Card3.innerHTML = currentQuestion.optionC;
  Card4.innerHTML = currentQuestion.optionD;
};


function answerCheck(userAnswer) {
  clearInterval(blink);
  clearInterval(interval);
  if (userAnswer === currentQuestion.answer) {
    correctAnswers++;
    score += Math.floor(currentValue/200) + 1;
    scoreLbl.innerHTML = score;
  }
  correctAnsLbl.innerHTML = correctAnswers + "/" + (questionNumber+1);

  questionNumber++;

  if (questionNumber < topicQuestions.length) {
    getQuestion(questionNumber);
    currentValue = 2000;
    startTimer();
  } else {
    // Game over
    // exitGame();
    GameEnd();
  }
}
function BackToMainMenu(){
  infoCard.style.width = "60%";
  infoCard.style.height = "170px";
  infoCard.style.top = "7%";
  infoCard.style.borderRadius = "12px";
  infoCard.style.background = "#5373a18f";

  cardContainer.style.display = "grid";
  progressCard.style.display = "flex";
  exit.style.display = "flex";
  MainMenu.style.display = "none";

  exitGame();
}

function GameEnd(){
  infoCard.style.width = "400px";
  infoCard.style.height = "400px";
  infoCard.style.top = "30%";
  infoCard.style.borderRadius = "50%";
  infoCard.style.background ="linear-gradient(-0.6turn, #c2ffe869, #5555bdb6);"

  cardContainer.style.display ="none";
  progressCard.style.display ="none";
  exit.style.display ="none";
  sleep(400).then(()=>  {MainMenu.style.display ="flex"})
}


function startGame(topic) {
  if (topic === "topicHTML") {
    topicQuestions = questionsHTML;
  } else if (topic === "topicCSS") {
    topicQuestions = questionsCSS;
  } else if (topic === "topicJS") {
    topicQuestions = questionsJS;
  }

  getQuestion(questionNumber);
  gameContainer.style.display = "flex";
  menuContainer.style.visibility = "hidden";
  gameContainer.style.visibility = "visible";
  currentValue = 2000;
  startTimer();
}

function exitGame() {
  clearInterval(blink);
  clearInterval(interval);
  questionNumber = 0;
  score = 0;
  scoreLbl.innerHTML = score;
  correctAnswers = 0;
  correctAnsLbl.innerHTML = correctAnswers + "/" + questionNumber;
  gameContainer.style.display = "none";
  menuContainer.style.visibility = "visible";
}