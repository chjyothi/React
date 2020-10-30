import React from 'react';
import Age from './Age';
class RefUsage extends React.Component {
    clickHandler = () => {
    //   console.log(this.age.value)
      console.log(this.name.value)
    }
  
    keyPressed = (e) => {
      if(e.keyCode === 13){
        this.age.focus()
      }
    }
  
    render() {
      return (
        <div className="App" >
           
            Name:
          <input
            ref={(nameInput) => this.name = nameInput}
            onKeyUp={this.keyPressed}
            type='text'
          /><br/>
  
          {/* <Age ageRef={(ageInput) => this.age = ageInput} /> */}
  
          Address:
          <input
            ref={(addInput) => this.adress = addInput}
            type='text'
          /><br/>
          <input type='submit' value='Submit' onClick={this.clickHandler} />
           
      <p>{this.name}</p>
        </div>
      )
    }
  }
  
  export default RefUsage;