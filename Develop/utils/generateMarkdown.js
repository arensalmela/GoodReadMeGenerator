// function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

## License

[![License: ${data.license}](https://img.shields.io/badge/License-${data.license}-yellow.svg)](https://opensource.org/licenses/${data.license})


  
## Project Description

${data.description}

## Table of Contents
- [Installation Instructions](#installation-instructions)
- [Usage Information](#usage-information)
- [Constribtion Guidelines](#contribution-guidelines)
- [Application Test](#application-test)
- [Questions](#questions)

## Installation Instructions

${data.dependent} is requred.

## Usage Information

${data.usage}

## Contribution Guidelines

${data.contribution}

## Application Test

${data.test}

# Questions

## Github Username
https://github.com/${data.username}

## Email Address
${data.email}

`;
}

module.exports = generateMarkdown;

//${licenseOption(data.license)}

function licenseOption(license) {
  if (license !== "None") {
    return `## Licenses
      This project is licensed under ${license}`;
  }
  return "";
}
