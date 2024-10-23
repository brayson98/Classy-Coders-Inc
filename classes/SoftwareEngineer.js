const Employee = require('./Employee')

class SoftwareEngineer extends Employee {

    #programmingLanguages;

    constructor(name, position, salary) {
      super(name, position, salary); 
      this.#programmingLanguages = []; 
    }
  
   
    getProgrammingLanguages() {
      return this.#programmingLanguages;
    }
  
    
    setProgrammingLanguage(language) {
      if (typeof language === 'string' && language.trim() !== '') {
        this.#programmingLanguages.push(language);
      } else {
        throw new Error("Invalid programming language.");
      }
    }

    
}
module.exports = 
    SoftwareEngineer
