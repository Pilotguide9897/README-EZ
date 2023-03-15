// TODO: Create a function that returns a license badge based on which license is passed in. If there is no license, return an empty string
// function renderLicenseBadge(license) {
//   let myBadge;
// switch (license) {
//   case 'Apache License 2.0':
//     myBadge = `https://img.shields.io/badge/License-Apache%202.0-blue.svg`;
//     break;
//   case 'GNU General Public License v3.0':
//     myBadge = `https://img.shields.io/badge/License-GPLv3-blue.svg`;
//     break;
//   case 'MIT License':
//     myBadge = `https://img.shields.io/badge/License-MIT-yellow.svg`;
//     break;
//   case "BSD2-Clause 'simplified' License":
//     myBadge = `https://img.shields.io/badge/License-BSD%202--Clause-orange.svg`;
//     break;
//   case "BSD 3-Clause 'New' or 'Revised' License":
//     myBadge = `https://img.shields.io/badge/License-BSD%203--Clause-blue.svg`;
//     break;
//   case 'Boost Software License 1.0':
//     myBadge = `https://img.shields.io/badge/License-Boost%201.0-lightblue.svg`;
//     break;
//   case 'Creative Commons Zero v1.0 Universal':
//     myBadge = `https://img.shields.io/badge/License-CC0%201.0-green.svg`;
//     break;
//   case 'Eclipse Public License 2.0':
//     myBadge = `https://img.shields.io/badge/License-EPL%202.0-red.svg`;
//     break;
//   case 'GNU Affero General Public License v3.0':
//     myBadge = `https://img.shields.io/badge/License-AGPL%20v3-blue.svg`;
//     break;
//   case 'GNU General Public License v2.0':
//     myBadge = `https://img.shields.io/badge/License-GPL%20v2-blue.svg`;
//     break;
//   case 'GNU Lesser General Public License v2.1':
//     myBadge = `https://img.shields.io/badge/License-LGPL%20v2.1-blue.svg`;
//     break;
//   case 'Mozilla Public License 2.0':
//     myBadge = `https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg`;
//     break;
//   case 'The Unlicense':
//     myBadge = `https://img.shields.io/badge/license-Unlicense-blue.svg`;
//     break;
//   default:
//     myBadge = '';
//     break;
//   } 
//   return myBadge;
// }

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
// function renderLicenseLink(license) {
//   let licenseLink;
//   switch (license) {
//     case 'Apache License 2.0':
//       licenseLink = `https://img.shields.io/badge/License-Apache%202.0-blue.svg`;
//       break;
//     case 'GNU General Public License v3.0':
//       licenseLink = `https://img.shields.io/badge/License-GPLv3-blue.svg`;
//       break;
//     case 'MIT License':
//       licenseLink = `https://img.shields.io/badge/License-MIT-yellow.svg`;
//       break;
//     case "BSD2-Clause 'simplified' License":
//       licenseLink = `https://img.shields.io/badge/License-BSD%202--Clause-orange.svg`;
//       break;
//     case "BSD 3-Clause 'New' or 'Revised' License":
//       licenseLink = `https://img.shields.io/badge/License-BSD%203--Clause-blue.svg`;
//       break;
//     case 'Boost Software License 1.0':
//       licenseLink = `https://img.shields.io/badge/License-Boost%201.0-lightblue.svg`;
//       break;
//     case 'Creative Commons Zero v1.0 Universal':
//       licenseLink = `https://img.shields.io/badge/License-CC0%201.0-green.svg`;
//       break;
//     case 'Eclipse Public License 2.0':
//       licenseLink = `https://img.shields.io/badge/License-EPL%202.0-red.svg`;
//       break;
//     case 'GNU Affero General Public License v3.0':
//       licenseLink = `https://img.shields.io/badge/License-AGPL%20v3-blue.svg`;
//       break;
//     case 'GNU General Public License v2.0':
//       licenseLink = `https://img.shields.io/badge/License-GPL%20v2-blue.svg`;
//       break;
//     case 'GNU Lesser General Public License v2.1':
//       licenseLink = `https://img.shields.io/badge/License-LGPL%20v2.1-blue.svg`;
//       break;
//     case 'Mozilla Public License 2.0':
//       licenseLink = `https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg`;
//       break;
//     case 'The Unlicense':
//       licenseLink = `https://img.shields.io/badge/license-Unlicense-blue.svg`;
//       break;
//     default:
//       licenseLink = '';
//   }
//   return licenseLink;
// }

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
//  function renderLicenseSection(answers) {
//   if (answers.license) {
//     const licenseSection = 10 `##License\nThis project is licensed under the [${answers.license}](${myBadge}). See the [license](${licenseLink}) documentation for more information.`;
//     return licenseSection;
//   } else {
//     return "";
//   }
// }

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
  // renderLicenseBadge,
  // renderLicenseLink,
  // renderLicenseSection,
   generateMarkdown
};
