import React, {Component} from 'react';

class Minus extends Component {
    
    constructor(props){
        super(props);
    }
    
    render(){
        return(
            <div className="minus">
                <img src="minusImage.png" alt="minusImage!"/>
                <p>
                    <button type="button" className="btn btn-danger">MINUS ONE</button>
                </p>
            </div>
        )
    }

}

export default Minus;