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
const isPalindrome = require('../string-reversal&palindrome').isPalindrome;
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
/**
 * The time complexity for the above solution is very bad at O(n^3) because of
 * the two loops and the isPalindrome function.
 * 
 * This time complexity can be reduced to O(n^2) if you store the intermediate 
 * results in a n x n matrix with n = str.length. The price to be paid is the 
 * size of the matrix in memory: O(n^2)
 * 
 *      b   a   n   a   n   a   s
 * b    t   f   f   f   f   f   f     
 * a        t   f   t   f   t   f
 * n            t   f   t   f   f   
 * a                t   f   t   f
 * n                    t   f   f
 * a                        t   f
 * s                            t
 * */

/**
 * ###########################################
 * SHORTEST SUBSTRING CONTAIN GIVEN CHARACTERS
 * ###########################################
 * Given a string and a set of characters, return the shortest substring
 * containing all the characters in the set.
 * 
 * For example, given the string "figehaeci" and the set of characters 
 * {a, e, i}, you should return "aeci".
 * 
 * LOGIC
 * This is a similar setup as trying to find palindrome substrings. Instead of
 * checking if the substring is a palindrome you check if it contains all the
 * characters.
 * 
 * Another adjustment to make is the starting size of the variable that tracks
 * the shortest string. You cannot start at empty string but should start with
 * the length of the original string.
 * 
 * This also means that if the set cannot be found in the entirety of the
 * string, no need to continue the search.
 * 
 */
function findShortestSubStrWithSet(str, set){
    let shortest = str;
    if(!includesSet(str, set)) return -1;
    const n = str.length;
    shortest.length = n
    for(let i = 0; i < n; i++){
        let subStr = '';
        for(let j = i; j < n; j++){
            subStr += str[j];
            if(includesSet(subStr, set) // helper fn 
                && subStr.length < shortest.length
            ){
                shortest = subStr;
            }
        }
    }
    //if empty str, no substring with full set found
    return shortest ? shortest : -1;
}
function includesSet(str, set){
    let i = 0;
    while(i < set.length){
        if(!str.includes(set[i])) return false;
        i++
    }
    return true;
}
console.log(findShortestSubStrWithSet('acbdeaaa', ['a', 'b']))
module.exports = {
    findLongestSubStr,
    findPalindromicSubStr,
    includesSet,
    findShortestSubStrWithSet
}