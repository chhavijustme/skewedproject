import React, {Component} from 'react';

import Header from './components/Header.js';
import Portfolio from './components/Portfolio.js';
import PortfolioItem from './components/PortfolioItem.js';

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Portfolio />

      </div>
    );
  }
}

export default App;
