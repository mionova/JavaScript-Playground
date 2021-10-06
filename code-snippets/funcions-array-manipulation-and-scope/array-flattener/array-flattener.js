/***************************
Array flattener activity
****************************/

/*
Define a function arrayFlattener with a 2d array as parameter:[1,[2,3],4,5]
Return a new 1 dimensional array like, [1,2,3,4]*/


function arrayFlattener(arr) {
  const arr1 = arr;

  return arr1.flat();

}

//testing
console.log(arrayFlattener([1, [2, 3], 4, 5]));

//testing
if (typeof module !== "undefined") {
  module.exports = {
    arrayFlattener,
  };
}