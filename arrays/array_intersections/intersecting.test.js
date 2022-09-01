const findCommonElems      = require('./common_elem_in_sorted_arr').findCommonElems;
const findCommonElemsThree = require('./common_elem_in_sorted_arr').findCommonElemsThree;
const findUnion            = require('./union_sorted_arrays');

describe('Array intersection related function tests', () => {
    test('Return the common elements in TWO sorted arrays', () => {
        const arr1 = [1,3,4,6,7,9]
        const arr2 = [1,2,4,5,9,10]
        expect(findCommonElems(arr1, arr2)).toStrictEqual([1,4,9])
        const arr3 = [1,3,4,6,7,9]
        const arr4 = [1,2,4,5,9,10,11,12]
        expect(findCommonElems(arr3, arr4)).toStrictEqual([1,4,9])
        const arr5 = [1,3,4,6,7,9]
        const arr6 = [1,2,4,5,9]
        expect(findCommonElems(arr5, arr6)).toStrictEqual([1,4,9])        
    })
    test('Return the common elements in THREE sorted arrays', () => {
        const arr1 = [1,3,4,6,7,9]
        const arr2 = [1,2,4,5,9]
        const arr3 = [1,4,9]
        expect(findCommonElemsThree(arr1, arr2, arr3)).toStrictEqual([1,4,9])
    })
    test('Returns the union of two sorted array', () => {
        const arr1 = [1,2,4,5,7,8]
        const arr2 = [1,2,3,6,8,9,10]
        expect(findUnion(arr1, arr2)).toStrictEqual([1,2,3,4,5,6,7,8,9,10]);
        const arr3 = [1,3,4,5,7]
        const arr4 = [2,3,5,6]
        expect(findUnion(arr3, arr4)).toStrictEqual([1,2,3,4,5,6,7]);
        const arr5 = [4,6,8,10]
        const arr6 = [2,5,6]
        expect(findUnion(arr5, arr6)).toStrictEqual([2,4,5,6,8,10]);
        
    })
})