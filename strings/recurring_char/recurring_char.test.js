const countChar = require('./countChars').countChar;
const findFirstRecurringChar = require('./first_recurring_char');
const findFirstNonRecurringChar = require('./find_non-recurring_char').findFirstNonRecurringChar;
const findFirstNonRecurringCharOptmzd = require('./find_non-recurring_char').findFirstNonRecurringCharOptmzd;

describe('Find or count (non-)recurring characters in a string', () =>{
    test('How many times can a given char be found in a string (case-insensitive)', () => {
        const input = 'The BBC is active in the public broadcasting business';
        const key   = 'B';
        expect(countChar(input, key)).toBe(5);
    })
    test('Find the first recurring char found in str', () => {
        expect(findFirstRecurringChar('abcd')).toBe(null);
        expect(findFirstRecurringChar('abcdba')).toBe('b');
        expect(findFirstRecurringChar('aaaaa')).toBe('a');
    })
    test('Find the first non-recurring char found in str', () => {
        expect(findFirstNonRecurringChar('abcd')).toBe('a');
        expect(findFirstNonRecurringChar('aabbcdd')).toBe('c');
        expect(findFirstNonRecurringChar('aabbcdde')).toBe('c');
        expect(findFirstNonRecurringChar('aabbccdde')).toBe('e');
        expect(findFirstNonRecurringChar('abbccddee')).toBe('a');
        expect(findFirstNonRecurringChar('aaaa')).toBe(-1);          
    })    
    test('Find the first non-recurring char found in str, - Optimized', () => {
        expect(findFirstNonRecurringCharOptmzd('abcd')).toBe('a');
        expect(findFirstNonRecurringCharOptmzd('aabbcdd')).toBe('c');
        expect(findFirstNonRecurringCharOptmzd('aabbcdde')).toBe('c');
        expect(findFirstNonRecurringCharOptmzd('aabbccdde')).toBe('e');
        expect(findFirstNonRecurringCharOptmzd('abbccddee')).toBe('a');
        expect(findFirstNonRecurringCharOptmzd('aaaa')).toBe(-1);          
    })    
})