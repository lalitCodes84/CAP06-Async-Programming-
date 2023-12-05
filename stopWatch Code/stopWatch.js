//function of stopwatch
let timer;
let seconds = 0;
let isRunning = false;



function formatTime(timeInSeconds) {
  let hours = Math.floor(timeInSeconds / 3600);
  let minutes = Math.floor((timeInSeconds % 3600) / 60);
  let seconds = timeInSeconds % 60;

  let formattedHours = hours > 0 ? String(hours).padStart(2, '0') + ':' : '';
  let formattedMinutes = (hours > 0 || minutes > 0) ? String(minutes).padStart(2, '0') + ':' : '';
  let formattedSeconds = String(seconds).padStart(2, '0');

  return formattedHours + formattedMinutes + formattedSeconds;
}

function updateDisplay() {
  document.getElementById('time').innerText = formatTime(seconds);
}

function startStopwatch() {
  if (!isRunning) {
    isRunning = true;
    timer = setInterval(function() {
      seconds++;
      updateDisplay();
    }, 1000);
  }
}

function pauseStopwatch() {
  if (isRunning) {
    isRunning = false;
    clearInterval(timer);
  }
}

function resetStopwatch() {
  isRunning = false;
  clearInterval(timer);
  seconds = 0;
  updateDisplay();
}