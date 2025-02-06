export default function Button({ children, className, mode="filled", Icon, ...props}) {// Todo: Build this component!

  // Build the class names dynamically with string interpolation
  // For example: class="button filled-button"
  let cssClasses = `button ${mode}-button`;

  // If the button has an Icon, add the icon-button class
  if (Icon) {
      cssClasses += ' ' + 'icon-button';
  }

  // If the button has a className prop, add the className
  if (className) {
      cssClasses += ' ' + className;
  }

  // Use a props object to collect all remaining props. For example, the prop 'disabled'
  // If there is an Icon, wrap the icon with a <span className="button-icon"> to achieve the target look
  // Also wrap the children prop with a <span>
  return (
      <button className={cssClasses} {...props}>
          {Icon && (
              <span className="button-icon">
                  <Icon />
              </span>
          )}
          <span>{children}</span>
      </button>
  );
}

