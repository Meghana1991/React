import React, { Component } from 'react';
import './App.css';
import Person from './../components/Persons/Person/Person'
import Persons from './../components/Persons/Persons'
import Cockpit from './../components/Cockpit/Cockpit'
import Animal from './../components/Animal/Animal'
import AnimalHooks from './../components/Animal/AnimalHooks'

class App extends Component {
  constructor(props) {
    super(props);
    console.log('App js constructor called');
    /**
     * You can define state here instead of doing after constructor
     * but the most modern way is to do after constructor which
     * actually picks up the state and calls super in the constructor
     * internally without we explicity defining inside
     */
  }
  state = {
    person: [
      { id: "1", name: "Sai", type: "Sweety" },
      { id: "2", name: "Manju", type: "Naughty" }
    ],

    otherState: [],
    showPersons: true,
    showCockpit: true
  };

  static getDerivedStateFromProps(props, state) {
    console.log('getDerivedStateFromProps', props)
    return state;
  }

  switchNameEventHandler = (newName) => {
    this.setState({
      person: [
        { name: "Sai Baba", type: "Sweety" },
        { name: newName, type: "Naughty" }
      ]
    })
  };

  changedFn = (event) => {
    const val = event.target.value;
    this.setState({
      person: [
        { name: "Sai Baba", type: "Sweety" },
        { name: val, type: "Naughty" }
      ]
    })
  }

  togglePersonFn = () => {
    const doesShow = this.state.showPersons;
    this.setState({ showPersons: !doesShow })
  }

  deletePerson = (index) => {
    // Bad approach to copy state and manipulate directly
    // const persons = this.state.person;

    // 1 Approach
    // const persons = this.state.person.splice()

    // 2 Approach
    const persons = [...this.state.person];
    persons.splice(index, 1)
    this.setState({ person: persons })
  }

  componentDidMount() {
    console.log('componentDidMount called')
  }

  render() {
    console.log('render called')
    // Simple ternary conditions are possible in JSX
    // Hence write conditions outside the jsx block
    let persons
    if (this.state.showPersons) {
      persons = <div>
        {/* Loop through the state
            and print the components */}
        {/* {this.state.person.map((p, i) => {
          return <Person
            name={p.name}
            age={p.type}
            clickFn={() => this.deletePerson(i)}
            key={p.id} />
        })} */}

        <Persons
          ps={this.state.person}
          clickFn={this.deletePerson}
        ></Persons>
        <hr />
        <Person
          name={this.state.person[0].name}
          type={this.state.person[0].type}></Person>

        {/* Another way of writing function call */}
        {/* <Person
          clickFn={this.switchNameEventHandler.bind(this, 'Meghana')}
          changedFn={this.changedFn}
          name={this.state.person[1].name}
          type={this.state.person[1].type}></Person> */}
      </div>
    }
    return (
      <div className="App">
        <h2>{this.props.customTitlle}</h2>
        {/* <Person name="Sai" type="Sweety">I am God</Person>
        <Person name="Manju" type="Naughty" /> */}

        {/* 2 ways of passing the params to the function
        1) bind()
        2) returning the function call with param
         */}
        {/* <button
            onClick={() => this.switchNameEventHandler('Smoo')}>CLick me</button> */}
        <button onClick={() => { this.setState({ showCockpit: false }) }}>Remove Cockpit useEffect demo</button>

        {this.state.showCockpit ?
          <Cockpit clicked={this.togglePersonFn}></Cockpit>
          : null}
        {/* Conditional show and hide */}

        {persons}

        {/* {
          this.state.showPersons ? 
        <div>
          <Person
            name={this.state.person[0].name}
            type={this.state.person[0].type}></Person>

          <Person
            clickFn={this.switchNameEventHandler.bind(this, 'Meghana')}
            changedFn={this.changedFn}
            name={this.state.person[1].name}
            type={this.state.person[1].type}></Person>
        </div>
        : null
        } */}
        <hr />
        {/* Refs Example */}
        <Animal name="Cat"></Animal>
        <AnimalHooks></AnimalHooks>
      </div>
    );

    //return React.createElement("div", {className:'App'}, React.createElement("h1", null, "Hi I am child text here"))
  }
}

export default App;
