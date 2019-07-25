import React from 'react'
import './../Modal/Modal.css'
import Button from './../../UI/Button/Button'

const Modal = (props) => {
    return (
        <div className="Modal">
            {props.children}
            <Button btnClick={props.cancelHandler}>CANCEL</Button>
            <Button>CONTINUE</Button>
        </div>
    )
}

export default Modal