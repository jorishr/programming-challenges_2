/**
 * ################
 * SUBSTRING SEARCH
 * ################
 * Does a given substring exist in a given string?
 * 
 * The basic approach is to loop over the string and compare the character with
 * the first characters in the substring. If it is a match, compare the next 
 * character in the string with the next character in the substring, etc.
 *
 * LOGIC
 * - loop over str
 * - if str[i] = substr[i]
 *   -- loop over str again starting at j = i+1 to substr.length
 *      If a mismatch is found return false
 *   -- if both loops complete return true 
 * 
 * Edges cases: empty strings and length substr > length str
 * The time complexity of this approach is O(n*m).
 * 
 * Further study: The Knuth–Morris–Pratt Algoritm improves time complexity
 * to O(n + m).
 */
function containsSubstr(str, substr){
    const n = str.length;
    const m = substr.length;
    if(!n || !m || m > n) return false
    for(let i = 0; i < n; i++){
        if(str[i] === substr[i]){
            for(let j = i + 1; j < m; j++){
                if(!str[j] === substr[j]) return false;
            }
        }
    }
    return true;
}
/**
 * ##################################################
 * FIND LONGEST SUBSTRING WITH K DIFFERENT CHARACTERS
 * ##################################################
 * Given a string and an positive integer k, write a function that returns the
 * longest possible substring with at most k different characters.
 * 
 * Thus given 'abcded' and k = 2, the result is 'ded'
 * 
 * LOGIC
 * - there is 1 different character 'aba'
 * - there are 2 different characters 'abca'
 * find all possible substrings 
 * track the number of different characters in each substring
 * track length of each substring and compare to longest if length <= k 
 * */
function findLongestSubStr(str, k){
    const n = str.length;
    let longestStr = '';
    for(let i = 0; i < n; i++){
        let subStr = '';
        let numDifferentChar = 1;
        subStr = str[i]
        for(let j = i + 1; j < n; j++){
            if(!subStr.includes(str[j])) numDifferentChar += 1;
            subStr += str[j]
            if(numDifferentChar <= k && subStr.length > longestStr.length){
                longestStr = subStr;
            }
        }
    }
    return longestStr;
}
/**
 * ######################################
 * FIND THE LONGEST PALINDROMIC SUBSTRING
 * ######################################
 * Given a string, find the longest palindromic contiguous substring. If there
 * are more than one with the maximum length, return any one.
 * 
 * For example, the longest palindromic substring of "aabcdcb" is "bcdcb". The 
 * longest palindromic substring of "bananas" is "anana".
 * 
 * - reuse the isPalindrome function
 * - find all substrings
 * - check if they are palindrome
 * - if true, store in variable and compare
 * 
 * All single character substrings are palindromes 
 * 'abcde' -> 'a'
 * If you want a min requirement of 2, add that to the conditional statement
 * 'abcde' -> -1
 * Egde case: empty string '', -> -1
 */
const isPalindrome = require('./string-reversal&palindrome').isPalindrome;
function findPalindromicSubStr(str){
    let longest = '';
    const n = str.length;
    for(let i = 0; i < n; i++){
        let subStr = '';
        for(let j = i; j < n; j++){
            subStr += str[j];
            if(isPalindrome(subStr) 
                && subStr.length > longest.length
                //&& subStr.length > 1
            ){
                longest = subStr;
            }
        }
    }
    //if empty str, no palindromes found
    return longest ? longest : -1;
}

module.exports = {
    containsSubstr,
    findLongestSubStr,
    findPalindromicSubStr
}