import React from 'react';

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
function Card() {
  return (
    <div style={styles.card}>
      <div style={styles.heading}>Todd Taylor</div>
      <div style={styles.content}>
        For the past fifteen years, I have been utilizing my technology skills to support teachers and staff in school districts to ensure they have the best opportunities to provide students with excellent learning opportunities.  My varied background provides me with a unique set of skills that include research, problem-solving, coordination, project management, technology support, and customer service.  My positions have provided me with daily opportunities to solve complex problems while also affording me the opportunity to manage a team, create and deliver professional development, and coordinate in-depth projects with vendors.  I have also developed my planning and problem-solving skills through master scheduling, committee coordination, and inventory management.  

I also bring to the table strong computer proficiencies in both software and hardware. I am skilled in many programs including Excel, Adobe Creative Suites (Indesign, Photoshop, After Effects), Camtasia, Final Cut Pro, and Cisco Unified. Through the Full Stack Flex course, I have developed familiarity with Javascript, Git, HTML/CSS, jQuery, Bootstrap, Materialize, API design, JSON, mySQL, Sequelize, Python, Mongo DB, Express, React, and Node.
      </div>
    </div>
  );
}

export default Card;
