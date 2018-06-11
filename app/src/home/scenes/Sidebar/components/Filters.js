import React, { Component } from "react"
import { connect } from "react-redux"

import FilterYear from "./FilterYear"
import { setFilterYears } from "../../../services/actions"
import {
  getFiltersArchitect,
  getFiltersMaxYear,
  getFiltersMinYear,
  getStructureLists,
} from "../../../services/reducer"
import {
  interposeLabelsAction,
  setArchitectFromName,
    toggleFilterStyle,
    toggleFilterStructureList,
  toggleFilterType,
} from "../../../services/actionsCreators"
import FilterArchitects from "./FilterArchitects"
import FilterTypes from "./FilterTypes"
import FilterStructureLists from './FilterStructureLists'
import FilterStyle from "./FilterStyle"
import {
  getArchitectsNames,
  getFilterTypes,
  getStylesOptions,
  getTypesOptions,
} from "../../../services/selectors"

import styled, {css} from "styled-components"
import { THEME } from "../../../consts/theme"

const H1 = styled.div`
    color: ${THEME.pallete.accent};
    font-size: 14px;
    display: inline;
    font-weight: 400;
    padding-left: 20px; 
    letter-spacing: .1em;
    text-transform: uppercase;
    margin-bottom: 32px;
`

const ToggleWrapper = styled.div`

  ${props => props.show && css`
    display: none;
  `}
`
const Button = styled.div`
    padding-top: 16px;
    box-sizing: border-box;
    min-height: 55px;
    cursor: default;

    .btn-show img {
    width: 18px;
    height: 18px;
    transition: 200ms ease-in-out;
    }
  
`

const Arrow = styled.div`
    float: right;
    padding-right: 22px;
    border: none;
    outline:none;
    background: none;
  
    .arrow {
    width: 18px;
    height: 18px;
    transition: 200ms linear all;
    }

   ${props => props.show && css`
        .arrow {
            transform: rotate(180deg);
        }
   `}
`

class Filters extends Component {
  constructor() {
    super();

    this.state = {
      showListFilter: false,
      showListStructures: false
    };
  }

  render() {
    const {
      architectsNames,
      handleFiltersYearsChange,
      handleArchitectChange,
      minYear,
      maxYear,
      filtersStylesOptions,
      filtersStructureLists,
      filtersTypesOptions,
      handleToggleFilterType,
      handleToggleFilterStyle,
      handleToggleFilterStructureList,
    } = this.props

    const onArchitectAdd = architect => {
      // ugly as fuck
      if (architect.length > 6) {
        handleArchitectChange(architect)
      }
    }
    console.log('filtersStructureLists', filtersStructureLists);
    return (
      <div>
        <FilterArchitects
          architectsNames={architectsNames}
          architectsSetCount={1}
          onSubmit={onArchitectAdd}
        />
        <Button onClick={() => this.setState({showListFilter: !this.state.showListFilter})}>
          <H1>Filtr</H1>
          <Arrow
            show={ this.state.showListFilter }>
            <img className="arrow" src={process.env.PUBLIC_URL + '/img/down-arrow-ico-blue.svg'} />
          </Arrow>
        </Button>

        <ToggleWrapper show={this.state.showListFilter}> 
          <FilterYear
            minThreshold={1800}
            maxThreshold={2017}
            onChange={handleFiltersYearsChange}
            onChangeComplete={handleFiltersYearsChange}
            minYear={minYear}
            maxYear={maxYear} />

          <FilterTypes 
            typesOptions={filtersTypesOptions} 
            toggleFilterType={handleToggleFilterType} />
          <FilterStyle
            stylesOptions={filtersStylesOptions}
            toggleFilterStyle={handleToggleFilterStyle} />
        </ToggleWrapper>     
        <Button>
          <H1 className="StructureListTitle">Seznamy staveb</H1>    
        </Button>
        <FilterStructureLists
          structureLists={filtersStructureLists}
          toggleFilterStructureList={handleToggleFilterStructureList} />
      </div>
    )
  }
}
          // active: false
          // color: "#A89A69"
          // id: 1525017572499
          // label: "STAVBY STOLETÍ"

export default connect(
  state => ({
    architectsNames: getArchitectsNames(state),
    minYear: getFiltersMinYear(state),
    maxYear: getFiltersMaxYear(state),
    filtersArchitect: getFiltersArchitect(state),
    filtersTypes: getFilterTypes(state),
    filtersStylesOptions: getStylesOptions(state),
    filtersTypesOptions: getTypesOptions(state),
    filtersStructureLists: getStructureLists(state)
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
    handleToggleFilterType: type => {
      dispatch(toggleFilterType(type))
      dispatch(interposeLabelsAction())
    },
    handleToggleFilterStyle: style => {
      dispatch(toggleFilterStyle(style))
      dispatch(interposeLabelsAction())
    },
    handleToggleFilterStructureList: structureListId => {
        dispatch(toggleFilterStructureList(structureListId));
        // active: false
        // color: "#A89A69"
        // id: 1525017572499
        // label: "STAVBY STOLETÍ"
        dispatch(interposeLabelsAction())
    },
  }),
)(Filters)
