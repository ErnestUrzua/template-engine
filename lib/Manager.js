// TODO: Write code to define and export the Manager class. HINT: This class should inherit from Employee.
var Employee = require("./Employee.js");

//create new character
class Manager extends Employee {
    constructor(name, id, email) {
        super(name,id,email);
        this.role = "Manager";
        this.officeNumber = "1234";
    }
    
    
}

Manager.prototype.getRole = function() {
    return this.role;
};


var newManager = new Manager("John",01,"john@goodCompany.com");
// console.log(newManager);
// console.log('My role is --->', newManager.getRole())