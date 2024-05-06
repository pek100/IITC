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


let questionNumber = 0;
let currentQuestion;
let score = 0;
let correctAnswers = 0;

let currentValue = 2000;
let topicQuestions;
let activation = false;



const startTimer = () => {
  interval = setInterval(() => {
    if (currentValue > 0) {
      currentValue--;
      timeLeft.style.width = currentValue * 0.57 + "px";
      if(currentValue > 1600){timeLeft.style.background = "#006affa4";}
      if(currentValue < 1600){timeLeft.style.background = "rgba(145, 255, 0, 0.643)";}
      if(currentValue < 1000){timeLeft.style.background = "rgba(255, 251, 0, 0.643)";}
      if(currentValue < 400){timeLeft.style.background = "rgba(255, 0, 0, 0.643)";}
    } else {
      clearInterval(interval);
      answerCheck(); // Call on timeout
    }
  }, 10);
  setInterval(function () {
    if(currentValue < 1900){
    timeLeft.style.visibility = (timeLeft.style.visibility == 'hidden' ? '' : 'hidden'); }else{timeLeft.style.visibility == 'visible'}
}, 200);
 
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
    exitGame();
  }
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
  clearInterval(interval);
  questionNumber = 0;
  score = 0;
  scoreLbl.innerHTML = score;
  correctAnswers = 0;
  correctAnsLbl.innerHTML = correctAnswers + "/" + questionNumber;
  gameContainer.style.display = "none";
  menuContainer.style.visibility = "visible";
}