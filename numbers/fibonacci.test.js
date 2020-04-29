const generateFibonacci = require('./fibonacci').generateFibonacci;
const findFibAt         = require('./fibonacci').findFibAt;

describe('Fibonacci sequence', () => {
    it('Generates a Fibonacci sequence of n elements', () => {
        expect(generateFibonacci(0)).toEqual([0]);
        expect(generateFibonacci(1)).toEqual([1]);
        expect(generateFibonacci(10)).toEqual([0, 1, 1, 2, 3, 5, 8, 13, 21, 34]);
        expect(generateFibonacci(15)).toEqual([0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377]);
    })
    it('Finds the nth number in the Fibonacci Sequence', () => {
        expect(findFibAt(10)).toBe(55);
        expect(findFibAt(14)).toBe(377);
        expect(findFibAt(0)).toBe(0);
        expect(findFibAt(1)).toBe(1);
    })
})