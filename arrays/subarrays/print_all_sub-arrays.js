/**
 * ####################################
 * PRINT ALL SUBARRAYS OF A GIVEN ARRAY
 * ####################################
 * Given an arr [1,2] write a function that prints all possible subarrays.
 * [1,2] -> [], [1], [1,2], [2]
 * 
 * The problem can be defined as follows: For each element there are two
 * possible choices: include or exclude from the subset
 * In total we have to make 2^n decisions. The decision tree looks like a 
 * recursion tree, starting with empty array:
 *                      []
 * i = 0        [1]             [] 
 * i = 1   [1,2]   [1]       [2]  [] 
 * Thus for [1,2] there are 2^2 = 4 subarrays.                
 * Thus for [1,2,3] there are 2^3 = 8 subarrays.                
 */
function printAllSubArr(arr){
    findSubset(arr, subset = [], 0);
    function findSubset(arr, subset, i){
        //reached end of arr
        if(i === arr.length){
            return console.log(subset);
        } 
        subset[i] = null;
        findSubset(arr, subset, i + 1);
        subset[i] = arr[i];
        findSubset(arr, subset, i + 1);
    };
}
console.log(printAllSubArr([1,2]))
//console.log(printAllSubArr([1,2,3]))