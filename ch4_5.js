// else if statement:

// let activity = "Lunch";

// if(activity === "Get up") {  
// console.log("It is 6:30AM");
// } else if(activity === "Breakfast") {  
// console.log("It is 7:00AM");
// } else if(activity === "Drive to work") { 
// console.log("It is 8:00AM");
// } else if(activity === "Lunch") {  
// console.log("It is 12.00PM");
// } else if(activity === "Drive home") {  
// console.log("It is 5:00PM")
// } else if(activity === "Dinner") {  
// console.log("It is 6:30PM");} 



// switch statement:

// let activity = "Dinner";

// switch(activity) {
//   case "Get up":
//     console.log("It is 6:30AM");
//     break;
//   case "Breakfast":
//     console.log("It is 7:00AM");
//     break;
//   case "Drive to work":
//     console.log("It is 8:00AM");
//     break;
//   case "Lunch":
//     console.log("It is 12.00PM");
//     break;
//   case "Drive home":
//     console.log("It is 5:00PM");
//     break;
//   case "Dinner":
//     console.log("It is 6:30PM")
//     break;
// }


let activity = "Whtch TV";

switch(activity) {
  case "Get up":
    console.log("It is 6:30AM");
    break;
  case "Breakfast":
    console.log("It is 7:00AM");
    break;
  case "Drive to work":
    console.log("It is 8:00AM");
    break;
  case "Lunch":
    console.log("It is 12.00PM");
    break;
  case "Drive home":
    console.log("It is 5:00PM");
    break;
  case "Dinner":
    console.log("It is 6:30PM")
    break;
  default:
    console.log("I cannot determine the current time.");
    break;
}