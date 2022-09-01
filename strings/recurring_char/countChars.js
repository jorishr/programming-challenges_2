/*
############################
COUNT CHARACTERS IN A STRING
############################

Write a function countBs that takes a string as its only argument and 
returns a number that indicates how many uppercase “B” characters there 
are in the string.

- loop over the string
- if char = key, count + 1
- to make the function case insenstive adapt the conditional statement to 
both side be lowercase/uppercase

*/
function countChar(str, keyChar){
    let count = 0;
    for(let i = 0; i < str.length; i++){
        if(str[i].toLowerCase() === keyChar.toLowerCase()){
            count++
        }
    }
    return count;
}


module.exports = {
    countChar
}