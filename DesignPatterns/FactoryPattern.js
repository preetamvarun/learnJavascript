/*
    In factory pattern we create a centralized object creation logic. So, no matter how many different 
    instances we create, we create all of them through a centralized interface.
*/

let intro = function (type) {
  console.log(`${this.name} is a ${this.tech} ${type}`);
};

class Developer {
  constructor(name, tech) {
    this.name = name;
    this.tech = tech;
  }
}

class Tester {
  constructor(name, tech) {
    this.name = name;
    this.tech = tech;
  }
}

class Employee {
  createInstance(type, name, tech) {
    switch (type) {
      case 'Developer':
        return new Developer(name, tech);
      case 'Tester':
        return new Tester(name, tech);
      default:
        return null;
    }
  }
}

let e1 = new Employee();

let d1 = e1.createInstance('Developer', 'Preetam', 'Java');
let d2 = e1.createInstance('Tester', 'Likhith', 'Python');
let d3 = e1.createInstance('DKF', 'DSFSDF', 'SFDSF');

intro.apply(d1, ['Developer']);
intro.call(d2, 'Tester');
