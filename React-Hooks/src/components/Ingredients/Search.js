import React, { useState, useEffect } from 'react';

import Card from '../UI/Card';
import './Search.css';

const Search = React.memo(props => {
  const { onLoadIngredients } = props;
  const [enteredFilter, setEnteredFilter] = useState('')
  /**
   * Once done with the filter setting,
   * call the fetch api. Only on componentDidMount and only on 
   * change of the enteredFilter array, the hook is called
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
      let filteredIngr = getFilteredList(loadIngredients)
      props.onLoadIngredients(filteredIngr)
    })
  }, [enteredFilter, onLoadIngredients])

  const getFilteredList = (allIngredients) => {
    return allIngredients.filter((each) => (each.title) ? (each.title.toUpperCase().indexOf(enteredFilter.toUpperCase()) !== -1) : '')
  }

  return (
    <section className="search">
      <Card>
        <div className="search-input">
          <label>Filter by Title</label>
          <input type="text"
            value={enteredFilter}
            onChange={(event) => setEnteredFilter(event.target.value)}
          />
        </div>
      </Card>
    </section>
  );
});

export default Search;
