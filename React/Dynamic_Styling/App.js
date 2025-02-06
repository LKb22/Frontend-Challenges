// Dynamic Styling
// Your task is to dynamically apply a CSS class (active) to the <p>Style me</p> element in the provided React app.

// The class should be applied when the <button> is clicked for the first time.

// Important: Use React.useState() instead of just useState() as the latter can cause problems in this Udemy code environment.

import React from 'react';


function ToggleButton({ children, onSelect }) {
    return (
        <button
            onClick={onSelect}
        >
            {children}
        </button>
    );
}



// don't change the Component name "App"
export default function App() {

    const [highlighted, setHighlighted] = React.useState(false);

    function handleSelect() {
         setHighlighted(isHighlighted => !isHighlighted);
    }

    return (
        <div>
            <p className={highlighted ? 'active' : undefined}>Style me!</p>
            <ToggleButton onSelect={() => handleSelect()}>Toggle style</ToggleButton>
        </div>
    );
}
