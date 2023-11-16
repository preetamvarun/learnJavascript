// This is a pattern in which we encapsulate the group of closely related algorithms aka stragies. These
// Strategies are known as functions. With the help of this pattern we can swap strategies very easily.

class Addition {
  performStrategy(a, b) {
    return a + b;
  }
}

class Substraction {
  performStrategy(a, b) {
    return a - b;
  }
}

class Strategy {
  /*
    passing our algo object to the strategy object so that it can be interchangaeble easily
  */
  constructor(strategy) {
    this.strategy = strategy;
  }
  executeStrategy(a, b) {
    return this.strategy.performStrategy(a, b);
  }
}

let a = new Addition();
let b = new Substraction();

let s = new Strategy(b);

console.log(s.executeStrategy(1, 2));
