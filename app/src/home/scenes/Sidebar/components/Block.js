import React from "react"
import styled, {css} from "styled-components"
import { THEME } from "../../../consts/theme"

const BlockStyl = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  border-bottom: 1px solid #888;  
  background: #363b40;
  min-height: 55px;
`
const BlockTitleStyl = styled.div`
  ${props => props.hide && css`
    display: none;
  `}
  color: #98a5b2;
  min-height: 55px;
  font-size: 14px;
  padding: 20px;
  box-sizing: border-box;
  font-weight: 400;
  letter-spacing: .1em;
  cursor: default;
  text-transform: uppercase;
  .btn-show {
    position: absolute;
    right: 30px;
    width: 18px;
    height: 15px;
    border: none;
    outline: none;
    background: none;
  }
  
  .btn-show img {
    width: 18px;
    height: 18px;
    transition: 200ms ease-in-out;
  }
  
   ${props => props.show && css`
        .btn-show img {
            transform: rotate(180deg);
        }
   `}
`;

const BlockItemsStyl = styled.div`       
        visibility: hidden;
        transition: opacity 200ms, visibility 200ms;
        display: none;
    
    ${props => props.show && css`
        display: block;
        visibility: visible;
        opacity: 1;
        animation: fade 1s;
        padding: 0 0 25px 35px;
    `}
    
    @keyframes fade {
        0% {
            opacity: 0;
        }
    
        100% {
            opacity: 1;
        }
    }
`;

const BlockItemsItemStyl = styled.div`

  padding: 3px 0;
  color: #cfdae5;
  cursor: pointer;
  font-weight: 100;
  position: relative;

  &:hover {
    color: #98a5b2;
    transition: .2s;
  }

  ${props => props.hide && css`
    color: #98a5b2;
    font-size: 14px;
    font-weight: 400;
    letter-spacing: .1em;
    text-transform: uppercase;
    padding-left: 0px;
  `}  
  ${props => props.toggleMenu && css`
    color: ${THEME.pallete.blue};
    &:hover {
      color: ${THEME.pallete.blue};
    } 
    &:before {
        position: absolute;
        top: 8px;
        left: -22px;
        content: "";
        width: 10px;
        height: 10px;
        background: url('/img/close-icon.svg') center center no-repeat;
        background-size: 30px;
    }
  `}
`;

const BlockItemsItemLabelStyl = styled.span`
  display: inline-block;
  padding-top: 0px;
  font-weight: 400;
`;

export default class Block extends React.Component
{
    constructor(props)
    {
        super(props);
        
        if (this.props.showOverride) {
          this.state = {
            showList: true
          };
        } else {
          this.state = {
            showList: false
          };
        }
        

        this.onClickToggleButton = this.onClickToggleButton.bind(this);
    }

    onClickToggleButton(props) {
        
        this.setState({
            showList: !this.state.showList
        })
    }

    render() {
        const { title, items, itemsClickHandler, structureListOverride } = this.props;

        return (
            <BlockStyl show={ this.state.showList }>
              <BlockTitleStyl onClick={this.onClickToggleButton} show={this.state.showList} hide={structureListOverride}>{title}
                <button
                  className="btn-show">
                  <img src={process.env.PUBLIC_URL + '/img/down-arrow-ico.svg'} />
                </button>
              </BlockTitleStyl>
              <BlockItemsStyl show={this.state.showList}>
                {items.map((x, i) => (
                <BlockItemsItemStyl
                  //hide={ structureListOverride }
                  toggleMenu={x.active}
                  key={i}
                  onClick={() => itemsClickHandler(x.id)}>
                  <BlockItemsItemLabelStyl>{x.label}</BlockItemsItemLabelStyl>
                </BlockItemsItemStyl>
                ))}
              </BlockItemsStyl>
            </BlockStyl>
        );
    }
}
