const isPowerOf2 = require('./is_power_of_2');
const power      = require('./fast_powering').power;   
const fastPower  = require('./fast_powering').fastPower;   

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
describe('Calculate the power of two integers', () => {
    test('Basic power calculation function in O(n)', () =>{
        expect(power(2,0)).toBe(1);
        expect(power(2,1)).toBe(2);
        expect(power(2,2)).toBe(4);
        expect(power(2,3)).toBe(8);
        expect(power(4,0)).toBe(1);
        expect(power(4,1)).toBe(4);
        expect(power(4,2)).toBe(16);
        expect(power(4,3)).toBe(64);
        expect(power(3,0)).toBe(1);
        expect(power(3,2)).toBe(9);
        expect(power(3,3)).toBe(27);
    })
    test('Fast power calculation function in O(log(n))', () =>{
        expect(fastPower(2,0)).toBe(1);
        expect(fastPower(2,1)).toBe(2);
        expect(fastPower(2,2)).toBe(4);
        expect(fastPower(2,3)).toBe(8);
        expect(fastPower(4,0)).toBe(1);
        expect(fastPower(4,1)).toBe(4);
        expect(fastPower(4,2)).toBe(16);
        expect(fastPower(4,3)).toBe(64);
        expect(fastPower(3,0)).toBe(1);
        expect(fastPower(3,2)).toBe(9);
        expect(fastPower(3,3)).toBe(27);
    })
})