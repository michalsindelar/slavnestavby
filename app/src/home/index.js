// @flow
import React, { Component } from "react"
import { connect } from "react-redux"

import Map from "./scenes/Map/Map"
import Sidebar from "./scenes/Sidebar/Sidebar"
import Modals from "./scenes/Modals"

import "./App.css"

import Mapbox from "./tools/Mapbox"

import {
  createMapAction,
  fetchStructuresAction,
  interposeLabelsAction,
} from "./services/actionsCreators"
import { getLoading, getStructures } from "./services/reducer"
import { getLabelsSelector } from "./services/selectors"

type Props = {
  fetchStructures: Function,
  interposeLabels: Function,
  createMap: Function,
}

class Home extends Component {
  props: Props // eslint-disable-line

  componentDidMount() {
    const { createMap, fetchStructures, interposeLabels } = this.props

    Mapbox.loadScript().then(() => {
      // debugger
      Promise.all([fetchStructures(), createMap()]).then(() => {
        window.setTimeout(interposeLabels, 2000)
      })
    })
  }

  render() {
    const { loading } = this.props

    return (
      <div className="Home">
        <Sidebar />
        <Map />
        {loading && <div>Loader</div>}
        <Modals />
      </div>
    )
  }
}

export default connect(
  state => ({
    labels: getLabelsSelector(state),
    loading: getLoading(state),
    structures: getStructures(state),
  }),
  dispatch => ({
    fetchStructures: () => {
      dispatch(fetchStructuresAction())
    },
    interposeLabels: () => {
      dispatch(interposeLabelsAction())
    },
    createMap: () => {
      dispatch(createMapAction())
    },
  }),
)(Home)
