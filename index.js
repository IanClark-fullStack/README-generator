// GIVEN a command-line application that accepts user input

// WHEN I am prompted for information about my application repository
// THEN a high-quality, professional README.md is generated with the title of my project and sections entitled Description, Table of Contents, Installation, Usage, License, Contributing, Tests, and Questions

// WHEN I enter my project title
// THEN this is displayed as the title of the README

// WHEN I enter a description, installation instructions, usage information, contribution guidelines, and test instructions
// THEN this information is added to the sections of the README entitled Description, Installation, Usage, Contributing, and Tests

// WHEN I choose a license for my application from a list of options
// THEN a badge for that license is added near the top of the README and a notice is added to the section of the README entitled License that explains which license the application is covered under

// WHEN I enter my GitHub username
// THEN this is added to the section of the README entitled Questions, with a link to my GitHub profile

// WHEN I enter my email address
// THEN this is added to the section of the README entitled Questions, with instructions on how to reach me with additional questions

// WHEN I click on the links in the Table of Contents
// THEN I am taken to the corresponding section of the README
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown.js');
const CheckboxPrompt = require('inquirer/lib/prompts/checkbox');

// Array of language choices used
const techChoice = [' HTML', ' CSS', ' Bootstrap', ' Tailwindcss', ' jQuery', ' JavaScript', ' API']; 
// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title', 
        message: 'Any decent ReadMe has a title. To get started, enter your project title',
        // validate: userTitle => userTitle ? true : false 
    }, 
    {
        type: 'input',
        name: 'gitUser', 
        message: 'Enter your github username. It will help automate the correct links later'
    },
    {
        type: 'input',
        name: 'repoName', 
        message: 'Name of your repo',
    },
    {
        type: 'input', 
        name: 'why',
        message: 'Before including the specifics about what your project does or how it is achieved, you should briefly describe WHY it was made',
    },
    {
        type: 'input', 
        name: 'what',
        message: 'Complete the sentence: This project will:',
    },
    
    {
        type: 'input', 
        name: 'tech',
        message: 'Enter technologies used in this project (seperated by commas)',
    },
    {
        type: 'input', 
        name: 'instructions',
        message: 'Please provide the user with instructions for installation',
    },
    {
        type: 'input', 
        name: 'usage',
        message: 'Briefly, tell your user how this app is intended to be used'
    },
    {
        type: 'input', 
        name: 'tests',
        message: 'What tests have you run before deployment?',
    },
    {
        type: 'input', 
        name: 'contribute',
        message: 'Give users a way to contribute'
    },
    {
        type: 'confirm',
        name: 'licenseOption',
        message: 'Would you like to add a license to the repo?',
        default: false,
    },
    {
        type: 'list',
        name: 'selectLicense',
        choices: ['MIT', 'GNU', 'Apache', 'ISC'],
        when: ({ licenseOption }) => licenseOption ? true : false
    },
    {
        type: 'input',
        name: 'email', 
        message: 'Attach your email address',
    }





    
    // {
        //     type: 'checkbox', 
        //     choices: techChoice,
        //     name: 'tech',
        //     message: 'What technologies did you use in this project?',
        // },
    // {
    //     type: 'confirm', 
    //     name:  'moreTech', 
    //     message: 'Are there any other technologies to add?',
    //     default: false,
    // },
    
    // {
    //     type: 'input',
    //     name: 'addTech',
    //     message: 'please add additional languages',
    //     when: ({ moreTech }) => {
    //         if (moreTech) {
    //             return true;
    //         } else {
    //             return false;
    //         }
    //     }
    // },

    

    // Screenshots? 

    

];

// TODO: Create a function to write README file
function writeToFile (data) {
    // Functionality happens here, not Async calls 
    
    
    const fileTitle = 'README.md';
    // Create the file
    // fs.writeFile(fileTitle, JSON.stringify(data), (err) => 
    //     err ? console.log(err) : console.log('Created File')
    // )
    
    // Send the relevant data to generate markdown. 
    const answerData = generateMarkdown(data)
    fs.writeFile(fileTitle, answerData, (err) =>
        err ? console.error(err) : console.log('Commit logged!')
    )


    console.log(data);
    
    // const fileName = `${questions.title.toLowerCase().split(' ').join('')}.md`;
    // Write the content to the file 
    // fs.writeFile(fileName, JSON.stringify(data), (err) => 
    //     err ? console.log(err) : console.log('Created File')
    // );

};


// TODO: Create a function to initialize app
const init = () => { 
    // Pass in the array of questions
    inquirer.prompt(questions)
    // Async call for the data recieved from the prompt
    .then((data) => {
    
        // Send the data back to Write File function
        writeToFile(data);
       
    })
    
    // .then((data) => {
    //     generateMarkdown(data); 
        
    // })
}

// Function call to initialize app
init()
// then, send data to generate the markdown (with a parameter formerly known as data)

// .then(suppliedInput => generateMarkdown(suppliedInput))

// .catch(err => console.log(err))

