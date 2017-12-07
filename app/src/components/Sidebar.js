import React from "react"
import styled from "styled-components"

import { THEME } from "../consts/theme"

const SidebarStyle = styled.div`
  background-color: ${THEME.pallete.secondary};
  opacity: 0.95;
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  height: 100%;
  width: 120px;
  z-index: 1;
`

const Sidebar = () => (
  <SidebarStyle>
    <li>1</li>
    <li>1</li>
    <li>1</li>
    <li>1</li>
    <li>1</li>
  </SidebarStyle>
)

export default Sidebar
