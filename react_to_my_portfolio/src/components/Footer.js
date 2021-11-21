import React from 'react';
import '../styles/Footer.css';

// By importing the Navbar.css file, it is added to the DOM whenever this component loads

// We can also style a component inside of its JavaScript file by adding style properties to its rendered elements
// Unlike regular HTML, a JSX style property must be an object instead of a string
// On a style object, we camelCase all property names, and put all of the values in quotes
// Non quoted values default to "pixels", e.g. height, margin, padding

const styles = {
  footerStyle: {
    background: 'blue',
    justifyContent: 'flex-end',
  },
};

// We use JSX curly braces to evaluate the style object on the JSX tag

function Footer() {
  return (
    <footer style={styles.footerStyle} className="footer">
      <a href="/">Copyright 2021</a>
    </footer>
  );
}

export default Footer;