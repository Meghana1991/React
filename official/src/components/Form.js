import React, { Component } from 'react';

class Form extends Component {
    render() {
        return (
            <form onSubmit={this.props.submitHandler}>
                <label>Name</label>
                <input
                    type="text"
                    name="name"
                    onChange={(e) => this.props.changeHandler(e)} />
                <br /><br />
                <label>Interest</label>
                <input
                    type="text"
                    name="interest"
                    onChange={(e) => this.props.changeHandler(e)} /><br /><br />
                <input type="submit" value="Submit" />
            </form>
        );
    }
}

export default Form