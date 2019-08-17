import React, { Component } from 'react';
import { connect } from 'react-redux';
import SourceDestination from './SourceDestination';
import * as actionTypes from './../store/action'

const spanTrainStyle = {
    fontSize: '16px',
    fontWeight: 'bold',
    color: 'blue',
    textDecoration: 'underline',
    cursor: 'default'
}

const srcDest = {
    color: 'gray',
    paddingLeft: '100px'
}

class Trains extends Component {
    componentDidMount() {
        this.props.oninitialState()
        console.log('Trains', this.props.trns)
    }
    navigateToForm(train) {
        this.props.history.push({
            pathname: '/book',
            search: `code=${train.code}`
        })
    }

    render() {
        return (
            <div className="container">
                <SourceDestination /> <br />
                <ul className="list-group list-group-flush">
                    {this.props.trns.map((train, ind) => {
                        return (
                            <li className="list-group-item" key={ind}>
                                <span onClick={() => this.navigateToForm(train)} style={spanTrainStyle}>{train.name}</span>
                                <span style={srcDest}>{train.src} to {train.dest}</span>
                                <span className={train.status == 'Available' ? 'avail' : 'full'}>{train.status}</span>
                            </li>
                        )
                    })}
                </ul>
            </div >
        )
    }
}

const mapStateToProps = (state) => {
    return {
        trns: state.trains
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        /**
         * Fetch The Initial State From Backend
         */
        oninitialState: () => dispatch(actionTypes.initialState())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Trains);
