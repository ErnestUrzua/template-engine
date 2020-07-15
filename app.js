const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./lib/htmlRenderer");
const teamArray = []; //holds team objects


//start function 
mainMenu();

function mainMenu() {
    inquirer.prompt([
        {
            type: "list",
            name: "menuChoice",
            message: "Build a Team Roster",
            choices: ["Add a Manager", "Add an Engineer", "Add an Intern", "Exit"]
        }
    ]).then(function (userChoice) {
        // depending on the user selection, 
        switch (userChoice.menuChoice) {
            // call on a function to show the quotes
            case "Add a Manager":
                addManager();
                break;
            // call on a function to add a new quote
            case "Add an Engineer":
                addEngineer();
                break;
            // call on a function to add a new quote
            case "Add an Intern":
                addIntern();
                break;
            // exit the application by not calling on any functions
            case "Exit":
                console.log("\n Goodbye!");
        }
    })
}



// Write code to use inquirer to gather information about the development team members,
// and to create objects for each team member (using the correct classes as blueprints!)
//user prompts
function addManager() {
    inquirer.prompt([
        {
            type: "input",
            message: "name:",
            name: "manager"
        },
        {
            type: "input",
            message: "Id:",
            name: "id"
        },
        {
            type: "input",
            message: "email:",
            name: "email"
        },
        {
            type: "input",
            message: "office number:",
            name: "officeNumber"
        }
    ]).then(function(response){
        teamArray.push(response);
        mainMenu();
    })

    
}

function addEngineer() {
    return inquirer.prompt([
        {
            type: "input",
            message: "name:",
            name: "engineer"
        },
        {
            type: "input",
            message: "Id:",
            name: "id"
        },
        {
            type: "input",
            message: "email:",
            name: "email"
        },
        {
            type: "input",
            message: "github username:",
            name: "github"
        }
    ]).then(function(response){
        teamArray.push(response);
        mainMenu();
    })
}

function addIntern() {
    return inquirer.prompt([
        {
            type: "input",
            message: "name:",
            name: "intern"
        },
        {
            type: "input",
            message: "Id:",
            name: "id"
        },
        {
            type: "input",
            message: "email:",
            name: "email"
        },
        {
            type: "input",
            message: "school:",
            name: "school"
        }
    ]).then(function(response){
        teamArray.push(response);
        mainMenu();
    })
}
// After the user has input all employees desired, call the `render` function (required
// above) and pass in an array containing all employee objects; the `render` function will
// generate and return a block of HTML including templated divs for each employee!

// After you have your html, you're now ready to create an HTML file using the HTML
// returned from the `render` function. Now write it to a file named `team.html` in the
// `output` folder. You can use the variable `outputPath` above target this location.
// Hint: you may need to check if the `output` folder exists and create it if it
// does not.

// HINT: each employee type (manager, engineer, or intern) has slightly different
// information; write your code to ask different questions via inquirer depending on
// employee type.

// HINT: make sure to build out your classes first! Remember that your Manager, Engineer,
// and Intern classes should all extend from a class named Employee; see the directions
// for further information. Be sure to test out each class and verify it generates an
// object with the correct structure and methods. This structure will be crucial in order
// for the provided `render` function to work! ```
