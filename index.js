const inquirer = require("inquirer");
const fs = require("fs");
const Fsfunc = require("./fsfunc");

const fsfunc = new Fsfunc();

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
        message: "Write Table of Contents separated with commas:", },
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
        message: "Choose a License:", 
        name: "license", 
        choices: ["MIT License", "Apache License", "Eclipse Public License", "Mozilla Public License", ],
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
// { type: "input", name: "questions1", message: "Enter the url of your profile picture", }, 
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
            fs.writeFileSync("README.md", ("#Username:" + '\n' + response.user) + '\n', (err) => { 
                if(err) {  
                    return console.log(err);  
                } 
                console.log("Hurray!");  
            });
            fsfunc.append("README.md", "# " + response.title + "\n" ); 
            fsfunc.append("README.md", "## Description:" + "\n" + response.description + "\n" ); 
            fsfunc.append("README.md", "## Table of Contents:" + "\n" + "- " + response.contents.split(", ").join("\n" + "- ") + "\n");
            fsfunc.append("README.md", "## Installation Istructions:" + "\n" + response.installation + "\n" ); 
            fsfunc.append("README.md", "## Usage:" + "\n" + response.usage + "\n" ); 
            fsfunc.append("README.md", "## License:" + "\n" + response.license + "\n" ); 
            fsfunc.append("README.md", "## How to Contribute:" + "\n" + response.contributing + "\n" ); 
            fsfunc.append("README.md", "## Authors: " + "\n" + response.authors + "\n" ); 
            fsfunc.append("README.md", "## Run Tests: " + "\n" + response.tests + "\n" ); 
            // fsfunc.append("README.md", "## Contact Info" + "\n" + "![alt text](" + response.questions1 + ")" + "\n" ); 
            fsfunc.append("README.md", "\n" + response.questions1 + "\n" ); 
            const message = fsfunc.read("README.md"); 
            console.log(message); 
        });

        // REQUIRED DATA
        // Title
        // Description
        // Table of Contents
        // Installation
        // Usage
        // License
        // Contributing
        // Tests
        // Questions

    // const info = [
    //     {
    //         type: "input",
    //         message: "Enter your Username:",
    //         name: "user",
    //     },
    //     {
    //         type: "input",
    //         message: "Enter the Title of your project:",
    //         name: "title",
    //     },
    //     {
    //         type: "input",
    //         message: "Write a Project Description:",
    //         name: "description",
    //     },
    //     {
    //         type: "input",
    //         message: "Select Table of Contents:",
    //         name: "contents",  
    //     },
    //     {
    //         type: "input",
    //         message: "Instructions for installation:",
    //         name: "installation",
    //     },
    //     {
    //         type: "input",
    //         message: "Description of usage:",
    //         name: "usage",
    //     },
    //     {
    //         type: "checkbox",
    //         message: "Select a License:",
    //         name: "license", 
    //         choices: [
    //             "Apache License 2.0",
    //             "MIT License",
    //             "Mozilla Public License 2.0",
    //             "Eclipse Public License 2.0",
    //         ]
    //     },
    //     {
    //         type: "input",
    //         message: "Contributing Rules:",
    //         name: "contributing", 
    //     },
    //     {
    //         type: "checkbox",
    //         message: "Run Tests:",
    //         name: "tests", 
    //         choices: [
    //             "Yes",
    //             "No",
    //         ]
    //     },
    //     {
    //         type: "input",
    //         message: "Contributing Rules:",
    //         name: "contributing", 
    //     },
    //     {
    //         type: "input",
    //         message: "What is your Email:",
    //         name: "questions1",
    //     },
    //     ]
    //     console.clear();

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
        // Title
        // Description
        // Table of Contents
        // Installation
        // Usage
        // License
        // Contributing
        // Tests
        // Questions
        
    // ])
    // .then(response => {
    //     fs.writeFile("example.txt", response.answer, (err) => {
    //         if(err) throw err
    //     })
    // })