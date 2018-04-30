import React, { Component } from 'react';
import './Title.css'

class Title extends Component {
  render() {
    return (
<div className="title-bar">
<a href="/home" className="button">Home</a>
<a href="/profile" className="button">Profile</a>
<a href="/workspace" className="button">Workspace</a>
</div>
    );
  }
}

export default Title;