import React, {Component} from 'react';

class Number extends Component {
    
    render(){
        return(
            <div className="number">
                <button type="button" className="btn btn-success">Current Number : {this.props.number}</button>
            </div>
        )
    }

}

export default Number;