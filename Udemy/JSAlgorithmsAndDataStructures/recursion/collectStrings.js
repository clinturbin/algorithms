//=========================================================
//      SECTION 9 BONUS: CHALLENGING RECURSIVE PROBLEMS
//=========================================================

//---------------------------------------------------------
//          Coding Exercise 23: collectStrings
//---------------------------------------------------------
/*
    Write a function called collectStrings which accepts an onbejct and returns
    and array of all the values in the object that have a typeof string.
*/

//---------------------------------------------------------
//                 My Solution
//---------------------------------------------------------
let removeObjectKeyValuePair = (obj, key) => {
    let clone = Object.assign({}, obj);
    delete clone[key];
    return clone;
};

let isObject = (input) =>  typeof input === 'object' && !Array.isArray(input);

console.log(removeObjectKeyValuePair({a: 1, b: 2, c: 3}, 'b'));
console.log(isObject([1,2,3,4]));
console.log(isObject({1:1, 2:2, 3:3}));

let collectStrings = (obj) => {
    let result = [];
    let keys = Object.keys(obj);
    if (keys.length === 0) return result;
    let firstKey = keys[0];
    let firstKeyValue = obj[firstKey];
    if (typeof firstKeyValue === 'string') {
        result.push(firstKeyValue);
    }
    if (isObject(firstKeyValue)) {
        result = result.concat(collectStrings(firstKeyValue));
    }
    let newObject = removeObjectKeyValuePair(obj, firstKey);
    result = result.concat(collectStrings(newObject));
    return result;
};


const obj = {
    stuff: "foo",
    data: {
        val: {
            thing: {
                info: "bar",
                moreInfo: {
                    evenMoreInfo: {
                        weMadeIt: "baz"
                    }
                }
            }
        }
    }
}

console.log(collectStrings(obj)); // ["foo", "bar", "baz"

//---------------------------------------------------------
//                 Colt's Solution
//---------------------------------------------------------
// -------  Helper Method Recursion Version ---------------
function collectStrings(obj) {
    var stringsArr = [];
 
    function gatherStrings(o) {
        for(var key in o) {
            if(typeof o[key] === 'string') {
                stringsArr.push(o[key]);
            }
            else if(typeof o[key] === 'object') {
                return gatherStrings(o[key]);
            }
        }
    }
 
    gatherStrings(obj);
 
    return stringsArr;
}

// ----- Pure Recursion Version -------------------------
function collectStrings(obj) {
    var stringsArr = [];
    for(var key in obj) {
        if(typeof obj[key] === 'string') {
            stringsArr.push(obj[key]);
        }
        else if(typeof obj[key] === 'object') {
            stringsArr = stringsArr.concat(collectStrings(obj[key]));
        }
    }
 
    return stringsArr;
}