import React from 'react';
import './App.css';
import BurgerBuilder from '../src/containers/BurgerBuilder/BurgerBuilder'
import Layout from './hoc/Layout/Layout'
import Checkout from './containers/Checkout/Checkout';
import { Route, Switch } from 'react-router-dom'

function App() {
  return (
    <div>
      <Layout>
        {/* <BurgerBuilder></BurgerBuilder>
        <Checkout /> */}
        <Switch>
          <Route path='/checkout' component={Checkout} />
          <Route path='/' component={BurgerBuilder} />
        </Switch>
      </Layout>
    </div>
  );
}

export default App;