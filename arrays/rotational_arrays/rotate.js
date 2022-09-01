/** 
 * ###############
 * I. ROTATE ARRAY
 * ###############
 * Write a function that rotates the array k times, clockwise.
 * - Assume the array is sorted in ascending order. 
 * - Assume there are no duplicates
 * 
 * A. COPY ROTATE
 * One approach would be to loop over each element, use a new array that 
 * is filled up with the elements there new position i + 1.
 * 
 * The only difficulty would be to move the last index to the first. This can
 * be solved by using nextIndex = (i + 1) % n  
 * 
 * The time complexity for this approach is O(n) and the memory complexity is
 * O(n) as well. 
 * 
 * To rotate counter clockwise two adjustments are needed:
 * - set nextIndex to (i + n - k) % n
 * - run the loop backwards, starting at n - 1  
 */
function copyRotate(arr, k, clock = 0){
    let tempArr = [];
    let n = arr.length;
    //clockwise = 0; counterclockwise = 1
    if(clock === 0){
        for(let i = 0; i < n; i++){ 
            let nextIndex = (i + k) % n;
            tempArr[nextIndex] = arr[i];
        }
    } else {
        for(let i = n - 1; i >= 0; i--){ 
            let nextIndex = (i + n - k) % n;
            tempArr[nextIndex] = arr[i];
        }
    }
    return tempArr;
}
/**
 * B. SWAP ROTATE
 * The same problem can be solved without copying the entire array. You can 
 * swap the values in the existing array, starting at back of the array.
 * 
 * Example: [1,2,3,4,5] 
 * let last = arr[arr.length - 1]
 * arr[4] = arr[3]
 * arr[3] = arr[2]
 * arr[2] = arr[1]
 * ...
 * arr[0] = last;
 * 
 * Repeat k times.
 * 
 * This function has a time complexity of O(n*k) and an improved memory 
 * complexity of O(1). 
 */
function swapRotate(arr, k){
    while(k > 0){
        let last = arr[arr.length - 1];
        for(let i = arr.length - 1; i > 0; i--){
            arr[i] = arr[i - 1]
        }
        arr[0] = last;
        k--;
    }
    return arr;
}
/**
 * To get down to a time complexity of O(n) redefine the problems as follows:
 * A. Clockwise rotation
 * - reverse the subarray arr[n - 1] arr[n - k]
 * - reverse the subarray arr[n - k - 1] arr[0]
 * - reverse the entire arr from arr[0] to arr[n-1] 
 * 
 * Example: [1,2,3,4,5], k = 2
 *  -> reverse [4,5]     -> [1,2,3,5,4]
 *  -> reverse [1,2,3]   -> [3,2,1,5,4]
 *  -> reverse arr       -> [4,5,1,2,3]
 * 
 * B. Counter Clockwise rotation
 * - reverse the subarray ar[0] to arr[k] (excluding arr[k])
 * - reverse the subarray ar[k] to arr[n-1] (including arr[k] && arr[n-1])
 * - reverse the entire arr from arr[0] to arr[n-1]
 *
 * Example : [1,2,3,4,5], k = 2
 *  -> reverse [1,2] -> [2,1,3,4,5] 
 *  -> reverse [3,4,5] -> [2,1,5,4,3]
 *  -> reverse arr  -> [3,4,5,1,2] 
 * 
 * Note: reverse array function imported
 */
const reverse = require('../array_reversal').reverse;

function reverseRotate(arr, k, clock = 0){
    let n = arr.length;
    if(clock === 0){
        reverse(arr, n - k, n - 1);
        reverse(arr, 0, n - k - 1);
        reverse(arr, 0, n - 1);
    } else if(clock === 1){
        reverse(arr, 0, k - 1);
        reverse(arr, k, arr.length - 1);
        reverse(arr, 0, arr.length - 1);
    } else throw new Error('Invalid rotation direction. Allowed parameters: clockwise = 0, counter clockwise = 1');
    return arr;
}

module.exports = {
    copyRotate,
    swapRotate,
    reverseRotate
}