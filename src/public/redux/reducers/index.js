import {combineReducers} from 'redux';
import note from './note';
import category from './category';

const appReducer = combineReducers({
    category,
    note
});

export default appReducer;