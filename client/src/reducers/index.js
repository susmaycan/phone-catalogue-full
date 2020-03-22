import { combineReducers } from 'redux';
import phoneReducer from './phoneReducer'
import filterReducer from './phoneReducer'

export default combineReducers({
    phoneReducer,
    filterReducer
});