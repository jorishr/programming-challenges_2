/**
 * A rotational or circular array is an array whereby the array functional as
 * a shell for the actual array. 
 * 
 * const arr = [5, 6, 1, 2, 3, 4]
 * 
 * The actual array starts at index position 2 (1) and ends at index position 1
 * (6) because the array has been rotated twice.
 * 
 * Assume the array is sorted. How many times has the array been rotated?
 * 
 * To answer the question we need to find the starting point of the original 
 * array. For a sorted array this is the smallest value in the array.
 * 
 * If know the index of the smallest value, we also know how many times it has
 * shifted to right.
 * 
 * To find the smallest value in the array we can use:
 * - linear search: O(n)
 * - binary search: O(log n)
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
 * To use binary search there is a problem: you cannot simple find the smallest 
 * value by going to the middle and discarding half of the array because the
 * rotation has distorted the order.
 * 
 * There is however one unique property of the smallest value: both the
 * previous and the next value are bigger values.
 * 
 * This leads to 4 options:
 * - arr[0] <= arr[last], arr[0] is the smallest value in a sorted array.
 * - arr[middle] <= arr[middle - 1] && arr[middle] <= arr[middle + 1],
 * the middle value is the smallest in the array
 * - arr[middle] <= arr[last], that segment is sorted and the smallest value
 * cannot exist here. This means we have to repeat or BS with the new 
 * arr[last] set to arr[middle - 1]
 * - arr[middle] >= arr[0], that means the smallest value does not exist in the
 * left segment of the array and we have to repeat our search in the right 
 * segment with arr[0] set to arr[middle + 1]
 * 
 * Define two variables first and last that form the limits of the bs segments
 */
function numRotationsWithBs(arr){
    let first = 0;
    let last  = arr.length - 1;
    let n     = arr.length;
    while(first <= last){
        if(arr[first] <= arr[last]) return first;
        let middle = Math.floor((arr.length - 1) / 2);
        //next and previous value can be at the beginning or end, use modulo to
        //keep counting circularly arr.length - 1 = arr[5] -> next = 5 + 1 % 6 = arr[0]  
        let next     = (middle + 1) % n;    
        let previous = (middle - 1) % n;
        if(arr[middle] <= arr[previous] && arr[middle] <= arr[next]){
            return middle;
        } else if(arr[middle] <= arr[last]){
            last = middle - 1;
        } else if(arr[middle] >= arr[first]){
            first = middle + 1;
        } else {
            //if previous if statements don't apply the array is not sorted
            return null;
        }   
    }
    //if while loop does not lead to return result the array is not circularly sorted
    return null;
}
/**
 * Time complexity for this approach is O(1) in best case and O(log (n)) in the
 * worst case.
 */

module.exports = {
    numRotations,
    numRotationsWithBs
}