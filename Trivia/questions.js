const questionsHTML = [

    {
      question: "Which HTML attribute specifies an alternate text for an image, if the image cannot be displayed?",
      optionA: "src",
      optionB: "alt",
      optionC: "title",
      optionD: "longdesc",
      answer: "B"
    },
    {
      question: "What is the correct HTML element for inserting a line break?",
      optionA: "&lt;break>",
      optionB: "&lt;lb>",
      optionC: "&lt;br>",
      optionD: "&lt;newline>",
      answer: "C"
    },
    {
      question: "Which HTML element is used to define important text?",
      optionA: "&lt;important>",
      optionB: "&lt;b>",
      optionC: "&lt;strong>",
      optionD: "&lt;i>",
      answer: "C"
    },
    {
      question: "What does HTML stand for?",
      optionA: "Hyper Trainer Marking Language",
      optionB: "Hyper Text Markup Language",
      optionC: "Hyperlinks and Text Markup Language",
      optionD: "Home Tool Markup Language",
      answer: "B"
    },
    {
      question: "Which doctype is correct for HTML5?",
      optionA: "&lt;!DOCTYPE HTML PUBLIC>",
      optionB: "&lt;!DOCTYPE html>",
      optionC: "&lt;!DOCTYPE>",
      optionD: "&lt;!DOCTYPE html5>",
      answer: "B"
    },
    {
      question: "Which HTML element represents the root of an HTML document?",
      optionA: "&lt;root>",
      optionB: "&lt;base>",
      optionC: "&lt;html>",
      optionD: "&lt;head>",
      answer: "C"
    },
    {
      question: "Which HTML element is used to specify a footer for a document or section?",
      optionA: "&lt;bottom>",
      optionB: "&lt;footer>",
      optionC: "&lt;section>",
      optionD: "&lt;div>",
      answer: "B"
    },
    {
      question: "In HTML, which attribute is used to specify that an input field must be filled out before submitting the form?",
      optionA: "placeholder",
      optionB: "required",
      optionC: "validate",
      optionD: "necessary",
      answer: "B"
    },
    {
      question: "Which HTML element is used to define a part of a text in an alternate voice or mood?",
      optionA: "&lt;voice>",
      optionB: "&lt;mood>",
      optionC: "&lt;cite>",
      optionD: "&lt;em>",
      answer: "D"
    },
    {
      question: "Which HTML element is used to display a scalar measurement within a known range?",
      optionA: "&lt;gauge>",
      optionB: "&lt;range>",
      optionC: "&lt;measure>",
      optionD: "&lt;meter>",
      answer: "D"
    }
  ];
  
  const questionsCSS = [
    {
      question: "Which CSS property is used to change the text color of an element?",
      optionA: "font-color",
      optionB: "text-color",
      optionC: "color",
      optionD: "text-style",
      answer: "C"
    },
    {
      question: "What does 'font-weight' control in CSS?",
      optionA: "The font family",
      optionB: "The thickness of the font",
      optionC: "The height of the font",
      optionD: "The spacing between characters",
      answer: "B"
    },
    {
      question: "Which CSS property controls the visibility of an element?",
      optionA: "display",
      optionB: "visibility",
      optionC: "opacity",
      optionD: "view",
      answer: "B"
    },
    {
      question: "What is the purpose of the 'z-index' property in CSS?",
      optionA: "To set the zoom level",
      optionB: "To add a zoom effect",
      optionC: "To control the stacking order of elements",
      optionD: "To set the horizontal alignment",
      answer: "C"
    },
    {
      question: "Which CSS property is used to make the text bold?",
      optionA: "font-style",
      optionB: "text-style",
      optionC: "font-weight",
      optionD: "text-weight",
      answer: "C"
    },
    {
      question: "What is the default position value in CSS?",
      optionA: "absolute",
      optionB: "fixed",
      optionC: "relative",
      optionD: "static",
      answer: "D"
    },
    {
      question: "Which CSS property is used to add space around sections of content?",
      optionA: "spacing",
      optionB: "margin",
      optionC: "border",
      optionD: "padding",
      answer: "B"
    },
    {
      question: "Which CSS property is used to set the background color of an element?",
      optionA: "color",
      optionB: "background-color",
      optionC: "background-image",
      optionD: "background",
      answer: "B"
    },
    {
      question: "What is the correct CSS syntax to make all &lt;p> elements have a font size of 14px?",
      optionA: "p {text-size: 14px;}",
      optionB: "p {font-size: 14px;}",
      optionC: "paragraph {font-size: 14px;}",
      optionD: "&lt;p style=\"font-size: 14px;\">",
      answer: "B"
    },
    {
      question: "Which CSS property is used to create rounded corners?",
      optionA: "corner-radius",
      optionB: "edge-radius",
      optionC: "border-radius",
      optionD: "border-curve",
      answer: "C"
    }
  ];
  
  const questionsJS = [
    {
      question: "Which method is used to serialize an object into a JSON string in JavaScript?",
      optionA: "JSON.stringify()",
      optionB: "JSON.parse()",
      optionC: "JSON.toObject()",
      optionD: "JSON.fromString()",
      answer: "A"
    },
    {
      question: "What is the output of 'console.log(typeof null)' in JavaScript?",
      optionA: "'null'",
      optionB: "'undefined'",
      optionC: "'object'",
      optionD: "'NaN'",
      answer: "C"
    },
    {
      question: "Which JavaScript event is fired when the document has been completely loaded and parsed?",
      optionA: "onload",
      optionB: "onready",
      optionC: "oncomplete",
      optionD: "ondocumentloaded",
      answer: "A"
    },
    {
      question: "How do you create a new Promise in JavaScript?",
      optionA: "new Promise()",
      optionB: "Promise.new()",
      optionC: "Promise()",
      optionD: "new Promise.create()",
      answer: "A"
    },
    {
      question: "Which operator is used to check both the value and the type of a variable in JavaScript?",
      optionA: "==",
      optionB: "===",
      optionC: "=",
      optionD: "!==",
      answer: "B"
    },
    {
      question: "What will 'console.log(0.1 + 0.2 === 0.3)' output in JavaScript?",
      optionA: "true",
      optionB: "false",
      optionC: "undefined",
      optionD: "NaN",
      answer: "B"
    },
    {
      question: "Which JavaScript method can be used to handle errors in asynchronous code?",
      optionA: "try/catch",
      optionB: ".catch()",
      optionC: "onerror",
      optionD: "handleError()",
      answer: "B"
    },
    {
      question: "What is the use of the 'this' keyword in JavaScript?",
      optionA: "Refers to the current object",
      optionB: "Refers to the previous object",
      optionC: "Refers to the global object",
      optionD: "Refers to the new object",
      answer: "A"
    },
    {
      question: "Which method is used to remove the last element from an array and return that element in JavaScript?",
      optionA: "pop()",
      optionB: "push()",
      optionC: "shift()",
      optionD: "unshift()",
      answer: "A"
    },
    {
      question: "What is the correct syntax for adding comments in JavaScript?",
      optionA: "&lt;!-- This is a comment -->",
      optionB: "// This is a comment",
      optionC: "/* This is a comment */",
      optionD: "' This is a comment",
      answer: "B"
    }
  ];
  