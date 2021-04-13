function generateMarkdown(data) {
  return `
        
    ## Description
    The Purpose of this app is to allow users to utilized the terminal into making user friendly README file.
    ${data.Description}

     ## Table of Contents
     *[Installation](#installation)
     *[Usage](#usage)
     *[License](#license)
     *[Contribution](#contribution)
     *[Test](#tests)
     *[Questions](#questions)
        
        ## Title
        In order for the title to run the user must follow the directions.,
        ${data.Title}
    
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
        In order to run this test the the user must input the data when questions are asked.,
        ${data.Tests}
    
        ## Contact Info 
        GitHub Username: ${data.userName}
        Email: ${data.userEmail}
    
     `;
}

// Outputs the generateMarkdown function
module.exports = generateMarkdown;
