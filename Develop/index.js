// TODO: Include packages needed for this application
const inquirer = requre('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown.js');

// TODO: Create an array of questions for user input
const questions = [
    "What is your GitHub username?",
    "What is your email address?",
    "What is the title of your project?",
    "Enter a short description of your project",
    "How do users install your project?",
    "How do users use your project?",
    "How can people contribute to this project?",
    "How can you test your project?",
    "Please select the correct license for your project",
    "What's the link to your GitHub profile?"
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) { }

// TODO: Create a function to initialize app
function init() { }

// Function call to initialize app
init();
