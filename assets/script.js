
//start button
var startQuizButton = document.getElementById('start-btn');
startQuizButton.addEventListener('click', startQuiz);

//question container
var questionContainerEl = document.getElementById("question-container");



// when clicking an answer
var answerButtons = document.getElementById("answer-buttons");
answerButtons.addEventListener("click", selectAnswer);

// the questions
var questionArr = ["1. which is not correct syntax?","2. which is not correct syntax?","3. which is not correct syntax?","4. which is not correct syntax?","5. which is not correct syntax?",]

// targeting id question to change the question 
var newQuestion = document.getElementById("question");

var answerArray = ["Wrong, You Need To Study More!","Correct!",];


function startQuiz() {
  console.log("start");
  startQuizButton.setAttribute("class","hide");
  questionContainerEl.setAttribute("class", "visible")
  setNextQuestion();
}

function setNextQuestion() {
  newQuestion.textContent = questionArr[0];
  
}

function selectAnswer() {
  var answerP = document.createElement('h1');
  answerP.textContent = answerArray[1];
  questionContainerEl.append(answerP);
  setNextQuestion();
}

// make a for loop to cycle through questions when a person selects an answer?
// for (var i = 0; i < questionArr.length; i++) {

// };