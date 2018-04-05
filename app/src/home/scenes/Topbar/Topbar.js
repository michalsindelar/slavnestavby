import React, { Component } from "react"
import { setViewScreen } from "../../services/actions"
import { connect } from "react-redux"
import styled from "styled-components"
import "react-input-range/lib/css/index.css"

import {
	interposeLabelsAction
} from "../../services/actionsCreators"

import TopbarItem from "./components/TopbarItem"

const TopbarStyle = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 60px;
  z-index: 1;
  border-bottom: 2px solid #414042;
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
					<TopbarItem value="map" changeView={handleViewTypeChange} name="Mapa" />
						<div className="header__divider">|</div>
					<TopbarItem value="gallery" changeView={handleViewTypeChange} name="Galerie" />
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
