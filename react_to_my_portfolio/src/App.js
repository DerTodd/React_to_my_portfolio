import logo from './logo.svg';
import './App.css';
import Form from './components/Form/index';
import React from 'react';
import Header from "./components/Header";

import Footer from "./components/Footer";
import Card from './components/Card';
import PortfolioContainer from "./components/PortfolioContainer";

function App() {
  return (
    <div>
      <Header />
      <PortfolioContainer />
      
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="#"
          target="_blank"
          rel="noopener noreferrer"
        >
        </a>
      </header>
    </div><div>
        <Card />
        
        
      
        <Footer />
      </div>
      </div>
  );
}

export default App;
