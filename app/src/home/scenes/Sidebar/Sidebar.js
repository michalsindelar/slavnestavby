import React from "react"
import styled from "styled-components"
import "react-input-range/lib/css/index.css"

import Filters from "./components/Filters"
import { THEME } from "../../consts/theme"

const SidebarStyle = styled.div`
  background-color: ${THEME.pallete.darkgrey};
  position: absolute;
  top: 60px;
  left: 0;
  bottom: 0;
  max-width: 205px;
  width: 20%;
  z-index: 1;
  padding: 30px;
  color: white;
  font-size: 14px;
  max-height: 100vh;
`

export const FilterYearTitleStyl = styled.div`
  font-size: 15px;
  color: ${THEME.pallete.ternary};
  padding-top: 10px;
  font-weight: 600;
`

export const FilterArchitectTitleStyl = styled.div`
  font-size: 15px;
  color: white;
`

export const FilterYearStyl = styled.div`
  padding: 40px 0 20px 0;
  border-top: 1px solid #888;
  border-bottom: 1px solid #888;
  margin-bottom: 10px;
`

export const FilterArchitectsStyl = styled.div`
  padding: 20px 0 10px 0;
  position: relative;
`

const Sidebar = () => (
  <SidebarStyle>
    <Filters />
  </SidebarStyle>
)

export default Sidebar
