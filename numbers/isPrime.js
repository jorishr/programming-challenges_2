
/*
############
PRIME NUMBER
############
Is a given Number a PRIME NUMBER?

A prime number is an integer bigger than 1 that can only be divided by two other integers:
1 and itself. Thus the smallest prime number is 2, followed by 3, 5, 7, 11, etc.

This means that all even numbers above 2 are NOT prime numbers because they can
be divided by two, one and itself.

LOGIC
- Check if the input is an integer.
- Exclude all number for which modulo 2 is 0
- For all other number you need to check all numbers smaller than that number 
and if you find one for which the remainder is 0, it is not a prime number.
*/
function isPrime(num){
    if(!Number.isInteger(num) || num <= 1) return false;
    if(num > 2 && num % 2 == 0) return false;
    for(i = 3; i < num; i++){
        if(num % i == 0) return false;
    }
    return true;
}
/*
RUN TIME COMPLEXITY EVALUATION
- The first two if statements are CONSTANT TIME checks: O(1)
- The loop is N - 3 for which we can ignore - 3
- Result: O(n), a linear run time complexity

You can make the function more efficient: 
- In the loop we start at three and can increase the increment with another 
unit, so that only the uneven number are checked. Since we already excluded 
the even ones in the previous step:

        for(i = 3; i < num; i += 2)

- Any given number n = x * y whereby x <= y. For example 6 = 2 *3 or 
1 * 6 (3*2, 6*1 is redundant).

Thus x*x <= x*y and x <= sqr(n). 

Now we know that x will never be bigger than square root of n. For example, 
sqr(6) is just over 2. Thus in both 2*3 and 1*6 x <= sqr(6).

    for(i = 3; i <= Math.sqrt(num); i += 2)

The time complexity reduces greatly to O(log(sqrt(n)). For example, for number
49 you get a loop that starts at 3, jumps to 5 and ends in sqrt(49) = 7.
If you double that number n to 98 you get a loop that starts at 3, jumps to 5
and 7 to end at sqrt(98) or 9.899 (9).
*/
function isPrimeOptimized(num){
    if(!Number.isInteger(num) || num <= 1) return false;
    if(num > 2 && num % 2 == 0) return false;
    for(i = 3; i <= Math.sqrt(num); i += 2){
        if(num % i == 0) return false;
    }
    return true;
}
/* 
Find all prime number number less then a given number
Basic solution:
*/
function findPrimes(n){
    let primes = []
    for(let i = 0; i < n; i++){
        if(isPrime(i)) primes.push(i);
    }
    return primes;
}
/**
 * Sieve of Eratosthenes: assume all numbers are prime.
To find all prime numbers less than a given number n we can use additional 
optmizations by eliminating all multiples of a previously found prime number.

Thus if you find 3 to be a prime number, you can eliminate 9, 12, 18 etc.
Thus if you find 5 to be a prime number, you can eliminate 10, 15, 20 etc.

- create an boolean array that represents all numbers we have to check
- assume all numbers are prime, thus set all values to true
- loop over the array and if you find a value = true, that number is 
prime and thus pushed to results array, starting with 2.
- now find all multiples of two and set their value to false in the boolean 
array
- next number = 3, true -> all multiples of 3 set to false
- next number = 4, already set to false -> next loop
- next number = 5, true -> all multiples of 5 set to false
- ...
- return the results array
*/
function sievePrimes(n){
    let isPrime = new Array(n + 1).fill(true);
    //isPrime[0] = false;
    //isPrime[1] = false;

    let primeNumbers = [];

    for(let i = 2; i < n; i++){
        if(isPrime[i] === true){
            primeNumbers.push(i);
            for(let j = i * i; j <= n; j += i){
                isPrime[j] = false;
            }
        }
    }
    return primeNumbers;
}

module.exports = {
    isPrime,
    isPrimeOptimized,
    findPrimes,
    sievePrimes
}