const subtract = require('./subtract')

//testing 1 + 2 === 3
test('properly subtracts two numbers', () => {
    expect(subtract(1, 2)).toBe(-1)
})