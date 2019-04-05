// ---------------------------------------------------
//           Plus Minus
//----------------------------------------------------
/* 
    Problem:
    Given an array of integers, calculate the fractions of its elements that are positive, negative, and are zeros. 
    Print the decimal value of each fraction on a new line.

    ex. plusMinus([-4, 3, -9, 0, 4, 1])
    0.500000
    0.333333
    0.166667
*/

let integersArray = [-4, 3, -9, 0, 4, 1];

const plusMinus = arr => {
    let positives = 0;
    let negatives = 0;
    let zeroes = 0;
    let n = arr.length
    arr.forEach(item => {
        if (item > 0) {
            positives += 1
        } else if (item < 0) {
            negatives += 1;
        } else {
            zeroes += 1;
        }
    })
    console.log((positives / n).toFixed(n));
    console.log((negatives / n).toFixed(n));
    console.log((zeroes / n).toFixed(n));
};

plusMinus(integersArray);