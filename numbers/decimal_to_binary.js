/**
 * I.   GET DIGITS OF AN INTEGER
 * A decimal can be broken down into digits single digits by through division 
 * by 10.
 * 
 * Example: 
 * 125 / 10 = 12 with remainder 5 
 * 12  / 10 = 1  with remainder 2 
 * 1   / 10 = 0  with remainder 1
 * 
 * The remainder gives us the individual digits of the integer 125 is composed 
 * of, albeit in reverse order.
 */
function getDigits(n){
    let digits = [];
    function findDigits(n){
        digits.push(n % 10);
        let next = Math.floor(n / 10);
        if(next > 0){
            findDigits(next);
        }
    }
    findDigits(n);
    return digits.reverse();
}
console.log(getDigits(125));
console.log(getDigits(0));
/**
 * To convert a decimal number into binary we can use the same logic as above.
 * What changes is the divisor, which is now 2. 
 * 
 * For example: 
 * 125 / 2 = 62 with remainder 1
 * 62  / 2 = 31 with remainder 0
 * 31  / 2 = 15 with remainder 1
 * 15  / 2 = 7  with remainder 1
 * 7   / 2 = 3  with remainder 1
 * 3   / 2 = 1  with remainder 1
 * 1   / 2 = 0  with remainder 1
 */
function decimalToBinary(n){
    let digits = [];
    function findDigits(n){
        digits.push(n % 2);
        let next = Math.floor(n / 2);
        if(next > 0){
            findDigits(next);
        }
    }
    findDigits(n);
    return digits.reverse();
}
console.log(decimalToBinary(125));
console.log(decimalToBinary(0));