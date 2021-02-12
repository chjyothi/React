import React from 'react';
import classes from './Toolbar.module.css';
import Logo from '../../Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';
import ToggelDrawer from '../SideDrawer/ToggelDrawer/ToggelDrawer';
const toolbar =(props)=>(
    <header className={classes.Toolbar}>
        <ToggelDrawer clicked={props.toggleDrawerClicked}></ToggelDrawer>
        <div>   <Logo className={classes.Logo}></Logo></div>
        <nav className={classes.DesktopOnly}>
            <NavigationItems></NavigationItems>
        </nav>
    </header>
);

export default toolbar;