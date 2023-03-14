// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown');
const fs = require('fs');
const {error} = require('console');

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        message: 'What would you like to title your project?',
        name: 'title'
    },
    {
        type: 'editor',
        message: 'Please provide a description of your application.',
        name: 'description'
    },
    {
        type: 'editor',
        message: 'Please provide instructions on how to install your application',
        name: 'installation'
    },
    {
        type: 'editor',
        message: 'Please provide an overview of how to use your application.',
        name: 'usage'
    },
    {
        type: 'list',
        message: 'Please select the appropriate license type.',
        choices: ['Apache License 2.0', 'GNU General Public License v3.0', 'MIT License', "BSD2-Clause 'simplified' License", "BSD 3-Clause 'New' or 'Revised' License", 'Boost Software License 1.0', 'Creative Commons Zero v1.0 Universal', 'Eclipse Public License 2.0', 'GNU Affero General Public License v3.0', 'GNU General Public License v2.0', 'GNU Lesser General Public License v2.1', 'Mozilla Public License 2.0', 'The Unlicense'],
        name: 'license'
    },
    {
        type: 'editor',
        message: 'Please provide guidelines on how users can contribute to the project.',
        name: 'contributing'
    },
    {
        type: 'editor',
        message: 'Provide a description of any testing that has been performed prior to deployment of this application.',
        name: 'tests'
    },
    {
        type: 'input',
        message: 'What is your GitHub username?',
        name: 'ghUsername'
    },
    {
        type: 'input',
        message: 'What is your email address?',
        name: 'email'
    }
];

// // TODO: Create a function to write README file
// fs.writeToFile('readme.md', dataToWrite, function (error) {
//     if (error) {
//         console.log(error);
//     } else {
//         console.log('Readme Generated!');
//     }
// });

// // TODO: Create a function to initialize app
// // function init() {
// // }

// // Function call to initialize app
// // init();

inquirer.prompt(questions)
    .then((answers) => {
        console.log(answers);
        renderLicenseBadge,
        renderLicenseLink,
        renderLicenseSection,
        generateMarkdown();

        return answers
    })
    .catch((err) =>{
        console.error(error);
    });