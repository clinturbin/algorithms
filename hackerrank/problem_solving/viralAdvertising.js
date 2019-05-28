// ---------------------------------------------------
//           Viral Advertising
//----------------------------------------------------
/*
    Problem:
    HackerLand Enterprise is adopting a new viral advertising strategy. 
    When they launch a new product, they advertise it to exactly 5 people on social media.

    On the first day, half of those 5 people (i.e., floor(5/2) = 2) like the advertisement and each shares it with 3 of their friends.
    At the beginning of the second day, floor(5/2) x 3 = 6 people receive the advertisement.

    Each day, floor(recipients/2) of the recipients like the advertisement and will share it with 3 friends on the following day.
    Assuming nobody receives the advertisement twice, determine how many people have liked the ad by the end of a given day, 
    beginning with launch day as day 1.

    For example, assume you want to know how many have liked the ad by the end of the 5th day.

    Day   Shared   Liked   Cumulative
     1      5        2         2
     2      6        3         5
     3      9        4         9
     4     12        6        15
     5     18        9        24

    The cumulative number of likes is 24.

    Function Description:
    Complete the viralAdvertising function in the editor below. 
    It should return the cumulative number of people who have liked the ad at a given time.

    viralAdvertising has the following parameter(s):
    - n: the integer number of days

    Input Format:
    A single integer, n, denoting a number of days.

    Output Format:
    Print the number of people who liked the advertisement during the first n days.

    Sample Input: 3

    Sample Output: 9
*/

const viralAdvertising = n => {
    let shared = 5;
    let liked = 0;
    let cumulative = 0;
    for (let i = 1; i <= n; i++) {
        liked = Math.floor(shared/2);
        cumulative += liked;
        shared = liked * 3;
    }
    return cumulative;
};

console.log(viralAdvertising(3));
console.log(viralAdvertising(4));
console.log(viralAdvertising(5));