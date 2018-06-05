import * as R from "ramda"
import { createSelector } from "reselect"

import { getActiveStructureId, getArchitects, getFilters, getStructures, getStructureLists, getActiveStructureListId } from "./reducer"

const getSimpleStructureFromFullStructure = fullStructure => ({
    active: R.prop("active", fullStructure),
    id: R.prop("id", fullStructure),
    name: R.prop("name", fullStructure),
    address: R.prop("address", fullStructure), // {lat: "", lon: ""}
    year: R.prop("year", fullStructure),
    style: R.prop("style", fullStructure),
    type: R.prop("type", fullStructure),
    architectIds: R.prop("architect_ids", fullStructure),
    photo: R.prop("photo", fullStructure),
    customIcon: R.prop("customIcon", fullStructure),
    // TODO: Fill the needed ones for filtering
})

const getGeoJsonDataFromStructure = simpleStructure => ({
    active: true,
    type: "Feature",
    geometry: {
        type: "Point",
        coordinates: [R.path(["address", "lon"], simpleStructure), R.path(["address", "lat"], simpleStructure)],
    },
    properties: {
        id: R.prop("id", simpleStructure),
        title: R.prop("name", simpleStructure),
        description: R.prop("style", simpleStructure),
        year: R.prop("year", simpleStructure),
        architectIds: R.prop("architectIds", simpleStructure),
        style: R.prop("style", simpleStructure),
        type: R.prop("type", simpleStructure),
        photo: R.prop("photo", simpleStructure)
    },
    icon: R.prop("customIcon", simpleStructure),
})

export const getSimpleStructuresSelector = createSelector(
  getStructures,
  R.map(getSimpleStructureFromFullStructure),
)


export const getActiveStructureListDataSelector = createSelector(
    [getStructureLists, getActiveStructureListId], 
    (structureLists, getActiveStructureListId) => {
        return structureLists.find((el) => {
            return el.id == getActiveStructureListId;
        });
    }
)
export const getActiveStructuresOfListDataSelector = createSelector(
    [getActiveStructureListDataSelector, getStructures],
    (structureListData, allStructures) => {
        if (!structureListData) {
            return [];
        }

		const strucData = {};

		structureListData.structures.forEach((obj) => (strucData[obj.structureId] = {...obj}));
        const structureIds = structureListData.structures.map((obj) => obj.structureId);

        var structures = {};

        allStructures.filter(function (obj) {
            return structureIds.indexOf(obj.id) > -1
        }).forEach(function (obj) {
            structures[obj.id] = {
				...obj,
				customIcon: strucData[obj.id].customIcon
			};
        });
        // console.log({getActiveStructuresOfListDataSelector: structures});
        return structures;
        // obsah staveb => architekt, popis
    }
)

export const getActiveStructureLabelsOfListSelector = createSelector(
	getActiveStructuresOfListDataSelector,
	R.map(getSimpleStructureFromFullStructure),
	R.map(getGeoJsonDataFromStructure)
)

export const formatGeojsonDataSelector = createSelector(
  getSimpleStructuresSelector,
  simpleStructures => ({
    type: "FeatureCollection",
    features: R.map(getGeoJsonDataFromStructure)(simpleStructures),
  }),
)

export const getLabelsSelector = createSelector(formatGeojsonDataSelector, R.prop("features"))

export const getActiveLabelsSelector = createSelector(
  getLabelsSelector,
  R.filter(R.propEq("active", true)),
)

export const getStructureDataSelector = createSelector(
    [getStructures, getActiveStructureId],
    (structures, activeStructureId) => {
        return structures.find((el) => {
            return el.id == activeStructureId;
        });
    }
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
      )
      .filter(
        x =>
          R.isEmpty(filters.types) ||
          filters.types.includes(R.path(["properties", "type"], x).toLowerCase()),
      )
      .filter(
        x =>
          R.isEmpty(filters.styles) ||
          filters.styles.includes(R.path(["properties", "style"], x).toLowerCase()),
      ),
)

export const getArchitectsNames = createSelector(getArchitects, R.map(R.prop("name")))

export const getArchitectByIdSelector = createSelector(getArchitects, architects => index =>
    {
        return architects.find((el) => {
            return el.id == index;
        });
    }
)

export const getFilterTypes = createSelector(getFilters, R.prop("types"))

export const getFilterStyles = createSelector(getFilters, R.prop("styles"))

// FIXME: This could be merged
export const getAllStylesSelector = createSelector(
  getStructures,
  R.reduce((acc, val) => R.uniq([...acc, R.prop("style", val).toLowerCase()]), []),
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

// export const activeStructureList = createSelector(
// getActiveStructureListId, 
// (getActiveStructureListId) => 
//   getActiveStructureListId.map(x => ({
//     active: getActiveStructureListId.includes(x),
//   })),
// )


export const getAllTypesSelector = createSelector(
  getStructures,
  R.reduce((acc, val) => R.uniq([...acc, R.prop("type", val).toLowerCase()]), []),
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
