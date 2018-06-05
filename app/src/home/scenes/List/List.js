import React, { Component } from "react"
import styled, { css } from "styled-components"

import { setActiveStructure } from "../../services/actions"
import Pagination from "react-js-pagination"

const ListStyle = styled.div`
  
`
const PaginationWrapper = styled.div`
        display: block;
        padding: 50px 0;
        width: 100%;
    ${props => props.hidePagination && css`
        display: none;
    `}
`

class List extends Component {
    constructor(props) {
        super(props);

        this.state = {
          activePage: 1,
          itemsFrom: 0,
          itemsTo: 30
        };

        this.handlePageChange = this.handlePageChange.bind(this);
    }

    handlePageChange(pageNumber) {
        this.setState({
            activePage: pageNumber,
            itemsFrom: pageNumber * 30 - 30,
            itemsTo: pageNumber * 30
        });
    }

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

                mapPoints.push(
                <div className="list-items" data-id={item.id} onClick={click} key={i}>
                    <div className="list-items__image">
                        <img data-id={item.id} onClick={click} src={item.photo} key={i} />
                    </div>
                    <div className="list-items__title" data-id={item.id} onClick={click} key={i}>
                        {item.title}
                    </div>
                </div>
                );
            }
        }
        if (mapPoints.length < 30) {
            var hidePaginationToggle = true;
        } else {
            var hidePaginationToggle = false;
        }
        

        let displayGallery = view == "gallery" ? "flex" : "none";
        

        return (
            <div id="galleryList" style={{display: displayGallery}}>
                <ListStyle className="list-items__wrapper">
                    {mapPoints.slice(this.state.itemsFrom, this.state.itemsTo)}
                    <PaginationWrapper hidePagination={ hidePaginationToggle }>
                        <Pagination
                            activePage={ this.state.activePage }
                            itemsCountPerPage={ 30 }
                            totalItemsCount={ mapPoints.length }
                            pageRangeDisplayed={ 5 }
                            onChange={ this.handlePageChange }
                        />
                    </PaginationWrapper>
                </ListStyle>
            </div>
       )
    }
}

export default List
