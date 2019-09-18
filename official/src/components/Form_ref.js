import React, { Component } from 'react';

class FormRef extends Component {

    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this)
        this.inputRef = React.createRef()
    }

    handleSubmit(event) {
        event.preventDefault()
        console.log('The input value is -',this.inputRef.current.value)
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label>
                        Name:
                        <input defaultValue="Sai Sweety" type="text" ref={this.inputRef} />
                    </label>
                    <input type="submit" value="Submit" />
                </form>
            </div >
        )
    }
}
export default FormRef