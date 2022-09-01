const findFactors = require('./factors_of_a number').findFactors;
const findFactorsOptimized = require('./factors_of_a number').findFactorsOptimized;

test('Return all factors of a given integer', () => {
    expect(findFactors(12)).toEqual(expect.arrayContaining([1, 2, 3, 4, 6, 12]));
    expect(findFactors(2)).toEqual(expect.arrayContaining([1, 2]));
    expect(findFactors(3)).toEqual(expect.arrayContaining([1, 3]));
    expect(findFactors(17)).toEqual(expect.arrayContaining([1, 17]));
})
test('Return all factors of a given integer', () => {
    expect(findFactorsOptimized(12)).toEqual(expect.arrayContaining([1, 2, 3, 4, 6, 12]));
    expect(findFactorsOptimized(2)).toEqual(expect.arrayContaining([1, 2]));
    expect(findFactorsOptimized(3)).toEqual(expect.arrayContaining([1, 3]));
    expect(findFactorsOptimized(17)).toEqual(expect.arrayContaining([1, 17]));
})