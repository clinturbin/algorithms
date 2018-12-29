//==========================================================
//       Coding Exercise 4 - areThereDuplicates
//==========================================================

// Implement a function called, areThereDuplicates which accepts a variable number of arguments,
// and checks whether there are any duplicates among the arguments passed in.
// You can solve this using the frequency counter pattern OR the multiple pointers pattern.

// Examples:
// areThereDuplicates(1,2,3);  // false
// areThereDuplicates(1,2,2);  // true
// areThereDuplicates('a', 'b', 'c', 'a');  // true

// Restrictions
// Time - O(N)
// Space - O(N)

// Bonus
// Time - O(n log n)
// Space - O(1)

//---------------------------------------------------------
//       My Solution - Using multiple pointers
//---------------------------------------------------------

let areThereDuplicates = (...args) => {
    // Need to sort arrya so multiple pointers can be used
    let sortedArray = args.sort();
    let i = 0;
    for (let j = 1; j < sortedArray.length; j++) {
        if (sortedArray[i] === sortedArray[j]) {
            return true;
        }
        i++;
    }
    return false;
};

console.log(areThereDuplicates(1,2,3));
console.log(areThereDuplicates(1,2,2));
console.log(areThereDuplicates('a', 'b', 'c', 'a'));

//--------------------------------------
//    Colt's Solution
//--------------------------------------

// Frequency Counter
function areThereDuplicates() {
    let collection = {}
    for(let val in arguments){
      collection[arguments[val]] = (collection[arguments[val]] || 0) + 1
    }
    for(let key in collection){
      if(collection[key] > 1) return true
    }
    return false;
}

// Multiple Pointers
function areThereDuplicates(...args) {
    // Two pointers
    args.sort((a,b) => a > b);
    let start = 0;
    let next = 1;
    while(next < args.length){
      if(args[start] === args[next]){
          return true
      }
      start++
      next++
    }
    return false
}

// One Liner solution
function areThereDuplicates() {
    return new Set(arguments).size !== arguments.length;
}