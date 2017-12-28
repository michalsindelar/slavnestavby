import React, { Component } from "react"
import { connect } from "react-redux"
import styled from "styled-components"

import Modal from "react-modal"
import Structure from "./components/Structure"
import { getActiveStructureId, isActiveStructureSet } from "../../services/reducer"
import { closeActiveStructure } from "../../services/actions"
import { getStructureDataSelector } from "../../services/selectors"

const ModalsStyl = styled.div``

class Home extends Component {
  render() {
    const {
      activeStructureOpen,
      activeStructureId,
      closeStructureModal,
      activeStructureData,
    } = this.props

    const customStyles = {
      overlay: {
        backgroundColor: "rgba(0, 0, 0, 0.75)",
        zIndex: 10,
      },
      content: {
        position: "absolute",
        top: "35%",
        left: "25%",
        right: "25%",
        bottom: "35%",
      },
    }

    return (
      <ModalsStyl>
        <Modal
          isOpen={activeStructureOpen}
          onRequestClose={closeStructureModal}
          style={customStyles}
        >
          <Structure id={activeStructureId} {...activeStructureData} />
        </Modal>
      </ModalsStyl>
    )
  }
}

export default connect(
  state => ({
    activeStructureId: getActiveStructureId(state),
    activeStructureOpen: isActiveStructureSet(state),
    activeStructureData: getStructureDataSelector(state),
  }),
  dispatch => ({
    closeStructureModal: () => dispatch(closeActiveStructure()),
  }),
)(Home)
