import React from 'react';
import classes from './ToggleDrawer.module.css';

export default function ToggelDrawer(props) {
    return (
        <div className={classes.DrawerToggle} onClick={props.clicked}>
            <div></div>
            <div></div>
            <div></div>
        </div>
    )
}
