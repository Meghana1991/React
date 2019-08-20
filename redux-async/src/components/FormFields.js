import React, { Component } from 'react';

class FormFields extends Component {
    state = {
        trainName: '',
        id: '',
        name: '',
        age: null,
        category: 'General',
        gender: ''
    }

    componentDidMount() {
        console.log('componentdidmount', this.props)
        this.setState({ ...this.state, trainName: this.props.train })
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

    onSave = () => {
        /**
         * Scenario if user edits existing
         */
        let index = this.props.formState.formData.findIndex((each) => each.id == this.props.id)
        if (index !== -1) {
            this.props.formState.formData[index] = this.state
        } else {
            this.props.formState.formData.push(this.state)

        }
    }

    render() {
        return (
            <div className="row">
                <div className="col-md-6 form-group" >
                    <label>Name</label>
                    <input className='form-control' name="name" type="text" placeholder="Enter your Name" onChange={(event) => this.changeHandler(event)} />
                </div>
                <div className="col-md-6 form-group" >
                    <label>Age</label>
                    <input className='form-control' name="age" type="text" placeholder="Enter your Age" onChange={(event) => this.changeHandler(event)} />
                </div>
                <div className="col-md-6 form-group" >
                    <label>Gender</label>
                    <select className='form-control' name="gender" onChange={(event) => this.changeHandler(event)} value={this.state.gender} >
                        <option disabled>Select</option>
                        <option value="M">Male</option>
                        <option value="F">Female</option>
                        <option value="T">Transgender</option>
                    </select>
                </div>
                <div className="col-md-6 form-group" >
                    <label>Category</label>
                    <select className='form-control' name="category" onChange={(event) => this.changeHandler(event)} value={this.state.category} >
                        <option disabled>Select</option>
                        <option value="General">General</option>
                        <option value="NonS">Non-Sleeper</option>
                        <option value="S">Sleeper</option>
                    </select>
                </div>
                <div className="col-md-6 form-group">
                    <button style={{ 'float': 'right' }} className="btn btn-success" onClick={this.onSave}>Save</button>
                </div>
            </div>
        );
    }
}

export default FormFields;