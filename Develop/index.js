// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const {renderLicenseSection, generateMarkdown, renderLicense} = require('./utils/generateMarkdown');
const fs = require('fs');
const {error} = require('console');
const {exec} = require('child_process');
const { stdout, stderr } = require('process');

// // TODO: Create a function to initialize app
function init() {
    return new Promise ((resolve, reject) => {
        // Checking to see if dependencies are already installed.
        if(!fs.existsSync('./node_modules')){
            console.log('npm dependencies not found. Installing...');

            // A child process to install the dependencies if they are not already installed
            const child = exec('npm install');

            //Waiting for the child process to install the dependencies before returning to execute the remainder of the code
            child.on('exit', (code) => {
                if (code !== 0) {
                  console.error(`npm install failed with code ${code}`);
                  reject();
                } else {
                  console.log('npm dependencies installed');
                  resolve();
                }
              });
            } else {
              // Dependencies already installed
              resolve();
            }
          });
        }

// Function call to initialize app
init()
    .then (() =>{

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
        choices: ['Apache License 2.0', 'GNU General Public License v3.0', 'MIT License', "BSD2-Clause 'simplified' License", "BSD 3-Clause 'New' or 'Revised' License", 'Boost Software License 1.0', 'Creative Commons Zero v1.0 Universal', 'Eclipse Public License 2.0', 'GNU Affero General Public License v3.0', 'GNU General Public License v2.0', 'GNU Lesser General Public License v2.1', 'Mozilla Public License 2.0', 'The Unlicense', 'I do not want a license'],
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

// Creates a function to write README file
function writeDataToFile (dataToWrite) {
    fs.writeFile('README.md', dataToWrite, function (error) {
        if (error) {
            console.log('the error was here');
        } else {
            console.log('Readme Generated!');
        }
    });
}

inquirer.prompt(questions)
    .then((answers) => {
        console.log('Answers:', answers);
        let licenseData = renderLicense(answers);
        console.log(`licenseData:`, licenseData);
        const markdown = generateMarkdown(answers, licenseData);
        console.log(markdown);
        let licenseSectionValue = renderLicenseSection(answers, licenseData);
        console.log('licenseSectionValue:', licenseSectionValue);
        console.log('success');
        let dataComplete = markdown + `\n` + licenseSectionValue;
        writeDataToFile(dataComplete);
    })
    .catch((err) => {
        console.log('this did not work'); 
        console.error(error);
    });
});