// employee const requires Employee profile
const Employee = require('../profiles/Employee');

// employee object test
test('create an object representing the employee', () => {
    const employee = new Employee('Mohammad', 2, 'mzcoder7@gmail.com');
//expect name and email to equal string, expect id to equal a number
    expect(employee.preferredName).toEqual(expect.any(String));
    expect(employee.idNumber).toEqual(expect.any(Number));
    expect(employee.emailAddress).toEqual(expect.any(String));
});

// employee name testing
test('get preferred name of employee', () => {
    const employee = new Employee('Mohammad', 2, 'mzcoder7@gmail.com');
// expect name to equal a string
    expect(employee.getPreferredName()).toEqual(expect.any(String));
});

// employee id testing
test('get ID number of employee', () => {
    const employee = new Employee('Mohammad', 2, 'mzcoder7@gmail.com');
// expect id to equal a number
    expect(employee.getIdNumber()).toEqual(expect.any(Number));
});

// employee email testing
test('get email address of employee', () => {
    const employee = new Employee('Mohammad', 2, 'mzcoder7@gmail.com');
// expect email to equal a string
    expect(employee.getEmailAddress()).toEqual(expect.stringContaining(employee.emailAddress.toString()));
});

// employee job testing
test('get current job of employee', () => {
    const employee = new Employee('Mohammad', 2, 'mzcoder7@gmail.com');
// expect job to equal "Employee"
    expect(employee.getOccupation()).toEqual("Employee");
}); 