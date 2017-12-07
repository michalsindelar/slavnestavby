import React, { Component } from "react"

import Map from "./scenes/Map/Map"
import Sidebar from "./components/Sidebar"

import "./App.css"

class Home extends Component {
  render() {
    return (
      <div className="Home">
        <Sidebar />
        <Map />
      </div>
    )
  }
}

export default Home
