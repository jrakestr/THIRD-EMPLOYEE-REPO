// Function to return a license badge based on the selected license
function renderLicenseBadge(license) {
    if (license === 'MIT') {
        return '![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)';
    } else if (license === 'Apache 2.0') {
        return '![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)';
    } else if (license === 'GPL v3') {
        return '![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)';
    } else if (license === 'BSD 3-Clause') {
        return '![License](https://img.shields.io/badge/License-BSD%203--Clause-blue.svg)';
    } else {
        return '';
    }
}

// Function to return the license link
function renderLicenseLink(license) {
    if (license === 'MIT') {
        return 'https://opensource.org/licenses/MIT';
    } else if (license === 'Apache 2.0') {
        return 'https://opensource.org/licenses/Apache-2.0';
    } else if (license === 'GPL v3') {
        return 'https://www.gnu.org/licenses/gpl-3.0';
    } else if (license === 'BSD 3-Clause') {
        return 'https://opensource.org/licenses/BSD-3-Clause';
    } else {
        return '';
    }
}

// Function to return the license section of README
function renderLicenseSection(license) {
    if (license === 'None') {
        return '';
    } else {
        return `## License

This project is licensed under the [${license}](${renderLicenseLink(license)}) license.
`;
    }
}

// Function to generate markdown for README
function generateMarkdown(data) {
    return `# ${data.title}
${renderLicenseBadge(data.license)}

## Description

${data.description}

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing)
- [Tests](#tests)
- [License](#license)
- [Questions](#questions)

## Installation

${data.installation}

## Usage

${data.usage}

## Contributing

${data.contributing}

## Tests

${data.tests}

${renderLicenseSection(data.license)}

## Questions

If you have any questions, please feel free to contact me:

- GitHub: [${data.github}](https://github.com/${data.github})
- Email: ${data.email}
`;
}

module.exports = generateMarkdown;
