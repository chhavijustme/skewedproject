import React, {Component} from 'react';

import Header from './components/Header';
import Portfolio from './components/Portfolio';
import PortfolioItem from './components/PortfolioItem';

import {Button, Modal} from 'react-bootstrap';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';


import './App.css';

function App() {
  return (

    <div>
      <Header
        subtitle="Yess, we study in an IIT with girl boy ratio 1:10. Noo, we are not like what you might think we are."
        title="Skewed Ratio Project"
      />

      <Portfolio />
      <Button bsStyle="success"> Are you awesome? or Are you awesome?</Button>
    </div>

  );
}

export default App;
