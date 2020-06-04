/**
 * #####################################
 * III. FIND THE INDEX OF A GIVEN NUMBER
 * #####################################
 * - assume the array is circularly sorted in ascending order
 * - assume there are no duplicates
 * 
 * LOGIC
 * - use a standard binary search function
 * - find pivot function: the only element for which the next element is 
 * smaller
 * 
 * - if no pivot found, arr is not rotated -> simple binary search
 * - if pivot found, check if pivot == key
 * - if key >= arr[0], binary search beginning array to pivot - 1 because it is
 * an ordered array and from the pivot onwards we have the smallest value. 
 * - if key <= arr[0], binary search pivot + 1 to end arr because in the 
 * ordered array the smaller values are found on that right subarray.
 */
const findPivot = require('./count_rotations').findPivot;

function binarySearch(arr, low = 0, high = arr.length - 1, key){
    if(high < low){
        return -1;
    }
    let middle = Math.floor((low + high) / 2);
    if(arr[middle] === key){
        return middle;
    }
    if(key > arr[middle]){
        return binarySearch(arr, middle + 1, high, key);
    } else if (key < arr[middle]){
        return binarySearch(arr, low, middle - 1, key);
    }
}

function pivotedBinarySearch(arr, key){
    let pivot = findPivot(arr);
    console
    if(pivot === -1){
        return binarySearch(arr, 0, arr.length - 1, key);
    }
    if(arr[pivot] === key){
        return pivot;
    }
    if(key >= arr[0]){
        return binarySearch(arr, 0, pivot - 1, key)
    } else {
        return binarySearch(arr, pivot + 1, arr.length - 1, key);
    }
}
module.exports = {
    pivotedBinarySearch
}