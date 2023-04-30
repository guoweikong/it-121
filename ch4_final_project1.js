let ask = prompt("Please enter a number 0 - 100");
ask = Number(ask);

let randomNumber = Math.random();
randomNumber = randomNumber * 100;
let RandomNumber = Math.floor(randomNumber);

if(ask < RandomNumber) {
  console.log("Your picked number: " + ask +" is less than the dynamic number: " + RandomNumber);
} else if(ask == RandomNumber) {
  console.log("Your picked number: " + ask +" is equal to the dynamic number: " + RandomNumber);
} else if (ask > RandomNumber) {
  console.log("Your picked number: " + ask +" is greater than the dynamic number: " + RandomNumber); 
}