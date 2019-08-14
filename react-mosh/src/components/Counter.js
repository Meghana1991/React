import React, { Component } from 'react'

class Counter extends Component {

    state = {
        counter: 2,
        imageUrl: 'https://picsum.photos/200',
        tags: ['tag_One', 'tag_Two']
    }

    styles = {
        fontWeight: "bold",
        color: "white"
    }

    render() {
        return (
            <div>
                {/* <span style={{ fontSize: 30 }}>Inline Font</span> */}
                <span style={this.styles} className={this.getClassNameFn()}>{this.state.counter}</span>
                {/* <span style={this.styles} className="badge badge-primary m-2">{this.state.counter}</span> */}
                {/* <img src={this.state.imageUrl} /> */}
                <button className="btn btn-secondary">Increment</button>
                {this.renderTags()}
            </div>
        )
    }

    renderTags() {
        if (this.state.tags.length) {
            return (
                <ul>
                    {this.state.tags.map((tag, index) => <li key={index}>{tag} </li>)}
                </ul>
            )
        } else {
            return 'No Tags'
        }
    }
    getClassNameFn() {
        let classes = "badge m-2 badge-";
        classes += this.state.counter == 0 ? "warning" : "primary";
        return classes;
    }
}
export default Counter;