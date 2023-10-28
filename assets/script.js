


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
    question: "Javascript can't make a page interactive.",
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


function setNextQuestion() {
  resetState();
  correctWrongElements.forEach(element => {
    element.remove();
  });
  correctWrongElements = [];

  if (currentQuestionIndex < questions.length) {
    showQuestion(questions[currentQuestionIndex]);
  } else {
    questionElement.textContent = 'Quiz Completed!';
    answerButtons.innerHTML = '';
  }
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

// Function to reset the quiz container
function resetState() {

  clearStatusClass(document.body);
  
  nextButton.classList.add("hide");

  while (answerButtons.firstChild) {
    answerButtons.removeChild(answerButtons.firstChild);
  }
  if (currentQuestionIndex === questions.length - 1) {
    nextButton.textContent = "Finish";
  }
  if (currentQuestionIndex == questions.length) {
    questionElement.textContent = 'Quiz Completed!';
    var hideResponse = document.getElementById('rightOrWrong');
    hideResponse.classList.add('hide');


    
    }
  } 



var correctWrongElements = [];

function selectAnswer(e) {
  var selectedButton = e.target;
  var correct = selectedButton.dataset.correct;
  setStatusClass(document.body, correct);

  if (correct) {
    score++;
  } else {
    score--;
  }

  

  Array.from(answerButtons.children).forEach(button => {
    setStatusClass(button, button.dataset.correct);
  });
  correctWrongElements.forEach(element => {
    element.remove();
  });

  correctWrongElements = [];

  if (correct) {
    var createResponse = document.createElement("h1");
    createResponse.setAttribute('id', 'rightOrWrong');
    createResponse.textContent = "Correct Answer! Well Done!";
    questionContainer.append(createResponse);
    correctWrongElements.push(createResponse);
    nextButton.classList.remove('hide');
    score++;
  } else if (!correct) {
    var createResponse = document.createElement("h1");
    createResponse.setAttribute('id', 'rightOrWrong');
    createResponse.textContent = "Wrong answer, please try again!";
    questionContainer.append(createResponse);
    correctWrongElements.push(createResponse);
    score--;
  }
}

function setStatusClass(element, correct) {
  clearStatusClass(element);
  if (correct) {
    element.classList.add("correct");
  } else {
    element.classList.add("wrong");
  }
}

function clearStatusClass(element) {
  element.classList.remove("correct");
  element.classList.remove("wrong");

}



