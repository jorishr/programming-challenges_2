const arr2str = require('./array_to_string');

describe('Array conversion', () => {
    it('Should convert an array into a string with comma-space seperated values', () => {
        const input  = [1,2,3,4,5];
        const output = '1, 2, 3, 4, 5';
        expect(arr2str(input)).toEqual(output);
    })
})