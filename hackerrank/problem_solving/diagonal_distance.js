//-----------------------------------------------------------
//                  Diagonal Difference
//-----------------------------------------------------------

/* 
    Problem: 
    Given a square matrix, calculate the absolute difference between the sums of its diagonals.

    ex. diagonalDifference(testArray);
        if testArray = [ [11,2,4], [4,5,6], 10,8,-12]
        returns 15
*/

let testArray = [
    [11,2,4],
    [4,5,6],
    [10,8,-12]
];

let diagonalDifference = arr => {
    let primary = 0;
    let secondary = 0;
    let n = arr.length;
    for(let i = 0; i < arr.length; i++) {
        primary += arr[i][i];
        secondary += arr[i][n - 1];
        n -= 1;
    }
    return Math.abs(primary - secondary);
};

console.log(diagonalDifference(testArray));