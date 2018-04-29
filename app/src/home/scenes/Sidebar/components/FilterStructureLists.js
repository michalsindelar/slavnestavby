// @flow
import React from "react";
import "awesomplete/prism/prism.css";
import Block from "./Block";

const FilterStructureLists = ({structureLists, toggleFilterStructureList}) =>
{
	const list = structureLists.map((item) => {
		return {
			id: item.id,
			label: item.name,
			active: false,
		}
	});

	return (
		<Block
			title="Seznamy staveb"
			items={list}
			itemsClickHandler={toggleFilterStructureList}
		/>
	)
}

export default FilterStructureLists
