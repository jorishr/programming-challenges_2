/**
 * #############################################
 * FIND THE COMMON ELEMENTS IN TWO SORTED ARRAYS
 * #############################################
 * Given are two sorted arrays. Write a function that returns the elements
 * that occur in both arrays.
 * 
 * Note: arrays can be of different length.
 * 
 * Example
 * const arr1 = [1,3,4,6,7,9]
 * const arr2 = [1,2,4,5,9,10]
 * 
 * The brute force approach would be to use a double loop to check for each
 * item in the longest arr whether the element occurs in the other array.
 * 
 * A more efficient approach will find all common elements in O(max(n,m)).
 * 
 * Use one while loop and traverse each array independently by using 
 * different pointers.
 * 
 * Both pointers, i and j, start at index 0. Since both arrays are sorted, 
 * there are three possibilities:
 * - arr1[i] == arr2[j], push to result and move pointers
 * 
 * - arr1[i] > arr2[j], this means that arr2[j] cannot be a common element as
 * it would have been found in arr1 at an earlier position. 
 * Move pointer j++ and get to next loop  
 * 
 * Example: arr1 = [1,3,4,6,7,9]     arr2 = [1,2,4,5,9,10]
 *             i = 1  ^                 j = 1  ^    
 * next loop   i -> 1                   j = 2
 * 
 * - arr1[i] < arr2[j], this means that arr2[i] cannot be a common element as
 * it would have been found in arr2 at an earlier position
 * Move pointer i++ and get to next loop
 * 
 * Example: arr1 = [1,3,4,6,7,9]     arr2 = [1,2,4,5,9,10]
 *             i = 4        ^           j = 4        ^    
 * next loop   i = 5                    j = 4
 */
function findCommonElems(arr1, arr2){
    let i = 0;
    let j = 0;
    let result = [];
    while(i < arr1.length && j < arr2.length){
        if(arr1[i] === arr2[j]){
            result.push(arr1[i]) 
            i++;
            j++;
        } 
        if(arr1[i] > arr2[j]) j++ 
        else if(arr2[j] > arr1[i]) i++
    }    
    return result;
}
/**
 * To add a third array:
 * - add additional pointer
 * - update the while loop condition
 * - update 3 posibilties:
 * arr1[i] < arr2[j] -> i++
 * arr2[j] < arr3[k] -> j++ 
 * arr1[i] > arr2[j] or arr2[j] > arr3[k] -> k++
 */
function findCommonElemsThree(arr1, arr2, arr3){
    let i = 0;
    let j = 0;
    let k = 0;
    let result = [];
    while(i < arr1.length && j < arr2.length && k < arr3.length){
        if(arr1[i] === arr2[j] && arr2[j] === arr3[k]){
            result.push(arr1[i]) 
            i++;
            j++;
            k++;
        } 
        if(arr1[i] < arr2[j]) i++ 
        else if(arr2[j] < arr3[k]) j++
        // arr1[i] > arr2[j] or arr2[j] > arr3[k]
        else k++
    }    
    return result;
}
module.exports = {
    findCommonElems,
    findCommonElemsThree
}