import * as R from "ramda"

import { SET_LOADER, SET_STRUCTURES } from "./actions"

const DEFAULT_STATE = {
  loading: false,
  structures: [],
}

const reducer = (state = DEFAULT_STATE, action) => {
  switch (action.type) {
    case SET_LOADER:
      return R.assoc("loading", action.payload.data, state)

    case SET_STRUCTURES:
      return R.assoc("structures", action.payload.data, state)

    default:
      return state
  }
}

export default reducer
