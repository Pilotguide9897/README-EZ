// TODO1: Create a function that returns a license badge based on which license is passed in. If there is no license, return an empty string. TODO2: Create a function that returns a license URL based on which license is passed in. If there is no license, return an empty string
function renderLicense(answers) {
    let licenseObj = {
        myBadge: '',
        licenseLink: ''
      };
    switch (answers.license) {
      case 'Apache License 2.0':
        licenseObj.myBadge = `https://img.shields.io/badge/License-Apache%202.0-blue.svg`;
        licenseObj.licenseLink = `https://opensource.org/licenses/Apache-2.0`;
        break;
      case 'GNU General Public License v3.0':
        licenseObj.myBadge = `https://img.shields.io/badge/License-GPLv3-blue.svg`;
        licenseObj.licenseLink = `https://www.gnu.org/licenses/gpl-3.0`;
        break;
      case 'MIT License':
        licenseObj.myBadge = `https://img.shields.io/badge/License-MIT-yellow.svg`;
        licenseObj.licenseLink = `https://opensource.org/licenses/MIT`;
        break;
      case "BSD2-Clause 'simplified' License":
        licenseObj.myBadge = `https://img.shields.io/badge/License-BSD%202--Clause-orange.svg`;
        licenseObj.licenseLink = `https://opensource.org/licenses/BSD-2-Clause`;
        break;
      case "BSD 3-Clause 'New' or 'Revised' License":
        licenseObj.myBadge = `https://img.shields.io/badge/License-BSD%203--Clause-blue.svg`;
        licenseObj.licenseLink = `https://opensource.org/licenses/BSD-3-Clause`;
        break;
      case 'Boost Software License 1.0':
        licenseObj.myBadge = `https://img.shields.io/badge/License-Boost%201.0-lightblue.svg`;
        licenseObj.licenseLink = `https://www.boost.org/LICENSE_1_0.txt`;
        break;
      case 'Creative Commons Zero v1.0 Universal':
        licenseObj.myBadge = `https://img.shields.io/badge/License-CC0%201.0-green.svg`;
        licenseObj.licenseLink = `https://creativecommons.org/publicdomain/zero/1.0/`;
        break;
      case 'Eclipse Public License 2.0':
        licenseObj.myBadge = `https://img.shields.io/badge/License-EPL%202.0-red.svg`;
        licenseObj.licenseLink = `https://opensource.org/licenses/EPL-2.0`;
        break;
      case 'GNU Affero General Public License v3.0':
        licenseObj.myBadge = `https://img.shields.io/badge/License-AGPL%20v3-blue.svg`;
        licenseObj.licenseLink = `https://www.gnu.org/licenses/agpl-3.0`;
        break;
      case 'GNU General Public License v2.0':
        licenseObj.myBadge = `https://img.shields.io/badge/License-GPL%20v2-blue.svg`;
        licenseObj.licenseLink = `https://www.gnu.org/licenses/old-licenses/gpl-2.0.en.html`;
        break;
      case 'GNU Lesser General Public License v2.1':
        licenseObj.myBadge = `https://img.shields.io/badge/License-LGPL%20v2.1-blue.svg`;
        licenseObj.licenseLink = `https://www.gnu.org/licenses/lgpl-2.1.html`;
        break;
      case 'Mozilla Public License 2.0':
        licenseObj.myBadge = `https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg`;
        licenseObj.licenseLink = `https://opensource.org/licenses/MPL-2.0`;
        break;
      case 'The Unlicense':
        licenseObj.myBadge = `https://img.shields.io/badge/license-Unlicense-blue.svg`;
        licenseObj.licenseLink = `http://unlicense.org/`;
        break;
      default:
        licenseObj.myBadge = '';
        licenseObj.licenseLink = '';
        break;
    }
    return licenseObj;
}

// TODO: Create a function that returns the license section of README. If there is no license, return an empty string
 function renderLicenseSection(answers, licenseObj) {
  if (answers.license) {
    const licenseSection = `##License\nThis project is licensed under the [${answers.license}](${licenseObj.myBadge}). See the [license](${licenseObj.licenseLink}) documentation for more information.`;
    //`${answers.license}`; //This section should be working now!
    return licenseSection;
  } else {
    return "";
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(answers/*, licenseSection*/) {
  const dataToWrite = `# ${answers.title}\n## Description\n${answers.description}\n## Table of Contents\n[Description](#Description)\n
[Installation](#Installation)\n 
[Usage](#Usage)\n 
[Contributing](#Contributing)\n 
[Tests](#Tests)\n 
[Questions](#Questions)\n## Installation\n${answers.installation}\n## Usage\n${answers.usage}\n## Contributing\n${answers.contributing}\n## Tests\n${answers.tests}\n## Questions\n
* If you have any questions concerning this application, do not hesitate to reach me at ${answers.email}.\n* You may also view my GitHub profile at http://github.com/${answers.ghUsername}.\n`
  return dataToWrite;
}

// TODO: Create a function to generate markdown for README
// function generateMarkdown(data, licenseSection) {
//   const dataToWrite = `#${answers.title};
  
//   `#${answers.title}\n
//   ${myBadge}\n
//   ##Description\n
//       ${answers.description}\n
//   ##Table of Contents\n
//       [Description](##Description)\n
//       [Installation](##Installation)\n
//       [Usage](##Usage)\n
//       [Contributing](##Contributing)\n
//       [Tests](##Tests)\n
//       [Questions](##Questions)\n
//   ##Installation\n
//       ${answers.installation}\n
//   ##Usage\n
//       ${answers.usage}\n
//   ##Contributing\n
//       ${answers.contributing}\n
//   ##Tests\n
//       ${answers.tests}\n
//   ##Questions\n
//     If you have any questions concerning this application, do not hesitate to reach me at ${answers.email}.\n
//     You may also view my GitHub profile at ${answers.ghUsername}\n.
//   ${licenseSection}`;
//   return dataToWrite;
// }

module.exports = {
   renderLicense,
   renderLicenseSection,
   generateMarkdown
};
