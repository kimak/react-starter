import { createStore, applyMiddleware, compose } from "redux"
import thunkMiddleware from "redux-thunk"

// Root reducer
import rootReducer from "reducers"
import fetchMiddleware from "middlewares/fetch"

import endpoints from "consts/endpoints"

const fetchMiddlewareInstance = fetchMiddleware({
    base : endpoints.API_PATH,
    defaultHeaders : {
        ["Accept"] : "application/json",
        ["Content-type"] : "application/json"
    },
    /*defaultParams : {
        api_key : "1234567890"
    },*/
    onRequest : (request/*, state, action*/) => {
        /* this code is called before each request, you can modify it */
        /* token sample
          if (state.session.token) {
          request.params["token"] = "jwt.token.1212GJ23"
        }*/
        return request
    }
})
export default createStore(
    rootReducer,
    compose(
        applyMiddleware(thunkMiddleware,fetchMiddlewareInstance),
        window.devToolsExtension && !__PROD__ ? window.devToolsExtension() : f => f
    )
)
