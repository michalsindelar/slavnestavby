import React, { Component } from "react"
import { setViewScreen } from "../../services/actions"
import { connect } from "react-redux"
import styled from "styled-components"
import "react-input-range/lib/css/index.css"

import {
	interposeLabelsAction
} from "../../services/actionsCreators"

import TopbarItem from "./components/TopbarItem"
import SocialIcons from "./components/SocialIcons"
import { THEME } from "../../consts/theme"

const TopbarStyle = styled.div`
	position: fixed;
	top: 0;
	left: 0;
	right: 0;
	height: 50px;
	z-index: 1;
	border-bottom: 2px solid #414042;
  
	.header__menu{
	  display: flex;
	  min-height: 50px;
	  align-items: center;
	  text-transform: uppercase;
	  padding: 0 25px;
	}

	.header__menu span {
	  cursor: pointer;
	  min-width: 50px;
	}

	.header__menu span:hover {
	  font-weight: 500;
      transition: all 0.3s ease-in-out;
	}

	.header__divider{
	  margin: 0 15px;
	}

	.header__top-logo{
	  text-decoration: none;
	  font-size: 24px;
	  margin: 0 210px 0 0;
	  color: #000000;
	}
	.disabled {
		font-weight: 600;
	}
	.beta {
		position: absolute;
		top: 15px;
		left: 217px;
		font-size: 13px;
		font-weight: 600px;
		color: white;
		background-color: ${ THEME.pallete.darkgrey };
		padding: 1px 5px 2px 5px;
		letter-spacing: .02em;
	}
`;

class Topbar extends Component {
	render()
	{
		const {
			handleViewTypeChange,
			view
		} = this.props;

		return (
			<TopbarStyle>

				<div className="header__menu">
        			<a href="/" className="header__top-logo">slavné stavby</a>
        			<div className="beta">BETA</div>
					<TopbarItem
						value="map"
						changeView={ handleViewTypeChange }
						name="Mapa"
						view={ view }
					/>
						<div className="header__divider">|</div>
					<TopbarItem
						value="gallery"
						changeView={ handleViewTypeChange }
						name="Galerie"
						view={ view }
					/>

					<SocialIcons />
				</div>

			</TopbarStyle>
		)
	}
}

export default connect(
	state => ({}),
	dispatch => ({
		handleViewTypeChange: type => {
			dispatch(setViewScreen(type))
			dispatch(interposeLabelsAction())
		},
	}),
)(Topbar)
