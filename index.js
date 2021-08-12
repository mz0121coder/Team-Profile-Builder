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