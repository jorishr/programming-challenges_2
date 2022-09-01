/**
 * #########
 * RECURSION 
 * #########
 */
module.exports = function findFibAt(n){
    if(n === 1 || n === 2) return 1;
    return findFibAt(n - 1) + findFibAt(n - 2)
}
//console.log(findFibAt(5))
//console.log(findFibAt(35))
//console.time()
//console.log(findFibAt(45))
//console.timeEnd() //-> ~= 10 sec
/**
 * TIME COMPLEXITY: O(2^n)
 * The recursion tree will grow exponentially with n, making it very 
 * inefficient. See memoization and bottom up approaches for more
 * efficient solutions.
 */