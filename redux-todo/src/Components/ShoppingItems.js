import React from 'react'
import * as createActions from '../Redux/createActions';
import { connect } from 'react-redux';

function ShoppingItems(props) {
    return (
        <div>
            <p>Total number of Items to buy: {props.totItems} </p>
            <p>Total number of Items to sell: {props.itemsToSell} </p>
            <button onClick={props.buyItem}>Buy item</button>
            <button onClick={props.sellItem}>sell item</button>
        </div>
    )
}

const mapStateToProps = store =>{
    return {
        totItems: store.items,
        itemsToSell: store.itemsToSell
    }
}

const mapReducerToProps = dispatch => {
    return {
        buyItem :() => dispatch(createActions.buyItem()),
        sellItem :() => dispatch(createActions.sellItem())
    }
}

export default connect(mapStateToProps,mapReducerToProps)(ShoppingItems);