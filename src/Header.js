import React from 'react';
import styled from 'styled-components';

const logo = require('./images/nasa-logo.svg');
const HeaderStyled = styled.div`
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-evenly;
  h2 {
    font-size: 4rem;
  }
  img {
  }
`;

export default function Header(props){
  return (
    <HeaderStyled>
      <img src={logo} al="nasa logo"></img>
      <h2>Picture of the Day</h2>
    </HeaderStyled>

  )
}