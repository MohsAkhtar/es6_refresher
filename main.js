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

const people2 = people.filter(person => person.id !== 2);

console.log(people2);

// SPREAD
/*Allows us to spread values out whether they are are array elements or
object properties. Spread operator uses '...' notation. So in 'arr2' we
are adding the values from 'arr1' and then the value of '4'.
In 'arr3' we are combining filter to filter out the value of 2 and then
adding the values of 'arr'.*/

const arr = [1, 2, 3];
const arr2 = [...arr, 4];
const arr3 = [...arr.filter(num => num !== 2)];

console.log(arr2);

/* We can do the same with objects. Here we are copying 'person' contents
to 'person2' then adding the 'email' field.*/
const person1 = {
  name: 'Brad',
  age: 35
};

const person2 = {
  ...person1,
  email: 'brad@email.com'
};

console.log(person2);

// DESTRUCTURING
/*Used to basically pull values out of objects and arrays. Below we are
pulling out the hobbies and address from the 'profile' object. And also
the street from within the 'address' of the 'profile'.*/

const profile = {
  name: 'John Doe',
  address: {
    street: '40 Main St',
    city: 'Boston'
  },
  hobbies: ['movies', 'music']
};

const { address, hobbies } = profile;
const { street } = profile.address;
console.log(address.street, hobbies[0]);
console.log(street);

// CLASSES
/*Inside class we have properties and methods. We need a constructor
which automatically instantiates when the class is initialised.*/
class Person {
  constructor() {
    console.log('ran');
  }
}

const person3 = new Person();
const person4 = new Person();

// Remember 'this' pertains to the current object
class Person2 {
  constructor(name) {
    this.name = name;
  }
}

const person5 = new Person2('Jon');
console.log(person5.name);

// To put in methods
class Person3 {
  constructor(name) {
    this.name = name;
  }

  greet() {
    return `Hello, my name is ${this.name}`;
  }
}

const person6 = new Person3('Anna');
console.log(person6.greet());

// SUBCLASSES
/*Means we can extend another class. To inherit properties we use
'super'.*/
class Customer extends Person3 {
  constructor(name, balance) {
    super(name);
    this.balance = balance;
  }

  info() {
    return `${this.name} owes $${this.balance}.00`;
  }
}

const customer1 = new Customer('Kevin', 300);
console.log(customer1.info());

// MODULES
