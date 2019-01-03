//=================================================================
//       Coding Exercise 7 - Sliding Window maxSubarraySum
//=================================================================

/*
    Given an array of integers and a number, write a function called maxSubarraySum,
    which finds the maximum sum of a subarray with the length of the number passed 
    to the function.

    Note that a subarray must consist of consecutive elements from the original array.
    In the example below, [100, 200, 300] is a subarray of the original array,
    but [100, 300] is not.

    Examples:
        maxSubarraySum([100,200, 300,400], 2)  // 700
        maxSubarraySum([1,4,2,10,23,3,1,0,20], 4)  // 39
        maxSubarraySum([-3,4,0,-2,6,-1], 2)  // 5
        maxSubarraySum([3,-2,7,-4,1,-1,4,-2,1], 2)  // 5
        maxSubarraySum([2,3], 3)  // null


    Your solution must have the following complexities:
    Time Complexity: O(N)
    Space Complexity: O(1)
*/

//---------------------------------------------------------
//                My Solution
//---------------------------------------------------------

let maxSubarraySum = (arr, num) => {
    // if the array length is less than the target subarray length
    if (arr.length < num) return null;

    // Initialize a maxSum and tempSum to 0
    let maxSum = 0;
    let tempSum = 0;

    // Loop through the first subarray to get an initial maxSum
    for (let i = 0; i < num; i++) {
        maxSum += arr[i];
    }
    // set the value of tempSum to the value of the intial maSum
    tempSum = maxSum;

    // Loop through the array, starting at the value for num
    for (let i = num; i < arr.length; i++) {
        // Subtract the number to the left of the tempSum array and add the number to the right
        tempSum = tempSum - (arr[i - num]) + arr[i];
        // Set the value of maxSum to the larger number
        maxSum = Math.max(maxSum, tempSum);
    }
    return maxSum;
};

console.log(maxSubarraySum([100,200,300,400], 2));  // 700
console.log(maxSubarraySum([1,4,2,10,23,3,1,0,20], 4));  // 39
console.log(maxSubarraySum([-3,4,0,-2,6,-1], 2));  // 5
console.log(maxSubarraySum([3,-2,7,-4,1,-1,4,-2,1], 2));  // 5
console.log(maxSubarraySum([2,3], 3));  // null


//---------------------------------------------------------
//                Colt's Solution
//---------------------------------------------------------

function maxSubarraySum(arr, num){
    if (arr.length < num) return null;
 
    let total = 0;
    for (let i=0; i<num; i++){
       total += arr[i];
    }
    let currentTotal = total;
    for (let i = num; i < arr.length; i++) {
       currentTotal += arr[i] - arr[i-num];
       total = Math.max(total, currentTotal);
    }
    return total;
}