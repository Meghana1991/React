import React, { Component } from 'react';

class HideShow extends Component {
    render() {
        let element
        if (this.props.toggleVr) {
            element = <h1>Show</h1>
        } else {
            element = <h1>Hide</h1>
        }
        return (
            <div>
                {element}
                <button className="btn btn-primary" onClick={this.props.toggleHandler}>Toggle</button>
            </div>
        )
    }
}

export default HideShow