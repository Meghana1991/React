import React, { Component } from 'react';
import Counter from './Counter'

class Counters extends Component {

    render() {
        return (
            <div>
                {this.props.counters.map((counter, i) => <Counter
                    key={i}
                    counter={counter}
                    onDelete={this.props.handleDelete}
                    onReset={this.props.handleReset}
                    onHandleIncrement={this.props.handleIncrement}>
                    <h5>Inner Element</h5>
                </Counter>)}
            </div>
        );
    }
}

export default Counters;