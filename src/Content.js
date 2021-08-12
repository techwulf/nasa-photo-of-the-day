import React from 'react';

export default function Content(props){
  const {photo, title, text} = props;
  return (
    <div className="content">
      <img src={photo} alt="Nasa photograph of the day" />
      <h1>{title}</h1>
      <p>{text}</p>
    </div>
  )
}