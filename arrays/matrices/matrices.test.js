const rotateMatrix = require('./rotate_matrix');
const countNegatives = require('./count_negative_nums');

describe('Rotate matrix', () => {
    test('Rotates matrix 90 degrees clockwise', () => {
        const matrix1 = [[1, 2, 3], [4, 5, 6], [7, 8, 9]]
        const matrix2 = [[1, 2, 3, 4], [5, 6, 7, 8], [9, 10, 11, 12], [13, 14, 15, 16]]
        expect(rotateMatrix(matrix1)).toStrictEqual([[7,4,1],[8,5,2],[9,6,3]])
        expect(rotateMatrix(matrix2)).toStrictEqual([[ 13, 9, 5, 1 ], [ 14, 10, 6, 2 ], [ 15, 11, 7, 3 ], [ 16, 12, 8, 4 ]])
    })
    test('Counts all negative integers in sorted matrix', () => {
        const matrix1 = [
            [-4,-3,-1,0],
            [-2,-2, 0,1],
            [-1, 0, 1,2],
            [ 0, 1, 2,3]
        ]
        const matrix2 = [
            [-3,-2,-1, 1],
            [-2, 2, 3, 4],
            [ 4, 5, 7, 8],
        ]
        expect(countNegatives(matrix1)).toBe(6)
        expect(countNegatives(matrix2)).toBe(4)
    })
})