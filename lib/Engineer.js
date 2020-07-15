// TODO: Write code to define and export the Engineer class.  HINT: This class should inherit from Employee.
var Employee = require("./Employee.js");

//create new character
class Engineer extends Employee {
    constructor(name, id, email) {
        super(name,id,email);
        this.role = "Engineer";
        this.github = "";
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
var newEngineer = new Engineer("John",01,"john@goodCompany.com");
console.log(newEngineer);
console.log('My role is --->', newEngineer.getRole())


