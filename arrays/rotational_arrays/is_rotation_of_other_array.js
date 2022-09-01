/**
 * #######################################
 * IS AN ARRAY A ROTATION OF ANOTHER ARRAY 
 * #######################################
 * Write a function that determines whether a given is array is a rotation of
 * another given array.
 * 
 * Example:
 * const baseArr  = [1,2,3,4]     
 * const inputArr = [2,3,4,1]
 * -> true     
 * 
 * const baseArr1  = [10,5,7,12]; 
 * const inputArr1 = [5,1,12,10];
 * -> false 
 * 
 * Rotation was clockwise, counter clockwise or both? Both.
 * Was the original array sorted? Irrelevant
 * Is it known how many times a rotation was performed? At least once.
 * 
 * LOGIC
 * To be a rotation of another arr there are a couple of base conditions:
 * - length of both arrays cannot be different
 * - all elements needs to be present in both arrays
 * 
 * The clue however has to do with the starting indices of both
 * arrays. 
 * - find inputArr[0] in the baseArr
 * - use that index to calculate the position of baseArr[0] in inputArr
 * This should be m - foundIndex
 *
 * Example I: one rotation in clockwise direction
 * -- baseArr = [1,2,3,4], inputArr = [4,1,2,3]
 * -- found inputArr[0] in baseArr at index = 3                    
 * -- position of baseArr[0] should be position = m - index = 4 - 3 = 1
 * 
 * Example II: two rotations in clockwise direction  
 * -- baseArr = [1,2,3,4], inputArr = [3,4,1,2]
 * -- found inputArr[0] in baseArr at index = 2                    
 * -- position of baseArr[0] should be position = m - index = 4 - 2 = 2
 * 
 * Example III: one rotation in counter-clockwise direction  
 * -- baseArr = [1,2,3,4], inputArr = [2,3,4,1]
 * -- found inputArr[0] in baseArr at index = 1                    
 * -- position of baseArr[0] should be position = m - index = 4 - 1 = 3
 * 
 * To check for the above, as well as if all elements present in both arrays,
 * loop over the inputArr with two different pointers. One starting at 
 * baseArr[0], the other at inputArr[rotationStart]
 * 
 * Since the inputArr is rotated, the next value is i + 1 % m
 * 
 * Time complexity for this approach is O(n^2).
 * 
 * NOTE: There is a similar exercise that compares two strings.
 */
module.exports = function isRotationOf(baseArr, inputArr){
    const n = baseArr.length; 
    const m = inputArr.length;
    if(n !== m) return false;
    //find index of inputArr[0] in baseArr
    let index;
    for(let i = 0; i < n; i++){
        if(baseArr[i] === inputArr[0]){
            index = i;
        }  
    }
    //if not found, inputArr cannot be a rotation of baseArr
    if(!index) return false;
    //to be a rotation, first index of baseArr should found at m - index in inputArr  
    let rotationStartIndex = m - index;
    //loop over input array, starting at the index of the rotation start 
    //compare whether all values are equal to base arr values
    let pointerInput  = rotationStartIndex; 
    let pointerBase   = 0;
    for(let i = 0; i < m; i++){
        if(baseArr[pointerBase] === inputArr[pointerInput]){
            pointerBase++
            pointerInput = (pointerInput + 1) % m
        } else return false;       
    }
    return true;
}