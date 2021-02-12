import React, { Component } from 'react';
import Validation from './componets/Validation';
import CharComponent from './componets/CharComponent';
import './App.css';

class App extends Component {
  state ={
    TextC:''

    
  }
  textHandler=(event)=>{
      const val = event.target.value;
      console.log(val);
      this.setState({
        TextC:val
      })
  }
   
  delhandler=(index) =>{
    const text = this.state.TextC.split('');
    text.splice(index,1);
    const updatedText = text.join('');
    this.setState({TextC:updatedText})
  }

  render() {
    const CharArray = this.state.TextC.split('').map((ch, index)=>{
      return <CharComponent eChar={ch} key={index} delhandler={()=>this.delhandler(index)}/>;
    });

    
    return (
      <React.Fragment>
       <div className="App">
        <Validation TextC={this.state.TextC} 
                    textHandler={this.textHandler} 
                    len={this.state.TextC.length}></Validation>
            {CharArray}
      </div>
      <button aria-label="somthing else">somthingelse</button>
      <button aria-label="local">mmmmmm</button>
      <button aria-labelledby ="non local">nnnnnnnn</button>
      <p>YES your aria-label is working</p>
      </React.Fragment>
     
    );
  }
}

export default App;
