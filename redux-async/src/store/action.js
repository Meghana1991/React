export const SEARCH = 'SEARCH';
export const SOURCE = 'SOURCE';
export const DESTINATION = 'DESTINATION';
export const INITIALSTATE = 'INITIALSTATE';
export const FETCHBYCODE = 'FETCHBYCODE';

export const search = (payload) => {
    return {
        type: SEARCH,
        payload: payload
    }
}

export const source = (payload) => {
    return {
        type: SOURCE,
        payload: payload
    }
}

export const destination = (payload) => {
    return {
        type: DESTINATION,
        payload: payload
    }
}

export const fetchRes = (payload) => {
    return {
        type: FETCHBYCODE,
        payload: payload
    }
}

export const fetchInitialState = (payload) => {
    return {
        type: INITIALSTATE,
        payload: payload
    }
}

export const fetchbycode = (payload) => {
    return (dispatch) => {
        // Async API
        setTimeout(() => {
            dispatch(fetchRes(payload))
        }, 2000)
    }
}

export const initialState = () => {
    return (dispatch) => {
        // Async API
        setTimeout(() => {
            //Backend Response
            let response = [{ code: 'RAJ120', name: 'Rajdhani', src: 'Bangalore', dest: 'Mysore', status: 'Available' },
            { code: 'SHA120', name: 'Shatabdi', src: 'Mysore', dest: 'Bangalore', status: 'Full' },
            { code: 'JAN120', name: 'Janata', src: 'Tirupati', dest: 'Bangalore', status: 'Available' },]
            dispatch(fetchInitialState(response))
        })
    }
}