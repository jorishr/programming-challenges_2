const translate = require('./permutations-number_string').translate;

test('Get all possible permutations for number to alphabet string conversion', () => {
    const input1  = 12;
    const output1 = ['m', 'b', 'c'];  
    const input2  = 101;
    const output2 = [ [ 'b' ], [ 'k', 'b', 'a' ], [ 'a' ], [ 'b' ], [ 'b' ] ];
    expect(translate(input1)).toEqual(output1);
    expect(translate(input2)).toEqual(output2);
})

