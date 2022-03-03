/* 

IMPLEMENT THE BELOW TASKS USING CALL BACK HELL

place order - 2s
cutting the fruit - 2s
add water and ice - 1s
start the machine - 1s
select the container - 1s
select toppings - 3s
server the ice cream - 2s
Take customer review - 3s

*/

/*THESE ARE THE AVAILABLE INGREDIENTS TO MAKE THE ICE CREAM*/

// let ingredients = {
//     fruits : ['Banana','Apple','Strawberry','Grapes'],
//     holders : ['Cup','Cone','Stick'],
//     liquids : ['ice','water'],
//     toppings : ['peanuts','chocolate']
// }


// /*write two functions. one is to place the order other is to deliver the order and take reviews*/

// function order(fruit,holder,toppings,call_production){
//     // It takes to 2s to place the order 
//     setTimeout(() => {
//         console.log("order has been placed");
//         call_production(fruit,holder,toppings);
//     },2000);
// }

// // THE FORMAT OF THE BELOW CODE IS CALLED A CALL BACK HELL

// function production(fruit,holder,toppings){
//     setTimeout(() => {
//         console.log(`${fruit} has been chopped off`);
//         setTimeout(() => {
//             console.log('added water and ice');
//             setTimeout(() => {
//                 console.log('machine has started');
//                 setTimeout(() => {
//                     console.log(`${holder} is selected as a holder for the ice cream`)
//                     setTimeout(() => {
//                         console.log(`${toppings} have been sprinkled on top of the ice cream`)
//                         setTimeout(() => {
//                             console.log('ice cream has been served');
//                             setTimeout(() => {
//                                 console.log('took the review from the customer')
//                             },3000) // It takes 3 seconds to take the review from the customer
//                         },2000) // It takes 2 seconds to server the ice cream
//                     },3000) // It takes 3 seconds to sprinkle the toppings 
//                 },1000) // It takes 1 second the place the ice cream on the holder 
//             },1000) // It takes 1 second to start the machine
//         },1000) // It takes 1 second to add water and ice
//     },2000) // It takes 2 seconds to chop off the fruit
// }

// order(ingredients.fruits[1],ingredients.holders[2],ingredients.toppings[0],production);


// SO THERE IS A BETTER WAY TO WRITE THE ABOVE CODE USING PROMISES 

// LET'S UNDERSTAND PROMISES FIRST

/*

let keepYourWord = false;

let p = new Promise((resolve,reject)=>{
    if(keepYourWord){
        resolve('You are a good man');
    } else{
        reject('You are a bad man');
    }
})

p.then((msg) => console.log(`You have kept your word. ${msg}`))
.catch((msg) => console.log(`You haven't kept your word. ${msg}`))
.finally(() => console.log('This will run either ways'))

*/

// Now implement the ice cream procedure using promises. so that the code looks neat and clean

// let isShopOpen = true;

// let fun = (work,time) => {
//     return new Promise((resolve,reject) => {
//         if(isShopOpen){
//             setTimeout(()=>{
//                 resolve(work())
//             },time);
//         }
//         else{
//             reject();
//         }
//     });
// }

// // // first task is to place the order

// fun(() => console.log('order has been placed'),2000)
// .then(() => fun(() => console.log('fruit has been chopped off'),2000))
// .then(() => fun(() => console.log('added water and ice'),1000))
// .then(() => fun(() => console.log('machine has started'),1000))
// .then(() => fun(() => console.log('selected holder'),1000))
// .then(() => fun(() => console.log('selected toppings'),3000))
// .then(() => fun(() => console.log('served ice cream'),2000))
// .then(() => fun(() => console.log('took reviews from the customer'),2000))
// .catch(() => console.log('order has been failed'))
// .finally(() => console.log('day ended, shop has been closed'))


// REVISING ARROW FUNCTIONS

// const greet = () => 'Hi there!'

// console.log(greet())

// const greeting = () => console.log('This is a greeting')

// greeting();

// const sum = (x,y) => x + y;

// console.log(sum(2,3));

// const obj = () => ({a : 'This is a letter'})

// console.log(obj())

// // sum of all the numbers in an array

// let arr = [1,2,3,4,5,6]
// let arr1 = [];

// arr1 = arr.map((num) => num * 10)

// console.log(arr1);

// LEARN ASYNC AWAIT IN JAVASCRIPT

/* THERE ARE THREE MAIN TERMS (TRY CATCH AND FINALLY) TO USE IN THE ASYNC FUNCTION */

// async function order(){
//     try{
//         await abc;
//     }
//     catch(err){
//         console.log("function abc is not there",err)
//     }
//     finally{
//         console.log('code will run anyways')
//     }
// }

// // order() .then(() => console.log('This is a sample statement'))

// let toppings_choice = () => {
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             resolve(console.log('please select your toppings'));
//         },3000)
//     })
// }

// async function kitchen(){
//     console.log("s1")
//     console.log("s2")
//     console.log("s3")

//     await toppings_choice()
//     console.log("s4")
//     console.log("s5")
// }

// kitchen()
// console.log('cleaning the floor')
// console.log('serving other peoples orders')
// console.log('doing the dishes')


// let ingredients = {
//     fruits : ['Banana','Apple','Strawberry','Grapes'],
//     holders : ['Cup','Cone','Stick'],
//     liquids : ['ice','water'],
//     toppings : ['peanuts','chocolate']
// }


// let is_shop_open = false;

// function time(ms){
//     return new Promise((resolve,reject) => {
//         if(is_shop_open){
//             setTimeout(()=>{
//                 resolve();
//             },ms)
//         }
//         else{
//             reject(console.log("Can't operate now"));
//         }
//     })
// }

// async function kitchen(){
//     try{
//         await time(2000);
//         console.log('order has been placed');

//         await time(2000);
//         console.log('cut the fruit')

//         await time(1000);
//         console.log('add water and ice')

//         await time(1000);
//         console.log('start the machine')

//         await time(1000)
//         console.log('put the holder on to the ice cream')

//         await time(3000)
//         console.log('select the toppings')

//         await time(2000)
//         console.log('serve the ice cream')

//         await time(3000)
//         console.log('take the review from the customer')
//     }
//     catch(err){
//         console.log("Customer left");
//     }
//     finally{
//         console.log("Shop is closed");
//     }
// }


// kitchen();
