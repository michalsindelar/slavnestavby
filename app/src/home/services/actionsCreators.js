import { setLoader, setMap, setStructures } from "./actions"
import { getFilteredLabelsSelector } from "./selectors"
import { getMap } from "./reducer"
import Mapbox from "../tools/Mapbox"

export const fetchStructuresAction = () => dispatch => {
  dispatch(setLoader(true))

  // FIXME: Better
  let url = `${window.location.protocol}//${window.location.host}/getStructures`
  url = url.replace("3000", "5000")

  return fetch(url)
    .then(res => res.json(), console.log)
    .then(json => {
      dispatch(setLoader(false))
      dispatch(setStructures(json))
    })
}

export const interposeLabelsAction = () => (dispatch, getState) => {
  const state = getState()
  const map = getMap(state)
  map.interposeLabels(getFilteredLabelsSelector(state))
}

export const createMapAction = () => dispatch => dispatch(setMap(new Mapbox({ id: "map" })))
