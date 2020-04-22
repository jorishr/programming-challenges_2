const countChar = require('./countChars').countChar;

test('How many times can a given char be found in a string (case-insensitive)', () => {
    const input     = 'The BBC is active in the public broadcasting business';
    const keyChar   = 'B';
    expect(countChar(input, keyChar)).toBe(5);
})