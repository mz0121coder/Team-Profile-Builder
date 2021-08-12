// import Employee.js parent constructor 
const Employee = require('./Employee');

// extend Employee.js constructor
class Intern extends Employee  {
    constructor (preferredName, idNumber, emailAddress, schoolName) {
        // call employee constructor
        super (preferredName, idNumber, emailAddress); 
        this.schoolName = schoolName; 
    }