//=========================================================
//      SECTION 9 BONUS: CHALLENGING RECURSIVE PROBLEMS
//=========================================================

//---------------------------------------------------------
//          Coding Exercise 19: capitalizeFirst
//---------------------------------------------------------
/*
    Write a recursive function called capitalizeFirst.
    Given an array of strings, capitalize the first letter of each string in the array.
*/

//---------------------------------------------------------
//                 My Solution
//---------------------------------------------------------
let capitalizeFirst = (arr) => {
    let newArr = [];
    if (arr.length === 0) return newArr;
    newArr.push(arr[0][0].toUpperCase() + arr[0].slice(1));
    newArr = newArr.concat(capitalizeFirst(arr.slice(1)));
    return newArr;
};

console.log(capitalizeFirst(['car','taco','banana'])); // ['Car','Taco','Banana']