// array of questions for user

const fs = require("fs");
const util = require('util');
const inquirer = require("inquirer");
const writeFileAsync = util.promisify(fs.writeFile);
 function takeInput() {
	return inquirer.prompt([
		{
			type: 'input',
			message: 'What is your FullName username?',
			name: 'fullName'
		},
		{
			type: 'input',
			message: 'You have an email?',
			name: 'Email'
		},
		{
			type: 'input',
			message: 'What is this Project Title?',
			name: 'titleOfProject'
		},
		{
			type: 'input',
			message: 'Tell me about this project:',
			name: 'deScribe'
		},
		{
			type: 'input',
			message: 'what installation or dependancies are required: ? ',
			name: 'reqInstalls'
		},
		{
			type: 'input',
			message: 'Please enter usage details for this project:',
			name: 'usage'
		},
		{
			type: 'input',
			message: 'Please enter applicable licenses for your project:',
			name: 'license'
        },
        {
            type: 'input',
            message: 'Give Credits',
            name: 'credits',
        },
        {
            type: 'input',
            message: 'Testing ',
            name: 'test',
        },
		{
			type: 'input',
			message: 'questions',
			name: ' questions: '
        }
        
	]);
}

// function to write README file

inqPromise = takeInput();{

    }
    inqPromise .then(function(questions) {
	let html = `
		##Title = ${answers.titleOfProject}
        ## Description = ${answers.deScribe}
      
  ## Table of Contents 
  ## Installation Requirements = ${answers.reqInstall}
  ## Usage = ${answers.usage}
  ## License = ${answers.license}
  ## Credits = ${answers.credits}
  ## Tests = ${answers.test}
  ## Questions ${answers.questions}
  
  `;
//   let writePromise = writeFileAsync('README2.md', markdown, 'utf8');
  writePromise
 .then(function() {
          console.log('Success!');
      })
      .catch(function(err) {
          console.log('Problem ');
      })
    })


