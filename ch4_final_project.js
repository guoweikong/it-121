let arr = ["Rock", "Paper", "Scissors"];

let randomNumber = Math.random();
randomNumber = randomNumber * 3;
let RandomNumber = Math.floor(randomNumber);

let input = prompt("Please enter a number: \n 0 - Rock; \n 1 - Paper; \n 2 - Scissors" );
input = Number(input);

let yourOutput = "Your Selection: ";

let computerOutput = "Computer's Selection: ";

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

