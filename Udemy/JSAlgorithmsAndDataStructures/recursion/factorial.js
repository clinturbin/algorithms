//=====================================================
//      SECTION 8 RECURSION PROBLEM SET
//=====================================================

//-----------------------------------------------------
//  Coding Exercise 11: factorial
//-----------------------------------------------------
/*
    Write a function factorial which accepts a number and returns the factorial of that number.
    A factorial is the product of an integer and all the integers below it;
    e.g. factorial four (4!) is equal to 24 because 4*3*2*1 equals 24.
    factorial 0 (0!) is always 1
*/

//-----------------------------------------------------
//                 My Solution
//-----------------------------------------------------
let factorial = (num) => {
    if (num === 0) {
        return 1;
    }
    return num * factorial(num - 1);
};

console.log(factorial(1)); // 1
console.log(factorial(2)); // 2
console.log(factorial(4)); // 24
console.log(factorial(7)); // 5040


//-----------------------------------------------------
//                 Colt's Solution
//-----------------------------------------------------
function factorial(x){
    if (x < 0 ) return 0;
    if (x <= 1 ) return 1;
    return x * factorial(x-1);
}