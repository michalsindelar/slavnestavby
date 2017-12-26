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
  width: 200px;
  z-index: 1;
  padding: 20px;
`

const Sidebar = () => (
  <SidebarStyle>
    <Filters />
  </SidebarStyle>
)

export default Sidebar
