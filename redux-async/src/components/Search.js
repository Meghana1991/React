import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actionTypes from './../store/action'

class Search extends Component {
    render() {
        return (
            <div className="search-bar">
                <input type="text" onKeyUp={(event) => this.props.onSearch(event.target.value)} placeholder="Search..." />
            </div>
        );
    }
}

const mapStoreToProps = (props) => {
    return {

    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onSearch: (searchTxt) => dispatch({ type: actionTypes.SEARCH, payload: searchTxt }),
    }
}

export default connect(mapStoreToProps, mapDispatchToProps)(Search);