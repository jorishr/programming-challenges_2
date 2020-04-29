/*
##########################
GENERATE FIBONACCI NUMBERS
##########################
Fibonacci numbers is a sequence of positive integers whereby each next value is the sum
of the two previous values with the first two values being 0 and 1.

LOGIC
- start the itertion at 1 and on the first two iterations (i = 1 and i = 2) you push(0) 
and push(1) to the array -> [0, 1]
- for each next iteration starting at i = 3 you create a sum of arr[i - 2] + arr[i -3]
so you get (arr[3-2] + arr[3-3]) or (arr[1] + arr[0]) thus push(1 + 0) -> [0, 1, 1]
- push(arr[4-2] + arr[4-3]) or push(1 + 1) -> [0, 1, 1, 2]
- push(arr[5-2] + arr[5-3]) or push(2 + 1) -> [0, 1, 1, 2, 3]
- push(arr[6-2] + arr[6-3]) or push(3 + 2) -> [0, 1, 1, 2, 3, 5]
- push(arr[7-2] + arr[7-3]) or push(5 + 3) -> [0, 1, 1, 2, 3, 5, 8]

Note: edge cases F(0) = 0 and F(1) = 1
*/
function generateFibonacci(num){
    let sequence = [0];
    for(let i = 1; i <= num; i++){
        if(i === 1){
            sequence = [1];
        } else if(i === 2) {
            sequence = [0]
            sequence.push(1);
        } else {
            sequence.push(sequence[i - 2] + sequence[i - 3]);
        }
    }
    return sequence;
}
/*
TIME COMPLEXITY EVALUATION
Since we have to loop over all element n we have linear time complexity if O(n)

ADJUSTMENTS
The code above works well but with num = 10 you only generate 9 numbers. This 
can be confusing. The fix: for(let i = 1; i < num + 1; i++)

FINDING THE NTH NUMBER IN THE SEQUENCE
There is a slightly better solution that can be reused to find the nth number. 
You start with currentVal and previousVal and continue updating them on each 
iteration whereby currentVal is the nextValue in the sequence:
    currentVal  = currentVal + previousVal
    previousVal = currenVal - previousVal
Thus at 
- [0, 1] currentVal -> 1 + 0 and previous -> 1 - 0
- [0, 1, 1] currentVal -> 1 + 1 and previous -> 2 - 1
- [0, 1, 1, 2] currentVal -> 2 + 1 and previous -> 3 - 2
- [0, 1, 1, 2, 3] currentVal -> 3 + 2 and previous -> 5 - 2
- [0, 1, 1, 2, 3, 5] currentVal -> 5 + 3 and previous -> 8 - 3
- [0, 1, 1, 2, 3, 5, 8] currentVal -> 8 + 5 and previous -> 13 - 8
Use a counter to keep track of the iterations untill counter = 0. You need
n - 1 iterations. 
*/
function findFibAt(nth){
    //let sequence = [0, 1];
    let currentVal  = 1;
    let previousVal = 0;

    if(nth === 0) return 0;
    if(nth === 1){
        //sequence.push(1);
        return 1;
    }

    let counter = nth - 1;
    while(counter){
        currentVal  = currentVal + previousVal;
        previousVal = currentVal - previousVal;

        //sequence.push(currentVal)
        counter--
    }
    return currentVal;
}
module.exports = {
    generateFibonacci,
    findFibAt
}