import styled, { css } from 'styled-components'
import React from "react"
import "react-input-range/lib/css/index.css"

import Filters from "./components/Filters"
import { THEME } from "../../consts/theme"

const SidebarStyle = styled.div`
  background: ${THEME.pallete.darkgrey};
  position: absolute; 
  width: 400px;
  height: 100%;
  max-height: 100vh;
  z-index: 1;
  color: white;
  font-size: 14px;
  transition: transform ease 250ms;
  left: -400px;
  top: 60px;
  
  .btn-sidebar {
    left: 400px;
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
  
  ${props => props.toggleMenu && css`
    transform: translate3d(400px, 0, 0); 
    
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
  font-size: 14px;
  font-weight: 400;
  letter-spacing: .1em;
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
  font-size: 14px;
  color: ${THEME.pallete.blue};
  margin-bottom: 24px;
  text-transform: uppercase;
  font-weight: 400;
  letter-spacing: .1em;
  
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
  padding: 36px 25px 0;
  position: relative;
`;

export const FilterArchitectsWrapper = styled.div`       
        visibility: visible;
        display: block;
        input {
          font-size: 16px;
          letter-spacing: .12em;
          padding: 0 15px;
          margin-bottom: 39px;
          width: 100%;
          height: 50px;
          color: #98a5b2;
          border: 1px solid #6c7680;
          background-color: #292e33;
          border-radius: 5px;
          box-sizing: border-box;          
        }
        input:focus {
          border: 1px solid ${THEME.pallete.blue};
        }
`;


const Sidebar = (props) => (

      <SidebarStyle
          toggleMenu={props.toggleMenu}
      >

          <Filters />

          <button
              className="btn-sidebar"
              onClick={props.onToggleButtonClick}>
              <img src={process.env.PUBLIC_URL + '/img/arrow-ico.svg'} />
          </button>

      </SidebarStyle>

);





export default Sidebar
