const findFirstRecurringChar = require('./first_recurring_char');
describe('Find first recurring char in string', () => {
    test('Returns the first recurring char found in str', () => {
        expect(findFirstRecurringChar('abcd')).toBe(null);
        expect(findFirstRecurringChar('abcdba')).toBe('b');
        expect(findFirstRecurringChar('aaaaa')).toBe('a');
    })    
})
