function licenseOption(license) {
  if (license !== "None") {
    return `## Licenses
      This project licensed under ${license}`;
  }
  return "";
}

// function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
          ## Description
          ${data.description}
          ${licenseOption(data.license)}




`;
}

module.exports = generateMarkdown;
