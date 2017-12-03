import React, { Component } from "react"

import Map from "./scenes/Map/Map"
import Sidebar from "./components/Sidebar"

import "./App.css"

class App extends Component {
  render() {
    return (
      <div className="App">
        <Sidebar />
        <Map />
      </div>
    )
  }
}

export default App
