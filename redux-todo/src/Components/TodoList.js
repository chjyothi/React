import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as createActions from '../Redux/createActions';


 class TodoList extends Component {
     state = {
        chkbox: false
     }
     handleChangeChk =()=>{
         console.log("clicked")
     }
    //  handleDelete=(index)=>{
    //      console.log(index)
    //  }
    //  handleComplete=(index)=>{
    //     console.log(index)
    // }

     render() {
        return (
            <div>
                {this.props.todos.map((item,index)=>{
                    return (<div className="item" key={index}>
                         <p className="dat">{item}</p>
                         <button onClick={()=>this.props.handleDelete(index)}>delete</button>
                         <button onClick={()=>this.props.handleComplete(index)}>complete</button>
                    </div>
                       );
                })}
                {console.log(this.props.completedTodo)}
            </div>
        )
     }
}


const mapStateToProps = store => {
  return {
   todos : store.addTodo,
   completedTodo:store.completedTodo
  }
}
 
const mapdispacthToProps = dispatch => {
    return {
       handleComplete:(i)=>dispatch(createActions.completeItem(i)),
       handleDelete:(i)=>dispatch(createActions.deleteItem(i))
    }
}

export default connect(mapStateToProps, mapdispacthToProps)(TodoList);