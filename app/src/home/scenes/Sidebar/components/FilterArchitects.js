// @flow
import React from "react"
import * as R from "ramda"

import "awesomplete/prism/prism.css"

import { FilterYearTitleStyl, FilterArchitectsStyl } from "../Sidebar"

type Props = {|
  architectsNames: Array<string>,
  architectsSetCount: number,
|}

const FilterArchitects = ({ architectsNames, architectsSetCount, onSubmit }: Props) => (
  <FilterArchitectsStyl>
    <div>
      <input
        className="awesomplete"
        list="architectsList"
        onChange={ev => onSubmit(ev.target.value)}
      />
      <datalist id="architectsList">{architectsNames.map(x => <option>{x}</option>)}</datalist>
    </div>
    <FilterYearTitleStyl>Architekt</FilterYearTitleStyl>
  </FilterArchitectsStyl>
)

export default FilterArchitects
