import React, { Component } from 'react';
import logo from './logo.jpeg';
import './App.css';


class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        
          <div class="topnav">
          <a href="#news">פרויקט דיור</a>
          <a href="#contact">פרויקט ליווי</a>
          <a href="#about">צור קשר</a>
          <a  href="#home">דף הבית</a>
          <div class="topnav-left">
          <a class="active1" href="#home">התחבר</a>
          </div>
        </div>
        
           
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
        
          </a>
        </header>
      </div>
    );
  }
}

export default App;
