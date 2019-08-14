import * as actionTypes from './action'

let initialState = {
    ingredients: {
        salad: 1,
        cheese: 1
    },
    totalPrice: 4,
}

const reducer = (state = initialState, action) => {
    debugger
    switch (action.type) {
        case actionTypes.ADD_INGREDIENT:
            return {
                ...state,
                ingredients: {
                    ...state.ingredients,
                    [action.ingredientName]: state.ingredients[action.ingredientName] + 1
                }
            }
        case actionTypes.REMOVE_INGREDIENT:
            return {
                ...state,
                ingredients: {
                    ...state.ingredients,
                    [action.ingredientName]: state.ingredients[action.ingredientName] - 1
                }
            }
        default:
            return state
    }
}

export default reducer;
