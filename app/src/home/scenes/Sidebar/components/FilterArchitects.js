// @flow
import React from "react"

import "awesomplete/prism/prism.css"

import { FilterArchitectTitleStyl, FilterArchitectsStyl } from "../Sidebar"

type Props = {|
  architectsNames: Array<string>,
  architectsSetCount: number,
|}

const FilterArchitects = ({ architectsNames, architectsSetCount, onSubmit }: Props) => (
  <FilterArchitectsStyl>
    <FilterArchitectTitleStyl>Architekt</FilterArchitectTitleStyl>
    <input
      className="awesomplete"
      list="architectsList"
      onChange={ev => onSubmit(ev.target.value)}
      style={{ width: "100%" }}
    />
    <datalist id="architectsList">
      {architectsNames.map((x, i) => <option key={i}>{x}</option>)}
    </datalist>
  </FilterArchitectsStyl>
)

export default FilterArchitects
