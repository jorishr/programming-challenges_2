/**
 * The Fisher–Yates shuffle is an algorithm for generating a random permutation
 * of a finite sequence.
 * 
 * In other words, randomly shuffle a given array in O(n).
 * 
 * To shuffle an array a of n elements (indices 0 to n-1):
 * [1,2,3,4,5]
 * i = 4    random (between 0 and 4) = 2  -> [1,2,5,4,3]
 * i = 3    random (between 0 and 3) = 1  -> [1,4,5,2,3]
 * i = 2    random (between 0 and 2) = 1  -> [1,5,4,2,3]
 * i = 1    random (between 0 and 1) = 0  -> [5,1,4,2,3]
 * 
 * loop from n−1 downto 1 do
 * pick a random integer 0 <= j <= i, decrease with loop i
 * swap a[j] and a[i]
 * (swap in place)
 * 
 * Note: Math.random is pseudo random
 * 
 * Time complexity is O(n).
 */
function shuffle(arr){
    let n = arr.length;
    for(let i = n - 1; i > 0; i--){
        let random = Math.floor(Math.random() * (i + 1));
        let tmp = arr[i];
        arr[i]  = arr[random];
        arr[random] = tmp;
    }    
    return arr;
}
//console.log(shuffle([1,2,3,4,5]));
module.exports = {
    shuffle
}