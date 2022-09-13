import HelloReducer from "./HelloReducer"
import CounterReducer from "./CounterReducer"
import { combineReducers } from 'redux'
export default combineReducers({
    HelloReducer,
    CounterReducer
})