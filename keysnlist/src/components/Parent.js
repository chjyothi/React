import React, { Component } from 'react';
import Child from './child';
import Inputbox from './Inputbox';

export default class Parent extends Component {
    
      
    render() {
        return (
            <div>
                <Child title={this.props.title} handleChild={this.props.handleFirstChild}></Child>
                <Child title={this.props.title} handleChild={this.props.handleSecondChild}></Child>
                <hr></hr>
                
               <Inputbox></Inputbox>
            </div>
        )
    }
  
}
