// link to create HTML page
const createHTML = require('./src/createHtml');

// Manager/Engineer/Intern profiles required 
const Manager = require('./profiles/Manager');
const Engineer = require('./profiles/Engineer');
const Intern = require('./profiles/Intern'); 

// Dependencies (fs, inquirer)
const fs = require('fs'); 
const inquirer = require('inquirer');

// team profiles array
const teamProfiles = []; 

// start of manager questions 
const createManager = () => {
    return inquirer.prompt ([
        {
            type: 'input',
            name: 'preferredName',
            message: "What is the preferred name of this  team's manager?", 
            validate: nameValue => {
                if (nameValue) {
                    return true;
                } else {
                    console.log ("Please enter the name of the team's manager");
                    return false; 
                }
            }
        },
        {
            type: 'input',
            name: 'idNumber',
            message: "Please enter ID number of the manager.",
            validate: nameValue => {
                if  (isNaN(nameValue)) {
                    console.log ("Please enter the manager's ID number")
                    return false; 
                } else {
                    return true;
                }
            }
        },
        {
            type: 'input',
            name: 'emailAddress',
            message: "Please enter the email address of the team's manager",
            validate: emailAddress => {
                valid = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(emailAddress)
                if (valid) {
                    return true;
                } else {
                    console.log ('Please enter a valid email address')
                    return false; 
                }
            }
        },
        {
            type: 'input',
            name: 'officeNumber',
            message: "Please enter team manager's office number",
            validate: nameValue => {
                if  (isNaN(nameValue)) {
                    console.log ('Please enter a valid office number')
                    return false; 
                } else {
                    return true;
                }
            }
        }
    ])
    .then(managerInput => {
        const  { preferredName, idNumber, emailAddress, officeNumber } = managerInput; 
        const manager = new Manager (preferredName, idNumber, emailAddress, officeNumber);
// push inputs for manager profile
teamProfiles.push(manager); 
console.log(manager); 
})
};
// create employee
const createEmployee = () => {
    console.log(`
    ADDING EMPLOYEES 
    `);
    // start of employee questions
    return inquirer.prompt ([
        {
            type: 'list',
            name: 'occupation',
            message: "Please choose occupation of the employee",
            choices: ['Engineer', 'Intern']
        },
        {
            type: 'input',
            name: 'preferredName',
            message: "What is the preferred name of the employee?", 
            validate: nameValue => {
                if (nameValue) {
                    return true;
                } else {
                    console.log ("Please enter a valid name");
                    return false; 
                }
            }
        },
        {
            type: 'input',
            name: 'idNumber',
            message: "What is the employee's ID number?",
            validate: nameValue => {
                if  (isNaN(nameValue)) {
                    console.log ("Please enter a valid ID")
                    return false; 
                } else {
                    return true;
                }
            }
        },
        {
            type: 'input',
            name: 'emailAddress',
            message: "What is the employee's email address?",
            validate: emailAddress => {
                valid = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(emailAddress)
                if (valid) {
                    return true;
                } else {
                    console.log ('Please enter a valid email address')
                    return false; 
                }
            }
        },
        {
            type: 'input',
            name: 'gitHubName',
            message: "What is the employee's GitHub username?",
            when: (input) => input.occupation === "Engineer",
            validate: nameValue => {
                if (nameValue) {
                    return true;
                } else {
                    console.log ("Please enter a valid GitHub username")
                }
            }
        },
        {
            type: 'input',
            name: 'schoolName',
            message: "What is the employee's school name?",
            when: (input) => input.occupation === "Intern",
            validate: nameValue => {
                if (nameValue) {
                    return true;
                } else {
                    console.log ("Please enter a valid school name")
                }
            }
        },
        {
            type: 'confirm',
            name: 'confirmCreateEmployee',
            message: 'Would you like to add more members to the team profile?',
            default: false
        }
    ])
    .then(employeeInfo => {
        
        let { preferredName, idNumber, emailAddress, occupation, gitHubName, schoolName, confirmCreateEmployee } = employeeInfo; 
        let employee; 

        if (occupation === "Engineer") {
            employee = new Engineer (preferredName, idNumber, emailAddress, gitHubName);

            console.log(employee);

        } else if (occupation === "Intern") {
            employee = new Intern (preferredName, idNumber, emailAddress, schoolName);

            console.log(employee);
        }