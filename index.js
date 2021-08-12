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
        