/*
###############################
REPLACE DASHES WITH UNDERSCORES
###############################

Write a function which takes a single kebab-cased string argument and returns 
the snake-cased version. Thus "hello-world" becomes "hello_world" by replacing 
the dash char for the underscore char.

Write the function so that it works with any type of character replacement.

- split the string into char
- loop over the series of char to find key char and replace
- rejoin the string
*/  
module.exports = function replaceChar(str, keyChar, newChar){
    let strArr = str.split('');
    for(let i = 0; i < strArr.length; i++){
        if(strArr[i] === keyChar){
            strArr[i] = newChar;
        }
    }
    return strArr.join('');
}

/* REFACTOR: alternative approach by building a new string and using the 
ternary operator
*/
function replaceChar(str, char, newChar){
    let newStr = '';
    for(let i = 0; i < str.length; i++){
        str[i] === char ? newStr += newChar : newStr += str[i];
    }
    return newStr;
}
replaceChar('hello', 'e', 'a'); //-> 'hallo'