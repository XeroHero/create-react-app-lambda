import React from 'react';
import logo from './logo.svg';
import './App.css';

import Facebook from './components/facebook';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1 className="App-title">Facebook Auth Example</h1>
        <p>
          To get started, authenticate with Facebook.
        </p>
        <Facebook />
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
