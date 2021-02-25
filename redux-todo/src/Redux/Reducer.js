import * as Actions from './Actions';

const initialState = {
    items : 10,
    itemsToSell:20,
    addTodo:['jyothi'],
    completedTodo:['nothing'],
} 

const Reducer=(state=initialState, action)=>{
    switch(action.type) {
      case Actions.BUYITEM :
          return {
              ...state,
              items : state.items -1
          }
      case Actions.SELLITEM :
          return {
              ...state,
              itemsToSell : state.itemsToSell +1
          }
     case Actions.ADD_ITEM :
        const tempTodos =[...state.addTodo]
         tempTodos.push(action.val)
          return {
            addTodo : tempTodos
          }
      case Actions.COMPLETE_ITEM :
        const tempTo =[...state.addTodo]
        // const tcompletedTodo =[...state.completedTodo]
        // tcompletedTodo.push('item11')
        tempTo.splice(action.i,1)
          return {
            addTodo : tempTo,
            // completedTodo:tcompletedTodo

          }
     case Actions.DELETE_ITEM :
        const tempTod =[...state.addTodo]
        tempTod.splice(action.i,1)
          return {
            addTodo :tempTod,
          }
       
      default:
          return state
    }
}

export default Reducer