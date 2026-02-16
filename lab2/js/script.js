document.querySelector("#guessBtn").addEventListener("click", guess);

//Global variables
let randomNumber = Math.floor(Math.random() * 99 + 1);
// generates random number between 1 and 99

let attemptsNumber = 0;
let displayMessage = "something";

function guess() {
  let userGuess = document.querySelector("#userGuess").value;
  //value is only for input elements

  //alert(userGuess);
 

  document.querySelector("#userGuesses").style.color = "red";

  if (attemptsNumber < 7) {

    document.querySelector("#userGuesses").textContent += `${userGuess} `;
    message.textContent = "Game Over";

    if (userGuess > randomNumber) {
      message.textContent = "Guess was too high";

      attemptsNumber++;
    } else if (userGuess < randomNumber) {
      message.textContent = "Guess was too low";

      attemptsNumber++;
    } else if (userGuess == randomNumber) {
      message.textContent = "That was correct";
      document.querySelector("#message").style.color = "green";
    }
   
  }
}
