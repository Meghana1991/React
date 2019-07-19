import React, { Component } from 'react';

class Animal extends Component {
    constructor(props) {
        super(props)
        this.inputElementRef = React.createRef();
    }
    /**
     * ngoninit equivalant is componentmount
     */
    componentDidMount() {
        /**
         * This lifecycle executes after rendering the render()
         */
        console.log(this.inputElement)
        // this.inputElement.focus()
        this.inputElementRef.current.focus()
    }

    render() {
        return (
            <div>
                <label>Enter Animal</label><br />
                <input
                    key="i4"
                    type="text"
                    value={this.props.name}
                    // ref={(inputEl) => { this.inputElement = inputEl }} />
                    ref={this.inputElementRef} />
            </div>
        )
    }
}

export default Animal;
