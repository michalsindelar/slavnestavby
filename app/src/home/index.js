import React, { Component } from "react"
import { connect } from "react-redux"

import Map from "./scenes/Map/Map"
import Sidebar from "./components/Sidebar"
import Modals from "./scenes/Modals"

import { fetchStructuresAction, interposeLabelsAction } from "./services/actionCreators"

import "./App.css"
import { getLoading, getStructures} from "./services/reducer"
import { init } from "./tools/Mapbox"
import { getLabelsSelector } from "./services/selectors"

class Home extends Component {
  componentDidMount() {
    const { fetchStructures, interposeLabels } = this.props

    Promise.all([fetchStructures(), init()]).then(() => {
      interposeLabels()
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
  }),
)(Home)
