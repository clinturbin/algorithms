//=============================================================
//          ALGORITHMS - FIRDAY AUGUST 17, 2018
//============================================================

//-----------------------------------------------------------
//        Algorithm 1 - Lattice Paths
//        
// Starting in the top left corner of a 2×2 grid, 
// and only being able to move to the right and down, 
// there are exactly 6 routes to the bottom right corner.
// 
// How many such routes are there through a 20×20 grid? 
// In an n x n grid?
//-----------------------------------------------------------

let makeTopRow = (columns) => {
    let topRow = [];
    for (let i = 0; i <= columns; i++) {
        topRow.push(1);
    }
    return topRow;
};

let makeGrid = (rows, columns) => {
    let fullGrid = [];
    fullGrid.push(makeTopRow(columns));
    for (let i = 1; i <= rows; i++) {
        fullGrid.push([1]);
        for (let j = 1; j <= columns; j++) {
            let currentRow = fullGrid[i];
            let numberToAdd = fullGrid[i - 1][j] + fullGrid[i][j - 1];
            currentRow.push(numberToAdd);
        }
    }
    return fullGrid[rows][columns];
};

console.log(makeGrid(20, 20));


//---------------------------------------
//      CLASS SOLUTION - USING RECURSION
//---------------------------------------

let countPathsRecursive = (width, height) => {
    if (width === 0 || height === 0) {
        return 1;
    } else {
        return countPathsRecursive(width, height - 1) + countPathsRecursive(width - 1, height);
    }
};