/**
 * Initialize a 2D array with n rows and m columns
 */
const init2DArr = function (n, m){
    let arr = [];
    for(let i = 0; i < n; i++){
        arr[i] = [];
        for(let j = 0; j < m; j++){
            arr[i][j] = j;
        }
    }
    return arr;
}
//const twoDimArr = init2DArr(4,4);
//console.log(twoDimArr);

/**
 * Print a 2D array in 'snake-like' order.
 * 
 * Snake-like order means:
 *  row[0][0] -> row[0][last]
 *  row[1][last] -> row[1][0]
 *  row[2][0] -> row[2][last]
 *  ...
 *  row[n][0] -> row[n][last]
 *  
 * The problem can be redefined as pinting a row, repeated 
 * arr.length times
 * 
 * Plus, every other row needs to be printed in reverse.
 */
function printRow(arr){
    for(let i = 0; i < arr.length; i++){
        console.log(arr[i])
    }
}
function printRowReverse(arr){
    for(let i = arr.length - 1; i >= 0; i--){
        console.log(arr[i])
    }
}
function printSnake(arr){
    for(let i = 0; i < arr.length; i++){
        if(i % 2 != 0){
            printRowReverse(arr[i]);
        } else {
            printRow(arr[i]);
        }
    }
}
//printRow(twoDimArr[0])
//printRowReverse(twoDimArr[0])
//snakePrintArr(twoDimArr);

/**
 * Print a 2D array in spiral order, clockwise.
 *         ---------------
 *          2   3   4   5|
 *         -----------   |
 *         |1   6   8|  9|
 *         |   ---   |   |
 *         |7  |8<  0|  3|
 *         |   -------   |
 *         |0   1   6   2|     
 *         ---------------
 * 
 * The problem can be broken down as follows:
 * - traverse right, top most row
 * - traverse down, right most column
 * - traverse left, bottom row
 * - traverse up, left most column
 * 
 * And make sure that you traverse each column / row only once. That means
 * you need to track with a variable which column/row is top, right, bottom and
 * left. Do so with using number variables instead of the actual arr references.
 * 
 * Also track the direction you have to traverse, incrementing clockwise: 
 * 0 = right, 1 = down, 2 = left, 3 = up 
 * 
 * Keep traversing as long as top >= bottom row number and right >= left column 
 * number.
 */

//assume number rows(n) = number columns(m)
function printSpiral(arr, n, m){
    let topRow    = 0;
    let bottomRow = n - 1; 
    let rightMostColumn = m - 1
    let leftMostColumn  = 0;
    let dir = 0;
    let result = [];
    while(topRow <= bottomRow && rightMostColumn >= leftMostColumn){
        if(dir === 0){
            for(let i = leftMostColumn; i <= rightMostColumn; i++){
                result.push(arr[topRow][i]);
            }
            topRow++;
            dir++;
        } else if (dir === 1){
            for(let i = topRow; i <= bottomRow; i++){
                result.push(arr[i][rightMostColumn]);
            }
            rightMostColumn--;
            dir++;
        } else if (dir === 2){
            for(let i = rightMostColumn; i >= leftMostColumn; i--){
                result.push(arr[bottomRow][i]);
            }
            bottomRow--;
            dir++;
        } else {
            for(let i = bottomRow; i >= topRow; i--){
                result.push(arr[i][leftMostColumn]);
            }
            leftMostColumn++;
            dir = 0;   
        }
    }
    console.log(result);
    return result;
}
//printSpiral(arr, arr.length, arr[0].length);
//printSpiral(arr2, arr2.length, arr2[0].length);

module.exports = {
    printRow,
    printRowReverse,
    printSnake,
    printSpiral
}