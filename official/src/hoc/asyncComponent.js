import React, { Component } from 'react';

/**
 * LEGACYYYYYYYYYYYYYYYYYYYYYY
 * This is a hoc which accepts a class or function and
 * converts it into asynchronous call
 */

function asyncComponent(importComponent) {
    return class extends Component {
        state = {
            component: null
        }
        componentDidMount() {
            importComponent().then(cmp => {
                this.setState({ component: cmp.default })
            })
        }

        render() {
            let C = this.state.component;
            return C ? <C {...this.props} /> : null
        }
    }
}
export default asyncComponent