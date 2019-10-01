import React, { useState, useEffect, useCallback } from 'react';
import IngredientList from './IngredientList'
import IngredientForm from './IngredientForm';
import Search from './Search';

const Ingredients = () => {
  const [userIngredients, setIngredients] = useState([]);

  /**
   * Fetch the initial Data
   * using the useEffect will make it behave like ComponentDidMount + ComponentDidUpdate
   * By passing the second param [] to the useEffect, it will make it behave like only ComponentDidMount
   */
  useEffect(() => {
    fetch('https://react-hooks-96c2a.firebaseio.com/ingredients.json').then(response => {
      return response.json();
    }).then(responseData => {
      const loadIngredients = [];
      for (const key in responseData) {
        loadIngredients.push({
          id: key,
          title: responseData[key].title,
          amount: responseData[key].amount
        });
      }
      setIngredients(loadIngredients)
    })
  }, []);

  const addIngredient = ingredient => {
    fetch('https://react-hooks-96c2a.firebaseio.com/ingredients.json', {
      method: 'POST',
      body: JSON.stringify(ingredient),
      headers: { 'Content-Type': 'application/json' }
    }).then(response => {
      return response.json();
    }).then(responseData => {
      setIngredients(previousState =>
        // Here the responseData.name is the firebase key generated itself
        [...previousState, {
          id: responseData.name,
          ...ingredient
        }]
      )
    })
  }

  const onLoadIngredientsHandler = useCallback(ingredientList => {
    console.log('ingredientList', ingredientList)
    setIngredients(ingredientList)
  }, [])

  const onRemoveItemHandler = ingredientId => {
    setIngredients(previousIngr => previousIngr.filter((val) => val.id != ingredientId))
  }

  return (
    <div className="App">
      <IngredientForm onAddHandler={addIngredient} />
      <section>
        <Search onLoadIngredients={onLoadIngredientsHandler} />
        <IngredientList
          ingredients={userIngredients}
          onRemoveItem={onRemoveItemHandler}></IngredientList>
        {/* Need to add list here! */}
      </section>
    </div>
  );
}

export default Ingredients;