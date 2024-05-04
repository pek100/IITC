    const body = document.body;
    const questionCard = document.getElementById("questionCard");
    const Card1 = document.getElementById("Card1");
    const Card2 = document.getElementById("Card2");
    const Card3 = document.getElementById("Card3");
    const Card4 = document.getElementById("Card4");
    
    const menuContainer = document.getElementById("menuContainer");
    const gameContainer = document.getElementById("gameContainer");
  
    let questionNumber = 0;
    let currentQuestion;
  
    const Questions = [
      {
        question: "What is the default display value for an HTML <div> element?",
        optionA: "inline",
        optionB: "table",
        optionC: "flex",
        optionD: "block",
        answer: "D"
      },
      {
        question: "Which HTML5 element is intended for marking up standalone content that is only indirectly related to the page's main content?",
        optionA: "article",
        optionB: "section",
        optionC: "aside",
        optionD: "footer",
        answer: "C"
      },
      {
        question: "What does CSS stand for?",
        optionA: "Computer Style Sheets",
        optionB: "Creative Style System",
        optionC: "Cascading Style Sheets",
        optionD: "Colorful Style Statements",
        answer: "C"
      },
      {
        question: "Which of the following is not a valid CSS unit for font-size?",
        optionA: "em",
        optionB: "percent",
        optionC: "vw",
        optionD: "degrees",
        answer: "D"
      },
      {
        question: "In JavaScript, what will Boolean(0) return?",
        optionA: "true",
        optionB: "null",
        optionC: "undefined",
        optionD: "false",
        answer: "D"
      },
      {
        question: "What does the acronym 'API' stand for in web development?",
        optionA: "Application Programming Interface",
        optionB: "Advanced Programming Interface",
        optionC: "Automated Protocol Integration",
        optionD: "Application Protocol Interface",
        answer: "A"
      },
      {
        question: "Which CSS property is used to control the spacing between lines of text within an element?",
        optionA: "line-height",
        optionB: "letter-spacing",
        optionC: "word-spacing",
        optionD: "text-spacing",
        answer: "A"
      },
      {
        question: "What is the purpose of the HTML <meta> tag with the attribute charset set to 'UTF-8'?",
        optionA: "It specifies the character encoding for the document.",
        optionB: "It defines the font size for the entire page.",
        optionC: "It sets the background color of the page.",
        optionD: "It controls the spacing between paragraphs.",
        answer: "A"
      },
      {
        question: "Which JavaScript method is used to add an element to the end of an array?",
        optionA: "push()",
        optionB: "pop()",
        optionC: "shift()",
        optionD: "unshift()",
        answer: "A"
      },
      {
        question: "What does the CSS property 'box-sizing: border-box;' do?",
        optionA: "It includes padding and border in the total width of an element.",
        optionB: "It excludes padding and border from the total width of an element.",
        optionC: "It adjusts the height of an element based on its content.",
        optionD: "It changes the font size of an element.",
        answer: "A"
      }
    ];
  
    const getQuestion = (questionNumber) => {
      currentQuestion = Questions[questionNumber];
      questionCard.innerHTML = currentQuestion.question;
      Card1.innerHTML = currentQuestion.optionA;
      Card2.innerHTML = currentQuestion.optionB;
      Card3.innerHTML = currentQuestion.optionC;
      Card4.innerHTML = currentQuestion.optionD;
    }

    // Card1.onclick = () => {
    //     answerCheck('A');
    // };
    // Card2.onclick = () => {
    //     answerCheck('B');
    // };
    // Card3.onclick = () => {
    //     answerCheck('C');
    // };
    // Card4.onclick = () => {
    //     answerCheck('D');
    // };

  
    function answerCheck(userAnswer){ 
      questionNumber++;
      getQuestion(questionNumber); 
       if (userAnswer == currentQuestion.answer) {
       
       }
    }

    getQuestion(questionNumber)
  

  function startGame(){
    menuContainer.style.visibility = "hidden";
    gameContainer.style.visibility = "visible";
  }