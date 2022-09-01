const findGcd = require('./greatest_common_divisor').findGcd;
const euclidGcd = require('./greatest_common_divisor').euclidGcd;
const euclidSimplified = require('./greatest_common_divisor').euclidSimplified;
const euclidRecursive = require('./greatest_common_divisor').euclidRecursive;

describe('Find common divisors of two given numbers', () => {
    it('Returns the greatest commond divisor of two numbers a and b', () =>{
        expect(findGcd(10, 5)).toBe(5);
        expect(findGcd(5, 10)).toBe(5);
        expect(findGcd(2, 1)).toBe(1);
        expect(findGcd(1, 2)).toBe(1);
        expect(findGcd(24, 18)).toBe(6);
        expect(findGcd(18, 24)).toBe(6);
        expect(findGcd(400, 124)).toBe(4);
        expect(findGcd(124, 400)).toBe(4);
    })
    it('Euclid method for GCD', () =>{
        expect(euclidGcd(10, 5)).toBe(5);
        expect(euclidGcd(5, 10)).toBe(5);
        expect(euclidGcd(2, 1)).toBe(1);
        expect(euclidGcd(1, 2)).toBe(1);
        expect(euclidGcd(24, 18)).toBe(6);
        expect(euclidGcd(18, 24)).toBe(6);
        expect(euclidGcd(400, 124)).toBe(4);
        expect(euclidGcd(124, 400)).toBe(4);
    })    
    it('Euclid simplified method for GCD', () =>{
        expect(euclidSimplified(10, 5)).toBe(5);
        expect(euclidSimplified(5, 10)).toBe(5);
        expect(euclidSimplified(2, 1)).toBe(1);
        expect(euclidSimplified(1, 2)).toBe(1);
        expect(euclidSimplified(24, 18)).toBe(6);
        expect(euclidSimplified(18, 24)).toBe(6);
        expect(euclidSimplified(400, 124)).toBe(4);
        expect(euclidSimplified(124, 400)).toBe(4);
    })    
    it('Euclid recursive method for GCD', () =>{
        expect(euclidRecursive(10, 5)).toBe(5);
        expect(euclidRecursive(5, 10)).toBe(5);
        expect(euclidRecursive(2, 1)).toBe(1);
        expect(euclidRecursive(1, 2)).toBe(1);
        expect(euclidRecursive(24, 18)).toBe(6);
        expect(euclidRecursive(18, 24)).toBe(6);
        expect(euclidRecursive(400, 124)).toBe(4);
        expect(euclidRecursive(124, 400)).toBe(4);
    })    
})