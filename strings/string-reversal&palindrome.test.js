const charReverse  = require('./string-reversal&palindrome').charReverse;
const wordReverse  = require('./string-reversal&palindrome').wordReverse;
const isPalindrome = require('./string-reversal&palindrome').isPalindrome;


test('Reverse all characters in a string', () => {
    const input     = 'I love javascript';
    const expected  = 'tpircsavaj evol I'
    expect(charReverse(input)).toEqual(expected); 
})

test('Reverse the words in a string - even number of words', () => {
    const input     = 'I love javascript deeply';
    const expected  = 'deeply javascript love I';
    expect(wordReverse(input)).toEqual(expected); 
})

test('Reverse the words in a string - uneven number of words', () => {
    const input     = 'I love javascript';
    const expected  = 'javascript love I';
    expect(wordReverse(input)).toEqual(expected); 
})

test('Is the string a palindrome?', () => {
    const input1  = 'level';
    const input2  = 'levels';
    const input3  = '12321';
    expect(isPalindrome(input1)).toBe(true);
    expect(isPalindrome(input2)).toBe(false);
    expect(isPalindrome(input3)).toBe(true);
})