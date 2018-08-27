// CONST & LET
var name = 'john'; // es5 way

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

const arrowFunc3 = (name, greeting) => console.log(greeting + name); //passing more than one arg needs parenthesis

const templateString = name => consol.log(`Hello ${name}`);

// FOREACH

// MAP

// FILTER

// SPREAD

// DESTRUCTURING

// CLASSES

// SUBCLASSES

// MODULES
