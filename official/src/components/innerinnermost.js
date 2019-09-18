import React, { Component } from 'react';
import { colorContextVr } from './lazy'

class InnerInnerMost extends Component {
    // static contextType = colorContextVr;

    render() {
        // console.log('contextType', contextType)
        return (
            <div>
                Data from Context multiple levels down
                {/* {this.contextType} */}
            </div >
        )
    }
}

export default InnerInnerMost