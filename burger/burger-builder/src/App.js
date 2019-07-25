import React from 'react';
import './App.css';
import BurgerBuilder from '../src/containers/BurgerBuilder/BurgerBuilder'
import Layout from './hoc/Layout/Layout'

function App() {
  return (
    <div>
      <Layout>
        <BurgerBuilder></BurgerBuilder>
      </Layout>
    </div>
  );
}

export default App;