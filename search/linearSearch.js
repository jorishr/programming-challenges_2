/* 
#######################################
FIND INDEX POSITION OF ELEMENT IN ARRAY
#######################################

Write a function that finds the (first) index of a given element in an array.
Assume that there are no duplicates or if there are, you only return the first
index position at which the element is found.

If the element is not found in the array return -1.

*/
function basicSearch(arr, el){
    for(i = 0; i < arr.length; i++){
        if(arr[i] === el){
            return i;
        }
    }
    return -1;
}
/*
TIME COMPLEXITY EVALUATION
You loop over the entire array once (in the wors case), thus O(n) or linear 
complexity. It is a brute force technique and useful if the array is not 
sorted. If you can work with sorted arrays, more efficient options can be 
explored such as binary search, block search or interpolation search.

ADVANCED SEARCH
Adjust the function so that it can return an array of index positions when an
element is found more than once.
*/
function advancedSearch(arr, el){
    let indices = [];
    for(i = 0; i < arr.length; i++){
        if(arr[i] === el){
            indices.push(i);
        }
    }
    return indices;
}

/* 
OBJECT SEARCH
Modify the advanced function so that it can also search through an array of
objects and find the index position(s) of a given object.
*/

function objectSearch(arr, obj){
    if(typeof(obj) === 'object'){
        let indices = [];
        for(i = 0; i < arr.length; i++){
            if(JSON.stringify(arr[i]) === JSON.stringify(obj)){
                indices.push(i);
            }
        }
        return indices;
    } else {
        return advancedSearch(arr, obj);
    }
}

module.exports = {
    basicSearch,
    advancedSearch,
    objectSearch
}