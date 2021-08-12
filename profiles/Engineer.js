// import Employee parent const
const Employee = require("./Employee");

// Extend employee const
class Engineer extends Employee {
    constructor (preferredName, idNumber, emailAddress, gitHubName) {
        // Call employee const
        super (preferredName, idNumber, emailAddress);
        this.gitHubName = gitHubName; 
    }