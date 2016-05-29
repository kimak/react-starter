// External
import React from "react"
import ReactDOM from "react-dom"
import { Provider } from "react-redux"

// Global CSS
import "css/global.css"
import "css/normalize.css"

import store from "store"
import Routes from "Routes"


const runApp = () => {
    ReactDOM.render(
        <Provider store={ store }>
            <Routes />
        </Provider>,
      document.getElementById("app")
  )
}

// intl i18n polyfill
if (!global.Intl) {
    require.ensure([
        "intl",
        //"intl/locale-data/jsonp/en.js"
    ], function (require) {
        require("intl");
        //require("intl/locale-data/jsonp/en.js");
        runApp()
    });
} else {
    runApp()
}
