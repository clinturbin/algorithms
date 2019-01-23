//=========================================================
//      SECTION 9 BONUS: CHALLENGING RECURSIVE PROBLEMS
//=========================================================

//---------------------------------------------------------
//          Coding Exercise 18: flatten
//---------------------------------------------------------
/*
    Write a recursive function called flatten which accepts an array of arrays and returns 
    a new array with all values falttened.
*/

//---------------------------------------------------------
//                 My Solution
//---------------------------------------------------------
let flatten = (arr) => {
    let newArr = [];
    if (arr.length === 0) return newArr;
    if (!Array.isArray(arr[0])) {
        newArr.push(arr[0]);
    } else {
        newArr = newArr.concat(flatten(arr[0]));
    }
    newArr = newArr.concat(flatten(arr.slice(1)));
    return newArr;
};

console.log(flatten([1, 2, 3, [4, 5] ])); // [1, 2, 3, 4, 5]
console.log(flatten([1, [2, [3, 4], [[5]]]])); // [1, 2, 3, 4, 5]
console.log(flatten([[1],[2],[3]])); // [1,2,3]
console.log(flatten([[[[1], [[[2]]], [[[[[[[3]]]]]]]]]])); // [1,2,3]


//---------------------------------------------------------
//                 Colt's Solution
//---------------------------------------------------------
function flatten(oldArr){
    var newArr = []
        for(var i = 0; i < oldArr.length; i++){
          if(Array.isArray(oldArr[i])){
                newArr = newArr.concat(flatten(oldArr[i]))
          } else {
                newArr.push(oldArr[i])
          }
    } 
    return newArr;
}