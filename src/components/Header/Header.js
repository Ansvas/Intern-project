import React, { Component } from 'react';
import './Header.css'

class Header extends Component {
  render() {
    return (
<div className="callout primary" id="Header">
<div className="row column">
<h1>Name of the Organisation!</h1>
<p className="lead">and here is the tag line of company</p>
</div>
</div>


    );
  }
}

export default Header;
