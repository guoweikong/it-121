//Create an array that contains the variables Rock, Paper, and Scissors.
let arr = ["Rock", "Paper", "Scissors"];

//Set up a variable that generates a random number 0-2 for computer
let randomNumber = Math.random();
randomNumber = randomNumber * 3;
let RandomNumber = Math.floor(randomNumber);

//Set a input prompt for player
let input = prompt("Please enter a number: \n 0 - Rock; \n 1 - Paper; \n 2 - Scissors" );
input = Number(input);

//Create a variable to hold a response message to the user
let yourOutput = "Your Selection: ";
let computerOutput = "Computer's Selection: ";

//Create a condition to handle the player and computer selections & Use conditions to apply the game logic and return the correct results
if(input == RandomNumber) {
  answer = "It's a tie.";
} else if (input > RandomNumber) {
  if(input == 2 && RandomNumber == 0) {
    answer = "Computer Win!";
  } else {
    answer = "You Win!";
  }
} else if (input < RandomNumber) {
  if(input == 0 && RandomNumber == 2) {
    answer = "You Win!";
  } else {
   answer = "Computer Win!";
  }
} 

console.log(yourOutput + arr[input] + " , " + computerOutput + arr[RandomNumber] + " .\n" + answer);

