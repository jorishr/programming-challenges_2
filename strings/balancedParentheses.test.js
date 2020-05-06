const isBalanced = require('./balancedParentheses');

test('Are the parenthese in the string balanced?', () => {
    const input1 = '[()(){}]';
    const input2 = '()(){}]';
    const input3 = '[()()}]';
    const input4 = '[(a + b) * (c + d)]';
    const input5 = '[(a + b)[ * (c + d)]';
    const input6 = '[(a + b)} * (c + d)]';
    expect(isBalanced(input1)).toBe(true);
    expect(isBalanced(input2)).toBe(false);
    expect(isBalanced(input3)).toBe(false);
    expect(isBalanced(input4)).toBe(true);
    expect(isBalanced(input5)).toBe(false);
    expect(isBalanced(input6)).toBe(false);
})