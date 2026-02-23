const words = ["javaScript", "python", "java", "html", "css","donut", "lua","pandas","swift"];


let secretWord = "";
let guessedLetters = [];
let wrongCount = 0;
let maxWrong = 6;

const wordDisplay = document.getElementById("wordDisplay");
const input = document.getElementById("letterInput");
const guessBtn = document.getElementById("guessbtn");
const resetBtn = document.getElementById("resetbtn");
const statusMsg = document.getElementById("statusMsg");
const triesLeft = document.getElementById("triesLeft");
const guessedDisplay = document.getElementById("guessedLetters");
const hangmanImg = document.getElementById("hangmanImg");

function startGame() {

  let randomIndex = Math.floor(Math.random() * words.length);
  secretWord = words[randomIndex];

  guessedLetters = [];
  wrongCount = 0;

  document.body.style.backgroundColor = ""; 

  statusMsg.textContent = "Guess a letter!";
  triesLeft.textContent = maxWrong;
  guessedDisplay.textContent = "None";
  hangmanImg.src = "img/hangMan0.png";

  renderWord();
}

function renderWord() {

  let display = "";

  for (let i = 0; i < secretWord.length; i++) {

    let letter = secretWord[i];

    if (guessedLetters.includes(letter)) {
      display += letter + " ";
    } else {
      display += "_ ";
    }
  }

  wordDisplay.textContent = display;
}

function handleGuess() {

  let letter = input.value.toLowerCase();
  input.value = "";

  if (letter === "") {
    return;
  }

  if (guessedLetters.includes(letter)) {
    return;
  }

  guessedLetters.push(letter);

  if (!secretWord.includes(letter)) {
    wrongCount++;
  }


  triesLeft.textContent = maxWrong - wrongCount;

  guessedDisplay.textContent = guessedLetters.join(", ");


  hangmanImg.src = "img/hangman" + wrongCount + ".png";

  renderWord();

  checkGame();
}


function checkGame() {

  let won = true;

  for (let i = 0; i < secretWord.length; i++) {

    if (!guessedLetters.includes(secretWord[i])) {
      won = false;
    }
  }

  if (won) {
    statusMsg.textContent = "You Win!";
    document.body.style.backgroundColor = "green";
  }

  if (wrongCount >= maxWrong) {
    statusMsg.textContent = "You Lost! Word was: " + secretWord;
    document.body.style.backgroundColor = "red";
  }
}


guessBtn.addEventListener("click", handleGuess);
resetBtn.addEventListener("click", startGame);

startGame();





