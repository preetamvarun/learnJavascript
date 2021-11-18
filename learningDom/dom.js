// let val;

// /* Working with html tags using document object */
// val = window.document;
// val = window.document.all; // gives us all the tags from top to bottom
// val = window.document.all[0]; // getting a specific tag
// val = window.document.all[3]; // getting a specific tag
// val = window.document.all[12]; // getting a specific tag


// /* Working some more attributes of document object */
// val = window.document.head;
// val = window.document.body;
// val = window.document.doctype;
// val = window.document.characterSet;
// val = window.document.contentType;
// val = window.document.domain;
// val = window.document.url;

// /* Selecting forms with document object */
// val = window.document.forms;
// val = window.document.forms[0];
// val = window.document.forms[0].id;
// val = window.document.forms[0].innerHTML;
// val = window.document.forms[0].innerText;
// val = window.document.forms[0].method;
// val = window.document.forms[0].action;

// /* Selecting links with document object */
// val = window.document.links;
// val = window.document.links[0];
// val = window.document.links[0].innerText;
// val = window.document.links[0].innerHTML;
// val = window.document.links[0].className;
// val = window.document.links[0].classList;
// val = window.document.links[0].classList[0];
// val = window.document.links[0].classList[1];

// /* Selecting images using document object */
// val = window.document.images;

// /* Selecting scripts using document object */
// val = window.document.scripts;
// val = window.document.scripts[2];
// val = window.document.scripts[2].getAttribute('src');

// /* Converting html collection into array*/

// let vArray = Array.from(document.scripts);


// vArray.forEach(function(script){
//     console.log(script);
// });

// console.log(val);

/*

In vanilla javascript there are two types of selectors.
Single element selector and multiple element selector.

*/

/* Working with single element selectors */

// Selecting elements by ID

// let tasks = document.getElementById('task-title');

// tasks.style.backgroundColor = "#333";
// tasks.style.color = "white";
// tasks.style.padding = "5px";
// tasks.style.marginLeft = "2px";
// tasks.innerText = "My tasks";
// tasks.innerHTML = '<span style= "color : red" >Task List</span>';

// Working with query selector

// let task = document.querySelector('h5');
// task = document.querySelector('#task-title');

// let listItem = document.querySelector('.collection-item');

// listItem.style.color = 'grey'; // works only on first element with class .collection-item

// document.querySelector('ul li:last-child').style.color = 'blue';
// document.querySelector('ul li:nth-child(4)').style.backgroundColor='violet';
// document.querySelector('ul li:nth-child(odd)').style.backgroundColor='red';
// document.querySelector('ul li:nth-child(even)').style.backgroundColor='red';

// The above two statements doesn't work as we are working with 
// single element selectors

// console.log(listItem);


/* Working with multiple element selectors */

// a) Returns a html collection (can be converted into array though)
// b) Returns a node list (no need to convert it into an array)

// let listItems = document.getElementsByClassName('collection-item'); // This is a global scope
// console.log(listItems);

// Selecting multiple elements by using tags

// tagElements = document.getElementsByTagName('li');
// console.log(tagElements); // RETURNS A HTML COLLECTION  

// Local scope (targeting class names inside ul tag)
// let items =  document.querySelector('ul').getElementsByClassName('collection-item');
// console.log(items); // RETURNS A HTML COLLECTION

// arrItems = Array.from(items);

// let ITEMS = document.querySelectorAll('ul li');
// console.log(ITEMS); // RETURNS A NODE LIST

// arrItems.forEach(function(arrItem,index){
//     if(index % 2 != 0){
//         arrItem.style.background = 'red';
//         arrItem.innerText = "Odd Item";
//     }
//     else{
//         arrItem.style.background = 'orange';
//         arrItem.innerText = "Even Item";
//     }
// });


/* TRAVERSING THE DOM */

// Dealing with parents and childrens with whatever we select 

// let val;

// val = document.querySelector('ul');

// console.log(val.parentElement);

// console.log(val.previousSibling);
// console.log(val.nextSibling);

// console.log(val.previousElementSibling);

// listItem = document.querySelector('ul.collection li.collection-item');

// Getting the child nodes of the ul

// let ex;

// children = val.childNodes;
// children = val.children; // This gives just the elements.

// console.log(children);
// console.log(children[0].nodeName);
// console.log(children[0].nodeType);
// console.log(children[1].nodeType);
// console.log(children[3].nodeType);

/*

-- Node Types --

1. Element 
2. Attribute (Deprecated)
8. Comment
9. Document
10. Doctype
3. Text Node

*/

// ex = val.children;

// console.log(ex);

// we can even get the children of children

// children[0].children[0].id = 'test-id';
// children[0].children[0].style.color = 'red';

// console.log(children[0].children[0]);

// console.log(val.firstElementChild); // gives the first element child
// console.log(val.firstChild); // behaves just like childNodes (returns the text node in this case)

// console.log(val.lastChild);
// console.log(val.lastElementChild);

// console.log(val.childElementCount); // counting child elements

// console.log(val.parentNode);
// console.log(val.parentElement);

/* CREATING ELEMENTS */


// We can create an element and can add it to the dom.


// // Creating a new list item 

// const newListItem = document.createElement('li');

// newListItem.className = 'collection-item';

// // newListItem.innerHTML = 'List Item';

// // Another way of doing line 209

// // first create a text node with text List Item

// const text = document.createTextNode('New List Item');

// // To append this text in newListItem 

// newListItem.appendChild(text);


// // Creating a link inside newListItem 

// const link = document.createElement('a');

// link.className = "delete-item secondary-content";

// link.innerHTML = '<i class="fa fa-remove"></i>';

// link.setAttribute('href','#');

// newListItem.appendChild(link);

// Now updating the UI

// const ul = document.querySelector('ul.collection').appendChild(newListItem);

// console.log(ul);


/* Removing and replacing elements */

// Try replacing all the list items as list items {number based on index}

// const listItems = document.querySelectorAll('li.collection-item');

// const length = document.querySelector('ul.collection').childElementCount;

// let unOrderedList = document.querySelector('ul.collection');

// Create new list items

// for(let i = 0; i < length ; i++){

//     const newListItem = document.createElement('li');

//     // Add a class name to the newListItem
//     newListItem.className = 'collection-item';

//     // create textContent within the newListItem
//     newListItem.appendChild(document.createTextNode(`List Item Number : ${i+1}`));

//     // Now get the old list item
//     const oldListItem = document.querySelectorAll('li.collection-item')[i];

//     // Now get the parent element for the list items and replace child

//     unOrderedList.replaceChild(newListItem,oldListItem);
// }

// Now try replacing tasks heading

// First of all create a new element h2 

// const newHeading = document.createElement('h4');

// newHeading.id = 'task-title';
// newHeading.appendChild(document.createTextNode('New Heading'));

// // console.log(newHeading);

// // Get the old heading

// const oldHeading = document.getElementById('task-title');
// // console.log(oldHeading);

// // Now get the parent element for the heading

// const parentHeadingElement = document.getElementById('task-title').parentElement;

// // console.log(parentHeadingElement);

// parentHeadingElement.replaceChild(newHeading,oldHeading);


// Add and remove a new dummy list item

// First of all add a new dummy list item

// const newDummyListItem = document.createElement('li');
// newDummyListItem.className = 'collection-item';
// newDummyListItem.appendChild(document.createTextNode('Dummy List Item Number : '+ 7));

// // Update the UI
// unOrderedList.appendChild(newDummyListItem);

// Remove it as a child of unOrderedList

// document.querySelector('ul.collection').removeChild(document.querySelectorAll('li.collection-item')[6]);

// Now remove the newDummyListItem

// document.querySelectorAll('li.collection-item')[6].remove(); // Remove list item

/* CLASSES AND ATTRIBUTES */

// // Working with classes

// let value;

// value = document.querySelectorAll('li.collection-item')[0].classList;
// value.add('test-class');
// value.remove('test-class');
// console.log(value);

// Working with attributes 

// let val,link;

// link = document.querySelector('li').lastElementChild;

// val = link.getAttribute('href');
// link.setAttribute('href','https://www.google.com');
// link.setAttribute('href','#');
// link.setAttribute('title','Google');
// link.removeAttribute('title');
// console.log(link.hasAttribute('title'));

// console.log(link);
// console.log(val);


/* Event Listners and Event Objects */

// let btn = document.querySelector('div.card-content').lastElementChild;

// btn.addEventListener('click', onClick);

// function onClick(e){ // e is the event object
//     console.log('button is clicked');
//     e.preventDefault();
// }

// practice 

// Add "New List Item" after clicking "ADD TASK" button

/*

let btn = document.querySelector('div.card-content').lastElementChild;

btn.addEventListener('click',addItem);

function addItem(e){ 

    // create a new list item element
    const newListItem  = document.createElement('li');
    newListItem.className = 'collection-item';
    newListItem.innerHTML = 'New List Item';

    // create a link
    const link = document.createElement('a');
    link.setAttribute('href',"#");
    link.className = 'delete-item secondary-content';
    link.innerHTML = '<i class="fa fa-remove"></i>';

    // append link to the newListItem
    newListItem.appendChild(link);

    // get the parent element to update the ui
    const parentElement = document.querySelector('li.collection-item').parentElement;
    parentElement.appendChild(newListItem);

    e.preventDefault();
}


// Delete the list item when the x icon is pressed

// Get the link

let links = document.querySelectorAll('a.delete-item.secondary-content');
let listItems = document.querySelectorAll('li.collection-item');

// console.log(listItems);
// console.log(links);

for(let i = 0; i < links.length; i++){
    links[i].addEventListener('click', function(e){
        listItems[i].remove();
        e.preventDefault();
    });
}


// remove all the list items when clear tasks button is pressed 

let clearTasksBtn = document.querySelector('div.card-action').lastElementChild;

clearTasksBtn.addEventListener('click',clearAllElements);

function clearAllElements(e){
    for(let i = 0; i < listItems.length ;i++){
        listItems[i].remove();
    }
    e.preventDefault();
}

*/

/* Mouse Events */

// const heading = document.querySelector('div.card-action h5');
// const mainCard = document.querySelector('div.card-action');
// const clearTasks = document.querySelector('div.card-action').lastElementChild;

// mainCard.addEventListener('click',runEvent);
// mainCard.addEventListener('dblclick',runEvent);
// mainCard.addEventListener('mousemove',runEvent);
// mainCard.addEventListener('mouseenter',runEvent);
// mainCard.addEventListener('mouseleave',runEvent);
// clearTasks.addEventListener('mouseup',runEvent);
// clearTasks.addEventListener('mousedown',runEvent);
// mainCard.addEventListener('mouseover',runEvent);
// mainCard.addEventListener('mouseout',runEvent);

// function runEvent(e){
//     // heading.textContent = `${e.offsetX} + ${e.offsetY}`;
//     // mainCard.style.backgroundColor = `rgb(${e.offsetX},${e.offsetY},30)`;

//     console.log('EVENT TYPE : '+ e.type);
//     e.preventDefault();
// }

// console.log(heading);
// console.log(mainCard);

/* Keyboard Events */

// const input = document.getElementById('task');
// const form = document.getElementById('task-form');
// form.addEventListener('submit',runEvent);
// input.addEventListener('keydown',runEvent);
// input.addEventListener('keyup',runEvent);
// input.addEventListener('keypress',runEvent);

// function runEvent(e){
//     console.log(`Event type : ${e.type}`);    
//     e.preventDefault();
// }

// // console.log(input);


/*Event Bubbling And Delegation*/

// // Event Bubbling 

// const span = document.querySelector('.card-title');
// const cardContent = document.querySelector('.card-content');

// span.addEventListener('click', eventFunction);
// cardContent.addEventListener('click', eventFunction); // This event bubbles up for card-content div as well
// document.querySelector('body').addEventListener('click',eventFunction);

// // This event triggers for .card-title parents as well.
// function eventFunction(e){
//     console.log("Event type : "+ e.type);
//     e.preventDefault();
// }

// console.log(span);


// // Event Delegation 

// document.querySelector('body').addEventListener('click',deleteItem);

// function deleteItem(e){
//     if(e.target.className === 'fa fa-remove'){
//         e.target.parentElement.remove();
//     }
//     e.preventDefault();
// }


// Local & Session Storage

// Working with local storage (stays inside the browser until we remove it manually or programatically)

// localStorage.setItem('name','bitLegion');
// localStorage.setItem('age',22);
// nameVal = localStorage.getItem('name');
// console.log(nameVal);

// localStorage.removeItem('name');

// Clearing local storage
// localStorage.clear();

// let tasks = [];

// document.querySelector('form').addEventListener('submit',
// function(e){
//     const task = document.getElementById('task').value;
//     document.getElementById('task').value = '';
//     tasks.push(task);
//     console.log(tasks);
//     localStorage.setItem('toDo',JSON.stringify(tasks));
//     e.preventDefault();
// });

// let val = JSON.parse(localStorage.getItem('toDo'));

// val.forEach(function(task){
//     console.log(task);
// });

// // tasks = ['a']

// // toDo : ['a']








