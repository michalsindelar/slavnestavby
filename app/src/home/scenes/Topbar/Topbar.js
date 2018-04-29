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

const TopbarStyle = styled.div`
	position: absolute;
	top: 0;
	left: 0;
	right: 0;
	height: 60px;
	z-index: 1;
	border-bottom: 2px solid #414042;
  
	.header__menu{
	  display: flex;
	  min-height: 60px;
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
	  margin: 0 150px 0 0;
	  color: #000000;
	}
`;

class Topbar extends Component {
	render()
	{
		const {
			handleViewTypeChange
		} = this.props;

		return (
			<TopbarStyle>

				<div className="header__menu">
        			<a href="/" className="header__top-logo">slavné stavby</a>
					<TopbarItem
						value="map"
						changeView={handleViewTypeChange}
						name="Mapa"
					/>
						<div className="header__divider">|</div>
					<TopbarItem
						value="gallery"
						changeView={handleViewTypeChange}
						name="Galerie"
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
