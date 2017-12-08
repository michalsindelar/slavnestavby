import React, { Component } from "react"
import { connect } from "react-redux"

import Map from "./scenes/Map/Map"
import Sidebar from "./components/Sidebar"

import { fetchStructuresAction } from "./services/actions"

import "./App.css"

class Home extends Component {
  componentWillMount() {
    const { fetchStructures } = this.props
    fetchStructures()
  }

  render() {
    const { loading } = this.props

    return (
      <div className="Home">
        <Sidebar />
        <Map />

        {loading && <div>Loader</div>}
      </div>
    )
  }
}

export default connect(
  state => ({
    loading: state.loading,
  }),
  dispatch => ({
    fetchStructures: () => {
      dispatch(fetchStructuresAction())
    },
  }),
)(Home)
