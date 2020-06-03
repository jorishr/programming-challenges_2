/**
 * ######################
 * I.   ROTATIONAL ARRAYS
 * ######################
 * A rotational or circular array is an array whereby the array functions as
 * a shell for the actual array. 
 * 
 * const arr = [5, 6, 1, 2, 3, 4]
 * 
 * The actual array starts at index position 2 (1) and ends at index position 1
 * (6) because the array has been rotated twice.
 * 
 * - Assume the array is sorted in ascending order. 
 * - Assume there are no duplicates
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
 * const arr = [4,5,1,2,3]
 * let middle = Math.floor(arr.length - 1 / 2) = 2 
 * (formula for both even/odd length arrays)
 * let last = arr.length - 1 = 4 * 
 * arr[middle] = 1
 * arr[middle + 1] = 2 
 * arr[mddile - 1] = 5 
 * arr[last + 1] = undefined
 * arr[previous - 1] = undefined
 * 
 * To account for these cases we can use:
 * let next = (x + 1) % n
 * let previous = (x - 1) % n + n
 * next = (4 + 1) % 5 = 5 % 5 = 0   -> arr[last + 1]  = arr[0] = 4 
 * next = (2 + 1) % 5 = 3 % 5 = 3   -> arr[2 + 1]     = arr[3] = 2
 * next = (1 + 1) % 5 = 2 % 5 = 2   -> arr[1 + 1]     = arr[2] = 1
 * previous = (0 - 1) % 5 + 5 = 4   -> arr[first - 1] = arr[4] = 3
 * For all other index position the modulo result does not change anything.
 * 
 */
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
 * ##################
 * II.  BINARY SEARCH
 * ##################
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
 * with different paramaters: left subarray or right subarray
 * - case 3:
 *      arr[low] >= arr[middle] means that the left subarray is not entirely
 *      sorted in ascending order
 *      -> repeat pivotSearch with adjusted parameter: high = middle - 1
 *      Example: [5,1,2,3,4]
 * - case 4: 
 *      Right subarray is not entirely sorted in ascending order
 *      -> repeat pivotSearch with adjusted paramter: low = middle + 1
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
//Note, to find the minumum value, return switch the return values for case 2 
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
 * 
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
    numRotations,
    numRotationsWithBs,
    findPivot,
    pivotedBinarySearch,
    binarySearch 
}