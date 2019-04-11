// ---------------------------------------------------
//           Time Conversion
//----------------------------------------------------
/* 
    Problem:
    Given a time in 12-hour AM/PM format, convert it to military (24-hour) time.
    Note: Midnight is 12:00:00AM on a 12-hour clock, and 00:00:00 on a 24-hour clock. 
          Noon is 12:00:00PM on a 12-hour clock, and 12:00:00 on a 24-hour clock.

    Function Description:
    Complete the timeConversion function in the editor below. 
    It should return a new string representing the input time in 24 hour format.

    timeConversion has the following parameter(s):
    - s: a string representing time in 12 hour format
    - A single string s containing a time in 12-hour clock format (i.e.: hh:mm:ssAM or hh:mm:ssPM ), 
      where 01 <= hh <= 12 and 00 <=mm, ss <= 59.

    Constraints:
    - All inputs are valid

    Sample Input:
    - 07:05:45PM

    Sample Output:
    - 19:05:45
*/

const timeConversion = s => {
    let partOfDay = s.slice(s.length - 2);
    let hour = s.slice(0,2);
    let hourNumber = Number(hour);
    let minutesAndSeconds = s.slice(2,s.length - 2);
    if(hourNumber === 12 && partOfDay === 'AM') hourNumber = 0;
    if(partOfDay === 'PM' && hourNumber < 12) hourNumber += 12;
    hour = ('0' + hourNumber).slice(-2);
    return hour + minutesAndSeconds;
};

console.log(`Military Time is: ${timeConversion('01:05:45AM')}`);
console.log(`Military Time is: ${timeConversion('12:45:54PM')}`);