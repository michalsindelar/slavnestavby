const structuresMapper = structure =>
  Object.assign({}, structure, { architectIds: structure.architect_ids })

export default structuresMapper
