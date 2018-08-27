// CONST & LET
var animal = 'cat'; // es5 way

/*Used for block level scoping. Use const unless 
you want to reassign it later*/

const age = 12; // 'const' cannot be reassigned
let name = 'jack';

/*Even though we used 'const' we can still change
the objects inside properties. We cannot however
recreate the object.*/
const person = {
  name: 'anna',
  age: 33
};

person.name = 'Mohs';
console.log(person.name);

/*Same for arrays.*/
const nums = [1, 2, 3, 4];
nums.push(5);

console.log(nums);

// ARROW FUNCTIONS

//normal function
function sayHello() {
  console.log('Hello');
}
//es6 arrow function
const arrowFunc = () => {
  console.log('Hello');
};

const arrowFunc2 = () => console.log('Hello'); //if we have only return val

const arrowFunc3 = name => console.log('Hello ' + name); //passing one arg does not need parenthesis

const arrowFunc4 = (name, greeting) => console.log(greeting + name); //passing more than one arg needs parenthesis

const templateString = name => consol.log(`Hello ${name}`);

// FOREACH
/*Loop through an array to do something for each iteration.*/
const fruits = ['Apples', 'Oranges', 'Grapes'];

fruits.forEach((fruit, index) => {
  console.log(fruit);
});

// MAP
/*Returns array that you can change each item in the array however
you want. In this example we are removing the last letter of the above
fruits.*/
const singleFruit = fruits.map(fruit => fruit.slice(0, -1));

console.log(singleFruit);

// FILTER
/*Used to return an array with things filtered out. We are making a copy
of the 'person' array and filtering out person with 'id' of 2.*/
const people = [
  { id: 1, name: 'Karen' },
  { id: 2, name: 'Bob' },
  { id: 3, name: 'Sharron' }
];

const people2 = people.filter(person => person.id != 2);

console.log(people2);

// SPREAD

// DESTRUCTURING

// CLASSES

// SUBCLASSES

// MODULES
