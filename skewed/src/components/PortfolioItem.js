import React, {Component} from 'react';
import {Thumbnail} from 'react-bootstrap';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';

class PortfolioItem extends React.Component {
  render() {
    const {id, avatar, mantra} = this.props;

    return (
      <div>
      <Thumbnail href="#" src={avatar} />
        

            
      </div>

    );
  }
}


export default PortfolioItem;
