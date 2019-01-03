//=================================================================
//       Coding Exercise 9 - Sliding Window findLongestSubstring
//=================================================================

/*
    Write a function called findLongestSubstring, which accepts a string and returns the length
    of the longest substring with all distinct characters.

    Examples:
        findLongestSubstring('')  // 0
        findLongestSubstring('rithmschool')  // 7
        findLongestSubstring('thisisawesome')  // 6
        findLongestSubstring('thecatinthehat')  // 7
        findLongestSubstring('bbbbb')  // 1
        findLongestSubstring('longestsubstring')  // 8
        findLongestSubstring('thisishowwedoit')  // 6


    Your solution must have the following complexities:
    Time Complexity: O(N)
*/

//---------------------------------------------------------
//                My Solution
//---------------------------------------------------------

let findLongestSubstring = (str) => {
    if (str.length === 0) return 0;

    let maxLength = 0;
    let subString = [];

    let i = 0;
    while (i < str.length) {
        // if subString doesn't contain the character at i,
        if (!subString.includes(str[i])) {
            // add character to subString
            subString.push(str[i]);
            // if the length of subString is greater than maxLength
            if (subString.length > maxLength) {
                // update maxLength
                maxLength = subString.length;
            }
            // increase counter i
            i++
        } else {
            // remove first character from subString
            subString.shift();
            // increase counter i
            // i++;
        }
    }
    return maxLength;
};

console.log(findLongestSubstring(''));
console.log(findLongestSubstring('rithmschool'));
console.log(findLongestSubstring('thisisawesome'));
console.log(findLongestSubstring('thecatinthehat'));
console.log(findLongestSubstring('bbbbb'));
console.log(findLongestSubstring('longestsubstring'));
console.log(findLongestSubstring('thisishowwedoit'));


//---------------------------------------------------------
//                Colt's Solution
//--------------------------------------------------------- 

function findLongestSubstring(str) {
    let longest = 0;
    let seen = {};
    let start = 0;
   
    for (let i = 0; i < str.length; i++) {
      let char = str[i];
      if (seen[char]) {
        start = Math.max(start, seen[char]);
      }
      // index - beginning of substring + 1 (to include current in count)
      longest = Math.max(longest, i - start + 1);
      // store the index of the next char so as to not double count
      seen[char] = i + 1;
    }
    return longest;
  }