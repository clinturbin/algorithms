// ---------------------------------------------------
//           Picking Numbers
//----------------------------------------------------
/*
    Problem:
    Given an array of integers, find and print the maximum number of integers you can select from the array such that 
    the absolute difference between any two of the chosen integers is less than or equal to 1.

    For example, if your array is a = [1,1,2,2,4,4,5,5,5], you can create two subarrays meeting the criterion: [1,1,2,2] and [4,4,5,5,5]. 
    The maximum length subarray has 5 elements.

    Function Description
    Complete the pickingNumbers function in the editor below. 
    It should return an integer that represents the length of the longest array that can be created.

    pickingNumbers has the following parameter(s):
    - a: an array of integers

    Input Format
    The first line contains a single integer n, the size of the array a.
    The second line contains n space-separated integers a[i].

    Output Format
    A single integer denoting the maximum number of integers you can choose from the array such that the 
    absolute difference between any two of the chosen integers is <= 1.

    Sample Input 0
    6
    [4, 6, 5, 3, 3, 1]

    Sample Output 0
    3

    Explanation 0
    We choose the following multiset of integers from the array: {4,3,3}.
    Each pair in the multiset has an absolute difference <= 1 (i.e., |4-3| = 1 and |3-3| = 0), 
    so we print the number of chosen integers, 3, as our answer.

    Sample Input 1
    6
    [1, 2, 2, 3, 1, 2]

    Sample Output 1
    5

    Explanation 1
    We choose the following multiset of integers from the array: {1,2,2,1,2}.
    Each pair in the multiset has an absolute difference <= 1 
    (i.e., |1-2| = 1, |1-1| = 0, and |2-2| = 0), so we print the number of chosen integers, 5, as our answer.
*/

const pickingNumbers = a => {
    let sortedArray = a.sort();
    let maxNumberOfIntegers = 1;
    let startingNumber;
    for (let i = 0; i < sortedArray.length; i++) {
        if (sortedArray[i] !== startingNumber) {
            startingNumber = sortedArray[i];
            let subArray = sortedArray.slice(i + 1);
            let tempMaxNumber = 1;
            let j = 0;
            while ((j < subArray.length) && (Math.abs(startingNumber - subArray[j]) <= 1)) {
                tempMaxNumber++;
                j++;
            }
            if (tempMaxNumber > maxNumberOfIntegers) {
                maxNumberOfIntegers = tempMaxNumber;
            }
        }
    }
    return maxNumberOfIntegers;
}

console.log(pickingNumbers([4, 6, 5, 3, 3, 1]));
console.log(pickingNumbers([1, 2, 2, 3, 1, 2]));

// Test Array 3 should return 13
let testArray3 = [9, 6, 13, 16, 5, 18, 4, 10, 3, 19,
                  4, 5, 8, 1, 13, 10, 20, 17, 15, 10, 
                  6, 10, 13, 20, 18, 17, 7, 10, 6, 5, 
                  16, 18, 13, 20, 19, 7, 16, 13, 20, 
                  17, 4, 17, 8, 19, 12, 7, 17, 1, 18, 
                  3, 16, 4, 5, 3, 15, 17, 6, 17, 14, 11, 
                  11, 7, 11, 6, 15, 15, 12, 6, 17, 19, 8, 
                  6, 13, 9, 10, 19, 14, 18, 7, 9, 11, 16, 
                  11, 20, 4, 20, 10, 7, 8, 4, 2, 12, 11, 
                  8, 12, 13, 19, 8, 8, 5];

console.log(pickingNumbers(testArray3));