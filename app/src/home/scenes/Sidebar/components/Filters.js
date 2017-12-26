import React, { Component } from "react"
import { connect } from "react-redux"

import FilterYear from "./FilterYear"
import { setFilterYears } from "../../../services/actions"
import { getFiltersMaxYear, getFiltersMinYear } from "../../../services/reducer"

class Filters extends Component {
  render() {
    const { handleFiltersYearsChange, minYear, maxYear } = this.props

    return (
      <div>
        <FilterYear
          minThreshold={1800}
          maxThreshold={2017}
          onChange={handleFiltersYearsChange}
          onCompleteChange={handleFiltersYearsChange}
          minYear={minYear}
          maxYear={maxYear}
        />
      </div>
    )
  }
}

export default connect(
  state => ({
    minYear: getFiltersMinYear(state),
    maxYear: getFiltersMaxYear(state),
  }),
  dispatch => ({
    handleFiltersYearsChange: years => dispatch(setFilterYears(years)),
  }),
)(Filters)
