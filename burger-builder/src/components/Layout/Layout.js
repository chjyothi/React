import React, { Component } from 'react';
import classes from './Layout.module.css';
import Toolbar from '../Navigation/Toolbar/Toolbar';
import SideDrawer from '../Navigation/SideDrawer/SideDrawer';

class Layout extends Component {
    state = {
        showSideDrawer: true
    }
    SideDrawerClosedHandler = () =>{
        console.log("Clicked sideDrawer");
     this.setState({showSideDrawer:false});
    }
    
    toggleDrawerClickedHandler = () =>{
     this.setState((prevState)=>{
         return {showSideDrawer:!prevState.showSideDrawer}
     });
    }


    render(){
        return(
            <React.Fragment>
            {/* <p>Toolbar, sideDrwer, Backdrop</p> */}
            <Toolbar toggleDrawerClicked={this.toggleDrawerClickedHandler}></Toolbar>
            <SideDrawer open={this.state.showSideDrawer} 
            closed={this.SideDrawerClosedHandler}></SideDrawer>
            <main className={classes.Container}>
                {this.props.children}
            </main>
        </React.Fragment>
        );
    }
}


export default Layout;