export const SET_LOADER = "SET_LOADER"
export const SET_STRUCTURES = "SET_STRUCTURES"

export const setLoader = loading => ({
  type: SET_LOADER,
  payload: { data: loading },
})

export const setStructures = structures => ({
  type: SET_STRUCTURES,
  payload: { data: structures },
})
