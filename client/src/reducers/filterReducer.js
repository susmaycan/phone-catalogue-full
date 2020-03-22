import {
    SET_FILTER
} from '../actions'

const reducer = (state = {}, action) => {
    switch (action.type) {
        case SET_FILTER:
            return {...state, searchTerm: action.text};
        default:
            return state;
    }
};

export default reducer;
