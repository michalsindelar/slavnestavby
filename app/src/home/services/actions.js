export const SET_LOADER = "SET_LOADER"
export const SET_MAP = "SET_MAP"
export const SET_STRUCTURES = "SET_STRUCTURES"
export const SET_ARCHITECTS = "SET_ARCHITECTS"
export const SET_STRUCTURE_LISTS = 'SET_STRUCTURE_LISTS'
export const SET_ACTIVE_STRUCTURE = "SET_ACTIVE_STRUCTURE"
export const CLOSE_ACTIVE_STRUCTURE = "CLOSE_ACTIVE_STRUCTURE"
export const CLOSE_ACTIVE_STRUCTURE_LIST = "CLOSE_ACTIVE_STRUCTURE_LIST"
export const SET_FILTERS = "SET_FILTERS"
export const RESET_FILTERS = "RESET_FILTERS"
export const SET_MARKERS = "SET_MARKERS"
export const SET_VIEW_SCREEN = "SET_VIEW_SCREEN"
export const SET_ACTIVE_STRUCTURE_LISTS = "SET_ACTIVE_STRUCTURE_LISTS"

export const setLoader = loading => ({
  type: SET_LOADER,
  payload: { data: loading },
})

export const setStructures = structures => ({
  type: SET_STRUCTURES,
  payload: { data: structures },
})

export const setArchitects = architects => ({
  type: SET_ARCHITECTS,
  payload: { data: architects },
})

export const setStructureLists = structureLists => ({
  type: SET_STRUCTURE_LISTS,
  payload: { data: structureLists },
})

export const setActiveStructureLists = structureListsId => ({
  type: SET_ACTIVE_STRUCTURE_LISTS,
  payload: { data: structureListsId },
  // 'payload': { 'data': 1525017572499 } (id)
})
export const setActiveStructure = activeStructureId => ({
  type: SET_ACTIVE_STRUCTURE,
  payload: { data: activeStructureId },
})

export const setMap = map => ({
  type: SET_MAP,
  payload: { data: map },
})

export const closeActiveStructure = () => ({
  type: CLOSE_ACTIVE_STRUCTURE,
})

export const closeActiveStructureList = () => ({
  type: CLOSE_ACTIVE_STRUCTURE_LIST,
})

// years: { minYears: number, maxYears: number }
export const setFilterYears = years => ({
  type: SET_FILTERS,
  payload: {
    data: {
      minYear: years.min,
      maxYear: years.max,
    },
  },
})

export const setFilterArchitect = architectId => ({
  type: SET_FILTERS,
  payload: { data: { architect: architectId } },
})

export const setFilterTypes = types => ({
  type: SET_FILTERS,
  payload: { data: { types } },
})

export const setFilterStyles = styles => ({
  type: SET_FILTERS,
  payload: { data: { styles } },
})

export const setMapMarkers = markers => ({
  type: SET_MARKERS,
  payload: { data: markers },
})

export const setTypes = types => ({
  type: SET_FILTERS,
  payload: { data: { types } },
})

export const setStyles = styles => ({
  type: SET_FILTERS,
  payload: { data: { styles } },
})

export const setViewScreen = viewScreen => ({
	type: SET_VIEW_SCREEN,
	payload: { data: { viewScreen } },
})
