import * as R from "ramda"
import { createSelector } from "reselect"

import { getActiveStructureId, getArchitects, getFilters, getStructures } from "./reducer"

export const getSimpleStructuresSelector = createSelector(
  getStructures,
  R.map(fullStructure => ({
    active: R.prop("active", fullStructure),
    id: R.prop("id", fullStructure),
    name: R.prop("name", fullStructure),
    address: R.prop("address", fullStructure), // {lat: "", lon: ""}
    year: R.prop("year", fullStructure),
    style: R.prop("style", fullStructure),
    architectIds: R.prop("architect_ids", fullStructure),
    // TODO: Fill the needed ones for filtering
  })),
)

export const formatGeojsonDataSelector = createSelector(
  getSimpleStructuresSelector,
  simpleStructures => ({
    type: "FeatureCollection",
    features: R.map(x => ({
      active: true,
      type: "Feature",
      geometry: {
        type: "Point",
        coordinates: [R.path(["address", "lon"], x), R.path(["address", "lat"], x)],
      },
      properties: {
        id: R.prop("id", x),
        title: R.prop("name", x),
        description: R.prop("style", x),
        year: R.prop("year", x),
        style: R.prop("style", x),
        architectIds: R.prop("architectIds", x),
      },
    }))(simpleStructures),
  }),
)

export const getLabelsSelector = createSelector(formatGeojsonDataSelector, R.prop("features"))

export const getActiveLabelsSelector = createSelector(
  getLabelsSelector,
  R.filter(R.propEq("active", true)),
)

export const getStructureDataSelector = createSelector(
  [getStructures, getActiveStructureId],
  (structures, activeStructureId) => R.find(R.propEq("id", activeStructureId), structures),
)

const yearsFilter = ({ minYear, maxYear }) => ({ year }) => year > minYear && year << maxYear
const architectureFilter = ({ activeArchitect }) => ({ architectIds }) =>
  architectIds.includes(activeArchitect)

export const getFilteredLabelsSelector = createSelector(
  [getActiveLabelsSelector, getFilters],
  (activeLabelsSelector, filters) =>
    activeLabelsSelector
      .filter(x => yearsFilter(filters)(R.prop("properties")(x)))
      .filter(
        x =>
          !filters.architect ||
          architectureFilter({ activeArchitect: filters.architect })(R.prop("properties")(x)),
      ),
)

export const getArchitectsNames = createSelector(getArchitects, R.map(R.prop("name")))

export const getArchitectByIdSelector = createSelector(getArchitects, architects => index =>
  R.nth(index, architects),
)

export const getFilterTypes = createSelector(getFilters, R.prop("types"))

export const getFilterStyles = createSelector(getFilters, R.prop("styles"))

// FIXME: This could be merged
export const getAllStylesSelector = createSelector(
  getStructures,
  R.reduce((acc, val) => {
    const currStyle = R.prop("style", val).toLowerCase()
    return acc.includes(currStyle) ? acc : [...acc, currStyle]
  }, []),
)

export const getStylesOptions = createSelector(
  getAllStylesSelector,
  getFilterStyles,
  (allStylesSelector, filterStyles) =>
    allStylesSelector.map(style => ({
      id: style,
      label: style,
      active: filterStyles.includes(style),
    })),
)

export const getAllTypesSelector = createSelector(
  getStructures,
  R.reduce((acc, val) => {
    const currType = R.prop("type", val).toLowerCase()
    return acc.includes(currType) ? acc : [...acc, currType]
  }, []),
)

export const getTypesOptions = createSelector(
  getAllTypesSelector,
  getFilterTypes,
  (allStylesSelector, filterTypes) =>
    allStylesSelector.map(type => ({
      id: type,
      label: type,
      active: filterTypes.includes(type),
    })),
)
