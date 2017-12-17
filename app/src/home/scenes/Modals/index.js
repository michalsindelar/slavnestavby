import React, { Component } from "react"
import { connect } from "react-redux"

import Modal from "react-modal"
import Structure from "./components/Structure"
import { getActiveStructureId, isActiveStructureSet } from "../../services/reducer"
import { closeActiveStructure } from "../../services/actions"

// FIXME Implement on close handler

class Home extends Component {
  render() {
    const { activeStructureOpen, activeStructureId, closeStructureModal } = this.props

    return (
      <div className="Modals">
        <Modal isOpen={activeStructureOpen} onRequestClose={closeStructureModal}>
          <Structure id={activeStructureId} />
        </Modal>
      </div>
    )
  }
}

export default connect(
  state => ({
    activeStructureId: getActiveStructureId(state),
    activeStructureOpen: isActiveStructureSet(state),
  }),
  dispatch => ({
    closeStructureModal: () => dispatch(closeActiveStructure()),
  }),
)(Home)
