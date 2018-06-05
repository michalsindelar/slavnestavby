import styled from "styled-components";

const Wrapper = styled.div.attrs({className: 'header__social-icons'})`
    margin-left: auto;
    align-items: center;
    display: flex;
    
    .side-link {
      color: #000000;
      margin: 0 25px;
      text-decoration: none;
    }
    
    .side-link:hover {
      font-weight: 500;
      transition: all 0.3s ease-in-out;
    }
    
	img {
	    width: 28px;
      display: block;
	}
`;

export {
    Wrapper
}