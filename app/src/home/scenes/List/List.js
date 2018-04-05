import React, { Component } from "react"
import styled from "styled-components"

import { setActiveStructure } from "../../services/actions"

const ListStyle = styled.div`
  background-color: green;
`

class List extends Component {
    render() {
        const { view } = this.props;

        var mapPoints = [];

        if (window.mapPoints) {
            for (var i = 0; i < window.mapPoints.length; i++) {
                var item = window.mapPoints[i];

                var click = (e) => {
                    var id = parseInt(e.target.dataset.id);
                    console.log(id);
                    window.reduxStore.dispatch(setActiveStructure(id))
                }

                mapPoints.push(<div data-id={item.id} onClick={click} key={i}>{item.title}</div>);
            }
        }


        let displayGallery = view == "gallery" ? "block" : "none";

        return (
            <ListStyle id="galleryList" style={{display: displayGallery}}>
                {mapPoints}
            </ListStyle>
        )
    }
}

export default List
