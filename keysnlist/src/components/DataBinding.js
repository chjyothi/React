import React, { Component } from 'react'

export default class DataBinding extends Component {
    state={
        firstName: 'jyothi',
        lastName: 'ch'  }
    
      changeText = (e) => {
          const {firstName, lastName} = e.target
        this.setState({ firstName: firstName,
                        lastName :lastName })
      }
      render() {
        console.log(this.state);
        return(
          <div className='App'>
            {/* <button onClick={() => this.changeText('Bye')}>Change text function</button> */}
            {/* <button onClick={this.changeText.bind(this, 'Bye from bind')}>Change text bind</button> */}
            <br/>
            <input type='text' value={this.state.firstName} onChange={this.changeText}/>
            <input type='text' value={this.state.lastName} onChange={this.changeText}/>
            {/* <button onClick={this.changeText.bind(this, 'Bye from bind')}>Change text bind</button> */}
            <div>{this.state.firstName} {this.state.lastName}</div>
          </div>
        )
      }
}