/**
 * The greatest common divisor of two numbers gcd(a, b) = greatest number for 
 * which a / g and b / g or modulo a / g and modulo b / g == 0 
 */
function findGcd(a, b){ 
    let gcd = 1;
    if(a < b){
        for(let i = 1; i <= a; i++){
            if(a % i == 0 && b % i == 0){
                gcd = i;
            }
        }
    } else {
        for(let i = 1; i <= b; i++){
            if(a % i == 0 && b % i == 0){
                gcd = i;
            }
        }
    }
    return gcd;
}
/**
 * The calculation are as follows:
 * 10 % 1 and 5 % 1 -> gcd = 1 
 * 10 % 2 and 5 % 2 -> gcd = 1 
 * 10 % 3 and 5 % 3 -> gcd = 1 
 * 10 % 4 and 5 % 4 -> gcd = 1 
 * 10 % 5 and 5 % 5 -> gcd = 5 
 * Thus 5 calculations.
 *
 * Euclid's algortithm greatly reduces the amount calculations that have to
 * be performed.
 * 
 * dividend  = 10  5  
 * divisor   = 5   0
 * remainder = 0   end loop
 * -> return dividend = 5, thus in one calculation instead of 5 above
 * 
 * dividend  = 24   18  6
 * divisor   = 18   6   0
 * remainder = 6    0   end loop
 * -> return dividend = 6
 */
function euclidGcd(a, b){
    let dividend = a >= b ? a : b;
    let divisor  = a >= b ? b : a;
    while(divisor !== 0){
        let remainder = dividend % divisor;
        dividend  = divisor;
        divisor   = remainder;
    }
    return dividend;
}
module.exports = {
    findGcd,
    euclidGcd
}