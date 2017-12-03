import React from "react"
import { render } from "react-dom"
import "./index.css"
import App from "./App"
import registerServiceWorker from "./registerServiceWorker"
import * as Mapbox from "./tools/Mapbox"

// init the mapbox map
Mapbox.init()

render(<App />, document.getElementById("root"))
registerServiceWorker()
