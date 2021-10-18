// Step 1: use slice to find elements in an array
//TODO: return last 3 elements of givenArray
function sliceElements(givenArray) {

  let arrayLength = givenArray.length;

  return givenArray.slice(arrayLength - 3, arrayLength);
}

// Step 2: use splice to find elements in an array
//TODO: remove the last element of givenArray and add element1 and element2 at that position
function spliceElements(givenArray, element1, element2) {
  let arrayLength = givenArray.length;
  givenArray.splice(arrayLength - 1, 1, element1, element2);
  return givenArray;
}

// Step 3: use splice to find elements in an array
//TODO: convert givenString into an array of words
function splitElements(givenString) {
  let newArray;
  newArray = givenString.split(' ');
  return newArray;
}

//test for Step 1
console.log(sliceElements([1, 2, 'MIT Certificate', 4, 5])); // should retrun ["MIT Certificate", 4, 5]
console.log(sliceElements([1, 2, [3, 4], 'Javascript'])); // should retrun [2, [3, 4], "Javascript"]

//test for Step 2
var arr = [1, 2, 'MIT Certificate', 4, 5];
console.log(spliceElements(arr, 'Javascript', 101)); // should return [1, 2, "MIT Certificate", 4, "Javascript", 101]

//test for Step 3
var str = 'MIT Certificate loves Javascript ';
console.log(splitElements(str)); // should return ["MIT", "Certificate", "loves", "Javascript"]