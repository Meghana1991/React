import React, { useState } from 'react';

import Card from '../UI/Card';
import './IngredientForm.css';

const IngredientForm = React.memo(props => {
  // const initialState = useState({ title: 'Sai', amount: '' })
  /**
   * Example for Object State
   */
  /**
   * useState returns 2 things, one is initial value and other is the callback
   * The callback is used as set state or give new values to the state
   */
  let [initialState, setStateFunction] = useState({ title: 'Sai', amount: '' })
  /**
   * Example for multiple states
   * with non object type
   */
  let [amountState, setAmountFunction] = useState(4)
  const submitHandler = event => {
    event.preventDefault();

    props.onAddHandler({
      title: 'Sai Sweet',
      amount: 100
    })
    // ...
  };

  return (
    <section className="ingredient-form">
      <Card>
        <form onSubmit={submitHandler}>
          <div className="form-control">
            <label htmlFor="title">title</label>
            <input type="text" id="title"
              value={initialState.title}
              /*onChange={(event) => {
                initialState[1]({
                  title: event.target.value,
                  amount: initialState[0].amount
                })
              }}*/
              onChange={event => {
                const newState = event.target.value
                setStateFunction(previousState => ({
                  title: newState,
                  amount: previousState.amount
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
