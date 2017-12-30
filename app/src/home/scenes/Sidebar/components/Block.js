import React from "react"
import styled from "styled-components"
import { THEME } from "../../../consts/theme"

const BlockStyl = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 5px 0;
  border-top: 1px solid #888;
  border-bottom: 1px solid #888;
`
const BlockTitleStyl = styled.div`
  font-size: 16px;
`
const BlockItemsStyl = styled.div`
  flex-direction: column;
  text-align: right;
`

const BlockItemsItemStyl = styled.div`
  padding: 3px 0;
  cursor: pointer;
  border-radius: 2px;
`
const BlockItemsItemLabelStyl = styled.span`
  display: inline-block;
  padding: 2px 3px;
  border-radius: 2px;
`

const Block = ({ title, items, itemsClickHandler }) => (
  <BlockStyl>
    <BlockTitleStyl>{title}</BlockTitleStyl>
    <BlockItemsStyl>
      {items.map((x, i) => (
        <BlockItemsItemStyl key={i} onClick={() => itemsClickHandler(x.id)}>
          <BlockItemsItemLabelStyl style={{ backgroundColor: x.active ? THEME.pallete.quaternary : "" }}>{x.label}</BlockItemsItemLabelStyl>
        </BlockItemsItemStyl>
      ))}
    </BlockItemsStyl>
  </BlockStyl>
)

export default Block
