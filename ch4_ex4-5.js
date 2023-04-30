// let randomNumber = Math.random();
//    randomNumber = randomNumber * 10;
// let RandomNumber = Math.floor(randomNumber);
// console.log(RandomNumber);

let prize = prompt ("Please select a number from 0 - 10.");
prize = Number(prize);
console.log(prize);

let output = "My Selection: " ;

switch(prize) {
    case 0 :
    case 1:
    case 2:
    case 3:
  answer= "little number";
  break;

case 4:
case 5:
case 6:
answer= "middle number";

default:
answer= "I am not sure what it is.";

    
}

console.log(output + prize + answer);



