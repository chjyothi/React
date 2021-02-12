import React from 'react';
import Button from '../../UI/Button/Button';

export default function OrderSummary(props) {
     const ingrediantSummary = Object.keys(props.ingrediants).map((ikey)=>{
       return <li key={ikey}><span style={{TestTransform:'capitalize'}}>{ikey}</span>:{props.ingrediants[ikey]}</li>
     })
    return (
        <React.Fragment>
            <h2>Order Summary</h2>
            <p>Your order with following ingrediants:</p>
            <ul>
              {ingrediantSummary}
            </ul>
            <p style={{style: 'bold'}}>Total Price: <span style={{color:'green'}}>${props.totalPrice.toFixed(2)}</span></p>
            <p>continue to checkout?</p>
            <Button btnType="Danger" clicked={props.modelClose}>CANCEL</Button>
            <Button btnType="Success" clicked={props.purchaseContinue}>CONTINUE</Button>
        </React.Fragment>
    )
}
