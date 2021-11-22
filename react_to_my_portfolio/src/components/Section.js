import React from 'react';
import '../styles/Section.css';
import FoodBuzz from '../images/FoodBuzz.jpg'
import Planner from '../images/Planner.jpg'
import Sweeper from '../images/Sweeper.jpg'
import Weather from '../images/Weather.png'
import Bottled from '../images/Welcome_Screen.jpg'

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
    <section style={styles.sectionStyles} className="container-fluid">
      <h2>Work</h2>
        <div id="samples" className="row">
            
                    <div className="col-sm-10 col-md-10 col-lg-10 col-xl-12">
                        <a href="https://dertodd.github.io/Project_one_The_Survivors/index.html"><img className="eight flip" src={FoodBuzz} alt="FoodBuzz" /></a>
                        
                        <div className="float">
                            <p className="inside"><a href="https://dertodd.github.io/Project_one_The_Survivors/index.html">FoodBuzz</a></p>
                            <p className="inside">FoodBuzz</p>
                        </div>
                    </div>
                
        </div>
        <div className="row">
            <div id="line2" className="samplebox">
                <figure className="col">
                    <div>
                    
                        <a href="https://dertodd.github.io/whether_weather_TT/"><img className="four flip" src={Weather} alt="image of a bear" /></a>
                        <div className="floatsm">
                            <p className="inside"><a href="https://dertodd.github.io/whether_weather_TT/">Whether Weather</a></p>
                            <p className="inside">Whether Weather</p>
                        </div>
                    </div>
                </figure>
                <figure className="col">
                    <div>
                        <a href="https://dertodd.github.io/Daily_Planner_TT/"><img className="four flip" src={Planner} alt="Day Planner" /></a>
                        <div className="floatsm">
                            <p className="inside"><a href="https://dertodd.github.io/Daily_Planner_TT/">Planner</a></p>
                            <p className="inside">Day Planner</p>
                        </div>  
                    </div>
                </figure>
            </div>
            <div id="line3" className="samplebox">
                <figure className="col">
                    <div>
                        <img className="flip four" src={Sweeper} alt="sweeper site" />
                        <div className="floatsm">
                            <p className="inside"><a href="https://sweeper-chore-chart.herokuapp.com/">Sweepers</a></p>
                            <p className="inside">Keep It Clean</p>
                        </div>
                    </div>
                </figure>
                <figure className="col">
                    <div>
                        <img className="flip four" src={Bottled} alt="bottled up site" />
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
