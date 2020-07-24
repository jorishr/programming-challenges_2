const convert = require('./convert_am_to_pm');
describe('Convert AM timestring to PM timestring', () => {
    test('Return the correct PM string format', () => {
        const time1 = '08:03AM'
        const time2 = '7:15AM'
        expect(convert(time1)).toEqual('20:03PM')
        expect(convert(time2)).toEqual('19:15PM')
    } )
})