import React, {Component} from "react";
import styled, { css } from "styled-components"
import { THEME } from "../../../consts/theme"

const StructureListStyle = styled.div`
	padding: 40px;
	border-radius: 3px;
	width: 100%;

	h1 {
		margin: 0;
	}

	ol {
		padding: 0;
		margin: 50px 0px 0px 27px;
	}

	p, h1, ol {
		color: ${THEME.pallete.darkgrey};
	}

	p {
		margin: 0;
	}
`

export default class StructureList extends Component {
	constructor(props)
	{
		super(props);
	}

	render()
	{
		const { color } = this.props

		const bgColorStyle = {
			backgroundColor: color,
		}

		return <StructureListStyle style={ bgColorStyle }>
			<h1>{this.props.name}</h1>
			<p>{this.props.description}</p>
			<ol>
				{this.props.structures.map(({structureId, customIcon}, i) => {
					return (
						<li key={i}>
							&emsp;{this.props.structuresData[structureId].name}
						</li> );
				})}
			</ol>
		</StructureListStyle>
	}
}
// <ul>
// 	{this.props.structures.map(({structureId, customIcon}, i) => {
// 		return <li key={i}>
// 				ID: {structureId},
// 				Icon: <img src={customIcon} height="20px" />,
// 				Name: {this.props.structuresData[structureId].name}
// 			</li>
// 	})}
// </ul>