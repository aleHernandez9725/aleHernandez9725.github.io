let score = 0;
let check = "img/check.jpeg";
let wrong = "img/wrong.png";

let attempts = localStorage.getItem("quizAttempts");

// If first time, set to 0
if (attempts === null) {
  attempts = 0;
} else {
  attempts = Number(attempts);
}

document.querySelector("#attemptCount").textContent =
  "Times Taken: " + attempts;

document.querySelector("button").addEventListener("click", gradeQuiz);
shuffleQ1Choices();
function shuffleQ1Choices() {
  let q1Choices = [
    "Lamar Jackson",
    "Patrick Mahomes",
    "Geno Smith",
    "Drake Maye",
  ];

  q1Choices = _.shuffle(q1Choices);
  console.log(q1Choices);

  for (let i of q1Choices) {
    let radioElement = document.createElement("input");
    radioElement.type = "radio";
    radioElement.name = "q1";
    radioElement.value = i;

    let labelElement = document.createElement("label");
    labelElement.textContent = i;

    labelElement.prepend(radioElement);

    document.querySelector("#q1ChoicesDiv").append(labelElement);

    console.log(labelElement);
  }
} //for

// Get the input from the textbox
let textboxElement = document.querySelector("#q2");
console.log("textboxElement:", textboxElement);

//dropdown menu
let dropDownElement = document.querySelector("#selectInput");
console.log("dropDownElement", dropDownElement);

//number input type
let numberElement = document.querySelector("#q4");
console.log("numberElement", numberElement);

//volume input type
let volumeElement = document.querySelector("#q5");
let volumeValue = document.querySelector("#volValue");

volumeElement.addEventListener("input", function () {
  volumeValue.textContent = volumeElement.value;
});

function gradeQuiz() {
  let selectedRadio = document.querySelector("input[name=q1]:checked");
  let userAnswer2 = document.querySelector("#q2").value;
  let userAnswer3 = document.querySelector("#selectInput").value;
  let userAnswer4 = document.querySelector("#q4").value;
  let userAnswer5 = document.querySelector("#q5").value;

  let q1Img = document.querySelector("#q1Img");
  let q2Img = document.querySelector("#q2Img");
  let q3Img = document.querySelector("#q3Img");
  let q4Img = document.querySelector("#q4Img");
  let q5Img = document.querySelector("#q5Img");

  attempts++;
  localStorage.setItem("quizAttempts", attempts);

  document.querySelector("#attemptCount").textContent =
    "Times Taken: " + attempts;

  if (selectedRadio && selectedRadio.value == "Lamar Jackson") {
    selectedRadio.parentElement.style.backgroundColor = "green";
    score += 20;
    q1Img.src = check;
  } else {
    selectedRadio.parentElement.style.backgroundColor = "red";
    q1Img.src = wrong;
  }
  if (userAnswer2 == "Akron" || userAnswer2 == "akron") {
    textboxElement.style.backgroundColor = "green";
    score += 20;
    q2Img.src = check;
  } else {
    textboxElement.style.backgroundColor = "red";
    q2Img.src = wrong;
  }
  if (userAnswer3 == "op1") {
    dropDownElement.style.backgroundColor = "green";
    score += 20;
    q3Img.src = check;
  } else {
    dropDownElement.style.backgroundColor = "red";
    q3Img.src = wrong;
  }

  if (userAnswer4 == "2022") {
    numberElement.style.backgroundColor = "green";
    score += 20;
    q4Img.src = check;
  } else {
    numberElement.style.backgroundColor = "red";
    q4Img.src = wrong;
  }
  if (userAnswer5 == "35") {
    q5Container.style.backgroundColor = "green";
    score += 20;
    q5Img.src = check;
  } else {
    q5Container.style.backgroundColor = "red";
    q5Img.src = wrong;
  }
  console.log(score);
  if (score < 80) {
    document.querySelector("#finalScore").textContent =
      "Better Luck Next Time. Your Final Score: " + score + " / 100";
  } else {
    document.querySelector("#finalScore").textContent =
      "CONGRATS YOU PASSED!! Your Final Score: " + score + " / 100";
  }
}
