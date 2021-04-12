const inquirer = require("inquirer");
const fs = require("fs");

function checkInput(value) {
  if (value != "") {
    return true;
  } else {
    return "Enter a value to continue";
  }
}

inquirer.prompt([
  {
    type: "input",
    message: "What is the title of your project",
    name: "title",
    //Validates that a user in actually inputting data
    validate: checkInput,
  },
  {
    type: "input",
    message: "Explain the description of your project ?",
    name: "description",
    validate: checkInput,
  },
  {
    type: "input",
    message: "Enter a description on how to install software programs. :",
    name: "description",
    validate: checkInput,
  },
  {
    type: "input",
    message: "Choose a license for this project",
    name: "license",
    choices: ["API", "BSD", "MIT", "GPL", "ISC"],
    validate: checkInput,
  },

  {
    type: "input",
    message: "Enter your GitHub username",
    name: "Github",
    validate: checkInput,
  },
  {
    type: "input",
    message: "Enter your email address",
    name: "Github",
    validate: checkInput,
  },
]);
then((response) => {
  const filename = response.name.toLowerCase().split("").join("");

  fs.writeFile(filename, JSON.stringify(response, null, "\t"), (err) =>
    err ? console.log(err) : console.log("Success")
  );
});
