import React, { Component } from "react"
import { connect } from "react-redux"
import styled from "styled-components"

import Modal from "react-modal"
import Structure from "./components/Structure"
import StructureList from "./components/StructureList"
import { getStructuresOfList, getActiveStructureId, isActiveStructureSet, getActiveStructureListId, isActiveStructureListSet } from "../../services/reducer"
import { closeActiveStructure, closeActiveStructureList } from "../../services/actions"
import { getArchitectByIdSelector, getStructureDataSelector, getActiveStructureListDataSelector, getActiveStructuresOfListDataSelector } from "../../services/selectors"

const ModalsStyl = styled.div``

class ModalComponent extends Component {
  render() {
    const {
      activeStructuresDataOfList,
      activeStructureId,
      closeStructureModal,
      closeStructureListModal,
      activeStructureData,
      getArchitectById,
      activeStructureListId,
      activeStructureListData,
      isModalOpen
    } = this.props
    
    const customStyles = {
      overlay: {
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: "rgba(0, 0, 0, 0.75)",
        padding: 0,
        zIndex: 10,
        display: 'flex' 
      },
      content: {
        backgroundColor: "rgba(0, 0, 0, 0)",
        position: activeStructureListId ? "absolute" : "static",
        top: "15%",
        left: "15%",
        right: "15%",
        bottom: "15%",
        margin: 'auto',
        padding: 0,
        borderRadius: 0,  
        border: 0,
        display: 'flex'
      },
    }
    const onRequestClose = activeStructureListId ? closeStructureListModal : closeStructureModal;
    return (
      <ModalsStyl>
        <Modal
          isOpen={isModalOpen}
          onRequestClose={onRequestClose}
          style={customStyles}
        >
          {activeStructureId && (
            <Structure
              id={activeStructureId}
              architects={activeStructureData.architectIds.map(getArchitectById)}
              {...activeStructureData}
            />
          )}
          {activeStructureListId && (
              <StructureList
                  structuresData={activeStructuresDataOfList}
                  {...activeStructureListData}
                  bgColor={ activeStructureListData.color }
              />
          )}
        </Modal>
      </ModalsStyl>
    )
  }
}

export default connect(
  state => ({
    activeStructuresDataOfList: getActiveStructuresOfListDataSelector(state),
    activeStructureId: getActiveStructureId(state),
    isModalOpen: isActiveStructureSet(state) || isActiveStructureListSet(state),
    activeStructureData: getStructureDataSelector(state),
    getArchitectById: getArchitectByIdSelector(state),
    activeStructureListId: getActiveStructureListId(state),
    activeStructureListData: getActiveStructureListDataSelector(state)
  }),
  dispatch => ({
    closeStructureModal: () => dispatch(closeActiveStructure()),
    closeStructureListModal: () => dispatch(closeActiveStructureList())
  }),
)(ModalComponent)
