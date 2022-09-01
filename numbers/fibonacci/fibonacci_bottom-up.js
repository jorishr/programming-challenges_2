/**
 * ##################
 * BOTTOM-UP APPROACH
 * ##################
 * In the memoization approach we fill up the array of intermediate results
 * until we get to the n-th Fibonacci number. This basically reduces our 
 * problem to filling up a an array with calculations, thereby removing the
 * need for recursion all together.
 * 
 * - Start with base cases: n == 1 and n == 2, add to arr.
 * - Loop from 3 to n
 * - value at each index = (i - 1) + (i - 2)
 * - return memo[n]
 * 
 * Note that you can use the same approach to return the entire sequence up
 * to n.
 */
function findFibAt(n){
    if(n === 1 || n === 2){
        return 1;
    }
    let memo = [];
    memo[1] = 1;
    memo[2] = 1;
    for(let i = 3; i <= n; i++){
        memo[i]= memo[i - 1] + memo[i - 2];
    }
    return memo[n];
    //to return entire sequence
    //memo[0] = 0;
    //return memo;
}
//console.time()
//console.log(findFibAt(10000))
//console.timeEnd()   // ~= 19m
/**
 * TIME COMPLEXITY
 * The time complexity for this function is O(n) as we define the entire array
 * of n elements once. The advantage of avoiding recursion is that we can now 
 * compute very large numbers without reaching the limit of the call stack.
 *  */
function getFibSequence(n){
    if(n === 1 || n === 2){
        return 1;
    }
    let memo = [];
    memo[1] = 1;
    memo[2] = 1;
    for(let i = 3; i <= n; i++){
        memo[i]= memo[i - 1] + memo[i - 2];
    }
    //return memo[n];
    //to return entire sequence
    memo[0] = 0;
    return memo;
}
module.exports = {
    findFibAt,
    getFibSequence
}
