/**
 * ##############################################
 * IS A GIVEN STRING A ROTATION OF ANOTHER STRING
 * ##############################################
 * Write a program to check if a given string is a rotation of another string.
 * 
 * Example
 * const baseStr   = 'abcd'
 * const inputStr1 = 'bcda' -> true
 * const inputStr2 = 'abdc' -> false
 * 
 * Two base condition need to met first: 
 * - both strings need to have the same length
 * - both strings contain the same characters 
 * - is rotation zero accepted? If so, return true if baseStr === inputStr
 * 
 * There are two approaches to check for rotation:
 * - using string concatenation
 * - using a loop
 * 
 * I.   STRING CONCATENATION
 * - concatenate the baseStr with itself -> 'abcdabcd'
 * - if that concatenated str includes the inputStr return true
 * 'abcdabcd' -> includes one counter-clockwise rotation    'bcda'
 * 'abcdabcd' -> includes two counter-clockwise rotations   'cdab'
 * 'abcdabcd' -> includes three counter-clockwise rotations 'dabc'
 * 'abcdabcd' -> includes one clockwise rotation    'dabc'
 * 'abcdabcd' -> includes two clockwise rotations   'cdab'
 * 'abcdabcd' -> includes three clockwise rotations 'bcda'
 * 
 * 'abcdabcd' -> does NOT include arbitrary modification 'abdc'
 * 'abcdabcd' -> does NOT include arbitrary modification 'bacd'
 */
function isRotationOfConcat(baseStr, inputStr){
    const n = baseStr.length;
    const m = inputStr.length;
    if(n !== m) return false;
    const strConcat = baseStr + baseStr;
    if(strConcat.includes(inputStr)) return true;
    else return false;
}
/**
 * II. LOOP
 * NOTE: this exercise can also be done with arrays. For detailed step by step
 * walk through see array exercises folders.
 */
function isRotationOfLoop(baseStr, inputStr){
    const n = baseStr.length;
    const m = inputStr.length;
    if(n !== m) return false;
    if(baseStr === inputStr) return true;
    //find the index of the first char of the inputStr in the baseStr
    let index;
    for(let i = 0; i < n; i++){
        if(baseStr[i] === inputStr[0]) index = i;
    }
    //to be a rotation, the rotationStart in inputStr should be m - index
    //compare substrings: baseStr and rotatedStr should be equal
    //'abcd', 'bcda', index = 1, m - index = 4 - 1 = 3
    let rotationStart = m - index;
    let rotationEnd   = (rotationStart + m - 1) % m;  
    if( baseStr.substring(0, n) === 
        inputStr.substring(m - index) + inputStr.substring(0, rotationEnd + 1)
        ) return true;
    else return false;
}
module.exports = {
    isRotationOfConcat,
    isRotationOfLoop
}