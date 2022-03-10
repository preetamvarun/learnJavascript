// Some times you need to add headers in the fetch

// Example : 

// const config = {
//     'headers':{
//         'Accept' : 'application/json'
//     }
// }

// generateJoke.addEventListener('click', () => {
//     fetch('https://icanhazdadjoke.com/', config)
//     .then((res) => res.json())
//     .then((d) => {
//         joke.textContent = d.joke;
//     })
//     .catch((err) => console.log(err))
// });


// // using async and await

// let func = async () =>{

//     // if we want to do asynchronous here we want to await until it is resolved 

//     const promise = new Promise((resolve,reject) => {
//         setTimeout(() =>{
//             resolve("hello")
//         },1000)
//     });

//     let error = false;

//     if(error){
//         await Promise.reject(new Error("Some error has occurred"));
//     }

//     else{
//         const response = await promise;
//         return response;
//     }

//     // return "hello";
// }

// // // just by adding async key word before the function it returns a promise
// // func()
// // .then(res => console.log(res));

// func().then(res => console.log(res)).catch(err => console.log(err));


// using async and await with fetch

// let getUsers = async()=>{
//     const response = await fetch("https://jsonplaceholder.typicode.com/users");
//     const data = await response.json();
//     return data;
// }

// getUsers().then(res => console.log(res));