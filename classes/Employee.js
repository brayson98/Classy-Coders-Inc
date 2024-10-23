class Employee {
    #salary;
    #isHired;
    static #allEmployees = [];
    constructor(name, position, salary) {
      this.name = name;
      this.position = position;
      this.#salary = salary;
      this.#isHired = true; 
      
      Employee.#allEmployees.push(this);
    }
  
       
    getSalary() {
      return this.#salary;
    }
  
    
    setSalary(amount) {
      if (amount < 0) {
        throw new Error("Salary must be a positive number.");
      }
      this.#salary = amount;
    }
  
    
    getStatus() {
      return this.#isHired;
    }
  
    
    setStatus(command) {
      if (command === "hire") {
        this.#isHired = true;
      } else if (command === "fire") {
        this.#isHired = false;
      } else {
        throw new Error("Invalid command. Use 'hire' or 'fire'.");
      }
    }

    static getEmployees() {
        return Employee.#allEmployees;
      }
    
      // Static method to calculate total payroll (sum of all employee salaries)
      static getTotalPayroll() {
        return Employee.#allEmployees.reduce((total, employee) => total + employee.getSalary(), 0);
      }

    
}

module.exports = Employee;

