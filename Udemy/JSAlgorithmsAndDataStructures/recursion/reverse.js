//=========================================================
//      SECTION 9 BONUS: CHALLENGING RECURSIVE PROBLEMS
//=========================================================

//---------------------------------------------------------
//  Coding Exercise 15: reverse
//---------------------------------------------------------
/*
    Write a recursive function called reverse which accepts a string
    and returns a new string in reverse.
*/

//---------------------------------------------------------
//                 My Solution
//---------------------------------------------------------
let reverse = (inputString) => {
    // I want to take the last letter off the input string and 
    let lastIndex = inputString.length - 1;
    if (inputString.length === 0) return '';
    return inputString[lastIndex] + reverse(inputString.slice(0, -1));

};

console.log(reverse('awesome')); // 'emosewa'
console.log(reverse('rithmschool')); // 'loohcsmhtir'


//---------------------------------------------------------
//                 Colt's Solution
//---------------------------------------------------------

function reverse(str){
	if(str.length <= 1) return str;
	return reverse(str.slice(1)) + str[0];
}