let zipElement = document.querySelector("#zipCode");

zipElement.addEventListener("change", displayCity);

let userElement = document.querySelector("#name");
userElement.addEventListener("change", userName);

let passElement = document.querySelector("#passW");
passElement.addEventListener("click", suggestedP)



displayStates();
displayCounty();
async function displayStates() {
  let url = "https://csumb.space/api/allStatesAPI.php";
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error("Error accessing API endpoint");
    }
    const data = await response.json();
    console.log(data);
    //alert(data[0].state);

    for (let i of data) {
      let optionEl = document.createElement("option");
      optionEl.textContent = i.state;
      optionEl.value = i.usps;

      document.querySelector("#state").append(optionEl);
    }
  } catch (err) {
    if (err instanceof TypeError) {
      alert("Error accessing API endpoint (network failure)");
    } else {
      alert(err.message);
    }
  } //catch
}

async function displayCity() {
  //alert("displaying city...")
  let zipCode = zipElement.value;
  let url = "https://csumb.space/api/cityInfoAPI.php?zip=" + zipCode;
  let response = await fetch(url);
  let data = await response.json();
  console.log(data);
  //alert(data.city);
  document.querySelector("#city").textContent = data.city;
  document.querySelector("#Lat").textContent = data.latitude;
  document.querySelector("#Long").textContent = data.longitude;
}
async function userName() {
  let user = userElement.value;
  let url = "https://csumb.space/api/usernamesAPI.php?username=" + user;
  let response = await fetch(url);
  let data = await response.json();

  console.log(data);

  document.querySelector("#name").textContent = data.username;

  if (data.available == false) {
    document.querySelector("#errorUser").textContent =
      "Username NOT available ";
  } else {
    document.querySelector("#errorUser").textContent = "Username is Available ";
  }
}
async function displayCounty() {
  let url = "https://csumb.space/api/countyListAPI.php?state=ca";

  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error("Error accessing API endpoint");
    }
    const data = await response.json();
    console.log(data);
  } catch (err) {
    if (err instanceof TypeError) {
      alert("Error accessing API endpoint (network failure)");
    } else {
      alert(err.message);
    }
  }
  
}



async function suggestedP(){
    let url = "https://csumb.space/api/suggestedPassword.php?length=8";
    let response = await fetch(url);
    let data = await response.json();
    console.log(data);

    document.querySelector("#sugg").textContent ="Suggested Password:" + data.password;

    

}
