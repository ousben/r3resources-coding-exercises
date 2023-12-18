class Employee {
  constructor(name, salary) {
    this.name = name;
    this.salary = salary;
  }
  calculateSalary() {
    return this.salary * 12;
  }
}

class Manager extends Employee {
  constructor(name, salary, department) {
    super(name, salary);
    this.department = department;
  }
  calculateSalary(bonuses) {
    return this.salary * 12 + bonuses;
  }
}

const manager1 = new Manager("John", 1200, "accounting");
console.log(manager1.calculateSalary(0));
console.log(manager1.calculateSalary(1200));

const manager2 = new Manager("James", 2500, "IT");
console.log(manager2.calculateSalary(0));
console.log(manager2.calculateSalary(1200));