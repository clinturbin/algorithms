// ---------------------------------------------------
//           Utopian Tree
//----------------------------------------------------
/*
    Problem:
    The Utopian Tree goes through 2 cycles of growth every year. 
    Each spring, it doubles in height. Each summer, its height increases by 1 meter.

    Laura plants a Utopian Tree sapling with a height of 1 meter at the onset of spring. 
    How tall will her tree be after n = 5 growth cycles?

    For example, if the number of growth cycles is n = 5, the calculations are as follows:

    Period  Height
      0       1
      1       2
      2       3
      3       6
      4       7
      5       14

    Function Description
    Complete the utopianTree function in the editor below. 
    It should return the integer height of the tree after the input number of growth cycles.

    utopianTree has the following parameter(s):
    - n: an integer, the number of growth cycles to simulate

    Input Format
    The first line contains an integer, t, the number of test cases.
    t subsequent lines each contain an integer, n, denoting the number of cycles for that test case.

    Output Format
    For each test case, print the height of the Utopian Tree after n cycles. Each height must be printed on a new line.

    Sample Input
    3
    0
    1
    4

    Sample Output
    1
    2
    7
*/

const utopianTree = (n) => {
    let height = 0;
    for (let i = 0; i <= n; i++) {
        (i % 2 === 0) ? height += 1 : height *= 2;
        // console.log((`Is even number: ${(i % 2 === 0)}`));
    }
    return height;
};

console.log(utopianTree(0));
console.log(utopianTree(1));
console.log(utopianTree(4));