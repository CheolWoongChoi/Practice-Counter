import React, {Component} from 'react';

class Number extends Component {
    
    constructor(props){
        super(props);
    }
    
    render(){
        return(
            <div className="number">
                <button type="button" className="btn btn-success">Current Number : </button>
            </div>
        )
    }

}

export default Number;