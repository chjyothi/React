import * as Actions  from './Actions'; 

 
    export const buyItem=()=> {
        return {
        type: Actions.BUYITEM
        }
    }
    export const sellItem=()=> {
        return {
        type: Actions.SELLITEM
        }
    }
    export const addItem=(value)=> {
        return {
        type: Actions.ADD_ITEM,
        val: value
        }
    }
    export const completeItem=(i)=> {
        return {
        type: Actions.COMPLETE_ITEM,
        i: i
        }
    }
    export const deleteItem=(i)=> {
        return {
        type: Actions.DELETE_ITEM,
        i: i
        }
    }

 
    
