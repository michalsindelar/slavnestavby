import * as R from "ramda"

import {
  SET_LOADER,
  SET_STRUCTURES,
  SET_STRUCTURE_LISTS,
  SET_ACTIVE_STRUCTURE_LISTS,
  SET_ACTIVE_STRUCTURE,
  SET_MAP,
  CLOSE_ACTIVE_STRUCTURE,
  CLOSE_ACTIVE_STRUCTURE_LIST,
  SET_FILTERS,
  RESET_FILTERS,
  SET_MARKERS,
  SET_ARCHITECTS,
  SET_VIEW_SCREEN,
} from "./actions"

const DEFAULT_FILTERS = {
  minYear: 1830,
  maxYear: 2000,
  architect: null,
  types: [],
  styles: [],
}

const DEFAULT_STATE = {
  activeStructureId: null,
  architects: [],
  loading: false,
  map: null,
  markers: [],
  structures: [],
  viewScreen: {'viewScreen': 'map'},
  filters: DEFAULT_FILTERS,
}

const reducer = (state = DEFAULT_STATE, action) => {
  switch (action.type) {
    case SET_LOADER:
      return R.assoc("loading", action.payload.data, state)

    case SET_STRUCTURES:
      return R.assoc("structures", action.payload.data, state)

    case SET_STRUCTURE_LISTS:
      return R.assoc("structureLists", action.payload.data, state)

    case SET_ACTIVE_STRUCTURE:
      return R.assoc("activeStructureId", action.payload.data, state)

    case SET_MAP:
      return R.assoc("map", action.payload.data, state)

    case CLOSE_ACTIVE_STRUCTURE:
      return R.assoc("activeStructureId", null, state)

    case CLOSE_ACTIVE_STRUCTURE_LIST:
      return R.assoc("activeStructureListId", null, state)

    case SET_FILTERS:
      return R.assoc("filters", Object.assign({}, state.filters, action.payload.data), state)

    case RESET_FILTERS:
      return R.assoc("filters", DEFAULT_FILTERS, state)

    case SET_MARKERS:
      return R.assoc("markers", action.payload.data, state)

    case SET_ARCHITECTS:
      return R.assoc("architects", action.payload.data, state)

	case SET_VIEW_SCREEN:
	  return R.assoc("viewScreen", action.payload.data, state)

    case SET_ACTIVE_STRUCTURE_LISTS:
      return R.assoc("activeStructureListId", action.payload.data, state)

    default:
      return state
  }
}

export const getLoading = R.prop("loading")
export const getMap = R.prop("map")
export const getStructures = R.prop("structures")
export const getStructureLists = state => R.prop("structureLists")(state) || []
export const getActiveStructureId = R.prop("activeStructureId")
export const getActiveStructureListId = R.prop("activeStructureListId")
export const isActiveStructureSet = state => R.is(Number, R.prop("activeStructureId", state))
export const isActiveStructureListSet = state => R.is(Number, R.prop("activeStructureListId", state))
export const getFiltersMinYear = R.path(["filters", "minYear"])
export const getFiltersMaxYear = R.path(["filters", "maxYear"])
export const getFiltersArchitect = R.path(["filters", "architects"])
export const getFilters = R.prop("filters")
export const getMarkers = R.prop("markers")
export const getArchitects = R.prop("architects")
export const getViewScreen = R.path(["viewScreen", "viewScreen"])

export default reducer
