export const SET_LOADER = "SET_LOADER"
export const SET_MAP = "SET_MAP"
export const SET_STRUCTURES = "SET_STRUCTURES"
export const SET_ACTIVE_STRUCTURE = "SET_ACTIVE_STRUCTURE"

export const setLoader = loading => ({
  type: SET_LOADER,
  payload: { data: loading },
})

export const setStructures = structures => ({
  type: SET_STRUCTURES,
  payload: { data: structures },
})

export const setActiveStructure = activeStructureId => ({
  type: SET_ACTIVE_STRUCTURE,
  payload: { data: activeStructureId },
})

export const setMap = map => ({
  type: SET_MAP,
  payload: { data: map },
})
