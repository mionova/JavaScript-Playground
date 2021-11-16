/***********************
Recursion: Binary search
***********************/


/*
Task:
Complete the binary search implementation within the searchNumber function. Account for:
-loop complete and number not found - return false
-number found - return true
-number not found and loop not complete - call the function again on either the upper half or lower half of the previous iterations search and check same cases again
*/

/**
 * Function that generates an array of numbers with length equalling the specified arrayLength parameter. It then returns that array.
 * @param arrayLength, defaulted to 100 if nothing is passed in, it will determine the length of the array that is returned.
 */
const generateAlphabetArray = (charA = 'a', charZ = 'z') => {
    let a = [],
        j = charZ.charCodeAt(0);
    for (let i = charA.charCodeAt(0); i <= j; ++i) {
        a.push(String.fromCharCode(i));
    }
    return a;
}


const searchForAlphabeticalIndex = ([stringToFindIndexForFirstLetter], alphabetArray = generateAlphabetArray()) => {
    // These variables are incremented every time we iterate the binary and linear searches. As an iteration comes with the cost of computational time, 
    // the one with lower iterations and therefore lower number has better performance.
    let binarySearchResults = 0;
    let binarySearchCharacterIndex = -1;
    let linearSearchResults = 0;
    let linearSearchCharacterIndex = -1;

    // makeing sure that stringToFindIndexForFirstLetter var is lowercase as the array generated above does not contain capital letters
    stringToFindIndexForFirstLetter = stringToFindIndexForFirstLetter.toLowerCase();


    // linear search implementation for comparison purposes
    for (let i = 0; i < alphabetArray.length; i++) {
        // iterates the result to show how many iterations and therefore how efficient this search is
        linearSearchResults++;
        if (alphabetArray[i] === stringToFindIndexForFirstLetter) {
            linearSearchCharacterIndex = i;
            break; // jump out of the loop
        }
        // if we get through to the last iteration of the loop without breaking, we set result to -1 for not found
        if (i === alphabetArray.length - 1) {
            linearSearchResults = -1;
        }
    }

    // here is the recursive binary search implementation
    let recursiveBinarySearch = (array, letter, startIndex, endIndex) => {
        binarySearchResults++; // keeps track of how many iterations of Binary Search we have done

        console.log(startIndex, endIndex);
        // base case for not finding the number in the given array, return false if we are on an iteration where the startIndex is greater than the endIndex, 
        if (startIndex > endIndex) {
            binarySearchResults = -1
            return false;
        }

        //finding middle index between the given start and end, Math.floor rounds down to the nearest integer
        let midIndex = Math.floor((startIndex + endIndex) / 2);


        //check if your midIndex is equal to the number being searched for, return true if so
        if (array[midIndex] === letter) {
            binarySearchCharacterIndex = midIndex;
            return true;
        }

        // determine the if/else condition that should house these two return statements that recursively call the same function after splitting the data in one direction or another
        if (letter < array[midIndex]) {
            // continue the recursion by narrowing our search to the lower (start to middle) portion of the dataset
            return recursiveBinarySearch(array, letter, startIndex, midIndex - 1);
        } else {
            // continue the recursion by narrowing our search to the upper (middle to end) portion of the dataset
            return recursiveBinarySearch(array, letter, midIndex + 1, endIndex);
        }

        return false;


    }




    // Invokes the recursiveBinarySearch 
    if (recursiveBinarySearch(alphabetArray, stringToFindIndexForFirstLetter, 0, alphabetArray.length - 1)) {
        console.log('Number: ', stringToFindIndexForFirstLetter, ' found after ', binarySearchResults, ' iterations.')
    } else {
        console.log('Number: ', stringToFindIndexForFirstLetter, ' not found within array: ', alphabetArray);
    }

    // add the necessary inputs and and results to the DOM
    const numberToSearchForElm = document.getElementById('number-searching-for-id') || {};
    numberToSearchForElm.innerText += stringToFindIndexForFirstLetter;

    const arrayOfNumbersToSearchInsideElm = document.getElementById('searched-array-id') || {};
    arrayOfNumbersToSearchInsideElm.innerText += alphabetArray;

    const linearSearchResultsElm = document.getElementById('linear-search-results') || {};
    linearSearchResultsElm.innerText += linearSearchResults;

    const linearSearchPositionElm = document.getElementById('linear-search-position') || {};
    linearSearchPositionElm.innerText += linearSearchCharacterIndex;

    const binarySearchResultsElm = document.getElementById('binary-search-results') || {};
    binarySearchResultsElm.innerText += binarySearchResults;

    const binarySearchPositionElm = document.getElementById('binary-search-position') || {};
    binarySearchPositionElm.innerText += binarySearchCharacterIndex;

    return binarySearchResults;
}

// aside from the numeric parameter passed in which indicates the number to search for, may see how searching different numbers results in different iterations for linear and binary search once the implementation is complete
// note: searchForAlphabeticalIndex is defaulted to generate an array of length 100 which ranges from 0-99, inputting a number outside that range will not be found and should therefore show -1 in the results for both searches.
window.onload = () => {
    searchForAlphabeticalIndex("Way of Kings");
};