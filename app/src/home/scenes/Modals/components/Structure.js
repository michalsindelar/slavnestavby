// @flow
import React from "react"

type Props = {
  id: string,
  geometry: any,
  properties: any,
}

const Structure = props => (
  <div>
    <h1>Structure {props.id}</h1>
    <code>{JSON.stringify(props)}</code>
  </div>
)

export default Structure
