import styled, { css } from 'styled-components'
import React from "react"
/* useless 
import "react-input-range/lib/css/index.css"
*/

import Filters from "./components/Filters"
import { THEME } from "../../consts/theme"
import Scrollbar from '../../consts/Scrollbar';

const SidebarStyle = styled.div`
  background: ${THEME.pallete.darkgrey};
  position: fixed; 
  width: 300px;
  height: calc(100% - 50px);
  max-height: calc(100vh - 50px);
  z-index: 1;
  color: white;
  font-size: 14px;
  transition: transform ease 250ms;
  left: -300px;
  top: 50px;
  overflow: visible;
  
  .btn-sidebar {
    left: 300px;
    background: ${THEME.pallete.darkgrey};
    top: 40vh;
    position: absolute;
    z-index: 99999;
    width: 20px;
    height: 50px;
    border: none;
    border-radius: 0 3px 3px 0;
    outline: none;
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
    transform: translate3d(300px, 0, 0); 
    
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
        /*ugly 
        animation: fade 1s;
        */
    `}
    
   /*ugly 
    @keyframes fade {
        0% {
            opacity: 0;
        }
    
        100% {
            opacity: 1;
        }
    } 
    */
`;

export const FilterYearTitleStyl = styled.div`
  color: #98a5b2;
  font-size: 14px;
  font-weight: 400;
  letter-spacing: .1em;
  text-transform: uppercase;
  cursor: default;
  
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
    transition: 200ms linear all;
  }
  
   ${props => props.show && css`
        .btn-show img {
            transform: rotate(180deg);
        }
   `}
`;

export const FilterArchitectTitleStyl = styled.div`
  font-size: 14px;
  color: ${THEME.pallete.accent};
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
  box-sizing: border-box;
  padding: 20px;  
  border-bottom: 1px solid #888;
  background: #363b40;
  ${props => props.show && css `
    padding-bottom: 35px;
  `}
`;

export const FilterArchitectsStyl = styled.div`
  padding: 24px 20px 0;
  position: relative;
`;

export const FilterArchitectsWrapper = styled.div`       
        visibility: visible;
        display: block;
        input {
          font-size: 16px;
          letter-spacing: .12em;
          padding: 0 15px;
          margin-bottom: 25px;
          width: 100%;
          height: 50px;
          color: #98a5b2;
          border: 1px solid #6c7680;
          background-color: #292e33;
          border-radius: 3px;
          box-sizing: border-box;          
        }
        
        input:focus {
          border: 1px solid ${THEME.pallete.accent};
        }
`;

const Sidebar = (props) => (
      <SidebarStyle toggleMenu={ props.toggleMenu }>
          <button
              className="btn-sidebar"
              onClick={ props.onToggleButtonClick }>
              <img src={ process.env.PUBLIC_URL + '/img/arrow-ico.svg' } />
          </button>
        <Scrollbar topOffset={ 10 }>
          <Filters />
        </Scrollbar>
      </SidebarStyle>
);
export default Sidebar
