/*
Write a function that converts an array of integers to a string whereby the 
elements of the array are seperate by comma-space.

[1,2,3].print() //-> '1, 2, 3'
*/
module.exports = function array2str(arr){
    let str = '';
    arr.forEach(el => str += el)
    return str.split('').join(', ');
}
/*
Write a function that prints all array elements to the console in index order.
*/ 
function logArrayInOrder(arr){
    arr.forEach(el => console.log(el))
}