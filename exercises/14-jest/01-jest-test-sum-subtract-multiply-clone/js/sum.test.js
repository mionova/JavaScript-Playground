const sum = require('./sum')

//testing 1 + 2 === 3
test('properly adds two numbers', () => {
    expect(sum(1, 2)).toBe(3)
})