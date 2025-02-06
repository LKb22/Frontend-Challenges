// Reacting to Events
// Your task is to work on a "User Login" component that has already been prepared by a colleague.

// The goal is to update the data stored in the already existing user object with some dummy data once the "Login" button in the App component is pressed.

// The email and password properties in the user object should be set to any non-empty string values of your choice. The loggedIn field should be set to true.

// Important: You don't have to fetch the values entered into the <input> fields - you can simply ignore those fields for now. You'll learn how to listen to keystrokes and get user input later in the course.


// Your goal is to change the email, password and loggedIn values when the button in the App component is pressed
// Change them to any values of your choice (except loggedIn => that should be changed to true)
// You DON'T need to fetch the values entered into the <input /> fields
// You'll learn about that later in the course - for the moment, those fields are just there to look good :-)
export const user = {
  email: '',
  password: '',
  loggedIn: false,
};

export function Button({ children, onSelect }) {
	return (
        <button onClick={onSelect}>{children}</button>
    )
}


// Please note: The login does not actually work!
// This exercise is just about practicing event handling
// You'll learn how to add user authentication to React apps later in the course!
function App() {
    function handleSelect() {
        user.email = "sdfs"
        user.password = "sfs"
        user.loggedIn = true
	}

  return (
    <div id="app">
      <h1>User Login</h1>
      <p>
        <label>Email</label>
        {/* You don't need to do anything with those inputs! You'll learn how to handle user input later */}
        <input type="email" />
      </p>

      <p>
        <label>Password</label>
        {/* You don't need to do anything with those inputs! You'll learn how to handle user input later */}
        <input type="password" />
      </p>
      <p id="actions">
        <Button onSelect={handleSelect}>Login</Button>
      </p>
    </div>
  );
}

export default App;
