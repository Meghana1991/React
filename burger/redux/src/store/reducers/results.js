import * as actionTypes from './../action'

let initialState = {
    results: []
}
const resultsReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.STORE_RESULT:
            return {
                ...state,
                results: state.results.concat(state.counter)
            }
        default:
            return state
    }
}

export default resultsReducer