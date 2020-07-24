/**
 * ########
 * AM to PM
 * ########
 * Write a function that converts an time string in AM to PM.
 * Thus '08:03AM' becomes '20:03PM' 
 * 
 * LOGIC
 * - split the string into array of hours and minutes
 * - convert the hours to a number and add 12
 * - reconstruct the array by adding the new hours at the start of minutes
 * - convert to string and replace , for : and AM for PM
 */

module.exports = function convert(str){
    //convert the hours
    let hours = parseInt(str.split(':')[0]) + 12;    //-> 20
    //construct string
    let minutesArr = str.split(':').slice(1);
    minutesArr.unshift(hours);
    let newTime = minutesArr.toString().replace(/,/, ':');
    return newTime.replace(/AM/, 'PM');
}