/**
 * ###################
 * COUNT SUB-ARRAY SUM
 * ###################
 * Given is a set of positive integers. Write a function that counts all
 * subsets that are equal to x.
 * 
 * Example: {2,4,6,10}, x = 16
 * Number of sets for which sum = 16 is 2, namely {2,4,10} and {6,10}
 * 
 * Edge case: if x = 0, number of sets is 1, namely {} 
 * 
 * LOGIC
 * A brute force approach would be to find all possible sub-arrays and compare
 * their sum to x. 
 *                                                              {}
 *                                     {10}                                                 {}
 *                      {10,6}                       {10}                    {6}                        {}
 *         {10,6,4}              {10,6}          {10,4} {10}         {6,4}          {6}            {4}       {}       
 * {10,6,4,2}    {10,6,4}  {10,6,2}  {10,6}  {10,4,2}      {10} {6,4,2} {6,4}   {6,2} {6}      {4,2} {4}  {2}  {}
 *                                      ^       ^                 
 *                                      ^       ^
 * However, we don't need all sub-arrays. We need to count the ones that amount
 * to a given number. 
 * 
 * Can we exclude certain subsets? If we find arr[i] > x, it is impossible to
 * form a subset that amounts to x.
 * 
 * If we start with empty {}, we can start forming subsets in a recursive
 * process that starts at the last index.
 * 
 * The number of subsets that is equal to 16 can be defined as the number of 
 * subsets that amount to x and include 10, plus the number of subsets that 
 * amount to x without 10. 
 * 
 * If we include 10, that means that the sum of the remaining values to be 
 * included in the subset should be x - arr[i] or 16 - 10 = 6
 * 
 * Thus the recursion goes down two paths: exclude i or include i in the subset
 * or exclude i from the subset.
 * 
 * */
function countSubsets(arr, x){
    //start fn at last index
    return addSubsetVals(arr, x, arr.length - 1)
    function addSubsetVals(arr, x, i){
        //only one subset can have a sum equal to 0, the {}
        if(x === 0) return 1;
        else if(x < 0) return 0; //no sum can be negative
        else if(i < 0) return 0; //negative index, reach beginning of set
        //if x < arr[i], no way to get a sum that adds up to x, go to next i-1
        else if(x < arr[i]) return addSubsetVals(arr, x, i - 1); 
        else return addSubsetVals(arr, x, i - 1) //exclude
                    + addSubsetVals(arr, x - arr[i], i - 1);
        //if x > arr[i], continue two paths: 
        //- exclude arr[i] from further subsets 
        //- include i: for example, include 6, then the remaining values to
        //complete the subset should add up to 10, or x - arr[i]
    }
}
console.log(countSubsets([2,4,6,10],16))
/**
 * MEMOIZATION
 * To optimize the running time we can store the intermediate results in a
 * dictionary or object.
 */
function countSubsetsMem(arr, x){
    let dictionary = {};
    return addSubsetVals(arr, x, arr.length - 1, dictionary)
    function addSubsetVals(arr, x, i, dict){
        const key = `${String(x)}:${String(i)}`;
        if(key in dict) return dict[key];
        let result;
        //only one subset can have a sum equal to 0, the {}
        if(x === 0) return 1;
        else if(x < 0) return 0; //no sum can be negative
        else if(i < 0) return 0; //negative index, reach beginning of set
        //if x < arr[i], no way to get a sum that adds up to x, go to next i-1
        else if(x < arr[i]) result = addSubsetVals(arr, x, i - 1, dict); 
        else result = addSubsetVals(arr, x, i - 1, dict) //exclude
                    + addSubsetVals(arr, x - arr[i], i - 1, dict);
        dict[key] = result;            
        return result;
    }
}
console.log(countSubsetsMem([2,4,6,10],16))
/**
 * TIME COMPLEXITY
 * Number of fn calls = 1 initial call + n * x calls for the recursion block
 * and inside each recursion block we have either 1 call(exclude) or 2 
 * calls(include).
 * The other comparison operations take constant time.
 * 
 * T(n) = x*n*2 + 1 * O(1)
 * T(n) = O(x*n)
 */