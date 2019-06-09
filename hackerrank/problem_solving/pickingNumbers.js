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
    let maxArrayLength = 0;
    const differencesLessThan1 = (startNum, arr) => arr.every(num => Math.abs(startNum - num) <= 1);
    const makesubArray = arr => {
        if (arr.length <= 1) return arr; 
        let firstNum = arr[0];
        let remainderArray = arr.slice(1);
        let subArray = remainderArray.filter(num => Math.abs(firstNum - num) <= 1);
        let newArr = [];
        for (let i = 0; i < subArray.length; i++) {
            if ( (i + 1) >= subArray.length ) {
                newArr.push(subArray[i]);
            } else if (differencesLessThan1(subArray[i], subArray.slice(i+1))) {
                newArr.push(subArray[i]);
            }
        }
        return [firstNum].concat(newArr);
    };
    for (let i = 0; i < a.length; i++) {
        let subArray = makesubArray(a.slice(i));
        if (subArray.length > maxArrayLength) {
            maxArrayLength = subArray.length;
        }
    }
    return maxArrayLength;
}

console.log(pickingNumbers([4, 6, 5, 3, 3, 1]));
console.log(pickingNumbers([1, 2, 2, 3, 1, 2]));