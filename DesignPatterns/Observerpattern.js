// Observer pattern is a behavioural pattern where There is a observable aka subject which contains
// list of dependents knows as observers. When there is a change in state all the observers are notified.

let observer1 = function () {
  console.log('Observer-1 function is fired');
};

let observer2 = function () {
  console.log('Observer-2 function is fired');
};

let observer3 = function () {
  console.log('Observer-3 function is fired');
};

class ObserverPattern {
  constructor() {
    this.observers = [];
  }
  subscribe(observer) {
    this.observers.push(observer);
  }
  unsubscribe(observer) {
    this.observers = this.observers.filter(
      (eachObserver) => eachObserver !== observer
    );
  }
  notifyObservers() {
    this.observers.forEach((observer) => {
      observer();
    });
  }
}

let ob = new ObserverPattern();
ob.subscribe(observer1);
ob.subscribe(observer2);
ob.subscribe(observer3);

ob.unsubscribe(observer2);

ob.notifyObservers();
