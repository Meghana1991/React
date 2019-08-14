import React, { Component } from 'react';
import './App.css';
import NavigationBar from './components/Navbar'
import Counters from './components/Counters'

class App extends Component {
  state = {
    counters: [
      { id: 1, value: 10 },
      { id: 2, value: 0 },
      { id: 3, value: 20 },
      { id: 4, value: 0 },
    ]
  }

  handleDelete = (counterId) => {
    const refinedObj = this.state.counters.filter(cnt => cnt.id !== counterId)
    this.setState({ counters: refinedObj })
  }

  handleReset = () => {
    const refinedObj = this.state.counters.map((cntr) => {
      cntr.value = 0;
      return cntr
    })

    this.setState({ counters: refinedObj })
  }

  handleIncrement = (counter) => {
    let copy = [...this.state.counters]
    let index = copy.indexOf(counter)
    console.log(index, 'index')
    copy[index].value++;
    this.setState({ counters: copy })
  }
  render() {
    return (
      <div className="App">
        <NavigationBar totalCounters={this.state.counters.length} />
        <main className='container'>
          <Counters counters={this.state.counters}
            handleDelete={this.handleDelete}
            handleReset={this.handleReset}
            handleIncrement={this.handleIncrement} />
        </main>
      </div>
    );
  }
}

export default App;