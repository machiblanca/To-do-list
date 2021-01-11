
import {createStore, combineReducers} from 'redux'
import {todos, visibilityFilter} from '../reducer/reducers'

export default createStore(combineReducers({todos, visibilityFilter}));
