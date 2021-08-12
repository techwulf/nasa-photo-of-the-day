import React from 'react';

export default function Footer(props){
  const {copyright, date} = props;
  return (
    <div className="content">
      <h4>{date}</h4>
      <h4>{copyright}</h4>
    </div>
  )
}