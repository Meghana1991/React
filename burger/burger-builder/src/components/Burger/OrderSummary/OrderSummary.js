import React from 'react';
import Aux from '../../../hoc/Auxillary/Aux'
import Modal from './../../UI/Modal/Modal'

const OrderSummary = (props) => {
    let ingredients = props.ingredients;
    let builtSummary = Object.keys(ingredients).map((each, i) => {
        return <li key={i}>{each} : {ingredients[each]}</li>
    });

    return (
        <Aux>
            {props.buttonClicked ?
                (< div >
                    <ul>
                        <Modal
                            cancelHandler={props.cancelHandler}
                            continueHandler={props.continueHandler}>{builtSummary}</Modal>
                    </ul>
                </div>) : ''}
        </Aux>
    )
}

export default OrderSummary;