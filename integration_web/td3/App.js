import React from 'react';
import Donnees  from './Data';

class App extends React.Component {
    constructor(props){
      super(props);
      this.state={ count : 0 };
      /*this.counter = this.counter.bind(this);*/
      
    }
  
   /*counter(){
    this.setState({ count : count++ })
    console.log(count)
    }*/
  
    render(){
      return (
  
        /*-------------td3 ex1------------*/
        /*<>
          <h1>{this.state.count}</h1>
          <button onClick={this.counter}>cliquer ici</button>
          
        </>*/
  
          <>
            <Donnees />
          </>
      
    );}
    
    
  
  }
  
  export default App;