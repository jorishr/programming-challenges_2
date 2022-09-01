/**
 * Is a given number a power of 2? 
 * In other words, can you keep dividing n until we get 1 with all remainders
 * being 0.
 * 
 * 20 -> 20 / 2 = 10 -> 10 / 2 = 5 -> 5 / 2 = 2, remainder != 0
 * 16 -> 16 / 2 = 8  -> 8 / 2  = 4 -> 4 / 2 = 2 -> 2 / 2 = 1
 * 
 * Edge case: 2^0 = 1 
 */
function isPowerOf2(n){
    if(!Number.isInteger(n) || n === 0) return null;
    if(n === 1) return true;
    if((n / 2) === 1){
        return true;  
    } else if(n % 2 === 0) {
        return isPowerOf2((n / 2));
    } else return false;
}

module.exports = isPowerOf2;