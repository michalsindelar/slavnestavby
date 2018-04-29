// @flow
import React from "react"

import "awesomplete/prism/prism.css"

import Block from "./Block"

const FilterTypes = ({ typesOptions, toggleFilterType }) => (


  <Block title="Funkce" items={typesOptions} itemsClickHandler={toggleFilterType} />

)

export default FilterTypes
