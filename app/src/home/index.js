// @flow
import React, { Component } from "react"
import { connect } from "react-redux"

import ShowScreen from "./scenes/ShowScreen/ShowScreen"
import Sidebar from "./scenes/Sidebar/Sidebar"
import Topbar from "./scenes/Topbar/Topbar"
import Modals from "./scenes/Modals"
import "./App.css"

import Mapbox from "./tools/Mapbox"

import {
  createMapAction,
  fetchArchitectsAction,
  fetchStructureListsAction,
  fetchStructuresAction,
  interposeLabelsAction,
} from "./services/actionsCreators"
import { getLoading, getStructures, getViewScreen } from "./services/reducer"
import { getLabelsSelector } from "./services/selectors"

type Props = {
  fetchStructures: Function,
  interposeLabels: Function,
  createMap: Function,
}

class Home extends Component {
  props: Props // eslint-disable-line

    constructor(props) {
        super(props);

        this.state = {
            showMenu: true
        };

        this.toggleMenu = this.toggleMenu.bind(this);
    }

    toggleMenu() {
        this.state.showMenu === true ? this.setState({showMenu: false}) : this.setState({showMenu: true})
    }

  componentDidMount() {
    const { createMap, fetchArchitects, fetchStructures, fetchStructureLists, interposeLabels } = this.props

    Mapbox.loadScript().then(() => {
      // debugger
      Promise.all([fetchStructures(), fetchArchitects(), fetchStructureLists(), createMap()]).then(() => {
        window.setTimeout(interposeLabels, 2000)
      })
    })
  }

  render() {
    const { loading , viewScreen } = this.props;


    return (

      <div className="Home">
        <Topbar view={ viewScreen }/>
            <Sidebar
                toggleMenu={this.state.showMenu}
                onToggleButtonClick={this.toggleMenu}
            />

          <ShowScreen view={viewScreen} />
        {loading}
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
    viewScreen: getViewScreen(state)
  }),
  dispatch => ({
    fetchStructures: () => {
      dispatch(fetchStructuresAction())
    },
    fetchArchitects: () => {
      dispatch(fetchArchitectsAction())
    },
    fetchStructureLists: () => {
      dispatch(fetchStructureListsAction())
    },
    interposeLabels: () => {
      dispatch(interposeLabelsAction())
    },
    createMap: () => {
      dispatch(createMapAction())
    },
  }),
)(Home)
