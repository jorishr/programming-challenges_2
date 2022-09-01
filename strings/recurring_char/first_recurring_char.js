/**
 * ####################
 * FIRST RECURRING CHAR
 * ####################
 * Write a function that takes in a string and returns the first recurring 
 * character.
 * 
 * 'abcba' -> b
 * 
 * A naive approach would be to use a double loop and check for each character
 * whether there is a duplicate, O(n^2)
 * 
 * Better would be to loop only once and store each char in an object. If we
 * find a char that is part of the arr, that one is the first recurring 
 * character.
 * 
 * This function will run on O(n), but adds space complexity of O(n) at worst.
 */
module.exports = function findFirstRecurring(str){
    let presentChar = {};
    for(let i = 0; i < str.length; i++){
        if(presentChar[str[i]] === 1){
            return str[i];
        }
        presentChar[str[i]] = 1;
    }
    return null;
}