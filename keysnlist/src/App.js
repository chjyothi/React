import React, {Component} from 'react';
import ImageScrolling from './ImageScrolling';
import './App.css';
import Parent from './components/Parent';
import DataBinding from './components/DataBinding';


class App extends Component {
  state = {
    title: 'web-page',
    users : [{
      name: 'John',
      age: 30
    }, {
      name: 'Matt',
      age: 31
    }, {
      name: 'Mark',
      age: 32
    }]
  }

  addItem = () => {
    const { users } = this.state //destructring
    const tempUsers = Object.assign([], users)
    const adding = {
      name: 'jane',
      age: 23
    }
    tempUsers.push(adding)
    this.setState({ users: tempUsers })
  }

  deleteItem =() => {
    const { users } = this.state
    const tempUsers = Object.assign([], users)
    tempUsers.pop()
    this.setState({ users: tempUsers })
    }

    handleChild=(newtitle)=>{
      this.setState({
        title:newtitle
      })
    }

  render() {
    const  { users } = this.state
    return (
      <div className="App">
        <table>
          <tr>
            <th>Name</th>
            <th>age</th>
          </tr>
        {
        users.map((item) => {
          return (
            <tr key={item.name}>
              <td>{item.name}</td>
              <td>{item.age}</td>
            </tr>
          )
        })
      }
        </table>
        <br></br>
        <button onClick={this.addItem}>Add</button>
        <button onClick={this.deleteItem}>Delete</button>
        <hr></hr>
       <ImageScrolling></ImageScrolling>
       <hr></hr>
       <Parent  title={this.state.title} handleFirstChild={this.handleChild.bind(this, 'first child')} handleSecondChild={this.handleChild.bind(this, 'second child')}></Parent>
      <DataBinding></DataBinding>
      <hr></hr>
      <p>
        ustry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
         </p>
      </div>
    );
  }
}


export default App;
