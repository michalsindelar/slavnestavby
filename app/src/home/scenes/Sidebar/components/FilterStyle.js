// @flow
import React from "react"

import "awesomplete/prism/prism.css"

import Block from "./Block"

const FilterStyles = () => (
  <Block
    title="Styl"
    items={[
      { id: "fuk", label: "fukncionalismus", active: false },
      { id: "sec", label: "secese", active: true },
      { id: "pos", label: "postmoderna", active: false },
    ]}
    itemsClickHandler={() => {}}
  />
)

export default FilterStyles
