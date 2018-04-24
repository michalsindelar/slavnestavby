import styled, { css } from 'styled-components'
import React from "react"
import "react-input-range/lib/css/index.css"

import Filters from "./components/Filters"
import { THEME } from "../../consts/theme"

const SidebarStyle = styled.div`
  background: ${THEME.pallete.darkgrey};
  position: absolute; 
  width: 270px;
  height: 100%;
  max-height: 100vh;
  z-index: 1;
  color: white;
  font-size: 14px;
  transition: transform ease 250ms;
  left: -270px;
  top: 60px;
  
  .btn-sidebar {
    left: 270px;
    background: ${THEME.pallete.darkgrey};
    top: 40vh;
    position: absolute;
    z-index: 99999;
    width: 20px;
    height: 50px;
    border: none;
    border-radius: 0 4px 4px 0;
    outline:none;
    cursor: pointer;
  }

  .btn-sidebar img {
    position: absolute;
    content: "";
    width: 18px;
    height: 15px;
    background: url("/img/arrow-ico.svg") center center no-repeat;
    top: 16px;
    left: 0;
    transition: transform ease 250ms;
    transition: 250ms linear all;
  }
  
  ${props => props.test && css`
    transform: translate3d(270px, 0, 0); 
    
    .btn-sidebar img {
        transform: rotate(180deg);
    }  
  `} 
`;


export const InputRangeStyle = styled.div`       
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

export const FilterYearTitleStyl = styled.div`
  color: #98a5b2;
  font-size: 15px;
  font-weight: 100;
  text-transform: uppercase;
  margin-bottom: 16px;
  
  .btn-show {
    position: absolute;
    right: 30px;
    width: 18px;
    height: 15px;
    border: none;
    outline:none;
    background: none;
    cursor: pointer;
  }
  
  .btn-show img {
    width: 18px;
    height: 18px;
    transition: 250ms linear all;
  }
  
   ${props => props.show && css`
   
        margin-bottom: 64px;

   
        .btn-show img {
            transform: rotate(180deg);
        }
   `}
`;

export const FilterArchitectTitleStyl = styled.div`
  font-size: 15px;
  color: ${THEME.pallete.blue};
  margin-bottom: 24px;
  text-transform: uppercase;
  font-weight: 100;
  font-size: 15px;
  
  .btn-show {
    position: absolute;
    right: 30px;
    width: 18px;
    height: 15px;
    border: none;
    outline:none;
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

export const FilterYearStyl = styled.div`
  padding: 12px 20px 32px;
  border-bottom: 1px solid #888;
  background: #363b40;
`;

export const FilterArchitectsStyl = styled.div`
  padding: 20px 25px 10px;
  position: relative;
`;

export const FilterArchitectsWrapper = styled.div`       
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


const Sidebar = (props) => (

      <SidebarStyle
          test={props.test}
      >

          <Filters />

          <button
              className="btn-sidebar"
              onClick={props.onToggleButtonClick}>
              <img src={process.env.PUBLIC_URL + '/img/arrow-ico.svg'} />
          </button>

      </SidebarStyle>

)





export default Sidebar
