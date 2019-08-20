import React, { Component } from 'react';
import { connect } from 'react-redux'
import * as actionTypes from './../store/action'
import FormFields from './FormFields';

class Form extends Component {
    state = {
        formData: [],
        passengerCnt: 0
    }

    incrementPassengerCnt = () => {
        /**
         * To Modify the local state use setState, 
         * Redux state you can use action
         */
        this.setState({ ...this.state, passengerCnt: this.state.passengerCnt + 1 })
    }

    submitHandler = () => {
        // this.setState({ ...this.state, myBookings: this.state.formData })
        this.props.onSubmit(this.state.formData)
        this.props.history.push('/bookings')
        console.log('submit', this.state.formData)
    }

    render() {
        const search = this.props.location.search;
        const params = new URLSearchParams(search);
        const train_code = params.get('code');
        // this.props.onFetchByCode(train_code)

        let filteredTrains = this.props.train.filter((each) => {
            if (each.code.toUpperCase().indexOf(train_code.toUpperCase()) !== -1) {
                return each;
            }
        })

        return (
            <div>
                {filteredTrains.map((train) => {
                    return (
                        <React.Fragment>
                            <div className="container">
                                <h5 style={{ 'textAlign': 'center', "color": 'gray' }}>Booking Form</h5> <br />
                                <div className="train-about row" key={train.code}>
                                    <div style={{ "fontWeight": 'bold' }} className="col-md-3">{train.name}</div>
                                    <div style={{ 'color': 'green', 'fontWeight': 'bold' }} className="col-md-3">{train.status}</div>
                                    <div className="col-md-2">{train.src}</div>
                                    <div className="col-md-2">to</div>
                                    <div className="col-md-2">{train.dest}</div>
                                </div><br />

                                <ul>{Array.from(Array(this.state.passengerCnt), (e, i) => {
                                    return <FormFields train={train.name} id={i} formState={this.state} />
                                })}</ul>

                                <div className="col-md-6 form-group row" >
                                    <div className="col-md-4">
                                        <button className="btn btn-primary" onClick={this.incrementPassengerCnt}>Add Passengers</button>
                                    </div>
                                    <div className="col-md-4">
                                        <button className="btn btn-success" onClick={this.submitHandler}>Submit</button>
                                    </div>
                                </div>
                            </div>
                        </React.Fragment>
                    )
                })}
            </div>
        );
    }
}

const mapStoreToProps = (props) => {
    return {
        train: props.trains
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        onFetchByCode: (code) => dispatch(actionTypes.fetchbycode(code)),
        onSubmit: (data) => dispatch(actionTypes.onSubmit(data)),
    }
}

export default connect(mapStoreToProps, mapDispatchToProps)(Form);