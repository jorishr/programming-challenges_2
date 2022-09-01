/**
 * EXPONENTIATION
 * - Iterative approach
 * - recursive approach1 - O(n) 
 * - recursive approach2 - O(log(n)) 
 * 
 * Exponentiation is a relatively straightforward mathematical concept. 
 * The exponential expression x^n equals n multiplications of x by itself. If x
 * is a negative integer than the result is 1 divided by n multiplications of x.
 * 
 * ##############
 * I.   ITERATION
 * ##############
 * The iterative approach uses a loop.
 * 
 * By starting the result at 1 we also take care of the edge case whereby 
 * x^0 = 1
 * 
 * To account for negative exponents use the absolute value in the loop and 
 * return the result based on the condition n < 0
 */
function power(x, n){
    let result   = 1;
    const max    = Math.abs(n);
    for(let i = 0; i < max; i++){
        result *= x;
    }
    return n < 0 ? 1 / result : result;
}
/**
 * Since the loop runs n times, the time this function takes to run is related
 * to the size of the input integer n. -> O(n). The space complexity for this 
 * function is O(1) as we store and update two variables that will occupy a 
 * constant amount of memory.
 * 
 * ###############
 * II.   RECURSION
 * ###############
 * The recursive approach offers two possibilities:
 * A. x^n can be redefined as x * x^(n-1)
 * 
 * To account for negative exponents use the absolute value in the recursion 
 * and return the result based on the condition n < 0. Only during the initial
 * call fn(2, -3), for example, will the condition be true. Once we enter in 
 * the recursive calls, the absolute value is used. 
 * 
 * This way the recursive process returns a result as if we were working with a
 * positive integer. Only the final return value is adjusted to 1 / result
 */
function recursivePower1(x, n){
    if(n === 0) return 1;
    else {
        return n < 0 
                ? 1 / (x * recursivePower1(x, (Math.abs(n) - 1)))
                : x * recursivePower1(x, (Math.abs(n) - 1));
    }
}
/**
 * This is not very efficient and resemble the factorial recursive approach.
 * The potential issue is that for large numbers the recursion tree becomes 
 * very deep, occupying a lot of memory space. Both time and space complexity
 * are O(n).
 * 
 * T(n) = T(n - 1) + C, with n > 0, T(0) = 1 and C a constant representing the
 * compare condition, subtraction and multiplication 
 * T(n) = T(n - 2) + 2C
 * T(n) = T(n - 3) + 3C
 * T(n) = T(n - 4) + 4C
 * ...
 * T(n) = T(0) + n * C = 1 + n * C or linear time complexity of O(n)
 * 
 * Recursion tree:
 *                      power(5,3)
 *               power(5,2)
 *          power(5, 1)
 *      power(5, 0)
 * 
 * The space complexity is related to the recursion tree depth which is 3 = n, 
 * or O(n). 
 * 
 * B. x^n can be redefined as:
 * - x^(n/2) * x^(n/2) if n is even
 * - x * x^(n - 1) if n is odd
 */     
function recursivePower2(x, n){
    if(n === 0) return 1
    else if(n % 2 === 0){
        let y = recursivePower2(x, (Math.abs(n) / 2));
        return n < 0 ? 1 / (y * y) : y * y;
    } else {
        return n < 0 
                ? 1 / (x * recursivePower2(x, (Math.abs(n) - 1)))
                : x * recursivePower2(x, (Math.abs(n) - 1));
    }
}
/**
 * This approach is much more efficient when we deal with even exponents 
 * because on each recursive call the exponent gets cut in halve.
 * 
 * Comparison:
 * fn(2,8) -> fn(2,4) -> fn(2,2) -> fn(2,1) -> fn(2,0) 
 * vs
 * fn(2,8) -> fn(2,6) -> fn(2,5) -> fn(2,4) -> ... -> fn(2,0)
 * 
 * This means we have the time complexity for this function is O(log n):
 * T(n) = T(n / 2) + C1 if n is even, T(0) = 1
 * T(n) = T(n - 1) + C2 if n is odd
 * 
 * T(n) = T(n / 2) + C will give is an idea of the upper bound
 * T(n) = T(n / 4) + 2C
 * T(n) = T(n / 8) + 3C
 * T(n) = T(n / 16) + 4C
 * ...
 * T(n) = T(n / 2^k) + k * C
 * This expression does not allow us to reach base case T(0) but we can define
 * another base case T(1). T(1) is odd, thus T(1) = T(1 - 1) + C2
 * Thus T(1) = T(0) + C2 = 1 + C2
 * 
 * if n / 2^k = 1 then n = 2^k and k = log2n
 * T(n) = T(1) + log2n * C = 1 + log2n * C or a logarithmic growth rate of O(log(n))  
 */

module.exports = {
    power,
    recursivePower1,
    recursivePower2
}