import React from 'react';
import classes from './BuildControl.module.css';

export default function BuildControl(props) {
    console.log("build Control",props.added)
    return (
        <div className={classes.BuildControl}>
            {console.log(props.disabled)}
            <div className={classes.Label}>{props.label}</div>
            <button className={classes.Less} onClick={props.remove} 
            disabled={props.disabled}>Less</button>
            <button className={classes.More} onClick={props.added}>More</button>
        </div>
    )
}
