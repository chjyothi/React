import React, { Component } from 'react'

export default class Inputbox extends Component {
    state = { username: '' };

    

    handleChange = event => {
         const {str} =event.target.value;
        function reverse(str) {
            let reverseString = "";
        
            for (let character of str) {
                reverseString = character + reverseString;
            }
                   
            return reverseString
        }
   this.setState({ username: reverse(str)});

   
     }
    render() {
        return (
            <div>
                 <hr></hr>
                <label htmlFor="username">username</label>
                 <input
                  type="text"
                  id="username"
                  value={this.state.username}
                  onKeychange={this.handleChange}
                 />
                 {/* <button onChange={this.handleChange}></button> */}
                 {/* <button onClick={this.handleChange}>click</button> */}
         <h3>Your username is: {this.state.temp}</h3>
         {/* <span>==</span> */}
         {/* <input type="text" id="outpt" value={this.state.username}></input> */}
        
            </div>
        )
    }
}
