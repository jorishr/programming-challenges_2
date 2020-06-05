const hammingDistance = require('./hamming_distance');

describe('Measure Hamming distance between string of equal length', () => {
    test('Returns the number of positions for which characters are different', () =>{
        expect(hammingDistance('', '')).toBe(0);
        expect(hammingDistance('man', 'man')).toBe(0);
        expect(hammingDistance('men', 'man')).toBe(1);
        expect(hammingDistance('11101', '11011')).toBe(2);
        expect(hammingDistance('Hello World', 'hello_world')).toBe(3);
    })
})