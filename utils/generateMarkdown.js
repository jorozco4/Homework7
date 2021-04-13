function generateMarkdown(data) {
  return `
      
    ## Description
    ${data.Description}
  
      ##Table of Contents
      *[Installation](#installation)
      *[Usage](#usage)
      *[License](#license)
      *[Contribution](#contribution)
      *[Test](#tests)
      *[Questions](#questions)
      
      ## Title
      In order for the title to run use,
      ${data.Title}
  
      ## Usuage
      To use this app,
      ${data.Usage}
  
      ## License
      The following app is licensed under,
      ${data.license}
  
      ## Contribution 
      Contribution,
      ${data.Contributing}
  
      ## Test
  
      In order to run this test the following is needed,
      ${data.Tests}
  
      ## Contact Info 
      GitHub Username: ${data.userName}
      Email: ${data.userEmail}
  
   `;
}

// Outputs the generateMarkdown function
module.exports = generateMarkdown;
