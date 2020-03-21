import {
    FETCH_SUCCESS,
    FETCH_REQUEST,
    FETCH_ERROR
} from '../actions'

const reducer = (state = {}, action) => {
    switch (action.type) {
        case FETCH_REQUEST:
            return {...state, isLoading: true};
        case FETCH_SUCCESS:
            return {...state, isLoading: false, phones: action.payload};
        case FETCH_ERROR:
            return {...state, isLoading: false, error:true};
        default:
            return state;
    }
};

export default reducer;
