const basicSearch    = require('./linearSearch').basicSearch;
const advancedSearch = require('./linearSearch').advancedSearch;
const objectSearch   = require('./linearSearch').objectSearch;

describe('Linear Search Functions', () => {
    it('Should find index position of a number in an unsorted array', () => {
        const arr  = [1, 2, 3, 4, 5, 6, 9, 7, 8];
        expect(basicSearch(arr, 5)).toBe(4);
        expect(basicSearch(arr, 1)).toBe(0);
        expect(basicSearch(arr, 2)).toBe(1);
        expect(basicSearch(arr, 10)).toBe(-1);
    })
    it('Should find index position(s) of a number in an unsorted array, including duplicates', () => {
        const arr  = [1, 2, 3, 4, 5, 6, 2, 2];
        expect(advancedSearch(arr, 5)).toEqual([4]);
        expect(advancedSearch(arr, 1)).toEqual([0]);
        expect(advancedSearch(arr, 2)).toEqual([1, 6, 7]);
        expect(advancedSearch(arr, 10)).toEqual([]);
    })
    it('Should find index position of a string in an unsorted array', () => {
        const arr  = ['a', 'c', 'b', 'e', 'd'];
        expect(basicSearch(arr, 'a')).toBe(0);
        expect(basicSearch(arr, 'b')).toBe(2);
        expect(basicSearch(arr, 'd')).toBe(4);
        expect(basicSearch(arr, 'f')).toBe(-1);
    })
    it('Should find index position(s) of a string in an unsorted array, including duplicates', () => {
        const arr  = ['a', 'b', 'c', 'd', 'e', 'b'];
        expect(advancedSearch(arr, 'd')).toEqual([3]);
        expect(advancedSearch(arr, 'e')).toEqual([4]);
        expect(advancedSearch(arr, 'b')).toEqual([1, 5]);
        expect(advancedSearch(arr, 'f')).toEqual([]);
    })
    it('Should find index position(s) of an object in an unsorted array, including duplicates', () => {
        const arr  = [{'name': 'John' }, {'name': 'Joe' }, {'name': 'Jane' }, {'name': 'Jane'}];
        expect(objectSearch(arr, {'name': 'John' })).toEqual([0]);
        expect(objectSearch(arr, {'name': 'Joe' })).toEqual([1]);
        expect(objectSearch(arr, {'name': 'Jane' })).toEqual([2, 3]);
        expect(objectSearch(arr, {'name': 'Jack' })).toEqual([]);
        expect(objectSearch(arr, {'street': 'main road' })).toEqual([]);
        expect(objectSearch(arr, 5)).toEqual([]);
        expect(objectSearch(arr, 'b')).toEqual([]);
    })
})