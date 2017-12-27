import React, { Component } from "react"
import { connect } from "react-redux"

import FilterYear from "./FilterYear"
import { setFilterYears } from "../../../services/actions"
import {
  getFiltersArchitect,
  getFiltersMaxYear,
  getFiltersMinYear,
} from "../../../services/reducer"
import { interposeLabelsAction, setArchitectFromName } from "../../../services/actionsCreators"
import FilterArchitects from "./FilterArchitects"
import { getArchitectsNames } from "../../../services/selectors"

class Filters extends Component {
  render() {
    const {
      architectsNames,
      handleFiltersYearsChange,
      handleArchitectChange,
      minYear,
      maxYear,
    } = this.props

    const onArchitectAdd = architect => {
      // ugly as fuck
      if (architect.length > 6) {
        handleArchitectChange(architect)
      }
    }

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
        <FilterArchitects
          architectsNames={architectsNames}
          architectsSetCount={1}
          onSubmit={onArchitectAdd}
        />
      </div>
    )
  }
}

export default connect(
  state => ({
    architectsNames: getArchitectsNames(state),
    minYear: getFiltersMinYear(state),
    maxYear: getFiltersMaxYear(state),
    filtersArchitect: getFiltersArchitect(state),
  }),
  dispatch => ({
    handleFiltersYearsChange: years => {
      dispatch(setFilterYears(years))
      dispatch(interposeLabelsAction())
    },
    handleArchitectChange: architect => {
      dispatch(setArchitectFromName(architect))
      dispatch(interposeLabelsAction())
    },
  }),
)(Filters)
