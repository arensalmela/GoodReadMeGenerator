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
  ## Github Username
  ${data.username}

  ## Project Description

  ${data.description}
        
  ${licenseOption(data.license)}




`;
}

module.exports = generateMarkdown;
