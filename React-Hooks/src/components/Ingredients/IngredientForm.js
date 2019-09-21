import React, { useState } from 'react';

import Card from '../UI/Card';
import './IngredientForm.css';

const IngredientForm = React.memo(props => {
  // const initialState = useState({ name: 'Sai', amount: '' })
  /**
   * Example for Object State
   */
  let [initialState, setStateFunction] = useState({ name: 'Sai', amount: '' })
  /**
   * Example for multiple states
   * with non object type
   */
  let [amountState, setAmountFunction] = useState(4)
  const submitHandler = event => {
    event.preventDefault();
    props.onAddHandler({
      name: 'Sai Sweet',
      amount: 100
    })
    // ...
  };

  return (
    <section className="ingredient-form">
      <Card>
        <form onSubmit={submitHandler}>
          <div className="form-control">
            <label htmlFor="title">Name</label>
            <input type="text" id="title"
              value={initialState.name}
              /*onChange={(event) => {
                initialState[1]({
                  name: event.target.value,
                  amount: initialState[0].amount
                })
              }}*/
              onChange={event => {
                const newState = event.target.value
                setStateFunction(previousState => ({
                  name: newState,
                  amount: previousState.name
                }))
              }}
            />
          </div>
          <div className="form-control">
            <label htmlFor="amount">Amount</label>
            <input type="number"
              value={amountState}
              onChange={(event) => setAmountFunction(event.target.value)}
              id="amount" />
          </div>
          <div className="ingredient-form__actions">
            <button type="submit">Add Ingredient</button>
          </div>
        </form>
      </Card>
    </section>
  );
});

export default IngredientForm;
