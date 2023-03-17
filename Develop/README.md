# ReadmeEz
![](https://img.shields.io/badge/License-MIT-yellow.svg)
## Description
This application uses JavaScript, base  Node.js, and the Node.js inquire library to quickly and easily generate a professional README file for a user's project. The user is prompted to provide input in responds to several questions, and these answers are used to populate sections of the README. The questions that users are asked include the title of the project, a description of the project, instructions on how to install the project, the license type to be used, guidelines on how users can contribute to the project, a description of any bug testing that has been performed on the application, and the user's GitHub username and email address.

## Table of Contents
- [Description](#description)
- [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing) 
- [Tests](#tests) 
- [Questions](#questions)
- [License](#license)
## Installation
To install this application, clone the repository to your local machine. You can do this by running the following command in your terminal: 'git clone <repository-url>'\n The repo url can be achieved by clicking the green code button in the main repo page, clicking the SSH tab, and then copying the URL provided. Once the repo is cloned to the local system, navigate to the directory in the terminal until index.js is located. Index.js is the main file for this application. This application requires that users already have node.js and Node Package Manager (NPM) installed. For more information on installing these technologies please consult their official documentation. Although this application requires users to have the Inquirer node library installed as a dependency, a script is coded into the program to make sure that users already have the module installed before execution. If users do not have the necessary library, the applicaiton automatically installs before execution. Consequently, all users need to do to run this application is (1) make sure that they are in the correct directory, and (2) run 'node index.js' in their terminal of chioice. 

## Usage
This application is a simple command line application that takes in user input and outputs a readme generated based upon the information provided. It can be used to save the hassle of creating a new readme from scratch, automating much of the formatting and arrangement. This allows users to focus primarily on the nature of the content that they will include in each section. When users are done, they are presented with a README.md file that they can continue to edit to suit their more specific needs.In summary, this application should be used to quickly create the framework for a professional README, allowing developers more time to focus on the applications that they are creating, rather than spending unnecessary time documenting.

## Contributing
Users interested in contributing to this project or with ideas for additional functionality may fork the repo and submit their changes to the original repository as a pull request. These pull requests will subsequently be reviewed by the project author. If accepted, the changes will be merged and added to the project's main branch to create the new starting point for future development!

## Tests
The following testing  has been performed for this project: (1) The application has been run following entry of different inputs to ensure the functions work as intended. Specifically, it has been tested whether different inputs for each question are accepted, with entries of different lengths and including various characters. In addition, it has been tested to ensure the application executes successfully even when each input is left empty. (2) The application has been tested to make sure that the urls for each badge are correct and render properly. (3) The application has also  been tested to make sure that it generates a new README.md file containing the necessary output and that if a README already exists that a user is unhappy with, on subsequent executions the application writes over the existing document with the new input. Having recently learned about using jest to test functionality, future revisions to this application may include implementation of such a testing framework to improve the coverage of testing beyond what is reasonable by execuging the application repeatedly.  

## Questions
* If you have any questions concerning this application, do not hesitate to reach me at jaredryan1997@hotmail.com.
* You may also view my GitHub profile at http://github.com/Pilotguide9897.
## License
This project is licensed under the ![MIT License](https://img.shields.io/badge/License-MIT-yellow.svg). See the [license](https://opensource.org/licenses/MIT) documentation for more information.