import React from 'react';
import styled from 'styled-components';

export default function Footer(props){
  const {copyright, date} = props;
  const StyledFooter = styled.div`
    display: flex;
    flex-flow: row nowrap;
    justify-content: space-between;
    h4 {
      padding: 0 2rem;
    }
  `;
  return (
    <StyledFooter>
      <h4>{date}</h4>
      <h4>{copyright}</h4>
    </StyledFooter>
  )
}