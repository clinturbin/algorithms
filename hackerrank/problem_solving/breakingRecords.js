// ---------------------------------------------------
//           Breaking Records
//----------------------------------------------------
/*
    Problem:
    Maria plays college basketball and wants to go pro. Each season she maintains a record of her play. 
    She tabulates the number of times she breaks her season record for most points and least points in a game. 
    Points scored in the first game establish her record for the season, and she begins counting from there.

    For example, assume her scores for the season are represented in the array scores = [12,24,10,24]. 
    Scores are in the same order as the games played. She would tabulate her results as follows:

    Game  Score  Minimum Maximum  Min  Max
      0     12      12     12      0    0
      1     24      12     24      0    1
      2     10      10     24      1    1
      3     24      10     24      1    1

    
    Given Maria's scores for a season, find and print the number of times she breaks her records 
    for most and least points scored during the season.

    Function Description:
    Complete the breakingRecords function in the editor below. 
    It must return an integer array containing the numbers of times she broke her records.
    Index 0 is for breaking most points records, and index 1 is for breaking least points records.

    breakingRecords has the following parameter(s):
    - scores: an array of integers

*/

const breakingRecords = (scores) => {
    let min = 0;
    let max = 0;
    let minimumScore = scores[0];
    let maximumScore = scores[0];
    for (let i = 1; i < scores.length; i++) {
        if (scores[i] < minimumScore) {
            minimumScore = scores[i];
            min++;
        }
        if (scores[i] > maximumScore) {
            maximumScore = scores[i];
            max++;
        }
    }
    return [max, min];
};

console.log(breakingRecords([3,4,21,36,10,28,35,5,24,42]));