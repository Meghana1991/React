import React from 'react'

let CharComponent = (props) => {
    let style = {
        display: 'inline-block',
        padding: '16px',
        margin: '16px',
        border: '1px solid',
        textAlign: 'center'
    }
    return (
        <div onClick={props.clicked} style={style}>
            {props.char}
        </div>
    )
}

export default CharComponent