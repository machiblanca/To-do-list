
import {createStore, combineReducers, applyMiddleware} from 'redux'
import {todos, visibilityFilter} from '../reducer/reducers'
import thunk from 'redux-thunk';

const logger =(store) =>(next) =>(action) =>{
    console.log(action);
    next(action);
}
export default createStore(combineReducers({todos, visibilityFilter}), applyMiddleware(logger,thunk) );
