import React, { Component } from 'react';
import { connect } from 'react-redux';
import { calculationType } from '../actions/index';
import { bindActionCreators } from 'redux';

import Add from './Add';
import Minus from './Minus';
import Number from './Number';

class App extends Component {
    render() {
        return (
          <div className="container-fluid">
            <div className="row">
              <div className="col-md-6"><Add onAdd={() => this.props.calculationType("ADD", this.props.number)}/></div>
              <div className="col-md-6"><Minus onMinus={() => this.props.calculationType("MINUS", this.props.number)}/></div>
            </div>
            <div className="row">
              <div className="col-md-4"></div>
              <div className="col-md-4"><Number number={this.props.number} /></div>
            </div>
          </div>
        );
    }
}

function mapStateToProps(state) {
    return {
      number : state.number
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({ calculationType: calculationType }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
