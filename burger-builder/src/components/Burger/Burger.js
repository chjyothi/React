import React from 'react'
import BurgerIngrediants from './BurgerIngrediants/BurgerIngrediants';
import classes from './Burger.module.css';

export default function Burger(props) {
    console.log(Object.keys(props.ingrediants));
    let transformedIngrediants = Object.keys(props.ingrediants)
       .map(igkey=>{
        console.log( [...Array(props.ingrediants[igkey])]);
           return [...Array(props.ingrediants[igkey])].map((_,i)=>{
               return <BurgerIngrediants key={igkey + i} type={igkey}/>
           })
        })
        .reduce((arr, el)=>{
            return arr.concat(el)
        },[]);
        if(transformedIngrediants.length === 0){
            transformedIngrediants= <p>Enter ingrediants</p>
        }
    console.log(transformedIngrediants);
    return (
        <div className={classes.Burger}>
            <BurgerIngrediants type="bread-top"></BurgerIngrediants>
            {transformedIngrediants}
            <BurgerIngrediants type="bread-bottom"></BurgerIngrediants>
           
        </div>
    )
}
