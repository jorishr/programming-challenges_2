const hammingDistance = require('./hamming_distance');
const editDistanceRec = require('./levenshtein_distance').editDistanceRec;
const editDistanceDp  = require('./levenshtein_distance').editDistanceDp;
const editDistanceEqualTo = require('./levenshtein_distance').editDistanceEqualTo;

describe('Edit Distance metrics', () => {
    test('Hamming distance - Number of positions for which characters are different in strings of equal length', () =>{
        expect(hammingDistance('', '')).toBe(0);
        expect(hammingDistance('man', 'man')).toBe(0);
        expect(hammingDistance('men', 'man')).toBe(1);
        expect(hammingDistance('11101', '11011')).toBe(2);
        expect(hammingDistance('Hello World', 'hello_world')).toBe(3);
    })
    test('Levenshtein distance, Recursive fn - Number of edits required to create equal strings', () => {
        const str1 = 'cat';
        const str2 = 'cut';
        const str3 = 'sunday';
        const str4 = 'saturday';
        expect(editDistanceRec(str1, str2)).toBe(1);
        expect(editDistanceRec(str3, str4)).toBe(3);
    })
    test('Levenshtein distance, DP Bottom-up fn - Number of edits required to create equal strings', () => {
        const str1 = 'cat';
        const str2 = 'cut';
        const str3 = 'sunday';
        const str4 = 'saturday';
        expect(editDistanceDp(str1, str2)).toBe(1);
        expect(editDistanceDp(str3, str4)).toBe(3);
    })
    test('Is edit distance equal to given number?', () => {
        expect(editDistanceEqualTo('abcd', 'bcd', 1)).toBe(true);
        expect(editDistanceEqualTo('abc', 'abcd', 1)).toBe(true);
        expect(editDistanceEqualTo('abc', 'a', 1)).toBe(false);
        expect(editDistanceEqualTo('a', 'abc', 1)).toBe(false);
    })
})