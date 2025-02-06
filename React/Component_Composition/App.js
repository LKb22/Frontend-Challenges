// Component Composition
// Your task is to create a reusable Card component that takes a name prop as an input and, in addition, can be wrapped around any JSX code.

// Use the already existing Card.js file to create the Card component in there. You can add the card CSS class to the main wrapping element in that component for some styling.

// The name prop should be output as a title inside the Card component, the wrapped JSX code should be output below that title.

/* For example, the final Card component, should be usable like this:

   <Card name="Maria Miles">
     <p>
       Maria is a professor of Computer Science at the University of Illinois.
     </p>
     <p>
       <a href="mailto:blake@example.com">Email Maria</a>
     </p>
   </Card>

*/

// You can, but don't have to, tweak and edit the JSX code returned by the App component.

import Card from './Card';

function App() {
  return (
    <div id="app">
      <h1>Available Experts</h1>
      <Card name="Anthony Blake">
        <p>
          Blake is a professor of Computer Science at the University of
          Illinois.
        </p>
        <p>
          <a href="mailto:blake@example.com">Email Anthony</a>
        </p>
      </Card>

      <Card name="Maria Miles">
        <p>
          Maria is a professor of Computer Science at the University of
          Illinois.
        </p>
        <p>
          <a href="mailto:blake@example.com">Email Maria</a>
        </p>
      </Card>
    </div>
  );
}

export default App;
