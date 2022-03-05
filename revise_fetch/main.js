const posts = [
    {title : 'first post', msg : 'Revise promises and fetch api'},
    {title : 'second post', msg : 'Revise async and await'}
]

let err = false;

// Let's say it takes 2 seconds to create a post
function createPost(newPost){
    return new Promise((resolve,reject) => {
        if(err == false){
            setTimeout(()=>{
                posts.push(newPost);
                resolve();
            },2000);
        }
        else{
            reject('Failed to create the post');
        }
    });
}

// Let's say it takes 1 second the get the post from the database

function getPost(){
    setTimeout(()=>{
        for(let i = 0; i < posts.length; i++){
            console.log(posts[i]);
        }
    },1000);
}

// create a new post here 

let newPost = {title : 'post three', description : 'Build projects'}

// createPost(newPost).then(getPost).catch((msg)=>console.log(msg));

// Revising fetch api

// Fetch returns a promise


// SAMPLE DEMO TO RETRIEVE TEXT FROM A TEXT FILE USING FETCH

let getTextData = () => {
    fetch('./test.txt').then((res) => res.text())
    .then((response) => console.log(response))
    .catch((err) => console.log(err))
}

let buttonText = document.getElementById('text');

// buttonText.addEventListener('click',() => getTextData());

// SAMPLE DEMO TO RETRIEVE JSON DATA FROM A JSON FILE

let getJsonData = () => {
    fetch('./main.json').then((res) => res.json())
    .then((response) => console.log(response[0].desc))
    .catch(() => console.log("something went wrong"))
}

let buttonJson = document.getElementById('json');

buttonJson.addEventListener('click',() => getJsonData());

// SAMPLE DEMO TO RETRIEVE DATA FROM AN EXTERNAL API

let apiData = () =>{
    fetch('https://api.github.com/users').then((res) => res.json())
    .then((response) => console.log(response[0].login))
    .catch(() => console.log('Error occured while fetching the data'))
}

let apiBtn = document.getElementById("api");

apiBtn.addEventListener("click",() => apiData());



