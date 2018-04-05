import React from "react"

const TopbarItem = ({changeView, name, value}) => (
	<span data-value={value} onClick={ev => changeView(ev.target.dataset.value)} >{name}</span>
)

export default TopbarItem