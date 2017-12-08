import React, { Component } from "react"
import { connect } from "react-redux"

import Map from "./scenes/Map/Map"
import Sidebar from "./components/Sidebar"

import { fetchStructuresAction } from "./services/actions"

import "./App.css"
import {getLoading} from "./services/reducer"

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
    loading: getLoading(state),
  }),
  dispatch => ({
    fetchStructures: () => {
      dispatch(fetchStructuresAction())
    },
  }),
)(Home)
