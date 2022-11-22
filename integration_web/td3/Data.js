import React from "react";



class Donnees extends React.Component{
    constructor(props){
        super(props); 
        this.state=[{
            id:1,
            text:"Pratiquer du sport",
            completed:true
        },
        {
            id:2,
            text:"Ecouter de la musique",
            completed:false
        },
        {
            id:3,
            text:"Se balader en plein nature",
            completed:false
        },
        {
            id:4,
            text:"Lire un roman",
            completed:true
        }]           
    }


    render(){
        return (
               <>
                
                {this.state.map(element=>
                <li>
                    <label>
                        {element.completed ? 
                            <>
                            <input type="checkbox"  checked />
                            {element.text} 
                            </>:
                            <>
                            <input type="checkbox"  />
                            {element.text}
                            </>

                        }
                    
                        
                        
                    </label>
                </li>
                )}
                   
               </> 

        );}
      


}



export default Donnees;