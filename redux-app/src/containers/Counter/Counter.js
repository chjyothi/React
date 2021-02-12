import React, { Component } from 'react';

import CounterControl from '../../components/CounterControl/CounterControl';
import CounterOutput from '../../components/CounterOutput/CounterOutput';
import {connect} from 'react-redux';
class Counter extends Component {
    debugger;
    state = {
        counter: 0
    }

    counterChangedHandler = ( action, value ) => {
        switch ( action ) {
            case 'inc':
                this.setState( ( prevState ) => { return { counter: prevState.counter + 1 } } )
                break;
            case 'dec':
                this.setState( ( prevState ) => { return { counter: prevState.counter - 1 } } )
                break;
            case 'add':
                this.setState( ( prevState ) => { return { counter: prevState.counter + value } } )
                break;
            case 'sub':
                this.setState( ( prevState ) => { return { counter: prevState.counter - value } } )
                break;
        }
    }

    render () {
        return (
            <div>
                <CounterOutput value={this.props.ctr} />
                <CounterControl label="Increment" clicked={this.props.onIncrementCounter} />
                <CounterControl label="Decrement" clicked={this.props.onDecrementCounter} />
                <CounterControl label="Add 10" clicked={this.props.onIncrementCounterBy5}  />
                <CounterControl label="Subtract 10" clicked={this.props.onDecrementCounterBy5} />
                <button onClick={this.props.storeResults}>Store Reuslt</button>
                <ul>
                    {this.props.storedResults.map((result)=>{
                        return <li key={result.id} onClick={()=>this.props.deleteResult(result.id)}>{result.value}</li>
                    })}
                </ul>
            </div>
        );
    }
}

const mapStateToProps= state =>{
    return {
        ctr : state.counter,
        storedResults: state.storeResults
    };
};

const mapDispatchToProps = dispatch =>{
    return {
        onIncrementCounter: ()=>dispatch({type: 'INCREMENT'}),
        onDecrementCounter: ()=>dispatch({type: 'DECREMENT'}),
        onIncrementCounterBy5: ()=>dispatch({type: 'ADD5',val : 10}),
        onDecrementCounterBy5: ()=>dispatch({type: 'SUB5', val : 10}),
        storeResults: ()=>dispatch({type: 'STORE_RESULTS'}),
        deleteResult: (id)=>dispatch({type: 'DELETE_RESULT', resultElId: id})
    };
};

export default connect(mapStateToProps,mapDispatchToProps)(Counter);