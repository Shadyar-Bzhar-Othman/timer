let seconds = 0;
let timerInterval;
let timerActive = false;
const timerDisplay = document.getElementById("timerDisplay");
const startBtn = document.getElementById("startBtn");
const stopBtn = document.getElementById("stopBtn");
const resetBtn = document.getElementById("resetBtn");

function startTimer() {
  timerActive = true;
  timerInterval = setInterval(() => {
    seconds++;
    displayTime();
  }, 1000);
}

function stopTimer() {
  timerActive = false;
  clearInterval(timerInterval);
}

function resetTimer() {
  stopTimer();
  seconds = 0;
  displayTime();
}

function displayTime() {
  const minutes = Math.floor(seconds / 60);
  const remainingSeconds = seconds % 60;
  timerDisplay.textContent = `${minutes}:${
    remainingSeconds < 10 ? "0" : ""
  }${remainingSeconds}`;
}

startBtn.addEventListener("click", () => {
  if (!timerActive) {
    startTimer();
  }
});

stopBtn.addEventListener("click", () => {
  if (timerActive) {
    stopTimer();
  }
});

resetBtn.addEventListener("click", () => {
  resetTimer();
});
