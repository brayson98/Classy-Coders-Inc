const Employee = require("./Employee")


class SalesPerson extends Employee {

    #totalSales;

    constructor(name, position, salary) {
      super(name, position, salary); 
      this.clients = []; 
      this.#totalSales = 0; 
    }
  
    // Getter for totalSales
    getSalesNumbers() {
      return this.#totalSales;
    }
  
    
    addClient(client) {
      if (typeof client === 'string' && client.trim() !== '') {
        this.clients.push(client);
      } else {
        throw new Error("Invalid client name.");
      }
    }
  
    
    makeSale(amount) {
      if (typeof amount === 'number' && amount > 0) {
        this.#totalSales += amount;
      } else {
        throw new Error("Sale amount must be a positive number.");
      }
    }

    
}

module.exports = 
    SalesPerson
