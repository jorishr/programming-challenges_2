const findMostFrequent = require('./most_frequent_item');

describe('Identify the most frequent element in the array', () => {
    test('Returns the most frequent in a given array', () => {
        expect(findMostFrequent([1,2,1,3,1,4])).toBe(1);
        expect(findMostFrequent([3,2,1,1,3,3])).toBe(3);
        expect(findMostFrequent(['a','b','c','a'])).toBe('a');
    })
})