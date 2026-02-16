// Event listeners
document.querySelector("button").addEventListener("click", gradeQuiz);
shuffleQ1Choices();
function shuffleQ1Choices() {
  let q1Choices = ["font-color", "color", "text-color", "fontColor"];

  q1Choices = _.shuffle(q1Choices);
  console.log(q1Choices);


    for(let i of q1Choices){


    

  let radioElement = document.createElement("input");
    radioElement.type = "radio";
    radioElement.name = "q1"
    radioElement.value = i;

    let labelElement =  document.createElement("label");
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
console.log("numberElement",numberElement );







function gradeQuiz() {

  let userAnswer1 = document.querySelector("input[name=q1]:checked").value;
  let userAnswer2 = document.querySelector("#q2").value;
  let userAnswer3 = document.querySelector("#selectInput").value;
  let userAnswer4 = document.querySelector("#q4").value;
  

  if (userAnswer1 == "color") {
  
  }else{
    document.querySelector("#").style.backgroundColor = "red";

  }
  if (userAnswer2 == "color"){

    textboxElement.style.backgroundColor = "green";

  }else{
    textboxElement.style.backgroundColor = "red";

  }
  if (userAnswer3 == "op1"){

    dropDownElement.style.backgroundColor = "green";

  }else{
    dropDownElement.style.backgroundColor = "red";
  }

  if(userAnswer4 == "2026"){

    numberElement.style.backgroundColor = "green";

  }else{
    numberElement.style.backgroundColor = "red";
  }

  
}


