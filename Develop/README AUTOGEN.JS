function generateMarkdown(answers) {
	return `# ${answers.projectTitle}
 
  ## Description
  ${answers.description}
  ## Table of Contents
  - [Installation](#Installation)
  - [Usage](Usage)
  - [License](#License)
  - [Contributing](#Contributing)
  - [Tests](#Tests)
  - [Questions](#Questions)
  
  ## Installation Requirements
  The following dependiencies are required for project ${answers.projectTitle}: 
  
  ## Usage

  ## License
 
  ## Credits

  ## Tests

  ## Questions

 
  `;
}
module.exports = generateMarkdown;