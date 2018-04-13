import React, {Component} from 'react';


class Header extends React.Component {
  render() {
    const {title, subtitle} = this.props;


    return (
      <div className="header">
        <div className="title">{title}</div>
        <div className="subtitle">{subtitle}</div>
      </div>
    );
  }
}


export default Header;
