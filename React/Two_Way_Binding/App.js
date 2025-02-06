// Two-Way-Binding
// Your task is to collect the values entered into the two input controls (<textarea> and <input>) via two-way binding.

// In addition, you should pass the collected values via the appropriate props to the already existing Review component.

// Important: In this Udemy workspace, you must use React.useState() instead of just useState()!

// The final app should allow users to enter values and then see those entered values in the Review component which is output below the input components.

import React from 'react';

import Review from './Review';

// don't change the Component name "App"
function App() {

    // Create the useState functions for the feedback and name inputs. Add an empty string as the default value
    const [feedback, setFeedback] = React.useState('');

    const [name, setName] = React.useState('');

    // Create the pointer functions for the feedback and name inputs to receive the event objects from onChange and pass their values to the useState functions.
    function handleFeedback(event) {
        setFeedback(event.target.value);
    }

    function handleName(event) {
        setName(event.target.value);
    }

  return (
    <>
      <section id="feedback">
        <h2>Please share some feedback</h2>
        <p>
          <label>Your Feedback</label>
          {/* Use onChange to collect the input values and provide a pointer function to handle the event object created by onChange.

              Now, add the value props on the textarea and input, and set their values to be the useState variables in order to 'feed' the stored values back in. This completes the two-way-binding. */}
          <textarea onChange={handleFeedback} value={feedback} />
        </p>
        <p>
          <label>Your Name</label>
          <input type="text" onChange={handleName} value={name} />
        </p>
      </section>
      <section id="draft">
        <h2>Your feedback</h2>

        <Review feedback={feedback} student={name}/>

        <p>
          <button>Save</button>
        </p>
      </section>
    </>
  );
}

export default App;
