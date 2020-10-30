import React, { Component } from 'react'

export default class child extends Component {
    render() {
        return (
            <div>
                <p>{this.props.title}</p>
                <button onClick={this.props.handleChild}>Click me</button>
            </div>
        )
    }
    
}
