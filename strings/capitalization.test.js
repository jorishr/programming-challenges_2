const capitalizetitle  = require('./capitalization.js').capitalize;
const lowercaseWord    = require('./capitalization.js').lowerCaseWord;
const capitalizeWord   = require('./capitalization.js').capitalizeWord;
const captitle         = require('./capitalization.js').capTitle;
const lowecaseword     = require('./capitalization.js').loweCaseWord;
const capword          = require('./capitalization.js').capWord;
const capatindex       = require('./capitalization.js').capAtIndex;

test('Title capitalization according to ruleset is correct', () => {
    const inputTitle = 'this title is Not A Correctly capitalized TITLE';
    const expectedTitle = 'This Title Is Not a Correctly Capitalized Title';
    expect(capitalizetitle(inputTitle)).toEqual(expectedTitle);
});

test('Title capitalization according to ruleset is correct', () => {
    const inputTitle = 'the title is in check BUT not inCorrectly capitalized aNd AT ease';
    const expectedTitle = 'The Title Is in Check but Not Incorrectly Capitalized and at Ease';
    expect(capitalizetitle(inputTitle)).toEqual(expectedTitle);
});

test('Edge case: title is one word only, and a keyword', () => {
    const inputTitle = 'at';
    const expectedTitle = 'At';
    expect(capitalizetitle(inputTitle)).toEqual(expectedTitle);
});

test('Edge case: title empty string', () => {
    const inputTitle = '';
    const expectedTitle = '';
    expect(capitalizetitle(inputTitle)).toEqual(expectedTitle);
});

test('Lowercase word', () => {
    const input = 'WOrD';
    const expected = 'word';
    expect(lowercaseWord(input)).toEqual(expected);
});

test('Capitalize word', () => {
    const input = 'thiS';
    const expected = 'This';
    expect(capitalizeWord(input)).toEqual(expected);
});

test('Capitalize word - capWord fn', () => {
    const input = 'thiS';
    const expected = 'This';
    expect(capword(input)).toEqual(expected);
});

test('Lowercase word - lowecaseWord fn', () => {
    const input = 'WOrD';
    const expected = 'word';
    expect(lowecaseword(input)).toEqual(expected);
});

test('Title capitalization according to ruleset is correct - capTitle fn', () => {
    const inputTitle = 'the title is in check BUT not inCorrectly capitalized aNd AT ease';
    const expectedTitle = 'The Title Is in Check but Not Incorrectly Capitalized and at Ease';
    expect(captitle(inputTitle)).toEqual(expectedTitle);
});

test('Capitalize at index postion', () => {
    const input = 'WOrds';
    const index = 3;
    const expected = 'worDs';
    expect(capatindex(input, index)).toEqual(expected);
});