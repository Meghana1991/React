import React, { Component } from 'react';
import PropTypes from 'prop-types'

class PropTypesExample extends Component {
    render() {
        return (
            <div>
                <h1>The PropTypes is {this.props.name}</h1>
            </div>
        )
    }
}

PropTypesExample.propTypes = {
    name: PropTypes.string
}

export default PropTypesExample;