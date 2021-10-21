// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
const renderLicenseBadge = (license, user, repo) => {
  if (license === 'MIT') {
    return `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`;
  } 
  else if (license === 'GNU') {
    return `[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)`;
  }
  else if (license === 'Apache') {
    return `[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)`
  } 
  else if (license === 'ISC') {
    return `[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC))`
  } else {
    return '';
  }
  
}
  

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license === 'MIT') {
    return `[MIT Info](https://choosealicense.com/licenses/mit/)`;
  } 
  else if (license === 'GNU') {
    return `[GNU Info](https://choosealicense.com/licenses/gpl-3.0/)`;
  }
  else if (license === 'Apache') {
    return `[Apache Info](https://www.apache.org/licenses/)`
  } else {
    return `[ISC](https://choosealicense.com/licenses/isc/)`
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
const renderLicenseSection = (license) =>
  license ? `### License
   ${new Date().getFullYear()} - ${license}` : '' 


// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  ------
  
  [![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)${renderLicenseBadge(data.selectLicense, data.gitUser, data.repoName)}

  ## Table of Contents
  ------

  * [Description](#description)
  * [Installation](#installation)
  * [Usage](#usage)
  * [Licenses](#licenses)
  * [Contributing](#contributing)
  * [Tests](#tests)
  * [Questions](#questions)
  * [Credits](#credits)

  ## Description
  ------
  ${data.why} by ${data.what}
  **Written w/**
  ${data.tech}

  ## Installation
  ------
  ${data.instructions}

  ## Usage
  ------
  ${data.usage}

  ## Contributing
  ------
  ${data.contribute}

  ## Tests
  ------
  ${data.tests}
  
  ## Questions
  ------
  [visit my github](https://www.github.com/${data.gitUser}) 
  Reach out w/ Additional Questions. 
  ${data.email}
  

  
  ${renderLicenseSection(data.selectLicense)}
  ${renderLicenseLink(data.selectLicense)}



`;
}

module.exports = generateMarkdown;
