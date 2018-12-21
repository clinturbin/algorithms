// countUniqueValues
/*
    Implement a function called countUniqueValues, which accepts a sorted array,
    and counts the unique values in the array. There can be negative numbers in the array,
    but it will always be sorted.
*/


//---------------------------------------------
//       MY SOLUTION
//---------------------------------------------

let countUniqueValues = (arr) => {
    // set i to index 0 and j to index 1
    let i = 0;
    let j = 1;

    // if array is empty return 0
    if (arr.length === 0) {
        return i;
    }

    // loop through array and compare values at index i and j, while j is less than the array length
    while(j < arr.length) {
        // if values are the same, then increase j by 1
        if (arr[i] === arr[j]) {
            j++;
        } else {
            // if values are different, increase i by 1 then replace value arr[i] with value arr[j], then increase j by 1
            i++;
            arr[i] = arr[j];
            j++;
        }
    }
    // return i + 1
    return i + 1;
};

countUniqueValues([1,1,1,1,1,2]);  // 2
countUniqueValues([1,2,3,4,4,4,7,7,12,12,13]);  // 7
countUniqueValues([]);  // 0
countUniqueValues([-2,-1,-1,0,1]);  // 4


//---------------------------------------------
//       COLT'S SOLUTION
//---------------------------------------------
function countUniqueValues(arr) {
    if (arr.length === 0) return 0;
    let i = 0;
    for(let j = 1; j < arr.length; j++) {
        if (arr[i] !== arr[j]) {
            i++;
            arr[i] = arr[j];
        }
    }
    return i + 1;
};
