import React, { Component } from 'react'
import PropTypes from 'prop-types';
import classes from './BurgerIngrediants.module.css';
export default class BurgerIngrediants extends Component{
   
    render() {
        let toppings = null;

        switch( this.props.type ) {
            case ('bread-bottom'):
                toppings = <div className={classes.BreadBottom}></div>;
                break;
            case ('bread-top'):
                toppings = (<div className={classes.BreadTop}>
                     <div className={classes.Seeds1}> </div>
                     <div className={classes.Seeds2}> </div>
                 </div>);
                 break;
            case ('meat'):
                toppings = <div className={classes.Meat}></div>;
                break;
            case ('cheese'):
                toppings = <div className={classes.Cheese}></div>;
                 break;
            case ('bacon'):
                    toppings = <div className={classes.Bacon}></div>;
                     break;
            case ('salad'):
                toppings = (
                    <div className={classes.Salad}>
                    </div> );
                 break;
           
            default:
                toppings=null;
               
        }
        return toppings;
    }
      
}
/*empty topping value it doesnt accept*/
BurgerIngrediants.propTypes = {
    type :PropTypes.string.isRequired
};