// Allows new operations or methods to an object without changing the object. we put these methods in
// A separate object called visitor object.

class Employee {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  setSalary(salary) {
    this.salary = salary;
  }

  getsalary() {
    return this.salary;
  }

  visitorFunction(doubleSalary) {
    doubleSalary(this);
  }
}

let doubleSalary = function (em) {
  em.salary = em.salary * 2;
};

let em = new Employee('Jake', 25);

em.setSalary(1000);

console.log(em.getsalary());
em.visitorFunction(doubleSalary);
console.log(em.getsalary());
