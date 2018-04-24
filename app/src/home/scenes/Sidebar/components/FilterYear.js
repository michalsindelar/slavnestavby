// @flow
import React from "react"
import InputRange from "react-input-range"

import { FilterYearTitleStyl, FilterYearStyl, InputRangeStyle } from "../Sidebar"

import "react-input-range/lib/css/index.css"


export default class FilterYear extends React.Component
{
    constructor()
    {
        super();

        this.state = {
            showList: false
        };

        this.onClickToggleButton = this.onClickToggleButton.bind(this);
    }

    onClickToggleButton() {
        this.setState({
            showList: !this.state.showList
        })
    }

    render() {
        const { minThreshold, maxThreshold, onChange, onChangeComplete, minYear, maxYear,} = this.props;

        return (
            <FilterYearStyl>
                <FilterYearTitleStyl show={this.state.showList}>
                    Realizace

                    <button onClick={this.onClickToggleButton} className="btn-show"><img src={process.env.PUBLIC_URL + '/img/down-arrow-ico.svg'} /></button>

                </FilterYearTitleStyl>
                <InputRangeStyle show={this.state.showList}>
                <InputRange
                    draggableTrack
                    maxValue={maxThreshold}
                    minValue={minThreshold}
                    onChange={onChange}
                    onChangeComplete={onChangeComplete}
                    value={{ min: minYear, max: maxYear }}
                />
                </InputRangeStyle>

            </FilterYearStyl>
        );
    }
}

