import React from 'react'

const input = (props) => {
    let inputElement = null;
    switch (props.elementType) {
        case ('input'):
            inputElement = <input onChange={props.changed} {...props.elementConfig} value={props.value} />;
            break;
        case ('textarea'):
            inputElement = <textarea onChange={props.changed} {...props.elementConfig} value={props.value} />;
            break
        case ('select'):
            inputElement = (
                <select onChange={props.changed} value={props.value}>
                    {props.elementConfig.options.map((option, i) => {
                        <option
                            value={option.value}>
                            {option.displayValue}
                        </option>
                    })}
                </select>);
            break
        default:
            inputElement = <input onChange={props.changed} {...props.elementConfig} value={props.value} />
    }

    return (
        <div>
            <label>{props.label}</label>
            {inputElement}
        </div>
    )
}

export default input;