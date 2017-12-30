import React from "react"
import styled from "styled-components"

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
`

const Block = ({ title, items }) => (
  <BlockStyl>
    <BlockTitleStyl>{title}</BlockTitleStyl>
    <BlockItemsStyl>
      {items.map(x => <BlockItemsItemStyl>{x.label}</BlockItemsItemStyl>)}
    </BlockItemsStyl>
  </BlockStyl>
)

export default Block
