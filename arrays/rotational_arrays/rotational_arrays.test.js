const copyRotate    = require('./rotate').copyRotate;
const swapRotate    = require('./rotate').swapRotate;
const reverseRotate = require('./rotate').reverseRotate;
const numRotations        = require('./count_rotations').numRotations;
const numRotationsWithBs  = require('./count_rotations').numRotationsWithBs;
const findPivot           = require('./count_rotations').findPivot;
const pivotedBinarySearch = require('./search_element').pivotedBinarySearch;

describe('Tests array rotation methods', () => {
    test('Rotates the array clockwise, k times - copyRotate fn', () => {
        expect(copyRotate([], 0)).toStrictEqual([]);
        expect(copyRotate([1,2,3,4,5], 0)).toStrictEqual([1, 2, 3, 4, 5]);
        expect(copyRotate([1,2,3,4,5], 1)).toStrictEqual([5, 1, 2, 3, 4]);
        expect(copyRotate([1,2,3,4,5], 2)).toStrictEqual([4, 5, 1, 2, 3]);
    })
    test('Rotates the array counter clockwise, k times - copyRotate fn', () => {
        expect(copyRotate([], 0, 1)).toStrictEqual([]);
        expect(copyRotate([1,2,3,4,5], 0, 1)).toStrictEqual([1, 2, 3, 4, 5]);
        expect(copyRotate([1,2,3,4,5], 1, 1)).toStrictEqual([2, 3, 4, 5, 1]);
        expect(copyRotate([1,2,3,4,5], 2, 1)).toStrictEqual([3, 4, 5, 1, 2]);
        expect(copyRotate([1,2,3,4,5], 3, 1)).toStrictEqual([4, 5, 1, 2, 3]);
    })
    test('Rotates the array clockwise, k times - swapRotate fn', () => {
        expect(swapRotate([], 0)).toStrictEqual([]);
        expect(swapRotate([1,2,3,4,5], 0)).toStrictEqual([1, 2, 3, 4, 5]);
        expect(swapRotate([1,2,3,4,5], 1)).toStrictEqual([5, 1, 2, 3, 4]);
        expect(swapRotate([1,2,3,4,5], 2)).toStrictEqual([4, 5, 1, 2, 3]);
    })
    test('Rotates the array clockwise, k times - reverseRotate fn', () => {
        expect(reverseRotate([], 0)).toStrictEqual([]);
        expect(reverseRotate([1,2,3,4,5], 0)).toStrictEqual([1, 2, 3, 4, 5]);
        expect(reverseRotate([1,2,3,4,5], 1)).toStrictEqual([5, 1, 2, 3, 4]);
        expect(reverseRotate([1,2,3,4,5], 2)).toStrictEqual([4, 5, 1, 2, 3]);
    })
    test('Rotates the array counter clockwise, k times - reverseRotate fn', () => {
        expect(reverseRotate([], 0, 1)).toStrictEqual([]);
        expect(() => {reverseRotate([], 0, 5)}).toThrowError();
        expect(reverseRotate([1,2,3,4,5], 0, 1)).toStrictEqual([1, 2, 3, 4, 5]);
        expect(reverseRotate([1,2,3,4,5], 1, 1)).toStrictEqual([2, 3, 4, 5, 1]);
        expect(reverseRotate([1,2,3,4,5], 2, 1)).toStrictEqual([3, 4, 5, 1, 2]);
    })
})

describe('How many times was the given array rotated?', () => {
    test('Linear search for the index of the smallest value', () => {
        expect(numRotations([5, 6, 1, 2, 3, 4])).toBe(2);
        expect(numRotations([5, 6, 7, 2, 3, 4])).toBe(3);
        expect(numRotations([1, 2, 3, 4])).toBe(0);
        expect(numRotations([1])).toBe(0);
        expect(numRotations([])).toBe(0);
    })
    test('Binary search for the index of the smallest value', () => {
        expect(numRotationsWithBs([5, 6, 1, 2, 3, 4])).toBe(2);
        expect(numRotationsWithBs([5, 6, 7, 2, 3, 4])).toBe(3);
        expect(numRotationsWithBs([1, 2, 3, 4])).toBe(0);
        expect(numRotationsWithBs([1])).toBe(0);
        expect(numRotationsWithBs([1, 1])).toBe(0);
        expect(numRotationsWithBs([1, 2])).toBe(0);
        expect(numRotationsWithBs([2, 1])).toBe(1);
        expect(numRotationsWithBs([])).toBe(0);
    })
})

describe('Find the index position of an element in rotated array', () => {
    test('Returns the index position of a given number in a rotated array', () => {
        expect(pivotedBinarySearch([1,2,3,4,5], 2)).toBe(1);
        expect(pivotedBinarySearch([4,5,1,2,3], 2)).toBe(3);
        expect(pivotedBinarySearch([4,5,1,2,3], 3)).toBe(4);
        expect(pivotedBinarySearch([4,5,1,2,3], 4)).toBe(0);
        expect(pivotedBinarySearch([4,5,1,2,3], 5)).toBe(1);
        expect(pivotedBinarySearch([4,5,1,2,3], 6)).toBe(-1);    
        expect(pivotedBinarySearch([], 1)).toBe(-1);    
    })
    test('Returns is the index position of a pivot, the only element for which the next element is smaller', () =>{
        expect(findPivot([3,4,5,1,2])).toBe(2);
        expect(findPivot([2,3,4,5,1])).toBe(3);
        expect(findPivot([5,1,2,3,4])).toBe(0);
        expect(findPivot([1])).toBe(-1);
        expect(findPivot([])).toBe(-1);
    })
})