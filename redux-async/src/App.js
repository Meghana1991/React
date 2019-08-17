import React from 'react';
import './App.css';
import Bookings from './components/Bookings';
import Home from './components/Home';
import Trains from './components/Trains';
import Form from './components/Form'

import { Route, Switch, Link } from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <a className="navbar-brand" href="#">PMTC</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav">
            <Link className='nav-item nav-link' to="/">Home <span className="sr-only">(current)</span></Link>
            <Link className='nav-item nav-link' to="/trains">Trains</Link>
            <Link className='nav-item nav-link' to="/bookings">My Bookings</Link>
          </div>
        </div>
      </nav>

      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/trains' component={Trains} />
        <Route path='/bookings' component={Bookings} />
        <Route path='/book' component={Form} />
      </Switch>

    </div>
  );
}

export default App;
