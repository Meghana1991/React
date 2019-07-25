import React from 'react'
import BuildControl from './BuildControl/BuildControl';
import './../BuildControls/BuildControls.css'

const controls = [
    { label: 'Salad', type: 'salad' },
    { label: 'Cheese', type: 'cheese' },
]

const BuildControls = (props) => (
    <div>
        {controls.map((each) => {
            return <BuildControl
                key={each.label}
                label={each.label}
                added={() => props.ingredientAdded(each.type)}
                remove={() => props.ingredientRemoved(each.type)}></BuildControl>
        })}
        <button className="OrderButton" onClick={props.buttonClicked}>ORDER NOW</button>
    </div>
)

export default BuildControls