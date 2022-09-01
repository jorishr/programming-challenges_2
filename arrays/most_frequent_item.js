/**
 * #####################
 * MOST FREQUENT ELEMENT
 * #####################
 * Given an array of integers, write a function that returns the element that
 * occurs most frequently in the array. 
 * 
 * Assume there is always a unique element that occurs most frequently.
 * 
 * Example 
 * [1,2,1,3,1,4]    -> return 1
 * 
 * The brute force approach would be to loop over the arr n * n times and count
 * the occurance of each element.
 * 
 * Loop over arr just once and store each elem in counter dict, also keep track
 * of highest count.
 * i = 0    arr[i]
 * i = 1    if arr[i] in dict, increment, else add to dict
 */
module.exports = function findMostFrequent(arr){
    let dict = {} 
    let mostFrequent = arr[0];
    for(let i = 0; i < arr.length; i++){
        //console.log(i, dict[arr[i]], dict, mostFrequent)
        if(arr[i] in dict){
            dict[arr[i]] = dict[arr[i]] + 1
            if(dict[mostFrequent] < dict[arr[i]]) mostFrequent = arr[i];
        } 
        else dict[arr[i]] = 1;
    }
    //return {dict, mostFrequent};
    return mostFrequent;
}
/**
 * TIME COMPLEXITY
 * This function runs in O(n). One loop 0 to n with operations that take O(1) 
 * time. 
 * 
 * Space complexity is O(n) or the size of the dictionary.
 */