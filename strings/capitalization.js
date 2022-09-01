/*
################################################
I.  Title Capitalization
II. Capitalize character at given index position
################################################
-> also see Jest Testing

########################
I.  Title Capitalization
########################

Write a function that will take in title as a string and return the string with
the correct capitalization according the following rules:
- capitalize first word only
- capitalize last word only
- lowercase the following words: "a". "the", "to", "at", "in", "with", "and", 
"but", "or". Unless they are the first or last word in the string.
Uppercase any word not in the above list.

A word is defined by a series of non-space characters.

Manual solution:
- break up the string into words
- uppercase first word
- uppercase last word
- check whether the words in between are special word, if so, lowercase word
- capitalize a word = toUpperCase first letter of word, lower case the 
remaining letters

Pseudo code:
// split the string by spaces
// capitalize word[0]
// capitalize word[last]
// forEach word[1] to word[last -1]
    // if list contains special word
        // lower case word
    // else
        // uppercase word
// combine words into new string

// lowercase word
    // for each char in word, set lowercase
// uppercase word
    // lowercase word
    // word[0] to uppercase
*/

function capitalize(str){
    let strArr = str.split(' ');
    strArr[0] = capitalizeWord(strArr[0]);
    const lastIndex = strArr.length - 1;
    strArr[lastIndex] = capitalizeWord(strArr[lastIndex]);
    for(let i = 1; i < strArr.length - 1; i++){
        const keywords = ["a", "the", "to", "at", "in", "with", "and", "but", "or"];
        strArr[i] = capitalizeWord(strArr[i]);
        keywords.forEach(keyword => {
            if(keyword === lowerCaseWord(strArr[i])){
                strArr[i] = lowerCaseWord(strArr[i]);
            }
        });
    }
    let newStr = '';
    strArr.forEach(word => newStr += word + ' ');
    return newStr.trim(); 
}

function lowerCaseWord(str){
    let newStr = '';
    for(let i = 0; i < str.length; i++){
        newStr += str[i].toLowerCase();
    }
    return newStr;
}

function capitalizeWord(str){
    let tempStr = '';
    tempStr = lowerCaseWord(str);
    let result = '';
    for(let i = 0; i < tempStr.length; i++){
        if(i === 0){
            result += tempStr[0].toUpperCase();
        } else {
            result += tempStr[i];
        }
    }
    return result;
}

/*
REFACTOR: Using Javascript native methods the above code can be simplified.
*/

function lowerCaseWord(str){
    return str.toLowerCase();
}

function capWord(str){
    return str[0].toUpperCase() + str.slice(1).toLowerCase();
}

function capTitle(str){
    let strArr = str.split(' ');
    strArr[0] = capWord(strArr[0]);
    strArr[strArr.length - 1] = capWord(strArr[strArr.length - 1]); 
    for(let i = 1; i < strArr.length - 1; i++){
        const keywords = ["a", "the", "to", "at", "in", "with", "and", "but", "or"];
        strArr[i] = capWord(strArr[i]);
        keywords.forEach(keyword => {
            if(keyword === strArr[i].toLowerCase()){
                strArr[i] = strArr[i].toLowerCase();
            }
        });
    }
    return strArr.join(' ');
}

/*
ADDING EDGE CASES:
- what if the title is only one word and that word is a keyword -> tested, 
no extra code needed 
- what if the title is an empty string -> tested, no extra code needed
*/


/*
################################################
II. Capitalize character at given index position
################################################

Similar problem. 

Write a function that takes in a string and an index position for which the 
character needs to be capitalized. The function returns a string with one
letter capitalized (others lowercase) and saves the return value into a variable.
If the parameter passed to function is not a string or the index position is 
out of range, return an error message.

- error if index < 0 or > index.length -1
- error if type of parameter is not str
- separate characters of the string into array
- change value at index position
- join into new string
*/
function capAtIndex(str, index){
    if(typeof str !== 'string'){
        return console.error('TypeError: Function requires first parameter to be a string');
    }
    if((index < 0) | (index > str.length - 1)){
        return console.error('Index out of range. Use a number between 0 and str.length - 1');
    }
    let strArr = str.toLowerCase().split('');
    strArr[index] = strArr[index].toUpperCase();
    return strArr.join('');
}

module.exports = {
    lowerCaseWord,
    capitalizeWord,
    capitalize,
    lowerCaseWord,
    capWord,
    capTitle,
    capAtIndex
}