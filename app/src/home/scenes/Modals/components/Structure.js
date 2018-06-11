// @flow
import React, { Component } from "react"
import * as R from "ramda"
import styled from "styled-components"
import { THEME } from "../../../consts/theme"
import Scrollbar from "../../../consts/Scrollbar"

const StructureStyl = styled.div`
  display: flex;
  margin: auto;
  max-width: 90%;
  max-height: 90vh;
`
const StructureTitleStyl = styled.h2`
  font-size: 30px;
  line-height: 1.3em;
  font-weight: 600;
  margin-bottom: 30px;
`
const StructureAuthorStyl = styled.h3`
  font-size: 16px;
  font-weight: 400;
`

const StructureLeftStyl = styled.div`
  overflow: hidden;
  margin-right: 10px;
  border-radius: 3px;
  max-width: inherit;
  max-height: inherit;
`

const StructureRightStyl = styled.div`
  width: 400px;
  border-radius: 3px;
  box-sizing: border-box;
  background-color: #ffffff;
  font-weight: 400;
  font-size: 14px;
  letter-spacing: .03em;
  line-height: 1.8em;
  max-height: 90vh;
  min-height: 70vh;
  flex-shrink: 0;
`

const StructureImgStyl = styled.img`
  display: block;
  max-width: 100%;
  max-height: 100%;
  object-fit: contain;
`


export default class Structure extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { id, architects, photo, photos, name, description, style, year } = this.props;

    const makeParagraphs = (
      R.split('\n', description).map((item, i) => {
        return (
          !R.isEmpty(item) ? 
          <p key={ i }>{ item }</p> : null
        )
      })
    );

    return (
      <StructureStyl>
        <StructureLeftStyl>
          <StructureImgStyl src={photo} alt={name} />
        </StructureLeftStyl>
        <StructureRightStyl>
          <Scrollbar topOffset={ 10 } padding={ 40 }>
            <StructureAuthorStyl>{architects.map(R.prop("name")).join(", ")}&ensp;|&ensp;{ style }&ensp;|&ensp;{ year }</StructureAuthorStyl>
            <StructureTitleStyl>{ name.split("(")[0] }</StructureTitleStyl>
            <p>{ makeParagraphs }</p>
          </Scrollbar>
        </StructureRightStyl>
      </StructureStyl>
    );
  }
}

// type Props = {
//   id: string,
//   geometry: any,
//   properties: any,
// }
// const Structure = ({ id, architects, photo, photos, name, description, style, year }: Props) => (
//   <StructureStyl>
//     <StructureLeftStyl>
//       <StructureImgStyl src={photo} alt={name} />
//     </StructureLeftStyl>

//     <StructureRightStyl>
//       <Scrollbar topOffset={ 10 } padding={ 40 }>
//           <StructureAuthorStyl>{architects.map(R.prop("name")).join(", ")}&ensp;|&ensp;{ style }&ensp;|&ensp;{ year }</StructureAuthorStyl>
//           <StructureTitleStyl>{ name.split("(")[0] }</StructureTitleStyl>
//           <p>{ description }</p>
//       </Scrollbar>
//     </StructureRightStyl>
//     </StructureStyl>
// )

// export default Structure
