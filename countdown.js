var timer;
var timeInSeconds;
var isPaused = false;

function startTimer() {
  var hoursInput = parseInt(prompt("Enter the number of hours:"));
  var minutesInput = parseInt(prompt("Enter the number of minutes:"));
  var secondsInput = parseInt(prompt("Enter the number of seconds:"));

  if (isNaN(hoursInput) || isNaN(minutesInput) || isNaN(secondsInput)) {
    alert("Invalid input. Please enter valid numbers.");
    return;
  }

  timeInSeconds = (hoursInput * 3600) + (minutesInput * 60) + secondsInput;
  timer = setInterval(updateTimer, 1000);
}

function updateTimer() {
  if (!isPaused) {
    var hours = Math.floor(timeInSeconds / 3600);
    var minutes = Math.floor((timeInSeconds % 3600) / 60);
    var seconds = timeInSeconds % 60;

    document.getElementById("timer").textContent =
      formatTime(hours) + ":" + formatTime(minutes) + ":" + formatTime(seconds);

    if (timeInSeconds <= 0) {
      clearInterval(timer);
      alert("Countdown finished!");
      document.getElementById("timer").textContent = "00:00:00";
    }

    timeInSeconds--;
  }
}

function formatTime(time) {
  return time.toString().padStart(2, "0");
}

function pauseTimer() {
  isPaused = !isPaused;
}

function resetTimer() {
  clearInterval(timer);
  document.getElementById("timer").textContent = "00:00:00";
  isPaused = false;
}
