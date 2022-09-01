/**
 * MODULAR EXPONENTATION
 * Modular exponentation takes the modulo of an exponential expression and is 
 * used in cryptography.
 * 
 * x^n % m 
 * 
 * Examples:
 * 5^2 % 7 = 25 % 7 = 4
 * 5^3 % 7 = 125 % 7 = 6
 * 
 * The issue with exponentation is that for relatively small exponents we can
 * approach the limit of a 32-bit system very fast:
 * if one bit is reserved for the sign then the biggest number you can only 
 * have numbers between -2^31 and 2^31
 * 
 * Calculating 2^100 could becomes problematic.
 * 
 * The solution is the use of math principles like association and commutativity.
 * 
 * (a * b) % m = {(a % m) * (b * m)} % m
 * 
 * Then x^n % m can be redefined as: 
 * (x * x^(n-1)) % m 
 * and 
 * (x % m) * (x^(n-1) % m) % m if n is odd
 * (x^(n/2) % m) * (x^(n/2) % m) % m if n is even
 * x^0 = 1, if n = 0
 * Thus
 * 5^5 % 7 becomes {(5 % 7) * (5^4 % 7)} % 7 
 * 5^4 % 7 becomes {(5^2 % 7) * (5^2 % 7)} % 7 
 */
module.exports = function modExp(x, n, m){
    if(n === 0) return 1;
    else if(n % 2 === 0){
        let y = modExp(x, (n / 2), m);
        return (y * y) % m;
    } else {
        return ((x % m) * modExp(x, (n - 1), m)) % m;
    }
}
/**
 * Time complexity analysis is similar to the basic recursive approach and will
 * amount to O(log(n)):
 * T(n) = T(n / 2) + C
 */