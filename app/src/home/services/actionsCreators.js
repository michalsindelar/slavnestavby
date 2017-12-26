import { setArchitects, setLoader, setMap, setStructures} from "./actions"
import { getFilteredLabelsSelector } from "./selectors"
import { getMap } from "./reducer"
import Mapbox from "../tools/Mapbox"

const formatApiInEnv = endpoint =>
  `${window.location.protocol}//${window.location.host}/${endpoint}`.replace("3000", "5000")

export const fetchStructuresAction = () => dispatch => {
  dispatch(setLoader(true))

  const url = formatApiInEnv("getStructures")

  return fetch(url)
    .then(res => res.json(), console.log)
    .then(json => {
      dispatch(setLoader(false))
      dispatch(setStructures(json))
    })
}

export const fetchArchitectsAction = () => dispatch => {
  dispatch(setLoader(true))

  const url = formatApiInEnv("getArchitects")

  return fetch(url)
    .then(res => res.json(), console.log)
    .then(json => {
      dispatch(setLoader(false))
      dispatch(setArchitects(json))
    })
}

export const interposeLabelsAction = () => (dispatch, getState) => {
  const state = getState()
  const map = getMap(state)
  map.interposeLabels(getFilteredLabelsSelector(state))
}

export const createMapAction = () => dispatch => dispatch(setMap(new Mapbox({ id: "map" })))
