// ---------------------------------------------------
//           Cats and a Mouse
//----------------------------------------------------
/*
    Problem:
    Two cats and a mouse are at various positions on a line. 
    You will be given their starting positions. 
    Your task is to determine which cat will reach the mouse first, 
    assuming the mouse doesn't move and the cats travel at equal speed. 
    If the cats arrive at the same time, the mouse will be allowed to move and it will escape while they fight.

    You are given q queries in the form of x, y, and z representing the respective positions for cats A and B, and for mouse C.
    Complete the function catAndMouse to return the appropriate answer to each query, which will be printed on a new line. 

    - If cat A catches the mouse first, print Cat A.
    - If cat B catches the mouse first, print Cat B.
    - If both cats reach the mouse at the same time, print Mouse C as the two cats fight and mouse escapes.

    For example, cat A is at position x=2 and cat B is at y=5. If mouse C is at position z=4, it is 2 units from cat A and 1 unit from cat B. 
    Cat B will catch the mouse.

    Function Description
    Complete the catAndMouse function in the editor below. It should return one of the three strings as described.
    catAndMouse has the following parameter(s):
    - x: an integer, Cat A's position
    - y: an integer, Cat B's position
    - z: an integer, Mouse C's position

    Input Format
    The first line contains a single integer, q, denoting the number of queries.
    Each of the q subsequent lines contains three space-separated integers describing the respective values of x (cat A's location), 
    y (cat B's location), and z (mouse C's location).

    Constraints
    - 1 <= q <= 100
    - 1 <= x,y,z <= 100

    Output Format
    For each query, return Cat A if cat A catches the mouse first, 
    Cat B if cat B catches the mouse first, or Mouse C if the mouse escapes.

    Sample Input 0
    2
    1 2 3
    1 3 2

    Sample Output 0
    Cat B
    Mouse C
*/

const catAndMouse = (x, y, z) => {
    let distanceCatA = Math.abs(z - x);
    let distanceCatB = Math.abs(z - y);
    if (distanceCatA < distanceCatB) {
        return 'Cat A';
    } else if ( distanceCatB < distanceCatA) {
        return 'Cat B';
    } else {
        return 'Mouse C'
    }
};

console.log(catAndMouse(1,2,3));
console.log(catAndMouse(1,3,2));