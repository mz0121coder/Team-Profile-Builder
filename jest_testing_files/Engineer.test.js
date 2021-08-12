// const engineer requires engineer profile
const Engineer = require('../profiles/Engineer');

// create object representing engineer
test('create object representing engineer', () => {
    const engineer = new Engineer('Mohammad', 2, 'mzcoder7@gmail.com');
// expect github name to equal a string   
expect(engineer.gitHubName).toEqual(expect.any(String));
});

// get github from getGithub()
test('get github profile of engineer', () => {
    const engineer = new Engineer('Mohammad', 2, 'mzcoder7@gmail.com');
// expect getGithub() to return string containing engineer's github name
    expect(engineer.getGitHubName()).toEqual(expect.stringContaining(engineer.gitHubName.toString()));
});