import React from 'react'
import { Link } from 'react-router-dom'

const Button = (props) => {
    return (
        <div>
            <Link to={props.navigate}>
                <button>{props.title}</button>
            </Link>
        </div>
    )
}

export default Button;