// @flow
import React from "react";
import "awesomplete/prism/prism.css";
import FilterStructureListsBlock from "./FilterStructureListsBlock";

const FilterStructureLists = ({structureLists, toggleFilterStructureList, TogglerFilterStructureList}) =>
{
	const list = structureLists.map((item) => {
		return {
			id: item.id,
			label: item.name,
			active: true,
			color: item.color
		}
	});
console.log(TogglerFilterStructureList);
	return (
		<FilterStructureListsBlock
			title="Seznamy staveb"
			items={list}
			itemsClickHandler={toggleFilterStructureList}
			togglerFilterStructureList={TogglerFilterStructureList}
		/>
	)
}
			// active: false
			// color: "#A89A69"
			// id: 1525017572499
			// label: "STAVBY STOLETÍ"
		

export default FilterStructureLists
