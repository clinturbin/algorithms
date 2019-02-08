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
let stringifyNumbers = (obj) => {
    let value;
    let keys = Object.keys(obj);
    if (keys.length === 0) return {};
    let firstKey = keys[0];
    if (typeof obj[firstKey] === 'number') {
        value = {[firstKey]: obj[firstKey].toString()};
    } else if (typeof obj[firstKey] === 'object' && !Array.isArray(obj[firstKey])) {
        value = {[firstKey]: stringifyNumbers(obj[firstKey])};
    } else {
        value = {[firstKey]: obj[firstKey]};
    }
    let {[firstKey]: remove, ...newObject} = obj;
    return Object.assign({}, value, stringifyNumbers(newObject));

    // delete obj[firstKey];
    // return Object.assign({}, value, stringifyNumbers(obj));
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