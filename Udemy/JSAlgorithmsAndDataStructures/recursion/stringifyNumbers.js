//=========================================================
//      SECTION 9 BONUS: CHALLENGING RECURSIVE PROBLEMS
//=========================================================

//---------------------------------------------------------
//          Coding Exercise 22: stringifyNumbers
//---------------------------------------------------------
/*
    Write a recursive function called stringifyNumbers which takes in an object
    and finds all of the values which are numbers and converts them to strings.
    Recursion would be a great way to solve this!
*/

//---------------------------------------------------------
//                 My Solution
//---------------------------------------------------------
// Note: my solution didn't work in Udemy console
// modified my solution after looking at Colt's
let stringifyNumbers = (obj) => {
    let result = {};
    for (let key in obj) {
        if (typeof obj[key] === 'number') {
            result[key] = obj[key].toString();
        } else if (typeof obj[key] === 'object' && !Array.isArray(obj[key])) {
            result[key] = stringifyNumbers(obj[key]);
        } else {
            result[key] = obj[key];
        }
    }
    return result;
};



let obj = {
    num: 1,
    test: [],
    data: {
        val: 4,
        info: {
            isRight: true,
            random: 66
        }
    }
};

console.log(stringifyNumbers(obj));

/*
{
    num: "1",
    test: [],
    data: {
        val: "4",
        info: {
            isRight: true,
            random: "66"
        }
    }
}
*/

//---------------------------------------------------------
//                 Colt's Solution
//---------------------------------------------------------
function stringifyNumbers(obj) {
    var newObj = {};
    for (var key in obj) {
      if (typeof obj[key] === 'number') {
        newObj[key] = obj[key].toString();
      } else if (typeof obj[key] === 'object' && !Array.isArray(obj[key])) {
        newObj[key] = stringifyNumbers(obj[key]);
      } else {
        newObj[key] = obj[key];
      }
    }
    return newObj;
}