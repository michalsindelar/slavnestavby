// @flow
import React from "react"

import "awesomplete/prism/prism.css"

import Block from "./Block"

const FilterStyles = ( { stylesOptions, toggleFilterStyle }) => {
  return (
  <Block
      title="Styl"
      items={stylesOptions}
      itemsClickHandler={toggleFilterStyle}
  />
)}

export default FilterStyles
