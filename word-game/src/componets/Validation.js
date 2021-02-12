import React from 'react'

export default function Validation(props) {
    return (
        <div>
            <input onChange={props.textHandler} value={props.TextC}/>
            <p>{props.TextC} ----Inside validation</p>
            <p>len:{props.len}</p>
            {props.len <=5? <p>Text is too short</p>:<p>Text is long enough</p>}
        </div>
    )
}
