// TODO: Write code to define and export the Engineer class.  HINT: This class should inherit from Employee.
var Employee = require("./Employee.js");

//create new character
class Engineer extends Employee {
    constructor(name, id, email,github) {
        super(name,id,email);
        this.role = "Engineer";
        this.github = github;
    }
     
}

//add additional functino to character class
Engineer.prototype.getRole = function() {
    return this.role;
};
Engineer.prototype.getGithub = function() {
    return this.github;
};

//test calls
// var newEngineer = new Engineer("John",1,"john@goodCompany.com","ernieurzua");
// console.log(newEngineer);
// console.log('My role is --->', newEngineer.getRole())

module.exports = Engineer;