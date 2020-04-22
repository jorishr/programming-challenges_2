const replaceChar = require('./replace-str_chars');

test('Character replacement: l to s', () => {
    const input         = 'Hello-World';
    const keyChar       = 'l'
    const newChar       = 's'
    const expected      = 'Hesso-Worsd';
    expect(replaceChar(input, keyChar, newChar)).toEqual(expected);
})

test('Character replacement: - to _', () => {
    const input         = 'Hello-World';
    const keyChar       = '-'
    const newChar       = '_'
    const expected      = 'Hello_World';
    expect(replaceChar(input, keyChar, newChar)).toEqual(expected);
})