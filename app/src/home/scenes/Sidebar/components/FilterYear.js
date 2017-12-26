// @flow
import React from "react"
import InputRange from "react-input-range"

import "react-input-range/lib/css/index.css"

type Props = {|
  minThreshold: number,
  maxThreshold: number,
  onChange: Function,
  onChangeComplete: Function,
  minYear: number,
  maxYear: number,
|}
const FilterYear = ({
  minThreshold,
  maxThreshold,
  onChange,
  onChangeComplete,
  minYear,
  maxYear,
}: Props) => (
  <div>
    <InputRange
      draggableTrack
      maxValue={maxThreshold}
      minValue={minThreshold}
      onChange={onChange}
      onChangeComplete={onChangeComplete}
      value={{ min: minYear, max: maxYear }}
    />
  </div>
)

export default FilterYear
