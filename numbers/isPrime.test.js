const isPrime = require('./isPrime');

test('Is the number a prime number?', () => {
    const input1  = 0;
    const output1 = false;
    const input2  = 1;
    const output2 = false;
    const input3  = 2;
    const output3 = true;
    const input4  = 5;
    const output4 = true; 
    const input5  = 49;
    const output5 = false;
    expect(isPrime(input1)).toBe(output1);
    expect(isPrime(input2)).toBe(output2);
    expect(isPrime(input3)).toBe(output3);
    expect(isPrime(input4)).toBe(output4);
    expect(isPrime(input4)).toBe(output4);
    expect(isPrime(input5)).toBe(output5);
})