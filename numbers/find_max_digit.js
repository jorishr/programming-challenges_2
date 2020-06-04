//find the highest integer digit in given integer
function findMax(num){
    let str = num.toString();
    let max = str[0];
    for(let i = 1; i < str.length; i++){
        if(str[i] > max){
            max = str[i];
        }
    }
    return Number(max);
}

findMax(1344355590);    //-> 9