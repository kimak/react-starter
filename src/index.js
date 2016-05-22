// External
import React from "react";
import ReactDOM from "react-dom";
import { createStore, applyMiddleware, compose } from "redux"
import { Provider } from "react-redux"
import { Router, Route, IndexRoute, browserHistory } from "react-router"
import { syncHistoryWithStore} from "react-router-redux"
import thunkMiddleware from "redux-thunk"

// Root reducer
import rootReducer from "reducers"

// Containers
import App from "containers/App"
import PageHome from "containers/PageHome"

// Global CSS
import "css/layout.css"
import "css/normalize.css"

const store = createStore(
    rootReducer,
    compose(
        applyMiddleware(thunkMiddleware),
        window.devToolsExtension && !__PROD__ ? window.devToolsExtension() : f => f
    )
)

const history = syncHistoryWithStore(browserHistory, store)

ReactDOM.render(
    <Provider store={ store }>
        <div>
            <Router history={ history }>
                <Route path="/" component={ App }>
                      <IndexRoute component= { PageHome } />
                </Route>
            </Router>
        </div>
    </Provider>,
    document.getElementById("app")
)
