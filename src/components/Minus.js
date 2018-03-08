import React, {Component} from 'react';

class Minus extends Component {
    
    render(){
        return(
            <div className="minus">
                <img src="minusImage.png" alt="minusImage!"/>
                <p>
                    <button type="button" onClick={this.props.onMinus} className="btn btn-danger">MINUS ONE</button>
                </p>
            </div>
        )
    }

}

export default Minus;