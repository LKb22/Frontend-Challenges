function collectData(event) {
  event.preventDefault();
  console.log("Form submitted");

  const currentYear = new Date().getFullYear();
  const name = document.querySelector("#name").value;
  const yearOfBirth = document.querySelector("#yearOfBirth").value;
  const age = currentYear - yearOfBirth;

  const welcomeMessage = document.querySelector("#welcomeMessage");
  let ageMessage;
  let message;

  if (age >= 30) {
    ageMessage = "grandpa!";
  } else if (age < 30) {
    ageMessage = "youngster!";
  } else {
    ageMessage = "I can't believe it.";
  }

  message =
    "<p>Hello, " +
    name +
    ", you are " +
    age +
    " years old, " +
    ageMessage +
    "</p>";

  welcomeMessage.innerHTML = message;
}

const myForm = document.querySelector("#form");
myForm.addEventListener("submit", collectData); // No brackets so function is not called immediately
