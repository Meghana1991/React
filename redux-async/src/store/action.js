export const SEARCH = 'SEARCH';
export const SOURCE = 'SOURCE';
export const DESTINATION = 'DESTINATION';
export const INITIALSTATE = 'INITIALSTATE';
export const FETCHBYCODE = 'FETCHBYCODE';
export const ONSUBMIT = 'ONSUBMIT';
export const AUTHSTART = 'AUTHSTART';
export const AUTHSUCCESS = 'AUTHSUCCESS';
export const AUTHFAIL = 'AUTHFAIL';

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

export const onSubmit = (payload) => {
    return {
        type: ONSUBMIT,
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

/**
 * Authentication Section
 */

export const authStart = () => {
    console.log('auth starte')
    return {
        type: AUTHSTART,
    }
}

export const authSuccess = (authData) => {
    return {
        type: AUTHSUCCESS,
        authData: authData
    }
}

export const authFail = (error) => {
    return {
        type: AUTHFAIL,
        error: error
    }
}

/**
 * Async code doing the authentication
 */
export const auth = (email, password) => {
    return dispatch => {
        dispatch(authStart())
    }
}