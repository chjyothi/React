import React from 'react';
import classes from './InputEle.module.css';

export default function InputEle(props) {
   
  
    let inputElement = null;

    switch(props.elementType) {
        case ('input'):
            inputElement = <input className={classes.InputElement} 
                               {...props.elementConfig} 
                               value={props.value} onChange={props.changeHendler}/>
            break;
        case ('textarea'):
            inputElement = <textarea className={classes.InputElement} 
                                    {...props.elementConfig} 
                                  value={props.value} onChange={props.changeHendler}/>
            break;
            case ('select'):
                inputElement = (
                   <select  value={props.value}
                            className={classes.InputElement}
                            onChange={props.changeHendler}>
                        {props.elementConfig.options.map(option=>( 
                        <option value={option.value}>
                          {option.displayValue}
                         </option>
                         
                         ))}
                   </select>
                                  
                );
                break;

        // case('button'):
        //     inputElement = <button className={classes.Button}></button>
        //     break;
        default:
            inputElement = <input className={classes.InputElement} 
                                    {...props.elementConfig} 
                                    value={props.value} onChange={props.changeHendler}/>
    }
    return (
        <div className={classes.Input}>
            <label className={classes.Label}>{props.label}</label>
            {inputElement}
          {  console.log(props.inputType)}
        </div>
      
    )
}
