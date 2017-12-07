import React from "react"
import { render } from "react-dom"
import { Provider } from "react-redux"
import { BrowserRouter } from "react-router-dom"
import "./index.css"

import Root from "./Root"
import registerServiceWorker from "./registerServiceWorker"

import * as Mapbox from "./home/tools/Mapbox"

import { store, history } from "./services/"

// init the mapbox map
Mapbox.init()

if (window) {
  window.reduxStore = store
}

const app = document.getElementById("root")

render(
  <Provider store={store}>
    <BrowserRouter>
      <Root />
    </BrowserRouter>
  </Provider>,
  app,
)

registerServiceWorker()
