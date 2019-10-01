import React, { Component } from 'react';
import InnerMost from './innerinnermost'
import { ColorContext } from './lazy'

class Inner extends Component {
    render() {
        let props = this.props;
        let theme = this.context
        console.log(theme, 'theme')
        return (
            <div>
                theme
                <InnerMost />
            </div>
        )
    }
}

Inner.contextType = ColorContext
export default Inner