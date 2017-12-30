import * as R from "ramda"

import {
  setArchitects,
  setFilterArchitect, setFilterStyles,
  setFilterTypes,
  setLoader,
  setMap,
  setStructures,
} from "./actions"
import {getFilteredLabelsSelector, getFilterStyles, getFilterTypes} from "./selectors"
import { getArchitects, getMap } from "./reducer"
import Mapbox from "../tools/Mapbox"
import structuresMapper from "./mappers/structuresMapper"

const formatApiInEnv = endpoint =>
  `${window.location.protocol}//${window.location.host}/${endpoint}`.replace("3000", "5000")

export const fetchStructuresAction = () => dispatch => {
  dispatch(setLoader(true))

  const url = formatApiInEnv("getStructures")

  return fetch(url)
    .then(res => res.json(), console.log)
    .then(json => {
      dispatch(setLoader(false))
      dispatch(setStructures(json.map(structuresMapper)))
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

export const setArchitectFromName = architectName => (dispatch, getState) => {
  const state = getState()
  const architects = getArchitects(state)
  dispatch(setFilterArchitect(R.prop("id", R.find(R.propEq("name", architectName), architects))))
}

export const addFilterType = type => (dispatch, getState) => {
  const state = getState()
  const filterTypes = getFilterTypes(state)

  dispatch(setFilterTypes(R.uniq(filterTypes, type)))
}

export const removeFilterType = type => (dispatch, getState) => {
  const state = getState()
  const filterTypes = getFilterTypes(state)

  dispatch(setFilterTypes(filterTypes.filter(x => type !== x)))
}

export const toggleFilterType = type => (dispatch, getState) => {
  const state = getState()
  const filterTypes = getFilterTypes(state)

  dispatch(
    setFilterTypes(
      filterTypes.includes(type)
        ? filterTypes.filter(x => type !== x)
        : R.uniq([...filterTypes, type]),
    ),
  )
}

export const toggleFilterStyle = style => (dispatch, getState) => {
  const state = getState()
  const filterStyles = getFilterStyles(state)

  dispatch(
    setFilterStyles(
      filterStyles.includes(style)
        ? filterStyles.filter(x => style !== x)
        : R.uniq([...filterStyles, style]),
    ),
  )
}
