const isPrime = require('./isPrime').isPrime;
const isPrimeOptimized = require('./isPrime').isPrimeOptimized;
const findPrimes = require('./isPrime').findPrimes;
const sievePrimes = require('./isPrime').sievePrimes;

test('Is the number a prime number?', () => {
    const input1  = 0;
    const output1 = false;
    const input2  = 1;
    const output2 = false;
    const input3  = 2;
    const output3 = true;
    const input4  = 5;
    const output4 = true; 
    const input5  = 49;
    const output5 = false;
    expect(isPrime(input1)).toBe(output1);
    expect(isPrime(input2)).toBe(output2);
    expect(isPrime(input3)).toBe(output3);
    expect(isPrime(input4)).toBe(output4);
    expect(isPrime(input4)).toBe(output4);
    expect(isPrime(input5)).toBe(output5);
})

test('Is the number a prime number - optimized', () => {
    expect(isPrimeOptimized(0)).toBe(false);
    expect(isPrimeOptimized(1)).toBe(false);
    expect(isPrimeOptimized(2)).toBe(true);
    expect(isPrimeOptimized(3)).toBe(true);
    expect(isPrimeOptimized(5)).toBe(true);
    expect(isPrimeOptimized(6)).toBe(false);
    expect(isPrimeOptimized(20)).toBe(false);
    expect(isPrimeOptimized(25)).toBe(false);
    expect(isPrimeOptimized(331)).toBe(true);
    expect(isPrimeOptimized(122489)).toBe(true);
})

test('Find all prime numbers < than given number',() =>{
    expect(findPrimes(50)).toEqual(expect.arrayContaining([2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47]));
    expect(findPrimes(10)).toEqual(expect.arrayContaining([2, 3, 5, 7]));
})

test('Find all prime numbers < than given number - sieve of Eratosthenes',() =>{
    expect(sievePrimes(100)).toEqual(expect.arrayContaining([2,  3,  5,  7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97]));
    expect(sievePrimes(50)).toEqual(expect.arrayContaining([2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47]));
    expect(sievePrimes(10)).toEqual(expect.arrayContaining([2, 3, 5, 7]));
    expect(sievePrimes(0)).toEqual(expect.arrayContaining([]));
    expect(sievePrimes(1)).toEqual(expect.arrayContaining([]));
})