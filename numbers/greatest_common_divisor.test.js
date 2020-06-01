const findGcd = require('./greatest_common_divisor').findGcd;
const findScd = require('./greatest_common_divisor').findScd;
const euclidGcd = require('./greatest_common_divisor').euclidGcd;

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
})