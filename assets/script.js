


// Define an array of questions
var questions = [
  {
    question: "Which syntax is wrong?",
    answers: [
      { text: "<p></p>", correct: false },
      { text: "<html></html>", correct: false },
      { text: "<img", correct: true },
      { text: "<script></script>", correct: false }
    ]
  },
  {
    question: "What does DOM stand for?",
    answers: [
      { text: "Document Objection Model ", correct: false },
      { text: "Door Open Model", correct: false },
      { text: "Donation Object Method", correct: false },
      { text: "Document Object Model", correct: true }
    ]
  },
  {
    question: "What does HTML stand for?",
    answers: [
      { text: "Hidden Text Milage Language", correct: false },
      { text: "Heavy Text Markup Language", correct: false },
      { text: "Hyper Text Markup Language", correct: true },
      { text: "Hello Telegram Milage Lanyard", correct: false }
    ]
  },
  {
    question: "Javascript can't make a page interactive. True or false",
    answers: [
      { text: "false", correct: true },
      { text: "true", correct: false },

    ]
  },
  {
    question: "CSS stands for what?",
    answers: [
      { text: "Cascading Simple Style", correct: false },
      { text: "Color Simple Sheet", correct: false },
      { text: "Color Style Sheet", correct: false },
      { text: "Cascading Style Sheet", correct: true }
    ]
  }
];

// Get DOM elements
var startButton = document.getElementById("start-btn");
var nextButton = document.getElementById("next-btn");
var questionContainer = document.getElementById("question-container");
var questionElement = document.getElementById("question");
var answerButtons = document.getElementById("answer-buttons");

// Track current question and score
var currentQuestionIndex = 0;
var score = 0;

// Add event listeners to buttons
startButton.addEventListener("click", startQuiz);
nextButton.addEventListener("click", () => {
  currentQuestionIndex++;
  
  setNextQuestion();
});

// Function to start the quiz
function startQuiz() {
  startButton.classList.add("hide");
  questionContainer.classList.remove("hide");
  setNextQuestion();
}

// Function to set the next question
function setNextQuestion() {

  resetState();
  showQuestion(questions[currentQuestionIndex]);
}

// Function to display a question and its answer choices
function showQuestion(question) {
  questionElement.textContent = question.question;
  question.answers.forEach(answer => {
    var button = document.createElement("button");
    button.textContent = answer.text;
    button.classList.add("btn");
    if (answer.correct) {
      button.dataset.correct = answer.correct;
    }
    button.addEventListener("click", selectAnswer);
    answerButtons.appendChild(button);
  });
}






// Function to reset the state of the quiz
function resetState() {

  clearStatusClass(document.body);
  nextButton.classList.add("hide");
  
  while (answerButtons.firstChild) {
    answerButtons.removeChild(answerButtons.firstChild);
  }
}




// Function to handle the selection of an answer
function selectAnswer(e) {
  
  var selectedButton = e.target;
  var correct = selectedButton.dataset.correct;
  setStatusClass(document.body, correct);
  Array.from(answerButtons.children).forEach(button => {
    setStatusClass(button, button.dataset.correct);
  });

  if (correct) {
    var createResponse = document.createElement("h1");
    var answerResponseArray = ['correct','wrong'];
    createResponse.textContent = answerResponseArray[0];
    questionContainer.append(createResponse);
    
    score++;
  }
  else if (!correct) {
    var createResponse = document.createElement("h1");
    var answerResponseArray = ['correct','wrong'];
    createResponse.textContent = answerResponseArray[1];
    questionContainer.append(createResponse);
   
    score--;
  } 


// var answerP = document.createElement('h1');
// answerP.textContent = answerResponseArray[1];
// questionContainerEl.append(answerP);

function endQuiz () {
var displayEndMessage = document.createElement('h2');
displayEndMessage.textContent = "You've Finished the quiz! Congrats!"
questionContainer.append(displayEndMessage);
}


  if (currentQuestionIndex === questions.length - 1) {
    nextButton.textContent = "Finish";
  
  }

  if (currentQuestionIndex == questions.length ) {
    endQuiz();
  } else {
    nextButton.classList.remove("hide");
    
  }
}




// Function to set the status class for an element
function setStatusClass(element, correct) {
  clearStatusClass(element);
  if (correct) {
    element.classList.add("correct");
  } else {
    element.classList.add("wrong");
  }
}

// Function to clear the status class of an element
function clearStatusClass(element) {
  element.classList.remove("correct");
  element.classList.remove("wrong");
}

































// //start button
// var startQuizButton = document.getElementById('start-btn');
// startQuizButton.addEventListener('click', startQuiz);

// //question container
// var questionContainerEl = document.getElementById("question-container");



// // targeting id question to change the question 
// var questionEl = document.getElementById('question');

// // when clicking an answer
// var answerButtons = document.getElementById("answer-buttons");
// answerButtons.addEventListener("click", selectCorrectAnswer);


// // message displays when right or wrong answer
// var answerResponseArray = ["Wrong, You Need To Study More!","Correct!",];


// //next button 
// var nextBtn = document.getElementById('next-btn');


// // questions





// function startQuiz() {
//   console.log("start");
//   startQuizButton.setAttribute("class","hide");
//   questionContainerEl.setAttribute("class", "visible")
//   setNextQuestion();
// }

// function setNextQuestion() {
//   showQuestion();
  
// }

// function showQuestion(question) {
//   questionEl.innerText = questions.questions;
// }


// function selectCorrectAnswer() {
//   var answerP = document.createElement('h1');
//   answerP.textContent = answerResponseArray[1];
//   questionContainerEl.append(answerP);
//   setNextQuestion();
// }

























// var startButton = document.querySelector("#start-btn");
// var answerButtons = document.querySelector(".btn");
// var controls = document.querySelector(".controls");
// var container = document.querySelector(".container");
// var questionContainer = document.querySelector("#question-container");
// var questionArray = ["1. Hows it going?","2. Whatsup?","3. will this work?"];
// var answerOptions = ["Good", "Bad", "okay"];

// for(i = 0; i < questionArray.length; i++) {

// }


// startButton.addEventListener("click", function(){
//   startButton.setAttribute("class","hide");
//   controls.setAttribute("class","hide")
//   container.setAttribute("class","hide")


//   var newH1 = document.createElement("h1");
//   newH1.textContent = questionArray[0];
//   document.body.appendChild(newH1);

//   // questionContainer.setAttribute("class","visible");
//   document.body.appendChild(answerButtons);


//   // var addButton = document.createElement("button");
//   // addButton.textContent = answerOptions[0];
//   // document.body.appendChild(addButton);
//   // addButton.setAttribute("id","btn")

//   // var addButton = document.createElement("button");
//   // addButton.textContent = answerOptions[1];
//   // document.body.appendChild(addButton);
//   // addButton.setAttribute("id","btn")

//   // var addButton = document.createElement("button");
//   // addButton.textContent = answerOptions[2];
//   // document.body.appendChild(addButton);
//   // addButton.setAttribute("id","btn")




// })




