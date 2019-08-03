import React, { Component } from 'react';
import { connect } from 'react-redux';
import CounterControl from '../../components/CounterControl/CounterControl';
import CounterOutput from '../../components/CounterOutput/CounterOutput';
import * as actionTypes from './../../store/action'

class Counter extends Component {
    state = {
        counter: 0
    }

    counterChangedHandler = (action, value) => {
        switch (action) {
            case 'inc':
                this.setState((prevState) => { return { counter: prevState.counter + 1 } })
                break;
            case 'dec':
                this.setState((prevState) => { return { counter: prevState.counter - 1 } })
                break;
            case 'add':
                this.setState((prevState) => { return { counter: prevState.counter + value } })
                break;
            case 'sub':
                this.setState((prevState) => { return { counter: prevState.counter - value } })
                break;
        }
    }

    render() {
        return (
            <div>
                <CounterOutput value={this.props.ctr} />
                <CounterControl label="Increment" clicked={this.props.onIncrementCtr} />
                <CounterControl label="Decrement" clicked={this.props.onDecrementCtr} />
                <CounterControl label="Add 5" clicked={this.props.onAdd} />
                <CounterControl label="Subtract 5" clicked={this.props.onSubtract} />
                <button onClick={this.props.onStoreResult}>Store Data</button>
                hi
                {this.props.storedRes}

            </div>
        );
    }
}

/**
 * Accessing the redux store
 * HEre we are trying to access the store data
 * Here the store data is the counter
 * `state` here is given by react-redux to us which represents
 * the redux store data and that we are assigning to local props
 */
const mapStateToProps = state => {
    return {
        ctr: state.ctr.counter,
        storedRes: state.res.results
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onIncrementCtr: () => dispatch({ type: actionTypes.INCREMENT }),
        onDecrementCtr: () => dispatch({ type: actionTypes.DECREMENT }),
        onAdd: () => dispatch({ type: actionTypes.ADD, payload: 5 }),
        onSubtract: () => dispatch({ type: actionTypes.SUBTRACT, payload: 5 }),
        onStoreResult: () => dispatch({ type: actionTypes.STORE_RESULT }),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Counter);