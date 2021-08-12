import React from "react";
import "./App.css";
import {apiKey, apod} from './constants';

import Header from './Header';
import Content from './Content';
import Footer from './Footer';

function App() {
  return (
    <div className="App">
      <Header /> 
      <Content />
      <Footer />
    </div>
  );
}

export default App;
