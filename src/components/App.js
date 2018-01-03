import React, { Component } from 'react';
import Add from './Add';
import Minus from './Minus';
import Number from './Number';

class App extends Component {
    render() {
        return (
          <div className="container-fluid">
            <div className="row">
              <div className="col-md-6"><Add /></div>
              <div className="col-md-6"><Minus /></div>
            </div>
            <div className="row">
              <div className="col-md-4"></div>
              <div className="col-md-4"><Number /></div>
            </div>
          </div>
        );
    }
}

export default App;
