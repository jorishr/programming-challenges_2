/**
 * ########################################
 * COUNT NEGATIVE INTEGERS IN SORTED MATRIX
 * ########################################
 * Given is a 2d array with both rows and columns sorted. Count the amount of
 * negative integers present in the matrix.
 * const matrix = [
 *      [-4,-3,-1,0],
 *      [-2,-2, 0,1],
 *      [-1, 0, 1,2],
 *      [ 0, 1, 2,3]
 * ]
 * 
 * The naive approach is to loop over all row and columns and count the 
 * negative integers in O(n^2) for a square matrix or O(n*m).
 * 
 * The better solution is to make use of the sorting. Start at m - 1, 
 * the last column, and loop backwards. Once you find a negative integer, you
 * know that all preceding elements are negative as well.
 * 
 * [-4,-3,-1,0] -> at arr[m - 1] is negative thus all arr[0] to arr[m - 1] are
 * all negative.
 * 
 * The time complexity is hereby reduced to O(n + m) if you use a single while 
 * loop that depends on an n condition and m condition.
 */
module.exports = function countNegatives(arr){
    //loop`over rows
    let count = 0;
    let i = 0;
    let n = arr.length
    let j = arr[0].length - 1;
    while(i < n && j >= 0){
        if(arr[i][j] < 0){
            count += j + 1 
            i++
        } else {
            j--;
        }
    }
    return count
}