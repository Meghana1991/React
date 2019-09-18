import React, { Component } from 'react';
import ChangeName from './ChangeName'

class BasicComponent extends Component {
    constructor() {
        super();
        this.defaultHandler = this.defaultHandler.bind(this)
    }

    defaultHandler() {
        console.log('defaultHandler this', this)
    }

    handleClickCallbk() {
        /**
         * The problem with this syntax is that a different callback is created each time the LoggingButton renders. In most cases, this is fine. However, if this callback is passed as a prop to lower components, those components might do an extra re-rendering. We generally recommend binding in the constructor or using the class fields syntax, to avoid this sort of performance problem.
         */
        console.log('handleClickCallbk this', this)
    }

    arrowHandler = () => {
        console.log('arrowHandler this', this)
    }

    render() {
        return (
            <div>
                Welcome {this.props.user} !! <br />
                <button className="btn btn-primary" onClick={this.props.clickHandler}>Change</button>
                <ChangeName></ChangeName>
                <br />
                Types of function calls
                <div>
                    <button className="btn btn-primary" onClick={this.defaultHandler}>Default</button>
                </div>  <br />
                <div>
                    <button className="btn btn-primary" onClick={this.arrowHandler}>Arrow</button>
                </div>  <br />
                <div>
                    {/* 
                    The problem with this syntax is that a different callback is created each time the LoggingButton renders. In most cases, this is fine. However, if this callback is passed as a prop to lower components, those components might do an extra re-rendering. We generally recommend binding in the constructor or using the class fields syntax, to avoid this sort of performance problem. */}
                    <button className="btn btn-primary" onClick={(e) => this.handleClickCallbk(e)}>Arrow in callback</button>
                </div>
            </div>
        )
    }
}
//If props.color is not provided, it will be set by default to 'pink':

BasicComponent.defaultProps = {
    color : "pink"
}

export default BasicComponent