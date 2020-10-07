const inquirer = require("inquirer");
const fs = require("fs");
const Newfunc = require("./newfunc");
const newfunc = new Newfunc();
const axios = require("axios");
// REQUIRED INFO
// Username or Name
// Title
// Description
// Table of Contents
// Installation
// Usage
// License
// Contributing
// Tests
// Questions

const info = [
    {   
        type: "input", 
        name: "user", 
        message: "Enter your Github Username:", 
    }, 
    { 
        type: "input", 
        name: "title", 
        message: "Enter the Title of your project:",
    }, 
    { 
        type: "input", 
        name: "description", 
        message: "Write a Project Description:", 
    }, 
    { 
        type: "input", 
        name: "contents", 
        message: "Write Table of Contents separated with commas:"
    },
    { 
        type: "input", 
        name: "installation", 
        message: "Write Installation Instructions:", 
    }, 
    { 
        type: "input", 
        name: "usage", 
        message: "Describe the Usage:", 
    }, 
    { 
        type: "list",  
        name: "license", 
        message : "Choose a License:",
        choices: ["Apache License", "MIT License", "Github License"],

    }, 
    { 
        type: "input", 
        name: "contributing", 
        message: "Write Contributing Rules:", 
    }, 
    { 
        type: "checkbox", 
        name: "tests", 
        message: "Run Tests:",
        choices: ["Yes", "No"]
    }, 
    { 
        type: "input", 
        name: "questions1", 
        message: "Enter email", 
    }, 
    ];
    console.clear();

    //include axios in our packages
    
    inquirer
        .prompt(info).then((response) => { 
            axios.get(`https://api.github.com/users/${response.user}`)
            .then( data => {
                //console.log(data)
                
                // WHEN I enter my GitHub username THEN this is added to the section of the README in a badge with a link to my GitHub profile.
                fs.writeFileSync("README.md", (`### [![Generic Badge](https://img.shields.io/badge/User-${data.data.name}-blue)](${data.data.html_url}) \n`), (err) => { 
                    if(err) {  
                        return console.log(err);  
                    } 
                    console.log("Hurray!");  
                });
            })
            .then(res => {

                //Overwrite previous README.md file starting with New User:
                
                // Append additional info to new file using helper prototype function
                newfunc.append("README.md", "# " + " " + response.title + "\n");
                newfunc.append("README.md", "### Description:" + "\n" + response.description + "\n" ); 
                newfunc.append("README.md", "## Table of Contents:" + "\n" + "- " + response.contents.split(", ").join("\n" + "- ") + "\n");
                newfunc.append("README.md", "### Installation Istructions:" + "\n" + response.installation + "\n" ); 
                newfunc.append("README.md", "### Usage:" + "\n" + response.usage + "\n" ); 
            
                // WHEN I choose a license for my application from a list of options THEN a badge for that license is added.
                if(response.license == "MIT License"){
                    newfunc.append("README.md", `### License: \n [![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT) \n` ); 
                }
                else if (response.license == "Apache License") {
                    newfunc.append("README.md", `### License: \n [![License: Apache](https://img.shields.io/badge/License-Apache-red.svg)](https://opensource.org/licenses/Apache-2.0) \n`);
                } 
                else if(response.license == "Github License"){
                    newfunc.append("README.md", `### License: \n [![License: Github](https://img.shields.io/badge/License-Github-green.svg)](https://opensource.org/licenses/Github) \n`);
                }

                newfunc.append("README.md", "### How to Contribute:" + "\n" + response.contributing + "\n" ); 
                newfunc.append("README.md", "### Run Tests: " + "\n" + response.tests + "\n" ); 
                newfunc.append("README.md", "## Email:" + "\n" + response.questions1 + "\n" ); 
                const message = newfunc.read("README.md");
                
                console.log(message); 
            })
        });

    
    // inquirer
    //     .prompt(info).then(response => {
            
    //         fs.writeFileSync("README.md", ("#Username:" + " " + response.user) + '\n', (err) => {
    //             if(err) {
    //                 return console.log(err);
    //             }
    //         console.log("Hurray!");
    //         });

    //         fs.appendFileSync("README.md", ("##Title:" + " " + response.title) + '\n', (err) => {
    //             if (err) {
    //                 return console.log(err);
    //             }
    //             console.log("Hurray!");
    //         });

    //         fs.appendFileSync("README.md", ("###Description:" + " " + response.description) + '\n', (err) => {
    //             if (err) {
    //                 return console.log(err);
    //             }
    //             console.log("Hurray!");
    //         });

    //         fs.appendFileSync("README.md", ("##Instructions for Installation:" + " " + response.contents) + '\n', (err) => {
    //             if (err) {
    //                 return console.log(err);
    //             }
    //             console.log("Hurray!");
    //         }); 

    //         fs.appendFileSync("README.md", ("##Table of Contents:" + " " + response.installation) + '\n', (err) => {
    //             if (err) {
    //                 return console.log(err);
    //             }
    //             console.log("Hurray!");
    //         }); 

    //         fs.appendFileSync("README.md", ("##Description of usage:" + " " + response.usage) + '\n', (err) => {
    //             if (err) {
    //                 return console.log(err);
    //             }
    //             console.log("Hurray!");
    //         }); 

    //         fs.appendFileSync("README.md", ("##Select a License:" + " " + response.license) + '\n', (err) => {
    //             if (err) {
    //                 return console.log(err);
    //             }
    //             console.log("Hurray!");
    //         }); 

    //         fs.appendFileSync("README.md", ("##Contributing Rules:" + " " + response.contributing) + '\n', (err) => {
    //             if (err) {
    //                 return console.log(err);
    //             }
    //             console.log("Hurray!");
    //         });

    //         fs.appendFileSync("README.md", ("##Run Tests:" + " " + response.tests) + '\n', (err) => {
    //             if (err) {
    //                 return console.log(err);
    //             }
    //             console.log("Hurray!");
    //         });

    //         fs.appendFileSync("README.md", ("##Email:" + " " + response.questions1) + '\n', (err) => {
    //             if (err) {
    //                 return console.log(err);
    //             }
    //             console.log("Hurray!");
    //         });
    //     });
      
  