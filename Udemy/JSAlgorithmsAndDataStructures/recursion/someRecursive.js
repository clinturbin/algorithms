//=========================================================
//      SECTION 9 BONUS: CHALLENGING RECURSIVE PROBLEMS
//=========================================================

//---------------------------------------------------------
//          Coding Exercise 17: someRecursive
//---------------------------------------------------------
/*
    Write a recursive function called someRecursive which accepts an array and a callback.
    The function returns true if a single value in the array returns true when passed to the callback.
    Otherwise it returns false.
*/

//---------------------------------------------------------
//                 My Solution
//---------------------------------------------------------
const isOdd = val => val % 2 !== 0;

let someRecursive = (arr, callback) => {
    if (arr.length === 0) return false;
    return callback(arr[0]) || someRecursive(arr.slice(1), callback);
};

console.log(someRecursive([1,2,3,4], isOdd)); // true
console.log(someRecursive([4,6,8,9], isOdd)); // true
console.log(someRecursive([4,6,8], isOdd)); // false
console.log(someRecursive([4,6,8], val => val > 10)); // false


//---------------------------------------------------------
//                 Colt's Solution
//---------------------------------------------------------

function someRecursive(array, callback) {
    if (array.length === 0) return false;
    if (callback(array[0])) return true;
    return someRecursive(array.slice(1),callback);
}