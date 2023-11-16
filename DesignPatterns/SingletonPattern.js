// Design pattern

// Instead of creating multiple instance of a class, with the help of singleton pattern we can create
// only one instance of a class. No matter how many variables we create they all refer to the same instance
// in the heap memory.

// Consider the following example

class SingletonPattern {
  static instance = null;
  constructor() {
    if (!SingletonPattern.instance) SingletonPattern.instance = this;
  }
  getInstance() {
    return SingletonPattern.instance;
  }
}

let s0 = new SingletonPattern().getInstance();
let s1 = new SingletonPattern().getInstance();
let s2 = new SingletonPattern().getInstance();

console.log(s0 === s1);
