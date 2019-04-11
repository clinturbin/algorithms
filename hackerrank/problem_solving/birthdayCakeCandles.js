// ---------------------------------------------------
//           Birthday Cake Candles
//----------------------------------------------------
/* 
    Problem:
    You are in charge of the cake for your niece's birthday and have decided 
    the cake will have one candle for each year of her total age. 
    When she blows out the candles, she’ll only be able to blow out the tallest ones. 
    Your task is to find out how many candles she can successfully blow out.

    For example, if your niece is turning 4 years old, and the cake will have 4 candles of height 4, 4, 1, 3, 
    she will be able to blow out 2 candles successfully, since the tallest candles are of height 4 and there are 2 such candles.

    Functionak Description:
    Complete the function birthdayCakeCandles in the editor below. 
    It must return an integer representing the number of candles she can blow out.

    birthdayCakeCandles has the following parameter(s):
    - ar: an array of integers representing candle heights

    Sample input:
    birthdayCakeCandles([3,2,1,3]) => 2 (there are 2 candles with heaight 3, which is the highest)
*/

let sampleInput = [3,2,1,3];

const birthdayCakeCandles = ar => {
    let maxHeight = 0;
    let candles = 0;
    ar.forEach(candle => {
        if(candle === maxHeight) {
            candles++;
        }
        if(candle > maxHeight) {
            maxHeight = candle;
            candles = 1;
        }
        console.log(`Max Height: ${maxHeight} / Candles: ${candles}`);
    })
    return candles;
};

console.log(`There were ${birthdayCakeCandles(sampleInput)} candles`);

