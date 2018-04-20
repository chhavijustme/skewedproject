import React, {Component} from 'react';


import PortfolioItem from './PortfolioItem';

const portfolioitems = require('../portfolioitems.json');


function Portfolio() {
  const renderedproducts = portfolioitems.map((portfolioitem) => (
    <PortfolioItem
      avatar={portfolioitem.avatar}
      id={portfolioitem.id}
      mantra={portfolioitem.mantra}
    />
  ));

  return (
    <div className="portfolio">
      {renderedproducts}
    </div>
  );
}


export default Portfolio;
