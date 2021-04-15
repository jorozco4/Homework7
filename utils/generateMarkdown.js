function generateMarkdown(data) {
  return `

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
        
## Description
The Purpose of this app is to allow users to utilized the terminal into making a user friendly README file.
${data.Description}


## Table of Contents
* [Title](#title)
* [Description](#description)
* [Installation](#installation)
* [Usage](#usage)
* [License](#license)
* [Contribution](#contribution)
* [Test](#tests)
* [Contact](#contact)
        
## Title
README.MD generator
${data.Title}

## Description

This app is a user friendly module that allows personnel to generate a README.MD file.
${data.Description}

## Installation

This app is installed by using "Index.js, generateMarkdown.js, require, fs and utils.

## Usuage
To use this app,
${data.Usage}
    
## License
The following app is licensed under MIT,
${data.License}

## Contribution 
Contribution : Unknown,
${data.Contribution}
    
## Test
In order to run this test the user must open the terminal, call node index.js, and answer the questions.,
${data.Test}
    
## Contact Info 
GitHub Username: ${data.userName}
https://jorozco4.github.io/README.MD-GENERATOR/

Email: ${data.userEmail}
    
     `;
}

// Outputs the generateMarkdown function
module.exports = generateMarkdown;
