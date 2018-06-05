// @flow
import React from "react"


import { FilterArchitectTitleStyl, FilterArchitectsStyl, FilterArchitectsWrapper} from "../Sidebar"


export default class FilterArchitects extends React.Component
{
    render() {
        const { architectsNames, architectsSetCount, onSubmit } = this.props;

        return (
            <FilterArchitectsStyl>
                <FilterArchitectsWrapper /* show={this.state.showList} */ >
                    <input
                        //className="InputStyle"
                        list="architectsList"
                        onChange={ev => onSubmit(ev.target.value)}
                        placeholder="architekt, stavba"
                    />
                    <datalist id="architectsList">
                        {architectsNames.map((x, i) => <option key={i}>{x}</option>)}
                    </datalist>
                </FilterArchitectsWrapper>
            </FilterArchitectsStyl>
        );
    }
}

