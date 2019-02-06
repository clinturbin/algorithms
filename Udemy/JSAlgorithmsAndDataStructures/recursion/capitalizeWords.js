//=========================================================
//      SECTION 9 BONUS: CHALLENGING RECURSIVE PROBLEMS
//=========================================================

//---------------------------------------------------------
//          Coding Exercise 21: capitalizeWords
//---------------------------------------------------------
/*
    Write a recursive function called capitalizedWords.
    Given an array of words, return a new array containing each word capitalized.
*/

//---------------------------------------------------------
//                 My Solution
//---------------------------------------------------------

let capitalizeWords = (arr) => {
    let result = [];
    if (arr.length === 0) return [];
    result.push(arr[0].toUpperCase());
    return result.concat(capitalizeWords(arr.slice(1)));
};

let words = ['i', 'am', 'learning', 'recursion'];
console.log(capitalizeWords(words)); // ['I', 'AM', 'LEARNING', 'RECURSION']