/*
#########
BIKE LOCK
#########
Generate all possible permutations for a bike lock with 3 number slots.

- Each slot has 10 numbers: 0-9,
make it 0-3 for manual example with 2 slots
- forEach number on the first slot loop through remain slots

0   0   
0   1   
0   2 
0   3 

1   0
1   1
1   2
1   3

// is there a better recursive solution?

// see heaps algorithmm,
and https://stackoverflow.com/questions/37892738/generate-subsets-of-length-n,
and permutations

create array
loop to 0, push to array
    loop to 0, push to array

create array
loop to 0, push to array
    loop to 1, push to array
...
create array
loop to 0, push to array
    loop to 3, push to array

create array
loop to 1, push to array
    loop to 0, push to array    
*/
const values = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
function generateArray(arr){
    let combos = []; 
    for(let i = 0; i < values.length; i++){
        let base  = values[i];
        let combo = [];
        for(let j = 0; j < values.length; j++){
            combo.push([]);
            combo[j].push(base);
            combo[j].push(j);
        }
        combos.push(combo);
    }
    return combos.flat();
}
const comb = generateArray(values);
console.log('Result: ', comb)