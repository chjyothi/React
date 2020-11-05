import React, {component} from 'react';
import './App.css';
import DropdownNav from './Components/DropdownNav'


class App extends React.Component {
  openNav=()=> {
    
  }
  
  render() {
    return (
      <div className="App">
        {/* <div className="sidebar">
         <a className="active" href="#home">Home</a>
         <a href="#news">News</a>
         <a href="#contact">Contact</a>
         <a href="#about">About</a>
      </div> */}
      <DropdownNav></DropdownNav>
      </div>
    );
  }
 
}

export default App;
