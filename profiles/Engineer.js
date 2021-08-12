// import Employee parent const
const Employee = require("./Employee");

// Extend employee const
class Engineer extends Employee {
    constructor (preferredName, idNumber, emailAddress, gitHubName) {
        // Call employee const
        super (preferredName, idNumber, emailAddress);
        this.gitHubName = gitHubName; 
    }
        // Get github name
        getGitHubName() {
            return this.gitHubName;
        }
    
         // occupation = "Engineer"
        getOccupation() {
            return "Engineer";
        }
    }   
    // Export Engineer.js
    module.exports = Engineer; 