// import Employee.js parent constructor 
const Employee = require('./Employee');

// extend Employee.js constructor
class Intern extends Employee  {
    constructor (preferredName, idNumber, emailAddress, schoolName) {
        // call employee constructor
        super (preferredName, idNumber, emailAddress); 
        this.schoolName = schoolName; 
    }
    
        // get school name
        getEducationInfo() {
            return this.schoolName;
        }
    
        // occupation = "Intern"
        getOccupation() {
            return "Intern";
        }
    }
    
    // Export Intern.js
    module.exports = Intern; 