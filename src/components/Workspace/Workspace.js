import React, { Component } from 'react';
import {LineChart} from 'react-easy-chart';
import './Workspace.css'

class Workspace extends Component {
  render() {
    return (
   <div className="container"> 
<div className="row">
<div className="medium-12 columns">
<h3>Workspace page</h3>
<div className="left_child">
<h4>left child</h4>
</div>
<div className="right_child">

<LineChart
    axes
    margin={{top: 10, right: 10, bottom: 50, left: 50}}
    axisLabels={{x: 'My x Axis', y: 'My y Axis'}}
    width={400}
    height={400}
    data={[
      [
        { x: 1, y: 20 },
        { x: 2, y: 10 },
        { x: 3, y: 25 },
        { x: 4, y: 20 }
      ], [
        { x: 1, y: 10 },
        { x: 2, y: 12 },
        { x: 3, y: 4 }
      ]
    ]}
  />
  </div>


</div>
</div>
</div>

    );
  }
}

export default Workspace;