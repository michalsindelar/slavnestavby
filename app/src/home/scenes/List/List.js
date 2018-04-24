import React, { Component } from "react"
import styled from "styled-components"

import { setActiveStructure } from "../../services/actions"

const ListStyle = styled.div`
  
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

                mapPoints.push(<div className="list-items" data-id={item.id} onClick={click} key={i}>
                    <div className="list-items__image" >
                        <img data-id={item.id} onClick={click} src={item.photo} key={i} />
                    </div>
                    <div className="list-items__title" data-id={item.id} onClick={click} key={i}>
                        {item.title}
                    </div>
                </div>);
            }
        }


        let displayGallery = view == "gallery" ? "flex" : "none";

        return (
            <ListStyle id="galleryList" className="list-items__wrapper" style={{display: displayGallery}}>
                {mapPoints}
            </ListStyle>
        )
    }
}

export default List
