import * as actionTypes from './action'

let initialState = {
    trains: [
        // { code: 'RAJ120', name: 'Rajdhani', src: 'Bangalore', dest: 'Mysore', status: 'Available' },
        // { code: 'SHA120', name: 'Shatabdi', src: 'Mysore', dest: 'Bangalore', status: 'Full' },
        // { code: 'JAN120', name: 'Janata', src: 'Tirupati', dest: 'Bangalore', status: 'Available' },
    ],
    myBookings: []
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_PASSENGERS':
            return;
        case 'REMOVE_PASSENGERS':
            return;
        case actionTypes.ONSUBMIT:
            return {
                ...state,
                myBookings: action.payload
            }
        case actionTypes.INITIALSTATE:
            return {
                ...state,
                trains: action.payload
            }
        case actionTypes.FETCHBYCODE:
            console.log('async in the actionCreator')
            return { ...state };
        case actionTypes.SEARCH:
            state = initialState

            if (action.payload) {
                let replica = { ...state }
                let filteredTrains = replica.trains.filter((train) => {
                    if (train.name.toUpperCase().indexOf(action.payload.toUpperCase()) !== -1) {
                        return train;
                    }
                })
                return {
                    ...state,
                    trains: filteredTrains
                }

            } else {
                return state
            }
        case actionTypes.SOURCE:
            state = initialState
            if (action.payload) {
                let filteredTrains = state.trains.filter((train) => {
                    if (train.src.toUpperCase().indexOf(action.payload.toUpperCase()) !== -1) {
                        return train;
                    }
                })
                return {
                    ...state,
                    trains: filteredTrains
                }

            } else {
                return state
            }
        case actionTypes.DESTINATION:
            state = initialState
            if (action.payload) {
                let filteredTrains = state.trains.filter((train) => {
                    if (train.dest.toUpperCase().indexOf(action.payload.toUpperCase()) !== -1) {
                        return train;
                    }
                })
                return {
                    ...state,
                    trains: filteredTrains
                }

            } else {
                return state
            }
        default: {
            state = initialState;
            return state;
        }
    }
}

export default reducer;