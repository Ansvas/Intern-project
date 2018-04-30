import React, { Component } from 'react';
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import Title from './components/Title/Title'
import Login from './components/Login/Login'


import './styles/foundation.min.css'
import './styles/custom.css'

class App extends Component {

constructor(props){
  super(props);
  this.state={
    appName: 'Name of organisation!'
  }
}

  render() {
    return (


<div className="off-canvas-wrapper">
<div className="off-canvas-wrapper-inner" data-off-canvas-wrapper>
<div className="off-canvas-content" data-off-canvas-content>

<Title />
<Header />
<Login />
<hr/>
<Footer />
</div>
</div>
</div>


    );
  }
}

export default App;
