import React, { Component } from "react"
import { connect } from "react-redux"
import styled from "styled-components"

import Modal from "react-modal"
import Structure from "./components/Structure"
import { getActiveStructureId, isActiveStructureSet } from "../../services/reducer"
import { closeActiveStructure } from "../../services/actions"
import { getArchitectByIdSelector, getStructureDataSelector } from "../../services/selectors"

const ModalsStyl = styled.div``

class Home extends Component {
  render() {
    const {
      activeStructureOpen,
      activeStructureId,
      closeStructureModal,
      activeStructureData,
      getArchitectById,
    } = this.props

    const customStyles = {
      overlay: {
        backgroundColor: "rgba(0, 0, 0, 0.75)",
        zIndex: 10,
      },
      content: {
        position: "absolute",
        top: "30%",
        left: "25%",
        right: "25%",
        bottom: "30%",
        padding: 0,
        borderRadius: 0,
        border: 0,
        height: "400px", // share to structure
      },
    }

    return (
      <ModalsStyl>
        <Modal
          isOpen={activeStructureOpen}
          onRequestClose={closeStructureModal}
          style={customStyles}
        >
          {activeStructureOpen && (
            <Structure
              id={activeStructureId}
              architects={activeStructureData.architectIds.map(getArchitectById)}
              {...activeStructureData}
            />
          )}
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
    getArchitectById: getArchitectByIdSelector(state),
  }),
  dispatch => ({
    closeStructureModal: () => dispatch(closeActiveStructure()),
  }),
)(Home)
