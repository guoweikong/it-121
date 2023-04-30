// let randomNumber = Math.random();
// console.log(randomNumber);

// randomNumber = randomNumber * 10;
// console.log(randomNumber);

// // RandomNumber = Math.floor(randomNumber);
// // console.log(RandomNumber);

// RandomNumber = Math.ceil(randomNumber);
// console.log(RandomNumber);


let randomNumber = Math.random();
console.log(randomNumber);

randomNumber = randomNumber * 6;
console.log(randomNumber);

RandomNumber = Math.floor(randomNumber);
console.log(RandomNumber);
// let answer = 6;
let question = prompt("pick a 0-5 number");
console.log(question);

switch(RandomNumber){
  case 0 :
    answer = "zero";
    break;
  case 1 :
    answer = "one";
    break;
  case 2 :
    answer = "two";
    break;
  case 3 :
    answer = "three";
    break;
  case 4 :
    answer = "four";
    break;
  case 5 :
    answer = "five";
    break;
  default:
    answer = "I don't know what it is.";
}

console.log(question + answer);