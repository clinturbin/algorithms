// ---------------------------------------------------
//           Staircase
//----------------------------------------------------
/* 
    Problem:
    Consider a staricase of size n = 4.
       #
      ##
     ###
    ####

    Observe that its base and height are both equal to , 
    and the image is drawn using # symbols and spaces. 
    The last line is not preceded by any spaces.

    Write a program that prints a staircase of size n.
*/

let staircase = n => {
    for (let i = 1; i <= n; i++) {
        let blanks = ' '.repeat(n - i);
        let steps = '#'.repeat(i);
        console.log(blanks + steps);
    }
};

staircase(4);