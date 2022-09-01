/**
 * ####################
 * LEVENSHTEIN DISTANCE
 * ####################
 * Levenshtein distance is a string metric for measuring the difference between
 * two sequences.
 * 
 * It is the minimum number of single-character edits (insertions, deletions or 
 * substitutions) required to change one string into the other. 
 * 
 * Examples: 
 * - str1 = "geek", str2 = "gesek"
 * Edit distance: 1, as we can convert str1 into str2 by inserting a 's'.
 * 
 * - str1 = "cat", str2 = "cut"
 * Edit distancet:  1, as we can convert str1 into str2 by replacing 'a'
 * with 'u'.
 * 
 * - str1 = "sunday", str2 = "saturday"
 * Edit distance: 3, as the ast three and first characters are the same. We 
 * need to convert "un" to "atur". This can be done using three operations. 
 * Replace 'n' with 'r', insert 't', insert 'a'
 * 
 * There is a recursive approach and a bottom-up approach. 
 * The recursion has an exponential time complexity of O(3^n) with a recursion
 * tree that contains many duplicate calculations.
 * 
 * The bottom-up approach reduce the time complexity to O(n * m) at a cost of
 * increased space complexity to O(n * m).
 * 
 * I.   RECURSION
 * 
 * A. Base cases: 
 * - one str is empty, return the length of the other str
 * - str1 == str2 return 0
 * 
 * B. Start at the end of the string and compare the values. If they are equal
 * process the remaing substrings recursively.
 * - fn('cat', 'cut')
 * - fn('ca', 'cu')
 * - fn...
 * Eventually base cases n == 0, m == 0 or str1 == str2 will be reached.
 * 
 * C. if str1[last] != str2[last] we need to perform insertion, deletion or
 * subsitution on str1. Count the number of operations for each path 
 * recursively and retain the min value:
 * return 1 + min of:
 * - fn(str1, str2.substring(0, m - 1))     //insert in str1 
 * - fn(str1.substring(0, n - 1), str2)     //remove in str1 
 * - fn(str1.substring(0, n - 1), str2.substr(0, m - 1)) //replace in str1
 * 
 * Example:
 * fn('ca', 'cu')
 * return 1 + Math.min(1,1,0)
 *  -> fn('ca', 'c') -> three additional recursive calls, returns 1 + min(2,0,1)
 *      -> fn('ca', '') -> returns 2
 *      -> fn('c', 'c') -> returns 0
 *      -> fn('c', '')  -> returns 1
 *  -> fn('c', 'cu') -> three additional recursive calls, returns 1 + min(0,2,1)   
 *      -> fn('c', 'c') -> returns 0
 *      -> fn('', 'cu') -> returns 2
 *      -> fn('', 'c')  -> returns 1
 *  -> fn('c', 'c') -> returns 0 
 * */
function editDistanceRec(str1, str2){
    const n = str1.length;
    const m = str2.length;
    if(n === 0) return m; //str1 is empty, length of str2 operation needed
    if(m === 0) return n; //str2 is empty, length of str2 operation needed
    if(str1 === str2) return 0;
    if(str1[n - 1] === str2[m - 1]){
        return editDistanceRec(str1.substring(0, n - 1), str2.substring(0, m - 1))
    } else {
        //try substitute, remove, insert
        return 1 + Math.min(
            editDistanceRec(str1, str2.substring(0, m - 1)),
            editDistanceRec(str1.substring(0, n - 1), str2),
            editDistanceRec(str1.substring(0, n - 1), str2.substring(0, m - 1)),
        )
    } 
}
/**
 * II. BOTTOM-UP APPROACH
 * Construct a matrix of m * n that stores the edit distance for each combo of
 * substrings.
 * ROW 0
 * If both str are empty, distance is 0
 * str1 has 0 char and str2 has 0 char, distance is 0
 * str1 has 0 char and str2 has 1 char, distance is 1
 * str1 has 0 char and str2 has 2 char, distance is 2
 * str1 has 0 char and str2 has 3 char, distance is 3
 * COLUMN 0
 * If both str are empty, distance is 0
 * str1 has 0 char and str2 has 0 char, distance is 0
 * str1 has 1 char and str2 has 0 char, distance is 1
 * str1 has 2 char and str2 has 0 char, distance is 2
 * str1 has 3 char and str2 has 0 char, distance is 3
 *
 * For the combination the result varies depending on the difference in char
 * that is found (returns 1 + Math.min())
 * 
 * matrix = [
 *     mn 0 1 2 3
 *     0 [0,1,2,3],
 *     1 [1,0,1,2],
 *     2 [2,1,1,2],
 *     3 [3,2,2,1]
 * ]
 * NOTE: We have to include the empty string combos. Therefore the length of
 * matrix arrays should be m + 1 and n + 1. Also the loops over those arrays
 * should run to m + 1 and n + 1 
 */ 
function editDistanceDp(str1, str2){
    const m = str1.length;
    const n = str2.length;
    let mem = new Array(m + 1).fill(undefined);
    for(let i = 0; i < mem.length; i++){
        mem[i] = new Array(n + 1).fill(undefined);
    }
    for(let i = 0; i < m + 1; i++){
        for(let j = 0; j < n + 1; j++){
            if(i === 0) mem[i][j] = j;       //str1 is empty, insert j char of str2
            else if(j === 0) mem[i][j] = i;  //str2 is empty, insert i char of str1
            else if(str1[i - 1] === str2[j - 1]){
                mem[i][j] = mem[i - 1][j - 1];
            } else {
                //last char are different
                mem[i][j] = 1 + Math.min(
                    mem[i][j - 1],       //insert
                    mem[i - 1][j],       //remove
                    mem[i - 1][j - 1]    //replace
                )
            }
        }
    }
    //console.log(mem);
    return mem[m][n]
}
/**
 * ########################################
 * IS EDIT DISTANCE EQUAL TO A GIVEN NUMBER
 * ########################################
 * There are two approaches: 
 * - calculate the edit distance and compare to x, O(n^2)
 * - simple string traversal and keep track of difference in char found, O(n)
 * The latter approach does not require us to calculate the levenshtein 
 * distance as such:
 * 
 * LOGIC
 * - if difference between m an n is more than 1, return false.
 * - start count = 0
 * - traverse both strings from first character, using two different pointers
 * Two posibilities:
 * -- current chars match -> move both pointers i + 1, j + 1 
 * -- current chars don't match, increment count of edits and if count at any
 * reiteration becomes more than 1 return false. Two posibilities remain:
 * -- if length of one string is larger, then only possible edit is to remove
 * a character, thus move ahead the pointer of larger string
 * -- if length is equal, then only possible edit is to change a character. 
 * Therefore, move ahead in both strings. 
 * */
function editDistanceEqualTo(str1, str2, x){
    const m = str1.length;
    const n = str2.length;
    if(Math.abs(n - m) > 1) return false;
    let count = 0;
    let i = 0;  //pointer str1
    let j = 0;  //pointer str2
    while(i < m && j < n){
        if(str1[i] === str2[j]){
            i++
            j++
        } else {
            count++;
            if(count > 1) return false;
            if(m > n) i++
            else if(m < n) j++
            else {
                i++
                j++
            }
        }
    }
    //max difference between str length is 1 (see condition above)
    //once while loop is finished, one char in largest str may remain uncounted
    if(i < m || j < n) count++;
    return count === x;
}
module.exports = {
    editDistanceRec,
    editDistanceDp,
    editDistanceEqualTo
}