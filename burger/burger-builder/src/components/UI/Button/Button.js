import React from 'react'
import './../Button/Button.css'

const Button = (props) => {
    return (
        <div className="Button"
            onClick={props.btnClick}>
            {props.children}
        </div>
    )
}

export default Button