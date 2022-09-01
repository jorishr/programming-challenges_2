const fibRecursion   = require('./fibonacci_recursion');
const getFibSequence = require('./fibonacci_bottom-up').getFibSequence;
const fibBottomUp    = require('./fibonacci_bottom-up').findFibAt;
const fibMemoization = require('./fibonacci_memoization');

describe('Fibonacci sequence', () => {
    it('Generates a Fibonacci sequence of n elements - BOTTOM-UP FN', () => {
        expect(getFibSequence(1)).toEqual(1);
        expect(getFibSequence(5)).toEqual([0, 1, 1, 2, 3, 5]);
        expect(getFibSequence(10)).toEqual([0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55]);
        expect(getFibSequence(15)).toEqual([0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377, 610]);
    })
    it('Finds the nth number in the Fibonacci Sequence - RECURSIVE FN', () => {
        expect(fibRecursion(1)).toBe(1);
        expect(fibRecursion(5)).toBe(5);
        expect(fibRecursion(10)).toBe(55);
        expect(fibRecursion(14)).toBe(377);
    })
    it('Finds the nth number in the Fibonacci Sequence - BOTTOM-UP FN', () => {
        expect(fibBottomUp(1)).toBe(1);
        expect(fibBottomUp(5)).toBe(5);
        expect(fibBottomUp(10)).toBe(55);
        expect(fibBottomUp(14)).toBe(377);
    })
    it('Finds the nth number in the Fibonacci Sequence - MEMOIZATION FN', () => {
        expect(fibMemoization(1)).toBe(1);
        expect(fibMemoization(5)).toBe(5);
        expect(fibMemoization(10)).toBe(55);
        expect(fibMemoization(14)).toBe(377);
    })
})