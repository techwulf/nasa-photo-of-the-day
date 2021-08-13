import React, {useState,useEffect} from "react";
import axios from 'axios';
import "./App.css";
import {apiKey} from './constants';

import Header from './Header';
import Content from './Content';
import Footer from './Footer';

function App() {
  const [nasa, setNasa] = useState(null);

  useEffect(() => {
    axios.get(`https://api.nasa.gov/planetary/apod?api_key=${apiKey}`)
      .then(res => {
        setNasa(res.data);
      })
      .catch(err => {console.error(err)});
  },[]);

  return (
    <div className="App">
      <Header /> 
      {nasa && 
      <>
        <Content photo={nasa.url} title={nasa.title} text={nasa.explanation}/>
        <Footer copyright={nasa.copyright} date={nasa.date}/>
      </>
      }
    </div>
  );
}

export default App;
