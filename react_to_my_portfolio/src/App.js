import logo from './logo.svg';
import './App.css';
import Form from './components/Form/index';
import React from 'react';
import Navbar from './components/Navbar';
import Header from './components/Header';
import Card from './components/Card';

function App() {
  return (
    <><div className="App">
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
        <Header />
        <Navbar />
        <Card />
        <Card />
        <Card />
        <Form />
      </div></>
  );
}

export default App;
