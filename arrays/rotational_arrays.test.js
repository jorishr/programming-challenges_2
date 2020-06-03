const numRotations = require('./rotational_arrays').numRotations;
const numRotationsWithBs = require('./rotational_arrays').numRotationsWithBs;

describe('How many times was the given array rotated?', () => {
    test('Linear search for the index of the of the smallest value', () => {
        expect(numRotations([5, 6, 1, 2, 3, 4])).toBe(2);
        expect(numRotations([5, 6, 7, 2, 3, 4])).toBe(3);
        expect(numRotations([1, 2, 3, 4])).toBe(0);
        expect(numRotations([1])).toBe(0);
        expect(numRotations([])).toBe(0);
    })
    test('Binary search for the index of the of the smallest value', () => {
        expect(numRotationsWithBs([5, 6, 1, 2, 3, 4])).toBe(2);
        expect(numRotationsWithBs([5, 6, 7, 2, 3, 4])).toBe(3);
        expect(numRotationsWithBs([1, 2, 3, 4])).toBe(0);
        expect(numRotationsWithBs([1])).toBe(0);
        expect(numRotationsWithBs([1, 1])).toBe(0);
        expect(numRotationsWithBs([1, 2])).toBe(0);
        expect(numRotationsWithBs([2, 1])).toBe(1);
        expect(numRotationsWithBs([6, 5, 4, 3, 2, 1])).toBe(null);
        expect(numRotationsWithBs([])).toBe(null);
    })
})