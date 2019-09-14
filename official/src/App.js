import React, { Component, Suspense } from 'react';
import './App.css';
import BasicComponent from './components/BasicComponent';
import HideShow from './components/hideShow';
import Form from './components/Form';
import Basics2 from './components/Basics2';
import SplitPane from './components/SplitPane';
import { Route, Link } from 'react-router-dom'
import asyncComponent from '../src/hoc/asyncComponent'
import Lazy from './components/lazy'
// import RightSide from './components/rightSide'

/**
 * LEGACYYYYYYYYYYYYYYYYYYYYYY
 * Import a Component lazily
 * The below piece of code runs whenever this variable is used
 * In the browser network we can see 1.chunk.js getting loaded on click of this
 */
let AsyncComponent = asyncComponent(() => {
  return import('./components/rightSide')
})

let AsyncLazy = React.lazy(() => import('./components/lazy'))

class App extends Component {
  state = {
    name: '',
    interest: '',
    toggle: false
  }

  constructor() {
    super()
    this.submitHandler = this.submitHandler.bind(this)
  }

  changeName = () => {
    this.setState({ name: 'Sai' })
  }

  toggleHandler = () => {
    let temp = this.state.toggle
    this.setState({ toggle: !temp })
  }

  changeHandler = (event) => {
    // this.setState({ name: event.target.value })
    this.setState(
      {
        [event.target.name]: event.target.value
      }
    )
  }

  submitHandler(event) {
    console.log('Your details ', this.state.name, this.state.interest)
    event.preventDefault();
  }

  render() {
    return (
      <div className="App" >
        {/* <BasicComponent user={this.state.name} clickHandler={this.changeName} /> */}
        {/* <HideShow toggleVr={this.state.toggle} toggleHandler={this.toggleHandler}></HideShow> */}
        <br />
        {/* <Form changeHandler={this.changeHandler} submitHandler={this.submitHandler}></Form><br /> */}
        {/* <Basics2><b>I am from App. Yo There</b></Basics2> */}
        {/* <hr /> */}
        <SplitPane
          left={<BasicComponent user={this.state.name} clickHandler={this.changeName} />}
          right={
            <div>
              <Form changeHandler={this.changeHandler} submitHandler={this.submitHandler} />
              <HideShow toggleVr={this.state.toggle} toggleHandler={this.toggleHandler} />
            </div>}>
        </SplitPane>
        <hr />
        <ul className="nav nav-tabs">
          <li className="nav-item">
            <Link className="nav-link active" to='/lhs'>Left</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to='/rhs'>Right</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to='/lazy'>Lazy</Link>
          </li>
        </ul>
        {/* 2 ways of routing of components 
              - passing component as a whole like below
              - passing the required dependent attributes each by each 
              <Route
                path='/dashboard'
                component={Dashboard}
                isAuthed={true}
              />
              */}
        {/* 
          In eager loading, both the below components will be loaded without actually navigating to route
          In lazy loading, unless you navigate to the route, the component doesnot download
        */}
        {/* <Route path='/rhs' component={() => <RightSide data='baby'></RightSide>}></Route> */}
        <Route path='/rhs' component={() => <AsyncComponent />}></Route>
        <Route path='/lhs' component={Basics2}></Route>
        <Route path='/lazy' render={() => (
          <Suspense fallback={<div>Loading it</div>}>
            <AsyncLazy />
          </Suspense>
        )} />
      </div>
    );
  }
}
export default App;