// TODO: Write code to define and export the Intern class.  HINT: This class should inherit from Employee.
var Employee = require("./Employee.js");

//create new character
class Intern extends Employee {
    constructor(name, id, email,school) {
        super(name,id,email);
        this.role = "Intern";
        this.school = school;
    }
    
}

Intern.prototype.getRole = function() {
    return this.role;
};
Intern.prototype.getSchool = function() {
    return this.school;
};


// var newIntern = new Intern("John",1,"john@goodCompany.com","test");
// console.log(newIntern);
// console.log('My role is --->', newIntern.getRole())

module.exports = Intern;