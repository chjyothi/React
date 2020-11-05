import React, { Component, useState } from 'react'

export default class DropdownNav extends Component {
    container = React.createRef();
    state ={
        open:false,
        isActive:true,
        width:0
    };
    
    handleResize = () => this.setState({
        width: window.innerWidth
      });
    
    
      componentWillUnmount() {
        window.removeEventListener('resize', this.handleResize)
      }
    componentDidMount() {
        console.log("didmount");
        debugger
        document.addEventListener("mousedown", this.handleClickOutside);
        this.handleResize();
        window.addEventListener('resize', this.handleResize)
    }
   
    handleClickOutside=(event)=>{
       
        if (this.container.current && !this.container.current.contains(event.target)) {
            this.setState({
                open: false,
              });
        }
    }
    handleClick=()=>{
        this.setState(state=>{return{
            open:!state.open
        }})
    }
    render() {
        return (
            <div>
            <div className="container" ref={this.container}>
                {/* <p>DropdownNav</p> */}
                {this.state.width<=600 ? <span className="button" onClick={this.handleClick}>☰</span> : 
                
                <div className="navbar">
                <a className="active" href="#home">Home</a>
                <a href="#news">News</a>
                <a href="#contact">Contact</a>
                <a href="#about">About</a>
                </div> }
                {this.state.open && (<div className="dropdown">
                <a className="active" href="#home">Home</a>
                <a href="#news">News</a>
                <a href="#contact">Contact</a>
                <a href="#about">About</a>
                </div>)}
            </div>
            {/* <span>Window size: {this.state.width}</span> */}
            </div>
        )
    }
   
}
