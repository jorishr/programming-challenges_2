/** 
 * ####################
 * COUNT ARRAY ROTATION 
 * ####################
 * Write a function that returns the number of times the array been rotated.
 * 
 * LOGIC
 * To answer the question we need to find the starting point of the original 
 * array. For a sorted array this is the smallest value in the array.
 * 
 * If we know the index of the smallest value, we also know how many times it
 * has been shifted to the right.
 * 
 * To find the smallest value in the array we can use:
 * - linear search: O(n)
 * - binary search: O(log n), see II.
 * 
 * To find the next or previous value in a rotational array use the modulo:
 * next = (i + 1) % n
 * previous = (i + n - 1) % n
 * */
function numRotations(arr){
    let min = arr[0];
    let index = 0;
    for(let i = 0; i < arr.length; i++){
       if(arr[i] < min){
           min = arr[i];
           index = i;
       }
   }
   return index;
}
/** 
 * ###################################
 * COUNT ROTATIONS USING BINARY SEARCH
 * ###################################
 * To use binary search there is a problem: you cannot simple find the smallest 
 * value by going to the middle of the array and discarding half of the array 
 * because the rotation has distorted the order.
 * 
 * There is however one unique value in the array, the pivot. The pivot is the 
 * only value for which the next value is smaller.
 * [3,4,5,1,2]  -> pivot = 5 or arr[2]
 * 
 * To find the pivot perform an adapted binary search:
 * - find the middle of the arr
 * 
 * - case 1: 
 *      middle < high -> have different indices, excludes [1] 
 *      && [middle + 1] is smaller -> pivot found at middle
 *      Example: [3,4,5,1,2]    -> pivot = arr[2]
 *      Example: [4,3]          -> pivot = arr[0]  
 * 
 * - case 2: 
 *      middle > low -> excludes example [5,1] with middle = arr[0] = low
 *      && [middle - 1] is bigger -> pivot found at middle - 1
 *      Example: [4,5,1,2,3]    -> pivot = arr[1]
 * If no immediate pivot is found at middle or middle - 1, repeat the search
 * with different parameters: left subarray or right subarray
 * 
 * - case 3:
 *      arr[low] >= arr[middle] means that the left subarray is not entirely
 *      sorted in ascending order
 *      -> repeat pivotSearch with adjusted parameter: high = middle - 1
 *      Example: [5,1,2,3,4]
 * 
 * - case 4: 
 *      Right subarray is not entirely sorted in ascending order
 *      -> repeat pivotSearch with adjusted parameter: low = middle + 1
 *      Example: [2,3,4,5,1]
 * 
 * - if no pivot is found, the array is not rotated and the smallest value of
 * a sorted not rotated array is at index 0. Thus return 0.
 * - if pivot, return pivot + 1 to find the number of rotations 
 */
function findPivot(arr, low = 0, high = arr.length -1){
    if(high < low){  //invalid order
        return -1;
    }
    if(low === high){  //single element array
        return -1;
    }
    let middle = Math.floor((low + high) / 2);
    if(middle < high && arr[middle] > arr[middle + 1]){
        return middle;  //case 1
    }
    if(middle > low && arr[middle] < arr[middle - 1]){
        return middle - 1; //case 2
    }
    if(arr[low] >= arr[middle]){
        return findPivot(arr, low, middle - 1); //case 3
    }
    return findPivot(arr, middle + 1, high); //case 4
}
//Note, to find the minimum value, return switch the return values for case 2 
//and case 3.

function numRotationsWithBs(arr){
    const pivot = findPivot(arr)
    if(pivot === -1){
        return 0;
    }
    return pivot + 1;
}
/**
 * Time complexity for this approach is O(1) in best case and O(log (n)) in the
 * worst case. 
 * */
module.exports = {
    numRotations,
    findPivot,
    numRotationsWithBs
}
