import React, { Component } from 'react';
import './Title.css'

class Title extends Component {
  render() {
    return (
<div className="title-bar">
<a href="/about" className="button">About</a>
<a href="/profile" className="button">Profile</a>
<a href="/workspace" className="button">Workspace</a>
</div>
    );
  }
}

export default Title;