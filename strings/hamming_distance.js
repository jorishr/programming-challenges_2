/**
 * ####################
 * THE HAMMING DISTANCE
 * ####################
 * The hamming distance between two strings of equal length is the number of
 * index positions at which the symbols are different. It is a way to know how
 * many character substitutions are needed to convert one string into the 
 * other string. 
 * 
 * LOGIC
 * Loop over the strings and compare characters.
 * 
 * Only one loop is required to check both strings resulting in a time 
 * complexity of O(n).
 */
module.exports = function (a,b){
    let distance = 0;
    for(let i = 0; i < a.length; i++){
        if(a[i] !== b[i]){
            distance += 1;
        }
    }
    return distance;
}