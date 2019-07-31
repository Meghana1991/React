import React from 'react'
import Burger from './../../Burger/Burger'
import Button from './../../UI/Button/Button'

const CheckoutSummary = (props) => {
    return (
        <div>
            <h1>Enjoy the taste Dude</h1>
            <div style={{ width: '300px', height: '300px' }}>
                <Burger ingredients={props.ingredients} />
            </div>
            <Button btnClick={props.checkoutContinued}>Continue</Button>
            <Button btnClick={props.checkoutCanceled}>Cancel</Button>
        </div>
    )
}

export default CheckoutSummary