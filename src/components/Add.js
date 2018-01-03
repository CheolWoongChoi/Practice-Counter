import React, {Component} from 'react';

class Add extends Component {
    
    constructor(props){
        super(props);
    }
    
    render(){
        return(
            <div className="add">
                <img src="addImage.png" alt="addImage!"/>
                <p>
                    <button type="button" className="btn btn-primary">ADD ONE</button>
                </p> 
            </div>
        )
    }

}

export default Add;