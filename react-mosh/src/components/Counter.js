import React, { Component } from 'react'

class Counter extends Component {

    // state = {
    //     counter: this.props.counter.value,
    //     imageUrl: 'https://picsum.photos/200',
    //     tags: ['tag_One', 'tag_Two']
    // }

    styles = {
        fontWeight: "bold",
        color: "white"
    }

    /* constructor() {
         super()
         console.log('From constructor', this)
         this.handleIncrement = this.handleIncrement.bind(this)
     }
 
     handleIncrement() {
         console.log('Stand alone', this)
     } */

    // handleIncrement = () => {
    //     this.setState({ counter: this.state.counter + 1 })
    //     // console.log('Stand alone', this)
    // }

    render() {
        return (
            <div>
                {this.props.children}
                {/* <span style={{ fontSize: 30 }}>Inline Font</span> */}
                <span style={this.styles} className={this.getClassNameFn()}>{this.props.counter.value}</span>
                {/* <span style={this.styles} className="badge badge-primary m-2">{this.state.counter}</span> */}
                {/* <img src={this.state.imageUrl} /> */}
                <button onClick={() => this.props.onHandleIncrement(this.props.counter)} className="btn btn-secondary">Increment</button>
                <button onClick={this.props.onReset} className="btn btn-warning m-2">Reset</button>
                <button
                    onClick={() => this.props.onDelete(this.props.counter.id)}
                    className="btn btn-danger m-2">Delete</button>
                {/* {this.renderTags()} */}
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
        classes += this.props.counter.value == 0 ? "warning" : "primary";
        return classes;
    }
}
export default Counter;