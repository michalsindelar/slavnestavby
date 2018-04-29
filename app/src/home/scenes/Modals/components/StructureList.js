import React, {Component} from "react";

export default class StructureList extends Component {
	constructor(props)
	{
		super(props);
	}

	render()
	{
		console.log(this.props);
		return <div>
			<h1>{this.props.name}</h1>
			<p>{this.props.description}</p>
			<ul>
				{this.props.structures.map(({structureId, customIcon}, i) => {
					return <li key={i}>
							ID: {structureId},
							Icon: <img src={customIcon} height="20px" />,
							Name: {this.props.structuresData[structureId].name}
						</li>
				})}
			</ul>
		</div>
	}
}