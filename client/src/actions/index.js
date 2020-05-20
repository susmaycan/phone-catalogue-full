import api from '../api/phone'
import ActionTypes from './actionTypes'

export function fetchPhones() {
    return (dispatch) => {
        dispatch(fetchPhonesRequest())
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
    return {
        type: ActionTypes.SET_FILTER,
        text
    }
}

function fetchPhonesRequest() {
    return {
        type: ActionTypes.FETCH_REQUEST
    }
}

function fetchPhonesSuccess(payload) {
    return {
        type: ActionTypes.FETCH_SUCCESS,
        payload
    }
}

function fetchPhonesError() {
    return {
        type: ActionTypes.FETCH_ERROR
    }
}
