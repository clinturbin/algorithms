// ---------------------------------------------------
//           The Hurdle Race
//----------------------------------------------------
/*
    Problem:
    Dan is playing a video game in which his character competes in a hurdle race.
    Hurdles are of varying heights, and Dan has a maximum height he can jump.
    There is a magic potion he can take that will increase his maximum height by 1 unit for each dose.
    How many doses of the potion must he take to be able to jump all of the hurdles.

    Given an array of hurdle heights height, and an initial maximum height Dan can jump, k, 
    determine the minimum number of doses Dan must take to be able to clear all the hurdles in the race.

    For example, if height = [1,2,3,3,2] and Dan can jump 1 unit high naturally, 
    he must take 3 - 1 = 2 doses of potion to be able to jump all of the hurdles.

    Function Description
    Complete the hurdleRace function in the editor below. 
    It should return the minimum units of potion Dan needs to drink to jump all of the hurdles.

    hurdleRace has the following parameter(s):
    - k: an integer denoting the height Dan can jump naturally
    - height: an array of integers denoting the heights of each hurdle

    Input Format
    The first line contains two space-separated integers n and k, the number of hurdles and the maximum height Dan can jump naturally.
    The second line contains n space-separated integers height[i] where 0 <= i <= n.

    Constraints
    - 1 <= n,k <= 100
    - 1 <= height[i] <= 100

    Output Format
    Print an integer denoting the minimum doses of magic potion Dan must drink to complete the hurdle race.

    Sample Input 0
    5 4
    1 6 3 5 2

    Sample Output 0
    2

    Explanation 0
    Dan's character can jump a maximum of k = 4 units, but the tallest hurdle has a height of h1 = 6:
    To be able to jump all the hurdles, Dan must drink 6 - 4 = 2 doses.
*/

const hurdleRace = (k, height) => {
    let topHeight = 0;
    height.forEach(hurdle => {
        if (hurdle > topHeight) {
            topHeight = hurdle
        }
    })
    return topHeight > k ? topHeight - k : 0;
};

console.log(hurdleRace(4, [1,6,3,5,2]));
console.log(hurdleRace(7, [2,5,4,5,2]));