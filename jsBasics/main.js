/* LEARNING THE BASICS OF JAVASCRIPT LANGUAGE*/


/*

// alert("always write js in another file");

// working with console 
console.log("printing something in the console with the help of console.log method");

var x = "Welcome to the world of javascript";
console.log(x);
var x = [1,2,3,4,5];
console.log(x);

var obj = {
    "name" : "preetam",
    "age" : 22,
    "gender" : "male",
    "learn" : "javascript"
}
console.log(obj);
console.table(obj);

console.error("get ready to face ton of errors"); // Gives a error message in the console
console.warn("you will also get a ton of warnings when you code in javascript"); // gives a warning message in the console

console.time("Time it took to print learn javascript statements");

console.log("learn javascript");
console.log("learn javascript");
console.log("learn javascript");
console.log("learn javascript");
console.log("learn javascript");
console.log("learn javascript");

console.timeEnd("Time it took to print learn javascript statements");

// clearing the console
console.clear(); 
*/

// Learning variables in javascript

// we can re-assign variables if we use var or let 
// we can not reassign  varaibles if we use const but we can mutate the values in them and const variables has to the initialized.

// var name = "likhith";
// console.log(name);
// name = "manoj";
// console.log(name);

// let name;
// name = "preetam";
// console.log(name);
// name = "varun";
// console.log(name);


// const name = "jack";
// console.log(name);

// const names = ['preetam','bharath','manoj','sandeep','swaroop'];
// names.push('ramesh');
// names.pop();
// console.log(names);


// Data Types in javascript 

/*
There are basically two types of data types are there in javascript.

1) Primitive Data types (stored directly in the location the variable accesses. Stored on the stack) 

There are six different types of primitive data types are there in javascript 

-> strings, numbers, boolean, Null , undefined, symbols (ES6)

2) Reference Data types (Accessed by the reference. Objects that are stored on the heap. A pointer to a location in the memory)
Arrays, functions, dates, object literals, anything else...

*/


// // some primitive data types 

// let name = "preetam varun";
// const weekDays = 7;
// let learnJs = true;
// let someVariable; // By default all javascript variables are undefined
// let dynamic = null; // type object -> bug in javascript
// /* we will look into symbols later */

// // console.log(typeof dynamic);


// // some reference data types

// const myCurrentTechStack = ["c","c++","javascript","flutter","css","python"];

// let address = {
//     course : "masters",
//     city : "London",
//     country : "England"
// }

// console.log(address);
// console.log(typeof address);


/*Type Conversion In Javascript*/

// Number to String

// let num = 5;

// console.log(num.toString());
// console.log(num.toString().length);

// num = String(num);
// console.log(num);
// console.log(num.length);

// // Boolean to string 

// let isTrue = true;

// console.log(isTrue.toString());
// console.log(String(isTrue));

// // Dates to string

// const currentDate = new Date();
// console.log(currentDate.toString());


// // Array to string

// const names = ['joe','mark','henry','cena'];
// names.pop(); // ['joe','mark','henry']; 
// console.log(names.toString().length); // Total count of characters + commans (14 in this case)


/*Converting Strings to Integers */

// let value = "121.30";

// // value = parseInt(value);

// value = parseFloat(value);
// console.log(value);
// console.log(typeof value);

// // console.log(typeof Number(value));
// // console.log(typeof Number(typeof value));
// // console.log(Number(value));


// converting booleans to numbers 

// let booleanValue = true;
// console.log(Number(booleanValue));
// console.log(Number(!booleanValue));


// when we try to convert something into numbers which is not actually possible then we get NaN which means not a number

// let x = [1,2,3,4,5,6];
// x = "Hello World!";
// console.log(typeof Number(x));
// console.log(Number(x));


// // js implicitly converts one data type to another --> Type coversion 

// // Example 

// const v1 = 4;
// const v2 = 6;

// const sum = v1 + v2.toString();


// console.log(sum);
// console.log(typeof sum);


/*The Math Object*/

// let val;

// val = Math.PI;
// val = Math.pow(4,2);
// val = Math.floor(2.8);
// val = Math.ceil(2.1);
// val = Math.round(2.6); // for 2.5 output would be 3
// val = Math.min(1,2,3);
// val = Math.max(1,2,3);
// val = Math.sqrt(64);

// // let array = [1,2,34,43,2,-1,3];

// // let minNum = 0, maxNum = 0;

// // for(let i = 0; i < array.length; i++){
// //     minNum = Math.min(minNum,array[i]);
// //     maxNum = Math.max(maxNum,array[i]);
// // }

// // console.log(minNum);
// // console.log(maxNum);

// generating a random number between 20 and 30 

// val = Math.floor(Math.random() * 10 ) + 1;
// val = Math.abs(-34);

// console.log(val);


/* Some Useful String Methods */

// let statement = 'That\'s the thing that I\'ve Wanted for this whole time'; 
// //(use backslash to escape  the  or put the string under double quotes)
// console.log(statement);

// statement = 'change this to upper case and then back to lower case';

// console.log(statement.toUpperCase());
// console.log(statement.toLowerCase());


// // statement = "Alternate cases";
// // let answerString = "";

// // for(let i = 0; i < statement.length; i++){
// //     (i % 2 == 0) ? answerString += statement[i].toUpperCase() : answerString += statement[i].toLowerCase();
// // }

// // console.log(answerString);

// let val = "Hello there! My name is preetam varun";

// console.log(val.split(" "));
// console.log(val.includes('my'));
// console.log(val.substring(0,5)); // 0 is inclusive and 5 is exclusive
// console.log(val.charAt('2')); // Displays the character at index 2
// console.log(val.indexOf('H')); // Displays the index number of H
// console.log(val.lastIndexOf('m')); // Displays the last index of m
// console.log(val.slice(2,7));
// console.log(val.slice(-4)); // Displays last four characters of the string
// console.log(val.replace("name","Name"));

/* Array And Array Methods */

// There are basically two ways to declare arrays 

// let array1 = [1,2,3,4,5,6]; // This is most commonly used

// let array2 = new Array(110,210,30,10,4);

// let names = ['jack','rose','hamilton','newton'];

// console.log(array1);
// console.log(array2);

// we can have any type of data types in the array

// let mixedArray = [1,'two',NaN,undefined,true,false,new Date(), {a : 1, b : 2},[2,3,4]];

// console.log(mixedArray.indexOf(false));
// console.log(mixedArray);

// mixedArray.push('last ele');
// mixedArray.push('last');
// mixedArray.pop(); // removes last item from the list 
// mixedArray.unshift('first ele'); // to push element to the front of the array
// mixedArray.shift(); // to delete element from the front
// mixedArray.splice(6,8); // remove all the elements from index 6 to index 8 (inclusive)
// mixedArray.reverse();

// let val = array1.concat(mixedArray); // concatenating two arrays
// console.log(val);

// names.sort(); // This works just fine

// console.log(names);

// array2.sort(); // use the compare function to get it right

// array2.sort(function (x,y){ // for ascending order
//     return x - y;
// });

// array2.sort(function (y,x){ // for descending order
//     return y - x;
// });

// console.log(array2);

// Using the find function

// let numbers = [12,34,54,23,78,29];

// /*find the first number that is over 20*/
// function over20(num){
//     if(num > 20){
//         return num;
//     }
// }

// /*find the first number that is less than 20*/
// function lessthan20(num){
//     if(num < 20){
//         return num;
//     }
// }

// let answer1 = numbers.find(over20);
// let answer2 = numbers.find(lessthan20);

// console.log(answer1);
// console.log(answer2);


/* Working With Dates And Times */

// let today = new Date();

// let birthDay = new Date('01/08/1999'); // month/day/year
// birthDay = new Date('January 8 1999');

// birthDay = new Date('01-08-1999 03:25:34');

// birthDay.setHours('05');
// birthDay.setMinutes('45');
// birthDay.setSeconds('01');
// birthDay.setMonth('01'); // Month count starts from 0 i.e, 0 is january
// birthDay.setFullYear('2017');
// // console.log(birthDay);

// let val = today.getDate();
// val = today.getDay(); // 0 means sunday
// val = today.getFullYear();
// val = today.getHours();
// val = today.getMinutes();
// val = today.getSeconds();
// val = today.getMilliseconds();

// console.log(val);


/* IF Statements and Comparision Operators */

// const num = '100';

// if(num == 100){ // here checking only value
//     console.log("correct number");
// } else{
//     console.log('incorrect number');
// }

// if(num === 100){ // checking both type and value
//     console.log('correct number');
// } else{
//     console.log('incorrect number');
// }

// const id = '200';

// if(id === 200 && (id >= 200 && id <= 400)){
//     console.log('code fast');
// } else{
//     console.log('code slow');
// }

// const age = 22;
// const name = 'preetam';

// console.log(typeof age);

// if(typeof age === 'number' && (age >=0 && age <= 12)){
//     console.log(`${name} is a child`);
// } else if(typeof age === 'number' && (age >=13 && age <= 19)){
//     console.log(`${name} is a teenage`);
// } else if(typeof age === 'number' && (age >=20 && age <= 35)){
//     console.log(`${name} is a youngster`);
// }else if(typeof age === 'number' && (age >=36 && age <= 59)){
//     console.log(`${name} is adult`);
// }else if(typeof age === 'number' && (age >= 60)){
//     console.log(`${name} is old`);
// }else{
//     console.log('please provide correct age');
// }

/* Switches in javascript */

// const color = 'blue';

// switch(color){
//     case 'red':
//         console.log('color is red');
//         break;
//     case 'blue':
//          console.log('color is blue');
//          break;
//     default:
//         console.log('color is not red or blue');
//         break;
// }

/* Object Oriented Programming With Javascript */

// In javascript we don't have concept of classes

// A object in javascript is referred to as collection of key value pairs 

// Object literals are a simple way to define objects in javascript

// Creating first object using object literal 

// const goku = {
//     name : 'sonGoku',
//     maxPower : 'ultra-instinct',
//     strike : function(){
//         console.log('spirit bomb');
//     },
//     son : {
//         name : 'gohan',
//         maxPower : 'super-saiyan',
//         strike : function(){
//             console.log('kame hame ha');
//         }
//     },
//     companion : {
//         name : 'vegeta',
//         maxPower : 'beyond super-saiyan 3',
//         strike : function(){
//             console.log('final blast');
//         }
//     }
// }

// console.log(goku.son.name);
// console.log(goku.name);
// console.log(goku.maxPower);
// console.log(goku.strike);

// Object literals are not a good way to define objects when the objects are having some methods 

// Defining objects using factory function 

// function Goku(anotherName){
//     return {
//         name : 'goku',
//         max_power : 'ultra-instinct',
//         strike : function(){
//             console.log('kame hame ha');
//         },
//         call : function(name){
//             console.log('you can do it '+ name);
//         },
//         isAlwaysAngry : false,
//         foodie : true,
//         anotherName
//     }
// }

// const sonGoku = Goku('kakarot');
// console.log(typeof sonGoku); // It is object
// console.log(sonGoku.anotherName);
// sonGoku.call('kakarot');

// Defining objects using constructor function

// function Vegeta(anotherName){ // Instead of returning a object use this keyword
//     this.anotherName = anotherName,
//     this.name = 'vegeta',
//     this.max_power = 'beyond super-sayan',
//     this.stirke = function(){
//         console.log('final blast');
//     },
//     this.call = function(name){
//         console.log('you have to do it '+ name);
//     },
//     this.proud = true,
//     this.foodie = false
// }

// const vegeta =  new Vegeta('prince');

// const trunks = new Function('anotherName',
// `this.anotherName = anotherName,
// this.name = 'vegeta',
// this.max_power = 'beyond super-sayan',
// this.stirke = function(){
//     console.log('final blast');
// },
// this.call = function(name){
//     console.log('you have to do it '+ name);
// },
// this.proud = true,
// this.foodie = false`);

// const trunks1 = new trunks('goten');
// console.log(trunks1.max_power);

// console.log(vegeta.anotherName);
// vegeta.call('prince vegeta');
// console.log(vegeta.proud);

// Every object in javascript has a property 
// called constructor and that references to 
// the function that was used to create
// that object.


/* Practice objects in javascript */

// const gohan = {
//     name : 'gohan',
//     max_power : 'ultimate-gohan',
//     strike : 'kame hame ha',
//     powerup : function(power){
//         return 'powering up to '+ power;
//     },
// }


// function Vegeta(anotherName){
//     return {
//         name : 'vegeta',
//         max_power : 'SSBE',
//         strike : 'Final Blast',
//         anotherName : anotherName,
//         powerup : function(power){
//             return 'powering up to '+ power;
//         }
//     }
// }


// const V = new Function(
//     'anotherName', 
//     `return {
//         name : 'vegeta',
//         anotherName : anotherName,
//         max_power : 'SSBE',
//         strike : 'Final Blast',
//         powerup : function(power){
//             return 'powering up to '+ power;
//         }
//     }`
// );


// const vegeta = Vegeta('Prince');
// const vegeta1 = V('King');


// function Goku(anotherName){ 
//     this.name = 'sonGoku',
//     this.anotherName = anotherName,
//     this.max_power = 'ultra_instinct',
//     this.strike = 'Kame Hame Ha',
//     this.powerup = function(power){
//         return 'powering up to '+ power;
//     }
// }

// const goku = new Goku('Kakarot');


// Working with function declarations and expressions

// function enterBattleField(player1='Goku',player2='Vegeta'){
//     return player1 + " v/s " + player2;
// }

// console.log(enterBattleField('trunks','gohan'));

// const rectArea = function(length = 1, breadth = 1){
//     return length * breadth;
// }

// console.log(rectArea(2,4));

// Immediately Invokable Function Expressions 


// Working in console. Not working in the editor 
// (function(){console.log('Hello World')})();
// (function(name){console.log('My name is '+name)})('preetam');


/* Working with loops in javascript */

// let numbers = [1,2,3,4,5,6,7,8,9,10];

// for(let i = 0; i < numbers.length; i++){
//    numbers[i] % 2 == 0 ? 
//    console.log("even number") : console.log('odd number');
// }

// let arrayLength = numbers.length, i = 0;

// while (i < arrayLength){
//     console.log(numbers[i]);
//     i++;
// }

/* for in and for each loops in javascript */

// const technologies = ['HTML','CSS','JAVASCRIPT','REACT','GIT'];

// technologies.forEach(function (tech,index) {
//     console.log(tech + ' : ' + index);
// });

// const testObj = {
//     gender : 'male',
//     age : 20,
//     country : 'India'
// }

// for(key in testObj){
//     console.log(`${key} : ${testObj[key]}`);
// }

/* Block Scope with let and const */

/*

// Global scope

var a = 1; 
let b = 2;
const c = 3;


// Function Scope

function test(){
    var a = 4;
    let b = 5;
    const c = 6;
    console.log('FUNCTION SCOPE : ', a, b, c);
}
test();

// IF BLOCK SCOPE

if(true){
    var a = 7;
    let b = 8;
    const c = 9;
    console.log('IF BLOCK SCOPE : ', a, b , c);
}

// FOR BLOCK SCOPE

for(var a = 0; a < 10; a++){
    console.log(a);
}


console.log('GLOBAL SCOPE : ',a,b,c);


// let and const have block level scope. Whereas, var has only
// function scope

*/

/* Working with window object in javascript */

// Window is the global object in client side javascript

// window.alert("now you have to move on!");

// let number = prompt("enter a number");
// alert(`the number is : ${number}`);

// confirm('do you want to proceed') ? console.log("moving on") 
// : console.log("still stuck here!");

// let x,y;

// Scroll points 

// x = window.scrollY;
// x = window.scrollX;

// Outer height and width 

// x = window.outerHeight;
// x = window.outerWidth;

// Inner height and width

// y = window.innerHeight;
// y = window.innerWidth;

// The innerWidth property returns the width of a window's content area.
// The innerHeight property returns the height of a window's content area.

// x = window.location;
// x = window.location.hostname;
// x = window.location.search;
// x = window.location.href;

// window.location.href = "www.google.com";
// window.location.reload();

// ALSO CHECK OUT NAVIGATOR AND HISTORY OBJECT 

// console.log(x);
// console.log(y);