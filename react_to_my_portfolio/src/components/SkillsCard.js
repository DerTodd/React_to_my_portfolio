import React from 'react';
import '../styles/AboutMe.css'
import Button from 'react-bootstrap/Button';


// We declare an object called styles that will contain a few objects for card and heading styles
// Notice that each key lists CSS styles in camel case
const styles = {
  card: {
    margin: 20,
    background: '#e8eaf6',
  },
  heading: {
    background: '#3f51b5',
    minHeight: 50,
    lineHeight: 3.5,
    fontSize: '1.2rem',
    color: 'white',
    padding: '0 20px',
  },
  content: {
    padding: 20,
  },
};

// In `Card`, we can assign a style from an object by using curly braces
// We are assigning the card, heading, and content all from our `style` object
function SkillsCard() {
  return (
    <div style={styles.card}>
        <div style={styles.heading}>Todd Taylor</div>
        <div style={styles.content}>
            <ul>
                <li><Button variant="warning">JavaScript</Button></li>
                <li><Button variant="warning">API</Button></li>
                <li><Button variant="warning">HTML/CSS</Button></li>
                <li><Button variant="warning">React</Button></li>
                <li><Button variant="warning">Node JS</Button></li>
                <li><Button variant="warning">Express JS</Button></li>
                <li><Button variant="info">Bootstrap</Button></li>
                <li><Button variant="info">Materialize</Button></li>
                <li><Button variant="success">mySQL</Button></li>
                <li><Button variant="success">mySQL Workbench</Button></li>
                <li><Button variant="success">JawsDB</Button></li>
                <li><Button variant="success">Sequelize</Button></li>
                <li><Button variant="danger">MongoDB</Button></li>
                <li><Button variant="danger">Robo 3T</Button></li>
                <li><Button variant="danger">Moongoose</Button></li>
                <li><Button variant="danger">MongoDB Atlas</Button></li>
                <li><Button variant="danger">GraphQL</Button></li>
                <li><Button variant="danger">MERN Stack</Button></li>
                <li><Button variant="dark">Heroku</Button></li>
                <li><Button variant="dark">GitHub</Button></li>
                <li><Button variant="secondary">Handlebars</Button></li>
                <li><Button variant="secondary">MVC</Button></li>

            </ul>
        
        </div>
    </div>
  );
}

export default SkillsCard;