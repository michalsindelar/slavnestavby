export const SET_LOADER = "SET_LOADER"
export const SET_STRUCTURES = "SET_STRUCTURES"

const setLoader = loading => ({
  type: SET_LOADER,
  payload: { data: loading },
})

const setStructures = structures => ({
  type: SET_STRUCTURES,
  payload: { data: structures },
})

export const fetchStructuresAction = () => dispatch => {
  dispatch(setLoader(true))

  const url = "http://localhost:5000/getStructures"

  return fetch(url)
    .then(res => res.json(), console.log)
    .then(json => dispatch(setStructures(json)))
}
