//=========================================================
//      SECTION 9 BONUS: CHALLENGING RECURSIVE PROBLEMS
//=========================================================

//---------------------------------------------------------
//          Coding Exercise 16: isPalindrome
//---------------------------------------------------------
/*
    Write a recursive function called isPalindrome which returns true if the string passed 
    to it is a palindrome (reads the same forward to backward). Otherwise it returns false.
*/

//---------------------------------------------------------
//                 My Solution
//---------------------------------------------------------
let isPalindrome = (str) => {
    if (str.length <= 1) return true;
    let lastIndex = str.length - 1;
    return str[0] === str[lastIndex] && isPalindrome(str.slice(1, -1));
};

console.log(isPalindrome('awesome')); // false
console.log(isPalindrome('foobar')); // false
console.log(isPalindrome('tacocat')); // true
console.log(isPalindrome('amanaplanacanalpanama')); // true
console.log(isPalindrome('amanaplanacanalpandemonium')); // false



//---------------------------------------------------------
//                 Colts' Solution
//---------------------------------------------------------

function isPalindrome(str){
    if(str.length === 1) return true;
    if(str.length === 2) return str[0] === str[1];
    if(str[0] === str.slice(-1)) return isPalindrome(str.slice(1,-1))
    return false;
}
