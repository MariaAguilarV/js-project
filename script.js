// random number generated
var randomNum = Math.floor(Math.random() * 100 + 1);
console.log("numRandom = " + randomNum);


// counting the number of guesses
var numGuesses = 5;
var win = false;
var hot = false;
var medium = false;
var cold = false;
var classUserNum;

function play(){

// number guessed by user
  var userNum = document.getElementById("userNumber").value;
  console.log("User number = " + userNum);

  if (userNum == randomNum){
    win = true;
  }
  else if ((userNum < 1) || (userNum > 100)){
    document.getElementById("guideUser").innerHTML = "Hey! We said numbers between 1 and 100 :(";
  }
  else if (userNum > randomNum){
      console.log("Try with a smaller number!");
      document.getElementById("guideUser").innerHTML = "Try with a smaller number! ";
      numGuesses --;
      if (userNum - randomNum <=5) {
        hot = true;
        medium = false;
        cold = false;
      }
      else if (userNum - randomNum <=10) {
        medium = true;
        hot = false;
        cold = false;
      }
      else {
        cold=true;
        hot = false;
        medium = false;
      }
  }
  else {
      console.log("Try with a bigger number!");
      document.getElementById("guideUser").innerHTML = "Try with a bigger number! ";
      numGuesses --;
      if (randomNum - userNum <=5) {
        hot = true;
        medium = false;
        cold = false;
      }
      else if (randomNum - userNum <=10) {
        medium = true;
        hot = false;
        cold = false;
      }
      else {
        cold=true;
        hot = false;
        medium = false;
      }
  }

  console.log ("Number of guesses: " + numGuesses);
  document.getElementById("numGuess").innerHTML = "You have " + numGuesses + " left guesses";

  if ((win == true) || (numGuesses == 0)) {
    //if win is true then show winner message
    if (win == true){
      console.log("Winner!");
      document.getElementById("results").querySelector("p").innerHTML = "YAY! You guessed it right! The number was " + randomNum;
    }
    //if numGuesses is 0 then show looser meesage
    else if (numGuesses == 0){
      console.log("Looser!");
      document.getElementById("results").querySelector("p").innerHTML = "Wooo there are no more guesses. Try again!";
    }
    //always hide everything and show the "Play Again" button
    document.getElementById("guideUser").innerHTML = "";
    document.getElementById("numGuess").innerHTML = "";
    document.querySelector("form").style.visibility = "hidden";
    document.getElementById("results").querySelector("input").type = "submit";
    document.querySelector("#userNumber").setAttribute("class", "userNum");
  }
  else {
    if (hot == true){
      console.log("Hot");
      document.querySelector("#userNumber").setAttribute("class", "hot");
    }
    else if (medium == true){
      console.log("Medium");
      document.querySelector("#userNumber").setAttribute("class", "medium");
    }
    else if (cold == true){
      console.log("Cold");
      document.querySelector("#userNumber").setAttribute("class", "cold");
    }

  }

  event.preventDefault();

}

function playAgain(){
  randomNum = Math.floor(Math.random() * 100 + 1);
  console.log("numRandom = " + randomNum);
  numGuesses = 5;
  win = false;
  hot = false;
  cold = false;
  medium = false;
  document.querySelector("form").style.visibility = "visible";
  document.getElementById("numGuess").innerHTML = "You have 5 left guesses";
  document.getElementById("guideUser").innerHTML = "";
  document.getElementById("results").querySelector("p").innerHTML = "";
  document.getElementById("results").querySelector("input").type = "hidden";
  document.getElementById("userNumber").value = null;
  document.querySelector("#userNumber").setAttribute("class", "userNum");
}
