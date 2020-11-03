import React, { Component } from 'react'
import './App.css';

import Tile from './components/Tile'

class App extends Component {
  state={
    myList: [],
    rec: []
  }

  componentDidMount() {
    fetch('./movies.json')
    .then((res) => res.json())
    .then((data) => this.setState({
      myList: data.mylist, 
      rec: data.recommendations
    }))
  }

  addToRec = (index) => {
    const { myList, rec } = this.state
    let tempMyList = myList
    let tempRec = rec
    tempRec.push(tempMyList[index])
    tempMyList.splice(index, 1)
    this.setState({
      myList: tempMyList,
      rec: tempRec,
    })
  }


  removeFromRec = (index) => {
    //console.log(id)
    const { myList, rec } = this.state
    let tempMyList = myList
    let tempRec = rec
    tempMyList.push(tempRec[index])
    tempRec.splice(index,1)
    this.setState({
      myList: tempMyList,
      rec: tempRec,
    })
  }

  render() {
    const { 
      rec = [],
      myList = [],
    } = this.state
    return (
      <div className="App">
        <h1>Netflix</h1>
        <h2>My List</h2>
        <div className="list-container">
          {myList.map((ele, index) => (
            <Tile
              {...ele}
              addToRec = {() => this.addToRec(index)}
              add
            />))}
        </div>
        <h2>Recommendation</h2>
        <div className="list-container">
          {rec.map((ele, index) => (
            <Tile
              {...ele}
              removeFromRec = {() => this.removeFromRec(index)}
              remove
            />))}
        </div>
      </div>
    )
  }
}

export default App;