// Outputting Dynamic Content
// Your task is to fill the already existing User component with some life! You should output the user's first name and last name (stored in the also already existing userData object) inside of the User component's <h2> element.

// In addition, you should output the title (also stored in userData) in the <p> element inside the User component.

// You're not allowed to copy & paste the values into the component.

import React from 'react';

export const userData = {
  firstName: 'Maximilian', // feel free to replace the name value
  lastName: 'Schwarzmüller', // feel free to replace the name value
  title: 'Instructor', // feel free to replace the title value
};

// Edit the User component code to output the userData data
export function User() {
  return (
    <div id="user" data-testid="user">
      <h2>
        {userData.firstName} {userData.lastName}
      </h2>
      <p>{userData.title}</p>
    </div>
  );
}

// DON'T edit the App component code
function App() {
  return (
    <div id="app">
      <h1>Time to Practice</h1>
      <p>Welcome on board of this course! You got this 💪</p>
      <User />
    </div>
  );
}

export default App;
