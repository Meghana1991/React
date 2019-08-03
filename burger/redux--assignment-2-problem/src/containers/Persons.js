import React, { Component } from 'react';
import * as actionTypes from './../store/action';
import Person from '../components/Person/Person';
import AddPerson from '../components/AddPerson/AddPerson';
import { connect } from 'react-redux'

class Persons extends Component {
    render() {
        return (
            <div>
                <AddPerson personAdded={this.props.onAddedPerson} />
                {this.props.prs.map(person => (
                    <Person
                        key={person.id}
                        name={person.name}
                        age={person.age}
                        clicked={() => this.props.onDeletePerson(person.id)} />
                ))}
            </div>
        );
    }
}

/**
 * Accessing the
 * slice of the state
 */
const mapStoreToProps = (state) => {
    return {
        prs: state.persons
    }
}

/**
 * Dispatch Actions
 */
const mapDispatchToProps = (dispatch) => {
    return {
        onAddedPerson: () => dispatch({ type: actionTypes.ADD }),
        onDeletePerson: (id) => dispatch({ type: actionTypes.DELETE, personId: id }),
    }
}

export default connect(mapStoreToProps, mapDispatchToProps)(Persons);