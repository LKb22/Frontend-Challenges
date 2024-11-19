/* Multiple line comment */
// line comment
// Numerals = Numbers ; Literals = Text in Quotations (can also be digits as a text)

console.log("Hello");
console.log("How are you?");
console.log(2);
console.log("2 Hello's");

// We can also create variables
var message1 = "Hi";
var message1 = "Hi Hi";
console.log(message1);

var hello = "Hello";
console.log(hello);

var intro = "Hello, my name is ";
var name1 = "Luke";
var age = 29;

var messageintro = intro + name1 + " and I am " + age + " years old.";
console.log(messageintro);

var math = 35 * 2;
console.log(math);

var message2 = 'I am saysing "hi"';
console.log(message2);

var num = 23;
console.log(num);

var activet = true;
var activef = false;

function message() {
  var greeting = "Good morning";
  var antigreeting = "Don't talk to me";
  var happy = true;

  if (happy == true) {
    console.log(greeting);
  } else {
    console.log(antigreeting);
  }
}

var names = ["luke", "franzi", "charlie"];
function messagename(name) {
  console.log("Hello, " + name);
}
names.forEach(function (value) {
  messagename(value);
});

var car = {
  make: "ford",
  motor: "electric",
  speed_up: function () {
    console.log("brrrmmm");
  },
};
// In console: car.make ; car.motor ; car.speed_up


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
    var header = document.querySelector("h1");
    console.log(header);
    header.textContent = "Hello JavaScript";
*/

/*
function changeColor() {
  this.classList.toggle("change");
}
document.querySelector("body").addEventListener("click", changeColor);
*/