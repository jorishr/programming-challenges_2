const copyRotate    = require('./rotate').copyRotate;
const swapRotate    = require('./rotate').swapRotate;
const reverseRotate = require('./rotate').reverseRotate;
const numRotations        = require('./count_rotations').numRotations;
const numRotationsWithBs  = require('./count_rotations').numRotationsWithBs;
const findPivot           = require('./count_rotations').findPivot;
const pivotedBinarySearch = require('./search_element').pivotedBinarySearch;
const isRotationOf        = require('./is_rotation_of_other_array');
const isSortedAndRotated  = require('./is_sorted_and_rotated');

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

describe('Is an array a rotation of another array?', () => {
    test('Returns true if input array is rotation of base array', () => {
        const base   = [1,2,3,4];
        const input1 = [2,3,4,1];
        const input2 = [3,4,1,2];
        const input3 = [4,1,2,3];
        const base2  = [10,5,7,12]; 
        const input4  = [12,10,5,7]; 
        const input5  = [5,7,12,10]; 
        const input6  = [5,1,12,10]; 
        const input7  = [5,7,12,10,11]; 
        expect(isRotationOf(base, input1)).toBe(true);
        expect(isRotationOf(base, input2)).toBe(true);
        expect(isRotationOf(base, input3)).toBe(true);
        expect(isRotationOf(base2, input4)).toBe(true);
        expect(isRotationOf(base2, input5)).toBe(true);
        expect(isRotationOf(base2, input6)).toBe(false);
        expect(isRotationOf(base2, input7)).toBe(false);
    })
    test('Is a given array sorted and rotated?', () => {
        const arr1 = [3,4,5,1,2] 
        const arr2 = [2,3,4,5,1] 
        const arr3 = [3,4,5,1,6]
        const arr4 = [1,2,3,4,5]
        const arr5 = [5,1,2,3,4]
        const arr6 = [4,5,1,2,3]
        expect(isSortedAndRotated(arr1)).toBe(true)
        expect(isSortedAndRotated(arr2)).toBe(true)
        expect(isSortedAndRotated(arr3)).toBe(false)
        expect(isSortedAndRotated(arr4)).toBe(false)
        expect(isSortedAndRotated(arr5)).toBe(true)
        expect(isSortedAndRotated(arr6)).toBe(true)
    })
})