import React, { Component } from 'react';
import Courses from './containers/Courses/Courses';
import Users from './containers/Users/Users';
import Button from './components/NavButton/NavButton';
import { BrowserRouter } from 'react-router-dom';
import { Route, Link, Switch, Redirect } from 'react-router-dom';
import Course from './containers/Course/Course'

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          {/* Below are the ways we can navigate */}
          <Button title="Courses"
            navigate="/courses"></Button>

          <ul>
            <li><Link to="/users">Users</Link></li>
          </ul>

          {/* Route Setup
           */}
          <Switch>
            <Route path="/courses" component={Courses} />
            <Route path="/users" component={Users} />
            <Redirect from='/all-courses' to='/courses'></Redirect>
            <Route render={() => <h2>Not Found</h2>} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
