import React from 'react';
import styled from 'styled-components';

export default function Content(props){
  const {photo, title, text} = props;
  const ContentStyled = styled.div`
    display: flex;
    flex-flow: column nowrap;
    align-items: center;
    img {
      max-width: 80%;
      max-height: 32rem;

    }
    p {
      max-width: 80%;
    }
  `;
  return (
    <ContentStyled>
      <img src={photo} alt="Nasa photograph of the day" />
      <h1>{title}</h1>
      <p>{text}</p>
    </ContentStyled>
  )
}