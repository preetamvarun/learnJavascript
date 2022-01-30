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


