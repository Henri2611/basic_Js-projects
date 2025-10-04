let homeScore = document.getElementById("home");
let guestScore = document.getElementById("guest");
let startBtn = document.getElementById("start");
let timer = document.getElementById("timer");
let pauseBtn = document.getElementById("pause");

//Scoreboard variables
let teamName = "";
let value;
let scoreHome = 0;
let scoreGuest = 0;

// Timer variables
let currentTime = 600; // 10 minutes
let isRunning = false;
let repeater;

//function to add points based on team name
function addPoints(teamName, value) {
  if (teamName === "A") {
    let results = (scoreHome += value);
    return (homeScore.textContent = results);
  } else if (teamName === "B") {
    let results = (scoreGuest += value);
    return (guestScore.textContent = results);
  }
}

// Helper function to format timer as MM:SS
function formatTime(totalSeconds) {
  let minutes = Math.floor(totalSeconds / 60);
  let seconds = totalSeconds % 60;

  if (minutes < 10) minutes = "0" + minutes;
  if (seconds < 10) seconds = "0" + seconds;

  return minutes + ":" + seconds;
}

// Update the DOM initially
timer.textContent = formatTime(currentTime);
homeScore.textContent = scoreHome;
guestScore.textContent = scoreGuest;

//start timer

function startTimer() {
  if (!isRunning) {
    isRunning = true;
    repeater = setInterval(() => {
      currentTime--;
      timer.textContent = formatTime(currentTime);

      // stop when time runs out
      if (currentTime <= 0) {
        clearInterval(repeater);
        isRunning = false;
      }
    }, 1000);
  }
}

// PAUSE TIMER
function pauseTimer() {
  clearInterval(repeater);
  isRunning = false;
}

//reset the score and timer back to start game
function reset() {
  //reset scores
  scoreHome = 0;
  homeScore.textContent = scoreHome;
  scoreGuest = 0;
  guestScore.textContent = scoreGuest;

  //reset timer
  clearInterval(repeater);
  isRunning = false;
  currentTime = 600; // reset back to 10 minutes
  timer.textContent = formatTime(currentTime);
}
