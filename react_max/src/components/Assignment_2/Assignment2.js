import React, { Component } from 'react';
import ValidationComp from './ValidationComp';
import CharComponent from './CharComp';
import './Assignment2.css';
import ErrorBoundary from './ErrorBoundry';

class Assignment2 extends Component {
    state = {
        userInput: ''
    }

    displayLength = (event) => {
        console.log(event.target.value)
        this.setState({ userInput: event.target.value })
    }

    removeChar = (index) => {
        const text = this.state.userInput.split('');
        text.splice(index, 1)
        const updateText = text.join('');
        this.setState({ userInput: updateText })
    }

    render() {
        let classes = [];
        if (this.state.userInput.length < 5) {
            classes.push("red")
        } else {
            classes.push("green")
        }
        // A list of CharComponents
        const charList = this.state.userInput.split('').map((each, index) => {
            return <CharComponent char={each} key={index} clicked={() => this.removeChar(index)} />
        });

        return <ErrorBoundary>
            <div>
                <input type="text"
                    onChange={this.displayLength}
                    value={this.state.userInput} />
                <p className={classes.join(' ')}>The text is - {this.state.userInput}</p>
                <ValidationComp userInput={this.state.userInput}></ValidationComp>
                {/* Loop Through */}
                {charList}
            </div></ErrorBoundary>
    }
}

export default Assignment2;
