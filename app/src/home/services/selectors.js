import R from "ramda"
import { createSelector } from "reselect"

import { getStructures } from "./reducer"

export const getSimpleStructures = createSelector(
  getStructures,
  R.map(fullStructure => ({
    name: R.prop("name", fullStructure),
    address: R.prop("address", fullStructure), // {lat: "", lon: ""}
    // TODO: Fill the needed ones for filtering
  })),
)
