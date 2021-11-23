import React , { Component }from 'react';
import '../styles/Section.css';
import FoodBuzz from '../images/FoodBuzz.jpg'
import Planner from '../images/Planner.jpg'
import Sweeper from '../images/Sweeper.jpg'
import Weather from '../images/Weather.png'
import Bottled from '../images/Welcome_Screen.jpg'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import GitHub from '../images/GitHubMark32px.png'


// By importing the Section.css file, it is added to the DOM whenever this component loads

// We can also style a component inside of its JavaScript file by adding style properties to its rendered elements
// Unlike regular HTML, a JSX style property must be an object instead of a string
// On a style object, we camelCase all property names, and put all of the values in quotes
// Non quoted values default to "pixels", e.g. height, margin, padding

const styles = {
  sectionStyles: {
    background: 'white',
    padding: '0',
  },
};

// We use JSX curly braces to evaluate the style object on the JSX tag

function Section() {
  return (
    <div>
    <section style={styles.sectionStyles} className="container-fluid">
      <h2>Work</h2>
        <Container id="samples" style={styles.sectionStyles} className="mb-4 bg-light rounded-3">
            
                    <a href="https://dertodd.github.io/Project_one_The_Survivors/index.html"><img src={FoodBuzz} className="img-fluid rounded hover-shadow" /></a>
                    <div className='mask' style={{ 
                        backgroundColor: 'rgba(0, 0, 0, 0.6)', 
                        padding: '0,0,0,0'
                        }}>
        <div className='d-flex justify-content-center align-items-center h-100'>
          <p className='text-white mb-0'><a href="https://github.com/DerTodd/Project_one_The_Survivors"><img src={GitHub} /></a></p>
        </div>
      </div>
                
             
        </Container>
        <div className="row">
            <Container id="samples" style={styles.sectionStyles} className="mb-4 bg-light rounded-3">
                <Row>
                    <Col lg={true} style={{borderWidth: 8, borderBlockColor: '#BF5700', borderBlockStyle: 'solid', borderLeft: 8}}>
                <figure className="col">
                    <div>
                    
                        <a href="https://dertodd.github.io/whether_weather_TT/"><img src={Weather} alt="Weather App" className="img-fluid rounded hover-shadow" /></a>
                        <div className='mask' style={{ 
                        backgroundColor: 'rgba(0, 0, 0, 0.6)', 
                        
                        }}>
                            <div className='d-flex justify-content-center align-items-center h-100'>
                            <p className='text-white mb-0'><a href="https://github.com/DerTodd/whether_weather_TT"><img src={GitHub} /></a></p>
                            </div>
                        </div>
                    </div>
                </figure>
                </Col>
                <Col lg={true} style={{borderWidth: 8, borderBlockColor: '#BF5700', borderBlockStyle: 'solid'}}>
                <figure className="col">
                    <div>
                        <a href="https://dertodd.github.io/Daily_Planner_TT/"><img className="img-fluid rounded hover-shadow" src={Planner} alt="Day Planner" /></a>
                        <div className='mask' style={{ 
                        backgroundColor: 'rgba(0, 0, 0, 0.6)', 
                        padding: '0,0,0,0'
                        }}>
                            <div className='d-flex justify-content-center align-items-center h-100'>
                            <p className='text-white mb-0'><a href="https://github.com/DerTodd/Daily_Planner_TT"><img src={GitHub} /></a></p>
                            </div>
                        </div>  
                    </div>
                </figure>
                </Col>
            </Row>
            <Row>
                <Col lg={true} style={{borderWidth: 8, borderBlockColor: '#BF5700', borderBlockStyle: 'solid'}}>
                <figure className="col">
                    <div>
                    <a href="https://sweeper-chore-chart.herokuapp.com/"><img className="img-fluid rounded hover-shadow" src={Sweeper} alt="Sweepers Site" /></a>
                        <div className='mask' style={{ 
                        backgroundColor: 'rgba(0, 0, 0, 0.6)', 
                        padding: '0,0,0,0'
                        }}>
                            <div className='d-flex justify-content-center align-items-center h-100'>
                            <p className='text-white mb-0'><a href="https://github.com/DerTodd/Sweepers_Project_Two"><img src={GitHub} /></a></p>
                            </div>
                        </div>
                    </div>
                </figure>
                </Col>
                <Col lg={true} style={{borderWidth: 8, borderBlockColor: '#BF5700', borderBlockStyle: 'solid'}}>
                <figure className="col">
                    <div>
                    <a href="https://bottleduptt.herokuapp.com/"><img className="img-fluid rounded hover-shadow" src={Bottled} alt="bottled up site" /></a>
                        <div className='mask' style={{ 
                        backgroundColor: 'rgba(0, 0, 0, 0.6)', 
                        padding: '0,0,0,0'
                        }}>
                            <div className='d-flex justify-content-center align-items-center h-100'>
                            <p className='text-white mb-0'><a href="https://github.com/DerTodd/Bottled_Up_TT"><img src={GitHub} /></a></p>
                            </div>
                        </div>
                        
                    </div>    
                </figure>
                </Col>
            </Row>
            <Row>
                <Col lg={true} style={{borderWidth: 8, borderBlockColor: '#BF5700', borderBlockStyle: 'solid'}}>
                <figure className="col">
                    <div>
                    <a href="https://dertodd.github.io/Quiz_Time_TT/"><img className="img-fluid rounded hover-shadow" src={Bottled} alt="bottled up site" /></a>
                        <div className='mask' style={{ 
                        backgroundColor: 'rgba(0, 0, 0, 0.6)', 
                        padding: '0,0,0,0'
                        }}>
                            <div className='d-flex justify-content-center align-items-center h-100'>
                            <p className='text-white mb-0'><a href="https://github.com/DerTodd/Quiz_Time_TT"><img src={GitHub} /></a></p>
                            </div>
                        </div>
                        
                    </div>    
                </figure>
                </Col>
            </Row>
            </Container>  
        </div>  
    </section>
    </div>
  );
}

export default Section;
