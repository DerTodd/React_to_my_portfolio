import React from 'react';
import '../styles/Section.css';
import FoodBuzz from '../images/FoodBuzz.jpg'

// By importing the Section.css file, it is added to the DOM whenever this component loads

// We can also style a component inside of its JavaScript file by adding style properties to its rendered elements
// Unlike regular HTML, a JSX style property must be an object instead of a string
// On a style object, we camelCase all property names, and put all of the values in quotes
// Non quoted values default to "pixels", e.g. height, margin, padding

const styles = {
  sectionStyles: {
    background: 'orange',
  },
};

// We use JSX curly braces to evaluate the style object on the JSX tag

function Section() {
  return (
    <div>
    <section style={styles.sectionStyles} className="section">
      <h2>Work</h2>
        <div id="samples">
            <div id="line1" className="samplebox">
                <figure className="widehalf">
                    <div className="eight">
                        <a href="https://dertodd.github.io/Project_one_The_Survivors/index.html"><img className="eight flip" src={FoodBuzz} alt="FoodBuzz" /></a>
                        
                        <div className="float">
                            <p className="inside"><a href="https://dertodd.github.io/Project_one_The_Survivors/index.html">FoodBuzz</a></p>
                            <p className="inside">FoodBuzz</p>
                        </div>
                    </div>
                </figure>
            </div>
            <div id="line2" className="samplebox">
                <figure className="widehalf">
                    <div>
                    
                        <a href="https://dertodd.github.io/whether_weather_TT/"><img className="four flip" src="./Assets/Images/Whether_Weather.jpg" alt="image of a bear" /></a>
                        <div className="floatsm">
                            <p className="inside"><a href="https://dertodd.github.io/whether_weather_TT/">Whether Weather</a></p>
                            <p className="inside">Whether Weather</p>
                        </div>
                    </div>
                </figure>
                <figure className="widehalf">
                    <div>
                        <a href="https://dertodd.github.io/Daily_Planner_TT/"><img className="four flip" src="./Assets/Images/Planner.jpg" alt="Day Planner" /></a>
                        <div className="floatsm">
                            <p className="inside"><a href="https://dertodd.github.io/Daily_Planner_TT/">Planner</a></p>
                            <p className="inside">Day Planner</p>
                        </div>  
                    </div>
                </figure>
            </div>
            <div id="line3" className="samplebox">
                <figure className="widehalf four">
                    <div>
                        <img className="flip four" src="./Assets/Images/Sweeper.jpg" alt="sweeper site" />
                        <div className="floatsm">
                            <p className="inside"><a href="https://sweeper-chore-chart.herokuapp.com/">Sweepers</a></p>
                            <p className="inside">Keep It Clean</p>
                        </div>
                    </div>
                </figure>
                <figure className="widehalf four">
                    <div>
                        <img className="flip four" src="./Assets/Images/Welcome_Screen.jpg" alt="bottled up site" />
                        <div className="floatsm">
                            <p className="inside"><a href="https://bottleduptt.herokuapp.com/">Bottled Up</a></p>
                            <p className="inside">Blog It</p>
                        </div>
                    </div>    
                </figure>
            </div>  
        </div>  
    </section>
    </div>
  );
}

export default Section;
