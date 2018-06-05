import React from "react"
import styled, {css} from "styled-components"
import { THEME } from "../../../consts/theme"

const BlockStyl = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  min-height: 55px;
  padding: 0 20px;
`

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

  ${props => props.toggleMenu && css`
    color: ${props => props.color};
    &:hover {
      color: ${props => props.color};
    } 
    
    &:before {
        display: none;

        position: absolute;
        top: 8px;
        left: -22px;
        content: "";
        width: 10px;
        height: 10px;
        background: url('data:image/svg+xml;utf-8,<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:a="http://ns.adobe.com/AdobeSVGViewerExtensions/3.0/" x="0px" y="0px" width="512px" height="512px" viewBox="0 0 512 512" style="enable-background:new 0 0 512 512;" xml:space="preserve"> <style type="text/css"> .st0{fill:%23${ props => props.color.slice(1) };} </style> <defs> </defs> <path class="st0" d="M285.2,256L505.9,35.3c8.1-8.1,8.1-21.2,0-29.2c-8.1-8.1-21.2-8.1-29.2,0L256,226.8L35.3,6.1 C27.2-2,14.1-2,6.1,6.1C-2,14.1-2,27.2,6.1,35.3L226.8,256L6.1,476.7c-8.1,8.1-8.1,21.2,0,29.2c4,4,9.3,6.1,14.6,6.1 c5.3,0,10.6-2,14.6-6.1L256,285.2l220.7,220.7c4,4,9.3,6.1,14.6,6.1c5.3,0,10.6-2,14.6-6.1c8.1-8.1,8.1-21.2,0-29.3L285.2,256z"/> </svg>') center center no-repeat;
        background-size: 30px;
    }
  `}
`;

const BlockItemsItemLabelStyl = styled.span`
  display: inline-block;
  padding-top: 0px;
  font-weight: 400;
  letter-spacing: .1em;
`;

export default class FilterStructureListsBlock extends React.Component
{

  render() {
        const { items, itemsClickHandler } = this.props;
        // console.log({ items: items });
        return (
            <BlockStyl>
              {items.map((x, i) => (
                <BlockItemsItemStyl
                  toggleMenu={ x.active }
                  key={i}
                  onClick={ () => itemsClickHandler(x.id) }
                  // x.id => id: 1525017572499
                  color={ x.color }>
                  <BlockItemsItemLabelStyl>{ x.label }</BlockItemsItemLabelStyl>
                </BlockItemsItemStyl>
              ))}
            </BlockStyl>
        );
    }
}
