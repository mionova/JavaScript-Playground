/*****************************************************
Jest testing - sum, substract, multiply, array cloning
*****************************************************/


const {
    expect
} = require('@jest/globals')
const cloneArray = require('./cloneArray')

//testing 1 + 2 === 3
test('properly clones array', () => {
    const array = [1, 2, 3]
    expect(cloneArray(array)).toEqual(array)
    //to make sure that the actual array is creating a clone
    expect(cloneArray(array)).not.toBe(array)
})