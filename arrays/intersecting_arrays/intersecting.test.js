const findCommonElems      = require('./common_elem_in_sorted_arr').findCommonElems;
const findCommonElemsThree = require('./common_elem_in_sorted_arr').findCommonElemsThree;

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
})



