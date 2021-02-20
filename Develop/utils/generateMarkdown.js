// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  switch (license) {
    // MIT
    case "MIT":
      return "[![license: MIT](https://img.shields.io/badge/License-MIT-blue.svg)]";
    // Mozilla
    case "Mozilla Public License 2.0":
      return "[![License: MPL 2.0](https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg)]";
    // ISC
    case "ISC":
      return "[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)";
    default: "";
      break;

  }

}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  switch (license) {
    // MIT
    case "MIT":
      return "This application is covered by MIT and the license is provided by MIT, found out more about the license here: (https://opensource.org/licenses/MIT)";
    // Mozilla
    case "Mozilla Public License 2.0":
      return "This application is covered by Mozilla Public License 2.0 and the license is provided by Mozilla, found out more about the license here: (https://opensource.org/licenses/MPL-2.0)";
    // ISC
    case "ISC":
      return "This application is covered by ISC and the license is provided by ISC, found out more about the license here :(https://opensource.org/licenses/ISC)";
    default: "";
      break;
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) { 

}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

## Table of Contents

* [Overview](#Overview)
* [Installation](#Installation)
* [Features](#Features)
* [Improvements](#Improvements)
* [License](#license)


`;
}

module.exports = generateMarkdown;
