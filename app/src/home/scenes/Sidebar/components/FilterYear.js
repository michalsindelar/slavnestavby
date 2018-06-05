// @flow
import React from "react"
import InputRange from "react-input-range"
import BtnShow from "../Sidebar"

import { FilterYearTitleStyl, FilterYearStyl, InputRangeStyle } from "../Sidebar"
import styled, {css} from "styled-components"


export default class FilterYear extends React.Component
{
    constructor()
    {
        super();

        this.state = {
            showList: true
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
            <FilterYearStyl show={ this.state.showList }>
                <FilterYearTitleStyl show={this.state.showList}
                            onClick={ this.onClickToggleButton }>
                    Realizace

                    <button
                        className="btn-show">
                        <img src={process.env.PUBLIC_URL + '/img/down-arrow-ico.svg'} />
                    </button>

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

