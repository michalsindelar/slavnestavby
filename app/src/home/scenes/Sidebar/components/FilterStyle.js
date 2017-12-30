// @flow
import React from "react"

import "awesomplete/prism/prism.css"

import Block from "./Block"

const FilterStyles = ({ stylesOptions }) => (
  <Block title="Styl" items={stylesOptions} itemsClickHandler={() => {}} />
)

export default FilterStyles
