/**
 * PROBLEM: Check a string of () and {}. Are the parentheses and curly brackets
 * in order?
 * 
 * Counting the number of ( and comparing to number of ) does not work because 
 * )( would be considered correct.
 * 
 * You could use a list: for each ( you find, add it to the list, when you find
 * a ), remove a ( from the list. When the list is empty at end, you have 
 * balanced brackets.
 * 
 * This resembles a stack: last in first out. The last bracket you opened should
 * also be the first to close. 
 * 
 * Example: [(){}]
 * Stack:   [   open
 *          [(  open
 *          [   close )
 *          [{  open
 *          [   close }
 *          empty close ] 
 * 
 * Pseudo code
 * loop over str, 
 * if char = opening symbol push to stack
 * if char = closing symbol, two possible errors arise: 
 * - stack is empty: ()} -> push '(', pop ')' -> empty, pop '}' = return false 
 * - closing symbol does not match opening symbol on stack: [{)] -> return false
 * - use helper fn to compare symbols
 * else stack.pop()
 * return boolean
 *  */
function isBalanced(str){
    let stack   = [];
    const open  = ['(', '[', '{'];
    const closed= [')', ']', '}'];
    //loop over str
    for(let i = 0; i < str.length; i++){
        open.forEach(symbol => {
            if(str[i] === symbol){
                stack.push(symbol);
                console.log('Pushed to stack: ', symbol);
            }
        });
        for(let j = 0; j < closed.length; j++){
            if(str[i] === closed[j]){
                if(
                    stack.length === 0 
                    || !compare(stack[stack.length - 1], str[i])
                ){
                    console.log('Unbalanced Parentheses');
                    return false;
                } else {
                    let removed = stack.pop();
                    console.log('Popped from stack: ', removed);
                }
            }
        }
    }
    console.log('Final stack: ', stack);
    return stack.length ? false : true;
}

function compare(a, b){
    if(a === '[' && b === ']') return true;
    if(a === '(' && b === ')') return true;
    if(a === '{' && b === '}') return true;
    return false;
}

module.exports = isBalanced;