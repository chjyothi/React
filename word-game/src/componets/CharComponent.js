import React from 'react'

export default function CharComponent(props) {
    const s={
        display:'inline-block',
        padding: '16px',
        margin:'16px',
        border: '1px solid black',
        textAlign: 'center'

    };
    return (
        <div style={s} onClick={props.delhandler}>
        {props.eChar} 
        </div>
    );
}
