import React from 'react';
import classes from './BuildControls.module.css';
import BuildControl from './BuildControl/BuildControl';

const controls = [
    {label: 'Salad', type: 'salad'},
    {label: 'Bacon', type: 'bacon'},
    {label: 'Cheese', type: 'cheese'},
    {label: 'Meat', type: 'meat'}
];

export default function BuildControls(props) {
    return (
        <div className={classes.BuildControls}>
            <p>total price: <strong>{props.price.toFixed(2)}</strong></p>
            {controls.map(ctrl=>(
              <BuildControl key={ctrl.label} 
              label={ctrl.label}
            added={()=>props.ingredientAdded(ctrl.type)}
             remove={()=>props.ingredientRemove(ctrl.type)}
             disabled={props.disabled[ctrl.type]}></BuildControl>
            ))}
            <button className={classes.OrderButton} 
            disabled={!props.purchasable} 
            onClick={props.ordered}>ORDER</button>
        </div>
    )
}
