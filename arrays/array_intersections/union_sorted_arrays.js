/**
 * ############
 * ARRAY UNIONS
 * ############
 * Given two sorted arrays. Write a function that returns the union of thaose
 * arrays.
 * 
 * Example:
 * const arr1 = [1,2,4,5,7,8]
 * const arr2 = [1,2,3,6,8,9,10]
 * -> union = [1,2,3,4,5,6,7,8,9,10]
 * 
 * Note that the arrays can be of different lenght and values may occur in both 
 * arrays.
 * 
 * LOGIC
 * - use a loop that runs untill we reach the end of one of the arrays
 * 
 * - use two pointers i and j that move independently
 * 
 * - at each value arr1[i] and arr2[j] there are three possibilities:
 * arr1[i] = arr2[j] -> add one of them to union, move both pointers + 1
 * if arr1[i] > arr2[j] -> add smallest value (arr2[j]) to union and move pointer j = j+1
 * if arr1[i] < arr2[j] -> add smallest value (arr1[i])to union and move pointer i = i+1
 * 
 * - when the end of the shortest arr is reached the loop will break but there may be 
 * values left to add in the longer array. There two ways to handle this: 
 * -- determine the longest arr at the start and use a for loop. Inside the conditional 
 * statements you have to add a check for shortest[j] to be undefined
 * -- add two additional while loops that run up the pointer values to n or m
 */
module.exports = function findUnion(arr1, arr2){
    const n = arr1.length;
    const m = arr2.length;
    let i = 0;
    let j = 0;
    let union = [];
    while(i < n && j < m){
        console.log(union)
        if(arr1[i] === arr2[j]){
            union.push(arr1[i]);
            i++;
            j++;
        } else if(arr1[i] > arr2[j]){
            union.push(arr2[j]);
            j++;
        } else {
            union.push(arr1[i]);
            i++;
        }
    }
    while(i < n){
        union.push(arr1[i]);
        i++;
    }
    while(j < m){
        union.push(arr2[j]);
        j++;
    }
    return union;
}
/**
 * TIME COMPLEXITY
 * The above function will run in O(max(n,m)), the lenght of the longest array.
 */