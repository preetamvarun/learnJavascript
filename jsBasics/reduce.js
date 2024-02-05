const peopleArray = [
  { firstname: 'John', lastname: 'Doe', age: 21, profession: 'Developer' },
  { firstname: 'Jane', lastname: 'Smith', age: 30, profession: 'Designer' },
  { firstname: 'Bob', lastname: 'Johnson', age: 25, profession: 'Developer' },
  { firstname: 'Alice', lastname: 'Williams', age: 28, profession: 'Manager' },
  { firstname: 'Charlie', lastname: 'Brown', age: 30, profession: 'Designer' },
  { firstname: 'Eva', lastname: 'Clark', age: 28, profession: 'Manager' },
  { firstname: 'Michael', lastname: 'Davis', age: 35, profession: 'Analyst' },
  { firstname: 'Olivia', lastname: 'Moore', age: 25, profession: 'Developer' },
  { firstname: 'William', lastname: 'Jones', age: 35, profession: 'Analyst' }
];


// group people full names based on their profession

const map = peopleArray.reduce((dict, person) => {
    if(dict[person.profession] === undefined){
        dict[person.profession] = [person.firstname + " " + person.lastname];
    }
    else {
        dict[person.profession].push(person.firstname + " " + person.lastname);
    }
    return dict;
}, {});

console.log(map);
