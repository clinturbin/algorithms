//=====================================================
//      SECTION 8 RECURSION PROBLEM SET
//=====================================================

//-----------------------------------------------------
//  Coding Exercise 14: fib
//-----------------------------------------------------
/*
    Write a recursive function called fib which accepts a number and returns the nth number
    in the fibonaci sequence. Recall that the Fibonacci sequence is the sequence of whole numbers
    1,1,2,3,5,8,...which starts with 1 and 1, and where every number thereafter is equal to the sum
    of the previous two numbers.
*/

//-----------------------------------------------------
//                 My Solution
//-----------------------------------------------------
let fib = (num) => {
    if (num <= 2) return 1;
    let fibArray = [1,1];
    let addToFibArray = () => {
        if (fibArray.length === num) return;
        let num1 = fibArray[fibArray.length - 1];
        let num2 = fibArray[fibArray.length - 2];
        fibArray.push(num1 + num2);
        addToFibArray();
    }
    addToFibArray();
    return fibArray[fibArray.length - 1];
};

console.log(fib(4));// 3
console.log(fib(10)); // 55
console.log(fib(28)); // 317811
console.log(fib(35)); // 9227465


//-----------------------------------------------------
//                 Colt's Solution
//-----------------------------------------------------
function fib(n){
    if (n <= 2) return 1;
    return fib(n-1) + fib(n-2);
}