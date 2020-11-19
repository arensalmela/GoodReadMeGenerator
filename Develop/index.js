const inquirer = require("inquirer");
const fs = require("fs");
const path = require("path");
const generateMarkdown = require("./utils/generateMarkdown.js");
// array of questions for user
const questions = [
  {
    type: "input",
    message: "What is your Github user name?",
    name: "username",
  },

  {
    type: "input",
    message: "What is an email address people can reach out at?",
    name: "email",
  },

  {
    type: "input",
    message: "What is the title of your project?",
    name: "title",
  },

  {
    type: "input",
    message: "What is the description of your project?",
    name: "description",
  },

  {
    type: "input",
    message: "What is the utility of your application?",
    name: "usage",
  },

  {
    type: "input",
    message: "Please specify any contribution guidelines your application has.",
    name: "contribution",
  },

  {
    type: "input",
    message: "What command should I run to install dependencies?",
    name: "dependent",
    default: "npm i",
  },
  {
    type: "list",
    message: "What kind of license does this application need?",
    name: "license",
    choices: ["ISC", "Artistic", "MIT"],
  },
];

// function to write README file
function writeToFile(fileName, data) {
  return fs.writeFileSync(path.join(process.cwd(), fileName), data);
}

// function to initialize program
function init() {
  inquirer.prompt(questions).then((response) => {
    writeToFile("README.md", generateMarkdown({ ...response }));
  });
}

// function call to initialize program
init();
