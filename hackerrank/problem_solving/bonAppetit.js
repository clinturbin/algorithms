// ---------------------------------------------------
//                 Bon Appetit
//----------------------------------------------------
/*
    Problem:
    Anna and Brian are sharing a meal at a restuarant and they agree to split the bill equally.
    Brian wants to order something that Anna is allergic to though, and they agree that Anna won't pay for that item. 
    Brian gets the check and calculates Anna's portion. You must determine if his calculation is correct.

    For example, assume the bill has the following prices: bill = [2,4,6].
    Ann declines to eat item k = bill[2] which costs 6.
    If Brian calculates the bill correctly, Anna will pay (2 + 4) / 2 = 3.
    If he includes the cost of bill[2], he will calculate (2+4+6)/3 = 6. 
    In the second case, he should refund 3 to Anna.

    Function Description:
    Complete the bonAppetit function in the editor below. It should print Bon Appetit if the bill is fairly split.
    Otherwise, it should print the integer amount of money that Brian owes Anna.

    bonAppetit has the following parameter(s):
    - bill: an array of integers representing the cost of each item ordered
    - k: an integer representing the zero-based index of the item Anna doesn't eat
    - b: the amount of money that Anna contributed to the bill

    Output Format:
    If Brian did not overcharge Anna, print Bon Appetit on a new line; otherwise, print the difference (i.e., charged - actual) 
    that Brian must refund to Anna. This will always be an integer.

    Sample Input:
    4 1
    3 10 2 9
    12

    Sample Output:
    5

    Explanation:
    Anna didn't eat item bill[1] = 10, but she shared the rest of the items with Brian.
    The total cost of the shared items is 3+2+9=14 and, split in half, the cost per person is actual = 7.
    Brian charged her charged = 12 for her portion of the bill. 
    We print the amount Anna was overcharged, 12 - 7 = 5, on a new line.
    
    Sample Input:
    4 1
    3 10 2 9
    7

    Sample Output:
    Bon Appetit

    Explanation:
    Anna didn't eat item bill[1] = 10, but she shared the rest of the items with Brian.
    The total cost of the shared items is 3+2+9=14 and, split in half, the cost per person is actual = 7.
    Brian charged her charged = 7 for her portion of the bill. 
    Because 7 - 7 = 0, we print Bon Appetit on anew line
*/

const bonAppetit = (bill, k, b) => {
    let actual = 0;
    for (let i = 0; i < bill.length; i++) {
        if (i !== k) {
            actual += bill[i];
        }
    }
    actual = actual / 2;
    actual === b
    ? console.log('Bon Appetit')
    : console.log(b - actual);
};

bonAppetit([3,10,2,9],1,12);
bonAppetit([3,10,2,9],1,7);