import React, { Component } from 'react';
import PortfolioItem from './PortfolioItem.js';

class Portfolio extends Component {
  render() {
    return (
      <div className="portfolio">
      <PortfolioItem/>
      <PortfolioItem/>
      <PortfolioItem/>
	  </div>
    );
  }
}

export default Portfolio;