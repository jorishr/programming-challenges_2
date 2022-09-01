/**
 * The least common multiple or smallest common multiple of two integers a and
 * b, LCM(a, b), is the smallest positive integer that is divisible by both a 
 * and b.
 * 
 * The mathematical formula is:
 * |a * b| / gcd(a, b)
 * 
 * Thus re-use the greatest common divisor function.
 * 
 * Edge cases: if one of the number is zero, return 0
 */
const euclidGcd = require('./greatest_common_divisor').euclidSimplified;

function findLcm(a, b){
    return (a === 0 || b === 0) 
        ? 0
        : Math.abs(a * b) / euclidGcd(a, b); 
}
console.log(findLcm(10, 5));    // -> 50 / 5 = 10
console.log(findLcm(4, 6));     // -> 24 / 2 = 12
console.log(findLcm(1, 0));     // -> 0
console.log(findLcm(0, 1));     // -> 0