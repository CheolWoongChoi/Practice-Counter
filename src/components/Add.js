import React, {Component} from 'react';

class Add extends Component {
    
    render(){
        return(
            <div className="add">
                <img src="addImage.png" alt="addImage!"/>
                <p>
                    <button type="button" onClick={this.props.onAdd} className="btn btn-primary">ADD ONE</button>
                </p> 
            </div>
        )
    }

}

export default Add;