import React from 'react';
import '../styles/Footer.css';
import Linkedin from '../images/LI-Logo.png'
import GitHub from '../images/GitHubMark32px.png'
import Geeks from '../images/Geeks.jpg'


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
    <footer style={styles.footerStyle} className="footer centered">
      <a href="/" className='room' >Copyright 2021</a>
      <a href='https://www.linkedin.com/in/todd-taylor-73a952ba' target="_blank" rel="noopener noreferrer"><img src={Linkedin} className='small room'/></a>
      <a href="https://github.com/DerTodd" target="_blank" rel="noopener noreferrer"><img src={GitHub} alt='GitHub'className="room"/></a>
      <a href="https://www.geeksforgeeks.org" target="_blank" rel="noopener noreferrer"><img src={Geeks} alt='Geeks'className="room"/></a>
    </footer>
  );
}

export default Footer;