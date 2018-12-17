// Anagrams
// given two strings, write a function to determine if the second string is an anagram of the first.
// An anagram is a word, phrase, or name formed by rearranging the letters of another, such as cinema formed from iceman.

//validAnagram('',''); => true 
//validAnagram('aaz','zza'); => false 
//validAnagram('anagram','nagaram'); => true
//validAnagram('rat','car'); => false
//validAnagram('awesome','awesom'); => false
//validAnagram('texttwisttime','timetwisttext'); => true


//---------------------------------------------------------------------------------------
//   MY SOLUTION
//---------------------------------------------------------------------------------------

let validAnagram = (string1, string2) => {
    // If the length of string 1 and 2 are different, strings are not anagrams so return false
    if (string1.length !== string2.length) {
        return false;
    }
    // create blank objects to store keys for each letter in the string
    let frequencyCounterString1 = {};
    let frequencyCounterString2 = {};

    // loop through each string and assign letters to object and keep count of how many times each letter appears
    for (let char of string1) {
        frequencyCounterString1[char] = (frequencyCounterString1[char] || 0 ) + 1;
    }

    for (let char of string2) {
        frequencyCounterString2[char] = (frequencyCounterString2[char] || 0 ) + 1;
    }

    for (let key in frequencyCounterString1) {
        // If there is a letter in string1 that isn't in string2, then return false
        if (!(key in frequencyCounterString2)) {
            return false;
        }
        // If the number of times appears in string1 doens't match thenumber of times it appears in string2 then return false
        if(frequencyCounterString1[key] !== frequencyCounterString2[key]) {
            return false;
        }
    }
    // return true if everything matches up
    return true;
};

console.log(validAnagram('',''));
console.log(validAnagram('aaz','zza'));
console.log(validAnagram('anagram','nagaram'));
console.log(validAnagram('rat','car'));
console.log(validAnagram('awesome','awesom'));
console.log(validAnagram('texttwisttime','timetwisttext'));
console.log(validAnagram('elloh','hello'));


//---------------------------------------------------------------------------------------
//   COLT'S SOLUTION
//---------------------------------------------------------------------------------------
function validAnagram(first, second) {
    if (first.length !== second.length) {
        return false;
    }
    const lookup = {};

    for (let i = 0; i < first.length; i++) {
        let letter = first[i];
        // If letter exists increment, otherwise set letter to 1
        lookup[letter] ? lookup[letter] += 1 : lookup[letter] = 1; 
    }
    for (let i = 0; i < second.length; i++) {
        let letter = second[i];
        // Can't find letter or letter is 0, then it's not an anagram
        if (!lookup[letter]) {
            return false;
        } else {
            lookup[letter] -= 1;
        }
    }
    return true;
};