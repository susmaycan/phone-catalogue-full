import {
    FETCH_SUCCESS,
    FETCH_REQUEST,
    FETCH_ERROR,
    SET_FILTER
} from '../actions'

const reducer = (state = {}, action) => {
    switch (action.type) {
        case FETCH_REQUEST:
            return {...state, isLoading: true, phones: [], searchTerm: ''};
        case FETCH_SUCCESS:
            return {...state, isLoading: false, phones: action.payload, searchTerm: ''};
        case FETCH_ERROR:
            return {...state, isLoading: false, error:true};
        case SET_FILTER:
            return {...state, searchTerm: action.text};
        default:
            return state;
    }
};

export default reducer;
