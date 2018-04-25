import React from "react"
import styled, {css} from "styled-components"
import { THEME } from "../../../consts/theme"

const BlockStyl = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  padding: 12px 20px; 
  border-bottom: 1px solid #888;
  background: #363b40;
`
const BlockTitleStyl = styled.div`
  color: #98a5b2;
  font-size: 14px;
  font-weight: 400;
  letter-spacing: .1em;
  text-transform: uppercase;
  margin-bottom: 32px;
  
  .btn-show {
    position: absolute;
    right: 30px;
    width: 18px;
    height: 15px;
    border: none;
    outline: none;
    background: none;
    cursor: pointer;
  }
  
  .btn-show img {
    width: 18px;
    height: 18px;
    transition: 250ms linear all;
  }
  
   ${props => props.show && css`
   
        .btn-show img {
            transform: rotate(180deg);
        }
   `}
`;

const BlockItemsStyl = styled.div`       
        visibility: hidden;
        transition: opacity 600ms, visibility 600ms;
        display: none;
    
    ${props => props.show && css`
        display: block;
        visibility: visible;
        opacity: 1;
        animation: fade 1s;
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
  padding-left: 15px;

  
  
  ${props => props.test && css`
    color: ${THEME.pallete.blue};
     
    &:before {
        position: absolute;
        top: 8px;
        left: 0;
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
  padding: 2px 3px;
`;

export default class Block extends React.Component
{
    constructor()
    {
        super();

        this.state = {
          showList: false
        };

        this.onClickToggleButton = this.onClickToggleButton.bind(this);
    }

    onClickToggleButton() {
        this.setState({
            showList: !this.state.showList
        })
    }

    render() {
        const { title, items, itemsClickHandler } = this.props;

        return (
            <BlockStyl>
                <BlockTitleStyl show={this.state.showList}>{title}

                    <button onClick={this.onClickToggleButton} className="btn-show"><img src={process.env.PUBLIC_URL + '/img/down-arrow-ico.svg'} /></button>

                </BlockTitleStyl>
                <BlockItemsStyl show={this.state.showList}>
                    {items.map((x, i) => (
                        <BlockItemsItemStyl
                            test={x.active}
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
