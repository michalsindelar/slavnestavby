import React from "react"

const TopbarItem = ({changeView, name, value, view}) => (
	<span 	data-value={value} 
			onClick={ev => changeView(ev.target.dataset.value)} 
			className={ view == value ? 'active' : 'disabled' }>
				{name}
	</span>
)

export default TopbarItem