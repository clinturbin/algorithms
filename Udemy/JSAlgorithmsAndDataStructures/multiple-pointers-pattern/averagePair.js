//==========================================================
//       Coding Exercise 5 - Multiple Pointers averagePair
//==========================================================

/*
    Write a function called averagePair.  Given a sorted array of integers and a target average,
    determine if there is a pair of values in the array where the average of the pair equals the target average.
    There may be more than one pair that matches the average target.

    Bonus Constraints:
    Time: O(N)
    Space: O(1)
    
    Sample Input:
    averagePair([1,2,3], 2.5)  // true
    averagePair([1,3,3,5,6,7,10,12,19], 8)  // true
    averagePair([-1,0,3,4,5,6], 8)  // false
    averagePair([], 4)  // false
*/

//---------------------------------------------------------
//                My Solution
//---------------------------------------------------------

let avg = (num1, num2) => (num1 + num2) / 2;

let averagePair = (arr, target) => {
    if (arr.length <= 1) {
        return false;
    }
    let i = 0;
    let j = arr.length - 1;
    while (i < j) {
        if ( avg(arr[i], arr[j]) === target ) {
            return true;
        }
        if ( avg(arr[i], arr[j]) > target ) {
            j--;
        }
        if ( avg(arr[i], arr[j]) < target ) {
            i++;
        }
    }
    return false;
};

console.log(averagePair([1,2,3], 2.5));
console.log(averagePair([1,3,3,5,6,7,10,12,19], 8));
console.log(averagePair([-1,0,3,4,5,6], 8));
console.log(averagePair([], 4));

//---------------------------------------------------------
//                Colt's Solution
//---------------------------------------------------------
function averagePair(arr, num){
    let start = 0
    let end = arr.length-1;
    while(start < end){
      let avg = (arr[start]+arr[end]) / 2 
      if(avg === num) return true;
      else if(avg < num) start++
      else end--
    }
    return false;
  }
