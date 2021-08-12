// import Employee.js parent constuctor
const Employee = require('./Employee');

// extend Employee.js constuctor
class Manager extends Employee {
    constructor (preferredName, idNumber, emailAddress, officeNumber) {
        // call employee constructor
        super (preferredName, idNumber, emailAddress);        
        this.officeNumber = officeNumber; 
    }
