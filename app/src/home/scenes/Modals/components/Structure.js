// @flow
import React from "react"
import * as R from "ramda"
import styled from "styled-components"

const StructureStyl = styled.div`
  display: flex;
  color: black;
  font-weight: 400;
`
const StructureTitleStyl = styled.h2`
  font-size: 20px;
  font-weight: 600;
  padding-bottom: 30px;
`
const StructureAuthorStyl = styled.h3`
  font-size: 20px;
  padding-bottom: 30px;
  font-weight: 400;
`

const StructureLeftStyl = styled.div`
  width: 70%;
  position: relative;
  overflow: hidden;
  height: 400px;
`

const StructureRightStyl = styled.div`
  width: 50%;
  padding-left: 40px;
  padding-right: 40px;
  background-color: #ffffff;
  overflow-y: scroll;
  overflow-x: hidden;
  font-weight: 400;
  font-size: 12px;
  height: 400px;
`

const StructureImgStyl = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  filter: grayscale(100%);
  height: 420px;
`

type Props = {
  id: string,
  geometry: any,
  properties: any,
}

const Structure = ({ id, architects, photo, photos, name, description }: Props) => (
  <StructureStyl>
    <StructureLeftStyl>
      <StructureImgStyl src={photo} alt={name} />
    </StructureLeftStyl>

    <StructureRightStyl>
      <StructureTitleStyl>{name.split("(")[0]}</StructureTitleStyl>
      <StructureAuthorStyl>{architects.map(R.prop("name")).join(", ")}</StructureAuthorStyl>
      <p>{description}</p>
    </StructureRightStyl>
  </StructureStyl>
)

export default Structure
