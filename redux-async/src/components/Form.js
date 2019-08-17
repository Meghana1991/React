import React, { Component } from 'react';
import { connect } from 'react-redux'
import * as actionTypes from './../store/action'

class Form extends Component {
    componentDidMount() {
        const search = this.props.location.search;
        const params = new URLSearchParams(search);
        const train_code = params.get('code');
        this.props.onFetchByCode(train_code)
    }

    render() {
        return (
            <div>
                {this.props.train.map((train) => {
                    return (
                        <div key={train.code}>{train.name}</div>
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
        onFetchByCode: (code) => dispatch({ type: actionTypes.FETCHBYCODE, payload: code }),
    }
}
export default connect(mapStoreToProps, mapDispatchToProps)(Form);