// @flow
import React from "react"

import "awesomplete/prism/prism.css"

import { FilterArchitectTitleStyl, FilterArchitectsStyl, FilterArchitectsWrapper} from "../Sidebar"


export default class FilterArchitects extends React.Component
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
        const { architectsNames, architectsSetCount, onSubmit } = this.props;

        return (
            <FilterArchitectsStyl>
                <FilterArchitectsWrapper show={this.state.showList}>
                    <input
                        className="awesomplete"
                        list="architectsList"
                        onChange={ev => onSubmit(ev.target.value)}
                        style={{ width: "100%" }}
                    />
                    <datalist id="architectsList">
                        {architectsNames.map((x, i) => <option key={i}>{x}</option>)}
                    </datalist>
                </FilterArchitectsWrapper>
                <FilterArchitectTitleStyl show={this.state.showList}>Filtr

                    <button onClick={this.onClickToggleButton} className="btn-show"><img src={process.env.PUBLIC_URL + '/img/down-arrow-ico-blue.svg'} /></button>
                </FilterArchitectTitleStyl>
            </FilterArchitectsStyl>
        );
    }
}

