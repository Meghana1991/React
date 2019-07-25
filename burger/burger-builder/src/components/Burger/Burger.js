import BurgerIngredient from "./BurgerIngredients/BurgerIngredients";
import React from 'react';
import "./Burger.css"

const Burger = (props) => {
    /**
     * Since we need to loop through the ingredients we need to map but the 
     * map runs for arrays not for object, hence convery object to array or loop through the object
     */

    let transformedIngredients = Object.keys(props.ingredients).map((each) => {
        // Array() is javascript function which when given count creates the array like Array(5).
        return [...Array(props.ingredients[each])].map((_, i) => {
            return <BurgerIngredient key={each + i} type={each} />
        })
    }).reduce((arr, el) => {
        return arr.concat(el)
    }, []);
    // The above reduce flattens the array

    if (transformedIngredients.length === 0) {
        transformedIngredients = <p>Please Start Adding Ingredients</p>
    }

    return (
        <div className="Burger">
            <BurgerIngredient type="bread-top" />
            {/* <BurgerIngredient type="cheese" />
            <BurgerIngredient type="salad"></BurgerIngredient> */}
            {transformedIngredients}
            <BurgerIngredient type="bread-bottom"></BurgerIngredient>
        </div>
    )
}

export default Burger;