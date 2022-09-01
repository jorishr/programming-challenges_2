/**
 * Finding all factors of a numbers: trial division method
 * Factors of 12 = {1, 2, 3, 4, 6, 12}
 * 
 * The code is similar to check if a number is prime:
 * - loop over numbers 1 to n
 * - if n % num === 0, num is a factor of n
 */
function findFactors(n){
    let factors = [];
    for(let i = 1; i <= n; i++){
        if(n % i === 0){
            factors.push(i);
        }
    }
    return factors;
}
/**
 * The time complexity is O(n). 
 * The algorithm can be improved using the cofactors. If n is divisible by a, 
 * then there is always a cofactor b for which a * b  = n. That cofactor can 
 * be found by dividing n by a. 
 * 
 * Also there are three possibilites: 
 * if a < b then a < sqrt(n)
 * if a > b then b > sqrt(n)
 * if a = b then a = b = sqrt(n)
 * In any case the cofactors are less or equal than sqrt(n)
 */
function findFactorsOptimized(n){
    let factors = [];
    for(let i = 1; i <= Math.sqrt(n); i++){
        if(n % i === 0){
            if(i === Math.sqrt(n)){
                factors.push(i);
            } else {
                factors.push(i);
                factors.push(n / i);
            }
        }
    }
    //console.log(factors)
    return factors;
}
/**
 * Now the time complexity becomes O(sqrt(n)). The only downside of this 
 * solution is that the factors no longer appear in order.
 * 
 * factors 12 = {1, 12, 2, 6, 3, 4}
 */

module.exports = {
    findFactors,
    findFactorsOptimized
}