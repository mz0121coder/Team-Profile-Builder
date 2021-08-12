// intern const requires intern profile
const Intern = require('../profiles/Intern');

// create object representing intern
test('create object representing intern', () => {
    const intern = new Intern('Mohammad', 2, 'mzcoder7@gmail.com', "2U");
 // expect school name to equal a string   
 expect(intern.schoolName).toEqual(expect.any(String));
});

// get school information from getEducationInfo()
test('get name of school being attended by intern', () => {
    const intern = new Intern('Mohammad', 2, 'mzcoder7@gmail.com', "2U");
// expect test to return a string containing name of school attended
    expect(intern.getEducationInfo()).toEqual(expect.stringContaining(intern.schoolName.toString()));
});
