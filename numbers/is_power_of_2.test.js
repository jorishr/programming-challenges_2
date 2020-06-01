const isPowerOf2 = require('./is_power_of_2');

describe('Is a given number a power of 2?', () => {
    it('Returns true if given number is a power of 2', () => {
        expect(isPowerOf2('a')).toBe(null);
        expect(isPowerOf2(0)).toBe(null);
        expect(isPowerOf2(1)).toBe(true);
        expect(isPowerOf2(2)).toBe(true);
        expect(isPowerOf2(3)).toBe(false);
        expect(isPowerOf2(8)).toBe(true);
        expect(isPowerOf2(20)).toBe(false);
        expect(isPowerOf2(32)).toBe(true);
    })
})