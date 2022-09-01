/*
##############
STRING METHODS
#####################################################
/*
################################################################
VII. ALL POSSIBLE PERMUTATION OF A NUMBER TRANSLATED INTO STRING
####3###########################################################

Thus 12 could be l or ab.

with larger numbers like 11111 could be: bbbbb or 11 11 1 thus, kkb or 1 11 11
thus bkk or 1 1 11 1 thus bbkb etc.

manual solution:
- case one digit: 26 possibilities a-z
    0 -> a, 1 -> b, 2 -> c
- case two digits: 
    - if < 26: one letter or 2 and 4, thus z, c and d
    - if > 26: only c and f (2 5)
- if > 2 digits split into series of one digit and two digits and repeat the 
one digit or two digit functions recursively

112 -> split 1,1,2 
        -> first digit: translate(1)
        -> if next digit exists, combine: translate(11)
        -> second digit: translate(1)
        -> if next digit exists, combine: translate(12);
// tricky part: you need to store the result of each recursive call into the 
results array
// remove the duplicates and flatten the array
*/
function translate(num){
    const numDigits = String(num).length;
    let result      = [];
    const chars     = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']; 
    if(numDigits === 1){
        result.push(chars[num]);
    } else if(numDigits === 2){
        if(num < chars.length){
            result.push(chars[num]);
            //split the num into digits
            let digits = String(num).split('');
            digits.forEach(digit => result.push(chars[digit]));
        } else {
            let digits = String(num).split('');
            digits.forEach(digit => result.push(chars[digit]));
        }
    } else if(numDigits > 2){
        let digits = String(num).split('');
        for(let i = 0; i < digits.length; i++){
            result.push(translate(Number(digits[i])));
            if(digits[i+1]){
                result.push(translate(Number(digits[i] + digits[i+1])));
            }
        }
    }
    return result;
}

// run in node or see Jest test: 
const permutations3456623 = translate(3456623);
console.log('Possible Permutations for 3456623: ', permutations3456623);

const permutations12 = translate(12);
console.log('Possible Permutations for 12: ', permutations12);


module.exports = {
    translate
}

