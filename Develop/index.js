// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown.js');

// TODO: Create an array of questions for user input
const questions = [
    "What is your GitHub username?",
    "What's the link to your GitHub profile?",
    "What is your email address?",
    "Please select the correct license for your project",
    "What is the title of your project?",
    "Enter a short description of your project",
    "How do users install your project?",
    "How do users use your project?",
    "How can people contribute to this project?",
    "How can you test your project?",
    ];

// TODO: Create a function to write README file
function writeToFile(fileName, data) { }

// TODO: Create a function to initialize app
function init() { 
    inquirer
    .prompt([
        {
            type: 'input',
            message: questions[0],
            name: 'githubUser',
        },
        {
            type: 'input',
            message: questions[1],
            name: 'githubLink',
        },
        {
            type: 'input',
            message: questions[2],
            name: 'email',
        },
        {
            type: 'list',
            message: questions[3],
            name: 'license',
            choices: ['MIT', 'Mozilla Public 2.0', 'ISC'],
        }
        {
            type: 'input',
            message: questions[4],
            name: 'title',
        },
        {
            type: 'input',
            message: questions[5],
            name: 'description',
        },
        {
            type: 'input',
            message: questions[6],
            name: 'installation',
        },
        {
            type: 'input',
            message: questions[7],
            name: 'usage',
        },
        {
            type: 'input',
            message: questions[8],
            name: 'contributors',
        },
        {
            type: 'input',
            message: questions[9],
            name: 'testing',
        },
    ])}

// Function call to initialize app
init();
