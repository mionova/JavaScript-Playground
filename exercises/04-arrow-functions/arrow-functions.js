/*************
Arrow function
*************/

/*
Tasks:
1. Convert addFive() to arrow function
2. Convert divideBy() to arrow function
3. Convert logToConsole() to arrow function
*/


function addFive(num) {
  return num + 5;
}
// Convert addFive() to arrow function
let addFive = num => num + 5;



function divideBy(x, y) {
  return x / y;
}
// Convert divideBy() to arrow function
let divideBy = (x, y) =>
  return x / y;



function logToConsole() {
  let msg = "MIT Coding Certificate";
  console.log(msg);
}
// Convert logToConsole() to arrow function
let logToConsole = () => {
  let msg = "MIT Coding Certificate";
  console.log(msg);
}