import React from "react"
import styled from "styled-components"
import "react-input-range/lib/css/index.css"

import Filters from "./components/Filters"
import { THEME } from "../../consts/theme"

const SidebarStyle = styled.div`
  background-color: ${THEME.pallete.secondary};
  opacity: 0.95;
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  height: 100%;
  width: 300px;
  z-index: 1;
`

export const FilterYearTitleStyl = styled.div`
  font-size: 15px;
  color: ${THEME.pallete.ternary};
  padding-top: 10px;
  font-weight: 600;
`

export const FilterYearStyl = styled.div`
  margin-top: 20px;
  padding: 40px 30px;
  border-top: 1px solid #888;
  border-bottom: 1px solid #888;
`

export const FilterArchitectsStyl = styled.div`
  padding: 20px 30px;
`

const Sidebar = () => (
  <SidebarStyle>
    <Filters />
  </SidebarStyle>
)

export default Sidebar
