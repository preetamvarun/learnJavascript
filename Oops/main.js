/* Basic object literal */

// const Person = {
//     name : 'preetam',
//     age : 20,
//     intro : function(name){
//         return 'my name is '+ name
//     }
// }

// console.log(Person.name)
// console.log(Person.age)
// console.log(Person.intro('preetam'))

// // Working with constructors 

// function Person(firstName,lastName,age){
//     this.firstName = firstName;
//     this.lastName = lastName;
//     this.age = age;
//     this.fullName = function(){
//         return `Full name is ${this.firstName} ${this.lastName}`
//     }
//     this.ageGroup = function(){
//         let result;
//         age <= 5 ? result = 'He is a baby' :
//         age <= 10 ? result = 'He is a kid' :
//         age <= 19 ? result = 'He is a teenager' :
//         age <= 60 ? result = 'He is an adult' :
//         result = 'He is a senior citizen'
//         return result
//     }
// }

// console.log(typeof Person)
// const preetam = new Person('preetam','varun','23');
// console.log(typeof preetam)
// console.log(preetam)
// console.log(preetam.fullName())
// console.log(preetam.ageGroup())

// // Working with built in constructors 

// const num1 = 3;
// const num2 = new Number('3');

// // console.log(typeof num1)
// // console.log(typeof num2)


// const name = 'preetam'
// const name1 = new String('preetam')

// // console.log(typeof name1)

// const boolx = true;
// const boolY = new Boolean(true);
// // console.log(boolY)

// const funX = function(x,y){
//     return x * y;
// }

// console.log(funX(4,2))

// const funY = new Function('x','y','return x * y')

// console.log(funY(3,4))

// const alpha = {
//     country : 'greece',
//     continent : 'Europe',
// }

// const BTS = new Object({
//     country : 'South Korea',
//     continent : 'Asia'
// })

// console.log(alpha)
// console.log(BTS)


// const nums = [1,2,3,4,5]
// const nums1 = new Array(6,7,8,9,10)

// console.log(typeof nums)
// console.log(typeof nums1)


// Working with prototypes

// Each object in javascript has a prototype and a protopye is an object itself


/*
function DBZ(maxPower,behaviour,attackName){
    this.maxPower = maxPower,
    this.behaviour = behaviour,
    this.attackName = attackName
}

const goku = new DBZ('Ultra-Instinct','Friendly','KAMEHAMEHA');
const vegeta = new DBZ('Ultra-Instinct','Arrogant','FINAL BLAST');
DBZ.prototype.animeName = 'DragonBallZ';
DBZ.prototype.powerUp = function(){
    return `Turned ${this.maxPower} and ${this.attackName}`;
}
DBZ.prototype.getsMarried = function(){
    this.behaviour = 'In Control';
}

*/

// console.log(DBZ)
// console.log(goku)
// goku.getsMarried()
// console.log(goku.behaviour)

// vegeta.getsMarried()
// console.log(vegeta.behaviour)
// console.log(vegeta)


// console.log(vegeta.hasOwnProperty('getsMarried'))
// console.log(vegeta.hasOwnProperty('behaviour'))

// console.log(goku.powerUp())
// console.log(vegeta.powerUp())

// console.log(goku.animeName)
// console.log(goku.powerUp())

// // Working with prototypal inheritance

// function Person(firstName,lastName,age){
//     this.firstName = firstName;
//     this.lastName = lastName;
//     this.age = age;
//     this.ageTeller = function(){
//         return `your age is ${this.age}`
//     }
// }

// Person.prototype.greeting = function(){
//     return `Hello there ${this.firstName} ${this.lastName}`;
// }

// const person1 = new Person('Mary','Elizabeth','25');

// // console.log(person1.greeting());

// // create a customer constructor

// function Customer(firstName,lastName,age,phn,membership){
//     Person.call(this,firstName,lastName,age);
//     this.phn = phn;
//     this.membership = membership;
// }

// // Inheriting the prototype of the person object 
// Customer.prototype = Object.create(Person.prototype);

// // Instead of Person, set prototype of the customer to Customer.
// Customer.prototype.constructor = Customer;

// const customer1 = new Customer('Tom','Holland','23','55-555-555','Gold')

// // We can even override the Inherited prototype

// Customer.prototype.greeting = function(){
//     return `Hello there ${this.firstName} ${this.lastName}. Welcome to our company`
// }

// console.log(customer1)
// console.log(customer1.greeting())



// Using object.create 

// const personPrototype = {
//     greeting : function(){
//         return `Hello there ${this.firstName} ${this.lastName}`
//     },
//     getsMarried : function(newLastName){
//         this.lastName = newLastName
//     }
// }

// const mary = Object.create(personPrototype);
// mary.firstName = 'Mary';
// mary.lastName = 'Thompson';
// console.log(mary.greeting());
// mary.getsMarried('Elizabeth');
// console.log(mary.greeting());
// console.log(mary)


// // ES6 Classes 

// class Person{
//     constructor(firstName,lastName,age){
//         this.firstName = firstName;
//         this.lastName = lastName;
//         this.age = age;
//     }
//     ageTeller(){
//         return `${this.firstName}'s age is ${this.age}`
//     }
//     greetings(){
//         return `Hello there ${this.firstName} ${this.lastName}`
//     }
//     getsMarried(newLastName){
//         this.lastName = newLastName;
//     }
//     static dummyFunction(){
//         return `Testing static methods`;
//     }
// }

// const rony = new Person('rony','williams','24');

// // console.log(rony.ageTeller());
// // console.log(Person.dummyFunction());
// // rony.getsMarried('Elizabeth');
// // console.log(rony.greetings());


// // Working with sub classes 

// class Customer extends Person{
//     constructor(firstName,lastName,age,memberShip,phoneNo){
//         super(firstName,lastName,age);
//         this.memberShip = memberShip;
//         this.phoneNo = phoneNo;
//     }
//     static getMembershipCost(){
//         return 500;
//     }
//     welcomeCustomer(){
//         return `Welcome ${this.firstName} ${this.lastName} to our company`
//     }
// }

// const sara = new Customer('sara','williams','24','Premium','5555-555-555');

// console.log(sara);

// console.log(sara.welcomeCustomer())

// sara.getsMarried('thompson');

// console.log(sara.welcomeCustomer());
// console.log(sara.ageTeller());

// console.log(Customer.getMembershipCost());

