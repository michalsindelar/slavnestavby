import { setLoader, setStructures } from "./actions"
import { interposeLabels } from "../tools/Mapbox"
import { getActiveLabelsSelector } from "./selectors"

export const fetchStructuresAction = () => dispatch => {
  dispatch(setLoader(true))

  const url = "http://localhost:5000/getStructures"

  return fetch(url)
    .then(res => res.json(), console.log)
    .then(json => dispatch(setStructures(json)))
}

export const interposeLabelsAction = () => (dispatch, getState) => {
  const state = getState()
  interposeLabels(getActiveLabelsSelector(state))
}
