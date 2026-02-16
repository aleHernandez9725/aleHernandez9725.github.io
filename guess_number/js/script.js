//Event Listeners
document.querySelector("#guessBtn").addEventListener("click", checkGuess);
document.querySelector("#resetBtn").addEventListener("click", initializeGame);

let randomNumber;
let attempts = 7;
let wins = 0;
let losses = 0;

initializeGame();

function initializeGame() {
  randomNumber = Math.floor(Math.random() * 99) + 1;
  console.log("randomNumber: " + randomNumber);
  attempts = 7;

  //hiding the Reset button
  document.querySelector("#resetBtn").style.display = "none";

  document.querySelector("#guessBtn").style.display = "inline";

  let playerGuess = document.querySelector("#playerGuess");
  playerGuess.focus();
  playerGuess.value = "";

  let feedback = document.querySelector("#feedback");
  feedback.textContent = "";

  document.querySelector("#guesses").textContent = "";
  document.querySelector("#attempts").textContent = "7";
}
function checkGuess() {
  let feedback = document.querySelector("#feedback");
  feedback.textContent = " ";
  let guess = document.querySelector("#playerGuess").value;
  console.log("Player Guess:" + guess);
  if (guess < 1 || guess > 99) {
    feedback.textContent = "Enter a number between 1 and 99";
    feedback.style.color = "red";
    return;
  }
  attempts--;
  console.log("Attempts: " + attempts);
  document.querySelector("#attempts").textContent = attempts;
  feedback.style = "-webkit-text-stroke: 0.5px black;";
  feedback.style.color = "orange";
  if (guess == randomNumber) {
    feedback.textContent = "You Guessed it !You Won";
    feedback.style.color = "darkgreen";
    wins++;
    document.querySelector("#wins").textContent = wins;
    gameOver();
  } else {
    document.querySelector("#guesses").textContent += guess + " ";
    if (attempts == 0) {
      feedback.textContent = "Sorry You lost!";
      feedback.style.color = "red";
      losses++;
      document.querySelector("#losses").textContent = losses;
      gameOver();
    } else if (guess > randomNumber) {
      feedback.textContent = "Guess was  High";
    } else {
      feedback.textContent = "Guess was low";
    }
  }
  function gameOver() {
    let guessBtn = document.querySelector("#guessBtn");
    let resetBtn = document.querySelector("#resetBtn");
    guessBtn.style.display = "none";
    resetBtn.style.display = "inline";
  }
}
