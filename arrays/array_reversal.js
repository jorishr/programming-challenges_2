/**
 * Start at the edges: low = index 0, high = last index. Swap values and narrow
 * the array.
 * [1,2,3,4,5] -> [5,2,3,4,1] -> [5,4,3,2,1]
 * 
 * The loop will run n / 2 times resulting in a linear time complexity of O(n).
 * The space complexity is O(1).
 */
function reverse(arr, low = 0, high = arr.length - 1){
    while(low < high){
        let tmp = arr[low];
        arr[low]  = arr[high];
        arr[high] = tmp;
        low++;
        high--;
    }
    return arr;
}
function reverseRecursively(arr, low = 0, high = arr.length - 1){
    if(low >= high) return arr;
    let tmp = arr[low];
    arr[low]  = arr[high];
    arr[high] = tmp;
    return reverseRecursively(arr, low + 1, high - 1);
}
module.exports = {
    reverse,
    reverseRecursively
}