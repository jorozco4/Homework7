function generateMarkdown(data) {
  return `

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
        
## Description
The Purpose of this app is to allow users to utilized the terminal into making a user friendly README file.
${data.Description}

## ScreenShots

![image](https://user-images.githubusercontent.com/61666288/114800920-a5dfcf80-9d68-11eb-9601-7850f03036b4.png)

## Video Walk Through

https://drive.google.com/file/d/1eVNVDEEC9coaD0lnPQwzom4FhSz_F4iq/view

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
https://github.com/jorozco4/README.MD-GENERATOR

Email: ${data.userEmail}
    
     `;
}

// Outputs the generateMarkdown function
module.exports = generateMarkdown;
