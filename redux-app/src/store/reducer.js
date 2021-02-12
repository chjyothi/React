
const initialState={
    counter: 0,
    storeResults:[]
}
const reducer=(state =initialState, action) =>{
    switch(action.type) {
        case('INCREMENT'):
            return {
                ...state,
                counter: state.counter+1
            }
        
        case('DECREMENT'):
            return {
                ...state,
                counter: state.counter-1
            }
        
        case('ADD5'):
            return {
                ...state,
                counter: state.counter+ action.val
            }
        
        case('SUB5'): 
            return {
                ...state,
                counter: state.counter-action.val
            }
        case('STORE_RESULTS'): 
            return {
                ...state,
               storeResults: state.storeResults.concat({id:new Date(), value:state.counter})
            }
        case('DELETE_RESULT'): 
            const updatedArray = state.storeResults.filter(result =>result.id!== action.resultElId)
            return {
                ...state,
               storeResults: updatedArray
            }
    
        
    }
    return state;
   
}

export default reducer;