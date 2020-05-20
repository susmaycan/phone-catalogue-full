import ActionTypes from '../actions/actionTypes'

const INITIAL_STATE = {
    isLoading: false,
    error: false,
    phones: [],
    searchTerm: ''
}

const reducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case ActionTypes.FETCH_REQUEST:
            return {...state, isLoading: true}
        case ActionTypes.FETCH_SUCCESS:
            return {...state, isLoading: false, phones: action.payload}
        case ActionTypes.FETCH_ERROR:
            return {...state, isLoading: false, error:true}
        case ActionTypes.SET_FILTER:
            return {...state, searchTerm: action.text}
        default:
            return state
    }
}

export default reducer
