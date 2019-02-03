//=========================================================
//      SECTION 9 BONUS: CHALLENGING RECURSIVE PROBLEMS
//=========================================================

//---------------------------------------------------------
//          Coding Exercise 20: nestedEvenSum
//---------------------------------------------------------
/*
    Write a recursive function called nestedEvenSum.
    Return the sum of all the even numbers in an object which may contain nested objects.
*/

//---------------------------------------------------------
//                 My Solution
//---------------------------------------------------------

let nestedEvenSum = (obj) => {
    let sum = 0;
    let arr = Object.keys(obj);
    if (arr.length === 0) return 0;
    let firstKey = arr[0];
    if (typeof obj[firstKey] === 'number' && obj[firstKey] % 2 === 0) {
        sum += obj[firstKey];
    }
    if (typeof obj[firstKey] === 'object') {
        sum += nestedEvenSum(obj[firstKey]);
    }
    let {[firstKey]: remove, ...newObject} = obj;
    return sum + nestedEvenSum(newObject);
    // spread operator on udemy didn't work so the following was used
    // delete obj[firstKey];
    // return sum + nestedEvenSum(obj);
};

var obj1 = {
    outer: 2,
    obj: {
      inner: 2,
      otherObj: {
        superInner: 2,
        notANumber: true,
        alsoNotANumber: "yup"
      }
    }
}
  
var obj2 = {
    a: 2,
    b: {b: 2, bb: {b: 3, bb: {b: 2}}},
    c: {c: {c: 2}, cc: 'ball', ccc: 5},
    d: 1,
    e: {e: {e: 2}, ee: 'car'}
};

console.log(nestedEvenSum(obj1)); // 6
console.log(nestedEvenSum(obj2)); // 10