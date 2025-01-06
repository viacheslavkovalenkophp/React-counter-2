import { combineReducers } from 'redux';
import todoReducer from './todoReducer';
import swapiReducer from './swapiReducer';

const rootReducer = combineReducers({
    todo: todoReducer,
    swapi: swapiReducer,
});

export default rootReducer;
