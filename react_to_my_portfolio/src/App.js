
import './App.css';
import Form from './components/Form/index';
import React from 'react';
import Header from "./components/Header";
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from "./components/Footer";
import Card from './components/Card';
import PortfolioContainer from "./components/PortfolioContainer";
import Todd from './images/Todd_no_clippy.png';
import ToddClippy from './images/Todd_clippy2.png'

function App() {
  return (
    <div>
      <Header />
      <PortfolioContainer />
      
    <div className="App">
      <section className="App-header">
      <a href="https://drive.google.com/file/d/1xyqQjNHNIQZuEOVL6ZNyeZnLkKxgcTAN/view?usp=sharing" target="_blank" rel="noopener noreferrer"><img src={ToddClippy} className="App-logo" alt="logo"/></a>
        <p>
          Resume <code>React</code> download
        </p>
        
      </section>
    </div><div>
        <Card />
        
        
      
        <Footer />
      </div>
      </div>
  );
}

export default App;
