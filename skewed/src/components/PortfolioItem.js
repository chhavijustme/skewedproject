import React, {Component} from 'react';

class PortfolioItem extends React.Component {
  render() {
    const {id, avatar, mantra} = this.props;

    return (
      <div>
        <div className="card">

          <a><img
            className="imagestyle"
            src={avatar}
             />
          </a>

          <div className="mantra">{mantra}</div>

        </div>
      </div>

    );
  }
}


export default PortfolioItem;
