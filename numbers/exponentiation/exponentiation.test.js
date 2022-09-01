const power           = require('./exponentiation').power;
const recursivePower1 = require('./exponentiation').recursivePower1;
const recursivePower2 = require('./exponentiation').recursivePower2;
const modExp          = require('./exponentiation_modular');

describe('Exponentiation', () => {
    it('Returns the result of n to power of x', () => {
        expect(power(5,2)).toEqual(25);
        expect(power(5,-2)).toEqual(0.04);
        expect(power(10,-6)).toEqual(0.000001);
        expect(power(10,3)).toEqual(1000);
        expect(power(10,-10)).toEqual(0.0000000001);
    })
    it('Returns the result of n to the power of x, using recursion1', () => {
        expect(recursivePower1(5,2)).toEqual(25);
        expect(recursivePower1(5,-2)).toEqual(0.04);
        expect(recursivePower1(10,-6)).toEqual(0.000001);
        expect(recursivePower1(10,3)).toEqual(1000);
    })
    it('Returns the result of n to the power of x, using recursion2', () => {
        expect(recursivePower2(5,2)).toEqual(25);
        expect(recursivePower2(5,-2)).toEqual(0.04);
        expect(recursivePower2(10,-6)).toEqual(0.000001);
        expect(recursivePower2(10,3)).toEqual(1000);
    })
    it('Returns the modular exponentiation of x^n % m', () => {
        expect(modExp(5, 2, 7)).toEqual(4)
        expect(modExp(5, 3, 7)).toEqual(6)
        expect(modExp(2, 10, 8)).toEqual(0)
        expect(modExp(2, 10, 5)).toEqual(4)
    })
})