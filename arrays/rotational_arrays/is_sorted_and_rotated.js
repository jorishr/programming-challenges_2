/**
 * ########################
 * SORTED AND ROTATED ARRAY
 * ########################
 * Given is an array of integers. Write a function that checks if the array is
 * sorted and rotated. 
 * 
 * Assume that there is at least one rotation.
 * Assume that the rotation happened counter-clockwise.
 * 
 * Example:
 * const arr = [3,4,5,1,2] -> true
 * const arr = [2,3,4,5,1] -> true
 * const arr = [3,4,5,1,6] -> false, rotated but not sorted
 * const arr = [1,2,3,4,5] -> false, sorted but not rotated
 * 
 * const arr = [5,1,2,3,4] -> true, rotated clockwise
 * const arr = [4,5,1,2,3] -> true, rotated clockwise
 * 
 * The distict feature of a counter-clockwise rotated array that0 is 
 * sorted is the fact that the minimum value in the array is the starting point
 * of the rotation. And, all values to left will be in ascending order and all
 * remaining values to the right will be in ascending order.
 * 
 * Also, the last value in the arr should be bigger than the value preceding the
 * minimum value.
 * const arr = [3,4,5,1,6] -> false, rotated but not sorted.
 * 
 * LOGIC
 * - find minimum value index
 * - loop over right values and check order
 * - loop over left values and check order
 * - check last value
 */
module.exports = function isSortedAndRotated(arr){
    //find min value
    let min = findMin(arr);
    //check order values on left of min
    for(let i = 0; i < min; i++){
        if(arr[i] < arr[i - 1]) return false;
    }
    //check order values on richt of min
    for(let i = arr.length - 1; i > min; i--){
        if(arr[i] < arr[i - 1]) return false;
    }
    //check last value
    if(arr[arr.length - 1] < arr[min - 1]) return true;
    return false;
}
function findMin(arr){
    let min = 0;
    let i = 0;
    while(i < arr.length){
        if(arr[i] < arr[min]) min = i;
        i++
    }
    return min;
}