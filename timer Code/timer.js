
  let timer;
  let hoursInput = document.getElementById('hours');
  let minutesInput = document.getElementById('minutes');
  let secondsInput = document.getElementById('seconds');
  let totalSeconds;

  function startTimer() {
    totalSeconds = parseInt(hoursInput.value) * 3600 + parseInt(minutesInput.value) * 60 + parseInt(secondsInput.value);

    timer = setInterval(function() {
      if (totalSeconds <= 0) {
        clearInterval(timer);
        alert("Timer has ended!");
        resetTimer();
      } else {
        updateDisplay();
        totalSeconds--;
      }
    }, 1000);
  }

  function pauseTimer() {
    clearInterval(timer);
  }

  function resetTimer() {
    clearInterval(timer);
    hoursInput.value = 0;
    minutesInput.value = 0;
    secondsInput.value = 0;
    updateDisplay();
  }

  function updateDisplay() {
    let hours = Math.floor(totalSeconds / 3600);
    let minutes = Math.floor((totalSeconds % 3600) / 60);
    let seconds = totalSeconds % 60;

    hoursInput.value = hours;
    minutesInput.value = minutes;
    secondsInput.value = seconds;
  }
