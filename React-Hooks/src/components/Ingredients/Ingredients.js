import React, { useState } from 'react';
import IngredientList from './IngredientList'
import IngredientForm from './IngredientForm';
import Search from './Search';

const Ingredients = () => {
  const [userIngredients, setIngredients] = useState([]);
  const addIngredient = ingredient => {
    console.log('ingredients', userIngredients)
    setIngredients(previousState =>
      [...previousState, {
        id: ((Math.random() * 1221).toFixed()).toString(),
        ...ingredient
      }]
    )
  }

  const onRemoveItemHandler = ingredientId => {
    setIngredients(previousIngr => previousIngr.filter((val) => val.id != ingredientId))
  }

  return (
    <div className="App">
      <IngredientForm onAddHandler={addIngredient} />
      <section>
        <Search />
        <IngredientList
          ingredients={userIngredients}
          onRemoveItem={onRemoveItemHandler}></IngredientList>
        {/* Need to add list here! */}
      </section>
    </div>
  );
}

export default Ingredients;