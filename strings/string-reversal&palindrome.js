/*
###############
STRING REVERSAL
#################################
I.      REVERSE STRING CHARACTERS 
II.     REVERSE WORDS IN A STRING
III.    PALINDROME?
#################################

#############################
I.  REVERSE STRING CHARACTERS 
#############################
Write a function that reverses all characters in a string.
Thus 'I love javascript' becomes 'tpircsavaj evol I'.

- start at the end of the string and build a new string with each consecutive
character
*/
function charReverse(str){
    let newStr = '';
    for(let i = str.length - 1; i >= 0 ; i--){
        newStr += str[i];
    }
    return newStr;
}

/*
#############################
II. REVERSE WORDS IN A STRING
#############################
Write a function that reverses all WORDS in a string.
Thus 'I love javascript' becomes 'javascript love I'.

- chop str into words
- reverse the array
    - if the arr is even swap values [0] to [length/2 - 1] for [length - 1 - i]
    abcd -> a<->d b<->c
    
    - if the arr is uneven swap values [0] to [floor(length / 2)], as the middle 
    value will remain in the same place
    abcde -> a<->e b<->d c untouched
*/
function wordReverse(str){
    let strArr = str.split(' ');
    if(strArr.length % 2 === 0){
        for(let i = 0; i < strArr.length / 2; i++){
            let tmp = strArr[i];
            strArr[i] = strArr[strArr.length - 1 - i];
            strArr[strArr.length - 1 - i] = tmp;
        }
    } else {
        for(let i = 0; i < Math.floor(strArr.length / 2); i++){
            let tmp = strArr[i];
            strArr[i] = strArr[strArr.length - 1 - i];
            strArr[strArr.length - 1 - i] = tmp;
        }
    }
    return strArr.join(' ');
}

/* REFACTOR: use the native js methods

function reverse(str){
    return str.split('').reverse().join('');
};
reverse('I love javascript')    //->  'tpircsavaj evol I'

//word reversal
function reverse(str){
    return str.split(' ').reverse().join(' ');
};
reverse('I love javascript')    //->  'javascript love I'

/*
###############
III. PALINDROME
###############
Is the string a palindrome?

The problem is similar to string reversal:

- reverse the string by spltting it and reversing the resulting array
- join the resulting into string
- compare to original str and return true/false
*/

function isPalindrome(str){
    let reverseStr = str.split('').reverse().join('');
    return str === reverseStr ? true : false;
}

module.exports = {
    charReverse,
    wordReverse,
    isPalindrome
}