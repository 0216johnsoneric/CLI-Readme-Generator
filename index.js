const inquirer = require("inquirer");
const fs = require("fs");

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

    const info = [
        {
            type: "input",
            message: "Enter your Username:",
            name: "user",
        },
        {
            type: "input",
            message: "What is the Title of your project:",
            name: "title",
        },
        {
            type: "input",
            message: "Write a Project Description:",
            name: "description",
        },
        {
            type: "input",
            message: "Select Table of Contents:",
            name: "contents",  
        },
        {
            type: "input",
            message: "Instructions for installation:",
            name: "installation",
        },
        {
            type: "input",
            message: "Description of usage:",
            name: "usage",
        },
        {
            type: "checkbox",
            message: "Select a License:",
            name: "license", 
            choices: [
                "Apache License 2.0",
                "MIT License",
                "Mozilla Public License 2.0",
                "Eclipse Public License 2.0",
            ]
        },
        {
            type: "input",
            message: "Contributing Rules:",
            name: "contributing", 
        },
        {
            type: "checkbox",
            message: "Run Tests:",
            name: "tests", 
            choices: [
                "Yes",
                "No",
            ]
        },
        {
            type: "input",
            message: "Contributing Rules:",
            name: "contributing", 
        },
        {
            type: "input",
            message: "What is your Email:",
            name: "questions1",
        },
        ]
        console.clear();

    inquirer
        .prompt(info).then(response => {
            
            fs.writeFileSync("example.txt", ("Username:" + " " + response.user) + '\n', (err) => {
                if(err) {
                    return console.log(err);
                }
            console.log("Hurray!");
            });

            fs.appendFileSync("example.txt", ("#Title:" + " " + response.title) + '\n', (err) => {
                if (err) {
                    return console.log(err);
                }
                console.log("Hurray!");
            });

            fs.appendFileSync("example.txt", ("Description:" + " " + response.description) + '\n', (err) => {
                if (err) {
                    return console.log(err);
                }
                console.log("Hurray!");
            });

            fs.appendFileSync("example.txt", ("Instructions for installation:" + " " + response.contents) + '\n', (err) => {
                if (err) {
                    return console.log(err);
                }
                console.log("Hurray!");
            }); 

            fs.appendFileSync("example.txt", ("Table of Contents:" + " " + response.installation) + '\n', (err) => {
                if (err) {
                    return console.log(err);
                }
                console.log("Hurray!");
            }); 

            fs.appendFileSync("example.txt", ("Description of usage:" + " " + response.usage) + '\n', (err) => {
                if (err) {
                    return console.log(err);
                }
                console.log("Hurray!");
            }); 

            fs.appendFileSync("example.txt", ("Select a License:" + " " + response.license) + '\n', (err) => {
                if (err) {
                    return console.log(err);
                }
                console.log("Hurray!");
            }); 

            fs.appendFileSync("example.txt", ("Contributing Rules:" + " " + response.contributing) + '\n', (err) => {
                if (err) {
                    return console.log(err);
                }
                console.log("Hurray!");
            });

            fs.appendFileSync("example.txt", ("Run Tests:" + " " + response.tests) + '\n', (err) => {
                if (err) {
                    return console.log(err);
                }
                console.log("Hurray!");
            });

            fs.appendFileSync("example.txt", ("Enter Email:" + " " + response.questions1) + '\n', (err) => {
                if (err) {
                    return console.log(err);
                }
                console.log("Hurray!");
            });
        });
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