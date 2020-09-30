const inquirer = require("inquirer");
const fs = require("fs");

inquirer
    .prompt([
        {
            type: "input",
            message: "This is your question?",
            name: "answer",
        },
        {
            type: "input",
            message: "How are you today?",
            name: "feeling",
        }

        // Title
        // Description
        // Table of Contents
        // Installation
        // Usage
        // License
        // Contributing
        // Tests
        // Questions
        
    ])
    .then(response => {
        fs.writeFile("example.txt", response.answer, (err) => {
            if(err) throw err
        })
    })