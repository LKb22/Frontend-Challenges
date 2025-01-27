// import { apiKey } from "./util.js"; // With React, we do not add the .js extension

// console.log(apiKey); // We can now use the apiKey variable in this file, since we have exported and imported it. We must use the type="module" attribute in the script tag in the HTML file to use ES6 modules and make this work.

// // Importing a default export
// import apiKey from "./util.js";
// console.log(apiKey);

// Named exports
// import { apiKey, abc } from "./util.js";
// import { apiKey, abc as util} from "./util.js";
import * as util from "./util.js"; // This imports everything from util.js and stores it in the util object
console.log(util);
console.log(util.apiKey);
console.log(util.abc);

console.log("Hello from app.js"); // Can create values as you need them, or in variables, which are reusable and cleaner

// Variables using let and camelCase. let is used for variables that can change while const
let userMessage = "Hello variable from app.js";
console.log(userMessage);

// Variables using const and camelCase. const is used for variables that cannot change. To be clear that a variable should not change, use const.
const myName = "Luke";
console.log(myName);

// Operators
let result = 10 + 5;
result = result - 2;
result = result * 3;
console.log(result);
console.log(result / 3);

console.log("Hello" + " " + "World");

// Comparison operators
console.log(10 > 5);

if (10 > 5) {
	console.log("10 is greater than 5");
}

// Functions - call the function to run the code inside the function
function greet() {
	console.log("Hello from the greet function");
}
greet();
greet();
greet();

// Functions with parameters
function greetUser(name) {
	console.log("Hello " + name);
}
greetUser("Luke");

// Functions with multiple parameters
function greetUserWithAge(name, age) {
	console.log("Hello " + name + ", you are " + age + " years old.");
}
greetUserWithAge("Luke", 30);

function greetUserWithAgeValue(name, age = 30) {
	// Can use a default value
	console.log("Hello " + name + ", you are " + age + " years old.");
}
greetUserWithAgeValue("Luke");
greetUserWithAgeValue("Luke", 31); // Can still override the default value

// Return statement
function createMessage(name) {
	return "Hello " + name;
}
console.log(createMessage("Luke"));

// Arrow functions
// Arrow functions with multiple parameters must use parentheses
const createMessageArrow = (name, message) => {
	return "Hello " + name + ", you are using an " + message;
};
console.log(createMessageArrow("Luke", "Arrow function"));

// Arrow function with one parameter can omit the parentheses
const createMessageArrowOneParam = (name) => {
	return "Hello arrow with one param" + name;
};
console.log(createMessageArrowOneParam("Luke"));

// Arrow function with no parameters
const createMessageArrowNoParams = () => {
	return "Hello from the arrow function with no parameters";
};
console.log(createMessageArrowNoParams());

// Arrow function with only a return statement can omit the curly braces and return statement
const createMessageArrowReturn = (name) =>
	"Hello with no curly or return " + name;

console.log(createMessageArrowReturn("Luke"));

// Returning just an object with an arrow function requires parentheses around the object
const createObject = () => ({ name: "Luke", age: 30 });
console.log(createObject());

// Ananoymous function
export default function () {
	console.log("Hello from the anonymous function");
}

// Objects
// const person = "Luke"
// Const age = 30
const person = {
	name: "Luke",
	age: 30,
	type: "Object",
};
console.log(person);
// IMPORTANT: To access the properties of an object, use dot notation
console.log(person.age);
console.log(person.type);

// with methods
const personWithMethod = {
	name: "Luke",
	age: 30,
	greet() {
		console.log("Hello from the greet method");
		console.log("Hello, I am " + this.name); // Use this to refer to and access the properties of the object the method is in
	},
};
personWithMethod.greet();

// Blueprints for objects using classes and constructor functions
class User {
	constructor(name, age, type) {
		this.name = name;
		this.age = age;
		this.type = type;
	}

	greet() {
		console.log(
			"Hello " +
				this.name +
				" age: " +
				this.age +
				" from the " +
				this.type +
				" and constructor function"
		); // Use this to refer to and access the properties of the object the method is in
	}
}
// Use this class by instantiating it with the new keyword
const user1 = new User("Luke", 30, "Class");
console.log(user1);
console.log(user1.greet());

// Arrays - allow us to store a list of values. Arrays are very common in JavaScript and react, for example arrays or arrays and strings
const hobbies = ["Sports", "Cooking", "reading"];
console.log(hobbies);
console.log(hobbies[0]);
console.log(hobbies[1]);
console.log(hobbies[2]);

// Built-in utility methods for arrays
hobbies.push("Programming"); // Adds an element to the end of the array
console.log(hobbies);

hobbies.pop(); // Removes the last element from the array
console.log(hobbies);

hobbies.unshift("Programming"); // Adds an element to the beginning of the array
console.log(hobbies);

hobbies.shift(); // Removes the first element from the array
console.log(hobbies);

const index1 = hobbies.findIndex((hobby) => {
	// Returns the index if the element is found, otherwise returns -1 / false. Save as a variable to use the index later - eg. in console.log
	return hobby === "reading";
});
console.log(index1);

const index2 = hobbies.findIndex((hobby) => hobby === "Cooking"); // Returns the index of the element in the array
console.log(index2);

// MAP METHOD - Takes an arrow function as an input -> Takes every element in the array as an input -> Uses the arrow function to create a new array by passing every element of the original array through the function and adding them to the new array. This is common in React, for example to add content to a list.
const mapHobbiesUpper = hobbies.map((hobby) => hobby.toUpperCase()); // Returns a new array with all elements in uppercase
console.log(mapHobbiesUpper);

// Can also use map to convert elements to JS objects
const mapHobbiesObjects = hobbies.map((hobby) => ({ text: hobby })); // Returns a new array of all elements as JS objects, where every objet has a key - text - and the value is the hobby
console.log(mapHobbiesObjects);

function transformToObjects(numberArray) {
	return numberArray.map((number) => {
		return { val: number };
	});
}
console.log(transformToObjects([1, 2, 3, 4, 5]));

// DESTRUCTURING ARRAYS AND OBJECTS - Also a crucial feature in JS and React
// Arrays - allows you to extract elements from an array and store them in variables. You can come up with the variable names yourself
const myHobbies = ["Sports", "Cooking", "Reading"];
// const hobby1 = myHobbies[0];
// const hobby2 = myHobbies[1];
const [hobby1, hobby2] = myHobbies; // Destructuring an array
console.log(hobby1, hobby2);

// Objects - allows you to extract properties from an object and store them in variables. The variable names must match the property names
const userData = { userName: "Luke", userAge: 30 };
// const userName = userData.userName;
// const userAge = userData.userAge;
const { userName, userAge } = userData; // Destructuring an object
console.log(userName, userAge);

// // Desctructuring in function parameter lists
// function storeOrder(order) {
//   localStorage.setItem('id', order.id);
//   localStorage.setItem('currency', order.currency);
// }
// Instead of accessing the order properties via the "dot notation" inside the storeOrder function body, you could use destructuring. In this example, id and currency are "extracted" from the incoming order object directly in the function parameter list using curly braces and stored in local variables with the same name.
function storeOrder({ id, currency }) {
	// destructuring
	localStorage.setItem("id", id);
	localStorage.setItem("currency", currency);
}
// storeOrder still only takes one parameter in this example
storeOrder({ id: 5, currency: "USD", amount: 15.99 }); // one argument / value!

// Use spread operator ... to merge two arrays into one array. Without the ..., you would have a new array of two sub arrays
const newHobbies = ["coding"];
const mergedHobbies = [...myHobbies, ...newHobbies];
console.log(mergedHobbies); //

// Spread operator in objects
const extendedUser = {
  isAdmin: true,
  ...userData // Merge the key value pairs from the userData object into the extendedUser object
}
console.log(extendedUser)

// CONTROL STRUCTURES
// IF
const password = /*prompt*/('Your password')
if (password === "Hello") {
  console.log("Hello Works");
} else if (password === "hello") {
  console.log("hello works")
} else {
  console.log("Access denied")
}

// FOR - In JS and React, for loops are common for iterating through arrays
for (const hobby of myHobbies) {
  console.log(hobby)
}


// Pass functions as values to other functions
function handleTimeout() {
  console.log("Timed out!");
}

// ..with built-in functions
setTimeout(handleTimeout, 2000); // You pass the handleTimout as a value. If you pass it as a function handleTimout(), then that function is run immediately and its return value is passed as an arguement to the setTimeout instead of as a function itself

// ..with your own funcitons
function greeter(greetFunction) {
  greetFunction();
}

greeter(() => console.log("Hi")); // Call greeter function and pass it a function, for example a function that console logs "Hi". This function is gettin executed in the greetFunction()

// DEFINING FUNCTIONS INSIDE FUNCTIONS - Common in React
function init() {
  const message = "...";
  function greet() {
    console.log("Hi!")
  }
  greet(); // Just like with variables, eg. message here, functions declared inside of other functions are limited to the scope of that function
}

init();

// REFERENCE VS PRIMITIVE VALUES
// Objects are reference values. With primitive values, assigning a variable a new value will always overwrite the original value. However, this is different with arrays and objects (arrays are objects). You don't store the value, but instead, the address of where the value is stored in the computer's memory. It's this address that is stored in the constant. In the example below, When you call push, JS reaches out to that address, opens the value, which is the hobbies array in this case, and adds the value ("sleeping") to that array. Essentially, the array changes, but its address does not. Const technically does not mean that the value cannot be edited, but that the variable (address - using =) cannot be overwritten.
hobbies.push("sleeping");
console.log(hobbies);
