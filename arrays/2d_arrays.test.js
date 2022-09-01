const printSpiral = require('./2d_arrays').printSpiral;

const arr1 = [
    [2, 3, 4, 5],
    [1, 6, 8, 9],
    [7, 8, 0, 3],
    [0, 1, 6, 2]
]
const arr2 = [
    [0, 0, 0, 0, 1],
    [2, 3, 4, 5, 1],
    [1, 6, 8, 9, 1],
    [7, 8, 0, 3, 1],
    [0, 1, 6, 2, 1]
]
describe('Print a 2D array values in a spiral order', () => {
    test('It prints a given array in spiral order - clockwise', () => {
        expect(printSpiral(arr1, arr1.length, arr1[0].length)).toStrictEqual([2, 3, 4, 5, 9, 3, 2, 6, 1, 0, 7, 1, 6, 8, 0, 8])
        expect(printSpiral(arr2, arr2.length, arr2[0].length)).toStrictEqual([0, 0, 0, 0, 1, 1, 1, 1, 1, 2, 6, 1, 0, 7, 1, 2, 3, 4, 5, 9, 3, 0, 8, 6, 8])
    })
})