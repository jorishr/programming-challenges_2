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

module.exports = {
    containsSubstr
}