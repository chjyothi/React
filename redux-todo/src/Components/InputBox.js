import React, { Component } from 'react';
import * as Actions  from '../Redux/createActions';
import { connect } from 'react-redux';



 class InputBox extends Component {
     state = {
        value :''
     }
     handleVal = (e)=>{
      this.setState({
        value : e.target.value
      })
     }
     submitHandle = (e) =>{
        this.props.addItem(this.state.value)
        this.setState({
            value:''
        })
        e.preventDefault();
     }
     render (){
        return (
            <div>
                <form onSubmit={this.submitHandle}>
                <input type="text" value={this.state.value} onChange={this.handleVal}></input>
                <input type="submit" value="Submit" />
                {/* <button onClick={()=>props.addItem()}>Add</button> */}
                </form>
                {/* {this.props.todoItems.map(val=>{
                    return <p>{val}</p>;
                })} */}
                {console.log("one time" +this.props.todoItems)}
            </div>
        )
     }
    
}

const mapStateToProps = store =>{
    return {
        todoItems : store.addTodo
    }
}

const mapReducerToProps = dispatch =>{
    return {
        addItem : (value)=>dispatch(Actions.addItem(value))
    }
}

export default connect(mapStateToProps,mapReducerToProps)(InputBox);