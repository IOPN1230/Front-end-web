import React from 'react';
import logo from './logo.svg';
import './App.css';
import MAP from './components/MAP';
import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward';
import LoginScreen from './components/LoginScreen';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>
          Inżynieria Oprogramowania
        </h1>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <h3>LEAFLET MAP</h3>
        <ArrowDownwardIcon/>
      </header>
      <LoginScreen/>
      <MAP/>
    </div>
  );
}

export default App;
