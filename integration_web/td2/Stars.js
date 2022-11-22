import Star from "./Star";
import React from "react";

class Stars extends React.Component {


    constructor(props){
        super(props);

}
    render(){
        
        return(
            <>
            
            <Star id='0'/>
            <Star id='1'/>
            <Star id='2'/>
            <Star id='3'/>
            <Star id='4'/>
            
            </>
        )
    }
}

export default Stars;