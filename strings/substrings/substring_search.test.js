const containsSubstr = require('./substring_search').containsSubstr;
const findLongestSubStr = require('./longest-shortest_substring').findLongestSubStr;
const findPalindromicSubStr = require('./longest-shortest_substring').findPalindromicSubStr;
const findShortestSubStrWithSet = require('./longest-shortest_substring').findShortestSubStrWithSet;

describe('Substring search', () =>{
    test('Fn returns true if substring can be found in string', () =>{
        expect(containsSubstr('', 'a')).toBe(false);
        expect(containsSubstr('abcde', '')).toBe(false);
        expect(containsSubstr('abcde', 'e')).toBe(true);
        expect(containsSubstr('abcde', 'de')).toBe(true);
        expect(containsSubstr('abcde', 'cde')).toBe(true);
        expect(containsSubstr('abcde', 'bcde')).toBe(true);
        expect(containsSubstr('abcde', 'abcde')).toBe(true);
    })
    test('Return the longest substring with k different characters', () =>{
        expect(findLongestSubStr('aaabbbbded', 1)).toEqual('bbbb');
        expect(findLongestSubStr('aaabbbbded', 2)).toEqual('aaabbbb');
        expect(findLongestSubStr('abcded', 2)).toEqual('ded');
        expect(findLongestSubStr('abcded', 3)).toEqual('cded');
    })
    test('Return the longest palindromic substring', () =>{
        expect(findPalindromicSubStr('')).toEqual(-1);
        expect(findPalindromicSubStr('abcde')).toEqual('a');
        expect(findPalindromicSubStr('bananas')).toEqual('anana');
        expect(findPalindromicSubStr('aabcdcb')).toEqual('bcdcb');
    })
    test('Return the shortest substring that contains a given set of characters', () =>{
        expect(findShortestSubStrWithSet('acbedeaeeb', ['a', 'b'])).toEqual('acb')
        expect(findShortestSubStrWithSet('acbedeeeefffed', ['e', 'd'])).toEqual('ed')
        expect(findShortestSubStrWithSet('abecccccdfff', ['e', 'd'])).toEqual('ecccccd')
        expect(findShortestSubStrWithSet('abecccccdfff', ['x', 'd'])).toBe(-1)
        expect(findShortestSubStrWithSet('', ['x', 'd'])).toBe(-1)
    })
})