/** 
 * ###########
 * MEMOIZATION
 * ###########
 * To optimize the recursive solution use memoization. A dynamic programming 
 * technique to store intermediate calculation results.
 * 
 * Every intermediate result fib(1), fib(2), fib(3), etc. can be stored in an
 * array. When unwinding the recursion tree, duplicate calculations can be 
 * avoided by pulling results from the array. 
 *  
 * Note that the memo array needs to initialized before you make the first
 * function call.
 */
module.exports = function findFibAt(n){
   let memo = [];
   return fib(n);
   function fib(n){
       let result;
       if(memo[n] !== undefined) return memo[n];
       if(n === 1 || n === 2){
           result = 1;
       } 
       else {
           result = fib(n - 1) + fib(n - 2);
       }
       memo[n] = result;
       return result; 
   }
}
//console.log(findFibAtWithMem(5))
//console.time()
//console.log(findFibAtWithMem(45))
//console.timeEnd()   // ~= 46ms
/**
 * TIME COMPLEXITY
 * This approach improves time complexity of the function to O(n) because the
 * part of the function that actually calculates a result is executed a maximum
 * of n times. That block contain two fn calls -> 2n. Add the fn initial call.
 * 
 * T(n) = 2n + 1
 * 
 * With each operation in the fn call taking O(1) time the final time 
 * complexity calculation is: T(n) = (2n + 1) * O(1) = O(2n + 1) = O(n).
 */