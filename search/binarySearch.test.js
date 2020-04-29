const binarySearch = require('./binarySearch').binarySearch;
const objectSearch = require('./binarySearch').objectSearch;

describe('Binary Search Functions', () => {
    it('Should find index position of a number in a sorted array', () => {
        const arr  = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
        expect(binarySearch(arr, 5)).toBe(5);
        expect(binarySearch(arr, 1)).toBe(1);
        expect(binarySearch(arr, 2)).toBe(2);
        expect(binarySearch(arr, 10)).toBe(-1);
        expect(binarySearch([], 1)).toBe(-1);
    })
    it('Should find index position of a string in a sorted array', () => {
        const arr  = ['a', 'b', 'c', 'd', 'e'];
        expect(binarySearch(arr, 'a')).toBe(0);
        expect(binarySearch(arr, 'b')).toBe(1);
        expect(binarySearch(arr, 'c')).toBe(2);
        expect(binarySearch(arr, 'f')).toBe(-1);
    })
    it('Should find index position of an object in a sorted array', () => {
        const arr  = [{'a': 1}, {'a': 2}, {'a': 3}];
        expect(objectSearch(arr, {'a': 1})).toBe(0);
        expect(objectSearch(arr, {'a': 2})).toBe(1);
        expect(objectSearch(arr, {'a': 3})).toBe(2);
        expect(objectSearch(arr, {'a': 4})).toBe(-1);
    })
});