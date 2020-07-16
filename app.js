const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./lib/htmlRenderer");
const { off } = require("process");
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
                console.log(teamArray);
                writeHTML(render(teamArray));
                break;
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
            name: "name"
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
    ]).then(function (response) {
        const name = response.name;
        const id = response.id;
        const email = response.email;
        const officeNumber = response.officeNumber;
        console.log(response.officeNumber);
        var newManager = new Manager(name,id,email,officeNumber);
        teamArray.push(newManager);
        mainMenu();
    })


}

function addEngineer() {
    return inquirer.prompt([
        {
            type: "input",
            message: "name:",
            name: "name"
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
    ]).then(function (response) {
        const name = response.name;
        const id = response.id;
        const email = response.email;
        const github = response.github;
        var newEngineer = new Engineer(name,id,email,github);
        teamArray.push(newEngineer);
        mainMenu();
    })
}

function addIntern() {
    return inquirer.prompt([
        {
            type: "input",
            message: "name:",
            name: "name"
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
    ]).then(function (response) {
        const name = response.name;
        const id = response.id;
        const email = response.email;
        const school = response.school;
        var newIntern = new Intern(name,id,email,school);
        teamArray.push(newIntern);
        mainMenu();
    })
}
// After the user has input all employees desired, call the `render` function (required
// above) and pass in an array containing all employee objects; the `render` function will
// generate and return a block of HTML including templated divs for each employee!
writeHTML(render(teamArray));

function writeHTML(data) {
    fs.writeFile(outputPath, data, function (error, data) {
        console.log("team html created");
    });
}
// After you have your html, you're now ready to create an HTML file using the HTML
// returned from the `render` function. Now write it to a file named `team.html` in the
// `output` folder. You can use the variable `outputPath` above target this location.
// Hint: you may need to check if the `output` folder exists and create it if it
// does not.



