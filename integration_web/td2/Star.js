import React from "react";

class Star extends React.Component {
    constructor(props){
        super(props);
        this.state={ on : false };
        this.handleClick = this.handleClick.bind(this);
        
    }

    handleClick(){

    this.state.on  ? this.setState({ on : false }) : this.setState({ on : true });
        
    };
    
    render(){
        return(
            
            <>
            
            <img src = { this.state.on ? process.env.PUBLIC_URL + '/star_On.png' : process.env.PUBLIC_URL + '/star_Off.png' }
            onClick = { this.handleClick }  /*className="star_Off"*/ />
            {this.props.id}
            
            
            </>
        );
    }
}

export default Star;