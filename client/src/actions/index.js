import api from '../api/phone'

export const FETCH_REQUEST = 'FETCH_REQUEST'
export const FETCH_SUCCESS = 'FETCH_SUCCESS'
export const FETCH_ERROR = 'FETCH_ERROR'
export const SET_FILTER = 'SET_FILTER'

export function fetchPhones() {
    return (dispatch) => {
        dispatch(fetchPhonesRequest());
        return api.phones.read()
            .then(response => {
                if (response.status === 200) {
                    dispatch(fetchPhonesSuccess(response.data))
                } else {
                    dispatch(fetchPhonesError())
                }
            })
            .catch(error => {
                dispatch(fetchPhonesError())
            })
    }
}

export function setFilterSearch(text) {
    return (dispatch) => {
        dispatch(setFilter(text));
    }
}

function fetchPhonesRequest() {
    return {
        type: FETCH_REQUEST
    }
}

function fetchPhonesSuccess(payload) {
    return {
        type: FETCH_SUCCESS,
        payload
    }
}

function fetchPhonesError() {
    return {
        type: FETCH_ERROR
    }
}

function setFilter(text) {
    return {
        type: SET_FILTER,
        text
    }
}