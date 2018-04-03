import React, {Component} from 'react';


function PortfolioItem() {
  return (
    <div>
      <div className="card">

        <a><img className="imagestyle" src={require('../img/kuori1.jpg')} /></a>
        <div className="mantra">{'We might turn into points and lines!'}</div>

      </div>
    </div>

  );
}


export default PortfolioItem;
