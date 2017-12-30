// @flow
import React from "react"

import "awesomplete/prism/prism.css"

import Block from "./Block"

const FilterTypes = ({ typesOptions }) => (
  <Block title="Funkce" items={typesOptions} itemsClickHandler={() => {}} />
)

export default FilterTypes
