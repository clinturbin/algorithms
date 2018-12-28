//==========================================================
//    Coding Exercise 3 - Frequency Counter - sameFrequency
//==========================================================

// Write a function called sameFrequency. Given two positive integers,
// find out if the two numbers have the same frequency of digits.

// Your solution must have the following complexities
// Time: O(N)

// Sample Input:
// sameFrequency(182, 281)  // true
// sameFrequency(34, 14)  // false
// sameFrequency(3589578, 5879385)  // true
// sameFrequency(22, 222)  // false

//---------------------------------------------------------
//                My Solution
//---------------------------------------------------------

let sameFrequency = (num1, num2) => {
    // Convert the number to string so we can get the length
    let string1 = num1.toString(10);
    let string2 = num2.toString(10);

    let object1 = {};
    let object2 = {};
    // If the length of each input is different then return false
    if (string1.length !== string2.length) {
        return false;
    }
    // Build out each object
    for (let char of string1) {
        object1[char] = (object1[char] || 0 ) + 1;
    }
    for (let char of string2) {
        object2[char] = (object2[char] || 0) + 1;
    }

    // Loop through one of the objects
    for (let key in object1) {
        // If the key doesn't exist in the other object, then return false
        if (!(key in object2)) {
            return false;
        }
        // If the value of key in the first object doesn't match the key value in the second object return false
        if (object1[key] !== object2[key]) {
            return false;
        }
    }
    return true;
};

console.log(sameFrequency(182, 281));
console.log(sameFrequency(34, 14));
console.log(sameFrequency(3589578, 5879385));
console.log(sameFrequency(22, 222));

//--------------------------------------
//    Colt's Solution
//--------------------------------------
function sameFrequency(num1, num2){
    let strNum1 = num1.toString();
    let strNum2 = num2.toString();
    if(strNum1.length !== strNum2.length) return false;
    
    let countNum1 = {};
    let countNum2 = {};
    
    for(let i = 0; i < strNum1.length; i++){
      countNum1[strNum1[i]] = (countNum1[strNum1[i]] || 0) + 1
    }
    
    for(let j = 0; j < strNum1.length; j++){
      countNum2[strNum2[j]] = (countNum2[strNum2[j]] || 0) + 1
    }
    
    for(let key in countNum1){
      if(countNum1[key] !== countNum2[key]) return false;
    }
   
    return true;
}