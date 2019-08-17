import React, { Component } from 'react';
import Search from './Search';
import { connect } from 'react-redux';
import * as actionTypes from './../store/action'

class SourceDestination extends Component {
    render() {
        return (
            <div className="search-bar row">
                <div className="col-md-4">
                    <input type="text" onKeyUp={(event) => this.props.onSource(event.target.value)} placeholder="Source" />
                </div>
                <div className="col-md-4">
                    <input type="text" onKeyUp={(event) => this.props.onDest(event.target.value)} placeholder="Destination" />
                </div>
                <div className="col-md-4">
                    <Search />
                </div>
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
        onSource: (src) => dispatch(actionTypes.source(src)),
        onDest: (dest) => dispatch(actionTypes.destination(dest)),
    }
}

export default connect(mapStoreToProps, mapDispatchToProps)(SourceDestination);