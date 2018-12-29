//=================================================================
//       Coding Exercise 6 - Multiple Pointers isSubsequence
//=================================================================

/*
    Write a function called isSubsequence which takes in two strings
    and checks whether the characters in the first string form a subsequence
    of the characters in the second string.  In other words, the function
    should check whether the characters in the first string appear somewhere
    in the second string, without their order changing.

    Examples:
        isSubsequence('hello', 'hello world')  // true
        isSubsequence('sing', 'sting')         // true
        isSubsequence('abc', 'abracadabra')    // true
        isSubsequence('abc', 'acb')            // false

    Your solution must have the following complexities:
    Time Complexity: O(N + M)
    Space Complexity: O(1)
*/

//---------------------------------------------------------
//                My Solution
//---------------------------------------------------------

let isSubsequence = (string1, string2) => {
    // Split each string into an array
    let arr1 = string1.split('');
    let arr2 = string2.split('');

    // Loop through each character in the second string
    for (let j = 0; j < arr2.length; j++) {
        // If there is nothing left in first arry then return true
        if (arr1.length === 0 ) return true;
        // if the indexed character equals the first character in the first string,
        if (arr2[j] === arr1[0]) {
            // then remove that character from the first array
            arr1.shift();
        }
    }

    // if there is anything left in the first array then return false
    return arr1.length === 0;
};

console.log(isSubsequence('hello', 'hello world'));
console.log(isSubsequence('sing', 'sting'));
console.log(isSubsequence('abc', 'abracadabra'));
console.log(isSubsequence('abc', 'acb'));


//---------------------------------------------------------
//                Colt's Solution
//---------------------------------------------------------

// Iterative Solution
function isSubsequence(str1, str2) {
    var i = 0;
    var j = 0;
    if (!str1) return true;
    while (j < str2.length) {
      if (str2[j] === str1[i]) i++;
      if (i === str1.length) return true;
      j++;
    }
    return false;
};

// Recursive, but not O(1) space
function isSubsequence(str1, str2) {
    if(str1.length === 0) return true
    if(str2.length === 0) return false
    if(str2[0] === str1[0]) return isSubsequence(str1.slice(1), str2.slice(1))  
    return isSubsequence(str1, str2.slice(1))
};