import * as R from "ramda"
import { createSelector } from "reselect"

import { getActiveStructureId, getStructures } from "./reducer"

export const getSimpleStructuresSelector = createSelector(
  getStructures,
  R.map(fullStructure => ({
    active: R.prop("active", fullStructure),
    id: R.prop("id", fullStructure),
    name: R.prop("name", fullStructure),
    address: R.prop("address", fullStructure), // {lat: "", lon: ""}
    // TODO: Fill the needed ones for filtering
  })),
)

export const formatGeojsonDataSelector = createSelector(
  getSimpleStructuresSelector,
  simpleStructures => ({
    type: "FeatureCollection",
    features: R.map(x => ({
      active: x.active,
      type: "Feature",
      geometry: {
        type: "Point",
        coordinates: [R.path(["address", "lon"], x), R.path(["address", "lat"], x)],
      },
      properties: {
        title: "Mapbox",
        description: "Washington, D.C.",
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
  [getActiveLabelsSelector, getActiveStructureId],
  (activeLabelsSelector, activeStructureId) => R.nth(activeStructureId, activeLabelsSelector),
)
