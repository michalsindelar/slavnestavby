import * as R from "ramda"

import { SET_LOADER, SET_STRUCTURES, SET_ACTIVE_STRUCTURE } from "./actions"

const DEFAULT_STATE = {
  loading: false,
  structures: [],
  activeStructureId: null,
}

const reducer = (state = DEFAULT_STATE, action) => {
  switch (action.type) {
    case SET_LOADER:
      return R.assoc("loading", action.payload.data, state)

    case SET_STRUCTURES:
      return R.assoc("structures", action.payload.data, state)

    case SET_ACTIVE_STRUCTURE:
      return R.assoc("activeStructureId", action.payload.data, state)

    default:
      return state
  }
}

export const getLoading = R.prop("loading")
export const getStructures = R.prop("structures")
export const getActiveStructureId = R.prop("activeStructureId")
export const isActiveStructureSet = state => R.is(Number, R.prop("activeStructureId", state))

export default reducer
