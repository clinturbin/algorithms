// ---------------------------------------------------
//           Grading Students
//----------------------------------------------------
/* 
    Problem:
    HackerLand University has the following grading policy:
    - Every student receives a grade in the inclusive range from 0 to 100.
    - Any grade less than 40 is a failing grade.
    
    Sam is a professor at the university and likes to round each student's  according to these rules:
    - If the difference between the grade and the next multiple of 5 is less than 3, round grade up to the next multiple of 5.
    - If the value of grade is less than 38, no rounding occurs as the result will still be a failing grade.
    For example, grade = 84 will be rounded to 85 but grade = 29 will not be rounded because the rounding 
    would result in a number that is less than 40.

    Given the initial value of grade for each of Sam's n students, write code to automate the rounding process.

    Function Description:
    Complete the function gradingStudents in the editor below. It should return an integer array consisting of rounded grades.
    
    gradingStudents has the following parameter(s):
    - grades: an array of integers representing grades before rounding

    Input Format:
    The first line contains a single integer, n, the number of students.
    Each line i of the n subsequent lines contains a single integer, grades[i], denoting student i's grade.

    Constraints:
    - 1 <= n <= 60
    - 0 <= grades[i] <= 100

    Output Format:
    For each grade[i], print the rounded grade on a new line.

    Ex:
    gradingStudents([73, 67, 38, 33])

    Result:
    [75, 67, 40, 33]
*/

const gradingStudents = grades => {
    // let result = [];
    // grades.forEach(grade => {
    //     let roundedUpNumber = Math.ceil(grade / 5) * 5;
    //     if (roundedUpNumber - grade < 3 && roundedUpNumber >= 40) {
    //         result.push(roundedUpNumber);
    //     } else {
    //         result.push(grade);
    //     }
    // });
    
    let result = grades.map(grade => {
        let roundedUpNumber = Math.ceil(grade / 5) * 5;
        return (roundedUpNumber - grade < 3 && roundedUpNumber >= 40) ? roundedUpNumber : grade;
    });
    
    return result;
};

console.log(gradingStudents([73, 67, 38, 33]));