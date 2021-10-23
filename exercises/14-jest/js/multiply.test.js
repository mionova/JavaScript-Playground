const multiply = require('./multiply')

//testing 1 * 2 === 2
test('properly multiplies two numbers', () => {
    expect(multiply(1, 2)).toBe(2)
})