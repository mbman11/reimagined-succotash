


// Define an array of questions
const questions = [
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
const startButton = document.getElementById("start-btn");
const nextButton = document.getElementById("next-btn");
const questionContainer = document.getElementById("question-container");
const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");

// Track current question and score
let currentQuestionIndex = 0;
let score = 0;

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
    const button = document.createElement("button");
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
  const selectedButton = e.target;
  const correct = selectedButton.dataset.correct;
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
  };


// var answerP = document.createElement('h1');
// answerP.textContent = answerResponseArray[1];
// questionContainerEl.append(answerP);



  if (currentQuestionIndex === questions.length - 1) {
    nextButton.textContent = "Finish";
  }

  if (currentQuestionIndex === questions.length) {
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

// Function to end the quiz and display the score
function endQuiz() {
  questionContainer.classList.add("hide");
  nextButton.classList.add("hide");
  const resultContainer = document.createElement("div");
  resultContainer.textContent = `You scored ${score} out of ${questions.length} questions.`;
  document.body.append(resultContainer);
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



