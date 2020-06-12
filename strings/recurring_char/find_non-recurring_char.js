/**
 * ###############################
 * FIRST NON RECURRING CHAR IN STR
 * ###############################
 * Write a function that returns the first non-recurring character that can be
 * found in a given string.
 * 
 * Examples: 
 * 'aabbcdd'   -> 'c'
 * 'aabbcdde'  -> 'c'
 * 'aabbccdde' -> 'e'
 * 'abbccddee' -> 'a'
 * 
 * An acceptable solution in O(2n) is to loop over string, store the frequency
 * in of each character in an object. Loop over the string again and return the
 * first element for which frequency is 1.
 */
function findFirstNonRecurringChar(str){
    let freq = {};
    for(let i = 0; i < str.length; i++){
        if(freq[str[i]]) freq[str[i]]++;
        else freq[str[i]] = 1; 
    }
    for(let i = 0; i < str.length; i++){
        if(freq[str[i]] === 1) return str[i];
    }
    return -1
}
/**
 * IMPROVEMENTS
 * For very large string, the above approach can become problematic as running
 * over the string twice is not optimal.
 * 
 * Instead we can store the frequency in an object of max 256 characters. Each 
 * key in the object will have property that is an array with two elements:
 * - frequency
 * - index position at which it was found first
 * 
 * Example for 'aabbcddee':
 * { a: [ 2, 0 ], b: [ 2, 2 ], c: [ 1, 4 ], d: [ 2, 5 ], e: [ 2, 7 ] }
 * 
 * Then looping over the values in the object of max size 256 to find the
 * element with frequency == 1 will be much faster than looping over the entire
 * string again, at least for very large strings. 
 */
function findFirstNonRecurringCharOptmzd(str){
    let freq = {};
    for(let i = 0; i < str.length; i++){
        if(freq[str[i]]) freq[str[i]][0]++
        else {
            freq[str[i]] = [],
            freq[str[i]][0] = 1; 
            freq[str[i]][1] = i; 
        }
    }
    //console.log(freq)
    const values = Object.values(freq);
    for(let i = 0; i < values.length; i++){
        if(values[i][0] === 1) return str[values[i][1]]
    }
    return -1
}
/**
 * COMPLEXITY ANALYSIS
 * The time complexity remains the same at O(n) and the space complexity is the
 * size of the object to stores the frequency, which is O(n) for smaller strings
 * less than length 256. For larger strings the max space is O(256) and could be
 * considered constant space O(1).
 * */
/*
//time test
const str1 = `
aabbddeeaabbddeeaabbddeeaabbddeeaabbddeeaabbddeeaabbddeeaabbddeeaabbddee
aabbddeeaabbddeeaabbddeeaabbddeeaabbddeeaabbddeeaabbddeeaabbddeeaabbddee
aabbddeeaabbddeeaabbddeeaabbddeeaabbddeeaabbddeeaabbddeeaabbddeeaabbddee
aabbddeeaabbddeeaabbddeeaabbddeeaabbddeeaabbddeeaabbddeeaabbddeeaabbddee
aabbddeeaabbddeeaabbddeeaabbddeeaabbddeeaabbddeeaabbddeeaabbddeeaabbddee
caabbddeeaabbddeeaabbddeeaabbddeeaabbddeeaabbddeeaabbddeeaabbddee
aabbddeeaabbddeeaabbddeeaabbddeeaabbddeeaabbddeeaabbddeeaabbddeeaabbddee
aabbddeeaabbddeeaabbddeeaabbddeeaabbddeeaabbddeeaabbddeeaabbddeeaabbddee
aabbddeeaabbddeeaabbddeeaabbddeeaabbddeeaabbddeeaabbddeeaabbddeeaabbddee
aabbddeeaabbddeeaabbddeeaabbddeeaabbddeeaabbddeeaabbddeeaabbddeeaabbddee
aabbddeeaabbddeeaabbddeeaabbddeeaabbddeeaabbddeeaabbddeeaabbddeeaabbddee
`
console.time('basic')
console.log(findFirstNonRecurringChar(str1))
console.timeEnd('basic')    //-> ~= 20ms 
console.time('optimal')
console.log(findFirstNonRecurringCharArr(str1))
console.timeEnd('optimal')  //-> ~= 2ms
*/
module.exports = {
    findFirstNonRecurringChar,
    findFirstNonRecurringCharOptmzd
}