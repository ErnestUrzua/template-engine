// TODO: Write code to define and export the Employee class
function Employee (name,id,email){
    
    // give attributes to employee
    this.name = name;
    this.id = id;
    this.email = email;

    // create functions to access private properties of employee
    this.getName = function (){
        return this.name;
    }
    this.getId = function (){

        return this.id;
    }
    this.getEmail = function (){
        return this.email;
    }
    

}

module.exports = Employee;