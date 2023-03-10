// TODO: Create a function that returns a license badge based on which license is passed in. If there is no license, return an empty string

function renderLicenseBadge(license) {
  switch (license) {
    case 'Apache License 2.0':
      return `https://img.shields.io/badge/License-Apache%202.0-blue.svg`;
    case 'GNU General Public License v3.0':
      return `https://img.shields.io/badge/License-GPLv3-blue.svg`;
    case 'MIT License':
      return `https://img.shields.io/badge/License-MIT-yellow.svg`;
    case "BSD2-Clause 'simplified' License":
      return `https://img.shields.io/badge/License-BSD%202--Clause-orange.svg`;
    case "BSD 3-Clause 'New' or 'Revised' License":
      return `https://img.shields.io/badge/License-BSD%203--Clause-blue.svg`;
    case 'Boost Software License 1.0':
      return `https://img.shields.io/badge/License-Boost%201.0-lightblue.svg`;
    case 'Creative Commons Zero v1.0 Universal':
      return `https://img.shields.io/badge/License-CC0%201.0-green.svg`;
    case 'Eclipse Public License 2.0':
      return `https://img.shields.io/badge/License-EPL%202.0-red.svg`;
    case 'GNU Affero General Public License v3.0':
      return `https://img.shields.io/badge/License-AGPL%20v3-blue.svg`;
    case 'GNU General Public License v2.0':
      return `https://img.shields.io/badge/License-GPL%20v2-blue.svg`;
    case 'GNU Lesser General Public License v2.1':
      return `https://img.shields.io/badge/License-LGPL%20v2.1-blue.svg`;
    case 'Mozilla Public License 2.0':
      return `https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg`;
    case 'The Unlicense':
      return `https://img.shields.io/badge/license-Unlicense-blue.svg`;
    default:
      return '';
  }
}

// function renderLicenseBadge(license) {
//   switch (license) {
//     case 'Apache License 2.0':
//       return `https://img.shields.io/badge/License-Apache%202.0-blue.svg`;
//     case 'GNU General Public License v3.0':
//       return `https://img.shields.io/badge/License-GPLv3-blue.svg`;
//     case 'MIT License':
//       return `https://img.shields.io/badge/License-MIT-yellow.svg`;
//     case "BSD2-Clause 'simplified' License":
//       return `https://img.shields.io/badge/License-BSD%202--Clause-orange.svg`;
//     case "BSD 3-Clause 'New' or 'Revised' License":
//       return `https://img.shields.io/badge/License-BSD%203--Clause-blue.svg`;
//     case 'Boost Software License 1.0':
//       return `https://img.shields.io/badge/License-Boost%201.0-lightblue.svg`;
//     case 'Creative Commons Zero v1.0 Universal':
//       return `https://img.shields.io/badge/License-CC0%201.0-green.svg`;
//     case 'Eclipse Public License 2.0':
//       return `https://img.shields.io/badge/License-EPL%202.0-red.svg`;
//     case 'GNU Affero General Public License v3.0':
//       return `https://img.shields.io/badge/License-AGPL%20v3-blue.svg`;
//     case 'GNU General Public License v2.0':
//       return `https://img.shields.io/badge/License-GPL%20v2-blue.svg`;
//     case 'GNU Lesser General Public License v2.1':
//       return `https://img.shields.io/badge/License-LGPL%20v2.1-blue.svg`;
//     case 'Mozilla Public License 2.0':
//       return `https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg`;
//     case 'The Unlicense':
//       return `https://img.shields.io/badge/license-Unlicense-blue.svg`;
//     default:
//       return '';
//   }
// }

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
// function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
// function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
// function generateMarkdown(data) {
//   return `# ${data.title}

// `;
// }

module.exports = {
renderLicenseBadge,
renderLicenseLink,
renderLicenseSection,
generateMarkdown,
};
