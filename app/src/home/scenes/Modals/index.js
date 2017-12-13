import React, { Component } from "react"
import { connect } from "react-redux"

import Modal from "react-modal"
import Structure from "./components/Structure"
import { getActiveStructureId, isActiveStructureSet } from "../../services/reducer"

class Home extends Component {
  render() {
    const { activeStructureOpen } = this.props

    return (
      <div className="Modals">
        <Modal isOpen={activeStructureOpen}>
          <Structure />
        </Modal>
      </div>
    )
  }
}

export default connect(state => ({
  activeStructureId: getActiveStructureId(state),
  activeStructureOpen: isActiveStructureSet(state),
}))(Home)
