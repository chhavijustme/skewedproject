import React, {Component} from 'react';

import Header from './components/Header';
import Portfolio from './components/Portfolio';
import PortfolioItem from './components/PortfolioItem';

import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <Portfolio />

    </div>
  );
}

export default App;
