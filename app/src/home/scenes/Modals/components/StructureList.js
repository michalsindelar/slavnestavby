import React, {Component} from "react";
import styled, { css } from "styled-components"
import { THEME } from "../../../consts/theme"
import * as R from "ramda"


const StructureListStyle = styled.div`
	padding: 80px;
	border-radius: 3px;
	width: 100%;
	display: flex;
	
`
const LeftSide = styled.div`
	max-width: 600px;
	flex-shrink: 0;

	h1 {
		margin: 0 0 100px 0;
		color: white;
	}

	p {
		color: white;
		font-size: 14px;
		letter-spacing: .02em;
		line-height: 1.4em;	
	}
`

const RightSide = styled.div`
	width: 100%;
	padding-left: 80px;
	display: flex;
	flex-wrap: wrap;
	justify-content: center;
	align-content: center;

	img {
		max-width: 150px;
		max-height: 75px;
		margin: 20px;
		object-fit: contain;
		opacity: 0.5;
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

		const makeParagraphs = (
			R.split('\n', this.props.description).map((item, i) => {
				return (
					!R.isEmpty(item) ? 
					<p key={ i }>{ item }</p> : null
				)
			})
		);

		return (
				<StructureListStyle style={{ backgroundColor: color }}>
					<LeftSide>
						<h1>
							{ this.props.name }<br />
							<span style={{ opacity: 0.5, color: THEME.pallete.darkgrey }}>{ this.props.H2 }</span>
						</h1>
						{ makeParagraphs }
					</LeftSide>
					<RightSide>
						<img src={ process.env.PUBLIC_URL + '/logos/ministrstvo-kultury.png' } alt="Ministrstvo Kultury"/>
						<img src={ process.env.PUBLIC_URL + '/logos/narodni-pamatkovy-ustav.png' } alt="Národní památkový ústav"/>
						<img src={ process.env.PUBLIC_URL + '/logos/koterovo-centrum-architektury.png' } alt="Kotěrovo centrum architektury"/>
						<img src={ process.env.PUBLIC_URL + '/logos/foibos.png' } alt="Stavby století republiky 1918–2018"/>
						<img src={ process.env.PUBLIC_URL + '/logos/stavby-stoleti-republiky.png' } alt="Foibos books"/>
					</RightSide>
				</StructureListStyle>
		)
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

