const inquirer = require("inquirer");
const fs = require("fs");
const Newfunc = require("./newfunc");
const newfunc = new Newfunc();

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
        message: "Enter yor Username:", 
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
        type: "checkbox",  
        name: "license", 
        message : "Choose a License:",
        choices : ["Apache License", "MIT License", "Eclipse Public License", "Mozilla Public License"],

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
    { type: 
        "input", 
        name: "questions1", 
        message: "Enter email", 
    }, 
    ];
    console.clear();

    inquirer
        .prompt(info).then((response) => { 
            
            //Overwrite previous README.md file starting with New User:
            fs.writeFileSync("README.md", ("### " + response.user + '\n'), (err) => { 
                if(err) {  
                    return console.log(err);  
                } 
                console.log("Hurray!");  
            });

            // Append additional info to new file using helper prototype function
            newfunc.append("README.md", "# " + " " + response.title + "\n");
            newfunc.append("README.md", "### Description:" + "\n" + response.description + "\n" ); 
            newfunc.append("README.md", "## Table of Contents:" + "\n" + "- " + response.contents.split(", ").join("\n" + "- ") + "\n");
            newfunc.append("README.md", "### Installation Istructions:" + "\n" + response.installation + "\n" ); 
            newfunc.append("README.md", "### Usage:" + "\n" + response.usage + "\n" ); 
            newfunc.append("README.md", "### License:" + "\n" + response.license + "\n" ); 
            newfunc.append("README.md", "### How to Contribute:" + "\n" + response.contributing + "\n" ); 
            newfunc.append("README.md", "### Run Tests: " + "\n" + response.tests + "\n" ); 
            newfunc.append("README.md", "## Email:" + "\n" + response.questions1 + "\n" ); 
            const message = newfunc.read("README.md");
    
            console.log(message); 
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
      
  