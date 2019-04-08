// ---------------------------------------------------
//           Mini Max Sum
//----------------------------------------------------
/* 
    Problem:
    Given five positive integers, find the minimum and maximum values that can be 
    calculated by summing exactly four of the five integers. 
    Then print the respective minimum and maximum values as a single line of two space-separated long integers.

    For example:
        arr = [1,3,5,7,9]
        Our minimum sum is 1+3+5+7 = 16
        Our Maximum sum is 3+5+7+9 = 24
        We would print 16, 24
*/

let arr = [3,1,5,7,9];

let miniMaxSum = arr => {
    let sortedArray = arr.sort();
    let minSum = sortedArray[0] + sortedArray[1] + sortedArray[2] + sortedArray[3];
    let maxSum = sortedArray[1] + sortedArray[2] + sortedArray[3] + sortedArray[4];
    console.log(`${minSum} ${maxSum}`);
};

miniMaxSum(arr);

