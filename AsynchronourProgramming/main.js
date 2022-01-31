// // AJAX : Asynchronous javascript and xml (lecture - 1)

// // XHR object  : XML HTTP REQUEST OBJECT (core technology in Ajax)

// const btn = document.getElementById('button');
// const output = document.getElementById('output');


// function getData(){

//     const xhr = new XMLHttpRequest();
    
//     // OPEN THE FILE FROM WHICH YOU WANT TO GET THE DATA 

//     xhr.open('GET', './data.txt', true);

//     // first param : we are making the get request to the file
//     // second param : destination file 
//     // true : we want this to be asynchronous 

//     // when the request is processed successfully and ready to send the response 

//     xhr.onload = function(){
//         // console.log('READY STATE VALUE', xhr.readyState);
//         // READY STATE VALUE will be 4 here
//         // check the status code 
//         if(this.status === 200){
//             // This means everything went well 
//             output.innerHTML = `<p>${this.responseText}</p>`;
//             // console.log("hello");
//         }
//     }

//     // console.log("test the string");

//     /*

//     If we have to fetch the day based on ready state values the we
//     use xhr.onreadystatechange

//     READY STATE VALUES :

//     0:  request not initialized 
//     1 : server connection established 
//     2 : request received 
//     3 : processing the request 
//     4 : request finished and ready to send the response 

//     */

//     // xhr.onreadystatechange = function(){
//     //     if(this.readyState === 2){
//     //         console.log('request received');
//     //     }
//     //     else if(this.readyState === 3){
//     //         console.log('processing the request');
//     //     }
//     //     else if(this.status === 200 && this.readyState === 4){
//     //         output.innerHTML = `<p>${this.responseText}</p>`;
//     //     }
//     // }

//     // Finalizing the process 
//     xhr.send();
// }

// btn.addEventListener('click', getData);

// // /*
// // SOME IMPORTANT HTTP STATUS CODES
// // 200 : "OK"
// // 404 : "NOT FOUND"
// // 403 : "FORBIDDEN"
// // */


// // // Working with AJAX AND JSON (lecture-2)

// const c1 = document.getElementById('cric');
// const c2 = document.getElementById('crics');


// c1.addEventListener('click', function(){
//     const xhr = new XMLHttpRequest();
//     xhr.open('GET','customer.json', true);
//     xhr.onload = function(){
//         if(this.status === 200){
//             const result = JSON.parse(this.responseText);
//             document.getElementById('output-1').innerHTML = 
//             `<ul>
//             <li>${result.id}</li>
//             <li>${result.name}</li>
//             <li>${result.age}</li>
//             <li>${result.company}</li>
//             </ul>
//             `
//         }
//     }
//     xhr.send();
// });


// function getMore(){
//     const xhr = new XMLHttpRequest();
//     xhr.open('GET','customers.json',true);
//     xhr.onload = function(){
//         if(this.status === 200){
//             const results = JSON.parse(this.responseText);
//             results.forEach(function(result){
//                document.getElementById('output-2').innerHTML
//                +=  `<ul>
//                <li>${result.id}</li>
//                <li>${result.name}</li>
//                <li>${result.age}</li>
//                <li>${result.company}</li>
//                </ul>
//                `;
//             });
//         }
//     }
//     xhr.send();
// }

// c2.addEventListener('click',getMore);


// // WORKING WITH DATA FROM AN EXTERNAL API (lecture-3)

// const count = document.getElementById('count');
// const generate = document.getElementById('generate');
// const showOutput = document.getElementById('resultDiv');


// generate.addEventListener('click', function(e){
//     const xhr = new XMLHttpRequest();
//     xhr.open('GET',`https://api.icndb.com/jokes/random/${count.value}`,true);
//     // console.log('Getting Jokes...');
//     xhr.onload = function(){
//         if(this.status === 200){
//             let result = JSON.parse(this.responseText);
//             if(result.type === 'success'){
//                 for(let i = 0; i < result.value.length; i++){
//                     showOutput.innerHTML += `<li>${result.value[i].joke}</li>`
//                 }
//             } else{
//                 showOutput.innerHTML = "something went wrong";
//             }
//         }
//     }
//     xhr.send();
//     e.preventDefault();
// });


// what is a call back function in javascript

// setTimeout(function(){
//     console.log('Timer');
// },2000);

// function x(y){
//     console.log('x');
//     y();
// }

// // Here y is the call back function since it is passed as a parameter to another function

// x(function y(){
//     console.log('y');
// });


// // call backs are those functions which are passed in as parameters to another functions 

// function assembleAvengers(callback){
//     setTimeout(function x(){
//         console.log("Avengers arrived");
//         callback(); // by doing so avengers will arriver sooner than thanos
//     }, 2000);
    
// }


// function y(){
//     console.log("Thanos arrived");
// }

// assembleAvengers(y);

// const posts = [
//     {
//         title : 'First post',
//         description : 'This is first post'
//     },
//     {
//         title : 'Second post',
//         description : 'This is second post'
//     }
// ]


// function createPost(post,callbackfunction){
//     setTimeout(function(){
//         posts.push(post);
//         // here the call back function is the getPosts function
//         callbackfunction();
//     }, 2000)
// }

// function getPosts(){
//     setTimeout(function(){
//         let output = '';
//         posts.forEach(function(post){
//             output += `<li>${post.title}</li>`
//         });
//         document.body.innerHTML = output;
//     },1000);
// }

// const newPost = {
//     title : 'Third post',
//     description : 'This is third post'
// }

// createPost(newPost,getPosts);


// const x = new Data();


// x.fetchData('https://jsonplaceholder.typicode.com/posts',function(error,response){
//     if(error){
//         console.log(error + response);
//     } else{
//         console.log(response);
//     }
// }
// );


// // GET A SINGLE POST (HERE WE ARE GETTING 70th post) 

// x.fetchData('https://jsonplaceholder.typicode.com/posts/70',function(error,response){
//     if(error){
//         console.log(error + response);
//     } else{
//         console.log(response);
//     }
// }
// );


// MAKE A POST REQUEST 

// const newData = {
//     'title' : 'This is my own title',
//     'comment' : "This is my own comment"
// };


// x.addNewData('https://jsonplaceholder.typicode.com/posts', newData, function(err,response){
//     if(err){
//         console.log(err + response);
//     } else{
//         console.log(response);
//     }
// });


// MAKE A PUT REQUEST 

// x.updateData('https://jsonplaceholder.typicode.com/posts/35', newData, function(err,response){
//     if(err){
//         console.log(err + response);
//     } else{
//         console.log(response);
//     }
// });


// MAKE A DELETE REQUEST

// x.deleteData('https://jsonplaceholder.typicode.com/posts/27', function(err,response){
//     if(err){
//         console.log(err + response);
//     } else{
//         console.log(response);
//     }
// })


// WORK WITH PROMISES 

// let p = new Promise(function(resolve,reject){
//     let keepYourWord = false;
//     keepYourWord ? resolve("we will trust you") : reject("we won't trust you");
// });

// p.then(function(message){
//     console.log(`you've kept your word. ${message}.`);
// }).catch(function(message){
//     console.log(`you didn't keep your word. ${message}.`);
// });


// const posts = [
//     {title : 'First post',description : 'This is first post'},
//     {title : 'Second post',description : 'This is second post'}
// ]

// function createPost(post){
//     return new Promise(function(resolve,reject){
//         setTimeout(function(){
//             posts.push(post);
//             // let err = true;
//             let err = false;
//             err ? reject('Something went wrong') : resolve();
//         }, 2000)
//     });
// }

// function getPosts(){
//     setTimeout(function(){
//         let output = '';
//         posts.forEach(function(post){
//             output += `<li>${post.title}</li>`
//         });
//         document.body.innerHTML = output;
//     },1000);
// }

// const newPost = {
//     title : 'Third post',
//     description : 'This is third post'
// }

// createPost(newPost).then(getPosts).catch(function(message){
//     console.log(message);
// });

// WORK WITH FETCH API

// FETCH returns a promise 

// const textBtn = document.getElementById('text');

// textBtn.addEventListener('click', getTextData);


// function getTextData(){
//     fetch('https://api.github.com/users').then(function(msg){
//        msg.json().then(function(msg){
//            console.log(msg)
//        })
//     }).catch(function(err){
//         console.log(err);
//     })
// }

// WORK WITH ARROW FUNCTIONS

// Here we are returning 'Hi there!'

// const greet = () => 'Hi there!'

// console.log(greet());

// const x = () => console.log('x is an alphabet');

// x();


// const sum = (x,y) => x + y;

// console.log(sum(2,3));

// // For single parameters we don't even need paranthesis

// const multiply = x => x * 10;

// console.log(multiply(10));


// const x = () => ({cric : 'vk'})

// console.log(x());

// const arr = [1,2,3,4,5];
// const names = ['john','smith','williams','rafel','maguire','david warner']

// arr.forEach((a)=>console.log(a));

// const nameLengths = names.map(function(name){
//     return name.length;
// });

// const nameLengths = names.map( (name) => name.length );

// const nameLengths = names.map( name =>  name.length );

// console.log(nameLengths);


// const textBtn = document.getElementById('text');

// textBtn.addEventListener('click', getTextData);

// function getTextData(){
//     fetch('https://api.github.com/users').then(function(msg){
//        msg.json().then(function(msg){
//            msg.forEach(function(x){
//                console.log(x.login);
//            })
//        })
//     }).catch(function(err){
//         console.log(err);
//     })
// }

// // REWRITING FETCH USING ARROW FUNCTIONS

// function getTextData(){
//     fetch('https://api.github.com/users')
//     .then(msg => msg.json()
//     .then(msg => msg.forEach(x => console.log(x.login))))
//     .catch(err => console.log(err))
// }

// const url = 'https://jsonplaceholder.typicode.com/todos';

// const x = new HTTP();

// const userData = {
//     "title": "this is my custom title",
//     "completed": false
// }

// x.getData(url)
// .then(todos => todos.forEach(todo => console.log(todo.title)))
// .catch(err => console.log(err));

// x.postData(url,userData)
// .then(userData => console.log(userData))
// .catch(err => console.log(err));

// x.updateData('https://jsonplaceholder.typicode.com/todos/125',userData)
// .then(userData => console.log(userData))
// .catch(err => console.log(err));

// x.deleteData('https://jsonplaceholder.typicode.com/todos/123')
// .then(data => console.log(data))
// .catch(err => console.log(err));