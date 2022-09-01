/**
 * #################
 * POWER OF A NUMBER
 * #################
 * The power of a number says how many times to use the number in a 
 * multiplication.
 * 
 * How to find a raised to the power b? Multiply a to itself, b times. That is, 
 * a^b = a * a * a * ... * a (b occurrences of a).
 * This operation will take O(n) time since we need to do the multiplication 
 * exactly n times.
 */
function power(a,b){
    let result = 1; 
    for(let i = 1; i <= b; i++){
        result *= a;
    }
    return result;
}
/**
 * ###################
 * FAST POWER ALGORITM
 * ###################
 * a^b can be redefined 
 * - for even exponents:    a^b = a^(b/2) * a^(b/2)
 * - for idd exponents:     a^b = a^(b/2) * a^(b/2) * a with b/2 the result of
 * b / 2 without remainder, or Math.floor(b/2)
 */
function fastPower(a, b){
    if(b % 2 === 0){
        let tmp = power(a, b / 2);
        return tmp * tmp; 
    } else {
        let tmp = power(a, Math.floor(b / 2));
        return tmp * tmp * a 
    }
}
module.exports = {
    power,
    fastPower
}