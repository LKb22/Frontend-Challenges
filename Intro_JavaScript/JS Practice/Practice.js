/* Multiple line
comment
*/

// line comment
// Numerals = Numbers ; Literals = Text in Quotations (can also be digits as a text)

console.log("Hello");
console.log("How are you?");
console.log(2);
console.log("2 Hello's");

// We can also create variables
// const message1 = "Hi";
const message1 = "Hi Hi";
console.log(message1);

const hello1 = "Hello";
console.log(hello1);

const hello2 = "Hello";
const greeting = hello2;
console.log(greeting);

const intro = "Hello, my name is ";
const name1 = "Luke";
const age = 29;

const messageintro = intro + name1 + " and I am " + age + " years old.";
console.log(messageintro);

const math = 35 * 2;
console.log(math);

const message2 = 'I am saysing "hi"';
console.log(message2);

const num = 23;
console.log(num);

const activet = true;
const activef = false;

// Functions
function message() {
  const greeting = "Good morning";
  const antigreeting = "Don't talk to me";
  const happy = true;

  if (happy == true) {
    console.log(greeting);
  } else {
    console.log(antigreeting);
  }
}
message();

const names = ["luke", "franzi", "charlie"];
function messagename(name) {
  console.log("Hello, " + name);
}
names.forEach(function (value) {
  messagename(value);
});

const car = {
  make: "ford",
  motor: "electric",
  speed_up: function () {
    console.log("brrrmmm");
  },
};
// In console: car.make ; car.motor ; car.speed_up();

// DOM Manipulation
const header = document.querySelector("h1");
console.log(header);
header.textContent = "Hello JavaScript";

// Event Listener
function changeColor() {
  this.classList.toggle("cambia)");
}
document.querySelector("body").addEventListener("click", changeColor);


// == is to compare the value, === is to compare the value and the data type
console.log(1 == "1");
console.log(1 === "1");
console.log(1 != "1");
console.log(1 !== "1");

if (1 === 1) {
    console.log('Obviously');
}

/*
You can also access and manipulate element values. For example, the header 1:
    const header = document.querySelector("h1");
    console.log(header);
    header.textContent = "Hello JavaScript";
*/

/*
function changeColor() {
  this.classList.toggle("change");
}
document.querySelector("body").addEventListener("click", changeColor);
*/
