// function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  
  ## Project Description

  ${data.description}

  ## Table of Contents

  ## Installation Instructions

  ${data.dependent} is requred.

  ## Usage Information

  ${data.usage}

  ## Contribution Guidelines

  ${data.contribution}

        
  [![License: ${data.license}](https://img.shields.io/badge/License-${data.license}-yellow.svg)](https://opensource.org/licenses/${data.license})



  # Questions? Please reach out.

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
