// Iterator pattern is used to iterate over a collection of objects/items without revealing the underlying
// structure of the collection.

// Here is the basic example of iterator pattern

class Iterator {
  constructor() {
    this.items = [];
    this.index = 0;
  }

  hasNext() {
    return this.index < this.items.length;
  }

  getNext() {
    if (this.hasNext()) {
      return this.items[this.index++];
    }
  }

  addItem(item) {
    this.items.push(item);
  }
}

let itObj = new Iterator();

itObj.addItem('Apple');
itObj.addItem('Apple1');
itObj.addItem('Apple2');
itObj.addItem('Apple3');
itObj.addItem('Apple3');
itObj.addItem('Apple3');
itObj.addItem('Apple3');
itObj.addItem('Apple3');

console.log(itObj);

while (itObj.hasNext()) {
  console.log(itObj.getNext());
}
