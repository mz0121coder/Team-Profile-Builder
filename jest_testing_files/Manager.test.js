// manager const requires manager profile
const Manager = require('../profiles/Manager');

// creating object respresenting manager 
test('create an object representing the manager', () => {
    const manager = new Manager('Mohammad', 2, 'mzcoder7@gmail.com');
// expect office number test to result in a number value   
expect(manager.officeNumber).toEqual(expect.any(Number));
});