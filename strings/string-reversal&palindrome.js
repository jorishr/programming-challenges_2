/*
###############
STRING REVERSAL
#############################################
I.      REVERSE STRING CHARACTERS
II.     REVERSE STRING CHARACTERS RECURSIVELY 
III.    REVERSE WORDS IN A STRING
IV.     PALINDROME?
#############################################

#############################
I.  REVERSE STRING CHARACTERS 
#############################
Write a function that reverses all characters in a string.
Thus 'I love javascript' becomes 'tpircsavaj evol I'.

- start at the end of the string and build a new string with each consecutive
character

- note, can also be used to reverse integers, as you first convert them to a 
string and once done, revert to number
*/
function charReverse(str){
    let newStr = '';
    for(let i = str.length - 1; i >= 0 ; i--){
        newStr += str[i];
    }
    return newStr;
}

function charReverseWithStack(str){
    let stack = [];
    let newStr= '';
    for(let i = 0; i < str.length; i++){
        stack.push(str[i]);
    }
    while(stack.length > 0){
        newStr += stack.pop();
    }
    return newStr;
}

function charReverseWithVars(str){
    let arr = Array.from(str);
    let i = 0;
    let j = arr.length - 1;
    while(i < j){
        //swap i j
        let temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
        i++
        j--
    }
    return arr.join('');
}
//NOTE: both the stack and var solution have a time complexity of O(n)
//the vars solution has a better memory complexity of O(1) vs O(n) for the stack

/*
##########################
III.    RECURSIVE SOLUTION
##########################
Write a function that accepts a string a reverses the string characters. 
Use recursion.

This solutions requires the use of the string method substring: subtr()

substr(): the first argument is the starting position in the string, the second
argument is optional and can indicate how many characters it has to extract. 
The default is one character. Thus, the return value of the substr() method is 
a specific part of a given string.

"abcd".substr(1, 2) //-> starts at [1], "b", and extract 2 characters: "b, c"

One each recursive call we split off the first character and concatenate it at 
the end of string that is returned by the recursion. The remaining string is 
passed through function again until the string has just one 
character left. The result is the concatenation of all characters in reverse 
order.
*/
function reverseStringRecursively(string){
    if(string <= 1){ 
        return string;
        // "a" returns "a"
    }
    return reverseString(string.substr(1)) + string[0];
}	
/*
Recursion tree:
                    fn("abcd") 
                fn("bcd") + "a"
            fn("cd") + "b"
        fn("d") + "c"
    fn("d")
Unwind the stack: 
    "d" 
        "d" + "c" 
            "dc" + "b"
                "dcb" + "a"
                    "dcba"

Time and space complexity of this solution is O(n):

Time:
- compare: one constant unit of time
- assume subtr() method and str[0] take constant time
- concatenation: one constant unit of time
- function is repeated n times
T(n) = n * (1 + 1 + 1 + 1) = 4n => O(n)

Space complexity is related to the depth of the recursion tree as all recursive
calls get added to the call stack. With n levels in the tree the space 
complexity amounts a linear growth rate of O(n). 

#################################
III.    REVERSE WORDS IN A STRING
#################################
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
##############
IV. PALINDROME
##############
Is the string a palindrome?

The problem is similar to string reversal:

- reverse the string by splitting it and reversing the resulting array
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
    isPalindrome,
    charReverseWithStack,
    charReverseWithVars,
    reverseStringRecursively
}