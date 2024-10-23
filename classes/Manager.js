const  Employee  = require("./Employee")


class Manager extends Employee {

    #employeesManaged;

    constructor(name, position, salary, department) {
      super(name, position, salary); 
      this.department = department;
      this.#employeesManaged = []; 
    }
      
    getEmployeesManaged() {
      return this.#employeesManaged;
    }
  
    addEmployeeManaged(employee) {
      if (employee instanceof Employee) {
        this.#employeesManaged.push(employee);
      } else {
        throw new Error("Can only manage instances of Employee.");
      }
    }

    
}

module.exports = 
    Manager
