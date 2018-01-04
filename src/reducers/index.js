import { combineReducers } from 'redux';
import number from './reducer_number';

const rootReducer = combineReducers({
    number : number
});

export default rootReducer;
