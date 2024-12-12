// Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const path = require('path');
const generateMarkdown = require('./utils/generateMarkdown');

// Array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'Enter your project title:',
        validate: (input) => input ? true : 'Project title cannot be empty.',
    },
    {
        type: 'input',
        name: 'description',
        message: 'Enter your project description:',
        validate: (input) => input ? true : 'Description cannot be empty.',
    },
    {
        type: 'input',
        name: 'installation',
        message: 'Enter installation instructions:',
        default: 'npm install',
    },
    {
        type: 'input',
        name: 'usage',
        message: 'Enter usage information:',
        default: 'Provide usage details here.',
    },
    {
        type: 'input',
        name: 'contributing',
        message: 'Enter contribution guidelines:',
        default: 'Provide contribution guidelines here.',
    },
    {
        type: 'input',
        name: 'tests',
        message: 'Enter test instructions:',
        default: 'Provide test instructions here.',
    },
    {
        type: 'list',
        name: 'license',
        message: 'Choose a license for your project:',
        choices: ['MIT', 'Apache 2.0', 'GPL v3', 'BSD 3-Clause', 'None'],
    },
    {
        type: 'input',
        name: 'github',
        message: 'Enter your GitHub username:',
        validate: (input) => input ? true : 'GitHub username cannot be empty.',
    },
    {
        type: 'input',
        name: 'email',
        message: 'Enter your email address:',
        validate: (input) => {
            // Simple email validation regex
            const pass = /\S+@\S+\.\S+/.test(input);
            if (pass) {
                return true;
            }
            return 'Please enter a valid email address.';
        },
    },
];

// Function to write README file
function writeToFile(fileName, data) {
    return fs.writeFileSync(path.join(process.cwd(), fileName), data);
}

// Function to initialize app
function init() {
    inquirer.prompt(questions)
    .then((answers) => {
        const markdownContent = generateMarkdown(answers);
        writeToFile('README.md', markdownContent);
        console.log('✅ Successfully generated README.md');
    })
    .catch((error) => {
        console.error('❌ Error generating README:', error);
    });
}

// Function call to initialize app
init();
