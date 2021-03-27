const timerEl = document.getElementById("timer");
const container = document.getElementById("container");
const introSection = document.getElementById("intro-section");
const startBtn = document.getElementById("start-button");

let index = 0;

let secondsLeft = 60;

const setTime = function () {
  const callBack = function () {
    if (secondsLeft === 0) {
      clearInterval(timerInterval);
      //remove question
      container.removeChild(document.getElementById("question"));
      //append scores Form to the DOM
      container.append(createAndAppendForm());
    }

    if (secondsLeft > 0) {
      secondsLeft = secondsLeft - 1;
    }

    timerEl.textContent = secondsLeft;
  };

  const timerInterval = setInterval(callBack, 1000);
};

//build quiz card

const questions = [
  {
    title: "Inside which HTML element do we put the JavaScript?",
    choices: ["scripting", "script", "js", "javascript"],
    correctAnswer: "script",
  },

  {
    title: "How can you add a comment in a JavaScript?",
    choices: [
      "this is a comment",
      "//this is a comment",
      "<!--this is a comment-->",
      "this is a comment?",
    ],
    correctAnswer: "//this is a comment",
  },
  {
    title: "How can you detect the client's browser name?",
    choices: [
      "browser.name",
      "client.name",
      "navigator.appName",
      "document.name",
    ],
    correctAnswer: "browser.name",
  },
  {
    title: "Which event occurs when the user clicks on an HTML element?",
    choices: ["onchange", "onmouseclick", "onmouseover", "onclick"],
    correctAnswer: "onclick",
  },

  {
    title: "What does Boolean return if the statement is correct?",
    choices: ["true", "false", "null", "unidentified"],
    correctAnswer: "true",
  },
];

const createChoices = function (choices) {
  const parentDiv = document.createElement("div");

  const createOptionAppend = function (option) {
    const div = document.createElement("div");
    const button = document.createElement("button");
    button.setAttribute("data-answer", option);
    parentDiv.setAttribute("id", "main");
    button.textContent = option;

    div.appendChild(button);
    parentDiv.appendChild(div);
  };

  choices.forEach(createOptionAppend);

  return parentDiv;
};

const verifyChoice = function (event) {
  const target = event.target;
  const currentTarget = event.currentTarget;

  if (target.matches("button")) {
    const answer = target.getAttribute("data-answer");
    const correctAnswer = currentTarget.getAttribute("data-answer");

    if (answer === correctAnswer) {
      index += 1;
      container.removeChild(document.getElementById("question"));
      renderQuestion();
    }

    if (answer != correctAnswer) {
      secondsLeft = secondsLeft - 10;

    }
  }
};

const createQuestion = function (question) {
  const questionBoxContainer = document.createElement("div");
  questionBoxContainer.setAttribute("id", "question");
  questionBoxContainer.setAttribute("data-answer", question.correctAnswer);

  const h2 = document.createElement("h2");
  h2.textContent = question.title;

  const choices = createChoices(question.choices);
  questionBoxContainer.append(h2, choices);

  questionBoxContainer.addEventListener("click", verifyChoice);

  return questionBoxContainer;
};

const renderQuestion = function () {
  if (index < questions.length) {
    const seriesOfQuestion = createQuestion(questions[index]);

    container.appendChild(seriesOfQuestion);

  } else {
    alert("it works");
  }
  
};

const startQuiz = function () {
  //remove intro-section div
  container.removeChild(introSection);

  //questions.forEach(renderQuestion);

  //renderQuestion();
  //creat question div
  const question = createQuestion(questions[0]);
  //append question div to the DOM
  container.appendChild(question);
};

const createAndAppendForm = function () {
  const scoresDiv = document.createElement("div");
  scoresDiv.setAttribute("id", "form-div");

  const h3 = document.createElement("h3");
  h3.textContent = "All done!";

  const displayScoresDiv = document.createElement("div");
  displayScoresDiv.setAttribute("id", "display-scores");

  const scoresForm = document.createElement("form");
  const initialsInput = document.createElement("input");
  initialsInput.setAttribute("id", "name-input");
  initialsInput.setAttribute("name", "Enter Initials:");
  initialsInput.setAttribute("type", "text");
  const scoreBtn = document.createElement("button");
  scoreBtn.setAttribute("id", "submit-score-btn");
  
  scoresDiv.append(h3, displayScoresDiv, scoresForm);
  scoresForm.append(initialsInput, scoreBtn);
  

    scoreBtn.addEventListener("click", highScoresPage);

    return scoresDiv;
  
};

const renderScoresForm = function () {

};

const highScoresPage = (event) => {
  event.preventDefault();
};

startBtn.addEventListener("click", setTime);
startBtn.addEventListener("click", startQuiz);
