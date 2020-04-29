/* 
#######################################
FIND INDEX POSITION OF ELEMENT IN ARRAY
#######################################

Write a function that finds the (first) index of a given element in a SORTED
array.

Assume that there are no duplicates or if there are, you only return the first
index position at which the element is found.

If the element is not found in the array return -1.

Use a solution that is more time efficient than the basic linear search method.

BINARY SEARCH LOGIC
Binary search compares the target value to the middle element of the array; if 
they are unequal, the half in which the target cannot lie is eliminated and the 
search continues on the remaining half until it is successful. If the search ends 
with the remaining half being empty, the target is not in the array.

IMPLEMENTATION
The key challenge is to halve the array on each iteration. You start with the 
middle of the original array with two possibilities: go up (right) or go down 
(left). Discarding the lower half means you adjust the starting index of
the array: arr[0] is moved to arr[middle + 1]. Discarding the upper half means 
you bring down the last index: arr[last] is moved to arr[middle - 1], this 
happens in memory and we keep working with original array. 

Example: seek index for number 4 in [0,1,2,3,4].
Middle value = arr.length - 1 / 2 = 4 / 2 = 2, arr[2] = 2
Three options are open: 
    arr[i] = seekElem, return i
    arr[i] < seekElem, discard all elem < arr[i]
        [arr[middle + 1] ... arr[last]]
        in the example: [0,1,2,[3,4]] 
    arr[i] > elem you seek -> discard all elem < arr[i]
        new arr = [arr[0] ... arr[middle - 1]];
        in the example: [[0,1],2,3,4]
Repeat the process in next example iteration:
middleIndex = 3 + 4 / 2 = 7 / 2 = 3.5 = 3 and 3 < 4 thus next iteration with
startIndex = 3 + 1 = 4, lastIndex = 4, middleIndex = 4 + 4 / 2 = 4 and 
4 = seekElem, return middleIndex

The loop should end when the array is empty, thus when startIndex becomes 
bigger than the lastIndex or the lastIndex becomes smaller than startIndex.
You can use a while or for loop.
*/
function binarySearch(arr, seekEl){
    let startIndex = 0;
    let lastIndex  = arr.length - 1;
    let middleIndex;

    while(startIndex <= lastIndex){
        middleIndex = Math.floor((startIndex + lastIndex) / 2);

        if(arr[middleIndex] === seekEl){
            return middleIndex;
        } else if(arr[middleIndex] < seekEl){
            startIndex = middleIndex + 1;
        } else {
            lastIndex = middleIndex - 1;
        }
    }
    return -1;    
}
/*
TIME COMPLEXITY EVALUATION
Since we half the array on each iteration the algorithm is time-efficient with
O(log(n)). For each doubling in length of the array(n), the time to complete
the function will only increase with one unit of time.

OBJECT SEARCH
The logic is the same but you have to convert the elements you compare into 
strings using the JSON.stringify() method.
*/
function objectSearch(arr, seekObj){
    if(!typeof(seekObj) === 'object') return binarySearch(arr, seekObj);
    
    let startIndex = 0;
    let lastIndex  = arr.length - 1;
    let middleIndex;

    while(startIndex <= lastIndex){
        middleIndex = Math.floor((startIndex + lastIndex) / 2);

        if(JSON.stringify(arr[middleIndex]) === JSON.stringify(seekObj)){
            return middleIndex;
        } else if(JSON.stringify(arr[middleIndex]) < JSON.stringify(seekObj)){
            startIndex = middleIndex + 1;
        } else {
            lastIndex = middleIndex - 1;
        }
    }
    return -1; 
}

module.exports = {
    binarySearch,
    objectSearch
}