function licenseOption(license) {
  if (license !== "None") {
    return `## Licenses
      This project is licensed under ${license}`;
  }
  return "";
}

// function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  
  ## Project Description

  ${data.description}

  ## Installation Instructions

  ${data.dependent} is requred.

  ## Usage Information

  ${data.usage}

  ## Contribution Guidelines

  ${data.contribution}

        
  ${licenseOption(data.license)}



  # Questions? Please reach out.

  ## Github Username
  https://github.com/${data.username}

  ## Email Address
  ${data.email}

`;
}

module.exports = generateMarkdown;
