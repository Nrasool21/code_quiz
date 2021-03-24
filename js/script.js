const timerEl = document.getElementById("timer");
const introSection = document.getElementById("intro-section");
const startBtn = document.getElementById("start-button");

let secondsLeft = 60;

const setTime = function () {
  const callBack = function () {
    if (secondsLeft > 0) {
      secondsLeft = secondsLeft - 1;
    }

    timerEl.textContent = secondsLeft;
  };
  const timerInterval = setInterval(callBack, 1000);
};

//setTime();

startBtn.addEventListener("click", setTime);
