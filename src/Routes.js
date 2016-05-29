import React, { Component } from "react"

import { syncHistoryWithStore} from "react-router-redux"
import { Router, Route, IndexRoute, browserHistory } from "react-router"

// Containers
import App from "containers/App"
import PageHome from "containers/PageHome"

import store from "store"
const history = syncHistoryWithStore(browserHistory, store)

import routesPath from "consts/routesPath"

export default class routes extends Component {

    render() {

        return (
            <Router history={ history }>
                <Route path={routesPath.root} component={ App }>
                      <IndexRoute component= { PageHome } />
                </Route>
            </Router>
        )
    }
}
