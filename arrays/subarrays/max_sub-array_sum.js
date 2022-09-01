/**
 * ######################
 * FIND MAX SUB-ARRAY SUM
 * ######################
 * Finding the maximum sub-array sum means finding the sub-array for which the
 * sum of its elements is bigger than the sum of in any other sub-array.
 * 
 * A sub-array has minimum 1 element.
 * The largest possible sub-array is the array itself.
 * Does the array hold only positive integers or can it hold negative integers
 * as well?
 *  
 * Example: [1,2,3,4,5]
 * The sub-arrays are: 
 * [1], [1,2], [1,2,3], [1,2,3,4], [1,2,3,4,5]
 * [2], [2,3], [2,3,4], [2,3,4,5]
 * [3], [3,4], [3,4,5]
 * [4], [4,5]
 * [5]
 * 
 * If all values are positive integers the sub-array with the highest sum is
 * easy to find [1,2,3,4,5] = 15
 *
 * If all values are negative integers the sub-array with the highest sum is
 * easy to find [-2,-1,-3,-4,-5] = -1 or the highest value in the array.
 * 
 * 
 * BRUTE FORCE APPROACH
 * - find all sub-arrays and make the sum
 * - store the sum and compare to each new sub-array sum
 * 
 * maxSum = min value in js
 * Start at index 0, for each index 
 * sum = arr[0] > maxSum
 * Loop over the subsequent values: i + j: arr[0 + 1], arr[0 + 2] ...
 * sum += arr[1] > maxSum ?  
 * sum += arr[2] > maxSum ?
 * ...  
 * sum += arr[n] > maxSum ?  
 * 
 * The double loop leads us to a time complexity of O(n^2)
 */
function findMaxSubArrSum(arr){
    let n = arr.length;
    let maxSum = Number.MIN_SAFE_INTEGER;
    for(let i = 0; i < n; i++){
        let sum = arr[i];
        if(sum > maxSum) maxSum = sum;
        for(let j = i + 1; j < n; j++){
            sum += arr[j];
            if(sum > maxSum) maxSum = sum;
        } 
    }
    return maxSum;
}
console.log(findMaxSubArrSum([1,2,3,4,5]));
console.log(findMaxSubArrSum([1,-2,3,-4,5]));
console.log(findMaxSubArrSum([-1,2,3,-4,-5]));
console.log(findMaxSubArrSum([-1,2,3,4,-5]));
/**
 * There is a more efficient but very advanced approach called Kadane’s 
 * algorithm.
 */