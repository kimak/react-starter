import { combineReducers } from "redux"
import { routerReducer } from "react-router-redux"

import lists from "./lists"

export default combineReducers({
    routing : routerReducer,
    lists
})
