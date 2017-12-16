import * as R from "ramda"

import { SET_LOADER, SET_STRUCTURES, SET_ACTIVE_STRUCTURE, SET_MAP } from "./actions"

const DEFAULT_STATE = {
  activeStructureId: null,
  loading: false,
  map: null,
  structures: [],
}

const reducer = (state = DEFAULT_STATE, action) => {
  switch (action.type) {
    case SET_LOADER:
      return R.assoc("loading", action.payload.data, state)

    case SET_STRUCTURES:
      return R.assoc("structures", action.payload.data, state)

    case SET_ACTIVE_STRUCTURE:
      return R.assoc("activeStructureId", action.payload.data, state)

    case SET_MAP:
      return R.assoc("map", action.payload.data, state)

    default:
      return state
  }
}

export const getLoading = R.prop("loading")
export const getMap = R.prop("map")
export const getStructures = R.prop("structures")
export const getActiveStructureId = R.prop("activeStructureId")
export const isActiveStructureSet = state => R.is(Number, R.prop("activeStructureId", state))

export default reducer
