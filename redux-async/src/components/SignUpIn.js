import React, { Component } from 'react';
import * as actionTypes from './../store/action';
import { connect } from 'react-redux'

class SignUpIn extends Component {

    state = {
        email: '',
        password: ''
    }

    onSubmitHandler = (event) => {
        event.preventDefault();//to prevent default reloading
        this.props.onAuth(this.state.email, this.state.password)
    }

    changeHandler = (event) => {
        let key = event.target.name
        this.setState(
            {
                ...this.state,
                [key]: event.target.value,
                id: this.props.id
            })
    }

    render() {
        return (
            <form onSubmit={this.onSubmitHandler}>
                <div className="row">
                    <div className="col-md-6 form-group" >
                        <label>Email</label>
                        <input className='form-control' name="email" type="text" placeholder="Email" onChange={(event) => this.changeHandler(event)} />
                    </div>
                    <div className="col-md-6 form-group" >
                        <label>Password</label>
                        <input className='form-control' name="password" type="text" placeholder="Password" onChange={(event) => this.changeHandler(event)} />
                    </div>
                    <div className="col-md-6 form-group" >
                        <button type="submit" className="btn btn-primary">Submit</button>
                    </div>
                </div>
            </form>
        );
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onAuth: (email, password) => dispatch(actionTypes.auth(email, password))
    }
}

export default connect(null, mapDispatchToProps)(SignUpIn);