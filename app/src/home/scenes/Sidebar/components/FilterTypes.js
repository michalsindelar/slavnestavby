// @flow
import React from "react"

import "awesomplete/prism/prism.css"

import Block from "./Block"

const FilterTypes = () => (
  <Block
    title="Funkce"
    items={[
      { id: "res", label: "residenční", active: false },
      { id: "vzd", label: "vzdělání", active: true },
      { id: "sak", label: "sakrální", active: false },
    ]}
    itemsClickHandler={() => {}}
  />
)

export default FilterTypes
