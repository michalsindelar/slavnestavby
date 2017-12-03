import React, { Component } from "react"
import "./App.css"

import { CONFIG } from "./tools/Mapbox"

class App extends Component {
  render() {
    return (
      <div className="App">
        <div id={CONFIG.mapboxContainerId} />
      </div>
    )
  }
}

export default App
